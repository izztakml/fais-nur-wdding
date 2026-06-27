'use client'

import AnimateOnScroll, { StaggerItem } from './AnimateOnScroll'

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#791123" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#791123" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#791123" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const googleMapsUrl = 'https://maps.app.goo.gl/aKeeRF9gi1izqKE8A?g_st=iw'
const wazeUrl = 'https://waze.com/ul/hw280xnyd2'

const namaPenuh = [
  'MUHAMMAD FAIS BIN MOHD FADZIL',
  'NUR MARIANA BINTI MD JADI',
]

const ibuBapa = [
  'MD JADI BIN MD SAH',
  'SITI MARIAM @ MERIAM BINTI ABDULLAH',
]

const info = [
  { icon: <CalendarIcon />, label: 'Hari', value: 'SABTU & AHAD' },
  { icon: <CalendarIcon />, label: 'Tarikh Majlis', value: '25.07.2026 (SABTU) & 26.07.2026 (AHAD)' },
]

const aturCara = [
  {
    day: 'MALAM BERINAI',
    date: '25.07.2026',
    items: [
      { time: '08.30 PM', end: '12.30 AM', event: 'Majlis Makan' },
      { time: '08.45 PM', end: null, event: 'Ketibaan Pengantin' },
    ]
  },
  {
    day: 'SANDING',
    date: '26.07.2026',
    items: [
      { time: '11.00 AM', end: '05.00 PM', event: 'Majlis Makan' },
      { time: '12.30 PM', end: null, event: 'Ketibaan Pengantin' },
    ]
  }
]

export default function DetailsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f5f0e8] to-[#faf7f2]" id="details">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-[#9a7b7b] tracking-[0.2em] uppercase text-xs mb-4">Details</p>
            <h2 className="font-[family-name:var(--font-dancing)] text-4xl md:text-5xl text-[#4d0b16] mb-4">
              Majlis
            </h2>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#791123] to-transparent mx-auto" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={100}>
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <p className="text-xs text-[#9a7b7b] tracking-[0.15em] uppercase mb-3">Dijemput dengan hormatnya</p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a06c]" />
                <span className="text-[#c9a06c] text-sm font-[family-name:var(--font-playfair)] italic">Bersama</span>
                <div className="h-px w-12 bg-gradient-to-r from-[#c9a06c] to-transparent" />
              </div>
              <h3 className="font-[family-name:var(--font-dancing)] text-5xl md:text-7xl text-[#4d0b16] leading-tight">
                Nur
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-lg text-[#791123] italic my-2">&amp;</p>
              <h3 className="font-[family-name:var(--font-dancing)] text-5xl md:text-7xl text-[#4d0b16] leading-tight">
                Fais
              </h3>
              <div className="flex items-center justify-center gap-4 mt-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a06c]" />
                <span className="text-[#c9a06c] text-xs font-[family-name:var(--font-playfair)] italic">Puteri & Putera</span>
                <div className="h-px w-12 bg-gradient-to-r from-[#c9a06c] to-transparent" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <StaggerItem index={0}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8ddd0] hover-card">
              <p className="text-[#9a7b7b] text-xs tracking-[0.15em] uppercase mb-3">Nama Penuh Pengantin</p>
              <div className="space-y-1">
                {namaPenuh.map((n, i) => (
                  <p key={i} className="text-[#2d2a24] font-semibold text-sm">{n}</p>
                ))}
              </div>
            </div>
          </StaggerItem>
          <StaggerItem index={1}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8ddd0] hover-card">
              <p className="text-[#9a7b7b] text-xs tracking-[0.15em] uppercase mb-3">Nama Bapa & Ibu Pengantin</p>
              <div className="space-y-1">
                {ibuBapa.map((n, i) => (
                  <p key={i} className="text-[#2d2a24] font-semibold text-sm">{n}</p>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>

        <div className="space-y-3 mb-6">
          {info.map((d, i) => (
            <StaggerItem key={i} index={i} animation="slide-left">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8ddd0] flex items-start gap-4 hover-card">
                {d.icon}
                <div>
                  <p className="text-[#9a7b7b] text-xs tracking-[0.1em] uppercase mb-1">{d.label}</p>
                  <p className="text-[#2d2a24] text-sm font-medium">{d.value}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        <StaggerItem index={2} animation="slide-right">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8ddd0] flex items-start gap-4 hover-card mb-12">
            <PhoneIcon />
            <div>
              <p className="text-[#9a7b7b] text-xs tracking-[0.1em] uppercase mb-1">No. Telefon</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a href="tel:601112550239" className="text-[#2d2a24] text-sm font-medium hover:text-[#791123] transition-colors">
                  <span className="underline underline-offset-2 decoration-[#c9a06c]/40">011-12550239</span> (Aina)
                </a>
                <a href="tel:601112550339" className="text-[#2d2a24] text-sm font-medium hover:text-[#791123] transition-colors">
                  <span className="underline underline-offset-2 decoration-[#c9a06c]/40">011-12550339</span> (Farah)
                </a>
              </div>
            </div>
          </div>
        </StaggerItem>

        <AnimateOnScroll animation="fade-up">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#4d0b16] font-semibold mb-8 text-center">
            Atur Cara Majlis
          </h3>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {aturCara.map((ac, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8ddd0] hover-card">
                <div className="bg-gradient-to-r from-[#791123] to-[#4d0b16] px-6 py-4 text-center">
                  <p className="text-[#c9a06c] text-xs tracking-[0.15em] uppercase">{ac.date}</p>
                  <p className="text-white font-[family-name:var(--font-playfair)] font-semibold text-lg">{ac.day}</p>
                </div>
                <div className="p-6 space-y-4">
                  {ac.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between group">
                      <div>
                        <p className="text-[#4d0b16] font-semibold text-sm">{item.event}</p>
                        <p className="text-[#9a7b7b] text-xs">
                          {item.time}{item.end ? ` – ${item.end}` : ''}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#c9a06c] group-hover:scale-150 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="scale-in" delay={200}>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#791123] to-[#4d0b16] p-8 text-center shadow-lg">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a06c' fill-opacity='0.5'%3E%3Cpath d='M20 0v20H0v20h20V20h20V0H20z'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
            <div className="relative z-10">
              <p className="text-[#c9a06c] text-xs tracking-[0.2em] uppercase mb-2">Lokasi Majlis</p>
              <div className="w-8 h-px bg-[#c9a06c]/50 mx-auto mb-4" />
              <p className="font-[family-name:var(--font-playfair)] text-white text-lg md:text-xl leading-relaxed mb-6">
                NO 18 JALAN DESA KEMANDOL 11,<br />
                TAMAN DESA KEMANDOL,<br />
                42610 JENJAROM SELANGOR
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all hover:scale-105"
                >
                  <MapPinIcon />
                  Google Maps
                  <ExternalIcon />
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm transition-all hover:scale-105"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M20.745 3.328a.5.5 0 0 0-.447-.276H3.702a.5.5 0 0 0-.447.724l4.092 8.197a1 1 0 0 1 .053.602L5.945 19.5a.5.5 0 0 0 .48.5h3.43a.5.5 0 0 0 .39-.188l3.374-4.145a1 1 0 0 1 .719-.361l5.83-.478a.5.5 0 0 0 .366-.835L20.745 3.328z" />
                  </svg>
                  Waze
                  <ExternalIcon />
                </a>
              </div>
              <p className="text-[#d4b8a8] text-xs mt-5 italic">
                QR Code lokasi majlis akan disertakan
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
