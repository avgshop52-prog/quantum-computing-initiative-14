import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs font-display">P2P</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                P2P <span className="gradient-text">Арбитраж</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Помогаем людям зарабатывать на P2P арбитраже. Обучение, поддержка и сообщество единомышленников.
            </p>
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <Icon name="Send" size={16} />
              Наш Telegram канал
            </a>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "О нас", href: "#about" },
                { label: "Как заработать", href: "#how" },
                { label: "Преимущества", href: "#features" },
                { label: "Безопасность", href: "#safety" },
                { label: "Отзывы", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Связаться с нами</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/+Z7SebGxjJmMxNDAy"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow rounded-xl p-4 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Send" size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">Telegram канал</p>
                  <p className="text-muted-foreground text-xs">Подписаться и начать</p>
                </div>
              </a>
              <a href="#lead" className="card-glow rounded-xl p-4 flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="MessageCircle" size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">Оставить заявку</p>
                  <p className="text-muted-foreground text-xs">Перезвоним в течение часа</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs">© 2026 P2P Арбитраж. Все права защищены.</p>
          <p className="text-muted-foreground text-xs">
            Доходы зависят от индивидуальных результатов и объёма работы
          </p>
        </div>
      </div>
    </footer>
  )
}
