import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 2000
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setVal(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display text-5xl sm:text-6xl font-extrabold gradient-text num-glow leading-none">
      {prefix}{val.toLocaleString()}{suffix}
      <span className="text-primary animate-pulse">+</span>
    </div>
  )
}

const stats = [
  { target: 89, suffix: "%", label: "получили результат", icon: "Target" },
  { target: 1800000, prefix: "", suffix: "", label: "заработано учениками", icon: "Banknote", display: "1.8 млн ₽+" },
  { target: 3, suffix: " дня", label: "до первой прибыли", icon: "Zap" },
]

const BASE_COUNT = 1843
const BASE_DATE = new Date("2026-04-14").getTime()

function StudentsCounter() {
  const daysPassed = Math.floor((Date.now() - BASE_DATE) / (1000 * 60 * 60 * 24))
  const count = BASE_COUNT + daysPassed * 1

  return (
    <div className="font-display text-5xl sm:text-6xl font-extrabold gradient-text num-glow leading-none">
      {count.toLocaleString()}<span className="text-primary animate-pulse">+</span>
    </div>
  )
}

export function ResultsSection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Цифры</p>
            <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
              Результаты говорят <span className="font-serif font-normal text-white/50">сами за себя</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <ScrollReveal delay={0}>
            <div className="card-red-border tilt-card shine-hover p-7 text-center group">
              <div className="icon-box w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 group-hover:border-primary/50">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <StudentsCounter />
              <p className="text-white/50 text-xs mt-4 font-bold uppercase tracking-wider">учеников обучено</p>
            </div>
          </ScrollReveal>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={(i + 1) % 4 as 0 | 1 | 2 | 3 | 4}>
              <div className="card-red-border tilt-card shine-hover p-7 text-center group">
                <div className="icon-box w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/25 group-hover:border-primary/50">
                  <Icon name={s.icon} size={24} className="text-primary" />
                </div>
                {s.display
                  ? <div className="font-display text-4xl sm:text-5xl font-extrabold gradient-text num-glow leading-tight">{s.display}</div>
                  : <AnimatedNumber target={s.target} suffix={s.suffix} prefix={s.prefix || ""} />
                }
                <p className="text-white/50 text-xs mt-4 font-bold uppercase tracking-wider">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "GraduationCap", text: "Объясняем с абсолютного нуля — каждый шаг, каждую кнопку" },
            { icon: "HeartHandshake", text: "Куратор ведёт лично до результата — не бросаем" },
            { icon: "RefreshCcw", text: "Пожизненный доступ к обновлениям и стратегиям" },
          ].map((f) => (
            <div key={f.text} className="group flex items-start gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/30 flex-shrink-0 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all">
                <Icon name={f.icon} size={14} className="text-primary" />
              </div>
              <span className="text-white text-[13px] leading-relaxed font-semibold">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection