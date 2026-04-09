import Icon from "@/components/ui/icon"

const mentors = [
  {
    name: "Дмитрий Волков",
    role: "Основатель P2P Profit",
    desc: "4 года в P2P арбитраже. Обучил 1 500+ учеников. Создал систему обучения, которая даёт результат с первой недели.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/adc34bdc-0539-46c6-b99b-a3ee10e68fe3.jpg",
    stats: [
      { label: "Опыт", val: "4+ лет" },
      { label: "Учеников", val: "1 500+" },
    ],
    socials: [{ icon: "Send", href: "https://t.me/+Z7SebGxjJmMxNDAy" }],
  },
  {
    name: "Анна Карпова",
    role: "Старший куратор",
    desc: "Специалист по стратегиям для новичков. Терпеливо объясняет каждый шаг и помогает избежать типичных ошибок.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/f301f540-0573-4f0c-b9bc-05e9c8d921ef.jpg",
    stats: [
      { label: "Учеников", val: "600+" },
      { label: "Успешность", val: "97%" },
    ],
    socials: [{ icon: "Send", href: "https://t.me/+Z7SebGxjJmMxNDAy" }],
  },
  {
    name: "Артём Ким",
    role: "Куратор продвинутой группы",
    desc: "IT-специалист, автоматизировал P2P процессы. Помогает масштабировать доход и оптимизировать стратегии.",
    img: "https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/cb50b6bd-0b42-467e-924b-dbce44093e19.jpg",
    stats: [
      { label: "Доход", val: "200К+/мес" },
      { label: "Опыт", val: "2 года" },
    ],
    socials: [{ icon: "Send", href: "https://t.me/+Z7SebGxjJmMxNDAy" }],
  },
]

export function MentorsSection() {
  return (
    <section id="team" className="py-28 sm:py-36 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.05] blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Команда</p>
          <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
            Люди, которые <span className="gradient-text">научат тебя</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto font-medium">
            Не анонимные «эксперты». Реальные люди с реальным опытом, которые лично ведут каждого ученика
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <div key={m.name} className="card-premium rounded-3xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={m.img} alt={m.name} loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_5%)] via-[hsl(222_47%_5%/0.3)] to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex gap-2">
                  {m.socials.map((s) => (
                    <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
                      <Icon name={s.icon} size={15} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <p className="text-primary text-[11px] font-extrabold tracking-wider uppercase mb-2">{m.role}</p>
                <h3 className="font-heading text-xl font-extrabold text-white mb-3">{m.name}</h3>
                <p className="text-white/50 text-[13px] leading-relaxed mb-5 font-medium">{m.desc}</p>
                <div className="flex gap-3">
                  {m.stats.map((s) => (
                    <div key={s.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 flex-1 text-center">
                      <div className="font-display text-sm font-extrabold text-white">{s.val}</div>
                      <div className="text-white/30 text-[10px] mt-0.5 font-bold uppercase">{s.label}</div>
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
