"use client"

import { useEffect, useRef } from "react"

interface AnimatedPatternProps {
  className?: string
  direction?: "horizontal" | "vertical"
  speed?: number
}

export function AnimatedPattern({ className = "", direction = "vertical", speed = 20 }: AnimatedPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const positionRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const animate = () => {
      positionRef.current = (positionRef.current + 0.5) % 100

      if (direction === "vertical") {
        container.style.backgroundPosition = `0 ${positionRef.current}%`
      } else {
        container.style.backgroundPosition = `${positionRef.current}% 0`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [direction])

  return (
    <div
      ref={containerRef}
      className={`bg-repeat ${className}`}
      style={{
        backgroundImage: `url('/images/sadu-pattern.png')`,
        backgroundSize: direction === "vertical" ? "40px auto" : "auto 40px",
      }}
    />
  )
}
