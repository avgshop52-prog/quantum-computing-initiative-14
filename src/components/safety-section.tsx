import Icon from "@/components/ui/icon"

const myths = [
  { myth: "Это как казино — можно всё потерять", truth: "P2P арбитраж — это обмен, а не ставки. Ты покупаешь дешевле, продаёшь дороже. Риск потери денег минимален при соблюдении правил." },
  { myth: "Нужно разбираться в криптовалюте", truth: "Наши ученики приходят с нулевыми знаниями. За 3 дня обучения ты будешь понимать больше, чем 90% людей вокруг." },
  { myth: "Это нелегально", truth: "P2P обмен — абсолютно законная деятельность. Все сделки проходят через верифицированные биржи с защитой эскроу." },
  { myth: "Нужен большой стартовый капитал", truth: "Начать можно с 10 000 ₽. Чем больше оборот — тем больше доход, но старт доступен каждому." },
]

export function SafetySection() {
  return (
    <section className="py-24 sm:py-32 px-5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-red-500/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Честно о рисках</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Мифы vs <span className="gradient-text">Реальность</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Разбираем популярные страхи о P2P арбитраже
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {myths.map((m) => (
            <div key={m.myth} className="card-premium rounded-2xl p-6 sm:p-7">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="X" size={13} className="text-red-400" />
                </div>
                <p className="text-foreground/50 text-sm line-through decoration-red-400/40 leading-relaxed">«{m.myth}»</p>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={13} className="text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{m.truth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
