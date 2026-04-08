import { useState } from "react"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "₽2.3М+", label: "Выплачено участникам" },
  { value: "1 200+", label: "Активных трейдеров" },
  { value: "34%", label: "Средний доход в месяц" },
  { value: "2 года", label: "На рынке" },
]

export function Hero3DWebGL() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
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
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,222,128,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">Telegram-канал уже работает — заходи прямо сейчас</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
          Зарабатывай на{" "}
          <span className="gradient-text glow-green-text">P2P Арбитраже</span>
          {" "}от 50 000 ₽/месяц
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
          Обучаем реальному заработку на разнице курсов криптовалюты. Без опыта, без сложных схем — понятная система с поддержкой 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-300">
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 text-base rounded-xl"
          >
            <Icon name="Send" size={18} />
            Вступить в Telegram канал
          </a>
          <a href="#how" className="btn-outline inline-flex items-center justify-center gap-2 text-base rounded-xl">
            <Icon name="PlayCircle" size={18} />
            Как это работает
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-up delay-400">
          {stats.map((stat) => (
            <div key={stat.label} className="card-glow rounded-2xl p-5 text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div id="lead" className="max-w-md mx-auto animate-fade-up delay-500">
          <div className="card-glow rounded-2xl p-6 border border-primary/20">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Получи бесплатный урок</h3>
            <p className="text-muted-foreground text-sm mb-5">Оставь заявку — мы пришлём первый урок и покажем как зарабатывать</p>
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckCircle" size={28} className="text-primary" />
                </div>
                <p className="text-primary font-semibold text-lg">Заявка отправлена!</p>
                <p className="text-muted-foreground text-sm mt-1">Мы свяжемся с тобой в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Твоё имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона или Telegram"
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
                  {loading ? "Отправляю..." : "Получить бесплатный урок"}
                </button>
                <p className="text-muted-foreground text-xs text-center">Нажимая кнопку, вы соглашаетесь с обработкой данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}