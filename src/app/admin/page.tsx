'use client'
export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabase } from '@/lib/supabase'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    getSupabase().auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace('/admin/rsvp')
      } else {
        setLoading(false)
      }
    })
  }, [router])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthError('')

    const { error } = await getSupabase().auth.signInWithPassword({ email, password })
    if (error) {
      setAuthError(error.message)
    } else {
      router.push('/admin/rsvp')
    }
  }

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
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-[#faf7f2] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full border border-[#e8ddd0]">
        <div className="text-center mb-6">
          <p className="font-[family-name:var(--font-dancing)] text-3xl text-[#4d0b16] mb-1">
            Fais <span className="text-[#791123]">&amp;</span> Nur
          </p>
          <div className="w-8 h-px bg-[#c9a06c] mx-auto my-3" />
          <p className="text-[#9a7b7b] text-xs">Admin Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#4d0b16] mb-1">Email</label>
            <input
              type="email"
              className="rsvp-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#4d0b16] mb-1">Password</label>
            <input
              type="password"
              className="rsvp-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {authError && <p className="text-red-600 text-sm text-center">{authError}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#791123] to-[#4d0b16] text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-[#791123]/20"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
