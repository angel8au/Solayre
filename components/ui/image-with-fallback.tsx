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
          "flex items-center justify-center bg-muted dark:from-blue-900/20 dark:to-green-900/20",
          hasFill && "absolute inset-0",
          className,
          fallbackClassName
        )}
      >
        <svg width="65" height="52" viewBox="0 0 65 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.0202 15.0713C39.0202 11.5029 41.9105 8.61264 45.4789 8.61264C49.0473 8.61264 51.9376 11.5029 51.9376 15.0713C51.9376 18.6398 49.0473 21.53 45.4789 21.53C41.9105 21.53 39.0202 18.6398 39.0202 15.0713ZM58.1282 39.0297L45.1689 26.0737L45.1172 26.1225L45.0655 26.0737L40.4475 30.6914L25.4989 15.7462L25.4505 15.7982L25.3988 15.7462L6.45869 34.6863V6.45869H58.1282V39.0297ZM0 51.6695H64.5869V0H0V51.6695Z" fill="#9CA3AF"/>
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

