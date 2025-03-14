import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Villa Orlando - Villa Rentals Taman Dayu Pandaan",
  description:
    "Experience cozy living in our exclusive villa orlando hills, where comfort meets elegance in a serene natural setting. Sewa villa taman dayu pandaan, villa dekat toll pandaan, homestay taman dayu pandaan jawa timur",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
