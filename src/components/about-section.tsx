import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="results" className="py-28 sm:py-36 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <ScrollReveal>
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Почему P2P</p>
            <h2 className="font-heading text-4xl sm:text-[2.8rem] font-extrabold text-white leading-tight mb-6">
              P2P арбитраж —<br />
              <span className="gradient-text">это не трейдинг.</span>
            </h2>
            </ScrollReveal>
            <p className="text-white/70 text-base leading-relaxed mb-8 font-medium">
              Покупаешь криптовалюту дешевле на одной площадке — продаёшь дороже на другой. Разница курсов = твой доход. Рынок растёт или падает — тебе неважно.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: "Shield", text: "Минимальные риски" },
                { icon: "Clock", text: "2–3 часа в день" },
                { icon: "GraduationCap", text: "Обучаем с нуля" },
                { icon: "Headphones", text: "Куратор 24/7" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-4 group hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-950/30 transition-all duration-300 cursor-default">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/30 transition-all">
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

          <ScrollReveal delay={1}>
          <div className="relative tilt-card group">
            <div className="absolute -inset-4 rounded-3xl bg-primary/[0.08] blur-[60px] group-hover:bg-primary/[0.15] transition-all duration-700" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-red-900/40 via-transparent to-red-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://cdn.poehali.dev/projects/166c0de3-fca3-4625-9fe7-cae8102d3439/files/5a3cfc0f-2698-4fcc-9955-7f5679a5defe.jpg"
              alt="P2P арбитраж криптовалюты — трейдер"
              loading="lazy"
              className="w-full rounded-2xl object-cover aspect-[4/3] relative z-10 border border-white/[0.08]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-950/80 backdrop-blur border border-red-800/50">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">LIVE</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex gap-3 z-20">
              {[
                { val: "1.8М ₽+", label: "заработано учениками" },
                { val: "28%", label: "средний ROI" },
              ].map((s) => (
                <div key={s.label} className="glass-premium rounded-xl px-4 py-3.5 flex-1 text-center">
                  <div className="font-display text-lg font-extrabold gradient-text">{s.val}</div>
                  <div className="text-[10px] text-white/60 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection