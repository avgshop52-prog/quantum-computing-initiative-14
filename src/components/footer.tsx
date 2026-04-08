import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8 px-5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 mb-10">
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center">
                <Icon name="ArrowUpDown" size={13} className="text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-[15px]">P2P <span className="gradient-text">Profit</span></span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Обучаем P2P арбитражу с нуля. Живое сообщество, персональные кураторы и результат с первой недели.
            </p>
            <div className="flex gap-3">
              <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon name="Send" size={15} />
              </a>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-foreground text-xs font-semibold mb-4 uppercase tracking-wider">Навигация</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Обучение", href: "#how" },
                  { label: "Результаты", href: "#results" },
                  { label: "Команда", href: "#team" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Вопросы", href: "#faq" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground text-xs transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-foreground text-xs font-semibold mb-4 uppercase tracking-wider">Контакты</p>
              <div className="flex flex-col gap-2.5">
                <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary text-xs hover:text-primary/80 transition-colors">
                  <Icon name="Send" size={12} />
                  Telegram канал
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground/50 text-[10px]">© 2026 P2P Profit. Все права защищены.</p>
          <p className="text-muted-foreground/30 text-[10px]">Результаты зависят от индивидуальных усилий каждого участника</p>
        </div>
      </div>
    </footer>
  )
}
