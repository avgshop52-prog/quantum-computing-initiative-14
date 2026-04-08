import Icon from "@/components/ui/icon"
import { useState } from "react"

export function CTASection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setLoading(true)
    try {
      const res = await fetch("https://functions.poehali.dev/1e3b2a64-3ec9-4963-aa20-f90aaff560b4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">Начни зарабатывать сегодня</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Готов изменить свой{" "}
          <span className="gradient-text">финансовый путь?</span>
        </h2>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Более 1 200 человек уже зарабатывают от 30 000 ₽ в месяц. Присоединяйся — первый урок бесплатно!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 text-base rounded-xl py-4 px-8"
          >
            <Icon name="Send" size={20} />
            Вступить в Telegram канал
          </a>
          <a href="#lead" className="btn-outline inline-flex items-center justify-center gap-2 text-base rounded-xl py-4 px-8">
            <Icon name="Gift" size={20} />
            Получить бесплатный урок
          </a>
        </div>

        <div className="max-w-md mx-auto card-glow rounded-2xl p-7 border border-primary/20">
          <h3 className="font-display font-bold text-xl text-foreground mb-2">Оставь заявку</h3>
          <p className="text-muted-foreground text-sm mb-5">Мы перезвоним и ответим на все вопросы</p>
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={28} className="text-primary" />
              </div>
              <p className="text-primary font-semibold text-lg">Отлично! Ждите звонка</p>
              <p className="text-muted-foreground text-sm mt-1">Обычно перезваниваем в течение часа</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон или Telegram"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <Icon name="Loader2" size={18} className="animate-spin" />
                ) : (
                  <Icon name="ArrowRight" size={18} />
                )}
                {loading ? "Отправляю..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}