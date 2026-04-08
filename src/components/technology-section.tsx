import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "UserPlus",
    title: "Вступаешь в канал",
    desc: "Получаешь доступ к базе знаний, стратегиям и закрытому чату учеников",
    time: "1 минута",
  },
  {
    icon: "BookOpen",
    title: "Проходишь обучение",
    desc: "Пошаговые видеоуроки + практика с куратором. Даже если никогда не слышал про крипту",
    time: "1–3 дня",
  },
  {
    icon: "ArrowUpDown",
    title: "Делаешь первую сделку",
    desc: "Куратор проведёт тебя за руку через первый обмен. Страховка от ошибок",
    time: "День 3",
  },
  {
    icon: "Banknote",
    title: "Выводишь прибыль",
    desc: "Деньги сразу на твоей карте. Без ожидания, без скрытых комиссий",
    time: "День 4+",
  },
]

export function TechnologySection() {
  return (
    <section id="how" className="py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">Путь к заработку</p>
          <h2 className="font-display text-3xl sm:text-[2.8rem] font-bold text-foreground leading-tight mb-3">
            От нуля до прибыли за <span className="gradient-text">4 шага</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Никакой теории на месяцы. Только практика и результат
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="card-glass rounded-2xl p-5 relative group">
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon name={s.icon} size={18} className="text-primary" />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground bg-muted rounded-full px-2.5 py-1">{s.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-xs font-bold text-primary/40">0{i + 1}</span>
                <h3 className="font-display font-semibold text-[15px] text-foreground">{s.title}</h3>
              </div>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
