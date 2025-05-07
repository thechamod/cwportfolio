"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  const tracks = [
    {
      title: "Ambient Electronica",
      artist: "Chamod Wijekoon",
      src: "https://files.catbox.moe/dbu8ig.mp3",
    },
    {
      title: "Neon Dreams",
      artist: "Chamod Wijekoon",
      src: "https://files.catbox.moe/dbu8ig.mp3",
    },
    {
      title: "Digital Horizon",
      artist: "Chamod Wijekoon",
      src: "https://files.catbox.moe/dbu8ig.mp3",
    },
  ]

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      nextTrack()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    // Set initial volume
    audio.volume = volume / 100

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = isMuted ? 0 : volume / 100
  }, [volume, isMuted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    setIsMuted(value[0] === 0)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].src} id="background-music" />

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-4"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">{tracks[currentTrack].title}</h4>
                    <p className="text-sm text-white/60">{tracks[currentTrack].artist}</p>
                  </div>
                </div>

                <div className="flex-1 max-w-xl mx-4">
                  <div className="flex items-center justify-center space-x-4">
                    <Button onClick={prevTrack} variant="ghost" size="icon" className="text-white/70 hover:text-white">
                      <SkipBack className="h-5 w-5" />
                    </Button>

                    <Button
                      onClick={togglePlay}
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary text-primary hover:bg-primary/10 h-10 w-10"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>

                    <Button onClick={nextTrack} variant="ghost" size="icon" className="text-white/70 hover:text-white">
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center mt-2">
                    <span className="text-xs text-white/60 w-10">{formatTime(currentTime)}</span>
                    <div className="flex-1 mx-2">
                      <Slider
                        value={[currentTime]}
                        min={0}
                        max={duration || 100}
                        step={0.1}
                        onValueChange={handleTimeChange}
                        className="cursor-pointer"
                      />
                    </div>
                    <span className="text-xs text-white/60 w-10">{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-32">
                  <Button onClick={toggleMute} variant="ghost" size="icon" className="text-white/70 hover:text-white">
                    {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>

                  <Slider
                    value={[isMuted ? 0 : volume]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={handleVolumeChange}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
