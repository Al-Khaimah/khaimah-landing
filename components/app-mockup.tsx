import Image from "next/image"
import { cn } from "@/lib/utils"

interface AppMockupProps {
  className?: string
  imageUrl: string
  alt: string
}

export function AppMockup({ className, imageUrl, alt }: AppMockupProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#C13144]/20 to-[#619781]/20 rounded-[28px] blur-xl"></div>
      <div className="relative shadow-lg">
        {/* Simple iPhone-like frame with very thin border */}
        <div className="relative border border-gray-300 rounded-[28px] overflow-hidden shadow-sm">
          <Image src={imageUrl || "/placeholder.svg"} alt={alt} width={300} height={600} className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
