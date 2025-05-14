"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useDownloadModal } from "@/components/download-modal-provider"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { openDownloadModal } = useDownloadModal()

  const handleLinkClick = () => {
    setOpen(false)
  }

  const handleDownloadClick = () => {
    setOpen(false)
    openDownloadModal()
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 mt-10">
          <Link
            href="#about"
            className="text-xl font-ibm-plex hover:text-[#C13144] transition-colors"
            onClick={handleLinkClick}
          >
            عن التطبيق
          </Link>
          <Link
            href="#features"
            className="text-xl font-ibm-plex hover:text-[#C13144] transition-colors"
            onClick={handleLinkClick}
          >
            الميزات
          </Link>
          <Link
            href="#team"
            className="text-xl font-ibm-plex hover:text-[#C13144] transition-colors"
            onClick={handleLinkClick}
          >
            فريق العمل
          </Link>
          <Link
            href="#tech"
            className="text-xl font-ibm-plex hover:text-[#C13144] transition-colors"
            onClick={handleLinkClick}
          >
            التقنيات
          </Link>
          <Link
            href="#contact"
            className="text-xl font-ibm-plex hover:text-[#C13144] transition-colors"
            onClick={handleLinkClick}
          >
            اتصل بنا
          </Link>
          <Button className="bg-[#C13144] hover:bg-[#a52a3a] text-white mt-4" onClick={handleDownloadClick}>
            حمل التطبيق
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
