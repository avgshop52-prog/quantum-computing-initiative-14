import { useState, useEffect, useCallback, useRef } from "react"
import Icon from "@/components/ui/icon"

const NAMES = [
  "Алексей", "Дарья", "Игорь", "Наташа", "Роман",
  "Елена", "Макс", "Света", "Марина", "Артём",
  "Фёдор", "Ксюша", "Андрей", "Ольга", "Сергей",
]

function getRandomAmount(): number {
  return Math.round((Math.random() * (18500 - 2400) + 2400) / 100) * 100
}

function getRandomName(): string {
  return NAMES[Math.floor(Math.random() * NAMES.length)]
}

function getRandomDelay(): number {
  return Math.floor(Math.random() * (12000 - 8000) + 8000)
}

interface Toast {
  id: number
  name: string
  amount: number
  phase: "entering" | "visible" | "exiting"
}

export function LiveDeals() {
  const [toast, setToast] = useState<Toast | null>(null)
  const idCounter = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback(() => {
    const id = ++idCounter.current
    const newToast: Toast = {
      id,
      name: getRandomName(),
      amount: getRandomAmount(),
      phase: "entering",
    }

    setToast(newToast)

    // Transition to visible
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? { ...prev, phase: "visible" } : prev))
    }, 50)

    // Start exit after 4 seconds
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? { ...prev, phase: "exiting" } : prev))
    }, 4000)

    // Remove after exit animation
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? null : prev))
    }, 4500)
  }, [])

  const scheduleNext = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      showToast()
      scheduleNext()
    }, getRandomDelay())
  }, [showToast])

  useEffect(() => {
    // Show first toast after a short delay
    const initialDelay = setTimeout(() => {
      showToast()
      scheduleNext()
    }, 3000)

    return () => {
      clearTimeout(initialDelay)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [showToast, scheduleNext])

  if (!toast) return null

  return (
    <div className="fixed bottom-6 left-5 z-[90] pointer-events-none">
      <div
        className={`
          card-glass-static rounded-2xl px-4 py-3.5 flex items-center gap-3
          border-emerald-500/15 pointer-events-auto max-w-[320px]
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${toast.phase === "entering"
            ? "opacity-0 translate-y-5 scale-95"
            : toast.phase === "exiting"
              ? "opacity-0 translate-y-2 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }
        `}
        style={{
          boxShadow: "0 0 40px rgba(16,185,129,0.08), 0 20px 60px rgba(0,0,0,0.4)",
          borderColor: "rgba(16,185,129,0.15)",
        }}
      >
        {/* Green icon */}
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Icon name="CheckCircle" size={18} className="text-emerald-400" />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className="text-white text-sm font-bold truncate">
            {toast.name}{" "}
            <span className="text-white/50 font-semibold">только что вывел</span>
          </p>
          <p className="text-emerald-400 text-sm font-extrabold mt-0.5">
            {toast.amount.toLocaleString("ru-RU")} ₽
          </p>
        </div>
      </div>
    </div>
  )
}

export default LiveDeals
