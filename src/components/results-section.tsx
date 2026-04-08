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
    <div ref={ref} className="font-display text-4xl sm:text-5xl font-bold gradient-text">
      {prefix}{val.toLocaleString()}{suffix}
    </div>
  )
}

const stats = [
  { target: 1200, suffix: "+", label: "учеников прошли обучение", icon: "Users" },
  { target: 96, suffix: "%", label: "получили результат", icon: "Target" },
  { target: 2300000, prefix: "₽", suffix: "+", label: "заработано учениками", icon: "Banknote" },
  { target: 3, suffix: " дня", label: "до первой прибыли", icon: "Zap" },
]

export function ResultsSection() {
  return (
    <section className="py-24 sm:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Цифры</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Результаты говорят <span className="font-serif font-normal text-muted-foreground/80">за нас</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-premium rounded-2xl p-6 text-center group">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon name={s.icon} size={20} className="text-primary" />
              </div>
              <AnimatedNumber target={s.target} suffix={s.suffix} prefix={s.prefix || ""} />
              <p className="text-muted-foreground text-xs mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "GraduationCap", text: "Обучение с абсолютного нуля — объясняем каждую кнопку" },
            { icon: "HeartHandshake", text: "Куратор ведёт лично — не бросаем после оплаты" },
            { icon: "RefreshCcw", text: "Пожизненный доступ к материалам и обновлениям" },
          ].map((f) => (
            <div key={f.text} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
              <Icon name={f.icon} size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-[13px] leading-relaxed">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
