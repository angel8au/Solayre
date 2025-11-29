import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/mock-projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import Link from "next/link"
import { MapPin, CheckCircle2 } from "lucide-react"
import { SavingsProjectionChart } from "@/components/Sections/project/SavingsProjectionChart"

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const projects = getAllProjects()
    const slugs = projects.map((project) => ({
      slug: project.slug,
    }))
    console.log('Generating static params for projects:', slugs.map(p => p.slug))
    return slugs
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Configurar para permitir rutas dinámicas en desarrollo
export const dynamicParams = true

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  console.log(`Loading project with slug: ${slug}`)
  
  const project = getProjectBySlug(slug)
  
  // Debug: Log para verificar qué está pasando
  if (!project) {
    console.error(`Project not found for slug: ${slug}`)
    console.log('Available projects:', getAllProjects().map(p => p.slug))
    notFound()
  }

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <ImageWithFallback
          src={project.heroImage || project.image}
          alt={project.title}
          fill
          className="object-cover"
          fallbackClassName="w-full h-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-4xl">
            {project.systemType && (
              <Badge variant="outline" className="bg-[#3B4C56] text-white border-none font-bold mb-4 w-fit">
                {project.systemType}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/resultados">← Volver a Resultados</Link>
          </Button>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                Inversión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.investment || "N/A"}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                Retorno
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.returnYears || "N/A"}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                Ahorro 25 años
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.savings25Years || "N/A"}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                ROI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.roi || "N/A"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Problema</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem || "No se ha especificado el problema del proyecto."}
              </p>
            </div>

            {/* Project Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Objetivos del Proyecto</h2>
                <div className="space-y-4">
                  {project.objectives.map((objective, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{objective.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Savings Projection Chart */}
            {project.savingsProjection && project.savingsProjection.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Proyección de Ahorro Acumulado</h2>
                <Card>
                  <CardContent className="pt-6">
                    <SavingsProjectionChart data={project.savingsProjection} />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Solution Section */}
            {project.solution && (
              <div>
                <h2 className="text-3xl font-bold mb-4">La Solución</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Technical Specifications - Sticky Aside Right */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Especificaciones Técnicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Capacidad</p>
                    <p className="font-semibold">{project.capacity}</p>
                  </div>
                  {project.panels && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Paneles</p>
                      <p className="font-semibold">{project.panels}</p>
                    </div>
                  )}
                  {project.inverter && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Inversor</p>
                      <p className="font-semibold">{project.inverter}</p>
                    </div>
                  )}
                  {project.monthlyProduction && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Producción mensual</p>
                      <p className="font-semibold">{project.monthlyProduction}</p>
                    </div>
                  )}
                  {project.annualSavings && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ahorro anual</p>
                      <p className="font-semibold">{project.annualSavings}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Savings Summary Bar */}
        <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm opacity-90 mb-1">Ahorro primer año</p>
              <p className="text-xl font-bold">{project.annualSavings || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Recuperación</p>
              <p className="text-xl font-bold">{project.returnYears || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">ROI 25 años</p>
              <p className="text-xl font-bold">{project.roi || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Ahorro acumulado</p>
              <p className="text-xl font-bold">{project.savings25Years || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Galería del Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`Imagen ${index + 1} del proyecto ${project.title}`}
                    fill
                    className="object-cover"
                    fallbackClassName="w-full h-full rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Section */}
        {project.testimonial && (
          <div className="mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 text-6xl text-primary/20 font-serif">
                    "
                  </div>
                  <blockquote className="text-lg leading-relaxed mb-6 relative z-10">
                    {project.testimonial.text}
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/contacto">Solicitar Consulta Similar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
