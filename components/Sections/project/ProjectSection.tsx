import { ProjectCard } from "./ProjectCard"
import { getAllProjects } from "@/lib/mock-projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectSection() {
  const allProjects = getAllProjects()
  // Obtener los últimos 3 proyectos (ya están ordenados por fecha)
  const latestProjects = allProjects.slice(0, 3)

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto text-center mb-12">
          <h2 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] text-foreground">
            Historias de éxito en Sinaloa
          </h2>
          <p className="text-lg lg:text-[20px] text-foreground">
            Conoce cómo familias, negocios y comunidades están transformando su energía con paneles solares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-12">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Botón para ver todos los proyectos */}
        <div className="flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/resultados">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

