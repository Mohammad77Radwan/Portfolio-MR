import { z } from "zod";

// ============================================
// Core Domain Schemas
// ============================================

export const BtsBlockSchema = z.enum(["Bloc 1", "Bloc 2", "Bloc 3"]);
export type BtsBlock = z.infer<typeof BtsBlockSchema>;

export const ProjectCategorySchema = z.enum([
  "fullstack",
  "frontend",
  "design",
  "ia",
  "edtech",
]);
export type ProjectCategory = z.infer<typeof ProjectCategorySchema>;

export const TechnologySchema = z.object({
  name: z.string().min(1, "Technology name is required"),
  icon: z.string().optional(),
});
export type Technology = z.infer<typeof TechnologySchema>;

export const ProjectStatSchema = z.object({
  label: z.string().min(1, "Stat label is required"),
  value: z.string().min(1, "Stat value is required"),
});
export type ProjectStat = z.infer<typeof ProjectStatSchema>;

export const ProjectSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  longDescription: z.string().min(1, "Long description is required"),
  context: z.string().optional(),
  problem: z.string().optional(),
  image: z.string().min(1, "Project image is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  category: ProjectCategorySchema,
  categories: z.array(z.string()).optional(),
  screenshots: z.array(z.string()).optional(),
  btsBlocks: z.array(BtsBlockSchema).optional(),
  btsCompetences: z.array(z.string()).optional(),
  link: z.string().url("Invalid URL").optional(),
  github: z.string().url("Invalid GitHub URL").optional(),
  demoVideo: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  featured: z.boolean(),
  stats: z.array(ProjectStatSchema).optional(),
  technologies: z.array(TechnologySchema).min(1, "At least one technology is required"),
});
export type Project = z.infer<typeof ProjectSchema>;

export const SkillItemSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  level: z.number().min(0).max(100, "Level must be between 0 and 100"),
  icon: z.string().optional(),
});
export type SkillItem = z.infer<typeof SkillItemSchema>;

export const SkillSchema = z.object({
  category: z.string().min(1, "Category is required"),
  skills: z.array(SkillItemSchema).min(1, "At least one skill is required"),
});
export type Skill = z.infer<typeof SkillSchema>;

export const ExperienceSchema = z.object({
  id: z.string().min(1, "Experience ID is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(1, "Description is required"),
  highlights: z.array(z.string()).min(1, "At least one highlight is required"),
  technologies: z.array(z.string()).min(1, "At least one technology is required"),
});
export type Experience = z.infer<typeof ExperienceSchema>;

export const BlogPostSchema = z.object({
  id: z.string().min(1, "Blog post ID is required"),
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"),
  readTime: z.number().positive("Read time must be positive"),
  image: z.string().optional(),
  featured: z.boolean(),
  link: z.string().url("Invalid URL").optional(),
});
export type BlogPost = z.infer<typeof BlogPostSchema>;

export const TestimonialSchema = z.object({
  id: z.string().min(1, "Testimonial ID is required"),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  image: z.string().optional(),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
});
export type Testimonial = z.infer<typeof TestimonialSchema>;

export const FormationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  institution: z.string().min(1, "Institution is required"),
  period: z.string().min(1, "Period is required"),
});
export type Formation = z.infer<typeof FormationSchema>;

export const LanguageSchema = z.object({
  name: z.string().min(1, "Language name is required"),
  level: z.number().min(0).max(100, "Level must be between 0 and 100"),
  flag: z.string().min(1, "Flag is required"),
  proficiency: z.string().min(1, "Proficiency is required"),
});
export type Language = z.infer<typeof LanguageSchema>;

// ============================================
// Form Schemas
// ============================================

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom contient des caractères invalides"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});
export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const NewsletterFormSchema = z.object({
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide")
    .max(255, "L'email ne peut pas dépasser 255 caractères"),
});
export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;

// ============================================
// API Response Schemas
// ============================================

export const GithubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  homepage: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  language: z.string().nullable(),
  topics: z.array(z.string()).optional(),
  updated_at: z.string(),
  created_at: z.string(),
  pushed_at: z.string(),
  fork: z.boolean(),
  archived: z.boolean(),
  private: z.boolean(),
});
export type GithubRepo = z.infer<typeof GithubRepoSchema>;

export const GithubReposResponseSchema = z.array(GithubRepoSchema);

// ============================================
// Action Response Types
// ============================================

export interface ActionSuccess<T = undefined> {
  success: true;
  data?: T;
  message?: string;
}

export interface ActionError {
  success: false;
  error: string;
  fieldErrors?: Record<string, string[]>;
}

export type ActionResult<T = undefined> = ActionSuccess<T> | ActionError;

// ============================================
// Utility Functions
// ============================================

/**
 * Safely parse data with a Zod schema, returning typed result
 */
export function safeParseData<T>(
  schema: z.ZodType<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: result.error };
}

/**
 * Format Zod errors into field-level error messages
 */
export function formatZodErrors(error: z.ZodError): Record<string, string[]> {
  const fieldErrors: Record<string, string[]> = {};
  
  for (const issue of error.issues) {
    const path = issue.path.join(".");
    if (!fieldErrors[path]) {
      fieldErrors[path] = [];
    }
    fieldErrors[path].push(issue.message);
  }
  
  return fieldErrors;
}
