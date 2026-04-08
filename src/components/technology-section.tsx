import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "UserPlus",
    title: "Вступаешь в канал",
    desc: "Получаешь доступ к базе знаний, стратегиям и закрытому чату учеников",
    time: "1 минута",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: "BookOpen",
    title: "Проходишь обучение",
    desc: "Пошаговые видеоуроки + практика с куратором. Даже если никогда не слышал про крипту",
    time: "1–3 дня",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: "ArrowUpDown",
    title: "Делаешь первую сделку",
    desc: "Куратор проведёт за руку через первый обмен. Страховка от ошибок",
    time: "День 3",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: "Banknote",
    title: "Выводишь прибыль",
    desc: "Деньги сразу на твоей карте. Без ожидания, без скрытых комиссий",
    time: "День 4+",
    color: "from-amber-500/20 to-amber-500/5",
  },
]

export function TechnologySection() {
  return (
    <section id="how" className="py-24 sm:py-32 px-5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Путь к заработку</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            От нуля до прибыли за <span className="gradient-text">4 шага</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Никакой теории на месяцы. Только практика и результат
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="card-premium rounded-2xl p-6 relative group">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon name={s.icon} size={20} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground/30 font-display text-3xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[15px] text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1.5">
                  <Icon name="Clock" size={11} className="text-primary/50" />
                  <span className="text-primary/70 text-[11px] font-medium">{s.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-[15px] py-3.5 px-8 inline-flex items-center gap-2.5">
            <Icon name="Play" size={16} />
            Начать прямо сейчас
          </a>
        </div>
      </div>
    </section>
  )
}
