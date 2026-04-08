import Icon from "@/components/ui/icon"

const testimonials = [
  { name: "Алексей М.", city: "Москва", amount: "+47 000 ₽/мес", text: "Начал 3 месяца назад, сейчас стабильно зарабатываю. Куратор всегда помогает, всё понятно объясняет.", stars: 5 },
  { name: "Дарья К.", city: "Санкт-Петербург", amount: "+62 000 ₽/мес", text: "Никогда не думала, что смогу заработать на крипте. Оказалось всё просто! Работаю 3 часа в день.", stars: 5 },
  { name: "Игорь С.", city: "Екатеринбург", amount: "+38 000 ₽/мес", text: "Скептически относился вначале, но результат говорит сам за себя. Уже вывел больше 100к за квартал.", stars: 5 },
  { name: "Наталья В.", city: "Краснодар", amount: "+55 000 ₽/мес", text: "Совмещаю с основной работой. Отличное сообщество, ребята помогают разобраться в любой ситуации.", stars: 5 },
  { name: "Роман Т.", city: "Новосибирск", amount: "+44 000 ₽/мес", text: "Обучение занял 2 дня, уже на 3-й провёл первую сделку. Система реально работает!", stars: 5 },
  { name: "Анна Ф.", city: "Казань", amount: "+71 000 ₽/мес", text: "Лучшее решение для дополнительного заработка. Стабильно, прозрачно, без риска потерять деньги.", stars: 5 },
  { name: "Виктор Л.", city: "Нижний Новгород", amount: "+33 000 ₽/мес", text: "Поначалу было страшно, но поддержка команды помогла. Теперь сам помогаю новичкам в чате.", stars: 5 },
  { name: "Ксения Р.", city: "Самара", amount: "+89 000 ₽/мес", text: "Уволилась с офиса через 4 месяца после старта. Зарабатываю больше, работаю меньше — мечта!", stars: 5 },
  { name: "Денис О.", city: "Челябинск", amount: "+41 000 ₽/мес", text: "Честный канал без воды. Только практика и реальные результаты. Рекомендую всем!", stars: 5 },
  { name: "Марина Б.", city: "Уфа", amount: "+58 000 ₽/мес", text: "Три месяца — и уже стабильный доход. Муж тоже начал учиться. Семейный бизнес на крипте!", stars: 5 },
  { name: "Артём Г.", city: "Пермь", amount: "+36 000 ₽/мес", text: "Думал что это сложно — оказалось очень просто. Куратор буквально за руку провёл через всё.", stars: 5 },
  { name: "Светлана Д.", city: "Ростов-на-Дону", amount: "+67 000 ₽/мес", text: "Финансовая независимость реальна! За полгода полностью закрыла кредит и накопила на отпуск.", stars: 5 },
  { name: "Евгений П.", city: "Воронеж", amount: "+49 000 ₽/мес", text: "Зарабатываю с телефона пока еду на работу. Удобно, понятно, прибыльно. Спасибо команде!", stars: 5 },
  { name: "Юлия И.", city: "Красноярск", amount: "+53 000 ₽/мес", text: "Попробовала по совету подруги. Теперь сама советую всем знакомым. Реально работает!", stars: 5 },
  { name: "Павел Х.", city: "Омск", amount: "+42 000 ₽/мес", text: "Прошёл обучение за 1,5 дня. Первая сделка — и сразу плюс. Потрясающий результат с нуля.", stars: 5 },
  { name: "Елена С.", city: "Тюмень", amount: "+76 000 ₽/мес", text: "Живу в маленьком городе, а зарабатываю как в столице. Локация не имеет значения!", stars: 5 },
  { name: "Антон Н.", city: "Барнаул", amount: "+31 000 ₽/мес", text: "Начал с минимальной суммы, постепенно увеличиваю. Риска нет — это не трейдинг.", stars: 5 },
  { name: "Ольга К.", city: "Ижевск", amount: "+61 000 ₽/мес", text: "Декрет — отличное время учиться! Теперь зарабатываю дома больше, чем зарабатывала в офисе.", stars: 5 },
  { name: "Сергей В.", city: "Хабаровск", amount: "+45 000 ₽/мес", text: "Живу на Дальнем Востоке, никаких ограничений нет. Работает везде одинаково хорошо.", stars: 5 },
  { name: "Людмила Т.", city: "Тольятти", amount: "+39 000 ₽/мес", text: "65 лет, и я разобралась! Всё объяснили понятно. Теперь у меня есть своя прибавка к пенсии.", stars: 5 },
  { name: "Максим Р.", city: "Иркутск", amount: "+84 000 ₽/мес", text: "IT-шник по профессии — оценил простоту системы. Автоматизировал часть процессов, зарабатываю больше.", stars: 5 },
  { name: "Татьяна Ф.", city: "Ярославль", amount: "+47 000 ₽/мес", text: "Подруга звала год — я не верила. Зря! Теперь жалею что не начала раньше.", stars: 5 },
  { name: "Николай Б.", city: "Владивосток", amount: "+52 000 ₽/мес", text: "Водитель такси, работаю когда хочу. P2P стало вторым заработком, уже почти основным.", stars: 5 },
  { name: "Вера П.", city: "Астрахань", amount: "+28 000 ₽/мес", text: "Только начала, но уже вижу результат. Команда невероятно поддерживающая и отзывчивая.", stars: 5 },
  { name: "Кирилл М.", city: "Пенза", amount: "+66 000 ₽/мес", text: "6 месяцев в канале. Рост дохода каждый месяц. Уже обучаю брата по той же системе.", stars: 5 },
  { name: "Алина Г.", city: "Калуга", amount: "+43 000 ₽/мес", text: "Работаю учителем — зарплата маленькая. P2P стал спасением для нашей семьи.", stars: 5 },
  { name: "Фёдор Д.", city: "Мурманск", amount: "+37 000 ₽/мес", text: "Север, полярная ночь — а у меня всегда солнечное настроение от доходов! Отличный канал.", stars: 5 },
  { name: "Инна Л.", city: "Саратов", amount: "+59 000 ₽/мес", text: "Долго выбирала куда инвестировать знания. Это лучшее решение — риск минимальный, доход стабильный.", stars: 5 },
  { name: "Борис К.", city: "Рязань", amount: "+34 000 ₽/мес", text: "Пенсионер, но не сижу без дела. P2P дал мне и доход, и интересное занятие. Спасибо!", stars: 5 },
  { name: "Галина С.", city: "Липецк", amount: "+48 000 ₽/мес", text: "Год в канале. Стабильность, честность, реальные деньги. Лучший канал по P2P в России!", stars: 5 },
]

export function TestimonialsSection() {
  const col1 = testimonials.slice(0, 10)
  const col2 = testimonials.slice(10, 20)
  const col3 = testimonials.slice(20, 30)

  return (
    <section id="reviews" className="py-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-sm font-medium">Реальные результаты</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Что говорят <span className="gradient-text">наши участники</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Более 1 200 человек уже зарабатывают по нашей системе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((t) => (
                <div key={t.name} className="card-glow rounded-2xl p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground text-sm font-semibold">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.city}</p>
                    </div>
                    <span className="text-primary text-sm font-bold">{t.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://t.me/+Z7SebGxjJmMxNDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-base rounded-xl"
          >
            <Icon name="Send" size={18} />
            Хочу так же — вступить в канал
          </a>
        </div>
      </div>
    </section>
  )
}
