import React from 'react';
import { ShieldCheck, Heart, Mail, Phone, MapPin, Award, CheckCircle, FileText } from 'lucide-react';
import { siteData } from '../data/content';

export default function Footer({ setActivePage, lang }) {
  const info = siteData.associationInfo;
  const t = siteData.translations[lang].footer;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm mt-auto">
      {/* Top Footer Banner */}
      <div className="bg-slate-950 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                {lang === 'fr' ? "Association Agréée sous Loi 1901" : "Official French Registered Association"}
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                RNA: {info.rna} • SIREN: {info.siren} • {info.taxReceiptNotice}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setActivePage('transparency'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'fr' ? "Voir Rapports Financiers" : "View Financial Audits"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
              C
            </div>
            <span className="font-extrabold text-lg text-white">CHECK CARS VIN</span>
          </div>
          <p className="text-slate-200 font-medium">{t.tagline}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{t.subtext}</p>
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold">
            <Heart className="w-4 h-4 fill-sky-400" />
            <span>100% Net Proceeds Feed Children</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h5 className="text-white font-bold text-sm tracking-wider uppercase">
            {lang === 'fr' ? "Navigation" : "Quick Links"}
          </h5>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <button onClick={() => { setActivePage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-blue-400 transition-colors">
                {lang === 'fr' ? "Accueil & Vérification VIN" : "Home & VIN Lookup"}
              </button>
            </li>
            <li>
              <button onClick={() => { setActivePage('story'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-blue-400 transition-colors">
                {lang === 'fr' ? "Notre Histoire" : "Our Story"}
              </button>
            </li>
            <li>
              <button onClick={() => { setActivePage('impact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-blue-400 transition-colors">
                {lang === 'fr' ? "Notre Impact en Afrique" : "Our Impact in Africa"}
              </button>
            </li>
            <li>
              <button onClick={() => { setActivePage('transparency'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-blue-400 transition-colors">
                {lang === 'fr' ? "Transparence & Finance" : "Financial Transparency"}
              </button>
            </li>
            <li>
              <button onClick={() => { setActivePage('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-blue-400 transition-colors">
                {lang === 'fr' ? "Contact & Support" : "Contact & Support"}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="space-y-3">
          <h5 className="text-white font-bold text-sm tracking-wider uppercase">
            {lang === 'fr' ? "Siège Social France" : "French Headquarters"}
          </h5>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{info.headquarters}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${info.email}`} className="hover:text-white transition-colors">{info.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{info.phone}</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Trust & Legal */}
        <div className="space-y-3">
          <h5 className="text-white font-bold text-sm tracking-wider uppercase">
            {lang === 'fr' ? "Transparence Garantie" : "Trust & Transparency"}
          </h5>
          <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>Zero Middlemen Fees</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {lang === 'fr' 
                ? "Chaque vérification VIN finance directement 30 repas chauds en milieu scolaire." 
                : "Each VIN check funds 30 warm meals in primary school canteens directly."}
            </p>
          </div>
        </div>

      </div>

      {/* Legal Bar */}
      <div className="bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.rights}</p>
          <p className="max-w-xl text-center md:text-right text-[11px] text-slate-400">
            {t.legalNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
