import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Instalación Profesional",
    description: "Nuestro equipo de técnicos capacitados se encarga de todo el proceso de instalación, desde la evaluación inicial hasta la conexión a la red eléctrica."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Sin Contratos",
    description: "El equipo es totalmente tuyo. Sin contratos ni pagos mensuales. Una vez que pagas por tus paneles, son tuyos para siempre."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Larga Vida Útil",
    description: "Nuestros paneles tienen una vida útil de más de 25 años, lo que significa energía limpia y gratuita por décadas."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Alta Calidad",
    description: "Nos aseguramos de que tu instalación sea impecable. Sistema solar de alta calidad que funcionará sin problemas durante años."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Financiamiento Flexible",
    description: "Opciones de financiamiento personalizadas según tus necesidades. Sin costos ocultos y con pagos fáciles."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Ahorro Inmediato",
    description: "Empieza a ahorrar hoy. Reduce drásticamente tu factura de luz desde el primer día de instalación."
  }
]

export function PorQueElegirSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] text-foreground">
            ¿Por qué elegir Solayre?
          </h2>
          <p className="text-lg lg:text-[20px] text-foreground">
            Nos comprometemos con la excelencia en cada instalación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-normal leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

