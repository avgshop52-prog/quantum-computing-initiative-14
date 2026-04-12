import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const reviews = [
  { name: "Алексей К.", tag: "3 месяца в обучении", text: "Честно — первую неделю думал, что ничего не получится. Куратор Дима терпеливо объяснял одно и то же по три раза. На 4-й день закрыл первую сделку. Сейчас стабильно выхожу на 35–40 тыс., совмещаю с основной работой.", highlight: true, earned: "38 000 ₽/мес" },
  { name: "Дарья М.", tag: "мама в декрете", text: "Занимаюсь пока дочка спит днём — 2 часа утром и час вечером. Прошлый месяц вышло 22 000. Это примерно как половина моей зарплаты менеджером до декрета.", earned: "22 000 ₽/мес" },
  { name: "Игорь В.", tag: "бывший водитель такси", text: "12 часов за рулём — 2500 в день. Тут за 3 часа столько же выходит. Спина не болит, нервы целы. Жена не верила, пока не показал переводы.", highlight: true, earned: "42 000 ₽/мес" },
  { name: "Наташа Р.", tag: "5 месяцев", text: "Закрыла мелкий кредит за 3 месяца. Раньше платила по 8 тыс. в месяц и чувствовала себя в ловушке. Сейчас откладываю на отпуск — первый нормальный за 3 года.", earned: "31 000 ₽/мес" },
  { name: "Роман С.", tag: "студент, 20 лет", text: "Однокурсники работают кассирами за 20 тыс. Я работаю из общаги 2 часа в день. Да, пришлось вникать — не всё сразу понял. Но куратор Аня ответила на 100500 моих вопросов.", earned: "25 000 ₽/мес" },
  { name: "Елена П.", tag: "бухгалтер", text: "Встаю на час раньше, делаю 2-3 сделки до работы. Вечером ещё пару. Получается 20-25 доп. к зарплате. Муж подключился — теперь вместе разбираем связки за ужином.", earned: "24 000 ₽/мес" },
  { name: "Макс Д.", tag: "IT-специалист", text: "Как программист сначала разобрал всю систему на логику. Тут реально работает математика. Автоматизировал часть рутины — теперь трачу минимум времени. ROI стабильный.", highlight: true, earned: "65 000 ₽/мес" },
  { name: "Света Л.", tag: "2 месяца", text: "Первую неделю просто читала чат и боялась. Вторую — сделала первую сделку с куратором по видеозвонку. Третью — уже сама. Сейчас 18 тыс., и каждый месяц растёт.", earned: "18 000 ₽/мес" },
  { name: "Фёдор И.", tag: "пенсионер, 63 года", text: "Дочка показала. Два дня объясняла, как телефон работает. Но разобрался. Куратор очень терпеливый. Теперь 15–18 тыс. прибавка к пенсии. Внукам на день рождения нормальные подарки купил.", earned: "16 000 ₽/мес" },
  { name: "Ксюша Т.", tag: "бывший менеджер", text: "Работала в офисе за 45 тыс., ненавидела каждое утро. Через 4 месяца обучения вышла на 50 тыс. с P2P. Пока оставила основную работу — хочу стабилизировать доход.", highlight: true, earned: "52 000 ₽/мес" },
  { name: "Артём Б.", tag: "1 месяц", text: "Пришёл полным нулём. Крипту видел только в новостях. За месяц — 14 тыс. чистыми. Куратор сказал — для первого месяца нормальный результат, дальше будет больше.", earned: "14 000 ₽/мес" },
  { name: "Марина О.", tag: "домохозяйка", text: "Муж сказал: «очередная ерунда из интернета». Когда показала перевод 28 тыс. на карту — замолчал. Теперь сам записался в следующий поток. Вместе веселее.", earned: "28 000 ₽/мес" },
]

const colors = [
  "bg-blue-500/20 text-blue-400",
  "bg-indigo-500/20 text-indigo-400",
  "bg-violet-500/20 text-violet-400",
  "bg-amber-500/20 text-amber-400",
  "bg-rose-500/20 text-rose-400",
  "bg-cyan-500/20 text-cyan-400",
]

export function TestimonialsSection() {
  const col1 = reviews.filter((_, i) => i % 3 === 0)
  const col2 = reviews.filter((_, i) => i % 3 === 1)
  const col3 = reviews.filter((_, i) => i % 3 === 2)

  return (
    <section id="reviews" className="py-28 sm:py-36 px-5 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-xs font-extrabold tracking-widest uppercase mb-4">Отзывы учеников</p>
            <h2 className="font-heading text-4xl sm:text-[3.2rem] font-extrabold text-white leading-tight mb-5">
              Реальные истории{" "}
              <span className="font-serif font-normal text-white/50">реальных людей</span>
            </h2>
            <p className="text-white/50 text-base max-w-md mx-auto font-medium">
              Без постановок и копипаста. Каждый отзыв — живой человек из нашего канала
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-5">
              {col.map((r, ri) => (
                <ScrollReveal key={r.name} delay={(ci * col.length + ri) % 4 as 0 | 1 | 2 | 3 | 4}>
                  <div className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shine-effect border-glow ${r.highlight ? "card-premium border-primary/20" : "card-glass"}`}>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center ${colors[(ci * 6 + ri) % colors.length]}`}>
                          <span className="text-sm font-extrabold">{r.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-extrabold">{r.name}</p>
                          <p className="text-white/40 text-[11px] font-semibold">{r.tag}</p>
                        </div>
                      </div>
                      {r.earned && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5">
                          <span className="text-primary text-[11px] font-extrabold">{r.earned}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="Star" size={13} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-white/80 text-[13px] leading-relaxed mb-4 font-medium">{r.text}</p>
                    <div className="flex items-center justify-end">
                      <span className="text-white/20 text-[10px] font-bold">Telegram</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-base py-4 px-10 inline-flex items-center gap-2.5 font-extrabold">
            <Icon name="Send" size={16} />
            Присоединиться к ним
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection