'use client'

import { useState, useEffect, useRef } from 'react'

type Message = {
  id: string
  name: string
  message: string
}

const sections = [
  { id: 'details', label: 'Details' },
  { id: 'card', label: 'Kad' },
  { id: 'rsvp', label: 'RSVP' },
]

const stagger = [
  { delay: '0.3s' },
  { delay: '0.8s' },
  { delay: '1.3s' },
  { delay: '1.8s' },
  { delay: '2.3s' },
  { delay: '2.8s' },
  { delay: '3.4s' },
  { delay: '3.9s' },
]

function MarqueeTrack({ messages, onSelect }: { messages: Message[], onSelect: (m: Message) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const paused = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || messages.length === 0) return
    let pos = 0
    let id: number

    const speed = () => window.innerWidth < 1024 ? 1.2 : 0.8

    const tick = () => {
      if (!paused.current) {
        pos -= speed()
        if (pos <= -el.scrollWidth / 2) pos = 0
        el.style.transform = `translateX(${pos}px)`
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)

    const onEnter = () => { paused.current = true }
    const onLeave = () => { paused.current = false }
    el.parentElement!.addEventListener('mouseenter', onEnter)
    el.parentElement!.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(id)
      el.parentElement?.removeEventListener('mouseenter', onEnter)
      el.parentElement?.removeEventListener('mouseleave', onLeave)
    }
  }, [messages])

  return (
    <div ref={ref} className="flex items-center h-full whitespace-nowrap">
      {[...messages, ...messages].map((msg, i) => (
        <button
          key={`${msg.id}-${i}`}
          onClick={() => onSelect(msg)}
          className="inline-flex items-center gap-2 mx-5 text-[#f5e6d0] text-xs tracking-wide hover:text-[#c9a06c] transition-colors cursor-pointer shrink-0"
        >
          <span className="w-1 h-1 rounded-full bg-[#c9a06c] shrink-0" />
          <span className="max-w-[200px] truncate">{msg.message}</span>
        </button>
      ))}
    </div>
  )
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [selected, setSelected] = useState<Message | null>(null)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages')
        if (res.ok) {
          const data = await res.json()
          setMessages(data)
        }
      } catch (e) { console.error('marquee fetch error', e) }
    }
    fetchMessages()
  }, [])

  const hasMarquee = messages.length > 0

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#791123]/90 backdrop-blur-sm border-b border-[#c9a06c]/20 overflow-hidden h-10">
        <MarqueeTrack messages={messages} onSelect={setSelected} />
      </div>

      <nav className={`fixed ${hasMarquee ? 'top-10' : 'top-0'} left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#4d0b16]/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-center gap-6 md:gap-10">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[#c9a06c] text-xs tracking-[0.15em] uppercase hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4d0b16] via-[#791123] to-[#4d0b16]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a06c' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="absolute inset-0 bg-gradient-to-t from-[#4d0b16]/80 via-transparent to-[#4d0b16]/50" />

        <div className="relative z-10 text-center px-6">
          {/* The Wedding Of */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[0].delay,
            }}
          >
            <p className="text-[#c9a06c] tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-[family-name:var(--font-lato)]">
              The Wedding Of
            </p>
          </div>

          {/* Nur */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[1].delay,
            }}
          >
            <h1 className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5e6d0] leading-tight">
              Nur
            </h1>
          </div>

          {/* & */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[2].delay,
            }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#c9a06c] font-[family-name:var(--font-lato)] italic my-3">
              &amp;
            </p>
          </div>

          {/* Fais */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[3].delay,
            }}
          >
            <h1 className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5e6d0] leading-tight">
              Fais
            </h1>
          </div>

          {/* Line */}
          <div
            className="transition-all duration-700 ease-out flex justify-center"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[4].delay,
            }}
          >
            <div className="w-16 h-[1px] bg-[#c9a06c] my-6 animate-pulse-glow" />
          </div>

          {/* Date */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[5].delay,
            }}
          >
            <p className="text-[#d4b8a8] font-[family-name:var(--font-playfair)] italic text-lg md:text-xl">
              25 & 26 July 2026
            </p>
          </div>

          {/* Lihat Details */}
          <div
            className="transition-all duration-700 ease-out mt-12"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(15px)',
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[6].delay,
            }}
          >
            <a
              href="#details"
              className="inline-flex items-center gap-2 text-[#c9a06c] text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              <span className="w-6 h-px bg-[#c9a06c]" />
              Lihat Details
            </a>
          </div>

          {/* Dots */}
          <div
            className="transition-all duration-700 ease-out mt-8 flex justify-center gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: stagger[7].delay,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a06c] animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-[#c9a06c] animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span className="w-2 h-2 rounded-full bg-[#c9a06c] animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] modal-overlay flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md bg-gradient-to-br from-[#f5f0e8] to-[#faf7f2] rounded-2xl p-8 shadow-2xl border border-[#c9a06c]/30 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-[#9a7b7b] hover:text-[#791123] text-3xl leading-none transition-colors"
            >
              &times;
            </button>

            <div className="text-center">
              <p className="text-[#c9a06c] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-lato)]">
                Ucapan
              </p>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#c9a06c] to-transparent mx-auto my-4" />

              <p className="text-[#2d2a24] font-[family-name:var(--font-playfair)] text-lg leading-relaxed mb-8 italic px-2">
                &ldquo;{selected.message}&rdquo;
              </p>

              <div className="border-t border-[#c9a06c]/20 pt-4">
                <p className="text-[#9a7b7b] text-xs tracking-[0.15em] uppercase">by</p>
                <p className="text-[#791123] font-semibold text-base mt-1">{selected.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
