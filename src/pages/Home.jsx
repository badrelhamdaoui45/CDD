import React, { useState } from 'react';
import { ShieldCheck, Heart, ArrowRight, CheckCircle2, Search, Zap, Eye, Award, Sparkles, Sliders, Users, BookOpen, Layers } from 'lucide-react';
import { siteData } from '../data/content';
import { trackVinVerification } from '../utils/gtm';

export default function Home({ lang = 'en', openVinModal, setActivePage }) {
  const [vinInput, setVinInput] = useState('');
  const [sliderReports, setSliderReports] = useState(1);
  const t = siteData.translations[lang];

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    trackVinVerification('hero', vinInput || 'VF3MCYHZRKS123456');
    openVinModal(vinInput || 'VF3MCYHZRKS123456');
  };

  const calculatedMeals = sliderReports * 30;
  const calculatedDays = sliderReports * 10;

  return (
    <div className="space-y-24 pb-20 bg-slate-50">
      
      {/* HERO SECTION WITH USER UPLOADED IMAGE */}
      <section className="relative overflow-hidden pt-10 lg:pt-16 pb-16 bg-radial-blue bg-white border-b border-slate-200">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Hero Copy & Form */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Registered Association Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-extrabold tracking-wide text-blue-700 uppercase">
                  {lang === 'fr' ? "ASSOCIATION FRANÇAISE LOI 1901 • RNA W2B2001993" : "FRENCH NON-PROFIT ASSOCIATION • RNA W2B2001993"}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {t.hero.headline.split('.')[0]}. <span className="text-gradient-blue">{t.hero.headline.split('.')[1]}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                {t.hero.subheadline}
              </p>

              {/* Interactive VIN Form */}
              <form onSubmit={handleHeroSubmit} className="pt-2 max-w-2xl mx-auto lg:mx-0">
                <div className="p-2 bg-white border-2 border-blue-600 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full flex-1">
                    <Search className="w-5 h-5 text-blue-600 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      maxLength={17}
                      value={vinInput}
                      onChange={(e) => setVinInput(e.target.value.toUpperCase())}
                      placeholder={t.hero.placeholderVin}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-xl text-slate-900 font-mono text-sm sm:text-base placeholder-slate-400 uppercase focus:outline-none focus:ring-2 focus:ring-blue-600 tracking-wider"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-verify-vin-hero"
                    data-gtm="verify-vin-hero"
                    className="gtm-verify-vin-btn w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-700 hover:to-sky-600 font-extrabold text-white text-base shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shrink-0"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>{t.hero.primaryCta}</span>
                  </button>
                </div>

                {/* Sample VIN Triggers */}
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 flex-wrap">
                  <span className="font-semibold text-slate-700">{t.hero.trySample}</span>
                  {siteData.sampleVins.slice(0, 3).map(sample => (
                    <button
                      key={sample.vin}
                      type="button"
                      onClick={() => {
                        trackVinVerification('hero_sample', sample.vin);
                        openVinModal(sample.vin);
                      }}
                      className="gtm-verify-vin-sample px-2.5 py-1 rounded bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-500 text-blue-700 font-mono font-semibold transition-colors shadow-sm"
                    >
                      {sample.make} {sample.model.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </form>

              {/* Trust Line & CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold text-sm transition-colors group"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="text-xs font-bold text-blue-800 tracking-wide uppercase flex items-center gap-2">
                  <span className="text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                    Transparent • 100% Profits Feed Children
                  </span>
                </div>
              </div>

            </div>

            {/* Right Col: Featured Uploaded Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img 
                  src="/1qGzW(1).jpg" 
                  alt="Children wearing Check Cars VIN Association caps with meals"
                  className="w-full h-[400px] lg:h-[460px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                
                {/* Floating Badge on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Real Impact • Ground Operations</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-700 text-[11px] font-mono font-bold shadow-md">
                    RNA W2B2001993
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 text-xs shadow-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">
                        {lang === 'fr' ? "Chaque Vérification = Repas Nutritifs" : "Every Check = Real Nutritious Meals"}
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        {lang === 'fr' 
                          ? "Écoliers soutenus à Dakar et Kibera portant les casquettes Check Cars VIN Association."
                          : "Schoolchildren supported in Dakar & Kibera wearing Check Cars VIN caps."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.howItWorks.sectionTitle}
          </h2>
          <p className="text-slate-600 text-base">
            {lang === 'fr'
              ? "Obtenez votre rapport complet sur l'historique du véhicule en 3 étapes simples et financez des repas d'un simple clic."
              : "Get your complete vehicle history report in 3 simple steps and fund school meals in one click."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="glass-panel p-8 rounded-2xl relative group hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.howItWorks.step1Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.howItWorks.step1Desc}
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-panel p-8 rounded-2xl relative group hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.howItWorks.step2Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.howItWorks.step2Desc}
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-panel p-8 rounded-2xl relative group hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-300 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-blue-600 fill-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.howItWorks.step3Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.howItWorks.step3Desc}
            </p>
          </div>

        </div>
      </section>

      {/* DUAL UPLOADED PHOTO SHOWCASE & CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase">
              <Heart className="w-4 h-4 fill-blue-600" />
              <span>{lang === 'fr' ? "Photos du Terrain en Afrique" : "Photos from the Ground in Africa"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t.impactSection.headline}
            </h2>
            <p className="text-slate-600 text-base">
              "{t.impactSection.supportingLine}"
            </p>
          </div>

          {/* Dual Uploaded Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Photo 1: 1qGzW(1).jpg */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
              <img 
                src="/1qGzW(1).jpg" 
                alt="Children holding meal plates wearing Check Cars VIN caps"
                className="w-full h-72 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-xs shadow-md">
                <p className="font-extrabold text-slate-900">
                  {lang === 'fr' ? "Repas Nutritifs en Milieu Scolaire" : "Nutritious School Meals"}
                </p>
                <p className="text-slate-600 mt-0.5">
                  {lang === 'fr' 
                    ? "30 repas complets financés par chaque rapport d'historique commandé." 
                    : "30 full school meals funded by every single vehicle check."}
                </p>
              </div>
            </div>

            {/* Photo 2: ZzraU.jpg */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
              <img 
                src="/ZzraU.jpg" 
                alt="Happy students with Check Cars VIN Association caps eating lunch"
                className="w-full h-72 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-xs shadow-md">
                <p className="font-extrabold text-slate-900">
                  {lang === 'fr' ? "100% du Bénéfice Net Affecté" : "100% Net Profit Dedicated"}
                </p>
                <p className="text-slate-600 mt-0.5">
                  {lang === 'fr' 
                    ? "Aucun frais d'administration prélevé sur votre contribution." 
                    : "Zero middleman administrative fees taken from your report purchase."}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Calculator Box */}
          <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm">
            <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-600" />
              <span>{t.impactSection.calculatorTitle}</span>
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-700">{t.impactSection.calculatorLabel}</span>
                <span className="text-blue-600 font-bold text-lg font-mono">{sliderReports} {sliderReports === 1 ? 'Report' : 'Reports'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={sliderReports}
                onChange={(e) => setSliderReports(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>1 report</span>
                <span>25 reports</span>
                <span>50 reports</span>
              </div>
            </div>

            {/* Calculator Output Display */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <p className="text-3xl font-extrabold text-blue-600 font-mono">{calculatedMeals}</p>
                <p className="text-xs text-slate-600 font-bold mt-1">{t.impactSection.mealsProduced}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <p className="text-3xl font-extrabold text-emerald-600 font-mono">{calculatedDays} {lang === 'fr' ? 'jours' : 'days'}</p>
                <p className="text-xs text-slate-600 font-bold mt-1">{t.impactSection.daysOfSchoolMeals}</p>
              </div>
            </div>

            <button
              id="btn-verify-vin-impact"
              data-gtm="verify-vin-impact"
              onClick={() => {
                trackVinVerification('impact_calculator');
                openVinModal();
              }}
              className="gtm-verify-vin-btn w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
            >
              <span>{lang === 'fr' ? `Vérifier ${sliderReports} VIN & Nourrir des Enfants` : `Check ${sliderReports} VIN & Feed Children`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE CHECK CARS VIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.whyChooseUs.sectionTitle}
          </h2>
          <p className="text-slate-600 text-base mt-2">
            {lang === 'fr'
              ? "Allier sérénité automobile et soutien humanitaire direct."
              : "Combining automotive peace of mind with direct humanitarian aid."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-blue-600 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">{t.whyChooseUs.item1Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.whyChooseUs.item1Desc}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-sky-500 shadow-sm">
            <Zap className="w-8 h-8 text-sky-500" />
            <h3 className="text-lg font-bold text-slate-900">{t.whyChooseUs.item2Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.whyChooseUs.item2Desc}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-blue-500 shadow-sm">
            <Eye className="w-8 h-8 text-blue-500" />
            <h3 className="text-lg font-bold text-slate-900">{t.whyChooseUs.item3Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.whyChooseUs.item3Desc}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-blue-600 shadow-sm">
            <Heart className="w-8 h-8 text-blue-600 fill-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">{t.whyChooseUs.item4Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.whyChooseUs.item4Desc}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-emerald-500 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">{t.whyChooseUs.item5Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.whyChooseUs.item5Desc}</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 border-l-4 border-l-purple-500 bg-purple-50/50 shadow-sm">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-900">{lang === 'fr' ? "Reçu Fiscal Émis" : "Tax Deductible Receipt"}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'fr' 
                ? "Bénéficiez du cadre juridique des dons aux associations en France (Article 200 du CGI)." 
                : "Eligible for non-profit association receipts under French tax framework."}
            </p>
          </div>

        </div>
      </section>

      {/* MISSION STATEMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
          <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mx-auto">
            <Layers className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.missionStatement.headline}
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line max-w-2xl mx-auto font-medium">
            {t.missionStatement.bodyText}
          </p>

          <div className="pt-2">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-mono text-xs font-bold">
              {t.missionStatement.associationBadge}
            </span>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.bottomCta.headline}
          </h2>

          <div className="pt-2">
            <button
              id="btn-verify-vin-bottom"
              data-gtm="verify-vin-bottom"
              onClick={() => {
                trackVinVerification('bottom_cta');
                openVinModal();
              }}
              className="gtm-verify-vin-btn px-10 py-4 rounded-xl bg-white text-blue-800 hover:bg-slate-100 font-extrabold text-lg shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-3"
            >
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              <span>{t.bottomCta.button}</span>
            </button>
          </div>

          <p className="text-sky-100 text-xs sm:text-sm font-semibold tracking-wide">
            {t.bottomCta.supportingText}
          </p>
        </div>
      </section>

    </div>
  );
}
