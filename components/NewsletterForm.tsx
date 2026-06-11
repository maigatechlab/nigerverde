'use client'

import { useState } from 'react'
import { subscribeNewsletter } from '@/app/actions/newsletter'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const result = await subscribeNewsletter(new FormData(e.currentTarget))
    setStatus(result.success ? 'success' : 'error')
  }

  if (status === 'success') {
    return <p className="text-[#21A34E] text-xs font-semibold">Inscription confirmée !</p>
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit} aria-label="Inscription newsletter">
      <input
        type="email"
        name="email"
        required
        placeholder="votre@email.com"
        disabled={status === 'submitting'}
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#21A34E] transition-colors disabled:opacity-50"
        aria-label="Adresse e-mail pour la newsletter"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-[#155C35] hover:bg-[#134F47] disabled:opacity-50 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
      >
        {status === 'submitting' ? '…' : 'OK'}
      </button>
    </form>
  )
}
