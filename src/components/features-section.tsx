import Icon from "@/components/ui/icon"

const features = [
  { icon: "Laptop", title: "Работай откуда угодно", desc: "Нужен только телефон и интернет. Дома, в кафе, в поездке — зарабатывай из любой точки мира" },
  { icon: "ShieldCheck", title: "Легально и прозрачно", desc: "Сделки через официальные биржи с верификацией. Никаких серых схем — всё по закону" },
  { icon: "LineChart", title: "Доход не зависит от рынка", desc: "Крипта растёт или падает — неважно. Ты зарабатываешь на разнице цен между площадками" },
  { icon: "Timer", title: "Быстрый результат", desc: "Первую прибыль получаешь уже на 3-й день обучения. Не через месяц, не через год — сейчас" },
  { icon: "Users", title: "Живое сообщество", desc: "1 200+ учеников, общий чат, разборы сделок. Ты не один — рядом люди с таким же опытом" },
  { icon: "Wallet", title: "Старт с любой суммой", desc: "Нет минимального порога входа. Начни с 10 000₽ и постепенно наращивай обороты" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">Преимущества</p>
          <h2 className="font-display text-3xl sm:text-[2.8rem] font-bold text-foreground leading-tight mb-3">
            Почему <span className="gradient-text">1 200 человек</span> уже с нами
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="card-glass rounded-2xl p-5 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon name={f.icon} size={18} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-[15px] text-foreground mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
