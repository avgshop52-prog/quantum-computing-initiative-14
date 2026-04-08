import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "TrendingUp",
    title: "Стабильный доход",
    desc: "Зарабатывай на разнице курсов крипты каждый день — независимо от роста или падения рынка",
  },
  {
    icon: "Shield",
    title: "Безопасная стратегия",
    desc: "P2P арбитраж не требует рискованных ставок. Ты торгуешь с гарантированной маржой",
  },
  {
    icon: "Zap",
    title: "Быстрый старт",
    desc: "Первую сделку можно провести уже в первый день. Обучение простое и понятное даже для новичков",
  },
  {
    icon: "Users",
    title: "Сообщество 1 200+ человек",
    desc: "Живое сообщество, общий чат, поддержка кураторов и разборы сделок в прямом эфире",
  },
  {
    icon: "Clock",
    title: "Работа 2-4 часа в день",
    desc: "Не нужно сидеть за экраном 24/7. Зарабатывай в своём темпе, совмещая с основной работой",
  },
  {
    icon: "BarChart2",
    title: "Прозрачная аналитика",
    desc: "Все сделки фиксируются, доход считается честно. Видишь каждый рубль, который зарабатываешь",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-sm font-medium">Почему выбирают нас</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Всё что нужно для <span className="gradient-text">стабильного заработка</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Мы даём систему, знания и поддержку — тебе остаётся только применять
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-glow rounded-2xl p-6 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={f.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}