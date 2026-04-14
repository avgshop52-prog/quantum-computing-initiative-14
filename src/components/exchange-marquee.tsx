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
    <section className="relative py-8 overflow-hidden border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <div className="flex items-center gap-12 marquee whitespace-nowrap">
        {items.map((e, i) => (
          <div key={`${e.name}-${i}`} className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Icon name={e.icon} size={14} className="text-primary" />
            </div>
            <span className="text-white/40 text-sm font-bold tracking-wide">{e.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExchangeMarquee
