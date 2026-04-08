import { useState } from "react"
import Icon from "@/components/ui/icon"

const logos = ["Binance", "Bybit", "OKX", "Garantex", "HUOBI", "KuCoin"]

export function Hero3DWebGL() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setError("")
    setLoading(true)
    try {
      const res = await fetch("https://functions.poehali.dev/1e3b2a64-3ec9-4963-aa20-f90aaff560b4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (!res.ok) throw new Error("Ошибка сервера")
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Не удалось отправить. Попробуй ещё раз")
    }
    setLoading(false)
  }

  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto w-full">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/15 rounded-full px-3.5 py-1.5 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-soft" />
            <span className="text-primary/90 text-xs font-medium tracking-wide">Набор в новую группу открыт</span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold text-foreground leading-[1.1] mb-5 tracking-tight">
            Научим зарабатывать на<br />
            <span className="gradient-text">P2P арбитраже</span> с нуля
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-[520px] mx-auto mb-9 leading-relaxed">
            Пошаговое обучение с куратором. Первые результаты — через 3 дня. Без опыта в крипте и трейдинге.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm py-3.5 px-7 inline-flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Начать обучение бесплатно
            </a>
            <a href="#how" className="btn-ghost text-sm py-3.5 px-7 inline-flex items-center justify-center gap-2">
              Как это работает
              <Icon name="ChevronDown" size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-14">
          {[
            { val: "3 дня", sub: "до первого заработка", icon: "Zap" },
            { val: "1 200+", sub: "учеников прошли курс", icon: "Users" },
            { val: "от 50К", sub: "рублей в месяц", icon: "TrendingUp" },
          ].map((s) => (
            <div key={s.sub} className="card-glass rounded-2xl p-4 sm:p-5 text-center">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2.5">
                <Icon name={s.icon} size={16} className="text-primary" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-foreground mb-0.5">{s.val}</div>
              <div className="text-muted-foreground text-[11px] sm:text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden mb-14 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(225_25%_4%)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(225_25%_4%)] to-transparent z-10" />
          <div className="flex gap-8 marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-muted-foreground/30 text-sm font-display font-medium tracking-wider uppercase">{l}</span>
            ))}
          </div>
        </div>

        <div id="lead" className="max-w-[400px] mx-auto">
          <div className="card-glass rounded-2xl p-6 border-primary/15">
            <div className="text-center mb-5">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Gift" size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">Бесплатный пробный урок</h3>
              <p className="text-muted-foreground text-xs mt-1">Покажем на практике как заработать первые деньги</p>
            </div>
            {submitted ? (
              <div className="text-center py-3">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Check" size={22} className="text-primary" />
                </div>
                <p className="text-foreground font-semibold">Заявка принята!</p>
                <p className="text-muted-foreground text-xs mt-1">Свяжемся с тобой в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Имя</label>
                  <input id="hero-name" type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required minLength={2}
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/30 transition-colors" />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="sr-only">Телефон или Telegram</label>
                  <input id="hero-phone" type="tel" placeholder="Телефон или @telegram" value={phone} onChange={(e) => setPhone(e.target.value)} required
                    className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/30 transition-colors" />
                </div>
                {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                <button type="submit" disabled={loading}
                  className="btn-glow w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? <Icon name="Loader2" size={16} className="animate-spin" /> : <Icon name="ArrowRight" size={16} />}
                  {loading ? "Отправляю..." : "Получить бесплатный урок"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}