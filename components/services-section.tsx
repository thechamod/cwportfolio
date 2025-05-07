"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Music, Code, Film, Layers, Wand2, Database, Video, Camera } from "lucide-react"
import AnimatedBackground from "./animated-background"

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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

  const services = [
    {
      icon: <Music className="h-10 w-10" />,
      title: "Music Production",
      description: "Professional music production with attention to detail and industry standards",
      color: "primary",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      color: "secondary",
    },
    {
      icon: <Film className="h-10 w-10" />,
      title: "Video Editing",
      description: "Professional video editing with cinematic effects and color grading",
      color: "accent",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Mixing & Mastering",
      description: "Professional audio mixing and mastering for a polished sound",
      color: "primary",
    },
    {
      icon: <Wand2 className="h-10 w-10" />,
      title: "Creative Direction",
      description: "Artistic vision and direction for multimedia projects",
      color: "secondary",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "App Development",
      description: "Full-stack application development with modern frameworks",
      color: "accent",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Motion Graphics",
      description: "Eye-catching motion graphics and visual effects for videos",
      color: "primary",
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Video Production",
      description: "End-to-end video production from concept to final delivery",
      color: "secondary",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedBackground particleCount={40} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            My Services
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
            Offering a range of creative and technical services to bring your vision to life
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`text-${service.color} mb-6`}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
