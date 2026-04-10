import Icon from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section id="results" className="py-28 sm:py-36 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Почему P2P</p>
            <h2 className="font-heading text-4xl sm:text-[2.8rem] font-extrabold text-white leading-tight mb-6">
              P2P арбитраж —<br />
              <span className="gradient-text">это не трейдинг.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8 font-semibold">
              Покупаешь криптовалюту дешевле на одной площадке — продаёшь дороже на другой. Разница курсов = твой доход. Рынок растёт или падает — тебе неважно.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: "Shield", text: "Минимальные риски" },
                { icon: "Clock", text: "2–3 часа в день" },
                { icon: "GraduationCap", text: "Обучаем с нуля" },
                { icon: "Headphones", text: "Куратор 24/7" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-4 group hover:bg-primary/5 hover:border-primary/15 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={f.icon} size={16} className="text-primary" />
                  </div>
                  <span className="text-white text-[13px] font-bold">{f.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
                className="btn-glow text-sm py-3.5 px-7 inline-flex items-center gap-2 font-extrabold">
                <Icon name="Send" size={15} />
                Хочу научиться
              </a>
              <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
                className="btn-ghost text-sm py-3.5 px-6 inline-flex items-center gap-2 font-bold">
                <Icon name="MessageCircle" size={15} />
                Задать вопрос
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.05] blur-[60px]" />
            <img
              src="https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/992ce187-b6c8-4ea7-8d94-698292650b62.jpg"
              alt="P2P арбитраж криптовалюты — рабочее место трейдера"
              loading="lazy"
              className="w-full rounded-2xl object-cover aspect-[4/3] relative z-10"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3 z-20">
              {[
                { val: "1.8М ₽+", label: "заработано учениками" },
                { val: "28%", label: "средний ROI" },
              ].map((s) => (
                <div key={s.label} className="card-glass-static rounded-xl px-4 py-3.5 flex-1 text-center">
                  <div className="font-display text-lg font-extrabold gradient-text">{s.val}</div>
                  <div className="text-[10px] text-white/40 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection