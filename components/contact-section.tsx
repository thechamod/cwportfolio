"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Linkedin, Send } from "lucide-react"
import { initializeApp } from "firebase/app"
import { getDatabase, push } from "firebase/database"
// Add import for the AnimatedBackground component
import AnimatedBackground from "./animated-background"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7SDDKQRL_sjDKfRPB4ifuHp8oBdB9-VE",
  authDomain: "al-master-1cd6e.firebaseapp.com",
  databaseURL: "https://al-master-1cd6e-default-rtdb.firebaseio.com",
  projectId: "al-master-1cd6e",
  storageBucket: "al-master-1cd6e.firebasestorage.app",
  messagingSenderId: "932509501027",
  appId: "1:932509501027:web:880015a9d5e088775dda56",
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save message to Firebase
      const messagesRef = ref(database, "messages")
      await push(messagesRef, {
        ...formData,
        timestamp: Date.now(),
      })

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "Gimhanwijekoon5@gmail.com",
      link: "mailto:Gimhanwijekoon5@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: "+94 (72) 128-5842",
      link: "tel:+94721285842",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "Madipola, Sri Lanka",
      link: "#",
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
  ]

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
            Get In Touch
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-white/5"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">
              Send Me a Message
            </motion.h3>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants} className="mb-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-4">
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-primary"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 focus:border-primary min-h-[150px]"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-white rounded-full group"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/70 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/20 border border-white/5 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/60">{item.title}</h4>
                      <p className="font-medium">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="h-10 w-10 rounded-full bg-card/50 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 transition-all duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 mt-8 border-t border-white/10">
              <h4 className="text-xl font-bold mb-4">Working Hours</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
