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
      scrolled ? "bg-[hsl(230_25%_3%/0.95)] backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-black/10" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-[64px]">
          <a href="#" className="flex items-center gap-2.5" aria-label="P2P Profit">
            <div className="w-9 h-9 rounded-xl bg-primary/90 flex items-center justify-center">
              <Icon name="ArrowUpDown" size={15} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-[16px] tracking-tight">
              P2P <span className="gradient-text">Profit</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
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
            className="hidden md:inline-flex btn-glow text-[13px] py-2.5 px-5 items-center gap-2"
          >
            <Icon name="Send" size={13} />
            Присоединиться
          </a>

          <button className="md:hidden text-muted-foreground p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(230_25%_3%/0.98)] backdrop-blur-2xl border-b border-border px-5 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground text-sm py-2.5 px-3 rounded-lg hover:bg-muted/40 transition-colors" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-sm py-3.5 text-center mt-3 inline-flex items-center justify-center gap-2">
            <Icon name="Send" size={14} />
            Присоединиться
          </a>
        </div>
      )}
    </nav>
  )
}
