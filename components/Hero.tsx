import Image from 'next/image'
import { hero, site } from '@/lib/content'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 lg:-mt-20"
      aria-label="Section héros"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/photos/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(12,50,44,0.88) 0%, rgba(19,79,71,0.75) 50%, rgba(27,149,72,0.45) 100%)',
        }}
        aria-hidden="true"
      />

      {/* SVG decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Sun */}
        <svg
          className="absolute top-16 right-12 lg:right-24 w-24 h-24 lg:w-36 lg:h-36 opacity-25"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="22" fill="#F68F31" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="50"
              x2={50 + 38 * Math.cos((deg * Math.PI) / 180)}
              y2={50 + 38 * Math.sin((deg * Math.PI) / 180)}
              stroke="#FFB981"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* Wavy field lines */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-15"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0,80 C240,20 480,140 720,80 C960,20 1200,140 1440,80 L1440,160 L0,160 Z" fill="#21A34E" />
          <path d="M0,100 C360,40 720,160 1080,100 C1260,70 1380,120 1440,100 L1440,160 L0,160 Z" fill="#1B9548" opacity="0.7" />
        </svg>

        {/* Drone silhouette */}
        <svg
          className="absolute top-1/3 right-1/4 w-12 h-12 lg:w-16 lg:h-16 opacity-20"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="6" fill="white" />
          <line x1="32" y1="32" x2="10" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="32" x2="54" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="32" x2="10" y2="54" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="32" x2="54" y2="54" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="10" r="5" stroke="white" strokeWidth="2" />
          <circle cx="54" cy="10" r="5" stroke="white" strokeWidth="2" />
          <circle cx="10" cy="54" r="5" stroke="white" strokeWidth="2" />
          <circle cx="54" cy="54" r="5" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 lg:pt-36 pb-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FFB981]">
            {hero.supertitle}
          </p>
        </div>

        <h1 className="font-display font-700 text-balance mb-6 leading-[1.1]" style={{ fontSize: 'clamp(2.6rem,6.4vw,4.7rem)' }}>
          {hero.title[0]}
          <br />
          {hero.title[1]}{' '}
          <em className="not-italic text-[#FFB981]">{hero.titleAccent}</em>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projet"
            className="w-full sm:w-auto bg-[#134F47] hover:bg-[#155C35] text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={`https://${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-[#E78838] text-[#FFB981] hover:bg-[#E78838] hover:text-white font-bold text-base px-8 py-4 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-white"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {hero.badges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
