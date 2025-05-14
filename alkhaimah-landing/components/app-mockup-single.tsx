import Image from "next/image"
import { cn } from "@/lib/utils"

interface AppMockupSingleProps {
  className?: string
  imageUrl: string
  alt: string
}

export function AppMockupSingle({ className, imageUrl, alt }: AppMockupSingleProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C13144]/20 to-[#619781]/20 rounded-[28px] blur-xl"></div>

      {/* The mockup image */}
      <div className="relative transform transition-all duration-500 hover:scale-105">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          width={500}
          height={400}
          className="w-auto h-auto max-h-[500px] drop-shadow-2xl"
        />
      </div>
    </div>
  )
}
