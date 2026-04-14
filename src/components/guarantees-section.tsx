import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    title: "Реальные кураторы",
    desc: "Отзывы живых учеников из Telegram-чата. Куратор отвечает лично — не боты, не автоответы. Открытая команда с реальным опытом.",
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
    <section className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 rounded-full px-5 py-2.5 mb-6">
            <Icon name="Shield" size={14} className="text-primary" />
            <span className="text-primary text-xs font-extrabold uppercase tracking-wide">Почему нам можно доверять</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Мы учим, а не <span className="gradient-text">обманываем</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto font-medium">
            Понимаем, что в интернете много мошенников. Поэтому максимально прозрачны — вот наши гарантии
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((g, i) => (
            <ScrollReveal key={g.title} delay={i % 4 as 0 | 1 | 2 | 3 | 4}>
              <div className="card-red-border p-7 group h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${g.highlight ? "bg-primary/15" : "bg-primary/10 border border-primary/15 group-hover:bg-primary/15"}`}>
                  <Icon name={g.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-extrabold text-[17px] text-white mb-3">{g.title}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed font-medium">{g.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="card-red-border p-7 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Quote" size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm leading-relaxed italic mb-3 font-medium">
                  «1843 ученика — но наша главная метрика не количество, а качество. 89% начали зарабатывать. Если ты не получишь результат — мы провалились.»
                </p>
                <p className="text-white/40 text-xs font-bold">— Дмитрий Волков, основатель P2P Profit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection