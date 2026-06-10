'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Inscription newsletter"
    >
      <input
        type="email"
        placeholder="votre@email.com"
        className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#21A34E] transition-colors"
        aria-label="Adresse e-mail pour la newsletter"
      />
      <button
        type="submit"
        className="bg-[#1B9548] hover:bg-[#21A34E] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
      >
        OK
      </button>
    </form>
  )
}
