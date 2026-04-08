import Icon from "@/components/ui/icon"

const guarantees = [
  {
    icon: "DollarSign",
    title: "Бесплатный вход",
    desc: "Никаких предоплат и скрытых платежей. Вступаешь в канал, получаешь обучение и начинаешь. Точка.",
  },
  {
    icon: "UserCheck",
    title: "Персональный куратор",
    desc: "Живой человек, который проведёт тебя через каждый шаг. Не бот, не автоворонка -- реальная поддержка 24/7.",
  },
  {
    icon: "TrendingUp",
    title: "Реальные результаты",
    desc: "1 200+ учеников. Средний доход -- 34% в месяц. Мы показываем скриншоты, а не красивые слова.",
  },
  {
    icon: "GraduationCap",
    title: "С полного нуля",
    desc: "Не нужен опыт. Не нужна крипта. Не нужны знания. Мы объясняем каждую кнопку, каждый шаг.",
  },
]

export function GuaranteeSection() {
  return (
    <section className="py-24 sm:py-36 px-5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[200px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/15 rounded-full px-5 py-2 mb-6">
            <Icon name="Verified" size={14} className="text-primary" />
            <span className="font-display text-xs font-semibold text-primary tracking-wide">
              Наша гарантия
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-foreground leading-tight mb-6 text-balance">
            Мы не обманываем.{" "}
            <span className="gradient-text">Мы обучаем.</span>
          </h2>

          <p className="font-light text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Мы понимаем, что в интернете много мошенников. Именно поэтому мы делаем всё максимально прозрачно: бесплатный вход, реальные отзывы, живые кураторы и результат с первых дней.
          </p>
        </div>

        {/* Guarantee cards grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mb-16">
          {guarantees.map((g, i) => (
            <div
              key={g.title}
              className={`card-premium gradient-border rounded-2xl p-7 sm:p-9 group reveal-up reveal-up-delay-${i + 1}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-500 glow-ring">
                  <Icon name={g.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground mb-2">
                    {g.title}
                  </h3>
                  <p className="font-light text-muted-foreground text-sm leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central trust statement */}
        <div className="reveal-up reveal-up-delay-3">
          <div className="card-premium rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px line-glow" />

            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8 glow-ring">
              <Icon name="Heart" size={28} className="text-primary" />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-4 text-balance">
              Нам важна твоя победа, а не твои деньги
            </h3>

            <p className="font-light text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mb-10">
              Вход в канал бесплатный. Базовое обучение бесплатное. Куратор бесплатный. Мы зарабатываем только когда ты зарабатываешь -- на продвинутых стратегиях, которые ты покупаешь по желанию.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-lg mx-auto">
              {[
                { val: "0 ₽", label: "за вход" },
                { val: "24/7", label: "поддержка" },
                { val: "3 дня", label: "до результата" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
                    {s.val}
                  </div>
                  <div className="font-light text-muted-foreground text-xs sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm py-3.5 px-8 inline-flex items-center gap-2.5"
            >
              <Icon name="Send" size={15} />
              Убедиться самому -- вступить бесплатно
            </a>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="text-center mt-10 reveal-up reveal-up-delay-4">
          <div className="inline-flex items-start gap-3 bg-muted/30 border border-border/50 rounded-xl px-5 py-4 max-w-2xl">
            <Icon
              name="Info"
              size={16}
              className="text-muted-foreground/50 flex-shrink-0 mt-0.5"
            />
            <p className="font-light text-muted-foreground/60 text-xs leading-relaxed text-left">
              P2P обмен криптовалюты является законной деятельностью. Все сделки проходят через верифицированные биржи с защитой эскроу. Результаты учеников зависят от индивидуальных усилий и могут отличаться. Информация на сайте не является финансовой рекомендацией.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
