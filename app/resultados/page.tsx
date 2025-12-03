import { getAllProjects } from "@/lib/mock-projects"
import { ProjectCard } from "@/components/Sections/project/ProjectCard"

export default function Resultados() {
  const projects = getAllProjects()

  return (
    <div className="container py-10">
      <div className="mb-12 text-left">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Resultados reales con energía solar
        </h1>
        <p className="text-lg text-muted-foreground">
        Historias de ahorro, eficiencia y transformación energética en hogares, negocios y gobierno.
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

