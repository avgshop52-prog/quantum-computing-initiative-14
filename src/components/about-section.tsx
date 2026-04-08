import Icon from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section id="results" className="py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary text-xs font-medium tracking-widest uppercase mb-3">Почему P2P</p>
            <h2 className="font-display text-3xl sm:text-[2.5rem] font-bold text-foreground leading-tight mb-5">
              Не трейдинг. Не инвестиции.<br />
              <span className="gradient-text">Чистая математика.</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-7">
              P2P арбитраж — это покупка криптовалюты дешевле на одной площадке и продажа дороже на другой. Разница курсов = твой доход. Рынок может падать или расти — тебе всё равно, ты зарабатываешь всегда.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                { icon: "Shield", text: "Без риска потерь" },
                { icon: "Clock", text: "2–3 часа в день" },
                { icon: "GraduationCap", text: "Обучаем с нуля" },
                { icon: "Headphones", text: "Куратор 24/7" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2.5 bg-muted/50 rounded-xl px-3.5 py-3">
                  <Icon name={f.icon} size={15} className="text-primary flex-shrink-0" />
                  <span className="text-foreground text-[13px] font-medium">{f.text}</span>
                </div>
              ))}
            </div>

            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-sm py-3 px-6 inline-flex items-center gap-2">
              <Icon name="Send" size={14} />
              Хочу научиться
            </a>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/85d7073c-7c7f-4ad1-8cd4-156e4ae1396a.jpg"
              alt="Дашборд P2P арбитража с графиками прибыли"
              loading="lazy"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/70 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {[
                { val: "₽2.3М+", label: "выплачено" },
                { val: "34%", label: "средний доход" },
              ].map((s) => (
                <div key={s.label} className="card-glass rounded-xl px-4 py-3 flex-1 text-center">
                  <div className="font-display text-lg font-bold gradient-text">{s.val}</div>
                  <div className="text-[10px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}