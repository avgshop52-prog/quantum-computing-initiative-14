import Icon from "@/components/ui/icon"

const steps = [
  {
    num: "01",
    icon: "Send",
    title: "Вступаешь в канал",
    desc: "Подписываешься на наш Telegram-канал и получаешь доступ к обучающим материалам",
  },
  {
    num: "02",
    icon: "BookOpen",
    title: "Проходишь обучение",
    desc: "Изучаешь базовую стратегию P2P арбитража за 1-3 дня. Всё подробно объяснено",
  },
  {
    num: "03",
    icon: "Wallet",
    title: "Регистрируешься на бирже",
    desc: "Создаёшь аккаунт на проверенной P2P платформе по нашей пошаговой инструкции",
  },
  {
    num: "04",
    icon: "TrendingUp",
    title: "Зарабатываешь",
    desc: "Проводишь первые сделки и получаешь деньги. Мы рядом на каждом шагу",
  },
]

export function TechnologySection() {
  return (
    <section id="how" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-sm font-medium">Простой путь</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Как начать зарабатывать <span className="gradient-text">уже сегодня</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            4 шага от нуля до первых денег на P2P арбитраже
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.num} className="card-glow rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-3xl font-bold gradient-text opacity-50">{step.num}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon name={step.icon} size={18} className="text-primary" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-base rounded-xl"
          >
            <Icon name="Send" size={18} />
            Начать прямо сейчас
          </a>
        </div>
      </div>
    </section>
  )
}
