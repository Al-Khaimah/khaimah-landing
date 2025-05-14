import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function FeatureCard({ icon: Icon, title, description, className, iconClassName }: FeatureCardProps) {
  return (
    <Card className={cn("bg-[#3a3b3c] border-none shadow-lg overflow-hidden group relative", className)}>
      <div className="absolute -left-20 -top-20 w-40 h-40 bg-[#C13144]/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#619781]/10 rounded-full transition-all duration-500 group-hover:scale-150"></div>
      <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
        <div
          className={cn(
            "h-16 w-16 rounded-full bg-[#C13144] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
            iconClassName,
          )}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold font-ibm-plex mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
