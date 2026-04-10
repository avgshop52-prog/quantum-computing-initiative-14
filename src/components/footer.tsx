import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-10 px-5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-[340px]">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <Icon name="ArrowUpDown" size={15} className="text-white" />
              </div>
              <span className="font-heading font-extrabold text-[18px] text-white">P2P <span className="gradient-text">Profit</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5 font-semibold">
              Обучаем P2P арбитражу криптовалюты с нуля. 1 500+ учеников, персональные кураторы и результат с первой недели.
            </p>
            <div className="flex gap-3">
              <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all">
                <Icon name="Send" size={17} />
              </a>
              <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all">
                <Icon name="MessageCircle" size={17} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-white text-xs font-extrabold mb-5 uppercase tracking-wider">Навигация</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Обучение", href: "#how" },
                  { label: "Результаты", href: "#results" },
                  { label: "Команда", href: "#team" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Вопросы", href: "#faq" },
                ].map((l) => (
                  <a key={l.href} href={l.href} className="text-white/40 hover:text-white text-sm transition-colors font-semibold">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xs font-extrabold mb-5 uppercase tracking-wider">Контакты</p>
              <div className="flex flex-col gap-3">
                <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-primary text-sm hover:text-primary/80 transition-colors font-bold">
                  <Icon name="Send" size={14} />
                  Telegram канал
                </a>
                <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors font-bold">
                  <Icon name="MessageCircle" size={14} />
                  Написать куратору
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-semibold">© 2026 P2P Profit. Все права защищены.</p>
          <p className="text-white/20 text-[11px] font-medium">Результаты зависят от индивидуальных усилий участника</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
