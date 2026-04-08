import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 sm:py-36 px-5 relative overflow-hidden">
      {/* Multi-layer background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.08] blur-[180px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-primary/[0.05] blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div className="card-premium gradient-border rounded-[2rem] p-8 sm:p-14 reveal-up">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/15 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary pulse-soft" />
            <span className="font-display text-xs font-semibold text-primary tracking-wide">
              Осталось 23 места в этом потоке
            </span>
          </div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8 glow-ring">
            <Icon name="Rocket" size={28} className="text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-foreground mb-5 leading-tight text-balance">
            Через неделю ты будешь жалеть,{" "}
            <span className="gradient-text">что не начал сегодня</span>
          </h2>

          <p className="font-light text-muted-foreground text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            1 200 человек уже зарабатывают. Вступай в канал -- первый урок бесплатно, без обязательств
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm sm:text-base py-4 px-10 inline-flex items-center justify-center gap-2.5"
            >
              <Icon name="Send" size={17} />
              Вступить в канал бесплатно
            </a>
            <a
              href="#lead"
              className="btn-ghost text-sm sm:text-base py-4 px-10 inline-flex items-center justify-center gap-2.5"
            >
              <Icon name="Phone" size={15} />
              Заявка на звонок
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-border/50">
            {[
              { icon: "Lock", text: "Бесплатный вход" },
              { icon: "MessageCircle", text: "Куратор 24/7" },
              { icon: "Zap", text: "Результат за 3 дня" },
              { icon: "ShieldCheck", text: "Без рисков" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary/[0.06] flex items-center justify-center">
                  <Icon name={b.icon} size={13} className="text-primary/60" />
                </div>
                <span className="font-display text-muted-foreground text-xs font-medium">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Below-card social proof */}
        <div className="mt-10 flex items-center justify-center gap-2 reveal-up reveal-up-delay-2">
          <div className="flex -space-x-1.5">
            {["А", "Н", "М"].map((l, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
              >
                <span className="font-display text-[8px] font-bold text-primary/70">
                  {l}
                </span>
              </div>
            ))}
          </div>
          <span className="font-light text-muted-foreground/60 text-xs">
            +12 человек вступили за последний час
          </span>
        </div>
      </div>
    </section>
  )
}
