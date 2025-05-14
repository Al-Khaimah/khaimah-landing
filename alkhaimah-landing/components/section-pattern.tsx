import type React from "react"
import { cn } from "@/lib/utils"

interface SectionPatternProps {
  className?: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "dark"
  id?: string
  showPattern?: boolean
}

export function SectionPattern({
  className,
  children,
  variant = "primary",
  id,
  showPattern = false,
}: SectionPatternProps) {
  const bgClasses = {
    primary: "bg-[#DAD5D2]",
    secondary: "bg-white",
    dark: "bg-[#323334] text-white",
  }

  return (
    <section id={id} className={cn("relative overflow-hidden py-20", bgClasses[variant], className)}>
      {showPattern && (
        <>
          {/* Reduce the width of the sadu pattern on the sides */}
          <div className="absolute top-0 left-0 w-4 h-full opacity-50">
            <div
              className="h-full w-full bg-repeat-y"
              style={{ backgroundImage: "url('/images/sadu-pattern.png')", backgroundSize: "contain" }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 w-4 h-full opacity-50">
            <div
              className="h-full w-full bg-repeat-y"
              style={{ backgroundImage: "url('/images/sadu-pattern.png')", backgroundSize: "contain" }}
            ></div>
          </div>
        </>
      )}
      {children}
    </section>
  )
}
