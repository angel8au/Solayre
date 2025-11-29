import { getAllProjects } from "@/lib/mock-projects"
import { ProjectCard } from "@/components/Sections/project/ProjectCard"

export default function Resultados() {
  const projects = getAllProjects()

  return (
    <div className="container py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Nuestros Proyectos
        </h1>
        <p className="text-lg text-muted-foreground">
          Descubre algunos de nuestros proyectos de instalación de paneles solares
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No hay proyectos disponibles en este momento.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

