export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const profile = {
  name: "Tey Hao Teck",
  headline: "AI Systems & Software Engineering",
  description:
    "Computer Science graduate and AI Systems postgraduate student building intelligent applications, financial analytics tools, and enterprise software solutions.",
  github: "https://github.com/thteck",
  linkedin: "https://www.linkedin.com/in/thteck/",
  website: "https://thteck.github.io",
};

export const projects: Project[] = [
  {
    title: "Options Strategy Recommendation & Optimisation",
    category: "Artificial Intelligence · Finance",
    description:
      "An intelligent options strategy recommendation system combining rule-based reasoning, knowledge representation, and genetic algorithm optimisation.",
    technologies: [
      "Python",
      "Genetic Algorithms",
      "Streamlit",
      "Options Analytics",
    ],
    github:
      "https://github.com/thteck/Options-Strategy-Recommendation-and-Optimisation-System",
    demo: "http://20.249.51.10:8501/",
    featured: true,
  },
  {
    title: "S&P 500 Intrinsic Value Screener",
    category: "Machine Learning · Finance",
    description:
      "A stock valuation research system combining financial forecasting with discounted cash flow analysis.",
    technologies: [
      "Python",
      "Machine Learning",
      "Financial Modelling",
      "DCF",
    ],
    github:
      "https://github.com/thteck/Intrinsic-Value-Calculation-of-Stocks-Using-Machine-Learning-in-Discounted-Cash-Flow",
    featured: true,
  },
  {
    title: "Face Recognition Through Siamese Network",
    category: "Computer Vision · Deep Learning",
    description:
      "A facial recognition system using Siamese neural networks to learn facial similarities and distinguish identities.",
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Siamese Networks",
    ],
    github:
      "https://github.com/thteck/Face-Recognition-Through-Siamese-Network",
    featured: true,
  },
];

export const skills = {
  "AI & Data": [
    "Python",
    "Machine Learning",
    "Computer Vision",
    "Genetic Algorithms",
    "Data Analysis",
  ],
  "Software Engineering": [
    "TypeScript",
    "React",
    "REST APIs",
    "FastAPI",
    "SQL",
  ],
  "Cloud & DevOps": [
    "Azure",
    "Docker",
    "Git",
    "GitHub Actions",
  ],
  "Enterprise Platforms": [
    "Salesforce",
    "Apex",
    "Power Automate",
    "Microsoft 365",
  ],
};

export const experience = [
  {
    role: "IT Officer",
    organization: "Boys' Town Singapore",
    period: "Jan 2024 – Present",
    description:
      "Developing and supporting enterprise applications, Salesforce integrations, workflow automation, infrastructure, and cloud solutions.",
  },
];

export const education = [
  {
    degree: "Master of Technology in AI Systems",
    institution: "National University of Singapore (NUS-ISS)",
    period: "2025 – Present",
  },
  {
    degree: "BSc (Hons) Computer Science (Machine Learning & AI)",
    institution: "University of London",
    period: "2023 · First Class Honours",
  },
];