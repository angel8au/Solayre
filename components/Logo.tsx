import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <div className="relative logo-container">
        <ImageWithFallback
          src="/images/logo-solayre.svg"
          alt="Solayre Logo"
          width={150}
          height={32}
          className="h-8 w-auto object-contain sm:h-10"
          fallbackClassName="h-8 w-auto sm:h-10"
          priority
        />
      </div>
    </div>
  )
}
