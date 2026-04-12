import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import Icon from "@/components/ui/icon"
import * as THREE from "three"

function CryptoCoin({ position, color, emissive, speed, size }: { position: [number, number, number]; color: string; emissive: string; speed: number; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * speed) * 0.4
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.5
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * speed * 0.7) * 0.3
    }
  })
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={size}>
        <cylinderGeometry args={[1, 1, 0.18, 32]} />
        <meshStandardMaterial color={color} metalness={0.95} roughness={0.05} emissive={emissive} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  )
}

function CentralCoin() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.4
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.2
      ringRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.3
    }
  })
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        <mesh ref={ringRef} scale={1.8}>
          <torusGeometry args={[1, 0.02, 16, 80]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} emissive="#2563eb" emissiveIntensity={0.6} transparent opacity={0.5} />
        </mesh>
        <mesh ref={meshRef} scale={1.2}>
          <cylinderGeometry args={[1, 1, 0.22, 64]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.95} roughness={0.05} emissive="#1d4ed8" emissiveIntensity={0.35} />
        </mesh>
      </group>
    </Float>
  )
}

function StarParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 200
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16
    positions[i * 3 + 1] = (Math.random() - 0.5) * 16
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.012
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#60a5fa" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#6366f1" />
      <pointLight position={[0, -5, 2]} intensity={0.2} color="#2563eb" />
      <CryptoCoin position={[-2.8, 1, -1]} color="#f59e0b" emissive="#d97706" speed={0.5} size={0.65} />
      <CryptoCoin position={[3, -0.5, -1.5]} color="#3b82f6" emissive="#2563eb" speed={0.7} size={0.5} />
      <CryptoCoin position={[-1.5, -1.8, -0.5]} color="#8b5cf6" emissive="#7c3aed" speed={0.4} size={0.4} />
      <CryptoCoin position={[1.5, 2, -2]} color="#10b981" emissive="#059669" speed={0.6} size={0.35} />
      <CentralCoin />
      <StarParticles />
    </Canvas>
  )
}

function getBaseOnline() {
  const hour = new Date().getHours()
  const curve: Record<number, number> = {
    0: 80, 1: 60, 2: 45, 3: 38, 4: 35, 5: 42,
    6: 90, 7: 160, 8: 240, 9: 320, 10: 390, 11: 430,
    12: 460, 13: 450, 14: 420, 15: 400, 16: 410, 17: 440,
    18: 500, 19: 560, 20: 590, 21: 570, 22: 480, 23: 300,
  }
  return curve[hour] ?? 300
}

function OnlineCounter() {
  const [count, setCount] = useState(() => {
    const base = getBaseOnline()
    return base + Math.floor(Math.random() * 30) - 15
  })
  const [trend, setTrend] = useState<1 | -1>(1)

  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => {
        const base = getBaseOnline()
        const noise = Math.floor(Math.random() * 22) - 10
        const pull = Math.sign(base - c) * Math.floor(Math.abs(base - c) * 0.12)
        const next = c + pull + noise
        setTrend(next > c ? 1 : -1)
        return Math.max(30, Math.min(600, next))
      })
    }, 15000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-glass-static rounded-full pl-3 pr-5 py-2.5 inline-flex items-center gap-2.5 text-xs">
      <div className="relative">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400/50 pulse-soft scale-[2]" />
      </div>
      <span className="text-white/50 font-bold">
        {trend === 1 ? "▲" : "▼"} {count} онлайн
      </span>
    </div>
  )
}

function LiveTicker() {
  const items = [
    { name: "Алексей", action: "заработал 12 400₽" },
    { name: "Дарья", action: "получила первую прибыль" },
    { name: "Игорь", action: "присоединился" },
    { name: "Наталья", action: "заработала 18 500₽" },
    { name: "Роман", action: "завершил модуль" },
    { name: "Елена", action: "вывела 9 800₽" },
  ]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % items.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="card-glass-static rounded-full pl-3 pr-5 py-2.5 inline-flex items-center gap-3 text-xs">
      <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
        <Icon name="TrendingUp" size={12} className="text-primary" />
      </div>
      <div className="h-4 overflow-hidden">
        <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${idx * 16}px)` }}>
          {items.map((item, i) => (
            <div key={i} className="h-4 flex items-center">
              <span className="text-white font-bold">{item.name}</span>
              <span className="text-primary/70 ml-1">{item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <LiveTicker />
          <OnlineCounter />
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 bg-primary/[0.08] border border-primary/20 rounded-full px-5 py-2.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary pulse-soft" />
            <span className="text-primary text-xs font-bold tracking-wide uppercase">Набор открыт</span>
            <div className="w-px h-3 bg-primary/20" />
            <span className="text-primary/60 text-xs font-bold">Апрель 2026</span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-extrabold text-white leading-[1.05] mb-6 tracking-tight reveal-up">
            Научим зарабатывать на<br />
            <span className="gradient-text text-shadow-glow">P2P арбитраже</span> с нуля
          </h1>

          <p className="text-white/50 text-lg sm:text-xl max-w-[580px] mx-auto mb-10 leading-relaxed font-semibold reveal-up reveal-up-delay-1">
            Персональный куратор, пошаговое обучение и первая прибыль <span className="text-white font-bold">через 3 дня</span>. Без опыта в крипте.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 reveal-up reveal-up-delay-2">
            <a href="https://t.me/+Z7SebGxjJmMxNDAy" target="_blank" rel="noopener noreferrer"
              className="btn-glow text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 inline-flex items-center justify-center gap-3">
              <Icon name="Send" size={18} />
              Начать бесплатно
            </a>
            <a href="https://t.me/KuratorP2PProfit" target="_blank" rel="noopener noreferrer"
              className="btn-ghost text-base py-4 sm:py-5 px-8 inline-flex items-center justify-center gap-2">
              <Icon name="MessageCircle" size={16} />
              Написать куратору
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-8 text-white/30 text-[11px] sm:text-xs font-bold reveal-up reveal-up-delay-3">
            <div className="flex items-center gap-1.5">
              <Icon name="ShieldCheck" size={13} className="text-primary/50" />
              <span>Бесплатно</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Clock" size={13} className="text-primary/50" />
              <span>Результат за 3 дня</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="Headphones" size={13} className="text-primary/50" />
              <span>Куратор 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <div id="lead" className="relative z-10 max-w-md mx-auto w-full mt-14">
        <div className="card-premium rounded-3xl p-8 sm:p-10 border-primary/15 glow-blue">
          {!submitted ? (
            <>
              <div className="text-center mb-7">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-2">Бесплатная консультация</h3>
                <p className="text-white/40 text-sm font-semibold">Куратор перезвонит и ответит на все вопросы</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Твоё имя" value={name} onChange={(e) => setName(e.target.value)} required minLength={2}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 transition-colors font-semibold" />
                <input type="text" placeholder="Телефон или Telegram" value={phone} onChange={(e) => setPhone(e.target.value)} required
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 transition-colors font-semibold" />
                {error && <p className="text-red-400 text-xs font-bold">{error}</p>}
                <button type="submit" disabled={loading} className="w-full btn-glow text-base py-4 font-extrabold disabled:opacity-50">{loading ? "Отправляю..." : "Получить консультацию"}</button>
              </form>
              <p className="text-center text-white/20 text-[11px] mt-4 font-semibold">Без обязательств. Никакого спама</p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-white/40 text-sm font-semibold">Куратор свяжется с тобой в ближайшее время</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero3DWebGL