import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { SolucionesSection } from "@/components/Sections/soluciones/SolucionesSection"
import { ProjectSection } from "@/components/Sections/project/ProjectSection"
import { CTASection } from "@/components/Sections/cta/CTASection"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden h-[600px] sm:h-[700px] md:h-[700px] lg:h-[800px] xl:h-[1050px] hero-gradient"
      >
        {/* Hero Image Background */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-full ">
          <ImageWithFallback
            src="/images/hero-solayre.png"
            alt="Hero Solayre"
            fill
            className="object-contain object-bottom w-full"
            fallbackClassName="w-full h-full"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="absolute left-1/2 top-[72px] z-10 w-full -translate-x-1/2 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 flex flex-col gap-3">
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px] text-balance">
                Ahorra dinero en tu recibo de luz con paneles solares en Sinaloa
              </h1>
              <p className="text-xl font-normal text-foreground sm:text-2xl md:text-3xl lg:text-[36px]">
                Descubre en cuánto tiempo puedes recuperar tu inversión
              </p>
            </div>
            <Button asChild size="lg" className="px-4 py-2">
              <Link href="#calculadora">Calculadora solar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comunidades Desconectadas Section */}
      <section className="relative w-full overflow-hidden h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] bg-black">
        {/* Background Image */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <ImageWithFallback
            src="/images/enerigia-comunidades.jpg"
            alt="Energía solar para comunidades desconectadas"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain object-bottom"
            fallbackClassName="w-full h-auto"
            sizes="100vw"
          />
        </div>
        
        {/* Content Overlay */}
        <article className="absolute left-1/2 top-[116px] z-10 w-full -translate-x-1/2 px-4">
          <header className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[64px] text-balance">
              Energía solar para<br />
              comunidades desconectadas
            </h2>
            <p className="text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-[36px]">
              Llevamos sistemas solares que ofrecen autonomía, seguridad y luz limpia a familias en zonas rurales.
            </p>
          </header>
        </article>
      </section>

      {/* Soluciones Section */}
      <SolucionesSection />



      {/* Project Section */}
      <ProjectSection />

      {/* CTA Section */}
      <CTASection
        title="¿Listo para comenzar?"
        subtitle="Contacta con nosotros para una consulta gratuita y descubre cómo la energía solar puede transformar tu hogar o negocio."
        primaryButton={{
          text: "Solicitar Consulta",
          href: "/contacto"
        }}
      />
    </div>
  )
}

