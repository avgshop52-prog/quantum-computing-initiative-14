import Icon from "@/components/ui/icon"

const myths = [
  { myth: "Это как казино — можно всё потерять", truth: "P2P арбитраж — это обмен, а не ставки. Ты покупаешь дешевле, продаёшь дороже. Риск потери денег минимален при соблюдении правил." },
  { myth: "Нужно разбираться в криптовалюте", truth: "Наши ученики приходят с нулевыми знаниями. За 3 дня обучения ты будешь понимать больше, чем 90% людей вокруг." },
  { myth: "Это нелегально", truth: "P2P обмен — абсолютно законная деятельность. Все сделки проходят через верифицированные биржи с защитой эскроу." },
  { myth: "Нужен большой стартовый капитал", truth: "Начать можно с 10 000 ₽. Чем больше оборот — тем больше доход, но старт доступен каждому." },
]

export function SafetySection() {
  return (
    <section className="py-28 sm:py-36 px-5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-red-500/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Честно о рисках</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Мифы vs <span className="gradient-text">Реальность</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto font-medium">
            Разбираем популярные страхи о P2P арбитраже
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {myths.map((m) => (
            <div key={m.myth} className="card-premium rounded-2xl p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="X" size={14} className="text-red-400" />
                </div>
                <p className="text-white/40 text-sm line-through decoration-red-400/40 leading-relaxed font-medium">«{m.myth}»</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <p className="text-white text-sm leading-relaxed font-semibold">{m.truth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetySection
