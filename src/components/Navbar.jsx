import React from 'react';
import { ShieldCheck, Heart, Globe, Menu, X, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/content';
import { trackVinVerification } from '../utils/gtm';

export default function Navbar({ activePage, setActivePage, lang, setLang, openVinModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = siteData.translations[lang].nav;

  const navLinks = [
    { id: 'home', label: t.home, path: '/' },
    { id: 'story', label: t.ourStory, path: '/our-story' },
    { id: 'impact', label: t.ourImpact, path: '/our-impact' },
    { id: 'transparency', label: t.transparency, path: '/transparency' },
    { id: 'contact', label: t.contact, path: '/contact' },
  ];

  const handleNavClick = (e, id) => {
    if (e) e.preventDefault();
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Brand in White & Blue */}
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0"
            aria-label="Check Cars VIN Home"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-sky-400 p-[2px] shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/35 transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center border border-blue-50">
                <ShieldCheck className="w-6 h-6 text-blue-600 stroke-[2.2]" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                  CHECK CARS VIN
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200/80 shadow-2xs">
                  LOI 1901
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                <span>Check a VIN</span>
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-blue-600 font-semibold flex items-center gap-1">
                  <Heart className="w-3 h-3 text-blue-600 fill-blue-600 inline" /> Feed a Child
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            aria-label="Main Navigation" 
            className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner/20"
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-xs border border-slate-200/70 font-bold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            
            {/* Impact Badge - Clickable to Our Impact */}
            <a
              href="/our-impact"
              onClick={(e) => handleNavClick(e, 'impact')}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/90 hover:bg-blue-100/80 border border-blue-200/80 rounded-xl text-xs font-bold text-blue-800 transition-colors shadow-2xs group cursor-pointer"
              title="View Impact"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span>{t.mealsBadge}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/70 text-slate-700 text-xs font-bold transition-all active:scale-95"
              title="Change Language / Changer la langue"
              aria-label="Toggle language"
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
              className="gtm-verify-vin-btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-sm font-bold shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
              <span>{t.checkVinBtn}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-xs font-bold text-blue-600 shadow-2xs"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-slate-300 shadow-2xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                  activePage === link.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="/our-impact"
              onClick={(e) => handleNavClick(e, 'impact')}
              className="flex items-center justify-between px-3.5 py-2.5 bg-blue-50 rounded-xl text-blue-700 text-xs font-semibold border border-blue-200/80"
            >
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {t.mealsBadge}
              </span>
              <span className="text-[10px] text-blue-600 font-bold bg-white px-2 py-0.5 rounded-md border border-blue-200">100% Profits to Kids</span>
            </a>

            <button
              id="btn-verify-vin-nav-mobile"
              data-gtm="verify-vin-nav-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                trackVinVerification('nav_mobile');
                openVinModal();
              }}
              className="gtm-verify-vin-btn w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center font-bold text-base shadow-md shadow-blue-600/25"
            >
              {t.checkVinBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
