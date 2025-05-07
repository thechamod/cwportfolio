"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMusic = () => {
    const audio = document.getElementById("background-music") as HTMLAudioElement

    if (audio) {
      if (audio.paused) {
        audio.play()
        setIsMusicPlaying(true)
      } else {
        audio.pause()
        setIsMusicPlaying(false)
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            CW
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="group relative">
              <span className="text-white/70 hover:text-white transition-colors">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <Button onClick={toggleMusic} variant="ghost" size="icon" className="ml-4 text-white/70 hover:text-white">
            {isMusicPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button onClick={toggleMusic} variant="ghost" size="icon" className="mr-2 text-white/70 hover:text-white">
            {isMusicPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-5">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl py-2 text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
