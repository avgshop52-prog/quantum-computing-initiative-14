import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const links = [
    { label: "Обучение", href: "#how" },
    { label: "Результаты", href: "#results" },
    { label: "Команда", href: "#team" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Вопросы", href: "#faq" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[rgba(8,0,0,0.95)] backdrop-blur-2xl border-b border-red-900/30 shadow-2xl shadow-black/40"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center gap-2.5 group" aria-label="P2P Profit">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              <Icon name="ArrowUpDown" size={16} className="text-white" />
            </div>
            <span className="font-heading font-extrabold text-[18px] tracking-tight text-white">
              P2P <span className="gradient-text">Profit</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/45 hover:text-white transition-colors text-[13px] font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary/50 after:transition-all hover:after:w-full">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-[12px] py-2 px-4 inline-flex items-center gap-1.5 font-bold rounded-xl">
              <Icon name="MessageCircle" size={12} />
              Куратор
            </a>
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-[12px] py-2 px-5 inline-flex items-center gap-1.5 font-extrabold rounded-xl">
              <Icon name="Send" size={12} />
              Присоединиться
            </a>
          </div>

          <button className="md:hidden text-white/60 p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[rgba(8,0,0,0.98)] backdrop-blur-2xl border-b border-red-900/30 px-5 py-6 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transitionDelay: `${menuOpen ? i * 60 + 100 : 0}ms` }}
              className={`text-white text-sm py-3 px-4 rounded-xl hover:bg-primary/10 hover:translate-x-1 transition-all duration-300 font-bold flex items-center justify-between ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{l.label}</span>
              <Icon name="ChevronRight" size={14} className="text-primary/60" />
            </a>
          ))}
          <div className="flex gap-2 mt-4">
            <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-sm py-3 flex-1 text-center inline-flex items-center justify-center gap-2 font-bold">
              <Icon name="MessageCircle" size={14} />
              Куратор
            </a>
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-sm py-3 flex-1 text-center inline-flex items-center justify-center gap-2 font-extrabold">
              <Icon name="Send" size={14} />
              Вступить
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar