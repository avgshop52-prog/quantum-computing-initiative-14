import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHover, setIsHover] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsHover(!!(t.closest("a, button, [role='button']")))
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
    }
  }, [isVisible])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)", willChange: "transform, left, top" }}
      >
        <div className={`rounded-full bg-red-700 transition-all duration-200 ${isHover ? "w-5 h-5 opacity-90 shadow-[0_0_20px_rgba(220,38,38,0.7)]" : "w-2.5 h-2.5 opacity-80"}`} />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)", willChange: "transform, left, top" }}
      >
        <div className={`rounded-full border transition-all duration-300 ${isHover ? "w-11 h-11 opacity-70 border-red-600" : "w-8 h-8 opacity-40 border-red-800/60"}`} />
      </div>
    </>
  )
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full bg-red-900 hover:bg-red-800 text-white flex items-center justify-center shadow-lg shadow-red-950/50 border border-red-800/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      aria-label="Наверх"
    >
      <Icon name="ChevronUp" size={20} />
    </button>
  )
}

export function PageFadeIn() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <style>{`
      body {
        opacity: ${loaded ? 1 : 0};
        transition: opacity 0.6s ease;
      }
    `}</style>
  )
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const h = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener("scroll", h, { passive: true })
    h()
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-red-900 via-red-700 to-red-900 shadow-[0_0_10px_rgba(185,28,28,0.6)] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-950/20 blur-[140px] animate-blob" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-red-900/15 blur-[140px] animate-blob" style={{ animationDelay: "6s" }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-red-950/10 blur-[120px] animate-blob" style={{ animationDelay: "12s" }} />
    </div>
  )
}