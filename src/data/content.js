export const siteData = {
  associationInfo: {
    name: "Check Cars VIN Association",
    frenchLegalName: "Association Check Cars VIN (Loi 1901)",
    rna: "W2B2001993",
    siren: "752 341 826",
    headquarters: "42 Avenue des Champs-Élysées, 75008 Paris, France",
    email: "contact@checkcarsvin.com",
    phone: "+33 (0)1 89 40 12 34",
    taxReceiptNotice: "Conforme à l'article 200 du Code Général des Impôts - Reçu Fiscal émis automatiquement.",
  },

  sampleVins: [
    {
      vin: "VF3MCYHZRKS123456",
      make: "Peugeot",
      model: "3008 GT Line 1.5 BlueHDi",
      year: 2021,
      country: "France",
      odometer: "48,250 km",
      accidents: 0,
      titleStatus: "Clean Title (Carte Grise Valide)",
      stolen: false,
      recalls: 0,
      mealsGenerated: 30,
      daysFed: 10,
      score: 98
    },
    {
      vin: "5YJ3E1EA8KF987654",
      make: "Tesla",
      model: "Model 3 Long Range AWD",
      year: 2022,
      country: "France / USA",
      odometer: "32,100 km",
      accidents: 0,
      titleStatus: "Clean Title (Première Main)",
      stolen: false,
      recalls: 1,
      mealsGenerated: 30,
      daysFed: 10,
      score: 95
    },
    {
      vin: "WBA8E11000K741852",
      make: "BMW",
      model: "320i M Sport Steptronic",
      year: 2020,
      country: "Germany",
      odometer: "74,500 km",
      accidents: 1,
      titleStatus: "Repaired Minor Fender - Inspection Passed",
      stolen: false,
      recalls: 0,
      mealsGenerated: 30,
      daysFed: 10,
      score: 88
    },
    {
      vin: "VF1RJA00067891234",
      make: "Renault",
      model: "Clio V 1.0 TCe Intens",
      year: 2023,
      country: "France",
      odometer: "18,900 km",
      accidents: 0,
      titleStatus: "Clean Title",
      stolen: false,
      recalls: 0,
      mealsGenerated: 30,
      daysFed: 10,
      score: 99
    }
  ],

  translations: {
    en: {
      nav: {
        home: "Home",
        ourStory: "Our Story",
        ourImpact: "Our Impact",
        transparency: "Transparency",
        contact: "Contact",
        checkVinBtn: "Check a VIN",
        mealsBadge: "142,850 Meals Served"
      },
      hero: {
        headline: "Check a VIN. Feed a Child.",
        subheadline: "Every vehicle history report you buy helps put a nutritious meal on the table for a child in Africa. 100% of our profits go directly to feeding kids.",
        primaryCta: "Check a VIN Now",
        secondaryCta: "See How It Works",
        trustLine: "Transparent • Instant Reports • 100% of Profits Feed Children",
        placeholderVin: "Enter 17-character VIN (e.g. VF3MCYHZRKS123456)",
        trySample: "Try sample VIN:",
        analyzing: "Querying European & Global databases...",
        instantResult: "Instant Report + 30 Nutritious Meals Funded"
      },
      howItWorks: {
        sectionTitle: "Simple. Transparent. Impactful.",
        step1Title: "1. Enter the VIN",
        step1Desc: "Type the 17-character Vehicle Identification Number of any car, SUV, or light truck.",
        step2Title: "2. Get Your Full Report",
        step2Desc: "Instant access to accident history, title status, odometer readings, theft records, and more.",
        step3Title: "3. We Feed a Child",
        step3Desc: "100% of the profit from your purchase is used to provide nutritious school meals for children in Africa."
      },
      impactSection: {
        headline: "Your VIN Check = Real Meals",
        bullet1: "1 VIN check = meals for a child for several days (30 nutritious meals)",
        bullet2: "Every report directly funds verified school lunch programs",
        bullet3: "No middlemen. No admin fees taken from your contribution.",
        supportingLine: "When you protect yourself with a reliable vehicle history report, you also protect a child’s future.",
        calculatorTitle: "Calculate Your Collective Impact",
        calculatorLabel: "Number of Vehicle History Reports Purchased:",
        mealsProduced: "Nutritious Meals Provided",
        daysOfSchoolMeals: "Days of Full Nutrition for Students",
        childrenFed: "Children Fed for a Whole Month"
      },
      whyChooseUs: {
        sectionTitle: "Vehicle Safety + Child Hunger Relief",
        item1Title: "Professional, accurate VIN reports",
        item1Desc: "Sourced directly from official European motor vehicle databases, police stolen registries, insurance records, and dealer networks.",
        item2Title: "Fast results (usually under 60 seconds)",
        item2Desc: "Get complete vehicle data delivered immediately to your screen and email inbox.",
        item3Title: "Clear, easy-to-read history",
        item3Desc: "Comprehensive dashboard with simple risk indicators, mileage graphs, and title checks.",
        item4Title: "100% of profits go to feeding African children",
        item4Desc: "We operate as a French registered non-profit association (Loi 1901) dedicated solely to child hunger relief.",
        item5Title: "Full transparency on where the money goes",
        item5Desc: "Every cent from net profit is tracked and audited annually. View our published financial reports anytime."
      },
      missionStatement: {
        headline: "One Association. Two Missions.",
        bodyText: "We exist to give car buyers peace of mind — and to make sure no child goes to bed hungry.\n\nEvery report purchased funds nutritious meals for children across communities in Africa. We keep our operations lean so that all net proceeds go straight to food programs.",
        associationBadge: "Declared French Association Loi 1901 • RNA W2B2001993 • SIREN 752 341 826"
      },
      bottomCta: {
        headline: "Ready to check a vehicle and feed a child?",
        button: "Start Your VIN Check",
        supportingText: "Secure • Instant • 100% of profits help feed African kids"
      },
      footer: {
        tagline: "Vehicle history reports that feed children.",
        subtext: "100% of profits support meal programs for kids in Africa.",
        legalNotice: "Check Cars VIN Association is a non-profit organization registered in France (Loi 1901, RNA: W2B2001993, SIREN: 752 341 826). Direct contributions & report proceeds support authorized school canteen initiatives in Dakar (Senegal), Nairobi (Kenya), and Ouagadougou (Burkina Faso).",
        rights: "© 2026 Check Cars VIN Association. All rights reserved."
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        ourStory: "Notre Histoire",
        ourImpact: "Notre Impact",
        transparency: "Transparence",
        contact: "Contact",
        checkVinBtn: "Vérifier un VIN",
        mealsBadge: "142 850 Repas Offerts"
      },
      hero: {
        headline: "Vérifiez un VIN. Nourrissez un Enfant.",
        subheadline: "Chaque rapport d'historique de véhicule acheté permet d'offrir des repas nutritifs à un enfant en Afrique. 100% de nos bénéfices vont directement à l'alimentation des enfants.",
        primaryCta: "Vérifier un VIN Maintenant",
        secondaryCta: "Comment Ça Marche",
        trustLine: "Transparent • Rapports Immédiats • 100% des Bénéfices Nourrissent des Enfants",
        placeholderVin: "Entrez le numéro VIN à 17 caractères (ex: VF3MCYHZRKS123456)",
        trySample: "Essayer un VIN de démonstration :",
        analyzing: "Interrogation des bases de données européennes et mondiales...",
        instantResult: "Rapport Immédiat + 30 Repas Nutritifs Financés"
      },
      howItWorks: {
        sectionTitle: "Simple. Transparent. Impactant.",
        step1Title: "1. Entrez le VIN",
        step1Desc: "Saisissez le numéro d'identification du véhicule à 17 caractères (NIV / VIN).",
        step2Title: "2. Obtenez votre Rapport Complet",
        step2Desc: "Accès instantané à l'historique des accidents, statut du titre, kilométrage, vol et rappels constructeur.",
        step3Title: "3. Nous Nourrissons un Enfant",
        step3Desc: "100% du bénéfice de votre achat est utilisé pour fournir des repas scolaires aux enfants en Afrique."
      },
      impactSection: {
        headline: "Votre Vérification VIN = Des Vrais Repas",
        bullet1: "1 vérification VIN = des repas pour un enfant pendant plusieurs jours (30 repas complets)",
        bullet2: "Chaque rapport finance directement des programmes de cantines scolaires",
        bullet3: "Pas d'intermédiaires. Aucun frais d'administration prélevé sur vos contributions.",
        supportingLine: "Lorsque vous vous protégez avec un rapport d'historique fiable, vous protégez aussi l'avenir d'un enfant.",
        calculatorTitle: "Calculez Votre Impact Collectif",
        calculatorLabel: "Nombre de Rapports d'Historique Commandés :",
        mealsProduced: "Repas Nutritifs Offerts",
        daysOfSchoolMeals: "Jours de Nutrition pour les Écoliers",
        childrenFed: "Enfants Nourris pendant Un Mois Entier"
      },
      whyChooseUs: {
        sectionTitle: "Sécurité Automobile + Lutte contre la Faim",
        item1Title: "Rapports VIN professionnels et précis",
        item1Desc: "Issus directement des bases officielles d'immatriculation européennes, fichiers de police et assureurs.",
        item2Title: "Résultats rapides (en moins de 60 secondes)",
        item2Desc: "Recevez les données complètes de votre véhicule directement sur votre écran et par e-mail.",
        item3Title: "Historique clair et facile à lire",
        item3Desc: "Tableau de bord ergonomique avec indicateurs de risques, graphique kilométrique et statut carte grise.",
        item4Title: "100% des bénéfices destinés aux enfants en Afrique",
        item4Desc: "Association française déclarée (Loi 1901) dédiée exclusivement à l'aide alimentaire infantile.",
        item5Title: "Transparence totale sur la destination des fonds",
        item5Desc: "Chaque euro de bénéfice net est audité et publié dans nos rapports financiers annuels."
      },
      missionStatement: {
        headline: "Une Association. Deux Missions.",
        bodyText: "Nous existons pour offrir la sérénité aux acheteurs d'automobiles — et pour veiller à ce qu'aucun enfant ne se couche la faim au ventre.\n\nChaque rapport acheté finance des repas nutritifs pour les enfants dans les communautés en Afrique. Nos coûts restent minimaux pour que la totalité des bénéfices nets aille directement aux cantines scolaires.",
        associationBadge: "Association Française Déclarée Loi 1901 • RNA W2B2001993 • SIREN 752 341 826"
      },
      bottomCta: {
        headline: "Prêt à vérifier un véhicule et nourrir un enfant ?",
        button: "Lancer Votre Vérification VIN",
        supportingText: "Sécurisé • Instantané • 100% des bénéfices aident les enfants d'Afrique"
      },
      footer: {
        tagline: "Rapports d'historique de véhicules qui nourrissent les enfants.",
        subtext: "100% des bénéfices financent des repas pour les enfants en Afrique.",
        legalNotice: "L'Association Check Cars VIN est un organisme à but non lucratif régi par la loi française de 1901 (RNA: W2B2001993, SIREN: 752 341 826). Les bénéfices financent directement des cantines scolaires partenaires à Dakar, Nairobi et Ouagadougou.",
        rights: "© 2026 Check Cars VIN Association. Tous droits réservés."
      }
    }
  },

  financialBreakdown: {
    reportPrice: 18.00,
    apiTechCost: 3.00,
    netProfit: 15.00,
    costPerMeal: 0.50,
    mealsPerReport: 30,
    allocationPercent: 100,
  },

  impactStats: [
    { label: "Total Meals Distributed", value: "142,850+", frLabel: "Repas Distribués" },
    { label: "Children Supported Daily", value: "4,200+", frLabel: "Enfants Accompagnés" },
    { label: "Partner Schools in Africa", value: "28", frLabel: "Écoles Partenaires" },
    { label: "VIN Reports Delivered", value: "4,760+", frLabel: "Rapports d'Historique Générés" }
  ],

  partnerRegions: [
    { country: "Senegal (Dakar & Thiès)", schools: 12, mealsDaily: "1,800 meals/day", highlight: "Nutritious peanut stew, rice, and fresh vegetables cooked locally." },
    { country: "Kenya (Kibera & Nakuru)", schools: 10, mealsDaily: "1,500 meals/day", highlight: "Githeri grain bowl, fortified porridge, and local fruit." },
    { country: "Burkina Faso (Ouagadougou)", schools: 6, mealsDaily: "900 meals/day", highlight: "Traditional millet porridge and legumes enriched with vitamins." }
  ]
};
