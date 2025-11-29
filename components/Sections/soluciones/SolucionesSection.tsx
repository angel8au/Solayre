import { SolucionesCard } from "./SolucionesCard"

export function SolucionesSection() {
  const soluciones = [
    {
      imageSrc: "/images/cfe.png",
      imageAlt: "Sistema Conectado a la Red",
      title: "Conectado a la Red",
      description: "→ Reduce tu recibo hasta 100%.",
    },
    {
      imageSrc: "/images/hybrid.png",
      imageAlt: "Sistema Híbrido",
      title: "Sistema Híbrido",
      description: "→ Respaldo 24/7.",
    },
    {
      imageSrc: "/images/island.png",
      imageAlt: "Sistema Independiente (Isla)",
      title: "Sistema Independiente (Isla)",
      description: "→ Autonomía completa.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="mb-3 text-3xl font-bold text-center leading-tight sm:text-4xl lg:text-[48px] text-foreground">
            Soluciones diseñadas para tu consumo real
          </h2>
          <p className="text-lg lg:text-[20px] text-foreground text-center">
            Cada proyecto inicia con un análisis personalizado para garantizar ahorro, seguridad y máxima eficiencia energética.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {soluciones.map((solucion, index) => (
            <SolucionesCard
              key={index}
              imageSrc={solucion.imageSrc}
              imageAlt={solucion.imageAlt}
              title={solucion.title}
              description={solucion.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

