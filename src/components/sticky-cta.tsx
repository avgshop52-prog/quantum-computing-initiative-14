import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[hsl(222_47%_5%/0.95)] backdrop-blur-2xl border-t border-white/[0.06] px-4 py-3 flex gap-2">
      <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
        className="flex-1 btn-glow text-[13px] py-3 inline-flex items-center justify-center gap-2 font-extrabold rounded-xl">
        <Icon name="Send" size={14} />
        Начать бесплатно
      </a>
      <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
        className="btn-ghost text-[13px] py-3 px-4 inline-flex items-center justify-center gap-1.5 font-bold rounded-xl">
        <Icon name="MessageCircle" size={14} />
        Куратор
      </a>
    </div>
  )
}

export default StickyCTA
