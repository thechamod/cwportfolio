"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Play, Pause, Film } from "lucide-react"
// Add import for the AnimatedBackground component
import AnimatedBackground from "./animated-background"

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

  const musicProjects = [
    {
      title: "Portfolio Project 3",
      description: "Comprehensive portfolio showcasing my music production skills and creative sound design",
      image: "/placeholder.svg?height=600&width=800",
      audioSample: "/sample1.mp3",
      spotifyLink: "https://spotify.com",
      type: "Latest Project",
    },
    {
      title: "Neon Dreams",
      description: "Electronic music album with synthwave influences",
      image: "/placeholder.svg?height=600&width=800",
      audioSample: "/sample1.mp3",
      spotifyLink: "https://spotify.com",
      type: "Album",
    },
    {
      title: "Digital Horizon",
      description: "EDM single with futuristic sound design",
      image: "/placeholder.svg?height=600&width=800",
      audioSample: "/sample2.mp3",
      spotifyLink: "https://spotify.com",
      type: "Single",
    },
    {
      title: "Midnight Pulse",
      description: "Deep house track with atmospheric elements",
      image: "/placeholder.svg?height=600&width=800",
      audioSample: "/sample3.mp3",
      spotifyLink: "https://spotify.com",
      type: "EP",
    },
  ]

  const webProjects = [
    {
      title: "Portfolio Project 3",
      description: "Modern portfolio website with interactive elements and responsive design",
      image: "/placeholder.svg?height=600&width=800",
      liveLink: "https://portfolio-v3.example.com",
      githubLink: "https://github.com/chamodwijekoon",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    },
    {
      title: "Onyx Music Studio",
      description: "Professional music studio website with booking system",
      image: "/placeholder.svg?height=600&width=800",
      liveLink: "https://onyxmusic.vercel.app",
      githubLink: "https://github.com",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Audio Visualizer App",
      description: "Interactive web application for audio visualization",
      image: "/placeholder.svg?height=600&width=800",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      technologies: ["React", "Three.js", "Web Audio API"],
    },
    {
      title: "Music Producer Portfolio",
      description: "Responsive portfolio website for music producers",
      image: "/placeholder.svg?height=600&width=800",
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      technologies: ["Next.js", "Framer Motion", "Supabase"],
    },
  ]

  const videoProjects = [
    {
      title: "Portfolio Project 3",
      description: "Showcase video highlighting my video editing skills and creative direction",
      image: "/placeholder.svg?height=600&width=800",
      youtubeLink: "https://youtube.com",
      behanceLink: "https://behance.net",
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
      type: "Latest Project",
    },
    {
      title: "Cinematic Music Video",
      description: "Directed and edited a cinematic music video with visual effects",
      image: "/placeholder.svg?height=600&width=800",
      youtubeLink: "https://youtube.com",
      behanceLink: "https://behance.net",
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      type: "Music Video",
    },
    {
      title: "Corporate Brand Video",
      description: "Promotional video for a tech startup with motion graphics",
      image: "/placeholder.svg?height=600&width=800",
      youtubeLink: "https://youtube.com",
      behanceLink: "https://behance.net",
      technologies: ["After Effects", "Premiere Pro", "Cinema 4D"],
      type: "Commercial",
    },
    {
      title: "Event Highlight Reel",
      description: "Dynamic highlight video for a music festival with color grading",
      image: "/placeholder.svg?height=600&width=800",
      youtubeLink: "https://youtube.com",
      behanceLink: "https://behance.net",
      technologies: ["Final Cut Pro", "DaVinci Resolve", "Motion"],
      type: "Event Video",
    },
  ]

  const toggleAudio = (audioSrc: string) => {
    const audioElement = document.getElementById("audio-player") as HTMLAudioElement

    if (!audioElement) return

    if (currentAudio === audioSrc && isPlaying) {
      audioElement.pause()
      setIsPlaying(false)
    } else {
      audioElement.src = audioSrc
      audioElement.play()
      setCurrentAudio(audioSrc)
      setIsPlaying(true)
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Hidden audio player */}
      <audio id="audio-player" className="hidden" onEnded={() => setIsPlaying(false)} />

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
            My Portfolio
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
            Explore my latest projects in music production and web development
          </motion.p>
        </div>

        <Tabs defaultValue="music" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="music" className="data-[state=active]:bg-primary">
                Music Production
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-primary">
                Web Development
              </TabsTrigger>
              <TabsTrigger value="video" className="data-[state=active]:bg-primary">
                Video Editing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="music">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-medium mb-2">Music Production Portfolio</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore my latest music production projects and releases
              </p>
            </div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {musicProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                    project.type === "Latest Project"
                      ? "border-primary border-2"
                      : "border-white/5 hover:border-primary/30"
                  } transition-all duration-300`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <Button
                        onClick={() => toggleAudio(project.audioSample)}
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-10 w-10"
                      >
                        {currentAudio === project.audioSample && isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </Button>
                      <span className="text-sm text-white/80">Preview</span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          project.type === "Latest Project" ? "bg-primary text-white" : "bg-primary/80 text-white"
                        } text-xs font-medium`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      <a href={project.spotifyLink} target="_blank" rel="noopener noreferrer">
                        Listen on Spotify
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="web">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-medium mb-2">Web Development Portfolio</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Browse my latest web development projects and applications
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {webProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                    index === 0 ? "border-primary border-2" : "border-white/5 hover:border-primary/30"
                  } transition-all duration-300`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {index === 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                          Latest Project
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button asChild variant="default" size="sm" className="flex-1 bg-primary hover:bg-primary/80">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary/10"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="video">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-medium mb-2">Video Editing Portfolio</h3>
              <p className="text-white/70 max-w-2xl mx-auto">Discover my latest video editing and production work</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {videoProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                    project.type === "Latest Project"
                      ? "border-accent border-2"
                      : "border-white/5 hover:border-primary/30"
                  } transition-all duration-300`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          project.type === "Latest Project" ? "bg-accent text-white" : "bg-accent/80 text-white"
                        } text-xs font-medium`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button asChild variant="default" size="sm" className="flex-1 bg-accent hover:bg-accent/80">
                        <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 border-accent text-accent hover:bg-accent/10"
                      >
                        <a href={project.behanceLink} target="_blank" rel="noopener noreferrer">
                          <Film className="h-4 w-4 mr-2" />
                          Portfolio
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
