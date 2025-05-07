"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
// Add import for the AnimatedBackground component
import AnimatedBackground from "./animated-background"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        </video>
        <AnimatedBackground particleCount={100} className="z-5" />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Music Producer & Web Developer
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
          >
            Chamod Wijekoon
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Crafting immersive digital experiences through code and sound
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-white rounded-full group">
              <a href="#portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-full"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary/50"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [null, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  )
}
