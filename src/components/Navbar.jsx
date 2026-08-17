import React from 'react';
import { ShieldCheck, Heart, Globe, Menu, X, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/content';

export default function Navbar({ activePage, setActivePage, lang, setLang, openVinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = siteData.translations[lang].nav;

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'story', label: t.ourStory },
    { id: 'impact', label: t.ourImpact },
    { id: 'transparency', label: t.transparency },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
          Association Loi 1901
        </span>
        <span>
          {lang === 'fr' 
            ? "100% des bénéfices financent des repas pour les enfants en Afrique (RNA: W2B2001993)" 
            : "100% of profits go directly to feeding children in Africa (RNA: W2B2001993)"}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 p-0.5 shadow-md transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <Heart className="w-3.5 h-3.5 text-blue-500 absolute bottom-1.5 right-1.5 fill-blue-500 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">CHECK CARS VIN</span>
              </div>
              <p className="text-[11px] font-bold text-blue-600 tracking-wide">
                ASSOCIATION • FRANCE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activePage === link.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-white/80'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Meal Counter Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>{t.mealsBadge}</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm"
              title="Change Language / Changer la langue"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => openVinModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.checkVinBtn}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-2.5 py-1 rounded bg-white border border-slate-300 text-xs font-bold text-blue-600"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-white border border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                  activePage === link.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 bg-blue-50 rounded-lg text-blue-700 text-xs font-semibold">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {t.mealsBadge}
              </span>
              <span className="text-[10px] text-slate-500">100% Profits to Kids</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openVinModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center font-bold text-base shadow-md"
            >
              {t.checkVinBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
