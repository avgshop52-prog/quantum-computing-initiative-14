import Icon from "@/components/ui/icon"

const myths = [
  { myth: "Это как казино — можно всё потерять", truth: "P2P арбитраж — это обмен, а не ставки. Ты покупаешь дешевле, продаёшь дороже. Риск потери денег минимален при соблюдении правил." },
  { myth: "Нужно разбираться в криптовалюте", truth: "Наши ученики приходят с нулевыми знаниями. За 3 дня обучения ты будешь понимать больше, чем 90% людей вокруг." },
  { myth: "Это нелегально", truth: "P2P обмен — абсолютно законная деятельность. Все сделки проходят через верифицированные биржи с защитой эскроу." },
  { myth: "Нужен большой стартовый капитал", truth: "Начать можно с 10 000 ₽. Чем больше оборот — тем больше доход, но старт доступен каждому." },
]

export function SafetySection() {
  return (
    <section className="py-20 sm:py-28 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">Честно о рисках</p>
          <h2 className="font-display text-3xl sm:text-[2.8rem] font-bold text-foreground leading-tight mb-3">
            Мифы vs <span className="gradient-text">Реальность</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Разбираем популярные страхи о P2P арбитраже
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {myths.map((m) => (
            <div key={m.myth} className="card-glass rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="X" size={12} className="text-red-400" />
                </div>
                <p className="text-foreground/60 text-sm line-through decoration-red-400/40">«{m.myth}»</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="Check" size={12} className="text-primary" />
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
