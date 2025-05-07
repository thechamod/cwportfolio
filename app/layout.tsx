import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MusicPlayer from "@/components/music-player"
import LoadingProvider from "@/components/loading-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Chamod Wijekoon | Music Producer & Web Developer",
  description:
    "Portfolio of Chamod Wijekoon, a multi-talented creative specializing in music production and web development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LoadingProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <MusicPlayer />
              <Footer />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
