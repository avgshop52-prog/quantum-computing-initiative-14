import { useState, useRef, useEffect } from "react"
import Icon from "@/components/ui/icon"

interface Message {
  role: "user" | "assistant"
  content: string
}

const QUICK_QUESTIONS = [
  "Что такое P2P арбитраж?",
  "Сколько можно заработать?",
  "Как начать обучение?",
  "Это легально?",
  "Какие гарантии?",
  "Сколько нужно для старта?",
]

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [greeted, setGreeted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && !greeted) {
      setMessages([{
        role: "assistant",
        content: "Привет! Я AI-помощник P2P Profit. Задавай любые вопросы о P2P арбитраже, обучении, заработке и нашей команде. Я на связи 24/7!"
      }])
      setGreeted(true)
    }
  }, [open, greeted])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    const userMsg: Message = { role: "user", content: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("https://functions.poehali.dev/7b37673b-7df6-4cc3-b86b-605de40a16c6", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          history: messages.slice(-6)
        }),
      })
      const data = await res.json()
      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "Извини, произошла ошибка. Попробуй ещё раз или напиши нам в Telegram." }])
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Не удалось подключиться. Проверь интернет или напиши нам в Telegram." }])
    }
    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-white/10 backdrop-blur-xl border border-white/10 rotate-0 shadow-xl"
            : "bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400/30 hover:scale-110 shadow-2xl shadow-blue-500/30"
        }`}
        style={!open ? { animation: "chatBtnPulse 2.5s ease-in-out infinite" } : {}}
      >
        <Icon name={open ? "X" : "MessageCircle"} size={24} className="text-white" />
        {!open && !greeted && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[10px] text-white font-extrabold">1</span>
          </div>
        )}
      </button>

      {open && (
        <div className="fixed bottom-[100px] right-6 z-50 w-[380px] max-w-[calc(100vw-48px)]" style={{ animation: "chatSlideIn 0.25s ease-out forwards" }}>
          <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 bg-[hsl(222_47%_6%)] flex flex-col" style={{ height: "520px" }}>
            <div className="p-5 border-b border-white/[0.06] bg-gradient-to-r from-primary/15 via-primary/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Icon name="Bot" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-extrabold">AI Помощник</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 pulse-soft" />
                    <span className="text-green-400/80 text-[11px] font-semibold">Онлайн 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed font-medium ${
                    msg.role === "user"
                      ? "bg-primary/20 text-white rounded-br-md border border-primary/10"
                      : "bg-white/[0.05] text-white/90 border border-white/[0.06] rounded-bl-md"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              {messages.length <= 1 && !loading && (
                <div className="space-y-2 pt-2">
                  <p className="text-white/30 text-[11px] text-center mb-3 font-semibold">Популярные вопросы:</p>
                  {QUICK_QUESTIONS.map((q) => (
                    <button key={q} onClick={() => sendMessage(q)}
                      className="w-full text-left text-[12px] text-white/70 bg-white/[0.03] hover:bg-primary/10 border border-white/[0.06] hover:border-primary/20 rounded-xl px-3.5 py-2.5 transition-all font-semibold">
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-white/[0.06]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Задай любой вопрос..."
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/30 transition-colors font-medium"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-11 h-11 rounded-xl bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors disabled:opacity-30"
                >
                  <Icon name="Send" size={16} className="text-primary" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatWidget
