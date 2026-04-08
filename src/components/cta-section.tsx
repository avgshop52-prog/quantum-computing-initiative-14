import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 px-5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="card-glass rounded-3xl p-8 sm:p-12 border-primary/15">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Icon name="Rocket" size={24} className="text-primary" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Через неделю ты будешь жалеть,<br />что не начал сегодня
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-md mx-auto">
            1 200 человек уже зарабатывают. Вступай в канал — первый урок бесплатно, без обязательств
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-sm py-3.5 px-8 inline-flex items-center justify-center gap-2">
              <Icon name="Send" size={16} />
              Вступить в канал бесплатно
            </a>
            <a href="#lead" className="btn-ghost text-sm py-3.5 px-8 inline-flex items-center justify-center gap-2">
              <Icon name="Phone" size={14} />
              Оставить заявку на звонок
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 mt-8 pt-6 border-t border-border">
            {[
              { icon: "Lock", text: "Бесплатный вход" },
              { icon: "MessageCircle", text: "Куратор 24/7" },
              { icon: "Zap", text: "Результат за 3 дня" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5">
                <Icon name={b.icon} size={12} className="text-primary/60" />
                <span className="text-muted-foreground text-[11px]">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
