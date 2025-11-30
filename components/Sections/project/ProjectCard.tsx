import Link from "next/link"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/types/project"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (!project.slug) {
    console.error('Project missing slug:', project)
    return null
  }

  return (
    <Card className="flex flex-col h-full transition-transform hover:scale-[1.02]">
      <Link href={`/resultados/${project.slug}`} className="flex flex-col h-full">
        {/* Image with System Type Overlay */}
        <div className="relative h-64 w-full overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            fallbackClassName="w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.systemType && (
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="secondary">
                {project.systemType}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
            <p className="text-base text-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-border">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Capacidad</span>
              <span className="text-sm font-bold text-foreground">{project.capacity}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Ahorro</span>
              <span className="text-sm font-bold text-foreground">{project.savings || "N/A"}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground mb-1">Retorno</span>
              <span className="text-sm font-bold text-foreground">{project.return || "N/A"}</span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col gap-2 mt-auto w-full">
            <Button variant="secondary" className="w-full pointer-events-none">
              Ver caso completo →
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  )
}

