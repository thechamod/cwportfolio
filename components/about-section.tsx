"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
// Add import for the AnimatedBackground component
import AnimatedBackground from "./animated-background"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const timelineEvents = [
    {
      year: "2018",
      title: "Started Music Production",
      description: "Began creating electronic music and exploring sound design",
    },
    {
      year: "2019",
      title: "First Web Development Project",
      description: "Built my first website and discovered passion for coding",
    },
    {
      year: "2021",
      title: "Launched Music Studio",
      description: "Founded Onyx Music Studio for professional productions",
    },
    {
      year: "2023",
      title: "Full-Stack Developer",
      description: "Expanded skills to include modern web frameworks and technologies",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedBackground particleCount={30} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-md mx-auto">
              <Image src="https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/481783135_606956228833677_299344028049800557_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF4qqa1m9aI9Q_6tqqC5HjMBIoCRLpIYu4EigJEukhi7u4CbN4qt6HMNXNwfzqLHK_ksSAYRO0-VN4Gk0i-r00J&_nc_ohc=R5jQO-pXhgMQ7kNvwHdFqyW&_nc_oc=AdloxpUKBoJMFk0p0o2HJfn8_tblnfLMLRr9N4DShXLIfOdDVDE_sgEnODJhUXvFj6k&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=9DzOrswGwCduUVI4gH4GZg&oh=00_AfJ13VMLCB23esyF1F62Y0SRHmU7Un0snsVz8_f7M8S90g&oe=6820C762" alt="Chamod Wijekoon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white">
              Multi-talented Creative Professional
            </motion.h3>

            <motion.p variants={itemVariants} className="text-white/80">
              I'm Chamod Wijekoon, a passionate music producer and web developer with a love for creating immersive
              digital experiences. My journey began in music production, where I developed a keen ear for detail and
              creativity.
            </motion.p>

            <motion.p variants={itemVariants} className="text-white/80">
              Today, I blend my artistic sensibilities with technical expertise to craft websites and applications that
              not only function flawlessly but also engage users on an emotional level.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <Button className="bg-primary hover:bg-primary/80 text-white rounded-full group">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-12"
          >
            My Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-primary/30 transform -translate-x-1/2"
            ></motion.div>

            {/* Timeline events */}
            <div className="space-y-12 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-primary z-10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 pt-4 md:pt-0 pl-12 md:pl-0 md:pr-12">
                    <div className={`p-6 bg-card rounded-lg hover-scale ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-2">
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-white/70">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
