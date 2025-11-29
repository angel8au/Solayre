import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '@/types/project'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
}

export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Project file not found: ${fullPath}`)
      return undefined
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Debug: verificar que el slug coincida
    if (data.slug && data.slug !== slug) {
      console.warn(`Slug mismatch: expected ${slug}, got ${data.slug}`)
    }
    
    // Convertir datos del frontmatter al tipo Project
    const project: Project = {
      id: data.id || slug,
      slug: data.slug || slug,
      title: data.title || '',
      description: data.description || '',
      content: content || '',
      image: data.image || data.heroImage || '',
      heroImage: data.heroImage || data.image || '',
      location: data.location || '',
      capacity: data.capacity || '',
      date: data.date || new Date().toISOString(),
      category: data.category,
      tags: data.tags || [],
      savings: data.savings,
      return: data.return,
      systemType: data.systemType,
      investment: data.investment,
      returnYears: data.returnYears,
      savings25Years: data.savings25Years,
      roi: data.roi,
      panels: data.panels,
      inverter: data.inverter,
      monthlyProduction: data.monthlyProduction,
      annualSavings: data.annualSavings,
      problem: data.problem,
      objectives: data.objectives,
      solution: data.solution,
      savingsProjection: data.savingsProjection,
      gallery: data.gallery || [],
      testimonial: data.testimonial,
    }
    
    return project
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return undefined
  }
}

export function getAllProjects(): Project[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      console.warn(`Projects directory does not exist: ${projectsDirectory}`)
      return []
    }
    
    const slugs = getProjectSlugs()
    console.log(`Found ${slugs.length} project files:`, slugs)
    
    const projects = slugs
      .map((slug) => {
        const project = getProjectBySlug(slug)
        if (!project) {
          console.warn(`Failed to load project: ${slug}`)
        }
        return project
      })
      .filter((project): project is Project => project !== undefined)
    
    console.log(`Successfully loaded ${projects.length} projects`)
    
    // Ordenar por fecha (más reciente primero)
    return projects.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error getting all projects:', error)
    return []
  }
}

