import { missionVision } from '@/lib/content'

export default function MissionVision() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Mission et Vision de NigerVerdé"
    >
      <div className="absolute inset-0 bg-[#134F47]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8"
        style={{ backgroundImage: "url('/photos/hero-serre.png')" }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1B9548]/20 rounded-full -translate-x-32 -translate-y-32" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0C322C]/40 rounded-full translate-x-48 translate-y-48" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {[missionVision.mission, missionVision.vision].map((item) => (
            <div
              key={item.label}
              className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
                <span className="text-[#FFB981] text-xs font-bold tracking-[0.2em] uppercase">
                  {item.label}
                </span>
              </div>
              <p className="font-display font-semibold text-white leading-relaxed text-xl lg:text-2xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
