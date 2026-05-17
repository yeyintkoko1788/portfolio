import { useState, useEffect, useRef } from 'react'
import BackToTop from './BackToTop'

const paintings = [
  { title: 'Sail to freedom', year: '2023', medium: 'Acrylic on Canvas', size: '120 × 90 cm', image: '/images/paint-sail.jpg' },
  { title: 'Mythical', year: '2023', medium: 'Acrylic on Canvas', size: '130 × 30 cm', image: '/images/paint-mythical.jpg' },
  { title: 'Reflection', year: '2024', medium: 'Acrylic on Canvas', size: '100 × 100 cm', image: '/images/paint-reflection.jpg' },
  { title: 'Aurora', year: '2023', medium: 'Acrylic on Canvas', size: '120 × 90 cm', image: '/images/paint-aurora.jpg' },
]

export default function NewPaintingDetail() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + paintings.length) % paintings.length : null)
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % paintings.length : null)
  const closeLightbox = () => setLightboxIndex(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div style={{ backgroundColor: '#F0E8D4', color: '#111008', minHeight: '100vh' }}>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <style>{`
            .lightbox-overlay,
            .lightbox-overlay *,
            .lightbox-overlay *:hover,
            .lightbox-overlay button,
            .lightbox-overlay button:hover { cursor: url('/images/cursor-white.svg') 0 0, auto !important; }
            .lightbox-btn:hover { opacity: 1 !important; border-color: rgba(240,235,224,0.8) !important; }
          `}</style>

          <button onClick={closeLightbox} className="lightbox-btn font-oswald"
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: '#F0EBE0', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, transition: 'opacity 0.2s' }}>
            Close ×
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev() }} className="lightbox-btn"
            style={{ position: 'absolute', left: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}>
            ‹
          </button>

          <img src={paintings[lightboxIndex].image} alt={paintings[lightboxIndex].title}
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '80vh', maxWidth: '60vw', objectFit: 'contain', display: 'block', border: '2px solid rgba(240,235,224,0.15)' }} />

          <button onClick={(e) => { e.stopPropagation(); next() }} className="lightbox-btn"
            style={{ position: 'absolute', right: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}>
            ›
          </button>

          <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
            <p className="font-playfair" style={{ color: '#F0EBE0', fontSize: '14px', marginBottom: '4px' }}>{paintings[lightboxIndex].title}</p>
            <p className="font-oswald" style={{ color: '#F0EBE0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>{paintings[lightboxIndex].medium} · {paintings[lightboxIndex].size}</p>
          </div>

          <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {paintings.map((_, i) => (
              <span key={i} onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F0EBE0', opacity: i === lightboxIndex ? 1 : 0.3, cursor: 'pointer', display: 'inline-block' }} />
            ))}
          </div>
        </div>
      )}

      <style>{`
        .paint-card .paint-img { transition: transform 0.4s ease, filter 0.4s ease; filter: grayscale(100%); }
        .paint-card:hover .paint-img { transform: scale(1.04); filter: grayscale(0%); }
      `}</style>

      <div className="page-px" style={{ paddingTop: '40px', paddingBottom: '64px' }}>

        {/* Header */}
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <a href="/#creative-lab" onClick={(e) => { e.preventDefault(); window.history.back() }}
            className="font-oswald"
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', opacity: 0.5 }}>
            ← Back
          </a>
          <h1 className="font-playfair" style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Painting
          </h1>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '2px solid #111008', marginBottom: '40px' }} />

        {/* 2×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '64px', paddingLeft: '180px', paddingRight: '180px' }}>
          {paintings.map(({ title, year, medium, size, image }, i) => (
            <div key={title} className="paint-card" style={{ cursor: 'pointer' }} onClick={() => setLightboxIndex(i)}>
              <div style={{ border: '2px solid #111008', overflow: 'hidden' }}>
                <img src={image} alt={title} className="paint-img" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ paddingTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span className="font-old-standard" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: '#111008', color: '#F0EBE0', padding: '2px 8px' }}>{title}</span>
                  <span className="font-oswald" style={{ fontSize: '11px', letterSpacing: '0.14em', opacity: 0.4 }}>{year}</span>
                </div>
                <p className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5, marginTop: '4px' }}>{medium} · {size}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div style={{ borderTop: '1px solid #111008', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ borderLeft: '2px solid #111008', paddingLeft: '16px' }}>
            <p className="font-eb-garamond" style={{ fontSize: '14px', fontStyle: 'italic', opacity: 0.7, lineHeight: 1.7 }}>
              "Every artist dips his brush in his own soul,<br />and paints his own nature into his pictures."
            </p>
          </div>
        </div>

      </div>
      <BackToTop />
    </div>
  )
}
