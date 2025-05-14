import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  email: string
  phone: string
  imageUrl: string
  linkedinUrl?: string
}

export function TeamCard({ name, role, email, phone, imageUrl, linkedinUrl }: TeamCardProps) {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden group relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C13144] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-32 w-32 rounded-full overflow-hidden mb-4 relative">
          <div className="absolute inset-0 bg-[#C13144]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            width={128}
            height={128}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-bold font-ibm-plex text-[#619781]">{name}</h3>
        <p className="text-[#C13144] mb-2 whitespace-nowrap">{role}</p>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-sm text-gray-600 mb-3">{phone}</p>

        {linkedinUrl && (
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#0077B5] hover:text-[#00669c] transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">LinkedIn</span>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
