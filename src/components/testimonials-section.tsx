import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const reviews = [
  { name: "Алексей К.", tag: "в канале 3 месяца", text: "честно говоря первую неделю вообще не понимал что делаю 😅 куратор раз 5 объяснял одно и то же, не злился. на 4й день закрыл первую сделку — 1200р. мелочь но так приятно было. сейчас в среднем 47-52 выходит, работу не бросил пока", highlight: true, earned: "49 000 ₽/мес" },
  { name: "Дарья М.", tag: "мама в декрете", text: "занимаюсь когда Соня спит, получается часа 2 в день максимум. в прошлом месяце вышло 31 с копейками. до декрета получала 38 менеджером, так что почти как зарплата — неплохо для телефона на диване)", earned: "31 000 ₽/мес" },
  { name: "Игорь В.", tag: "бывший таксист", text: "12 часов за рулём это примерно 2-2.5к в день. здесь за утро то же самое и спина целая. жена сначала скандалила что в телефоне сижу, потом показал выписку — всё, вопросов нет 😄", highlight: true, earned: "54 000 ₽/мес" },
  { name: "Наташа Р.", tag: "5 месяцев в теме", text: "брала кредит 180 тысяч, платила по 8к в месяц и это было как камень на шее. через 3 месяца закрыла досрочно. сейчас откладываю на море — первый отпуск за 4 года нормальный будет", earned: "43 000 ₽/мес" },
  { name: "Рома С.", tag: "студент, 3й курс", text: "мои одногруппники идут в кассиры за 20к. я из общаги, часа полтора в день. сначала не всё понял, куратор Аня реально помогла — отвечала даже в час ночи когда я тупил", earned: "34 000 ₽/мес" },
  { name: "Елена П.", tag: "бухгалтер, Воронеж", text: "встаю в 7 вместо 8, делаю 2-3 сделки пока кофе пью. вечером ещё немного. муж увидел цифры — теперь тоже хочет. говорю подожди, сама только разобралась 😂 в месяц +32-35 к зарплате", earned: "33 000 ₽/мес" },
  { name: "Макс Д.", tag: "разработчик", text: "как айтишник сразу полез разбираться в логику — как вообще это работает. убедился что не лохотрон, математика честная. часть процессов подавтоматизировал, сейчас трачу минут 40 в день", highlight: true, earned: "87 000 ₽/мес" },
  { name: "Светлана Л.", tag: "2 месяца", text: "первую неделю читала чат и не решалась. потом куратор предложил первую сделку вместе разобрать по видео. так и пошло. в январе было 18, в феврале 27, в марте уже 34. медленно но растёт", earned: "34 000 ₽/мес" },
  { name: "Фёдор И.", tag: "на пенсии, 64 года", text: "дочь показала, два дня учила меня телефоном пользоваться нормально 😄 куратор очень терпеливый, никогда не торопил. сейчас 22-25 тысяч плюсом к пенсии. внукам на дни рождения теперь нормальные подарки", earned: "23 000 ₽/мес" },
  { name: "Ксения Т.", tag: "бывший офис-менеджер", text: "работала за 43к, ненавидела дорогу на работу и начальника. через 4 месяца вышла на 70+ с p2p. пока совмещаю — страшновато бросать. но мысли уже есть)", highlight: true, earned: "71 000 ₽/мес" },
  { name: "Артём Б.", tag: "1й месяц", text: "пришёл вообще нулём, крипту видел только в новостях и не понимал зачем она. за первый месяц 19 400 чистыми. куратор говорит для начала хорошо. верю, буду дальше", earned: "19 400 ₽/мес" },
  { name: "Марина О.", tag: "домохозяйка, Казань", text: "муж сказал «очередная ерунда с ютуба». когда показала перевод 38к на карту просто замолчал и ушёл на кухню 😂 через неделю сам попросил показать как. теперь вместе сидим вечерами", earned: "38 000 ₽/мес" },
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