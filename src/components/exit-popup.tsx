import { useState, useEffect, useCallback } from "react"
import Icon from "@/components/ui/icon"

const STORAGE_KEY = "p2p_exit_popup_shown"

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0) {
        sessionStorage.setItem(STORAGE_KEY, "true")
        setIsVisible(true)
        // Remove listener after triggering once
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    // Small delay before attaching to avoid false triggers on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!isVisible) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isVisible, handleClose])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
      onClick={handleClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" />

      {/* Popup content */}
      <div
        className="relative z-10 w-full max-w-md animate-[popupScale_0.5s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-premium rounded-3xl p-8 sm:p-10 text-center border-primary/20">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-20"
          >
            <Icon name="X" size={16} />
          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="Gift" size={30} className="text-primary" />
          </div>

          {/* Heading */}
          <h3 className="font-heading text-2xl sm:text-[1.75rem] font-extrabold text-white mb-3 leading-tight">
            Подожди!{" "}
            <span className="gradient-text">Забери бесплатный урок</span>
          </h3>

          {/* Subtitle */}
          <p className="text-white/45 text-sm sm:text-base font-semibold mb-8 max-w-sm mx-auto leading-relaxed">
            Вступи в канал и получи первый урок + личного куратора
          </p>

          {/* Benefits */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: "BookOpen", text: "Первый урок бесплатно" },
              { icon: "UserCheck", text: "Личный куратор 24/7" },
              { icon: "TrendingUp", text: "Стратегия с доходом от 5% в день" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]"
              >
                <Icon name={item.icon} size={16} className="text-primary/70 flex-shrink-0" />
                <span className="text-white/60 text-sm font-semibold text-left">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow w-full py-4.5 text-base font-extrabold inline-flex items-center justify-center gap-2.5"
          >
            <Icon name="Send" size={17} />
            Забрать бесплатно
          </a>

          {/* Skip link */}
          <button
            onClick={handleClose}
            className="mt-4 text-white/25 text-xs font-bold hover:text-white/40 transition-colors"
          >
            Нет, спасибо
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popupScale {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default ExitPopup
