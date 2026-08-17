import React from 'react';
import { Heart, Globe, Award, Users, CheckCircle2, ArrowRight, MapPin, Utensils } from 'lucide-react';
import { siteData } from '../data/content';

export default function OurImpact({ lang = 'fr', openVinModal }) {
  const stats = siteData.impactStats;
  const regions = siteData.partnerRegions;

  return (
    <div className="space-y-20 pb-20 pt-8 bg-slate-50">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase">
          <Heart className="w-4 h-4 fill-blue-600 text-blue-600" />
          <span>{lang === 'fr' ? "NOTRE IMPACT EN AFRIQUE" : "OUR IMPACT IN AFRICA"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'fr' ? "Chaque Rapport VIN Change des Vies" : "Every VIN Report Changes Lives"}
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {lang === 'fr'
            ? "Découvrez les chiffres concrets, nos écoles partenaires et la nutrition assurée au quotidien grâce à votre soutien."
            : "Explore our real metrics, partner school canteens, and daily nutrition funded by your vehicle history checks."}
        </p>
      </section>

      {/* Global Impact Counter Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl text-center space-y-2 relative overflow-hidden shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 absolute top-4 right-4 animate-ping" />
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-700">
                {lang === 'fr' ? stat.frLabel : stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Impact Feature Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-xl">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Utensils className="w-4 h-4 text-blue-600" />
              <span>{lang === 'fr' ? "Programme Repas Scolaires" : "School Meal Program"}</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              {lang === 'fr'
                ? "Nourrir le Corps pour Éclairer l'Esprit"
                : "Nourishing Bodies to Empower Minds"}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              {lang === 'fr'
                ? "Un repas chaud à l'école est souvent la seule garantie de nutrition quotidienne pour un enfant en zone rurale. Les cantines soutenues par Check VIN Cars enregistrent une hausse de 42% du taux de scolarisation et une amélioration remarquable des résultats d'examens."
                : "A warm daily school lunch is often the single guaranteed nutritious meal for children in underserved communities. Schools supported by Check VIN Cars reports show a 42% increase in attendance and attendance retention."}
            </p>

            <div className="space-y-3 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{lang === 'fr' ? "Repas préparés le matin même par des cuisinières locales" : "Fresh morning preparation by local cooks"}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{lang === 'fr' ? "Apports enrichis en protéines, vitamines et fer" : "Fortified with protein, essential vitamins & iron"}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{lang === 'fr' ? "Approvisionnement direct auprès des coopératives agricoles" : "Direct purchasing from local farming cooperatives"}</span>
              </div>
            </div>
          </div>

          {/* Generated Photo / Visual Card */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <img 
              src="/ZzraU.jpg" 
              alt="Happy children receiving healthy school meals in Africa"
              className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-xs shadow-md">
              <p className="text-blue-700 font-bold text-sm">École Primaire de Thiès (Sénégal)</p>
              <p className="text-slate-700 font-medium mt-0.5">1 800 repas sains servis quotidiennement grâce à vos contrôles VIN.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Regional Partner Map Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900">
            {lang === 'fr' ? "Répartition des Cantines Partenaires" : "Partner School Canteens Network"}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {lang === 'fr' ? "Les zones prioritaires où intervient l'Association Check VIN Cars." : "Priority communities served directly by Check VIN Cars Association."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-4 border-t-4 border-t-blue-600 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                <h3 className="font-bold text-slate-900 text-lg">{region.country}</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>{lang === 'fr' ? "Écoles" : "Schools"}:</span>
                  <span className="font-bold text-slate-900">{region.schools}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{lang === 'fr' ? "Volume Repas" : "Daily Volume"}:</span>
                  <span className="font-bold text-blue-600 font-mono text-sm">{region.mealsDaily}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed font-medium">
                {region.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
