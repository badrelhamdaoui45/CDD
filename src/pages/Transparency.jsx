import React from 'react';
import { Award, FileText, CheckCircle2, ShieldCheck, Download, PieChart, Layers, HelpCircle } from 'lucide-react';
import { siteData } from '../data/content';

export default function Transparency({ lang = 'fr', openVinModal }) {
  const fin = siteData.financialBreakdown;
  const info = siteData.associationInfo;

  return (
    <div className="space-y-16 pb-20 pt-8 bg-slate-50">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase">
          <Award className="w-4 h-4 text-blue-600" />
          <span>{lang === 'fr' ? "TRANSPARENCE FINANCIÈRE TOTALE" : "FULL FINANCIAL TRANSPARENCY"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'fr' ? "Où Va Chaque Euro de Votre Vérification ?" : "Where Does Every Euro of Your VIN Check Go?"}
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {lang === 'fr'
            ? "100% de nos bénéfices nets sont directement convertis en repas pour les enfants. Pas d'intermédiaires, pas de frais cachés."
            : "100% of our net profits are converted directly into school meals. No middlemen, no hidden fees."}
        </p>
      </section>

      {/* Financial Breakdown Chart Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {lang === 'fr' ? "Décomposition du Prix du Rapport (18,00 €)" : "Report Price Breakdown (€18.00)"}
            </h2>
            <p className="text-slate-600 text-sm">
              {lang === 'fr' ? "Transparence absolue et vérifiable sur chaque transaction." : "Absolute line-item breakdown on every transaction."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tech Cost Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'fr' ? "1. Infrastructures & API" : "1. Infrastructure & API"}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 font-mono font-bold text-xs">
                  3,00 € (16.6%)
                </span>
              </div>
              <p className="text-2xl font-extrabold text-slate-900">3,00 €</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'fr'
                  ? "Coût strict des requêtes auprès des serveurs d'immatriculation et hébergement web."
                  : "Direct costs for official motor vehicle registry queries and cloud servers."}
              </p>
            </div>

            {/* Net Profit Food Allocation */}
            <div className="bg-blue-50/60 p-6 rounded-2xl border-2 border-blue-600 space-y-3 relative shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {lang === 'fr' ? "2. Financement Repas" : "2. Meal Allocation"}
                </span>
                <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono font-bold text-xs">
                  15,00 € (83.4%)
                </span>
              </div>
              <p className="text-3xl font-extrabold text-blue-700 font-mono">15,00 €</p>
              <div className="space-y-1">
                <p className="text-xs font-bold text-emerald-600">✓ 100% du Bénéfice Net (30 Repas Nutritifs)</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {lang === 'fr'
                    ? "Chaque centime net finance des céréales, légumes et lait dans les cantines scolaires."
                    : "Every net cent buys grains, vegetables, and milk in primary school canteens."}
                </p>
              </div>
            </div>

            {/* Admin Fees Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {lang === 'fr' ? "3. Frais d'Administration" : "3. Admin Overhead"}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 font-mono font-bold text-xs">
                  0,00 € (0%)
                </span>
              </div>
              <p className="text-2xl font-extrabold text-emerald-600">0,00 €</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'fr'
                  ? "Opérations bénévoles et structure d'association ultra-légère. Aucun salaire prélevé."
                  : "Volunteer operations and lean association structure. Zero salary overhead."}
              </p>
            </div>

          </div>

          {/* Tax Receipt Notice Box */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-base">
                {lang === 'fr' ? "Défiscalisation & Reçu Fiscal (France)" : "Tax Receipt Disclosures (France & EU)"}
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                {info.taxReceiptNotice}
              </p>
            </div>

            <button
              onClick={() => alert("Mock Tax Receipt sample downloaded for Check VIN Cars Association.")}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold flex items-center gap-2 shrink-0 shadow-sm"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>{lang === 'fr' ? "Exemple de Reçu Fiscal (PDF)" : "Sample Tax Receipt (PDF)"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* Official Legal Registry Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          {lang === 'fr' ? "Informations Légales & Enregistrement" : "Official Legal & Registration Credentials"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Registre National des Associations (RNA)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Check Cars VIN est enregistrée à la Préfecture de Police sous le numéro RNA <strong>{info.rna}</strong>. Statut vérifiable sur le Journal Officiel des Associations.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Rapports Financiers Annuels Audités</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Consultez nos bilans comptables annuels pour vérifier l'exactitude des sommes transférées aux programmes alimentaires partenaires.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
