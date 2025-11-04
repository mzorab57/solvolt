import React, { useEffect, useRef, useState } from 'react'
import { CircularGallery } from './ui/circular-gallery'

// هەمان داتاکانی ئێستا هێماندووە بێ گۆڕانکاری
const items = [
  {
    common: 'Smart Inverter – Overview',
    binomial: 'Solvolt Energy Suite',
    photo: { url: '/assets/images/inverter.webp?1', text: 'Inverter front view', by: 'Solvolt', pos: 'center' }
  },
  { 
    common: 'Monitoring Panel',
    binomial: 'Real-time Analytics',
    photo: { url: '/assets/images/inverter.webp?2', text: 'Monitoring dashboard', by: 'Solvolt', pos: 'top' }
  },
  {
    common: 'Load Balancing',
    binomial: 'Smart Grid Manager',
    photo: { url: '/assets/images/inverter.webp?3', text: 'Load distribution', by: 'Solvolt', pos: 'center' }
  },
  {
    common: 'Fault Detection',
    binomial: 'AI Diagnostics',
    photo: { url: '/assets/images/inverter.webp?4', text: 'Alert system', by: 'Solvolt', pos: 'center' }
  },
  {
    common: 'Battery Health',
    binomial: 'Advanced Storage',
    photo: { url: '/assets/images/inverter.webp?5', text: 'Battery module', by: 'Solvolt', pos: 'center' }
  },
  {
    common: 'Efficiency Report',
    binomial: 'Performance Metrics',
    photo: { url: '/assets/images/inverter.webp?6', text: 'Efficiency chart', by: 'Solvolt', pos: 'center' }
  },
  {
    common: 'Thermal Management',
    binomial: 'Cooling System',
    photo: { url: '/assets/images/inverter.webp?7', text: 'Cooling fins', by: 'Solvolt', pos: 'center' }
  },
  {
    common: 'Uptime Tracker',
    binomial: 'Reliability Suite',
    photo: { url: '/assets/images/inverter.webp?8', text: 'Uptime counter', by: 'Solvolt', pos: 'center' }
  }
]

const Gallery = () => {
  // قفڵکردنی scroll لەسەر ئەم سەکشنی گەلەریە تا گەڕانەکە تەواو بێت
  const sectionRef = useRef(null)
  const touchStartYRef = useRef(0)
  const [progress, setProgress] = useState(0) // 0..1
  const [locked, setLocked] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // دووبارە قفڵ بکە جارێک ئەگەر بە لای سەرەوە داخڵ بوو
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      const e = entries[0]
      if (e.isIntersecting && e.boundingClientRect.top >= 0) {
        setProgress(0)
        setLocked(true)
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const mobileLike = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    setIsMobile(mobileLike)
  }, [])

  const onWheel = (e) => {
    if (!locked) return // بە شێوەی ئاسایی بەژیکەوە
    // ڕێکخستنی حەساستەی گەڕان بە پێی قەبارەی پەنجەڕە و جۆری ئامراز
    const delta = e.deltaY
    const base = Math.max(500, window.innerHeight)
    const isTrackpad = Math.abs(delta) < 40
    const gain = isTrackpad ? 0.6 : 1.0
    const step = delta / (base * 0.8) * gain
    const next = Math.max(0, Math.min(1, progress + step))
    setProgress(next)
    // هەڵوێست لە سکرۆڵ تا تەواو بێت
    if (next < 1) {
      e.preventDefault()
    } else {
      setLocked(false)
    }
  }

  const onTouchStart = (e) => {
    if (!locked) return
    touchStartYRef.current = e.touches[0].clientY
  }

  const onTouchMove = (e) => {
    if (!locked) return
    const y = e.touches[0].clientY
    const deltaY = touchStartYRef.current - y
    touchStartYRef.current = y
    const base = Math.max(500, window.innerHeight)
    const factor = isMobile ? 0.6 : 0.8
    const step = deltaY / (base * factor)
    const next = Math.max(0, Math.min(1, progress + step))
    setProgress(next)
    if (next < 1) {
      e.preventDefault()
    } else {
      setLocked(false)
    }
  }

  const onKeyDown = (e) => {
    if (!locked) return
    if (['ArrowDown','PageDown',' '].includes(e.key)) {
      e.preventDefault()
      setProgress(p => Math.min(1, p + 0.06))
    } else if (['ArrowUp','PageUp'].includes(e.key)) {
      e.preventDefault()
      setProgress(p => Math.max(0, p - 0.06))
    }
  }

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-white">
      <div
        className="sticky top-0 h-screen bg-white outline-none"
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {/* ڕێنمای پیشکەوتن بە شێوەی بارێکی بەستەراو */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/10">
          <div
            className="h-1 bg-blue-500"
            style={{ width: `${Math.round(progress * 100)}%`, transition: 'width 120ms linear' }}
          />
        </div>
        <CircularGallery
          items={items}
          className="w-full h-full"
          disableWindowScroll
          rotationExternal={progress * 360}
        />
      </div>
    </section>
  )
}

export default Gallery