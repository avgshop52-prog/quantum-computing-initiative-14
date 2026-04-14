import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: "UserPlus",
    title: "Вступаешь в канал",
    desc: "Получаешь доступ к базе знаний, стратегиям и закрытому чату учеников",
    time: "1 минута",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: "BookOpen",
    title: "Проходишь обучение",
    desc: "Пошаговые видеоуроки + практика с куратором. Даже если никогда не слышал про крипту",
    time: "1–3 дня",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    icon: "ArrowUpDown",
    title: "Делаешь первую сделку",
    desc: "Куратор проведёт за руку через первый обмен. Страховка от ошибок",
    time: "День 3",
    color: "from-violet-500/20 to-violet-500/5",
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
    <section id="how" className="py-28 sm:py-36 px-5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Путь к заработку</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            От нуля до прибыли за <span className="gradient-text">4 шага</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto font-medium">
            Никакой теории на месяцы. Только практика и результат
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i % 4 as 0 | 1 | 2 | 3 | 4}>
              <div className="card-red-border p-7 relative group">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon name={s.icon} size={22} className="text-primary" />
                    </div>
                    <span className="text-white/10 font-display text-4xl font-extrabold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[17px] text-white mb-3">{s.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed mb-4 font-medium">{s.desc}</p>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Clock" size={11} className="text-primary/50" />
                    <span className="text-primary/70 text-[11px] font-bold">{s.time}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-base py-4 px-9 inline-flex items-center gap-2.5 font-extrabold">
            <Icon name="Play" size={17} />
            Начать прямо сейчас
          </a>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection