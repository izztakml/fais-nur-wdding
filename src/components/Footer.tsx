'use client'

import AnimateOnScroll from './AnimateOnScroll'

export default function Footer() {
  return (
    <footer className="bg-[#4d0b16] text-center py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <p className="font-[family-name:var(--font-dancing)] text-2xl text-[#c9a06c] mb-2">
            Fais <span className="text-[#d4b8a8]">&amp;</span> Nur
          </p>
          <div className="w-8 h-[1px] bg-[#c9a06c]/40 mx-auto my-4" />
          <p className="text-[#d4b8a8] text-xs mb-6">
            &copy; {new Date().getFullYear()} — Dibina dengan penuh kasih sayang
          </p>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}
