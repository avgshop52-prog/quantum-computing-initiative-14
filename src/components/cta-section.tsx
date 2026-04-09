import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

function Countdown() {
  const [time, setTime] = useState({ hours: 23, minutes: 45, seconds: 12 })

  useEffect(() => {
    const target = Date.now() + 24 * 60 * 60 * 1000
    const interval = setInterval(() => {
      const diff = target - Date.now()
      if (diff <= 0) return
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { val: time.hours, label: "час" },
        { val: time.minutes, label: "мин" },
        { val: time.seconds, label: "сек" },
      ].map((t, i) => (
        <div key={t.label} className="flex items-center gap-2">
          <div className="bg-primary/10 rounded-lg px-3 py-2 min-w-[52px] text-center">
            <div className="font-display text-xl font-bold text-foreground">{String(t.val).padStart(2, "0")}</div>
            <div className="text-muted-foreground text-[9px] uppercase tracking-wider">{t.label}</div>
          </div>
          {i < 2 && <span className="text-muted-foreground/40 font-bold text-lg">:</span>}
        </div>
      ))}
    </div>
  )
}

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.08] blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="card-premium rounded-3xl p-8 sm:p-14 border-primary/15 glow-green">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Icon name="Rocket" size={28} className="text-primary" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-foreground mb-3 leading-tight">
            Через неделю ты будешь жалеть,<br />
            <span className="gradient-text">что не начал сегодня</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            1 500 человек уже зарабатывают от 50 000₽. Вступай в канал — первый урок бесплатно, без обязательств
          </p>

          <div className="mb-8">
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-wider font-medium">Спецпредложение заканчивается через</p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-[15px] py-4 px-9 inline-flex items-center justify-center gap-2.5">
              <Icon name="Send" size={17} />
              Вступить в канал бесплатно
            </a>
            <a href="#lead" className="btn-ghost text-[15px] py-4 px-8 inline-flex items-center justify-center gap-2">
              <Icon name="Phone" size={15} />
              Заявка на звонок
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 mt-10 pt-7 border-t border-border/50">
            {[
              { icon: "Lock", text: "Бесплатный вход" },
              { icon: "MessageCircle", text: "Куратор 24/7" },
              { icon: "Zap", text: "Результат за 3 дня" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5">
                <Icon name={b.icon} size={13} className="text-primary/50" />
                <span className="text-muted-foreground text-[11px]">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}