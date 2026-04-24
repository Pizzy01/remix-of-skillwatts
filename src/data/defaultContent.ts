export const defaultContent = {
  hero: {
    badge: "African Energy Infrastructure",
    title: "Energy Infrastructure",
    titleHighlight: "for Africa",
    subtitle:
      "We build and operate solar, water, cold chain and industrial energy systems adapted to African realities.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Our Solutions",
    bgImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    stats: [
      { value: "50+", label: "PROJECTS DEPLOYED" },
      { value: "15+", label: "AFRICAN COUNTRIES" },
      { value: "100K+", label: "LIVES IMPACTED" },
    ],
  },

  solutions: {
    badge: "What We Build",
    title: "Integrated Infrastructure Systems",
    subtitle:
      "SkillWatts delivers infrastructure solutions in 6 critical sectors essential for Africa's development.",
    ctaLabel: "Request a Technical Proposal",
    items: [
      {
        title: "Solar Mini-Grids",
        description:
          "Electrification of rural and peri-urban areas through containerized or hybrid solar power plants.",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      },
      {
        title: "Cold Storage & Cold Chain",
        description:
          "Solar-powered cold rooms and refrigerated containers for agriculture, fisheries and food markets.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      },
      {
        title: "Solar Water Pumping & Irrigation",
        description:
          "Solar pumping systems for farms, villages and agro-industrial sites.",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      },
      {
        title: "Agro Processing & Solar Drying",
        description:
          "Solar dryers and agro-processing units to reduce post-harvest losses and increase farmer income.",
        image:
          "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
      },
      {
        title: "Clean Water Stations",
        description:
          "Solar-powered water purification and distribution stations for villages, health centers and cities.",
        image:
          "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80",
      },
      {
        title: "Industrial & Commercial Solar",
        description:
          "Hybrid solar + battery systems for hotels, factories, mines, hospitals and commercial buildings.",
        image:
          "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
      },
    ],
  },

  whyAfrica: {
    badge: "The Challenge",
    title: "Why Africa Needs SkillWatts",
    subtitle:
      "Africa faces a massive infrastructure gap. We build solutions that directly address these challenges.",
    bottomText:
      "SkillWatts builds infrastructure that directly addresses these challenges with scalable, bankable solutions.",
    challenges: [
      {
        title: "Low electricity access",
        description: "600+ million Africans lack reliable power in rural areas",
      },
      {
        title: "Population growth",
        description:
          "Africa's population will double by 2050, demanding massive infrastructure",
      },
      {
        title: "Huge solar potential",
        description: "Africa receives more sunlight than any other continent",
      },
      {
        title: "Post-harvest losses",
        description:
          "40% of food is lost due to lack of cold chain infrastructure",
      },
      {
        title: "Water scarcity",
        description: "400+ million people lack access to safe drinking water",
      },
    ],
  },

  howItWorks: {
    badge: "Our Process",
    title: "How SkillWatts Works",
    subtitle:
      "We manage the full project lifecycle from assessment to long-term operations.",
    steps: [
      {
        number: "01",
        title: "Project Assessment",
        description:
          "Site analysis, energy/water needs, feasibility study and demand mapping.",
      },
      {
        number: "02",
        title: "System Design",
        description:
          "Solar, storage, water and processing systems tailored to each project's specific requirements.",
      },
      {
        number: "03",
        title: "Financing & Structuring",
        description:
          "Pay-as-you-go, donor funding, public-private partnerships, or commercial models.",
      },
      {
        number: "04",
        title: "Deployment",
        description:
          "Local assembly, installation, and commissioning with African workforce.",
      },
      {
        number: "05",
        title: "Operation & Maintenance",
        description:
          "Monitoring, servicing and performance guarantees for long-term success.",
      },
    ],
  },

  cta: {
    title: "Ready to Build Your Infrastructure Project?",
    subtitle:
      "Whether you're a government, NGO, business or community, we have the solutions and financing models to make your project happen.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "Schedule a Call",
  },
};

export type SiteContent = typeof defaultContent;
export type ContentKey = keyof SiteContent;
