import { z } from 'zod';

// Skill validation
export const skillSchema = z.object({
  name: z.string().min(2, "Le nom de la compétence doit contenir au moins 2 caractères"),
  level: z.number().min(1, "Le niveau minimum est 1").max(5, "Le niveau maximum est 5"),
});

// Education validation
export const educationSchema = z.object({
  id: z.string(),
  degree: z.string().min(3, "Le diplôme doit contenir au moins 3 caractères"),
  institution: z.string().min(3, "L'établissement doit contenir au moins 3 caractères"),
  year: z.string().regex(/^\d{4}$/, "L'année doit être au format YYYY"),
  description: z.string().optional(),
});

// Certification validation
export const certificationSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Le nom de la certification doit contenir au moins 3 caractères"),
  issuer: z.string().min(2, "L'émetteur doit contenir au moins 2 caractères"),
  year: z.string().regex(/^\d{4}$/, "L'année doit être au format YYYY"),
  url: z.string().url("URL invalide").optional().or(z.literal('')),
});

// Project validation
export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Le nom du projet doit contenir au moins 3 caractères"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  role: z.string().min(3, "Le rôle doit contenir au moins 3 caractères"),
  year: z.string().regex(/^\d{4}$/, "L'année doit être au format YYYY"),
  link: z.string().url("URL invalide").optional().or(z.literal('')),
});

// UserProfile validation
export const userProfileSchema = z.object({
  name: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  title: z.string()
    .min(3, "Le titre professionnel doit contenir au moins 3 caractères")
    .max(100, "Le titre ne peut pas dépasser 100 caractères"),
  location: z.string()
    .min(3, "La localisation doit contenir au moins 3 caractères"),
  bio: z.string()
    .min(20, "La bio doit contenir au moins 20 caractères")
    .max(500, "La bio ne peut pas dépasser 500 caractères"),
  experienceYears: z.number()
    .min(0, "L'expérience ne peut pas être négative")
    .max(50, "L'expérience ne peut pas dépasser 50 ans"),
  skills: z.array(skillSchema)
    .min(1, "Au moins une compétence est requise")
    .max(20, "Maximum 20 compétences"),
  education: z.array(educationSchema)
    .min(1, "Au moins une formation est requise"),
  certifications: z.array(certificationSchema),
  projects: z.array(projectSchema),
  status: z.enum(['DRAFT', 'VALIDATED', 'INTERVIEW', 'ONBOARDING', 'INSERTED']),
});

// Job Alert validation
export const jobAlertSchema = z.object({
  term: z.string().min(2, "Le mot-clé doit contenir au moins 2 caractères"),
  location: z.string().min(2, "La localisation doit contenir au moins 2 caractères"),
  frequency: z.enum(['DAILY', 'WEEKLY']),
});

// Helper function to validate and return errors
export const validateUserProfile = (data: unknown) => {
  try {
    return {
      success: true,
      data: userProfileSchema.parse(data),
      errors: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        errors: error.issues.map((err: any) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }
    return {
      success: false,
      data: null,
      errors: [{ field: 'unknown', message: 'Erreur de validation inconnue' }],
    };
  }
};
