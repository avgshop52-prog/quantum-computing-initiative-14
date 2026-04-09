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
        ? "bg-[hsl(222_47%_5%/0.95)] backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20"
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

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/50 hover:text-white transition-colors text-[13px] font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary/50 after:transition-all hover:after:w-full uppercase tracking-wide">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-glow text-[13px] py-2.5 px-6 items-center gap-2 font-extrabold"
          >
            <Icon name="Send" size={13} />
            Присоединиться
          </a>

          <button className="md:hidden text-white/60 p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(222_47%_5%/0.98)] backdrop-blur-2xl border-b border-white/[0.06] px-5 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white text-sm py-3 px-4 rounded-xl hover:bg-white/[0.04] transition-colors font-bold" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-sm py-3.5 text-center mt-3 inline-flex items-center justify-center gap-2 font-extrabold">
            <Icon name="Send" size={14} />
            Присоединиться
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
