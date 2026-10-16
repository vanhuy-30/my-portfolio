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
    greeting: "Hi, I'm Huy (Stephen).",
    headline:
      "I build mobile and web products for real users, along with the APIs and AI tools behind them.",
    supporting:
      "Almost five years in, I've worked on health apps for Japanese clients, an HR platform used across my company, and AI agents that run on our own servers.",
    factsLabel: "At a glance",
    factYears: "~5 yrs",
    factYearsLabel: "in software",
    factProducts: "10+",
    factProductsLabel: "apps and systems shipped",
    factAi: "8+",
    factAiLabel: "AI features in production",
    nowLabel: "Currently",
    nowValue: "Software Engineer at Motives Vietnam",
  },
  about: {
    title: "About",
    lead: "I started out writing Android apps. These days I work across the full stack.",
    body:
      "At Vitalify Asia, I built Android and Flutter apps for Japanese clients, including a health app that pairs with Omron medical devices over Bluetooth. At Motives Vietnam, I own features from start to finish. I build the Flutter or React screens, write the APIs and business logic, connect things to Outlook and Odoo, and set up AI tools on our own LLMs. M System alone has around 500 daily users. I like code that's easy to change, regular releases, and software that fits the way people already work.",
    currentLabel: "Currently",
    currentValue: "Software Engineer, Motives Vietnam",
    educationLabel: "Education",
    educationValue: "Bachelor of Information Technology, HUTECH, 2022",
    languagesLabel: "Languages",
    languagesValue: "Vietnamese (native), English (TOEIC 700)",
    locationValue: "Ho Chi Minh City, Vietnam",
  },
  projects: {
    title: "Featured projects",
    subtitle:
      "Work from Motives Vietnam and Vitalify Asia. Most of it is internal or under NDA, so there are no links or real screenshots here, just what I did and why.",
    sideTitle: "Side projects",
    sideSubtitle: "Built in my spare time. The source code is on GitHub.",
    otherTitle: "Other work",
    role: "Role",
    technologies: "Technologies",
    openCase: "Case study",
    ndaNote:
      "This is an internal or client project under NDA, so I can't share links or specifics.",
    sections: {
      context: "Context",
      built: "My part",
      decisions: "Key decisions",
      results: "Results",
    },
  },
  experience: {
    title: "Experience",
    subtitle: "I started in mobile and grew into a broader engineering role that now covers web, backend, and AI.",
    showMore: "Show more",
    showLess: "Show less",
  },
  skills: {
    title: "Skills",
    subtitle: "Tools I've used in real projects, not just tutorials.",
    categories: {
      mobile: "Mobile",
      web: "Web",
      backend: "Backend & data",
      ai: "AI",
      aiTools: "AI coding tools",
      practices: "Architecture & tooling",
    },
  },
  architecture: {
    title: "How I work",
    subtitle: "A few things I try to do on every project.",
    principles: {
      structure: {
        title: "Get the structure right early",
        body: "I split code into feature modules with Clean Architecture and predictable state, so the codebase stays easy to work in as it grows.",
        proof: "Flutter Starter Kit",
      },
      ship: {
        title: "Release often",
        body: "I've handled store releases, TestFlight builds, and long-term maintenance for apps people rely on every day.",
        proof: "Play Console · TestFlight · Japan stores",
      },
      business: {
        title: "Work with existing tools",
        body: "Where I can, I integrate with what teams already use instead of asking them to switch.",
        proof: "Outlook · Odoo · 6+ departments",
      },
      ai: {
        title: "Use AI, check the output",
        body: "I build AI tools for other departments and use AI assistants daily for coding and debugging. Every change still gets my own review before it's merged.",
        proof: "Dify · Cursor · Claude Code",
      },
    },
  },
  contact: {
    title: "Get in touch",
    subtitle: "Happy to chat about mobile, web, or AI work. Email is the quickest way to reach me.",
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
