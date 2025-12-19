import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans as V0_Font_Plus_Jakarta_Sans, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _plusJakartaSans = V0_Font_Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

const _inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Dar Maestro | Premium Roman Sandwiches in Rome",
  description:
    "Experience Dar Maestro - premium authentic Roman sandwiches in Testaccio, Rome. Fresh ingredients, artisanal recipes. Order now!",
  keywords: [
    "best sandwiches in Rome",
    "panini Rome",
    "Roman sandwiches",
    "Testaccio restaurant",
    "Italian panini",
    "authentic Roman food",
    "order sandwiches Rome",
  ],
  openGraph: {
    title: "Dar Maestro | Premium Roman Sandwiches",
    description: "Premium authentic Roman sandwiches in Testaccio, Rome. Order now!",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
