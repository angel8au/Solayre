"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Nosotros
            </Link>
            <Link
              href="/resultados"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Resultados
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </Link>
           
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Solayre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

