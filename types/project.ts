export interface Project {
  id: string
  slug: string
  title: string
  description: string
  content: string
  image: string
  heroImage?: string
  location: string
  capacity: string
  date: string
  category?: string
  tags?: string[]
  savings?: string
  return?: string
  systemType?: "Conectado a la Red" | "Sistema Híbrido" | "Sistema Independiente"
  
  // Métricas financieras
  investment?: string
  returnYears?: string
  savings25Years?: string
  roi?: string
  
  // Especificaciones técnicas
  panels?: string
  inverter?: string
  monthlyProduction?: string
  annualSavings?: string
  
  // Contenido del proyecto
  problem?: string
  objectives?: Array<{
    title: string
    description: string
  }>
  solution?: string
  
  // Gráfico de ahorro acumulado
  savingsProjection?: Array<{
    year: number
    savings: number
  }>
  
  // Galería de imágenes
  gallery?: string[]
  
  // Testimonial
  testimonial?: {
    text: string
    author: string
    position: string
  }
}

