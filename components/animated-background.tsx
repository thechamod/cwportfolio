"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  particleCount?: number
  className?: string
}

export default function AnimatedBackground({ particleCount = 50, className = "" }: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [particleCount])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="animated-bg w-full h-full opacity-30"></div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -500],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-secondary/5 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
