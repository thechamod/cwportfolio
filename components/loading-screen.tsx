"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      // Add a small delay before completing
      const timeout = setTimeout(() => {
        setIsComplete(true)
        setTimeout(onLoadingComplete, 1000) // Allow exit animation to play
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [progress, onLoadingComplete])

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Logo Animation */}
          <motion.div
            className="relative mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated circles around the logo */}
            <div className="absolute -inset-10 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-primary/30"
                  initial={{ width: 20, height: 20, opacity: 0 }}
                  animate={{
                    width: [20, 200 + i * 40],
                    height: [20, 200 + i * 40],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Logo */}
            <motion.div
              className="relative z-10 text-5xl font-bold gradient-text"
              animate={{
                textShadow: [
                  "0 0 5px rgba(120, 0, 255, 0.5)",
                  "0 0 20px rgba(120, 0, 255, 0.8)",
                  "0 0 5px rgba(120, 0, 255, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              CW
            </motion.div>

            {/* Particles around the logo */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/80"
                style={{
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="text-xl font-light text-white/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              Loading Experience
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Progress percentage */}
          <motion.div
            className="mt-4 text-sm text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Animated dots at the bottom */}
          <div className="absolute bottom-10 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
