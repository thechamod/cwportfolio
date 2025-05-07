"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import LoadingScreen from "./loading-screen"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showChildren, setShowChildren] = useState(false)

  useEffect(() => {
    // If we're on the client side, we can check if the page has been visited before
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("hasVisited")

      if (hasVisited) {
        // Skip loading screen if the user has already visited
        setIsLoading(false)
        setShowChildren(true)
      } else {
        // Set the flag for future navigation
        sessionStorage.setItem("hasVisited", "true")
      }
    }
  }, [])

  const handleLoadingComplete = () => {
    setShowChildren(true)
    setIsLoading(false)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showChildren && children}
    </LoadingContext.Provider>
  )
}
