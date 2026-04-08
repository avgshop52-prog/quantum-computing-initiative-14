import Icon from "@/components/ui/icon"

const numbers = [
  { value: "₽2.3М+", label: "Выплачено участникам" },
  { value: "1 200+", label: "Активных трейдеров" },
  { value: "34%", label: "Средний доход/мес" },
  { value: "24/7", label: "Поддержка" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary text-sm font-medium">О нас</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Мы помогаем людям <span className="gradient-text">зарабатывать честно</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              P2P арбитраж — это легальный и прозрачный способ заработка на разнице курсов криптовалюты на разных площадках. Никакого трейдинга с риском, никаких пирамид.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Мы работаем уже 2 года, за это время помогли более 1 200 людям по всей России выйти на стабильный дополнительный доход от 30 000 до 150 000 рублей в месяц.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Полностью легальный заработок",
                "Не требует опыта в трейдинге",
                "Работа 2-4 часа в день",
                "Поддержка куратора 24/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-3xl overflow-hidden mb-5">
              <img
                src="https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/95a18c80-fc4a-4ddc-a4d7-023f429eb2c7.jpg"
                alt="P2P арбитраж"
                className="w-full h-64 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {numbers.map((n) => (
                <div key={n.label} className="card-glow rounded-2xl p-5 text-center">
                  <div className="font-display text-2xl font-bold gradient-text mb-1">{n.value}</div>
                  <div className="text-muted-foreground text-xs">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
