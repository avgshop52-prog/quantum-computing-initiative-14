import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const stories = [
  { name: "Алексей", before: "Менеджер, 45 000 ₽/мес", after: "+38 000 ₽ с P2P", months: 3, icon: "Briefcase" },
  { name: "Дарья", before: "Декрет, 0 ₽ дохода", after: "22 000 ₽/мес из дома", months: 2, icon: "Baby" },
  { name: "Игорь", before: "Такси, 60 000 ₽/мес", after: "+42 000 ₽ доп. доход", months: 2, icon: "Car" },
  { name: "Роман", before: "Студент, 0 ₽", after: "25 000 ₽/мес из общаги", months: 1, icon: "GraduationCap" },
]

export function BeforeAfterSection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Результаты учеников</p>
          <h2 className="font-heading text-4xl sm:text-[3rem] font-extrabold text-white leading-tight mb-5">
            Было → <span className="gradient-text">Стало</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto font-semibold">
            Реальные истории людей, которые изменили свой доход
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {stories.map((s, i) => (
            <ScrollReveal key={s.name} delay={i % 4 as 0 | 1 | 2 | 3 | 4}>
            <div className="card-premium rounded-2xl p-7 group shine-effect">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={s.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-[15px]">{s.name}</p>
                  <p className="text-white/30 text-[11px] font-bold">Результат за {s.months} мес.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 bg-red-500/5 border border-red-500/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="X" size={11} className="text-red-400" />
                    <span className="text-red-400/60 text-[10px] font-bold uppercase">Было</span>
                  </div>
                  <p className="text-white/50 text-[13px] font-bold">{s.before}</p>
                </div>
                <Icon name="ArrowRight" size={16} className="text-primary/40 flex-shrink-0" />
                <div className="flex-1 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Check" size={11} className="text-primary" />
                    <span className="text-primary/60 text-[10px] font-bold uppercase">Стало</span>
                  </div>
                  <p className="text-white text-[13px] font-extrabold">{s.after}</p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSection