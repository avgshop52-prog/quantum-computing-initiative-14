import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    <div className="flex items-center gap-2.5 justify-center">
      {[
        { val: time.hours, label: "час" },
        { val: time.minutes, label: "мин" },
        { val: time.seconds, label: "сек" },
      ].map((t, i) => (
        <div key={t.label} className="flex items-center gap-2.5">
          <div className="bg-primary/10 border border-primary/15 rounded-lg px-4 py-2.5 min-w-[56px] text-center">
            <div className="font-display text-xl font-extrabold text-white">{String(t.val).padStart(2, "0")}</div>
            <div className="text-white/30 text-[9px] uppercase tracking-wider font-bold">{t.label}</div>
          </div>
          {i < 2 && <span className="text-white/20 font-extrabold text-lg">:</span>}
        </div>
      ))}
    </div>
  )
}

export function CTASection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.1] blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <ScrollReveal>
        <div className="card-premium rounded-3xl p-10 sm:p-16 border-primary/20 glow-blue">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-7">
            <Icon name="Rocket" size={30} className="text-primary" />
          </div>

          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-white mb-4 leading-tight">
            Через неделю ты будешь жалеть,<br />
            <span className="gradient-text">что не начал сегодня</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed font-semibold">
            312 учеников уже зарабатывают дополнительно от 15 000 до 50 000 ₽ в месяц. Вступай в канал — первый урок бесплатно, без обязательств.
          </p>

          <div className="mb-10">
            <p className="text-white/30 text-xs mb-4 uppercase tracking-wider font-extrabold">Спецпредложение заканчивается через</p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-base py-4.5 px-10 inline-flex items-center justify-center gap-2.5 font-extrabold">
              <Icon name="Send" size={17} />
              Вступить в канал бесплатно
            </a>
            <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-base py-4 px-8 inline-flex items-center justify-center gap-2 font-bold">
              <Icon name="MessageCircle" size={16} />
              Написать куратору
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-white/[0.06]">
            {[
              { icon: "Lock", text: "Бесплатный вход" },
              { icon: "MessageCircle", text: "Куратор 24/7" },
              { icon: "Zap", text: "Результат за 3 дня" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <Icon name={b.icon} size={14} className="text-primary/50" />
                <span className="text-white/40 text-[11px] font-bold">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTASection