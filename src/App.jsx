import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VinCheckerModal from './components/VinCheckerModal';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurImpact from './pages/OurImpact';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('fr'); // Default French language (Association in France)
  const [isVinModalOpen, setIsVinModalOpen] = useState(false);
  const [selectedVin, setSelectedVin] = useState('');

  const openVinModal = (vin = '') => {
    setSelectedVin(vin);
    setIsVinModalOpen(true);
  };

  const closeVinModal = () => {
    setIsVinModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1329] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        lang={lang}
        setLang={setLang}
        openVinModal={openVinModal}
      />

      {/* Main Page View Renderer */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home
            lang={lang}
            openVinModal={openVinModal}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'story' && (
          <OurStory
            lang={lang}
            openVinModal={openVinModal}
          />
        )}

        {activePage === 'impact' && (
          <OurImpact
            lang={lang}
            openVinModal={openVinModal}
          />
        )}

        {activePage === 'transparency' && (
          <Transparency
            lang={lang}
            openVinModal={openVinModal}
          />
        )}

        {activePage === 'contact' && (
          <Contact
            lang={lang}
          />
        )}
      </main>

      {/* Interactive VIN Report & Impact Modal */}
      <VinCheckerModal
        isOpen={isVinModalOpen}
        onClose={closeVinModal}
        initialVin={selectedVin}
        lang={lang}
      />

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        lang={lang}
      />

    </div>
  );
}
