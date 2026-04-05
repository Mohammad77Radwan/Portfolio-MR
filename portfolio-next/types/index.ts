export type BtsBlock = "Bloc 1" | "Bloc 2" | "Bloc 3";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  context?: string;
  problem?: string;
  image: string;
  tags: string[];
  category: "fullstack" | "frontend" | "design" | "ia" | "edtech";
  categories?: string[];
  screenshots?: string[];
  btsBlocks?: Array<"Bloc 1" | "Bloc 2" | "Bloc 3">;
  btsCompetences?: string[];
  link?: string;
  github?: string;
  demoVideo?: string;
  date: string;
  featured: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
  technologies: {
    name: string;
    icon?: string;
  }[];
}

export interface Skill {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon?: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: number;
  image?: string;
  featured: boolean;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
}
