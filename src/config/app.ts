export const APP_CONFIG = {
  name: "Fixigo",
  tagline: "Smart Appliance Care.",
  heroTitle: "Repair. Restore. Maintain.",
  heroDescription: "Simplify the entire lifecycle of your home appliances. From instant repairs and professional maintenance to live-tracking and smart warranty vaulting — manage it all in one app.",
  
  // App Download links (update this later with Play Store/App Store URLs)
  downloadUrl: "/downloads/fixigo.apk", // This points to the public/downloads/fixigo.apk on the web server
  playStoreUrl: "https://play.google.com/store", // Future Google Play Store badge link
  appStoreUrl: "https://apps.apple.com/app", // Future App Store badge link
  demoVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Link for "Watch Demo"

  // Quick statistics
  stats: [
    { value: 10000, label: "Repairs Completed", suffix: "+" },
    { value: 98, label: "Customer Satisfaction", suffix: "%" },
    { value: 24, label: "Customer Support", suffix: "/7" },
    { value: 100, label: "Verified Technicians", suffix: "+" },
  ],

  // Brand Pillars / Why Choose Fixigo
  pillars: [
    {
      id: "verified-techs",
      title: "Verified Technicians",
      description: "Every provider undergoes rigorous background verification and practical skills testing before visiting your home.",
      iconName: "ShieldCheck"
    },
    {
      id: "transparent-pricing",
      title: "Transparent Pricing",
      description: "Know your repair cost upfront. No hidden inspection fees, no arbitrary surge charges, and 100% itemized invoices.",
      iconName: "CreditCard"
    },
    {
      id: "quick-service",
      title: "Quick 2-Hour Service",
      description: "Booking emergency repairs? Our local hubs guarantee a verified specialist at your doorstep within 120 minutes.",
      iconName: "Zap"
    },
    {
      id: "secure-payments",
      title: "Secure Payments",
      description: "Pay securely via credit card, UPI, or net banking inside the app. Funds are held until you approve the work.",
      iconName: "Lock"
    },
    {
      id: "doorstep-pickup",
      title: "Appliance Transport",
      description: "For major repair jobs or deep servicing, our logistics team handles all appliance transport at zero additional cost.",
      iconName: "Truck"
    },
    {
      id: "ai-support",
      title: "24/7 AI Assistant",
      description: "Troubleshoot simple errors immediately. Our AI analyzes error codes and suggests quick home remedies.",
      iconName: "MessageSquareText"
    }
  ],

  // Core Services (Replaced Resale with Genuine Spares)
  services: [
    {
      id: "repair",
      title: "Appliance Repair",
      description: "Fast diagnosis and fix for ACs, refrigerators, washing machines, microwaves, and chimneys by certified experts.",
      badge: "Most Booked",
      iconName: "Wrench",
      features: ["90-Day Repair Warranty", "Genuine Spare Parts Only", "Zero Call-out Fee on Repair Approval"]
    },
    {
      id: "installation",
      title: "Installation & Setup",
      description: "Professional alignment, wall mounting, electrical setups, and secure commissioning for new home systems.",
      badge: "Precision",
      iconName: "PlugZap",
      features: ["Level Alignment Check", "Safety Electrical Leak Test", "Quick Demo & Setup Guide"]
    },
    {
      id: "maintenance",
      title: "Preventative Care",
      description: "Deep chemical cleaning, filter replacements, gas recharging, and performance checks to save on electricity.",
      badge: "Eco-Friendly",
      iconName: "Sparkles",
      features: ["Cuts Energy Bills up to 20%", "Improves Lifespan", "Includes Multi-point Safety Audit"]
    },
    {
      id: "spares",
      title: "Genuine Spares Care",
      description: "100% genuine and brand-authorized components sourced directly from official manufacturer channels, backed by a parts warranty.",
      badge: "100% OEM Parts",
      iconName: "ShieldCheck",
      features: ["OEM Sourced Parts", "Secure Seal Audits", "90-Day Parts Replacement"]
    },
    {
      id: "warranty",
      title: "Smart Warranty Vault",
      description: "Upload invoices to track active brand warranties and receive notifications before coverage expires.",
      badge: "Digital Vault",
      iconName: "FolderHeart",
    }
  ],

  // Timeline for services (How it works)
  serviceSteps: [
    {
      title: "Book Service",
      description: "Select appliance, describe symptoms, and schedule a convenient time slot in 3 taps."
    },
    {
      title: "Technician Assigned",
      description: "Match with a specialized technician from your local neighborhood hub."
    },
    {
      title: "Track Live Location",
      description: "Watch your technician arrive in real-time on our interactive maps."
    },
    {
      title: "Repair Completed",
      description: "Appliance fixed using OEM parts. Technician performs a safety and performance run."
    },
    {
      title: "Secure Payment",
      description: "Settle via cards, net banking, or UPI. Get a digitally signed tax invoice instantly."
    },
    {
      title: "Warranty Activated",
      description: "Get an automatic 90-day warranty on all service and parts. Stored in your vault."
    }
  ],

  appSlides: [
    {
      id: "home",
      title: "Smart Control Hub",
      description: "View all your registered appliances, check active services, and see status warnings in one unified dashboard.",
      screenPlaceholder: "Home Screen Dashboard",
      bgColor: "from-blue-600/20 to-sky-500/10"
    },
    {
      id: "booking",
      title: "Seamless Repair Booking",
      description: "Schedule services, pick time slots, select symptoms, and view custom cost estimates transparently.",
      screenPlaceholder: "Service Request Screen",
      bgColor: "from-indigo-600/20 to-blue-500/10"
    },
    {
      id: "tracking",
      title: "Live Technician Tracking",
      description: "No more waiting in anxiety. Track your technician's live GPS route and estimated time of arrival down to the minute.",
      screenPlaceholder: "GPS Live Map Screen",
      bgColor: "from-blue-500/20 to-sky-400/10"
    },
    {
      id: "vault",
      title: "Warranty & Invoicing Vault",
      description: "Store receipts, track expiring policies, and access service summaries for higher resale value retention.",
      screenPlaceholder: "Warranty Vault Screen",
      bgColor: "from-indigo-500/20 to-blue-500/10"
    }
  ],

  // Testimonials (Replaced Resale quote with TV installation quote)
  testimonials: [
    {
      quote: "My washing machine started leaking at 8 PM. By 9:30 PM, a Fixigo technician was here, replaced the faulty drum seal, and the app stored my repair warranty. Absolutely flawless, Apple-level service experience.",
      name: "Siddharth Sharma",
      role: "Product Lead at Razorpay",
      rating: 5,
      avatarUrl: ""
    },
    {
      quote: "Booking a television wall installation with Fixigo was incredibly simple. The specialist arrived precisely on time, had all the brackets and clean equipment, and finished in 30 minutes. Extremely neat and polite.",
      name: "Pooja Hegde",
      role: "Tech Consultant",
      rating: 5,
      avatarUrl: ""
    },
    {
      quote: "Managing warranties for all our office ACs was a nightmare. The Warranty Vault in Fixigo is a lifesaver. We uploaded the bills, and now we get auto-alerts before coverages expire. Maintenance booking is super easy.",
      name: "Karan Johar",
      role: "Operations Director, Credence Coworking",
      rating: 5,
      avatarUrl: ""
    },
    {
      quote: "The live tracking changes everything. I didn't have to waste a half-day waiting for the tech. I could track him on my phone, run a quick errand, and arrive home exactly when he did. Clean work and very polite.",
      name: "Meera Sen",
      role: "Freelance Creative Director",
      rating: 5,
      avatarUrl: ""
    }
  ],

  // Frequently Asked Questions (Removed Resale questions)
  faqs: [
    {
      question: "Which home appliances does Fixigo service?",
      answer: "We support a wide array of appliances including Air Conditioners, Refrigerators, Washing Machines, Microwaves/Ovens, Chimneys, Water Purifiers, and Geysers. We service all major global and national brands."
    },
    {
      question: "Are your technicians qualified and insured?",
      answer: "Yes, every technician is a licensed specialist. They undergo background checks, criminal record verification, and intense practical skills tests at our regional training academies. All on-site repairs are also covered by our platform insurance."
    },
    {
      question: "How does the 90-day warranty policy work?",
      answer: "When we repair an appliance, the specific parts replaced and our labor are automatically covered for 90 days. If the same issue reoccurs within this period, we fix it again free of cost. Warranty claims can be submitted with one tap."
    },
    {
      question: "Can I book emergency or same-day repair bookings?",
      answer: "Yes, you can schedule an emergency service in the app. For standard AC, washing machine, and geyser repair options, our verified technician will be dispatched and arrive within 2 hours."
    }
  ],

  // Contact / Footer info
  contact: {
    email: "fixigo.official@gmail.com",
    phone: "",
    address: "Fixigo Technologies Pvt. Ltd., Chennai, Tamil Nadu, India",
    socials: [
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" }
    ],
    links: {
      company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Brand Guidelines", href: "#" }
      ],
      legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Refund Policy", href: "#" },
        { label: "Security", href: "#" }
      ],
      resources: [
        { label: "Blog", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Tech Academy", href: "#" },
        { label: "Service Areas", href: "#" }
      ]
    }
  }
};
