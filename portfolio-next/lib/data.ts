import { Project, Skill, Experience, BlogPost, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: "mindful-journal",
    title: "Mindful Journal",
    description: "PWA + IA - Application de journaling privacy-first alimentée par l'IA",
    longDescription:
      "Application de journaling privacy-first développée pour le Google Chrome Built-in AI Challenge 2025. Permet de rédiger, réfléchir et suivre son humeur en toute sécurité avec stockage 100% local et aucune télémétrie.",
    image: "/projects/mindful-journal.svg",
    tags: ["PWA", "IA", "AI", "Chrome"],
    category: "ia",
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://mindful-journal.vercel.app",
    github: "https://github.com/Mohammad77Radwan/mindful-journal",
    date: "2025",
    featured: true,
    stats: [
      { label: "Score Lighthouse", value: "98" },
      { label: "Temps de charge", value: "0.8s" },
      { label: "Storage local", value: "100%" },
    ],
    technologies: [
      { name: "Next.js 15" },
      { name: "Chrome AI APIs" },
      { name: "Tailwind CSS v4" },
      { name: "shadcn/ui" },
      { name: "PWA" },
    ],
  },
  {
    id: "code-survivors",
    title: "Code Survivors",
    description: "EdTech - Application éducative pour enseignants de programmation",
    longDescription:
      "Application inspirée de The Last of Us pour les enseignants. Permet aux étudiants de partager leur humeur et des extraits de code, créant un environnement de classe engageant et interactif avec des statistiques de participation en temps réel.",
    image: "/projects/code-survivors.svg",
    tags: ["EdTech", "Supabase", "Real-time"],
    category: "fullstack",
    btsBlocks: ["Bloc 1", "Bloc 2"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
    ],
    link: "https://code-survivors.vercel.app",
    github: "https://github.com/Mohammad77Radwan/code-survivors",
    date: "2025",
    featured: true,
    stats: [
      { label: "Utilisateurs actifs", value: "150+" },
      { label: "Écoles partenaires", value: "5" },
      { label: "Engagement moyen", value: "85%" },
    ],
    technologies: [
      { name: "Next.js 15" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: "api-citations",
    title: "API Citations REST",
    description: "Application pédagogique consommant l'API Quotable",
    longDescription:
      "Projet pédagogique complet avec guide détaillé, environnement Codespaces, et déploiement automatique via GitHub Pages. Enseigne les concepts de REST API, async/await, et gestion d'erreurs.",
    image: "/projects/api-citations.svg",
    tags: ["REST API", "API", "Débutant"],
    category: "frontend",
    btsBlocks: ["Bloc 1", "Bloc 2"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
    ],
    link: "https://mohammad77radwan.github.io/api-citations",
    github: "https://github.com/Mohammad77Radwan/api-citations",
    date: "Septembre 2025",
    featured: false,
    stats: [
      { label: "Citations générées", value: "1000+" },
      { label: "Étudiants formés", value: "50+" },
      { label: "Page views", value: "2.5K" },
    ],
    technologies: [
      { name: "JavaScript" },
      { name: "Fetch API" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "GitHub Pages" },
    ],
  },
  {
    id: "techsolutions",
    title: "TechSolutions - Gestion de Tickets",
    description: "UX/UI Design - Conception complète d'un outil IT",
    longDescription:
      "Conception complète d'un outil de gestion de tickets IT basée sur une méthodologie UX professionnelle. Inclut personas détaillés, wireframes, design system et prototype interactif haute-fidélité.",
    image: "/projects/techsolutions.svg",
    tags: ["UX/UI", "Design", "Figma"],
    category: "design",
    btsBlocks: ["Bloc 1", "Bloc 2"],
    btsCompetences: [
      "Travailler en mode projet",
      "Concevoir et développer une solution applicative",
    ],
    link: "https://www.figma.com/file/techsolutions",
    date: "Septembre 2025",
    featured: true,
    stats: [
      { label: "Wireframes", value: "12" },
      { label: "Écrans conçus", value: "8" },
      { label: "Personas", value: "3" },
    ],
    technologies: [
      { name: "Figma" },
      { name: "UX Research" },
      { name: "UI Design" },
      { name: "Prototyping" },
      { name: "Design System" },
    ],
  },
  {
    id: "morefix-vitrine",
    title: "Site Vitrine MoreFix",
    description: "Full-Stack - Site vitrine modern pour MoreFix",
    longDescription:
      "Développement complet d'un site vitrine moderne pour MoreFix, entreprise de vente de produits high-tech reconditionnés. Réalisé en 5 semaines avec formation de l'équipe.",
    image: "/projects/morefix.svg",
    tags: ["Full-Stack", "Next.js", "Commerce"],
    category: "fullstack",
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://morefix.vercel.app",
    github: "https://github.com/Mohammad77Radwan/morefix-vitrine",
    date: "Mai-Juin 2025",
    featured: true,
    stats: [
      { label: "Score Lighthouse", value: "95" },
      { label: "Produits affichés", value: "200+" },
      { label: "Conversion", value: "+40%" },
    ],
    technologies: [
      { name: "Next.js 15" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Vercel" },
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Langages",
    skills: [
      { name: "JavaScript", level: 95, icon: "js" },
      { name: "TypeScript", level: 90, icon: "ts" },
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
      { name: "Laravel", level: 84, icon: "laravel" },
      { name: "Tailwind CSS", level: 97, icon: "tailwind" },
      { name: "Alpine.js", level: 80, icon: "alpine" },
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
