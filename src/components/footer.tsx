import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-16 pb-8 px-5 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Social proof bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-14 pb-14 border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["А", "Д", "М", "К", "Н"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                >
                  <span className="font-display text-[10px] font-bold text-primary/70">
                    {letter}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="font-display text-lg font-extrabold gradient-text">
                1 200+
              </span>
              <span className="font-light text-muted-foreground text-sm ml-2">
                учеников уже зарабатывают
              </span>
            </div>
          </div>

          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-xs py-2.5 px-5 inline-flex items-center gap-2"
          >
            <Icon name="Send" size={12} />
            Присоединиться к ним
          </a>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/90 flex items-center justify-center">
                <Icon
                  name="ArrowUpDown"
                  size={14}
                  className="text-primary-foreground"
                />
              </div>
              <span className="font-heading font-extrabold text-base">
                P2P <span className="gradient-text">Profit</span>
              </span>
            </div>
            <p className="font-light text-muted-foreground text-sm leading-relaxed">
              Обучаем P2P арбитражу с нуля. Живое сообщество, персональные кураторы и результат с первой недели.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14">
            <div>
              <p className="font-heading font-extrabold text-foreground text-xs uppercase tracking-wider mb-4">
                Навигация
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Обучение", href: "#how" },
                  { label: "Результаты", href: "#results" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Вопросы", href: "#faq" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="font-light text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading font-extrabold text-foreground text-xs uppercase tracking-wider mb-4">
                Контакты
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/+Z7SebGxjJmMxNDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  <Icon name="Send" size={13} />
                  <span className="font-light">Telegram канал</span>
                </a>
                <span className="font-light text-muted-foreground/60 text-sm">
                  p2p-profit.ru
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-light text-muted-foreground/50 text-xs">
            &copy; 2026 P2P Profit. Все права защищены.
          </p>
          <p className="font-light text-muted-foreground/30 text-xs text-center sm:text-right max-w-md">
            Результаты зависят от индивидуальных усилий. Информация на сайте не является финансовой рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  )
}
