"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background ">
      <div className="container px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden  md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            Nosotros
          </Link>
          <Link
            href="/resultados"
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            Resultados
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            Contacto
          </Link>
          <Button asChild>
            <Link href="#calculadora">Calculadora</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex items-center justify-center w-10 h-10 ${
            isMenuOpen ? 'shadow-neumorphic-inset' : 'shadow-neumorphic active:shadow-neumorphic-inset'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="px-4  flex flex-col py-4 space-y-4">
            <Link
              href="/"
              className="text-sm font-medium py-3 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium py-3 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/resultados"
              className="text-sm font-medium py-3 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium py-3 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="w-full">
              <Link href="#calculadora" onClick={() => setIsMenuOpen(false)}>
                Calculadora
              </Link>
            </Button>
            <div className="flex  justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

