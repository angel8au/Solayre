import Link from "next/link"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Button } from "@/components/ui/button"
import { SolucionesSection } from "@/components/Sections/soluciones/SolucionesSection"
import { CTASection } from "@/components/Sections/cta/CTASection"
import { PorQueElegirSection } from "@/components/Sections/por-que-elegir/PorQueElegirSection"

export default function Nosotros() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden h-[600px] sm:h-[700px] md:h-[800px] lg:h-[886px] hero-gradient-nosotros"
      >
        {/* Hero Image Background */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[479px]">
          <ImageWithFallback
            src="/images/hero-aboutus.png"
            alt="Hero Nosotros"
            fill
            className="object-cover object-center"
            fallbackClassName="w-full h-full"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="absolute left-1/2 top-[72px] z-10 w-full -translate-x-1/2 px-4">
          <div className="mx-auto max-w-5xl text-center flex flex-col gap-7">
            <p className="text-lg font-bold uppercase tracking-wider text-[#2d2d2d]">
              nosotros
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#2d2d2d] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[60px] text-balance">
              Transformamos la energía solar en ahorro real para tu hogar o negocio
            </h1>
            <p className="text-xl font-normal text-[#2d2d2d] sm:text-2xl lg:text-[20px] lg:leading-[32.5px]">
              Más de 10 años instalando sistemas solares confiables en Sinaloa y el noroeste de México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="h-12 px-4">
                <Link href="/resultados">Conoce nuestras soluciones</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-12 px-4">
                <Link href="/contacto">Contactanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-4 lg:w-[722px]">
              <p className="text-[#d65600] text-xl font-bold tracking-[3px] uppercase">
                HISTORIA
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[60px] text-foreground">
                Energía sostenible al alcance de todos
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-lg lg:text-[20px] lg:leading-[32.5px] text-foreground">
                  Solayre nació con la visión de facilitar el acceso a energía limpia, segura y accesible. En una década hemos instalado más de 2,000 plantas solares en hogares, negocios y proyectos industriales, impulsando la transición energética en Sinaloa.
                </p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 lg:w-[722px]">
              <div className="bg-background rounded-xl shadow-neumorphic p-6 flex flex-col items-center justify-center text-center">
                <p className="text-4xl lg:text-[48px] font-bold leading-[1.3] text-foreground">
                  10+
                </p>
                <p className="text-base lg:text-[16px] font-normal leading-6 text-foreground">
                  años de experiencia
                </p>
              </div>
              <div className="bg-background rounded-xl shadow-neumorphic   p-6 flex flex-col items-center justify-center text-center">
                <p className="text-4xl lg:text-[48px] font-bold leading-[1.3] text-foreground">
                  2,000+
                </p>
                <p className="text-base lg:text-[16px] font-normal leading-6 text-foreground">
                  instalaciones realizadas
                </p>
              </div>
              <div className="bg-background rounded-xl shadow-neumorphic p-6 flex flex-col items-center justify-center text-center">
                <p className="text-4xl lg:text-[48px] font-bold leading-[1.3] text-foreground">
                  1
                </p>
                <p className="text-base lg:text-[16px] font-normal leading-6 text-foreground">
                  planta instalada por día
                </p>
              </div>
              <div className="bg-background rounded-xl shadow-neumorphic p-6 flex flex-col items-center justify-center text-center">
                <p className="text-xl lg:text-[28px] font-bold leading-[1.3] text-foreground text-center">
                  Ingeniería y soporte local
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Section */}
      <SolucionesSection />

      {/* Trayectoria y Logros Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-4 lg:w-[722px]">
              <p className="text-lg font-bold uppercase tracking-wider text-foreground">
                TRAYECTORIA Y LOGROS
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[60px] text-foreground">
                Un crecimiento sostenido respaldado por resultados
              </h2>
              <p className="text-lg lg:text-[20px] lg:leading-[32.5px] text-foreground">
                Ingeniería certificada + proyectos reales + retorno de inversión comprobado.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-primary rounded-xl shadow-neumorphic-inset p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl lg:text-[48px] font-bold leading-[72px] text-foreground">
                    2000+
                  </p>
                  <p className="text-base lg:text-[16px] font-normal leading-6 text-foreground">
                    Instalaciones en 10 años
                  </p>
                </div>
                <div className="bg-primary rounded-xl shadow-neumorphic-inset p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-lg lg:text-[20px] font-bold leading-6 text-foreground text-center">
                    Crecimiento exponencial en Sinaloa
                  </p>
                </div>
                <div className="bg-primary rounded-xl shadow-neumorphic-inset p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-lg lg:text-[20px] font-bold leading-6 text-foreground text-center">
                    Clientes residenciales, comerciales e industriales
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[500px] w-full lg:w-[722px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/images/enerigia-comunidades.jpg"
                alt="Instalaciones Solayre"
                fill
                className="object-cover"
                fallbackClassName="w-full h-full rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 722px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir Solayre? Section */}
      <PorQueElegirSection />

      {/* CTA Section */}
      <CTASection
        title="Haz que tu hogar genere su propia energía"
        subtitle="Cambia a energía solar con un sistema diseñado a tu medida y empieza a ver resultados desde el primer mes."
        primaryButton={{
          text: "Conoce nuestras soluciones",
          href: "/resultados"
        }}
      />
    </div>
  )
}
