import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  { icon: "Laptop", title: "Работай откуда угодно", desc: "Нужен только телефон и интернет. Дома, в кафе, в поездке — зарабатывай из любой точки мира", badge: "Мобильно" },
  { icon: "ShieldCheck", title: "Легально и прозрачно", desc: "Сделки через официальные биржи с верификацией. Никаких серых схем — всё по закону", badge: "Безопасно" },
  { icon: "LineChart", title: "Доход не зависит от рынка", desc: "Крипта растёт или падает — неважно. Ты зарабатываешь на разнице цен между площадками", badge: "Стабильно" },
  { icon: "Timer", title: "Быстрый результат", desc: "Первую прибыль получаешь на 3-й день обучения. Не через месяц — сейчас", badge: "3 дня" },
  { icon: "Users", title: "Живое сообщество", desc: "1843 ученика, общий чат, разборы сделок. Рядом люди с таким же опытом", badge: "1843+" },
  { icon: "Wallet", title: "Старт с любой суммой", desc: "Начни с 10 000 ₽ и постепенно наращивай обороты. Нет минимального порога", badge: "От 10к ₽" },
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
          <p className="text-white/65 text-base max-w-lg mx-auto font-medium">
            1843 ученика уже зарабатывают. Вот почему они выбрали нас
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i % 4 as 0 | 1 | 2 | 3 | 4}>
              <div className="card-red-border tilt-card shine-hover p-7 group h-full relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="icon-box w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50">
                    <Icon name={f.icon} size={22} className="text-primary" />
                  </div>
                  <span className="bg-primary text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-lg shadow-red-950/40 group-hover:scale-105 transition-transform">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-[17px] text-white mb-3 group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                <p className="text-white/60 text-[13px] leading-relaxed font-medium">{f.desc}</p>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-60 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  <Icon name="ArrowUpRight" size={16} className="text-primary" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection