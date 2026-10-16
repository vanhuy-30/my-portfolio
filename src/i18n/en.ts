export const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    architecture: "Approach",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  common: {
    viewWork: "View my work",
    contactMe: "Get in touch",
    close: "Close",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    liveDemo: "Live demo",
    appStore: "App Store",
    playStore: "Google Play",
    basedIn: "Based in",
    inProgress: "In progress",
    nda: "NDA",
  },
  hero: {
    eyebrow: "Software Engineer · Ho Chi Minh City",
    greeting: "Hi, I'm Huy.",
    headline:
      "I build mobile apps, business platforms, and AI tools that teams use every day.",
    supporting:
      "Nearly 5 years across Flutter, Android, and React, from BLE medical apps for Japanese clients to a company-wide HR and operations app and AI agents on local LLMs.",
    factsLabel: "At a glance",
    factYears: "~5 yrs",
    factYearsLabel: "building software",
    factProducts: "10+",
    factProductsLabel: "apps and systems shipped",
    factAi: "8+",
    factAiLabel: "AI features in use",
    nowLabel: "Now",
    nowValue: "Software Engineer at Motives Vietnam",
    visualLabel: "Internal social and golf app, built in Flutter",
  },
  about: {
    title: "About",
    lead: "I started on native Android, moved to Flutter, and now build whole products in-house.",
    body:
      "At Vitalify Asia I shipped apps for Japanese clients, including one that talks to Omron medical devices over BLE. At Motives Vietnam I work across the stack: Flutter apps, M System, a React HR and ERP app used by ~500 people, the APIs behind them, and AI tools for each department. I care about clear structure, steady releases, and software that fits how people actually work.",
    currentLabel: "Currently",
    currentValue: "Software Engineer, Motives Vietnam",
    educationLabel: "Education",
    educationValue: "Bachelor of Information Technology, HUTECH, 2022",
    languagesLabel: "Languages",
    languagesValue: "Vietnamese (native), English (TOEIC 700)",
    locationValue: "Ho Chi Minh City, Vietnam",
  },
  projects: {
    title: "Selected work",
    subtitle:
      "Products from Motives Vietnam and Vitalify Asia. Most are internal or client apps under NDA, so I describe them without links or screenshots of real data.",
    sideTitle: "Side projects",
    sideSubtitle: "Things I build on my own time. The code is public.",
    otherTitle: "Also worked on",
    role: "Role",
    technologies: "Technologies",
    openCase: "Case study",
    ndaNote:
      "Internal or client app under NDA. No public link, and details stay high level.",
    tabs: {
      context: "Context",
      built: "What I built",
      decisions: "Decisions",
      results: "Results",
    },
  },
  experience: {
    title: "Experience",
    subtitle: "Two companies, one path: Android, then Flutter, then full products across mobile, web, and AI.",
    showMore: "Show more",
    showLess: "Show less",
  },
  skills: {
    title: "Skills",
    subtitle: "Only what I have used in shipped or public work.",
    categories: {
      mobile: "Mobile",
      web: "Web",
      backend: "Backend & data",
      ai: "AI products",
      aiTools: "AI-assisted development",
      practices: "Practices & tools",
    },
  },
  architecture: {
    title: "How I work",
    subtitle: "Four habits that show up in every project above.",
    principles: {
      structure: {
        title: "Structure first",
        body: "Feature modules, Clean Architecture, and clear state so the next feature is not harder than the last.",
        proof: "Flutter Starter Kit",
      },
      ship: {
        title: "Ship, then keep shipping",
        body: "Store releases, TestFlight, and maintenance on live apps with real users.",
        proof: "Play Console · TestFlight · Japanese stores",
      },
      business: {
        title: "Fit the business",
        body: "Plug into the tools teams already use instead of asking them to change.",
        proof: "Outlook · Odoo · 6+ departments",
      },
      ai: {
        title: "AI in the workflow",
        body: "I build AI tools for teams, and I use AI coding tools daily to build, debug, and review, with my own review on every change.",
        proof: "Dify · Cursor · Claude Code",
      },
    },
  },
  contact: {
    title: "Let's talk",
    subtitle: "Open to conversations about mobile, web, and AI product work. Email is the fastest way to reach me.",
  },
  footer: {
    rights: "Built with Next.js, TypeScript, and Tailwind CSS.",
    viewSource: "View source",
  },
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof en>;
