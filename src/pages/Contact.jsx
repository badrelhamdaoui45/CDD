import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/content';

export default function Contact({ lang = 'en' }) {
  const info = siteData.associationInfo;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: lang === 'fr' ? "Combien de temps faut-il pour recevoir le rapport VIN ?" : "How long does it take to get the VIN report?",
      a: lang === 'fr' 
        ? "Les rapports sont générés instantanément en moins de 60 secondes sur votre écran et envoyés directement par e-mail en version PDF." 
        : "Reports are generated instantly in under 60 seconds on screen and delivered straight to your email as a PDF."
    },
    {
      q: lang === 'fr' ? "Comment garantissez-vous que 100% des bénéfices vont aux enfants ?" : "How do you guarantee 100% of profits go to child meal programs?",
      a: lang === 'fr'
        ? "Check VIN Cars est une association à but non lucratif déclarée en France (Loi 1901, RNA: W751239840). Nos statuts nous interdisent la redistribution de bénéfices privés. Nos comptes sont audités et publiés chaque année."
        : "Check VIN Cars is a registered non-profit association in France (Loi 1901, RNA: W751239840). By law, net proceeds cannot be distributed privately and must fund our published charitable purpose."
    },
    {
      q: lang === 'fr' ? "Où trouver le numéro VIN de mon véhicule ?" : "Where can I find my vehicle's 17-character VIN?",
      a: lang === 'fr'
        ? "Le VIN se trouve sur votre Carte Grise (champ E), sur le coin bas de votre pare-brise côté conducteur, ou sur le montant de la porte conducteur."
        : "The 17-character VIN is located on your vehicle registration document (Carte Grise field E), driver side windshield corner, or driver door pillar."
    },
    {
      q: lang === 'fr' ? "Puis-je obtenir un reçu fiscal pour mon achat ?" : "Can I get a tax receipt for my purchase?",
      a: lang === 'fr'
        ? "Oui ! Un reçu d'achat conforme aux directives d'aide humanitaire d'association vous est délivré avec votre rapport PDF."
        : "Yes! A non-profit purchase & impact receipt compliant with association directives is issued automatically."
    },
    {
      q: lang === 'fr' ? "Quelles informations contient le rapport ?" : "What information is included in the full report?",
      a: lang === 'fr'
        ? "Historique des accidents, vérification kilométrique (anti-fraude), statut de la carte grise, contrôle de vol (fichiers police/Interpol), et rappels constructeur."
        : "Accident history, verified odometer mileage timeline, title/carte grise status, stolen vehicle registry check (police & Interpol), and manufacturer safety recalls."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-8 bg-slate-50">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>{lang === 'fr' ? "CONTACT & ASSISTANCE" : "CONTACT & HELP"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'fr' ? "Nous Sommes à Votre Écoute" : "We Are Here to Help"}
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {lang === 'fr'
            ? "Une question sur votre rapport VIN ou sur le fonctionnement de l'association ? Écrivez-nous !"
            : "Have a question regarding your VIN report or association operations? Reach out to us anytime."}
        </p>
      </section>

      {/* Main Grid: Contact Form & FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form Box */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-6 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>{lang === 'fr' ? "Formulaire de Contact Direct" : "Direct Inquiry Form"}</span>
            </h2>

            {formSubmitted ? (
              <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'fr' ? "Message Envoyé avec Succès !" : "Message Sent Successfully!"}
                </h3>
                <p className="text-slate-600 text-sm">
                  {lang === 'fr'
                    ? "Notre équipe d'assistance associative vous répondra dans un délai de 24 heures."
                    : "Our association team will get back to you within 24 hours."}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 border border-slate-300"
                >
                  {lang === 'fr' ? "Envoyer un autre message" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">{lang === 'fr' ? "Nom & Prénom" : "Full Name"}</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jean.dupont@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">{lang === 'fr' ? "Sujet de votre demande" : "Subject"}</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                    <option>{lang === 'fr' ? "Assistance Rapport VIN" : "VIN Report Assistance"}</option>
                    <option>{lang === 'fr' ? "Demande de Reçu Fiscal" : "Tax Receipt Request"}</option>
                    <option>{lang === 'fr' ? "Partenariat Associatif" : "Association Partnership"}</option>
                    <option>{lang === 'fr' ? "Presse & Média" : "Press & Media"}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={lang === 'fr' ? "Précisez votre demande ou le numéro VIN concerné..." : "How can we assist you?"}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'fr' ? "Envoyer le Message" : "Send Message"}</span>
                </button>
              </form>
            )}

            {/* HQ Direct Info */}
            <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{info.headquarters}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{info.email}</span>
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <span>{lang === 'fr' ? "Foire Aux Questions (FAQ)" : "Frequently Asked Questions"}</span>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
