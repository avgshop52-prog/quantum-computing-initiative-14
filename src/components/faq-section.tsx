import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Что такое P2P арбитраж?",
    a: "P2P арбитраж — это покупка криптовалюты на одной платформе по низкой цене и продажа на другой по более высокой. Разница в курсах — ваш доход. Это не трейдинг и не ставки.",
  },
  {
    q: "Сколько нужно денег для старта?",
    a: "Начать можно с любой суммы. Чем больше капитал — тем больше доход. Минимально рекомендуем от 15 000–30 000 рублей для ощутимого результата.",
  },
  {
    q: "Это законно?",
    a: "Да, полностью законно. P2P торговля — это обмен валюты через официальные биржи. Никаких серых схем, всё прозрачно.",
  },
  {
    q: "Нужно ли разбираться в криптовалюте?",
    a: "Нет. Мы обучаем с нуля. Всё что нужно — это телефон или компьютер и желание учиться. Первые сделки делаем вместе с куратором.",
  },
  {
    q: "Сколько времени занимает работа?",
    a: "2-4 часа в день достаточно для стабильного заработка. Можно работать утром или вечером, совмещая с основной занятостью.",
  },
  {
    q: "Каков средний доход?",
    a: "Наши участники зарабатывают от 30 000 до 150 000 рублей в месяц. Зависит от стартового капитала и количества часов работы.",
  },
  {
    q: "Есть ли риск потерять деньги?",
    a: "Риски минимальны при соблюдении правил. Мы не торгуем — мы обменяем. Сделки проходят через официальные биржи с эскроу-защитой.",
  },
  {
    q: "Что входит в обучение?",
    a: "Пошаговые уроки, разборы реальных сделок, поддержка куратора, доступ к закрытому чату, список проверенных платформ и стратегий.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-sm font-medium">Частые вопросы</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Остались <span className="gradient-text">вопросы?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Отвечаем на самые частые вопросы о P2P арбитраже
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-glow rounded-2xl border-0 overflow-hidden px-0"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors px-6 py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
