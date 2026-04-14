import { useState } from "react"
import Icon from "@/components/ui/icon"
import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="py-24 sm:py-32 px-5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.07] blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section heading */}
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-primary/5 mb-6">
                <Icon name="Play" size={14} className="text-primary" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Видео-обзор</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-[2.6rem] font-extrabold text-white mb-4 leading-tight">
                Посмотри, как это{" "}
                <span className="gradient-text">работает</span>
              </h2>
              <p className="text-white/40 text-sm sm:text-base max-w-lg mx-auto font-semibold">
                Короткий обзор платформы, стратегии и первых результатов учеников
              </p>
            </div>
          </ScrollReveal>

          {/* Video card */}
          <ScrollReveal delay={1}>
          <div
            className="card-red-border overflow-hidden cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Aspect ratio container */}
            <div className="relative aspect-video">
              {/* Gradient background simulating video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,12%)] via-[hsl(220,50%,8%)] to-[hsl(225,47%,6%)]">
                {/* Decorative grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                {/* Radial glow in center */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 pulse-soft" />
                  {/* Button */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_100px_rgba(59,130,246,0.6)]">
                    <Icon name="Play" size={32} className="text-white ml-1.5" />
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 bg-gradient-to-t from-black/60 to-transparent z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white/60 text-xs sm:text-sm font-bold">03:42</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Eye" size={14} className="text-white/40" />
                    <span className="text-white/40 text-xs font-semibold">2.4K просмотров</span>
                  </div>
                </div>
                {/* Fake progress bar */}
                <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-5"
          onClick={() => setIsOpen(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-2xl animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            >
              <Icon name="X" size={18} />
            </button>

            <div className="card-red-border overflow-hidden">
              <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-[hsl(222,47%,12%)] via-[hsl(225,50%,7%)] to-[hsl(230,47%,5%)]">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)]" />

                <div className="text-center relative z-10 px-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon name="Film" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-3">
                    Скоро видео обзор
                  </h3>
                  <p className="text-white/40 text-sm max-w-sm mx-auto font-semibold">
                    Мы готовим подробный видеоразбор стратегии P2P арбитража. Подпишись, чтобы не пропустить.
                  </p>
                  <a
                    href="https://t.me/+Z7SebGxjJmMxNDAy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 text-sm font-extrabold mt-7"
                  >
                    <Icon name="Bell" size={16} />
                    Узнать о выходе
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

export default VideoSection