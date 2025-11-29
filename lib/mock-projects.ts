import { Project } from "@/types/project"
import { getAllProjects as getAllMDXProjects, getProjectBySlug as getMDXProjectBySlug } from "./mdx"

// Re-exportar funciones desde mdx.ts para mantener compatibilidad
export function getProjectBySlug(slug: string): Project | undefined {
  return getMDXProjectBySlug(slug)
}

export function getAllProjects(): Project[] {
  return getAllMDXProjects()
}

// Mantener mockProjects para compatibilidad si es necesario
export const mockProjects: Project[] = getAllMDXProjects()

