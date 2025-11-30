export const siteData = {
  company: {
    name: "Alivia",
    tagline: "Your Gateway to Spain",
    description: "Expert immigration and study guidance for your Spanish journey",
    mission: "To provide comprehensive, reliable, and personalized immigration and educational services that make your transition to Spain seamless and successful.",
    email: "info@alivia.es",
    phone: "+",
    address: "Calle Mayor 123, 28013 Madrid, Spain"
  },
  
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ],

  features: [
    {
      title: "Expert Guidance",
      description: "Professional immigration consultants with years of experience in Spanish procedures.",
      icon: "🎯"
    },
    {
      title: "Document Support",
      description: "Complete assistance with paperwork, translations, and official documentation.",
      icon: "📋"
    },
    {
      title: "Educational Services",
      description: "University admission support and degree recognition guidance.",
      icon: "🎓"
    },
    {
      title: "Ongoing Support",
      description: "From visa application to settling in Spain, we're with you every step.",
      icon: "🤝"
    }
  ],

  services: [
    {
      id: "student-visa",
      title: "Student Visa (Estudio)",
      category: "visa",
      description: "Complete assistance with Spanish student visa applications for international students.",
      detailedDescription: "Our comprehensive student visa service covers everything from initial consultation to visa approval. We guide you through the complex Spanish immigration process, ensuring all documentation is properly prepared and submitted.",
      image: "/images/student-visa.jpg",
      requiredPapers: [
        "Valid passport",
        "Completed visa application form",
        "Academic transcripts",
        "Letter of acceptance from Spanish institution",
        "Proof of financial means",
        "Medical certificate",
        "Criminal background check",
        "Travel insurance"
      ],
      relatedServices: ["university-admission", "document-preparation", "certified-translation"]
    },
    {
      id: "digital-nomad-visa",
      title: "Digital Nomad Visa",
      category: "visa",
      description: "New digital nomad visa for remote workers wanting to live in Spain.",
      detailedDescription: "Spain's innovative digital nomad visa allows remote workers to live and work legally in Spain while maintaining employment with foreign companies or running their own business.",
      image: "/images/digital-nomad.jpg",
      requiredPapers: [
        "Valid passport",
        "Proof of remote work arrangement",
        "Employment contract or business registration",
        "Proof of income (minimum €2,000/month)",
        "Travel insurance",
        "Criminal background check",
        "Proof of accommodation"
      ],
      relatedServices: ["business-registration", "tax-consultation", "accommodation-management"]
    },
    {
      id: "non-lucrative-visa",
      title: "Non-Lucrative Residence Visa",
      category: "visa",
      description: "For individuals who want to reside in Spain without working.",
      detailedDescription: "Perfect for retirees or individuals with sufficient passive income who wish to live in Spain without engaging in professional activities.",
      image: "/images/non-lucrative.jpg",
      requiredPapers: [
        "Valid passport",
        "Proof of financial means (€25,000+ annually)",
        "Medical insurance",
        "Criminal background check",
        "Medical certificate",
        "Proof of accommodation"
      ],
      relatedServices: ["housing-search", "health-registration", "nie-application"]
    },
    {
      id: "arraigo-social",
      title: "Arraigo (Social Integration) Residence",
      category: "residence",
      description: "Residence permit based on social integration in Spain.",
      detailedDescription: "For individuals who have been living in Spain irregularly for at least 3 years and can demonstrate social integration through work contracts, family ties, or community involvement.",
      image: "/images/arraigo.jpg",
      requiredPapers: [
        "Proof of 3+ years residence in Spain",
        "Employment contract or job offer",
        "Social integration report",
        "Criminal background check",
        "Medical certificate"
      ],
      relatedServices: ["legal-consultation", "employment-support", "municipality-support"]
    },
    {
      id: "golden-visa",
      title: "Golden Visa (Investment-Based)",
      category: "visa",
      description: "Residence visa through real estate or business investment.",
      detailedDescription: "Obtain Spanish residency through significant investment in real estate (€500,000+), business projects, or government bonds.",
      image: "/images/golden-visa.jpg",
      requiredPapers: [
        "Valid passport",
        "Proof of investment funds",
        "Investment documentation",
        "Criminal background check",
        "Medical insurance",
        "Bank statements"
      ],
      relatedServices: ["business-support", "investment-consultation", "legal-representation"]
    },
    {
      id: "student-consultation",
      title: "Student Consultation and Pre-arrival Guidance",
      category: "education",
      description: "Comprehensive pre-arrival consultation for international students.",
      detailedDescription: "Complete guidance package for students planning to study in Spain, covering everything from university selection to accommodation and cultural preparation.",
      image: "/images/student-consultation.jpg",
      requiredPapers: [
        "Academic transcripts",
        "Language proficiency certificates",
        "Personal statement",
        "Letters of recommendation"
      ],
      relatedServices: ["university-admission", "housing-search", "language-courses"]
    },
    {
      id: "document-preparation",
      title: "Document Preparation and Review",
      category: "documentation",
      description: "Professional review and preparation of all required documentation.",
      detailedDescription: "Our experts review, prepare, and organize all your documents to ensure they meet Spanish immigration requirements and are properly formatted.",
      image: "/images/document-prep.jpg",
      requiredPapers: [
        "Original documents",
        "Identification documents"
      ],
      relatedServices: ["certified-translation", "apostille-services", "legal-review"]
    },
    {
      id: "certified-translation",
      title: "Certified and Standard Translation",
      category: "documentation",
      description: "Official translation services for all your Spanish immigration documents.",
      detailedDescription: "Professional translation services by certified translators, ensuring your documents are accurately translated and legally recognized in Spain.",
      image: "/images/translation.jpg",
      requiredPapers: [
        "Original documents to be translated"
      ],
      relatedServices: ["document-preparation", "apostille-services", "legal-review"]
    },
    {
      id: "university-admission",
      title: "University Admission and Registration Support",
      category: "education",
      description: "Complete support for university applications and enrollment.",
      detailedDescription: "From selecting the right university and program to completing applications and enrollment procedures, we guide you through the entire process.",
      image: "/images/university.jpg",
      requiredPapers: [
        "Academic transcripts",
        "Diploma certificates",
        "Language proficiency tests",
        "Personal statements",
        "Letters of recommendation"
      ],
      relatedServices: ["degree-recognition", "student-consultation", "language-courses"]
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup and Accommodation Transfer",
      category: "logistics",
      description: "Seamless arrival service from airport to your accommodation.",
      detailedDescription: "Professional airport pickup service ensuring a smooth transition from the airport to your temporary or permanent accommodation in Spain.",
      image: "/images/airport-pickup.jpg",
      requiredPapers: [
        "Flight details",
        "Accommodation address"
      ],
      relatedServices: ["housing-search", "accommodation-management", "emergency-support"]
    },
    {
      id: "housing-search",
      title: "Housing Search and Booking",
      category: "logistics",
      description: "Professional assistance in finding suitable accommodation.",
      detailedDescription: "Comprehensive housing search service helping you find the perfect accommodation based on your budget, preferences, and location requirements.",
      image: "/images/housing.jpg",
      requiredPapers: [
        "Income proof",
        "Identification documents",
        "References"
      ],
      relatedServices: ["rental-mediation", "accommodation-management", "legal-support"]
    },
    {
      id: "rental-mediation",
      title: "Apartment and Flat Rental Mediation",
      category: "logistics",
      description: "Mediation services for rental agreements and tenant rights.",
      detailedDescription: "Professional mediation between tenants and landlords, ensuring fair rental agreements and resolving any accommodation-related disputes.",
      image: "/images/rental.jpg",
      requiredPapers: [
        "Rental agreement",
        "Income proof",
        "Identification documents"
      ],
      relatedServices: ["housing-search", "legal-consultation", "accommodation-management"]
    },
    {
      id: "bank-account",
      title: "Bank Account Setup Assistance",
      category: "administrative",
      description: "Help with opening Spanish bank accounts and understanding banking procedures.",
      detailedDescription: "Complete assistance with opening bank accounts, understanding Spanish banking requirements, and setting up necessary financial services.",
      image: "/images/banking.jpg",
      requiredPapers: [
        "NIE number",
        "Proof of address",
        "Employment contract or income proof",
        "Passport or ID"
      ],
      relatedServices: ["nie-application", "employment-support", "financial-consultation"]
    },
    {
      id: "official-forms",
      title: "Help with Official Forms",
      category: "administrative",
      description: "Assistance with completing Spanish administrative forms.",
      detailedDescription: "Expert help with understanding and completing various Spanish administrative forms, ensuring accuracy and compliance with requirements.",
      image: "/images/forms.jpg",
      requiredPapers: [
        "Relevant personal documents",
        "Supporting documentation as required"
      ],
      relatedServices: ["administrative-support", "nie-application", "municipality-support"]
    },
    {
      id: "nie-application",
      title: "NIE Application Support",
      category: "administrative",
      description: "Complete assistance with NIE (Foreigner Identity Number) applications.",
      detailedDescription: "The NIE is essential for all administrative procedures in Spain. We provide complete support for obtaining this crucial identification number.",
      image: "/images/nie.jpg",
      requiredPapers: [
        "Valid passport",
        "Completed NIE application form",
        "Proof of reason for application",
        "Fee payment receipt"
      ],
      relatedServices: ["administrative-support", "appointment-booking", "document-preparation"]
    },
    {
      id: "tasa-payment",
      title: "Payment of Administrative Fees (TASA)",
      category: "administrative",
      description: "Assistance with paying Spanish administrative fees and taxes.",
      detailedDescription: "Help with understanding and paying various administrative fees (TASA) required for different procedures in Spain.",
      image: "/images/tasa.jpg",
      requiredPapers: [
        "Fee calculation documents",
        "Bank account information",
        "Procedure reference numbers"
      ],
      relatedServices: ["administrative-support", "financial-consultation", "procedure-guidance"]
    },
    {
      id: "municipality-support",
      title: "Municipality Appointment Support (Empadronamiento)",
      category: "administrative",
      description: "Support with municipal registration and appointments.",
      detailedDescription: "Empadronamiento (municipal registration) is required for many procedures. We help you schedule appointments and complete the registration process.",
      image: "/images/municipality.jpg",
      requiredPapers: [
        "Proof of address",
        "Passport or ID",
        "Rental contract or property deed"
      ],
      relatedServices: ["appointment-booking", "administrative-support", "housing-verification"]
    },
    {
      id: "degree-recognition",
      title: "Degree Recognition and Equivalency Guidance",
      category: "education",
      description: "Help with recognizing foreign degrees in Spain.",
      detailedDescription: "Complete guidance through the degree recognition process, ensuring your foreign qualifications are properly recognized by Spanish authorities.",
      image: "/images/degree-recognition.jpg",
      requiredPapers: [
        "Original degree certificates",
        "Academic transcripts",
        "Apostilled documents",
        "Certified translations"
      ],
      relatedServices: ["certified-translation", "university-admission", "professional-registration"]
    },
    {
      id: "language-courses",
      title: "Language and Professional Course Registration",
      category: "education",
      description: "Registration assistance for Spanish language and professional courses.",
      detailedDescription: "Help finding and enrolling in Spanish language courses and professional development programs to enhance your skills and integration.",
      image: "/images/language-courses.jpg",
      requiredPapers: [
        "Identification documents",
        "Previous education certificates",
        "Language level assessment"
      ],
      relatedServices: ["student-consultation", "degree-recognition", "professional-development"]
    },
    {
      id: "transport-card",
      title: "Public Transport Card Assistance (Abono transporte)",
      category: "logistics",
      description: "Help with obtaining public transportation cards and passes.",
      detailedDescription: "Assistance with obtaining and understanding Spanish public transportation cards, helping you navigate the transit system efficiently.",
      image: "/images/transport.jpg",
      requiredPapers: [
        "NIE or passport",
        "Proof of address",
        "Student/resident status proof"
      ],
      relatedServices: ["nie-application", "municipality-support", "student-support"]
    },
    {
      id: "health-registration",
      title: "Health Center Registration and Health Card (Tarjeta Sanitaria)",
      category: "healthcare",
      description: "Registration with Spanish healthcare system and obtaining health card.",
      detailedDescription: "Complete support for registering with the Spanish public healthcare system and obtaining your Tarjeta Sanitaria (health card).",
      image: "/images/health-card.jpg",
      requiredPapers: [
        "NIE or passport",
        "Empadronamiento certificate",
        "Social Security number",
        "Employment contract or student status"
      ],
      relatedServices: ["social-security", "municipality-support", "insurance-support"]
    },
    {
      id: "emergency-medical",
      title: "Emergency and Hospital Support with Translation",
      category: "healthcare",
      description: "Emergency medical assistance and translation services.",
      detailedDescription: "24/7 emergency support including translation services during medical emergencies and hospital visits.",
      image: "/images/medical-emergency.jpg",
      requiredPapers: [
        "Health insurance documents",
        "Identification documents",
        "Medical history if available"
      ],
      relatedServices: ["health-registration", "emergency-assistance", "translation-services"]
    },
    {
      id: "freelancer-support",
      title: "Freelancer (Autónomos) and Employee Support",
      category: "employment",
      description: "Support for freelancers and employees navigating Spanish work regulations.",
      detailedDescription: "Comprehensive support for freelancers (autónomos) and employees, including registration, tax obligations, and legal requirements.",
      image: "/images/freelancer.jpg",
      requiredPapers: [
        "NIE number",
        "Proof of qualifications",
        "Business plan (for freelancers)",
        "Employment contract (for employees)"
      ],
      relatedServices: ["business-registration", "tax-consultation", "social-security"]
    },
    {
      id: "business-registration",
      title: "Business Registration Assistance (Autónomo)",
      category: "business",
      description: "Complete business registration and setup services.",
      detailedDescription: "Full support for establishing your business in Spain, including autónomo registration, tax setup, and compliance requirements.",
      image: "/images/business-reg.jpg",
      requiredPapers: [
        "Business plan",
        "NIE number",
        "Proof of address",
        "Professional qualifications",
        "Initial capital proof"
      ],
      relatedServices: ["tax-consultation", "legal-consultation", "accounting-support"]
    },
    {
      id: "accommodation-management",
      title: "Accommodation Management for Workers",
      category: "logistics",
      description: "Ongoing accommodation management services for workers.",
      detailedDescription: "Comprehensive accommodation management including maintenance coordination, lease renewals, and tenant support for working professionals.",
      image: "/images/accommodation-mgmt.jpg",
      requiredPapers: [
        "Employment contract",
        "Rental agreement",
        "Income proof"
      ],
      relatedServices: ["housing-search", "rental-mediation", "maintenance-support"]
    },
    {
      id: "social-security",
      title: "Social Security and Tax Consultation (Seguridad Social & Hacienda)",
      category: "administrative",
      description: "Consultation on Spanish social security and tax matters.",
      detailedDescription: "Expert consultation on Spanish social security system and tax obligations, ensuring compliance and maximizing benefits.",
      image: "/images/social-security.jpg",
      requiredPapers: [
        "NIE number",
        "Employment contract",
        "Income statements",
        "Previous tax documents"
      ],
      relatedServices: ["tax-consultation", "employment-support", "benefits-guidance"]
    },
    {
      id: "administrative-support",
      title: "Administrative Support and Document Guidance",
      category: "administrative",
      description: "General administrative support and document guidance.",
      detailedDescription: "Comprehensive administrative support covering various bureaucratic procedures and document requirements in Spain.",
      image: "/images/admin-support.jpg",
      requiredPapers: [
        "Relevant identification documents",
        "Procedure-specific paperwork"
      ],
      relatedServices: ["document-preparation", "procedure-guidance", "appointment-booking"]
    },
    {
      id: "authority-mediation",
      title: "Mediation and Accompaniment with Authorities",
      category: "legal",
      description: "Mediation services when dealing with Spanish authorities.",
      detailedDescription: "Professional mediation and accompaniment during meetings with Spanish authorities, ensuring clear communication and proper representation.",
      image: "/images/mediation.jpg",
      requiredPapers: [
        "Case-specific documents",
        "Identification papers",
        "Previous correspondence"
      ],
      relatedServices: ["legal-consultation", "translation-services", "administrative-support"]
    },
    {
      id: "procedure-guidance",
      title: "Procedure Guidance without Legal Representation",
      category: "legal",
      description: "Guidance on legal procedures without formal legal representation.",
      detailedDescription: "Information and guidance on various Spanish legal procedures, helping you understand your options without providing formal legal representation.",
      image: "/images/procedure.jpg",
      requiredPapers: [
        "Relevant case documents",
        "Identification papers"
      ],
      relatedServices: ["legal-consultation", "document-review", "process-explanation"]
    },
    {
      id: "immigration-consulting",
      title: "Visa and Immigration Consulting",
      category: "consulting",
      description: "Expert immigration consulting and strategy development.",
      detailedDescription: "Strategic immigration consulting to help you choose the best path for your Spanish residency or citizenship goals.",
      image: "/images/immigration-consulting.jpg",
      requiredPapers: [
        "Current immigration status documents",
        "Personal circumstances documentation",
        "Future plans documentation"
      ],
      relatedServices: ["visa-applications", "legal-consultation", "strategy-development"]
    },
    {
      id: "educational-intermediation",
      title: "Educational Intermediation",
      category: "education",
      description: "Mediation between students and educational institutions.",
      detailedDescription: "Professional mediation services between international students and Spanish educational institutions, resolving issues and facilitating communication.",
      image: "/images/edu-mediation.jpg",
      requiredPapers: [
        "Student documentation",
        "Institutional correspondence",
        "Academic records"
      ],
      relatedServices: ["university-admission", "student-consultation", "academic-support"]
    },
    {
      id: "business-consultancy",
      title: "Business Support and Consultancy",
      category: "business",
      description: "Comprehensive business consulting services.",
      detailedDescription: "Strategic business consulting covering market entry, regulatory compliance, and business development in the Spanish market.",
      image: "/images/business-consulting.jpg",
      requiredPapers: [
        "Business plan",
        "Financial projections",
        "Market research",
        "Regulatory requirements"
      ],
      relatedServices: ["business-registration", "legal-consultation", "market-analysis"]
    },
    {
      id: "emergency-assistance",
      title: "Emergency Assistance Line",
      category: "support",
      description: "24/7 emergency assistance and support line.",
      detailedDescription: "Round-the-clock emergency assistance for urgent situations, providing immediate support and guidance when you need it most.",
      image: "/images/emergency.jpg",
      requiredPapers: [
        "Emergency contact information",
        "Relevant identification"
      ],
      relatedServices: ["medical-support", "legal-emergency", "crisis-management"]
    },
    {
      id: "event-booking",
      title: "Event and Activity Booking Support",
      category: "lifestyle",
      description: "Assistance with booking events, activities, and cultural experiences.",
      detailedDescription: "Help with discovering and booking local events, cultural activities, and experiences to enhance your integration into Spanish society.",
      image: "/images/events.jpg",
      requiredPapers: [
        "Identification documents",
        "Preference information"
      ],
      relatedServices: ["cultural-integration", "social-support", "lifestyle-guidance"]
    }
  ],

  partners: [
    {
      name: "Universidad Complutense Madrid",
      description: "Leading Spanish university partnership for student services",
      logo: "🏛️"
    },
    {
      name: "Spanish Chamber of Commerce",
      description: "Business registration and support services",
      logo: "🏢"
    },
    {
      name: "Legal Partners Network",
      description: "Certified legal professionals for complex cases",
      logo: "⚖️"
    },
    {
      name: "Translation Services Guild",
      description: "Certified translation professionals",
      logo: "🌐"
    }
  ],

  team: [
    {
      name: "Maria Rodriguez",
      role: "Founder & Immigration Specialist",
      image: "/images/team/maria.jpg",
      description: "15+ years experience in Spanish immigration law"
    },
    {
      name: "Carlos Jimenez",
      role: "Education Consultant",
      image: "/images/team/carlos.jpg",
      description: "Former university admissions officer with deep knowledge of Spanish education system"
    },
    {
      name: "Ana Fernandez",
      role: "Document Specialist",
      image: "/images/team/ana.jpg",
      description: "Expert in document preparation and certification processes"
    },
    {
      name: "Miguel Torres",
      role: "Business Consultant",
      image: "/images/team/miguel.jpg",
      description: "Specializes in business registration and freelancer support"
    }
  ],

  faqs: [
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary by visa type. Student visas typically take 15-30 days, while residence visas can take 1-3 months. We'll provide specific timelines based on your situation."
    },
    {
      question: "Do I need to speak Spanish to immigrate to Spain?",
      answer: "While Spanish isn't always required for initial visas, basic Spanish skills greatly help with integration. We offer language course recommendations and can assist with translation services."
    },
    {
      question: "What documents need to be apostilled?",
      answer: "Documents issued outside Spain typically need apostille certification, including birth certificates, marriage certificates, educational diplomas, and criminal background checks."
    },
    {
      question: "Can you help with family reunification?",
      answer: "Yes, we assist with family reunification processes once you have established legal residency in Spain. This includes spouse and dependent children visas."
    },
    {
      question: "What's included in your emergency assistance service?",
      answer: "Our 24/7 emergency line provides immediate support for medical emergencies, legal issues, document problems, and other urgent situations with translation assistance."
    },
    {
      question: "How much does it cost to live in Spain as a student?",
      answer: "Living costs vary by city. Madrid and Barcelona average €800-1,200/month, while smaller cities range €600-900/month including accommodation, food, and transportation."
    }
  ]
};
