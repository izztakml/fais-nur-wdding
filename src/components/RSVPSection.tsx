'use client'

import { useState, FormEvent } from 'react'
import { getSupabase } from '@/lib/supabase'
import AnimateOnScroll, { StaggerItem } from './AnimateOnScroll'

export default function RSVPSection() {
  const [form, setForm] = useState({ name: '', phone: '', pax: '1', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    if (!form.name.trim() || !form.phone.trim()) {
      setError('Sila isi nama dan no telefon')
      setSubmitting(false)
      return
    }

    const pax = parseInt(form.pax)
    if (isNaN(pax) || pax < 1) {
      setError('Bilangan tetamu tidak sah')
      setSubmitting(false)
      return
    }

    const { error: supabaseError } = await getSupabase()
      .from('rsvps')
      .insert({ name: form.name.trim(), phone: form.phone.trim(), pax, message: form.message.trim() })

    if (supabaseError) {
      setError('Ralat berlaku. Sila cuba lagi.')
      console.error(supabaseError)
    } else {
      setSuccess(true)
      setForm({ name: '', phone: '', pax: '1', message: '' })
    }

    setSubmitting(false)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8]" id="rsvp">
      <div className="max-w-xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-[family-name:var(--font-dancing)] text-4xl md:text-5xl text-center text-[#4d0b16] mb-4">
            RSVP
          </h2>
          <div className="w-12 h-[1px] bg-[#791123] mx-auto mb-4" />
          <p className="text-center text-[#791123] mb-10 text-sm">
            Sila isi butiran di bawah untuk mengesahkan kehadiran
          </p>
        </AnimateOnScroll>

        {success ? (
          <AnimateOnScroll animation="scale-in">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className="text-green-800 font-semibold text-lg mb-2">Terima Kasih!</p>
              <p className="text-green-600 text-sm">Kehadiran anda telah direkodkan.</p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-4 text-sm text-[#791123] underline hover:text-[#4d0b16] transition-colors"
              >
                Hantar semula
              </button>
            </div>
          </AnimateOnScroll>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <StaggerItem index={0}>
              <div>
                <label className="block text-sm font-semibold text-[#4d0b16] mb-1.5">Nama Penuh</label>
                <input
                  type="text"
                  className="rsvp-input"
                  placeholder="Nama anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
            </StaggerItem>

            <StaggerItem index={1}>
              <div>
                <label className="block text-sm font-semibold text-[#4d0b16] mb-1.5">No. Telefon</label>
                <input
                  type="tel"
                  className="rsvp-input"
                  placeholder="012-3456789"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
            </StaggerItem>

            <StaggerItem index={2}>
              <div>
                <label className="block text-sm font-semibold text-[#4d0b16] mb-1.5">Bilangan Tetamu</label>
                <select
                  className="rsvp-input"
                  value={form.pax}
                  onChange={(e) => setForm({ ...form, pax: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} orang</option>
                  ))}
                </select>
              </div>
            </StaggerItem>

            <StaggerItem index={3}>
              <div>
                <label className="block text-sm font-semibold text-[#4d0b16] mb-1.5">Ucapan untuk Pengantin</label>
                <textarea
                  className="rsvp-textarea"
                  placeholder="Tulis ucapan anda di sini..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
            </StaggerItem>

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <StaggerItem index={4}>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-gradient-to-r from-[#791123] to-[#4d0b16] text-white rounded-xl font-semibold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-60 shadow-lg shadow-[#791123]/20 hover:shadow-xl hover:shadow-[#791123]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Menghantar...
                  </span>
                ) : 'Hantar Kehadiran'}
              </button>
            </StaggerItem>
          </form>
        )}
      </div>
    </section>
  )
}
