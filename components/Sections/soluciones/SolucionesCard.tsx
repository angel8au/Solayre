import { ImageWithFallback } from "@/components/ui/image-with-fallback"

interface SolucionesCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

export function SolucionesCard({ imageSrc, imageAlt, title, description }: SolucionesCardProps) {
  return (
    <div className="flex flex-col text-center">
      <div className="relative h-[400px] w-full mb-6">
        <ImageWithFallback
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          fallbackClassName="w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-base font-normal text-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

