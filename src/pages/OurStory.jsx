import React from 'react';
import { BookOpen, ShieldCheck, Heart, Users, Award, CheckCircle2, ArrowRight, Building2, Globe2 } from 'lucide-react';
import { siteData } from '../data/content';
import { trackVinVerification } from '../utils/gtm';

export default function OurStory({ lang = 'en', openVinModal }) {
  const info = siteData.associationInfo;

  return (
    <div className="space-y-16 pb-20 pt-8 bg-slate-50">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>{lang === 'fr' ? "NOTRE HISTOIRE & ORIGINES" : "OUR STORY & ORIGINS"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'fr' 
            ? "L'Histoire derrière Check Cars VIN Association" 
            : "The Story Behind Check Cars VIN Association"}
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {lang === 'fr'
            ? "Comment nous avons transformé un outil indispensable de vérification automobile en un levier d'aide alimentaire durable pour les enfants en Afrique."
            : "How we turned an essential car buyer tool into a powerful, sustainable meal program for children across Africa."}
        </p>
      </section>

      {/* Main Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-slate-700 leading-relaxed text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {lang === 'fr' ? "Un problème en Europe, une urgence en Afrique." : "A Need in Europe, An Urgency in Africa."}
            </h2>

            <p>
              {lang === 'fr'
                ? "Chaque année en Europe, des millions de personnes achètent des véhicules d'occasion en espérant éviter les vices cachés, arnaques au kilométrage ou voitures volées. De l'autre côté de la Méditerranée, des milliers d'enfants manquent l'école chaque jour car ils se couchent la faim au ventre."
                : "Every year across Europe, millions of car buyers search vehicle history reports to avoid fraud, mileage rollbacks, or stolen cars. At the same time, thousands of young children miss school daily simply because they lack access to basic nutrition."}
            </p>

            <p>
              {lang === 'fr'
                ? "Fondée à Paris sous le régime des associations loi 1901, Check Cars VIN est née d'une idée simple mais radicale : réunir des experts de la donnée automobile et des acteurs humanitaires pour créer un modèle d'action solidaire à impact direct."
                : "Founded in Paris as a registered non-profit association (Loi 1901), Check Cars VIN was born from a simple yet radical idea: bridge automotive technology with direct child hunger relief."}
            </p>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2 text-sm text-blue-900">
              <p className="font-bold flex items-center gap-2 text-blue-800">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>{lang === 'fr' ? "Principe Fondateur :" : "Core Founding Principle:"}</span>
              </p>
              <p>
                {lang === 'fr'
                  ? "Chaque bénéfice net généré par l'accès aux bases de données automobiles est intégralement converti en repas scolaires chauds et équilibrés."
                  : "Every net profit generated from vehicle database queries is converted directly into warm, balanced school canteen meals."}
              </p>
            </div>
          </div>

          {/* Registration Specs Box */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{info.frenchLegalName}</h3>
                <p className="text-xs text-slate-500">Siège Social : {info.headquarters}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-slate-600 font-semibold">{lang === 'fr' ? "N° RNA Assocation" : "RNA Association No."}</span>
                <span className="font-mono font-bold text-blue-600 text-sm">{info.rna}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-slate-600 font-semibold">N° SIREN / SIRET</span>
                <span className="font-mono font-bold text-slate-900 text-sm">{info.siren}</span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-slate-600 font-semibold">{lang === 'fr' ? "Affiliation Fiscale" : "Tax Exemption Status"}</span>
                <span className="font-bold text-emerald-600 text-sm">Art. 200 CGI (France)</span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-slate-600 font-semibold">{lang === 'fr' ? "Frais d'Administration" : "Admin Overhead Fee"}</span>
                <span className="font-bold text-blue-600 text-sm">0,00 € (0%)</span>
              </div>
            </div>

            <button
              id="btn-verify-vin-story"
              data-gtm="verify-vin-story"
              onClick={() => {
                trackVinVerification('our_story');
                openVinModal();
              }}
              className="gtm-verify-vin-btn w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'fr' ? "Commander un Rapport & Participer" : "Order Report & Participate"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center">
          {lang === 'fr' ? "Nos 3 Engagements Solides" : "Our 3 Core Commitments"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl space-y-3 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-lg">{lang === 'fr' ? "1. Précision Données" : "1. Data Accuracy"}</h3>
            <p className="text-slate-600 text-sm">
              {lang === 'fr'
                ? "Connexions directes avec les bases officielles d'immatriculation et fichiers d'assurances."
                : "Direct integrations with official European vehicle registries and insurance databases."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 shadow-sm">
            <Globe2 className="w-8 h-8 text-sky-500" />
            <h3 className="font-bold text-slate-900 text-lg">{lang === 'fr' ? "2. Cantines Locales" : "2. Local School Canteens"}</h3>
            <p className="text-slate-600 text-sm">
              {lang === 'fr'
                ? "Achats des céréales et légumes auprès des agriculteurs locaux au Sénégal, Kenya et Burkina Faso."
                : "Direct grain and vegetable purchasing from local African farmers, driving local economies."}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-lg">{lang === 'fr' ? "3. Audit Public" : "3. Public Financial Audits"}</h3>
            <p className="text-slate-600 text-sm">
              {lang === 'fr'
                ? "Chaque bilan financier est publié en ligne avec justification comptable de chaque repas distribué."
                : "Annual balance sheets are published online with line-item verification for all meals distributed."}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
