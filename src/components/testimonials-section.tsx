import Icon from "@/components/ui/icon"

const reviews = [
  { name: "Алексей К.", tag: "3 месяца в обучении", text: "Честно — первую неделю думал, что ничего не получится. Куратор Дима терпеливо объяснял одно и то же по три раза. На 4-й день закрыл первую сделку. Сейчас стабильно 55-60 тыс. в месяц, совмещаю с основной работой.", highlight: true, earned: "57 000₽/мес" },
  { name: "Дарья М.", tag: "мама в декрете", text: "Занимаюсь пока дочка спит днём — 2 часа утром и час вечером. Прошлый месяц вышло 38 000. Это реально больше, чем была моя зарплата менеджером до декрета. Наконец не прошу у мужа на свои расходы.", earned: "38 000₽/мес" },
  { name: "Игорь В.", tag: "бывший водитель такси", text: "12 часов за рулём — 2500 в день. Тут за 3 часа столько же. Спина не болит, нервы целы. Жена не верила, пока не показал переводы. Ушёл из такси на 2-й месяц.", highlight: true, earned: "64 000₽/мес" },
  { name: "Наташа Р.", tag: "5 месяцев", text: "Закрыла кредит 120 000₽ за 4 месяца. Раньше платила по 15 тыс. в месяц и чувствовала себя в ловушке. Сейчас откладываю на отпуск — первый нормальный за 3 года.", earned: "42 000₽/мес" },
  { name: "Роман С.", tag: "студент, 20 лет", text: "Однокурсники работают кассирами за 20 тыс. Я работаю из общаги 2 часа в день. Да, пришлось вникать — не всё сразу понял. Но куратор Аня ответила на 100500 моих вопросов.", earned: "35 000₽/мес" },
  { name: "Елена П.", tag: "бухгалтер", text: "Встаю на час раньше, делаю 2-3 сделки до работы. Вечером ещё пару. Получается 30-35 доп. к зарплате. Муж подключился — теперь вместе разбираем связки за ужином.", earned: "33 000₽/мес" },
  { name: "Макс Д.", tag: "IT-специалист", text: "Как программист сначала разобрал всю систему на логику. Тут реально работает математика. Автоматизировал часть рутины — теперь трачу минимум времени. ROI стабильный.", highlight: true, earned: "85 000₽/мес" },
  { name: "Света Л.", tag: "2 месяца", text: "Первую неделю просто читала чат и боялась. Вторую — сделала первую сделку с куратором по видеозвонку. Третью — уже сама. Сейчас 40 тыс., и каждый месяц растёт.", earned: "40 000₽/мес" },
  { name: "Фёдор И.", tag: "пенсионер, 63 года", text: "Дочка показала. Два дня объясняла, как телефон работает. Но разобрался. Куратор очень терпеливый. Теперь 25-30 тыс. прибавка к пенсии. Внукам на день рождения нормальные подарки купил.", earned: "27 000₽/мес" },
  { name: "Ксюша Т.", tag: "бывший менеджер", text: "Работала в офисе за 45 тыс., ненавидела каждое утро. Через 3 месяца обучения вышла на 70+. Написала заявление. Начальник звонил — вернись, повысим. Отказала без раздумий.", highlight: true, earned: "73 000₽/мес" },
  { name: "Артём Б.", tag: "1 месяц", text: "Пришёл полным нулём. Крипту видел только в новостях. За месяц — 28 тыс. чистыми. Куратор сказал — для первого месяца отличный результат, дальше будет больше.", earned: "28 000₽/мес" },
  { name: "Марина О.", tag: "домохозяйка", text: "Муж сказал: «очередная ерунда из интернета». Когда показала перевод 42 тыс. на карту — замолчал. Теперь сам записался в следующий поток. Вместе веселее.", earned: "42 000₽/мес" },
]

const colors = [
  "bg-emerald-500/20 text-emerald-400",
  "bg-blue-500/20 text-blue-400",
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
    <section id="reviews" className="py-24 sm:py-32 px-5 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Отзывы учеников</p>
          <h2 className="font-heading text-3xl sm:text-[2.8rem] font-extrabold text-foreground leading-tight mb-4">
            Реальные истории{" "}
            <span className="font-serif font-normal text-muted-foreground/80">реальных людей</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Без постановок и копипаста. Каждый отзыв — живой человек из нашего канала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((r, ri) => (
                <div key={r.name} className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${r.highlight ? "card-premium border-primary/15" : "card-glass"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors[(ci * 6 + ri) % colors.length]}`}>
                        <span className="text-sm font-bold">{r.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold">{r.name}</p>
                        <p className="text-muted-foreground text-[11px]">{r.tag}</p>
                      </div>
                    </div>
                    {r.earned && (
                      <div className="bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1">
                        <span className="text-primary text-[11px] font-bold">{r.earned}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-foreground/90 text-[13px] leading-relaxed mb-4">{r.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="Star" size={11} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-muted-foreground/40 text-[10px]">Telegram</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-[15px] py-4 px-9 inline-flex items-center gap-2.5">
            <Icon name="Send" size={15} />
            Присоединиться к ним
          </a>
        </div>
      </div>
    </section>
  )
}
