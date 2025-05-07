"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import AnimatedBackground from "./animated-background"

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const musicSkills = [
    { name: "FL Studio", level: 95 },
    { name: "Mixing & Mastering", level: 90 },
    { name: "Sound Design", level: 85 },
    { name: "Music Theory", level: 80 },
  ]

  const techSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "UI/UX Design", level: 75 },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedBackground particleCount={50} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-white/80"
          >
            A showcase of my technical and creative abilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Music Production Skills */}
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center md:text-left">
              Music Production
            </motion.h3>

            <div className="space-y-8">
              {musicSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="skill-bar h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Development Skills */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center md:text-left">
              Web Development
            </motion.h3>

            <div className="space-y-8">
              {techSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} custom={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{
                        background: "linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--accent)))",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Other Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Video Editing", value: 85 },
              { name: "Motion Graphics", value: 75 },
              { name: "Color Grading", value: 80 },
              { name: "3D Modeling", value: 60 },
              { name: "Creative Direction", value: 85 },
              { name: "Project Management", value: 80 },
              { name: "Visual Effects", value: 70 },
              { name: "Video Production", value: 75 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 * index,
                }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    {/* Progress circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.value / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      style={{ transformOrigin: "center", rotate: "-90deg" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{skill.value}%</span>
                  </div>
                </div>
                <span className="text-center font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
