'use client'
export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'
import type { RSVP } from '@/lib/supabase'

export default function AdminRSVP() {
  const router = useRouter()
  const [session, setSession] = useState<any>(null)
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabase()
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/admin')
        return
      }
      setSession(session)
      fetchRSVPs()
      setLoading(false)
    })
  }, [router])

  async function fetchRSVPs() {
    const { data } = await getSupabase()
      .from('rsvps')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) setRsvps(data as RSVP[])
  }

  async function handleLogout() {
    await getSupabase().auth.signOut()
    router.replace('/admin')
  }

  const totalPax = rsvps.reduce((sum, r) => sum + r.pax, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin h-6 w-6 text-[#791123]" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-[#791123] text-sm">Memuatkan...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-[#faf7f2]">
      <div className="max-w-5xl mx-auto p-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-[family-name:var(--font-dancing)] text-3xl md:text-4xl text-[#4d0b16]">
              Senarai RSVP
            </h1>
            <p className="text-[#9a7b7b] text-sm mt-1">
              {rsvps.length} tetamu &middot; {totalPax} orang
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start text-sm text-[#791123] hover:text-[#4d0b16] underline underline-offset-2 decoration-[#c9a06c]/40 transition-colors"
          >
            Logout
          </button>
        </div>

        {rsvps.length === 0 ? (
          <div className="text-center py-20">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9a7b7b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className="text-[#9a7b7b]">Tiada RSVP lagi</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rsvps.map((r, i) => (
              <div
                key={r.id}
                className="bg-white rounded-xl border border-[#e8ddd0] overflow-hidden hover-card"
              >
                <div className="bg-gradient-to-r from-[#791123] to-[#4d0b16] px-5 py-3 flex items-center justify-between">
                  <span className="text-[#c9a06c] text-xs font-semibold">#{i + 1}</span>
                  <span className="text-white/60 text-xs">
                    {new Date(r.created_at).toLocaleDateString('ms-MY', {
                      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[#4d0b16] font-semibold text-sm truncate">{r.name}</p>
                      <a href={`tel:${r.phone}`} className="text-[#791123] text-xs hover:underline">
                        {r.phone}
                      </a>
                    </div>
                    <span className="shrink-0 bg-[#791123]/10 text-[#791123] text-xs font-semibold px-3 py-1 rounded-full">
                      {r.pax} {r.pax > 1 ? 'org' : 'org'}
                    </span>
                  </div>

                  {r.message && (
                    <div className="bg-[#f5f0e8] rounded-lg p-3">
                      <p className="text-[#9a7b7b] text-xs tracking-[0.1em] uppercase mb-1">Ucapan</p>
                      <p className="text-[#2d2a24] text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {r.message}
                      </p>
                    </div>
                  )}
                </div>

                <div className="px-5 py-2.5 border-t border-[#e8ddd0] bg-[#faf7f2]/50">
                  <p className="text-[#9a7b7b] text-[10px]">
                    ID: {r.id.slice(0, 8)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#e8ddd0] flex flex-wrap justify-between gap-4 text-sm text-[#9a7b7b]">
          <span>Jumlah rekod: {rsvps.length}</span>
          <span>Jumlah tetamu: {totalPax} orang</span>
        </div>
      </div>
    </div>
  )
}
