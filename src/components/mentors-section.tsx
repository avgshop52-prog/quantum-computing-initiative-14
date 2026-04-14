import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const mentors = [
  {
    name: "Дмитрий В.",
    role: "Основатель P2P Profit",
    desc: "4 года в P2P арбитраже. Создал систему обучения, которая даёт результат с первой недели. Лично курирует продвинутую группу.",
    icon: "Crown",
    color: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/15 text-amber-400",
    stats: [
      { label: "Опыт", val: "3+ года" },
      { label: "Учеников", val: "1800+" },
    ],
  },
  {
    name: "Анна К.",
    role: "Старший куратор",
    desc: "Специалист по обучению новичков. Терпеливо объясняет каждый шаг и помогает избежать типичных ошибок начинающих.",
    icon: "GraduationCap",
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/15 text-blue-400",
    stats: [
      { label: "Учеников", val: "180+" },
      { label: "Успешность", val: "89%" },
    ],
  },
  {
    name: "Артём К.",
    role: "Куратор продвинутой группы",
    desc: "IT-специалист, автоматизировал P2P процессы. Помогает масштабировать доход и оптимизировать стратегии.",
    icon: "Code",
    color: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15 text-violet-400",
    stats: [
      { label: "Доход", val: "80К+/мес" },
      { label: "Опыт", val: "2+ года" },
    ],
  },
]

export function MentorsSection() {
  return (
    <section id="team" className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.05] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Команда</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Кто будет тебя <span className="gradient-text">обучать</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto font-semibold">
            Реальные практики с подтверждённым опытом, которые лично ведут каждого ученика
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((m, i) => (
            <ScrollReveal key={m.name} delay={i % 4 as 0 | 1 | 2 | 3 | 4}>
            <div className="card-premium rounded-3xl p-8 group relative overflow-hidden shine-effect">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${m.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${m.iconBg} flex items-center justify-center mb-6`}>
                  <Icon name={m.icon} size={28} />
                </div>
                <p className="text-primary text-[11px] font-extrabold tracking-wider uppercase mb-2">{m.role}</p>
                <h3 className="font-heading text-xl font-extrabold text-white mb-3">{m.name}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed mb-6 font-semibold">{m.desc}</p>
                <div className="flex gap-3 mb-6">
                  {m.stats.map((s) => (
                    <div key={s.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 flex-1 text-center">
                      <div className="font-display text-sm font-extrabold text-white">{s.val}</div>
                      <div className="text-white/30 text-[10px] mt-0.5 font-bold uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-base py-4 px-9 inline-flex items-center gap-2.5 font-extrabold">
            <Icon name="MessageCircle" size={17} />
            Написать куратору
          </a>
        </div>
      </div>
    </section>
  )
}

export default MentorsSection