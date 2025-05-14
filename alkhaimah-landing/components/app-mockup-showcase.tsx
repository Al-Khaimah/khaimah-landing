"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AppMockupShowcaseProps {
  className?: string
}

export function AppMockupShowcase({ className }: AppMockupShowcaseProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#C13144]/20 rounded-full blur-3xl"></div>

      {/* Mockups container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        {/* First mockup group */}
        <div className="relative md:-mr-8 z-10 transform md:rotate-[-5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20">
          <Image
            src="/images/alkhaimah-mockup-1.png"
            alt="تطبيق الخيمة - الشاشة الرئيسية"
            width={600}
            height={400}
            className="w-full max-w-[500px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Second mockup group */}
        <div className="relative md:-mx-4 z-20 transform transition-all duration-500 hover:scale-110 hover:z-30">
          <Image
            src="/images/alkhaimah-mockup-2.png"
            alt="تطبيق الخيمة - مشغل الوسائط"
            width={600}
            height={400}
            className="w-full max-w-[500px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Third mockup group */}
        <div className="relative md:-ml-8 z-10 transform md:rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20">
          <Image
            src="/images/alkhaimah-mockup-3.png"
            alt="تطبيق الخيمة - اختيار الفئات"
            width={600}
            height={400}
            className="w-full max-w-[500px] h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}
