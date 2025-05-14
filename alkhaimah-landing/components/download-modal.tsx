"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, Download, Apple, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-lg border-none shadow-xl bg-white">
        <DialogHeader className="text-center">
          <div className="absolute right-4 top-4">
            <Button variant="ghost" className="h-8 w-8 p-0 rounded-full" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">إغلاق</span>
            </Button>
          </div>
          <div className="flex justify-center mb-4">
            <Image src="/images/logo-red.png" alt="الخيمة" width={60} height={60} className="h-16 w-auto" />
          </div>
          <DialogTitle className="text-2xl font-bold font-ibm-plex text-[#323334]">حمل تطبيق الخيمة الآن</DialogTitle>
          <DialogDescription className="text-gray-600 mt-2 text-lg">
            استمتع بتجربة صوتية فريدة مع أحدث الأخبار بلهجة قريبة ومريحة
          </DialogDescription>
        </DialogHeader>

        <div className="p-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#C13144] rounded-full p-2">
                <Apple className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-lg font-ibm-plex">نسخة تجريبية للآيفون</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              التطبيق متاح حالياً كنسخة تجريبية عبر TestFlight للمستخدمين المهتمين بتجربته وتقديم ملاحظاتهم
            </p>
            <Link
              href="https://testflight.apple.com/join/y1zVvNnu"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-[#C13144] hover:bg-[#a52a3a] text-white">
                <Download className="h-4 w-4 ml-2" />
                <span>تحميل عبر TestFlight</span>
              </Button>
            </Link>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#619781] rounded-full p-2">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-lg font-ibm-plex">نسخة الأندرويد</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              نسخة الأندرويد قيد التطوير حالياً وستكون متاحة قريباً. سجل اهتمامك ليصلك إشعار فور إطلاقها
            </p>
            <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 cursor-not-allowed">
              <span>قريباً</span>
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              لأي استفسارات أو دعم فني، يرجى التواصل معنا عبر البريد الإلكتروني:
              <a href="mailto:AlKhimaPlatform@outlook.com" className="text-[#C13144] hover:underline mr-1">
                AlKhimaPlatform@outlook.com
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
