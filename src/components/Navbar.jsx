import React from 'react';
import { ShieldCheck, Heart, Globe, Menu, X, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/content';
import { trackVinVerification } from '../utils/gtm';

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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 p-0.5 shadow-md group-hover:shadow-blue-500/20 transition-all transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-sky-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                  CHECK CARS VIN
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                  LOI 1901
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <span>Check a VIN</span>
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-blue-600 font-bold flex items-center gap-0.5">
                  <Heart className="w-3 h-3 fill-blue-600 inline" /> Feed a Child
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activePage === link.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Impact Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-xl text-xs font-semibold text-blue-800">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{t.mealsBadge}</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              title="Change Language / Changer la langue"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              id="btn-verify-vin-nav"
              data-gtm="verify-vin-nav"
              onClick={() => {
                trackVinVerification('nav');
                openVinModal();
              }}
              className="gtm-verify-vin-btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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
              id="btn-verify-vin-nav-mobile"
              data-gtm="verify-vin-nav-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                trackVinVerification('nav_mobile');
                openVinModal();
              }}
              className="gtm-verify-vin-btn w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center font-bold text-base shadow-md"
            >
              {t.checkVinBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
