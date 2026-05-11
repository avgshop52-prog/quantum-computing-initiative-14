import Icon from "@/components/ui/icon"

const exchanges = [
  { name: "Binance", icon: "ArrowLeftRight" },
  { name: "Bybit", icon: "BarChart3" },
  { name: "OKX", icon: "Landmark" },
  { name: "KuCoin", icon: "Coins" },
  { name: "Gate.io", icon: "Shield" },
  { name: "BingX", icon: "TrendingUp" },
  { name: "MEXC", icon: "Activity" },
  { name: "Huobi", icon: "Flame" },
]

export function ExchangeMarquee() {
  const items = [...exchanges, ...exchanges]

  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.04] carbon-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">
        Работаем с биржами
      </div>
      <div className="flex items-center gap-12 marquee whitespace-nowrap mt-3">
        {items.map((e, i) => (
          <div
            key={`${e.name}-${i}`}
            className="flex items-center gap-3 flex-shrink-0 group cursor-default transition-all duration-300 hover:scale-110"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)] transition-all duration-300">
              <Icon name={e.icon} size={16} className="text-primary group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-white/40 text-sm font-bold tracking-wide group-hover:text-white transition-colors">
              {e.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExchangeMarquee
