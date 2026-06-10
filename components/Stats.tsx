'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/content'

function useCounter(target: number, decimals = 0, isVisible: boolean) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isVisible || hasRun.current) return
    hasRun.current = true

    const duration = 1800
    const steps = 60
    const stepMs = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((target * eased).toFixed(decimals)))
      if (step >= steps) {
        clearInterval(timer)
        setCount(target)
      }
    }, stepMs)

    return () => clearInterval(timer)
  }, [isVisible, target, decimals])

  return count
}

function StatItem({
  value,
  unit,
  label,
  decimals = 0,
  isVisible,
}: {
  value: number
  unit: string
  label: string
  decimals?: number
  isVisible: boolean
}) {
  const count = useCounter(value, decimals, isVisible)
  const display = decimals > 0
    ? count.toLocaleString('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.round(count).toLocaleString('fr-FR')

  return (
    <div className="border-l-2 border-[#E78838] pl-6">
      <p
        className="font-display font-bold text-white leading-none mb-3"
        style={{ fontSize: 'clamp(3rem,5.5vw,4.5rem)' }}
        aria-live="polite"
      >
        {display}
        {unit && <span className="text-[0.5em] font-bold text-white ml-1">{unit}</span>}
      </p>
      <p className="text-white/65 text-sm leading-snug max-w-[180px]">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Chiffres clés du projet"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0C322C 0%, #134F47 60%, #1a5c46 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Supertitle */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-[#E78838]" aria-hidden="true" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFB981]">
            {stats.supertitle}
          </p>
        </div>

        {/* Title */}
        <h2
          className="font-display font-bold text-white mb-14 leading-[1.15]"
          style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)' }}
        >
          {stats.title}
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {stats.items.map((item) => (
            <StatItem
              key={item.label}
              value={item.value}
              unit={item.unit}
              label={item.label}
              decimals={item.decimals}
              isVisible={isVisible}
            />
          ))}
        </div>

        <p className="text-white/40 text-xs leading-relaxed max-w-2xl">
          {stats.note}
        </p>
      </div>
    </section>
  )
}
