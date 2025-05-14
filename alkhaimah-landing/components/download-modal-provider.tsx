"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { DownloadModal } from "@/components/download-modal"

interface DownloadModalContextType {
  openDownloadModal: () => void
  closeDownloadModal: () => void
}

const DownloadModalContext = createContext<DownloadModalContextType | undefined>(undefined)

export function useDownloadModal() {
  const context = useContext(DownloadModalContext)
  if (context === undefined) {
    throw new Error("useDownloadModal must be used within a DownloadModalProvider")
  }
  return context
}

interface DownloadModalProviderProps {
  children: ReactNode
}

export function DownloadModalProvider({ children }: DownloadModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openDownloadModal = () => setIsModalOpen(true)
  const closeDownloadModal = () => setIsModalOpen(false)

  // Automatically open the modal on page load
  useEffect(() => {
    // Short delay to ensure the page is fully loaded
    const timer = setTimeout(() => {
      openDownloadModal()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <DownloadModalContext.Provider value={{ openDownloadModal, closeDownloadModal }}>
      {children}
      <DownloadModal isOpen={isModalOpen} onClose={closeDownloadModal} />
    </DownloadModalContext.Provider>
  )
}
