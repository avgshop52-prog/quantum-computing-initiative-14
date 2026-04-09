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
          color="#3b82f6"
          emissive="#2563eb"
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
  const count = 300
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
      <pointsMaterial size={0.02} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#6366f1" />
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
        <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Мест мало</span>
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
                <span className="text-foreground font-bold">{n}</span>{" "}
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
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="text-center mb-6">
          <LiveTicker />
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 bg-primary/[0.08] border border-primary/20 rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary pulse-soft" />
            <span className="text-primary text-xs font-bold tracking-wide uppercase">Набор в новую группу открыт</span>
            <div className="w-px h-3 bg-primary/20" />
            <span className="text-primary/60 text-xs font-semibold">Апрель 2026</span>
          </div>

          <h1 className="font-heading text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold text-white leading-[1.02] mb-6 tracking-tight reveal-up">
            Курс по <span className="gradient-text text-shadow-glow">P2P арбитражу</span>:<br />
            <span className="font-serif font-normal text-[0.75em] text-white/60">заработок на крипте с нуля</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-[580px] mx-auto mb-10 leading-relaxed font-medium reveal-up reveal-up-delay-1">
            Обучение P2P арбитражу криптовалюты с персональным куратором.<br className="hidden sm:block" />
            Первые результаты — <span className="text-white font-bold">через 3 дня</span>. Без опыта в крипте.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 reveal-up reveal-up-delay-2">
            <a
              href="https://t.me/+Z7SebGxjJmMxNDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 inline-flex items-center justify-center gap-3"
            >
              <Icon name="Send" size={18} />
              <span>Начать бесплатно</span>
            </a>
            <a href="#lead" className="btn-ghost text-base py-4 sm:py-5 px-8 inline-flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} />
              <span>Заявка на звонок</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 reveal-up reveal-up-delay-3">
            <SpotsCounter />
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 reveal-up reveal-up-delay-3">
          <p className="text-center text-muted-foreground/40 text-[11px] font-semibold uppercase tracking-widest mb-5">
            Работаем с ведущими биржами
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap opacity-30">
            {logos.map((l) => (
              <span key={l} className="text-foreground/80 text-sm sm:text-base font-bold tracking-wide">{l}</span>
            ))}
          </div>
        </div>
      </div>

      <div id="lead" className="relative z-10 max-w-md mx-auto w-full mt-20">
        <div className="card-premium rounded-3xl p-8 sm:p-10 border-primary/15 glow-blue">
          {!submitted ? (
            <>
              <div className="text-center mb-7">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-2">Оставь заявку</h3>
                <p className="text-white/50 text-sm font-medium">Куратор перезвонит и расскажет подробности</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Твоё имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/40 transition-colors font-medium"
                />
                <input
                  type="text"
                  placeholder="Телефон или Telegram"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/40 transition-colors font-medium"
                />
                {error && <p className="text-red-400 text-xs font-semibold">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-glow text-base py-4 font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Отправляю..." : "Отправить заявку"}
                </button>
              </form>
              <p className="text-center text-white/25 text-[11px] mt-4 font-medium">Бесплатная консультация. Без обязательств</p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-white/50 text-sm font-medium">Куратор свяжется с тобой в ближайшее время</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero3DWebGL
