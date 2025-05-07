"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import { useLoading } from "@/components/loading-provider"

export default function Home() {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { isLoading } = useLoading()

  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  useEffect(() => {
    // Initialize any libraries or effects here
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-white/70">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Back to top button */}
      <motion.div
        className="fixed bottom-10 right-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY.get() > 500 ? 1 : 0 }}
      >
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full p-3 bg-primary/20 hover:bg-primary/40 backdrop-blur-md"
        >
          <ArrowDown className="h-5 w-5 rotate-180" />
        </Button>
      </motion.div>
    </div>
  )
}
