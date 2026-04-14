import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const rows = [
  { feature: "Стоимость обучения", us: "Бесплатно", others: "50 000 — 200 000₽" },
  { feature: "Личный куратор", us: "24/7 в Telegram", others: "Нет или по расписанию" },
  { feature: "Первый результат", us: "3 дня", others: "1–3 месяца" },
  { feature: "Формат", us: "Видео + практика", others: "Только теория" },
  { feature: "Поддержка после курса", us: "Пожизненно", others: "Заканчивается" },
  { feature: "Живое сообщество", us: "1843 ученика", others: "Закрытый чат / нет" },
  { feature: "Результативность", us: "89% успешность", others: "Без гарантий" },
]

export function ComparisonSection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Сравнение</p>
          <h2 className="font-heading text-4xl sm:text-[3rem] font-extrabold text-white leading-tight mb-5">
            P2P Profit vs <span className="gradient-text">другие курсы</span>
          </h2>
        </div>

        <ScrollReveal>
          <div className="card-red-border overflow-hidden">
            <div className="grid grid-cols-3 gap-0 border-b border-white/[0.06] px-6 py-5">
              <div className="text-white/30 text-xs font-bold uppercase"></div>
              <div className="text-center">
                <span className="text-primary text-xs font-extrabold uppercase tracking-wider">P2P Profit</span>
              </div>
              <div className="text-center">
                <span className="text-white/30 text-xs font-bold uppercase tracking-wider">Другие</span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 gap-0 px-6 py-4 ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-white/[0.02] transition-colors`}>
                <div className="text-white/60 text-[13px] font-bold flex items-center">{row.feature}</div>
                <div className="text-center flex items-center justify-center gap-1.5">
                  <Icon name="Check" size={13} className="text-primary" />
                  <span className="text-white text-[13px] font-extrabold">{row.us}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-1.5">
                  <Icon name="X" size={13} className="text-red-400/50" />
                  <span className="text-white/30 text-[13px] font-semibold">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ComparisonSection