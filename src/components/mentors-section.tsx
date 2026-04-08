import Icon from "@/components/ui/icon"

const mentors = [
  {
    name: "Дмитрий Волков",
    role: "Основатель P2P Profit",
    desc: "3 года в P2P арбитраже. Обучил 1 200+ учеников. Создал систему обучения, которая даёт результат с первой недели.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/64911bad-dc01-4ebc-b34e-59bee4634d61.jpg",
    stats: [
      { label: "Опыт", val: "3+ лет" },
      { label: "Учеников", val: "1 200+" },
    ],
  },
  {
    name: "Анна Карпова",
    role: "Старший куратор",
    desc: "Специалист по стратегиям для новичков. Терпеливо объясняет каждый шаг и помогает избежать ошибок.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/85ada1e3-950b-4b0b-8647-af85bd2c56d5.jpg",
    stats: [
      { label: "Учеников", val: "400+" },
      { label: "Успешность", val: "96%" },
    ],
  },
  {
    name: "Артём Ким",
    role: "Куратор продвинутой группы",
    desc: "IT-специалист, автоматизировал P2P процессы. Помогает масштабировать доход и оптимизировать стратегии.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/4d264c1c-c3fb-4138-92ac-051c15a129ea.jpg",
    stats: [
      { label: "Доход", val: "90К+/мес" },
      { label: "Опыт", val: "2 года" },
    ],
  },
]

export function MentorsSection() {
  return (
    <section id="team" className="py-24 sm:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Команда</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Люди, которые <span className="gradient-text">научат тебя</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Не анонимные «эксперты». Реальные люди с реальным опытом, которые лично ведут каждого ученика
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {mentors.map((m) => (
            <div key={m.name} className="card-premium rounded-3xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={m.img} alt={m.name} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230_25%_3%)] via-transparent to-transparent" />
              </div>
              <div className="p-6 -mt-10 relative z-10">
                <p className="text-primary text-[11px] font-semibold tracking-wider uppercase mb-1">{m.role}</p>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{m.name}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed mb-4">{m.desc}</p>
                <div className="flex gap-3">
                  {m.stats.map((s) => (
                    <div key={s.label} className="bg-muted/50 rounded-lg px-3 py-2 flex-1 text-center">
                      <div className="font-display text-sm font-bold text-foreground">{s.val}</div>
                      <div className="text-muted-foreground text-[10px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MentorsSection
