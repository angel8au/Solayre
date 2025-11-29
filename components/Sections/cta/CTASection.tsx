import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  subtitle: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export function CTASection({ title, subtitle, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg text-balance text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href={primaryButton.href}>{primaryButton.text}</Link>
            </Button>
            {secondaryButton && (
              <Button asChild variant="secondary" size="lg">
                <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

