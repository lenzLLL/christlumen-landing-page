"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ComingSoonPage() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsLoading(false)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="ChristLumen" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight">ChristLumen</span>
          </Link>
          <a href="mailto:contact@christlumen.app" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-slate-900 font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Contact
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <p className="inline-flex items-center gap-2 text-sm rounded-full bg-white/10 px-4 py-2 text-[#FFD700] font-medium">Launching soon</p>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">ChristLumen is coming</h1>
            <p className="mt-4 text-lg text-slate-300">A church network to engage your community online.</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            {submitted ? (
              <div className="rounded-xl border border-green-300/30 bg-green-500/10 px-4 py-3 text-left text-green-200">Thanks! You will be notified first.</div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="flex-1 rounded-xl border border-white/20 bg-black/50 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-[#FFD700] focus:ring-2 focus:ring-amber-300/40" required />
                <button type="submit" className="rounded-xl bg-gradient-to-r from-[#FFD700] to-[#DAA520] px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-[#FFD700]/40 transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-70" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Notify me'}
                </button>
              </div>
            )}
          </motion.form>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold">Multi-church management</h3>
              <p className="mt-2 text-sm">One dashboard for all your communities.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold">Spiritual content</h3>
              <p className="mt-2 text-sm">Publish sermons, articles and videos.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold">Events</h3>
              <p className="mt-2 text-sm">Manage services and ticketing.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-bold">Secure donations</h3>
              <p className="mt-2 text-sm">Collect offerings safely online.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/70 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          <p>© {currentYear} ChristLumen - All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-4">
            <Link href="/cgu" className="hover:text-[#FFD700]">CGU</Link>
            <Link href="/privacy-policy" className="hover:text-[#FFD700]">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-[#FFD700]">Legal</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
