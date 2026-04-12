import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: "CheckCircle",
    title: "Закрываешь сделку",
    description: "Завершаешь P2P сделку на бирже",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    icon: "Coins",
    title: "USDT на балансе",
    description: "Прибыль моментально на кошельке",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    icon: "ArrowLeftRight",
    title: "Обмен на рубли",
    description: "Конвертация через проверенный обменник",
    color: "from-primary/20 to-blue-600/5",
    borderColor: "border-primary/20",
    iconColor: "text-primary",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    icon: "CreditCard",
    title: "Деньги на карте",
    description: "Вывод на карту любого банка РФ",
    color: "from-violet-500/20 to-violet-600/5",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.15)",
  },
]

export function WithdrawalSection() {
  return (
    <section className="py-24 sm:py-32 px-5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 mb-6">
              <Icon name="Banknote" size={14} className="text-primary" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Вывод средств</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-[2.6rem] font-extrabold text-white mb-4 leading-tight">
              Как выводятся{" "}
              <span className="gradient-text">деньги</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base max-w-lg mx-auto font-semibold">
              Простой и прозрачный процесс — от сделки до денег на карте за 15 минут
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] z-0">
            <div className="h-full bg-gradient-to-r from-emerald-500/30 via-primary/30 to-violet-500/30 rounded-full relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/80 via-primary/80 to-violet-400/80 rounded-full"
                style={{
                  animation: "connectorFlow 3s ease-in-out infinite",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index % 4 as 0 | 1 | 2 | 3 | 4}>
            <div className="relative flex flex-col items-center text-center md:px-3">
              {/* Vertical connector line (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute top-[104px] left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-60px)] z-0">
                  <div className="h-full bg-gradient-to-b from-white/10 to-white/5 rounded-full relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/20 rounded-full"
                      style={{
                        animation: "connectorFlowVertical 2s ease-in-out infinite",
                        animationDelay: `${index * 0.5}s`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Step number badge */}
              <div className="absolute -top-2 -right-1 md:top-0 md:right-2 w-7 h-7 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center z-20">
                <span className="text-primary text-[11px] font-extrabold">{index + 1}</span>
              </div>

              {/* Icon circle */}
              <div
                className="relative z-10 w-[104px] h-[104px] rounded-3xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, hsl(222 47% 10% / 0.95), hsl(222 50% 7% / 0.9))`,
                  border: "1px solid hsl(222 30% 16%)",
                  boxShadow: `0 0 40px ${step.glowColor}, 0 20px 60px rgba(0,0,0,0.3)`,
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} ${step.borderColor} border flex items-center justify-center`}>
                  <Icon name={step.icon} size={26} className={step.iconColor} />
                </div>
              </div>

              {/* Text */}
              <h3 className="font-heading text-base sm:text-lg font-extrabold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/35 text-xs sm:text-sm font-semibold max-w-[180px]">
                {step.description}
              </p>

              {/* Mobile spacer */}
              {index < steps.length - 1 && (
                <div className="md:hidden h-8" />
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 sm:mt-20 text-center">
          <div className="card-glass-static rounded-2xl inline-flex items-center gap-3 px-6 py-3.5">
            <Icon name="Clock" size={16} className="text-primary/70" />
            <span className="text-white/50 text-sm font-bold">
              Среднее время вывода:{" "}
              <span className="text-white font-extrabold">15 минут</span>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes connectorFlow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes connectorFlowVertical {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

export default WithdrawalSection