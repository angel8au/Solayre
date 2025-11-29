"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps extends ImageProps {
  fallbackClassName?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  ...props
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false)
  const hasFill = 'fill' in props && props.fill

  if (imgError || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20",
          hasFill && "absolute inset-0",
          className,
          fallbackClassName
        )}
      >
        <svg
          className="h-12 w-12 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="sr-only">{alt || "Imagen no disponible"}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      className={className}
      onError={() => setImgError(true)}
      {...props}
    />
  )
}

