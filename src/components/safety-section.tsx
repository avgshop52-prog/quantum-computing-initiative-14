import Icon from "@/components/ui/icon"

const risks = [
  {
    icon: "ShieldCheck",
    title: "Это не трейдинг",
    desc: "Вы не ставите на рост или падение курса. Зарабатываете только на разнице цен между платформами.",
  },
  {
    icon: "Scale",
    title: "Полностью легально",
    desc: "P2P арбитраж — законная деятельность. Сделки проходят через официальные биржи с верификацией.",
  },
  {
    icon: "Lock",
    title: "Безопасность сделок",
    desc: "Биржи используют эскроу-систему: деньги замораживаются до подтверждения обеими сторонами.",
  },
  {
    icon: "Banknote",
    title: "Контролируемые суммы",
    desc: "Начинаете с любой суммы. Нет обязательных вложений — зарабатываете с тем, что есть.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary text-sm font-medium">Безопасность</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Почему P2P — это <span className="gradient-text">безопасно</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Многие боятся криптовалюты из-за историй о потерях. P2P арбитраж — принципиально другой подход. Здесь нет азарта, только математика.
            </p>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/84a515e7-6a67-4aff-8510-0e24eec56ab9.jpg"
                alt="Безопасность P2P"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {risks.map((r) => (
              <div key={r.title} className="card-glow rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={r.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-foreground mb-1">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
