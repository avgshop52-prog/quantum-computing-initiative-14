import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

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
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-extrabold gradient-text">
      {prefix}{val.toLocaleString()}{suffix}
    </div>
  )
}

const stats = [
  { target: 312, suffix: "+", label: "учеников обучено", icon: "Users" },
  { target: 89, suffix: "%", label: "получили результат", icon: "Target" },
  { target: 1800000, prefix: "", suffix: "", label: "заработано учениками", icon: "Banknote", display: "1.8 млн ₽" },
  { target: 3, suffix: " дня", label: "до первой прибыли", icon: "Zap" },
]

export function ResultsSection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Цифры</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Результаты говорят <span className="font-serif font-normal text-white/50">сами за себя</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="card-premium rounded-2xl p-7 text-center group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon name={s.icon} size={22} className="text-primary" />
              </div>
              {s.display
                ? <div className="font-display text-3xl sm:text-4xl font-extrabold gradient-text leading-tight">{s.display}</div>
                : <AnimatedNumber target={s.target} suffix={s.suffix} prefix={s.prefix || ""} />
              }
              <p className="text-white/40 text-xs mt-3 font-bold uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "GraduationCap", text: "Объясняем с абсолютного нуля — каждый шаг, каждую кнопку" },
            { icon: "HeartHandshake", text: "Куратор ведёт лично до результата — не бросаем" },
            { icon: "RefreshCcw", text: "Пожизненный доступ к обновлениям и стратегиям" },
          ].map((f) => (
            <div key={f.text} className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Icon name={f.icon} size={17} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-white text-[13px] leading-relaxed font-semibold">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection