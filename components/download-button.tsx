"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useDownloadModal } from "@/components/download-modal-provider"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface DownloadButtonProps {
  className?: string
  children: React.ReactNode
  icon?: LucideIcon
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function DownloadButton({ className, children, icon: Icon, variant = "default" }: DownloadButtonProps) {
  const { openDownloadModal } = useDownloadModal()

  return (
    <Button className={cn(className)} onClick={openDownloadModal} variant={variant}>
      {children}
      {Icon && <Icon className="mr-2 h-5 w-5" />}
    </Button>
  )
}
