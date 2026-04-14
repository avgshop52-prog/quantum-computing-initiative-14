import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const faqs = [
  { q: "Что вообще такое P2P арбитраж?", a: "Простыми словами: покупаешь криптовалюту дешевле на одной площадке и тут же продаёшь дороже на другой. Разница в цене — твой заработок. Это не трейдинг, не казино и не ставки." },
  { q: "Сколько нужно для старта?", a: "Рекомендуем от 15 000₽ для ощутимого результата, но начать можно и с 10 000₽. Чем больше оборотный капитал — тем больше прибыль с каждой сделки." },
  { q: "Я вообще ничего не знаю про крипту", a: "Большинство наших учеников были в такой же ситуации. Обучение построено с абсолютного нуля — объясняем каждый шаг, каждую кнопку. Куратор рядом 24/7." },
  { q: "Сколько времени нужно в день?", a: "2-3 часа достаточно. Можно утром, можно вечером, можно разбить на части. Многие совмещают с основной работой или учёбой." },
  { q: "Когда я увижу первые деньги?", a: "Большинство делают первую прибыльную сделку на 3-й день обучения. Это не обещание миллионов — это реальный результат с первых шагов." },
  { q: "А если я потеряю деньги?", a: "При соблюдении правил, которым мы учим, риск потери минимален. Сделки проходят через эскроу-защиту бирж — деньги замораживаются до подтверждения обеими сторонами." },
  { q: "Это законно?", a: "Да. P2P обмен криптовалюты — легальная деятельность. Все операции проходят через верифицированные площадки (Binance, Bybit и др.)." },
  { q: "Чем вы отличаетесь от других «курсов»?", a: "У нас нет курса за 100 000₽. Вступаешь в канал бесплатно, получаешь материалы и куратора. Платишь только если хочешь продвинутые стратегии. И главное — мы показываем результат с первой недели, а не через 3 месяца теории." },
  { q: "Как связаться с поддержкой?", a: "Напиши в наш Telegram канал — куратор ответит в течение нескольких минут. Поддержка работает 24/7, без выходных и праздников." },
  { q: "Какие биржи вы используете?", a: "Работаем с крупнейшими и проверенными биржами: Binance, Bybit, OKX, KuCoin, Gate.io и другими. Все площадки верифицированы и имеют эскроу-защиту." },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-28 sm:py-36 px-5 relative">
      <div className="max-w-2xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Вопросы</p>
            <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
              Частые <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto font-medium">
              Ответы на всё, что вы хотели спросить
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="card-red-border overflow-hidden">
              <AccordionTrigger className="text-left text-sm font-extrabold text-white hover:text-primary transition-colors px-6 py-5 hover:no-underline gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" size={15} className="text-primary" />
                  </div>
                  {f.q}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-[13px] leading-relaxed px-6 pb-5 pl-[68px] font-medium">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FAQSection