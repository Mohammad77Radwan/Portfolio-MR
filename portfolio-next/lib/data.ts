import { Project, Skill, Experience, BlogPost, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: "morefix-webstore",
    title: "MoreFix WebStore",
    description: "E-commerce - Boutique dynamique de produits reconditionnés",
    longDescription:
      "WebStore e-commerce dynamique construite avec Next.js, React, Firebase Auth et Tailwind CSS. Plateforme complète de vente en ligne pour MoreFix avec authentification sécurisée et interface utilisateur moderne et réactive.",
    image: "/projects/morefix-webstore.svg",
    tags: ["E-commerce", "Next.js", "Firebase"],
    category: "fullstack",
    categories: ["ecommerce"],
    screenshots: ["/projects/screenshots/morefix-webstore-shot.svg"],
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://morefix.netlify.app/",
    github: "https://github.com/Mohammad77Radwan/Morefix_WebStore",
    date: "2026",
    featured: true,
    stats: [
      { label: "Score Lighthouse", value: "96" },
      { label: "Produits", value: "500+" },
      { label: "Conversion", value: "+45%" },
    ],
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Firebase Auth" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "enterprise-rag-pipeline",
    title: "Enterprise RAG Pipeline",
    description: "IA - Pipeline Retrieval-Augmented Generation asynchrone et distribuée",
    longDescription:
      "Pipeline RAG (Retrieval-Augmented Generation) de qualité entreprise avec recherche par vecteurs et traitement de tâches en arrière-plan. Architecture asynchrone conçue pour traiter des volumes de données importants avec latence minimale et scalabilité maximale.",
    image: "/projects/enterprise-rag-pipeline.svg",
    tags: ["RAG", "LLM", "Architecture"],
    category: "ia",
    categories: ["systems"],
    screenshots: ["/projects/screenshots/enterprise-rag-pipeline-shot.svg"],
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    github: "https://github.com/Mohammad77Radwan/enterprise-rag-pipeline",
    date: "2026",
    featured: true,
    stats: [
      { label: "Latence requête", value: "<500ms" },
      { label: "Scalabilité", value: "Distribuée" },
      { label: "Modèles LLM", value: "Multi" },
    ],
    technologies: [
      { name: "TypeScript" },
      { name: "Vector DB" },
      { name: "LLM APIs" },
      { name: "Async/Await" },
      { name: "Background Tasks" },
    ],
  },
  {
    id: "mindful-journal",
    title: "Mindful Journal",
    description: "PWA + IA - Application de journaling privacy-first alimentée par l'IA",
    longDescription:
      "Application de journaling privacy-first alimentée par l'IA intégrée de Chrome. Vous aide à rédiger, réfléchir et suivre votre humeur en toute sécurité avec stockage 100% local, assistance IA, suivi de l'humeur et contrôle total des données sans stockage cloud.",
    image: "/projects/mindful-journal.svg",
    tags: ["PWA", "IA", "AI", "Privacy"],
    category: "ia",
    categories: ["pwa"],
    screenshots: ["/projects/screenshots/mindful-journal-shot.svg"],
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    github: "https://github.com/Mohammad77Radwan/MINDFUL-JOURNAL",
    date: "2025",
    featured: true,
    stats: [
      { label: "Storage local", value: "100%" },
      { label: "IA embarquée", value: "Chrome API" },
      { label: "Privacy", value: "100%" },
    ],
    technologies: [
      { name: "TypeScript" },
      { name: "Chrome AI APIs" },
      { name: "PWA" },
      { name: "Local Storage" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "collaborative-node-editor",
    title: "Collaborative Node Editor",
    description: "Système - Éditeur visuel multiplayer temps réel",
    longDescription:
      "Interface de programmation visuelle collaborative temps réel alimentée par Vue 3, Yjs (CRDTs) et Rust/WASM. Permet à plusieurs utilisateurs de collaborer simultanément sur des graphes de nœuds avec synchronisation temps réel et performance optimisée par WASM.",
    image: "/projects/collaborative-node-editor.svg",
    tags: ["CRDT", "Real-time", "Vue 3", "Rust"],
    category: "fullstack",
    categories: ["systems"],
    screenshots: ["/projects/screenshots/collaborative-node-editor-shot.svg"],
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    github: "https://github.com/Mohammad77Radwan/collaborative-node-editor",
    date: "2026",
    featured: true,
    stats: [
      { label: "Utilisateurs concurrents", value: "100+" },
      { label: "Latence sync", value: "<50ms" },
      { label: "Fluidité", value: "60 FPS" },
    ],
    technologies: [
      { name: "Vue 3" },
      { name: "Yjs" },
      { name: "CRDT" },
      { name: "Rust" },
      { name: "WebAssembly" },
    ],
  },
  {
    id: "go-distributed-orderbook",
    title: "Go Distributed Orderbook",
    description: "Système - Moteur de matching financier haute performance et concurrent",
    longDescription:
      "Moteur de matching financier concurrent haute performance et simulateur de carnet d'ordres en temps réel construit en Go. Architecture distribuée pour traiter des transactions à haut débit avec une latence minimale et une fiabilité maximale.",
    image: "/projects/go-distributed-orderbook.svg",
    tags: ["GO", "Distributed Systems", "Real-time", "Finance"],
    category: "fullstack",
    categories: ["systems"],
    screenshots: ["/projects/screenshots/go-distributed-orderbook-shot.svg"],
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://go-distributed-orderbook.onrender.com",
    github: "https://github.com/Mohammad77Radwan/go-distributed-orderbook",
    date: "2026",
    featured: true,
    stats: [
      { label: "Throughput", value: "10K+ TPS" },
      { label: "Latence moyenne", value: "<1ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    technologies: [
      { name: "Go" },
      { name: "Svelte" },
      { name: "WebSocket" },
      { name: "gRPC" },
      { name: "PostgreSQL" },
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Langages",
    skills: [
      { name: "JavaScript", level: 95, icon: "js" },
      { name: "TypeScript", level: 90, icon: "ts" },
      { name: "Go", level: 80, icon: "go" },
      { name: "Rust", level: 72, icon: "rust" },
      { name: "PHP", level: 85, icon: "php" },
      { name: "SQL", level: 88, icon: "sql" },
      { name: "HTML5", level: 98, icon: "html" },
      { name: "CSS3", level: 96, icon: "css" },
      { name: "Python", level: 78, icon: "python" },
    ],
  },
  {
    category: "Frameworks & Librairies",
    skills: [
      { name: "Next.js", level: 94, icon: "nextjs" },
      { name: "React", level: 93, icon: "react" },
      { name: "Vue 3", level: 78, icon: "vue" },
      { name: "Svelte", level: 74, icon: "svelte" },
      { name: "Yjs (CRDT)", level: 76, icon: "yjs" },
      { name: "Laravel", level: 84, icon: "laravel" },
      { name: "Tailwind CSS", level: 97, icon: "tailwind" },
      { name: "Alpine.js", level: 80, icon: "alpine" },
      { name: "Firebase Auth", level: 86, icon: "firebase" },
      { name: "Framer Motion", level: 85, icon: "framer" },
    ],
  },
  {
    category: "Outils & Services",
    skills: [
      { name: "Git/GitHub", level: 92, icon: "github" },
      { name: "VS Code", level: 96, icon: "vscode" },
      { name: "Figma", level: 87, icon: "figma" },
      { name: "Docker", level: 76, icon: "docker" },
      { name: "WebSocket", level: 84, icon: "websocket" },
      { name: "gRPC", level: 75, icon: "grpc" },
      { name: "Vector DB", level: 79, icon: "vectordb" },
      { name: "LLM APIs", level: 82, icon: "llm" },
      { name: "PostgreSQL", level: 82, icon: "postgres" },
      { name: "Vercel", level: 91, icon: "vercel" },
      { name: "Supabase", level: 85, icon: "supabase" },
    ],
  },
  {
    category: "Compétences Transversales",
    skills: [
      { name: "Architecture MVC", level: 88, icon: "arch" },
      { name: "REST API", level: 90, icon: "api" },
      { name: "Systèmes distribués", level: 82, icon: "distributed" },
      { name: "Architecture temps réel", level: 84, icon: "realtime" },
      { name: "RAG / IA appliquée", level: 81, icon: "rag" },
      { name: "UX/UI Design", level: 82, icon: "design" },
      { name: "SEO", level: 80, icon: "seo" },
      { name: "Agile/Scrum", level: 85, icon: "agile" },
      { name: "Veille Tech", level: 88 },
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "morefix-stage",
    title: "Développeur Web Full-Stack",
    company: "MoreFix",
    location: "Saint-Étienne",
    startDate: "2025-05",
    endDate: "2025-06",
    description:
      "Stage de développement web au sein de MoreFix, entreprise spécialisée dans la vente de produits high-tech reconditionnés. Conception et développement complet d'un site vitrine moderne.",
    highlights: [
      "Développement complet d'un site vitrine responsive avec Next.js 15 et React 19",
      "Création d'une galerie de produits interactive avec filtres et système de favoris",
      "Intégration de services tiers (Formspree, Google Maps, Analytics)",
      "Développement d'une interface d'administration pour la gestion du contenu",
      "Optimisation SEO et performances web (Core Web Vitals)",
      "Formation de l'équipe à l'utilisation et maintenance du site",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "education",
    title: "Étudiant BTS SIO SLAM",
    company: "Lycée Simone Weil",
    location: "Saint-Priest-en-Jarez",
    startDate: "2024-09",
    endDate: "2026-07",
    description:
      "Formation en développement d'applications et services numériques. Apprentissage des meilleures pratiques en conception applicative, qualité logicielle et cybersécurité.",
    highlights: [
      "Développement d'applications web et mobile",
      "Gestion de bases de données relationnelles",
      "Méthodologies Agile et Scrum",
      "Veille technologique et innovation",
      "Travail en équipe et collaboration",
      "Certifications: GitHub Foundations (GH-900)",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "SQL"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "ia-2026-prospective",
    title: "IA en 2026 - Prospective et Impact sur les Métiers Tech",
    excerpt:
      "Analyse des tendances IA pour 2026 et l'impact sur le développement web et les métiers numériques.",
    content: `L'intelligences artificielle continue de transformer le secteur du développement web...`,
    category: "IA",
    date: "2025-09-15",
    readTime: 12,
    featured: true,
  },
  {
    id: "ia-weekly-nvidia",
    title: "IA Weekly - Annonces NVIDIA, Amazon et OpenAI",
    excerpt:
      "Synthèse des dernières annonces des géants de la tech et leurs implications pour le développement.",
    content: `Cette semaine, les annonces des trois géants ont marqué l'actualité...`,
    category: "IA",
    date: "2025-09-08",
    readTime: 8,
    featured: true,
  },
  {
    id: "souverainete-numerique",
    title: "Souveraineté Numérique Française - Enjeux Stratégiques",
    excerpt:
      "Exploration des enjeux de souveraineté numérique française et les initiatives gouvernementales.",
    content: `La souveraineté numérique est devenue un sujet central pour le gouvernement français...`,
    category: "Technologie",
    date: "2025-08-20",
    readTime: 15,
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Thomas Dupont",
    role: "Responsable Technique",
    company: "MoreFix",
    content:
      "Mohammad a livré un site web complet et fonctionnel en seulement 5 semaines. Son professionnalisme et sa capacité à apprendre rapidement ont été remarquables. L'équipe a été capable de reprendre le projet en autonomie.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Sophie Martin",
    role: "Directrice Pédagogique",
    company: "Lycée Simone Weil",
    content:
      "Mohammad démontre une passion authentique pour le développement web. Ses projets montrent une grande maturité et une compréhension profonde des bonnes pratiques de développement.",
    rating: 5,
  },
];
