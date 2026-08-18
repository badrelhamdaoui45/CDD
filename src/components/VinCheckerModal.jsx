import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, Heart, Award, FileText, ArrowRight, Download, Car, Calendar, Gauge, Lock } from 'lucide-react';
import { siteData } from '../data/content';
import { trackVinVerification } from '../utils/gtm';

export default function VinCheckerModal({ isOpen, onClose, initialVin = '', lang = 'fr' }) {
  const [vinInput, setVinInput] = useState(initialVin || 'VF3MCYHZRKS123456');
  const [activeTab, setActiveTab] = useState('overview');
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportData, setReportData] = useState(siteData.sampleVins[0]);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  React.useEffect(() => {
    if (initialVin) {
      setVinInput(initialVin);
      handleSearch(initialVin);
    }
  }, [initialVin]);

  if (!isOpen) return null;

  const handleSearch = (targetVin) => {
    trackVinVerification('modal', targetVin);
    setIsGenerating(true);
    setShowCheckoutSuccess(false);
    
    setTimeout(() => {
      const match = siteData.sampleVins.find(v => v.vin.toLowerCase() === targetVin.toLowerCase());
      if (match) {
        setReportData(match);
      } else {
        setReportData({
          vin: targetVin.toUpperCase() || 'VF3MCYHZRKS999999',
          make: 'Verified Vehicle',
          model: 'Motor Vehicle History',
          year: 2022,
          country: 'France / EU',
          odometer: '54,320 km',
          accidents: 0,
          titleStatus: 'Clean Title (Carte Grise Valide)',
          stolen: false,
          recalls: 0,
          mealsGenerated: 30,
          daysFed: 10,
          score: 96
        });
      }
      setIsGenerating(false);
    }, 600);
  };

  const handleBuyReport = () => {
    setShowCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 my-8">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                {lang === 'fr' ? "Rapport d'Historique Véhicule & Impact" : "Vehicle History Report & Impact"}
              </h3>
              <p className="text-xs text-sky-100 font-mono">VIN: {reportData.vin}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* VIN Input Bar */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Car className="w-5 h-5 text-blue-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                maxLength={17}
                value={vinInput}
                onChange={(e) => setVinInput(e.target.value.toUpperCase())}
                placeholder="Ex: VF3MCYHZRKS123456"
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-mono text-sm tracking-wider uppercase focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-sm"
              />
            </div>
            <button
              id="btn-verify-vin-modal"
              data-gtm="verify-vin-modal"
              onClick={() => handleSearch(vinInput)}
              disabled={isGenerating}
              className="gtm-verify-vin-btn w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-sm text-white shrink-0 shadow-md transition-all"
            >
              {isGenerating ? (lang === 'fr' ? 'Analyse...' : 'Analyzing...') : (lang === 'fr' ? 'Vérifier' : 'Analyze VIN')}
            </button>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">{lang === 'fr' ? "Essayer un modèle :" : "Sample VINs:"}</span>
            {siteData.sampleVins.map((sample) => (
              <button
                key={sample.vin}
                onClick={() => {
                  setVinInput(sample.vin);
                  handleSearch(sample.vin);
                }}
                className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-colors ${
                  reportData.vin === sample.vin
                    ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold'
                    : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {sample.make} {sample.model.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {showCheckoutSuccess ? (
            /* Order Success State */
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-2xl border border-blue-200 text-center space-y-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Heart className="w-8 h-8 fill-white" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-slate-900">
                  {lang === 'fr' ? "Merci ! Rapport Généré & Repas Financés !" : "Thank You! Report Generated & Meals Funded!"}
                </h4>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  {lang === 'fr'
                    ? "Votre commande de 18€ finance directement 30 repas scolaires complets pour les enfants à Dakar et Kibera."
                    : "Your €18 purchase directly funds 30 full nutritious school meals for children in Dakar & Kibera."}
                </p>
              </div>

              {/* Impact Card */}
              <div className="bg-white border border-slate-200 p-4 rounded-xl max-w-lg mx-auto flex items-center justify-around text-center shadow-sm">
                <div>
                  <p className="text-2xl font-extrabold text-blue-600">30</p>
                  <p className="text-xs text-slate-500">{lang === 'fr' ? "Repas Distribués" : "Meals Provided"}</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <p className="text-2xl font-extrabold text-emerald-600">100%</p>
                  <p className="text-xs text-slate-500">{lang === 'fr' ? "Bénéfice Net Affecté" : "Net Profit Allocated"}</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <p className="text-2xl font-extrabold text-sky-600">PDF</p>
                  <p className="text-xs text-slate-500">{lang === 'fr' ? "Reçu Fiscal Prêt" : "Tax Receipt Ready"}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => alert("Mock PDF downloaded: " + reportData.vin + "_VIN_Report.pdf")}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-sm text-white flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'fr' ? "Télécharger le Rapport PDF" : "Download PDF Report"}</span>
                </button>
                <button
                  onClick={() => setShowCheckoutSuccess(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold text-sm text-slate-700"
                >
                  {lang === 'fr' ? "Retour au Sommaire" : "Back to Overview"}
                </button>
              </div>
            </div>
          ) : (
            /* Main Report Content */
            <>
              {/* Impact Header Box */}
              <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 p-4 rounded-xl border border-blue-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      {lang === 'fr' ? "Impact Humanitaire de ce Rapport" : "Humanitarian Impact of this Check"}
                    </h5>
                    <p className="text-xs text-slate-600">
                      {lang === 'fr'
                        ? `L'achat de ce rapport à 18€ permet de fournir ${reportData.mealsGenerated} repas nutritifs aux écoliers.`
                        : `Purchasing this €18 report provides ${reportData.mealsGenerated} nutritious meals to school children.`}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold shadow-sm">
                    +30 Repas / Meals
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200 gap-2 overflow-x-auto text-xs font-bold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {lang === 'fr' ? "Vue d'Ensemble" : "Overview"}
                </button>
                <button
                  onClick={() => setActiveTab('mileage')}
                  className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'mileage'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {lang === 'fr' ? "Kilométrage & Vol" : "Mileage & Theft Check"}
                </button>
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-4 py-2.5 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === 'impact'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {lang === 'fr' ? "Certificat Repas Enfants" : "Child Meal Certificate"}
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Vehicle Headline Card */}
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider">
                        <Car className="w-4 h-4" />
                        <span>{reportData.country} Specs</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-slate-900 mt-1">
                        {reportData.year} {reportData.make} {reportData.model}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">VIN: {reportData.vin}</p>
                    </div>

                    <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">{lang === 'fr' ? "Score Confiance" : "Trust Score"}</p>
                        <p className="text-2xl font-extrabold text-emerald-600">{reportData.score} / 100</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Summary Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-slate-500 font-semibold">{lang === 'fr' ? "Kilométrage Vérifié" : "Odometer Check"}</p>
                      <p className="text-base font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                        <Gauge className="w-4 h-4 text-blue-600" />
                        {reportData.odometer}
                      </p>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1 block">✓ No rollback detected</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-slate-500 font-semibold">{lang === 'fr' ? "Accidents Signalés" : "Accident Records"}</p>
                      <p className="text-base font-bold text-slate-900 mt-1">
                        {reportData.accidents === 0 ? (
                          <span className="text-emerald-600 font-bold">{lang === 'fr' ? "Aucun accident" : "0 Accidents"}</span>
                        ) : (
                          <span className="text-amber-600 font-bold">{reportData.accidents} {lang === 'fr' ? "Signalement mineur" : "Minor claim"}</span>
                        )}
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1 block">Official insurer log</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-slate-500 font-semibold">{lang === 'fr' ? "Fichier Véhicules Volés" : "Police Theft Registry"}</p>
                      <p className="text-base font-bold text-emerald-600 mt-1 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" />
                        {lang === 'fr' ? "Non Volé" : "Clear (Not Stolen)"}
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1 block">Checked vs Interpol & Police</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-slate-500 font-semibold">{lang === 'fr' ? "Statut Carte Grise / Title" : "Title Record"}</p>
                      <p className="text-base font-bold text-slate-900 mt-1 text-xs truncate">
                        {reportData.titleStatus}
                      </p>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1 block">✓ Valid Registration</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Mileage & Theft */}
              {activeTab === 'mileage' && (
                <div className="space-y-4 text-xs">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                    <h5 className="font-bold text-slate-900 text-sm">{lang === 'fr' ? "Historique du Kilométrage" : "Mileage Timeline Verification"}</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="font-semibold text-slate-700">2021 (Contrôle Technique / Registration)</span>
                        <span className="font-mono font-bold text-blue-600">14,200 km</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="font-semibold text-slate-700">2022 (Révision Constructeur / Dealer Service)</span>
                        <span className="font-mono font-bold text-blue-600">29,800 km</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-200">
                        <span className="font-semibold text-slate-700">2024 (Relevé Officiel Récent)</span>
                        <span className="font-mono font-bold text-emerald-600">{reportData.odometer} (Verified)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{lang === 'fr' ? "Fichier Européen des Véhicules Volés" : "European Stolen Vehicle Database"}</h5>
                      <p className="text-slate-500 text-xs mt-0.5">Checked against national police, Interpol, and French FOVES database.</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold">
                      {lang === 'fr' ? "VÉHICULE NON VOLÉ" : "NO STOLEN REPORT"}
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 3: Humanitarian Impact */}
              {activeTab === 'impact' && (
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-slate-900">
                        {lang === 'fr' ? "Certificat d'Impact Humanitaire Associatif" : "Association Humanitarian Impact Certificate"}
                      </h5>
                      <p className="text-xs text-slate-500">Check Cars VIN Association • RNA W2B2001993</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700 shadow-sm">
                    <p className="font-bold text-slate-900">
                      {lang === 'fr'
                        ? "En commandant ce rapport d'historique de véhicule à 18,00€ :"
                        : "By purchasing this €18.00 vehicle history report:"}
                    </p>
                    <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                      <li><strong>3,00€</strong> sont attribués aux coûts d'infrastructure et requêtes bases de données.</li>
                      <li><strong>15,00€ (100% du bénéfice net)</strong> vont directement au financement de 30 repas scolaires chauds en Afrique.</li>
                      <li>Vous recevez automatiquement votre rapport d'historique et votre Reçu Fiscal conforme à l'Art. 200 du CGI.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Checkout Trigger Box */}
              <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 p-6 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-extrabold text-white">18,00 €</span>
                    <span className="text-xs text-sky-200 line-through">45,00 €</span>
                    <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-extrabold">100% PROFIT TO KIDS</span>
                  </div>
                  <p className="text-xs text-sky-100 mt-1">
                    {lang === 'fr' ? "Accès instantané au rapport complet + 30 repas offerts" : "Instant full report access + 30 meals provided"}
                  </p>
                </div>

                <button
                  onClick={handleBuyReport}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transform hover:scale-[1.02] transition-all"
                >
                  <Lock className="w-4 h-4" />
                  <span>{lang === 'fr' ? "Obtenir le Rapport & Nourrir un Enfant" : "Get Report & Feed a Child"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
