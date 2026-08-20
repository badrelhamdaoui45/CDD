import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VinCheckerModal from './components/VinCheckerModal';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurImpact from './pages/OurImpact';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';

const PAGE_PATHS = {
  home: '/',
  story: '/our-story',
  impact: '/our-impact',
  transparency: '/transparency',
  contact: '/contact',
};

const PATH_TO_PAGE = {
  '/': 'home',
  '/our-story': 'story',
  '/story': 'story',
  '/our-impact': 'impact',
  '/impact': 'impact',
  '/transparency': 'transparency',
  '/contact': 'contact',
};

const getPageFromUrl = () => {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (PATH_TO_PAGE[path]) return PATH_TO_PAGE[path];

  const hash = window.location.hash.toLowerCase().replace('#', '');
  if (hash && PATH_TO_PAGE['/' + hash]) return PATH_TO_PAGE['/' + hash];

  return 'home';
};

export default function App() {
  const [activePage, setActivePageState] = useState(getPageFromUrl);
  const [lang, setLang] = useState('en'); // Default English language
  const [isVinModalOpen, setIsVinModalOpen] = useState(false);
  const [selectedVin, setSelectedVin] = useState('');

  const setActivePage = (page, pushHistory = true) => {
    setActivePageState(page);
    if (pushHistory) {
      const targetPath = PAGE_PATHS[page] || '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setActivePageState(getPageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
