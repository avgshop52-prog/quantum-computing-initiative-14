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
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      >
        <div className={`rounded-full bg-red-500 transition-all duration-200 ${isHover ? "w-5 h-5 opacity-90" : "w-3 h-3 opacity-80"}`} />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      >
        <div className={`rounded-full border border-red-500/50 transition-all duration-300 ${isHover ? "w-10 h-10 opacity-60" : "w-7 h-7 opacity-30"}`} />
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
      className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-900/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
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
