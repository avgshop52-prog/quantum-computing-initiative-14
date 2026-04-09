import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-10 px-5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-[320px]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <Icon name="ArrowUpDown" size={14} className="text-white" />
              </div>
              <span className="font-heading font-bold text-[16px]">P2P <span className="gradient-text">Profit</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Обучаем P2P арбитражу криптовалюты с нуля. 1 200+ учеников, персональные кураторы и результат с первой недели.
            </p>
            <div className="flex gap-3">
              <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all">
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-foreground text-xs font-semibold mb-5 uppercase tracking-wider">Навигация</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Обучение", href: "#how" },
                  { label: "Результаты", href: "#results" },
                  { label: "Команда", href: "#team" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Вопросы", href: "#faq" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground text-sm transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-foreground text-xs font-semibold mb-5 uppercase tracking-wider">Контакты</p>
              <div className="flex flex-col gap-3">
                <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-primary text-sm hover:text-primary/80 transition-colors">
                  <Icon name="Send" size={14} />
                  Telegram канал
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-xs">© 2026 P2P Profit. Все права защищены.</p>
          <p className="text-muted-foreground/30 text-[11px]">Результаты зависят от индивидуальных усилий каждого участника</p>
        </div>
      </div>
    </footer>
  )
}
