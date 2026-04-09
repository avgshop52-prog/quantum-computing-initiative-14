import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import Icon from "@/components/ui/icon"
import * as THREE from "three"

function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y = clock.elapsedTime * 0.15
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#22c55e"
          emissive="#16a34a"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function StarParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 250
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14
  }
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.05
    }
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#4ade80" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#22c55e" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#3b82f6" />
      <GlowSphere />
      <StarParticles />
    </Canvas>
  )
}

function SpotsCounter() {
  const [spots, setSpots] = useState(7)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const savedTime = localStorage.getItem("p2p_spots_time")
    const savedSpots = localStorage.getItem("p2p_spots")
    if (savedTime && savedSpots) {
      const elapsed = (Date.now() - parseInt(savedTime)) / 1000 / 60
      const lost = Math.floor(elapsed / 45)
      const current = Math.max(2, parseInt(savedSpots) - lost)
      setSpots(current)
    } else {
      localStorage.setItem("p2p_spots_time", Date.now().toString())
      localStorage.setItem("p2p_spots", "7")
    }
    setTimeout(() => setAnimated(true), 500)
  }, [])

  return (
    <div className="card-glass rounded-2xl px-5 py-4 border-red-500/20 inline-flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 ticker-urgent" />
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500/40 ticker-urgent scale-150" />
        </div>
        <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">Мест мало</span>
      </div>
      <div className="w-px h-6 bg-border" />
      <div className="flex items-center gap-2">
        <span className={`font-display text-2xl font-bold text-foreground ${animated ? "animate-counter" : "opacity-0"}`}>{spots}</span>
        <span className="text-muted-foreground text-xs leading-tight">мест осталось<br />из 30 в потоке</span>
      </div>
    </div>
  )
}

function LiveTicker() {
  const names = ["Алексей", "Дарья", "Игорь", "Наталья", "Роман", "Елена"]
  const actions = ["заработал 47 000₽", "получила первую прибыль", "присоединился к обучению", "заработала 65 000₽", "завершил первый модуль", "вывела 42 000₽"]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % names.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-glass-static rounded-full pl-3 pr-5 py-2.5 inline-flex items-center gap-3 text-xs">
      <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
        <Icon name="User" size={12} className="text-primary" />
      </div>
      <div className="h-4 overflow-hidden">
        <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${idx * 16}px)` }}>
          {names.map((n, i) => (
            <div key={i} className="h-4 flex items-center">
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{n}</span>{" "}
                <span className="text-primary/80">{actions[i]}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const logos = ["Binance", "Bybit", "OKX", "Garantex", "HUOBI", "KuCoin", "Gate.io", "BingX"]

export function Hero3DWebGL() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setError("")
    setLoading(true)
    try {
      const res = await fetch("https://functions.poehali.dev/1e3b2a64-3ec9-4963-aa20-f90aaff560b4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (!res.ok) throw new Error("Ошибка сервера")
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Не удалось отправить. Попробуй ещё раз")
    }
    setLoading(false)
  }

  return (
    <section className="hero-bg min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-16 relative overflow-hidden noise-bg">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Scene3D />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="text-center mb-6">
          <LiveTicker />
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 bg-primary/[0.07] border border-primary/15 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary pulse-soft" />
            <span className="text-primary/90 text-xs font-semibold tracking-wide">Набор в новую группу открыт</span>
            <div className="w-px h-3 bg-primary/20" />
            <span className="text-primary/60 text-xs">Апрель 2026</span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-extrabold text-foreground leading-[1.05] mb-6 tracking-tight reveal-up">
            Курс по <span className="gradient-text text-shadow-glow">P2P арбитражу</span>:<br />
            <span className="font-serif font-normal text-[0.8em] text-muted-foreground/80">заработок на крипте с нуля</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-[560px] mx-auto mb-8 leading-relaxed font-light reveal-up reveal-up-delay-1">
            Обучение P2P арбитражу криптовалюты с персональным куратором.<br className="hidden sm:block" />
            Первые результаты — <span className="text-foreground font-medium">через 3 дня</span>. Без опыта в крипте.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 reveal-up reveal-up-delay-2">
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-[15px] py-4 px-9 inline-flex items-center justify-center gap-2.5"
            >
              <Icon name="Send" size={17} />
              Начать обучение бесплатно
            </a>
            <a href="#how" className="btn-ghost text-[15px] py-4 px-8 inline-flex items-center justify-center gap-2">
              Как это работает
              <Icon name="ChevronDown" size={15} />
            </a>
          </div>

          <div className="mb-10 reveal-up reveal-up-delay-3">
            <SpotsCounter />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-12 max-w-[720px] mx-auto">
          {[
            { val: "3 дня", sub: "до первого заработка", icon: "Zap" },
            { val: "1 200+", sub: "учеников прошли курс", icon: "Users" },
            { val: "от 50К", sub: "рублей в месяц", icon: "TrendingUp" },
          ].map((s) => (
            <div key={s.sub} className="card-premium rounded-2xl p-4 sm:p-6 text-center group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                <Icon name={s.icon} size={18} className="text-primary" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">{s.val}</div>
              <div className="text-muted-foreground text-[11px] sm:text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          {[
            { icon: "ShieldCheck", text: "Официально и легально" },
            { icon: "Lock", text: "Без рисков для новичков" },
            { icon: "CreditCard", text: "Без скрытых платежей" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <Icon name={b.icon} size={14} className="text-primary/60" />
              <span className="text-muted-foreground text-[13px]">{b.text}</span>
            </div>
          ))}
        </div>

        <div className="overflow-hidden mb-14 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(230_25%_3%)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(230_25%_3%)] to-transparent z-10" />
          <div className="flex gap-10 marquee whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((l, i) => (
              <span key={i} className="text-muted-foreground/20 text-sm font-display font-medium tracking-[0.2em] uppercase">{l}</span>
            ))}
          </div>
        </div>

        <div id="lead" className="max-w-[420px] mx-auto">
          <div className="card-premium rounded-3xl p-7 border-primary/15 glow-green">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Gift" size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">Бесплатный пробный урок</h3>
              <p className="text-muted-foreground text-sm mt-1.5">Покажем на практике как заработать первые деньги</p>
            </div>
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <p className="text-foreground font-bold text-lg">Заявка принята!</p>
                <p className="text-muted-foreground text-sm mt-1.5">Свяжемся с тобой в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} required minLength={2}
                  className="w-full bg-input/60 border border-border/80 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-input/80 transition-all" />
                <input type="tel" placeholder="Телефон или @telegram" value={phone} onChange={(e) => setPhone(e.target.value)} required
                  className="w-full bg-input/60 border border-border/80 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-input/80 transition-all" />
                {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                <button type="submit" disabled={loading}
                  className="btn-glow w-full py-3.5 text-[15px] flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? <Icon name="Loader2" size={17} className="animate-spin" /> : <Icon name="ArrowRight" size={17} />}
                  {loading ? "Отправляю..." : "Получить бесплатный урок"}
                </button>
                <p className="text-muted-foreground/40 text-[10px] text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}