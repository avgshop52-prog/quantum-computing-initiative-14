import Icon from "@/components/ui/icon"

const features = [
  { icon: "Laptop", title: "Работай откуда угодно", desc: "Нужен только телефон и интернет. Дома, в кафе, в поездке — зарабатывай из любой точки мира" },
  { icon: "ShieldCheck", title: "Легально и прозрачно", desc: "Сделки через официальные биржи с верификацией. Никаких серых схем — всё по закону" },
  { icon: "LineChart", title: "Доход не зависит от рынка", desc: "Крипта растёт или падает — неважно. Ты зарабатываешь на разнице цен между площадками" },
  { icon: "Timer", title: "Быстрый результат", desc: "Первую прибыль получаешь на 3-й день обучения. Не через месяц — сейчас" },
  { icon: "Users", title: "Живое сообщество", desc: "1 500+ учеников, общий чат, разборы сделок. Рядом люди с таким же опытом" },
  { icon: "Wallet", title: "Старт с любой суммой", desc: "Нет минимального порога. Начни с 10 000₽ и постепенно наращивай обороты" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 sm:py-36 px-5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Преимущества</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Почему выбирают <span className="gradient-text">P2P Profit</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto font-medium">
            1 500+ учеников уже зарабатывают. Вот почему они выбрали нас
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-premium rounded-2xl p-7 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon name={f.icon} size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-extrabold text-[17px] text-white mb-3">{f.title}</h3>
              <p className="text-white/50 text-[13px] leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
