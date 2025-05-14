"use client"
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

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="tech-slider-container">
        <div className="tech-slider">
          {/* First set of items */}
          {techItems.map((item, index) => (
            <div key={`${item.name}-${index}`} className="tech-slide">
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

          {/* Duplicate set for seamless looping */}
          {techItems.map((item, index) => (
            <div key={`${item.name}-duplicate-${index}`} className="tech-slide">
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
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#DAD5D2] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#DAD5D2] to-transparent pointer-events-none"></div>

      <style jsx global>{`
        .tech-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .tech-slider {
          display: flex;
          animation: slide 30s linear infinite;
          width: fit-content;
        }
        
        .tech-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 1.5rem;
          flex-shrink: 0;
        }
        
        .tech-slider-container:hover .tech-slider {
          animation-play-state: paused;
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
