import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border pt-10 pb-6 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/90 flex items-center justify-center">
                <Icon name="ArrowUpDown" size={12} className="text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-sm">P2P <span className="gradient-text">Profit</span></span>
            </div>
            <p className="text-muted-foreground text-xs max-w-[280px] leading-relaxed">
              Обучаем P2P арбитражу с нуля. Живое сообщество, кураторы и результат с первой недели.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-foreground text-xs font-semibold mb-3">Навигация</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Обучение", href: "#how" },
                  { label: "Результаты", href: "#results" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Вопросы", href: "#faq" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground text-xs transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-foreground text-xs font-semibold mb-3">Контакты</p>
              <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary text-xs hover:text-primary/80 transition-colors">
                <Icon name="Send" size={12} />
                Telegram канал
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-muted-foreground/60 text-[10px]">© 2026 P2P Profit. Все права защищены.</p>
          <p className="text-muted-foreground/40 text-[10px]">Результаты зависят от индивидуальных усилий</p>
        </div>
      </div>
    </footer>
  )
}
