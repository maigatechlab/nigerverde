import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#134F47] flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <Image src="/logo-white.svg" alt="NigerVerdé" width={48} height={48} />
        <Image src="/wordmark-white.svg" alt="" width={130} height={32} className="h-8 w-auto" />
      </div>

      {/* 404 */}
      <p className="font-display font-bold text-[#FFB981] text-8xl leading-none mb-4">404</p>
      <h1
        className="font-display font-bold text-white text-balance leading-tight mb-4"
        style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
      >
        Page introuvable
      </h1>
      <p className="text-white/65 text-base max-w-sm mb-10 leading-relaxed">
        Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil pour découvrir NigerVerdé.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#E78838] hover:bg-[#F68F31] text-[#0C322C] font-bold px-8 py-3.5 rounded-full transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
        <a
          href="mailto:contact@nigerverde.com"
          className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-3.5 rounded-full transition-colors"
        >
          Nous contacter
        </a>
      </div>

      {/* Decorative bottom wave */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#21A34E" />
      </svg>
    </div>
  )
}
