import Icon from "@/components/ui/icon"

const reviews = [
  { name: "Алексей", tag: "3 месяца в канале", text: "Пришёл скептиком — ушёл с 47к за первый месяц. Куратор Дима реально разжёвывает каждый шаг. Сейчас стабильно делаю 55-60к.", highlight: true },
  { name: "Дарья", tag: "мама в декрете", text: "Работаю пока ребёнок спит. 2 часа утром, 1 час вечером. В прошлом месяце вышло 38 000₽ — это больше чем моя зарплата была до декрета." },
  { name: "Игорь", tag: "бывший водитель", text: "Уволился с такси. Серьёзно. Сейчас за 3-4 часа в день зарабатываю столько же, сколько за 12 часов за рулём. И спина не болит)" },
  { name: "Наталья", tag: "5 месяцев в канале", text: "Закрыла кредит за 4 месяца. 120к задолженность — как не бывало. Теперь коплю на отпуск, который не могла позволить 3 года.", highlight: true },
  { name: "Роман", tag: "студент, 20 лет", text: "Одногруппники на стипендию живут, а я зарабатываю больше чем мой папа. Обучение реально простое, если слушать куратора." },
  { name: "Елена", tag: "бухгалтер", text: "Совмещаю с основной работой. Встаю на час раньше, делаю 2-3 сделки. Доп.доход 30-35к стабильно. Не верила что так бывает." },
  { name: "Максим", tag: "IT-специалист", text: "Как программист оценил систему — тут всё логично и прозрачно. Автоматизировал часть процессов, делаю 80-90к с минимальными усилиями.", highlight: true },
  { name: "Света", tag: "2 месяца в канале", text: "Первую неделю было страшно. Вторую — непонятно. Третью — пошли деньги. Сейчас делаю 40к. Куратор не бросает даже когда задаёшь глупые вопросы." },
  { name: "Фёдор", tag: "пенсионер, 63 года", text: "Дочка показала. Думал — не для меня. А оказалось всё понятно. Теперь прибавка к пенсии 25-30к. Внукам подарки покупаю нормальные." },
  { name: "Ксения", tag: "бывший менеджер", text: "Уволилась через 4 месяца. Зарабатываю 70-80к, работаю 3 часа. Начальник звонил вернуться — отказала не раздумывая.", highlight: true },
  { name: "Артём", tag: "1 месяц в канале", text: "Новичок полный. Крипту видел только в новостях. За месяц — 28к прибыли. Для первого месяца это огонь, куратор сказал что это хороший старт." },
  { name: "Марина", tag: "домохозяйка", text: "Муж говорил — очередная ерунда. Когда показала первый перевод 42к — замолчал. Теперь сам хочет учиться, записала его в следующий поток." },
  { name: "Денис", tag: "из Хабаровска", text: "Живу на Дальнем Востоке — разницы никакой. Работаю из дома, деньги на карте. Не зависишь от города и работодателя." },
  { name: "Олег", tag: "4 месяца в канале", text: "Сначала делал 20-25к. Потом увеличил капитал — вышел на 65к. Тут реально: больше вкладываешь усилий = больше получаешь. Без магии.", highlight: true },
  { name: "Юля", tag: "учительница", text: "Зарплата 28к. Первый месяц на P2P — 32к. Слёзы от радости, серьёзно. Теперь наконец могу не считать каждую копейку." },
  { name: "Кирилл", tag: "фрилансер", text: "Между проектами всегда была финансовая яма. Теперь P2P — мой стабильный фундамент. 45-50к каждый месяц как часы." },
  { name: "Вера", tag: "только начала", text: "Неделю назад вступила. Пока прошла 3 урока. Всё понятно, куратор отвечает быстро. Жду первую сделку — волнуюсь, но верю." },
  { name: "Николай", tag: "предприниматель", text: "У меня бизнес, но P2P — это отдельный поток дохода без головной боли. Без сотрудников, без аренды. Чистая прибыль 90к+.", highlight: true },
]

const colors = [
  "bg-emerald-500/20 text-emerald-400",
  "bg-blue-500/20 text-blue-400",
  "bg-purple-500/20 text-purple-400",
  "bg-amber-500/20 text-amber-400",
  "bg-pink-500/20 text-pink-400",
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
                  <p className="text-foreground text-[13px] leading-relaxed mb-5">{r.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${colors[(ci * 6 + ri) % colors.length]}`}>
                        <span className="text-xs font-bold">{r.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-foreground text-xs font-semibold">{r.name}</p>
                        <p className="text-muted-foreground text-[10px]">{r.tag}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="Star" size={10} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
            className="btn-glow text-[15px] py-3.5 px-8 inline-flex items-center gap-2.5">
            <Icon name="Send" size={15} />
            Присоединиться к ним
          </a>
        </div>
      </div>
    </section>
  )
}
