import { useState } from "react"
import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CalculatorSection() {
  const [capital, setCapital] = useState(20000)

  const dailyPercent = 2
  const monthly = Math.round(capital * (dailyPercent / 100) * 25)
  const yearly = monthly * 12

  return (
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.06] blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Калькулятор</p>
            <h2 className="font-heading text-4xl sm:text-[3rem] font-extrabold text-white leading-tight mb-5">
              Сколько ты можешь <span className="gradient-text">заработать</span>
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto font-semibold">
              Двигай ползунок — посчитай потенциальный доход при средней доходности наших учеников
            </p>
          </div>
        </ScrollReveal>

        <div className="card-premium rounded-3xl p-8 sm:p-12">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/50 text-sm font-bold">Стартовый капитал</span>
              <span className="font-display text-2xl font-extrabold text-white transition-all duration-300">{capital.toLocaleString()} ₽</span>
            </div>
            <input
              type="range"
              min={10000}
              max={200000}
              step={5000}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${((capital - 10000) / 190000) * 100}%, rgba(255,255,255,0.08) ${((capital - 10000) / 190000) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-white/20 text-[11px] font-bold mt-2">
              <span>10 000 ₽</span>
              <span>200 000 ₽</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
              <Icon name="Calendar" size={18} className="text-primary mx-auto mb-3" />
              <div className="font-display text-2xl font-extrabold gradient-text transition-all duration-300">{monthly.toLocaleString()} ₽</div>
              <div className="text-white/30 text-[11px] font-bold mt-1 uppercase">в месяц</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
              <Icon name="TrendingUp" size={18} className="text-primary mx-auto mb-3" />
              <div className="font-display text-2xl font-extrabold gradient-text transition-all duration-300">{yearly.toLocaleString()} ₽</div>
              <div className="text-white/30 text-[11px] font-bold mt-1 uppercase">в год</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
              <Icon name="Percent" size={18} className="text-primary mx-auto mb-3" />
              <div className="font-display text-2xl font-extrabold gradient-text transition-all duration-300">~{dailyPercent}%</div>
              <div className="text-white/30 text-[11px] font-bold mt-1 uppercase">в день</div>
            </div>
          </div>

          <p className="text-white/20 text-[11px] text-center font-semibold">
            * Расчёт основан на средней доходности учеников. Реальные результаты зависят от усилий и стратегии
          </p>
        </div>
      </div>
    </section>
  )
}

export default CalculatorSection