'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimateOnScroll from './AnimateOnScroll'

export default function FlipCard() {
  const [showModal, setShowModal] = useState(false)
  const [flipped, setFlipped] = useState(false)

  function openModal() {
    setFlipped(false)
    setShowModal(true)
  }

  return (
    <>
      <section className="py-24 px-6 bg-gradient-to-b from-[#fffaf5] to-[#faf7f2]" id="card">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-[family-name:var(--font-dancing)] text-4xl md:text-5xl text-center text-[#4d0b16] mb-4">
              Kad Kahwin Digital
            </h2>
            <div className="w-12 h-[1px] bg-[#791123] mx-auto mb-4" />
            <p className="text-center text-[#791123] mb-10 text-sm font-[family-name:var(--font-lato)]">
              Tekan kad untuk lihat dengan lebih jelas
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="flex justify-center">
              <div
                className="flip-card w-full max-w-[300px] sm:max-w-sm aspect-square cursor-pointer animate-float-slow"
                onClick={openModal}
              >
                <div className="flip-card-inner relative w-full h-full rounded-2xl shadow-xl">
                  <div className="flip-card-front">
                    <Image
                      src="/images/NUR_FAIS_D1-01.png"
                      alt="Kad Kahwin Depan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div
              className={`flip-card w-full aspect-square cursor-pointer ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped(!flipped)}
            >
              <div className="flip-card-inner relative w-full h-full rounded-2xl shadow-2xl">
                <div className="flip-card-front">
                  <Image
                    src="/images/NUR_FAIS_D1-01.png"
                    alt="Kad Kahwin Depan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flip-card-back">
                  <Image
                    src="/images/NUR_FAIS_D1-02.png"
                    alt="Kad Kahwin Belakang"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-white/60 text-xs mt-4">
              Tekan kad untuk flip
            </p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl transition-colors hover:scale-110"
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}
