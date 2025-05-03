"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TechStackCarouselProps {
  className?: string
}

interface TechItem {
  name: string
  image: string
}

export function TechStackCarousel({ className }: TechStackCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerContainerRef = useRef<HTMLDivElement>(null)

  const techItems: TechItem[] = [
    { name: "AWS", image: "/images/tech-aws.png" },
    { name: "Go", image: "/images/tech-go.png" },
    { name: "Jenkins", image: "/images/tech-jenkins.png" },
    { name: "LangChain", image: "/images/tech-langchain.png" },
    { name: "Echo", image: "/images/tech-registry.png" },
    { name: "PostgreSQL", image: "/images/tech-postgres.png" },
    { name: "React Native", image: "/images/tech-react-native.png" },
    { name: "Redis", image: "/images/tech-redis.png" },
    { name: "Docker", image: "/images/tech-docker.png" },
    { name: "Python", image: "/images/tech-python.png" },
    { name: "Grok", image: "/images/tech-core.png" },
  ]

  useEffect(() => {
    // Create a continuous animation that moves the logos from right to left
    const inner = innerContainerRef.current
    if (!inner) return

    // Clone the items to create a seamless loop
    const animation = inner.animate([{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], {
      duration: 30000, // 30 seconds for one complete cycle
      iterations: Number.POSITIVE_INFINITY,
      easing: "linear",
    })

    // Pause animation on hover
    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", () => {
        animation.pause()
      })

      container.addEventListener("mouseleave", () => {
        animation.play()
      })
    }

    return () => {
      animation.cancel()
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      <div ref={innerContainerRef} className="flex whitespace-nowrap" style={{ width: "fit-content" }}>
        {/* Double the items to create a seamless loop */}
        {[...techItems, ...techItems].map((item, index) => (
          <div key={`${item.name}-${index}`} className="inline-flex flex-col items-center justify-center mx-6">
            <div
              className="p-4 flex items-center justify-center"
              style={{ height: item.name === "Go" ? "100px" : "80px", width: item.name === "Go" ? "100px" : "80px" }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={item.name === "Go" ? 100 : 80}
                height={item.name === "Go" ? 100 : 80}
                className="object-contain"
              />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Gradient overlays to indicate scrolling */}
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#DAD5D2] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#DAD5D2] to-transparent pointer-events-none"></div>
    </div>
  )
}
