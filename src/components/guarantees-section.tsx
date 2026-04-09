import Icon from "@/components/ui/icon"

const guarantees = [
  {
    icon: "ShieldCheck",
    title: "Мы не мошенники",
    desc: "Мы не просим перевести деньги на «инвестиционный счёт». Не обещаем миллионы за день. Обучаем реальному навыку, который приносит стабильный доход.",
    highlight: true,
  },
  {
    icon: "BookOpen",
    title: "Бесплатный вход",
    desc: "Базовое обучение — бесплатно. Ты ничем не рискуешь. Начни, попробуй, посмотри результат — и только потом решай.",
  },
  {
    icon: "Scale",
    title: "100% легально",
    desc: "P2P обмен криптовалюты — законная деятельность. Все сделки через верифицированные биржи с эскроу-защитой.",
  },
  {
    icon: "UserCheck",
    title: "Реальные люди",
    desc: "Кураторы с лицами, отзывы реальных учеников, живой чат в Telegram. Никаких анонимных ботов и фейков.",
  },
  {
    icon: "HandshakeIcon",
    title: "Поддержка 24/7",
    desc: "Личный куратор отвечает на вопросы в любое время. Мы заинтересованы в твоём результате — это наша репутация.",
  },
  {
    icon: "TrendingUp",
    title: "Результат с первой недели",
    desc: "Не через 3 месяца теории. Первую прибыльную сделку делают на 3-й день. Мы показываем результат быстро.",
  },
]

export function GuaranteesSection() {
  return (
    <section className="py-24 sm:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.07] border border-primary/15 rounded-full px-4 py-2 mb-6">
            <Icon name="Shield" size={14} className="text-primary" />
            <span className="text-primary/90 text-xs font-semibold">Почему нам можно доверять</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Мы учим, а не <span className="gradient-text">обманываем</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Понимаем, что в интернете много мошенников. Поэтому максимально прозрачны — вот наши гарантии
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guarantees.map((g) => (
            <div key={g.title} className={`rounded-2xl p-6 group ${g.highlight ? "card-premium border-primary/20" : "card-glass"}`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${g.highlight ? "bg-primary/15" : "bg-primary/10 border border-primary/15 group-hover:bg-primary/15"}`}>
                <Icon name={g.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-[15px] text-foreground mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-glass-static rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Quote" size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground text-sm leading-relaxed italic mb-2">
                  «1 500 учеников — но наша главная метрика не количество, а качество. 97% начали зарабатывать. Если ты не получишь результат — мы провалились.»
                </p>
                <p className="text-muted-foreground text-xs font-medium">— Дмитрий Волков, основатель P2P Profit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection