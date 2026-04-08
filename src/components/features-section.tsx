import Icon from "@/components/ui/icon"

const features = [
  { icon: "Laptop", title: "Работай откуда угодно", desc: "Нужен только телефон и интернет. Дома, в кафе, в поездке — зарабатывай из любой точки мира" },
  { icon: "ShieldCheck", title: "Легально и прозрачно", desc: "Сделки через официальные биржи с верификацией. Никаких серых схем — всё по закону" },
  { icon: "LineChart", title: "Доход не зависит от рынка", desc: "Крипта растёт или падает — неважно. Ты зарабатываешь на разнице цен между площадками" },
  { icon: "Timer", title: "Быстрый результат", desc: "Первую прибыль получаешь на 3-й день обучения. Не через месяц — сейчас" },
  { icon: "Users", title: "Живое сообщество", desc: "1 200+ учеников, общий чат, разборы сделок. Рядом люди с таким же опытом" },
  { icon: "Wallet", title: "Старт с любой суммой", desc: "Нет минимального порога. Начни с 10 000₽ и постепенно наращивай обороты" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 px-5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Преимущества</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Почему <span className="gradient-text">1 200 человек</span> уже с нами
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={f.title} className={`card-premium rounded-2xl p-6 group ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon name={f.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-[15px] text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
