"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
// Add import for the AnimatedBackground component
import AnimatedBackground from "./animated-background"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedBackground particleCount={20} className="opacity-50" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home">
              <span className="text-2xl font-bold gradient-text">CW</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-white/70 mb-2">&copy; {currentYear} Chamod Wijekoon. All rights reserved.</p>
          </motion.div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
