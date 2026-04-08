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
    { label: "Отзывы", href: "#reviews" },
    { label: "Вопросы", href: "#faq" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[hsl(225_25%_4%/0.92)] backdrop-blur-2xl border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-[60px]">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center">
              <Icon name="ArrowUpDown" size={14} className="text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-[15px]">
              P2P <span className="gradient-text">Profit</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-[13px] font-medium">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-glow text-[13px] py-2 px-4 items-center gap-1.5"
          >
            <Icon name="Send" size={13} />
            Присоединиться
          </a>

          <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(225_25%_4%/0.98)] backdrop-blur-2xl border-b border-border px-5 py-5 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground text-sm py-1" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-sm py-3 text-center mt-2 inline-flex items-center justify-center gap-2">
            <Icon name="Send" size={14} />
            Присоединиться
          </a>
        </div>
      )}
    </nav>
  )
}
