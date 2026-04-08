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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[hsl(230_25%_3%/0.85)] backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="P2P Profit -- главная"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/90 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Icon
                name="ArrowUpDown"
                size={15}
                className="text-primary-foreground"
              />
            </div>
            <span className="font-heading font-extrabold text-base tracking-tight">
              P2P <span className="gradient-text">Profit</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-[13px] font-medium px-4 py-2 rounded-xl hover:bg-muted/30"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-glow text-[13px] py-2.5 px-5 items-center gap-2"
          >
            <Icon name="Send" size={13} />
            Присоединиться
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(230_25%_3%/0.98)] backdrop-blur-2xl border-b border-border/50 px-5 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/90 hover:text-foreground text-sm font-medium py-3 px-4 rounded-xl hover:bg-muted/30 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border/50">
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm py-3.5 text-center w-full inline-flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={14} />
              Присоединиться
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
