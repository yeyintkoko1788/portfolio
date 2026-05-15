import { useState, useEffect, useRef } from 'react'
import BackToTop from './BackToTop'

const seriesOne = [
  { title: 'Silent was safer', year: '2025', image: '/images/poster-eerie.png' },
  { title: 'Sunflower', year: '2026', image: '/images/poster-sunflower.png' },
]

const seriesTwo = [
  { title: 'Through the artist', year: '2026', image: '/images/poster-artist.png' },
  { title: 'Midnight bloom', year: '2026', image: '/images/poster-midnight.png' },
  { title: 'Nebula', year: '2026', image: '/images/poster-nebula.png' }
]

const allPosters = [...seriesOne, ...seriesTwo]

export default function NewPostersDetail() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + allPosters.length) % allPosters.length : null)
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % allPosters.length : null)
  const closeLightbox = () => setLightboxIndex(null)

  // Keyboard navigation
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

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

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
            .lightbox-overlay button:hover { cursor: url('/images/cursor-white.png') 0 0, auto !important; }
            .lightbox-btn:hover { opacity: 1 !important; border-color: rgba(240,235,224,0.8) !important; }
          `}</style>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="lightbox-btn font-oswald"
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: '#F0EBE0', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, transition: 'opacity 0.2s' }}
          >
            Close X
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="lightbox-btn"
            style={{ position: 'absolute', left: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={allPosters[lightboxIndex].image}
            alt={allPosters[lightboxIndex].title}
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '80vh', maxWidth: '60vw', objectFit: 'contain', display: 'block' }}
          />

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="lightbox-btn"
            style={{ position: 'absolute', right: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}
          >
            ›
          </button>

          {/* Bottom info */}
          <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
            <p className="font-playfair" style={{ color: '#F0EBE0', fontSize: '14px', marginBottom: '4px' }}>{allPosters[lightboxIndex].title}</p>
            <p className="font-oswald" style={{ color: '#F0EBE0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>Spec Work</p>
          </div>

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {allPosters.map((_, i) => (
              <span
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F0EBE0', opacity: i === lightboxIndex ? 1 : 0.3, cursor: 'pointer', display: 'inline-block' }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        .poster-card img { transition: transform 0.4s ease, filter 0.4s ease; filter: grayscale(100%); }
        .poster-card:hover img { transform: scale(1.04); filter: grayscale(0%); }
      `}</style>

      <div className="page-px" style={{ paddingTop: '40px', paddingBottom: '64px' }}>

        {/* Header */}
        <div style={{ position: 'relative', marginBottom: '32px' }}>
          <a
            href="/#creative-lab"
            onClick={(e) => { e.preventDefault(); window.history.back() }}
            className="font-oswald"
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', opacity: 0.5 }}
          >
            ← Back
          </a>
          <h1
            className="font-playfair"
            style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}
          >
            Posters
          </h1>
        </div>

        {/* Series I divider + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ flex: 10, borderTop: '1px solid #111008' }} />
          <span className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, flexShrink: 0 }}>Series I</span>
          <div style={{ flex: 1, borderTop: '1px solid #111008' }} />
        </div>

        {/* Series I grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2.7fr', gap: '24px', marginBottom: '48px', paddingLeft: '250px', paddingRight: '250px' }}>
          {seriesOne.map(({ title, year, image }, i) => (
            <div key={title} className="poster-card" style={{ padding: '0 24px', cursor: 'pointer' }} onClick={() => setLightboxIndex(i)}>
              <div style={{ overflow: 'hidden' }}>
                <img src={image} alt={title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                <span className="font-old-standard" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: '#111008', color: '#F0EBE0', padding: '2px 0' }}>{title}</span>
                <span className="font-old-standard" style={{ fontSize: '11px', letterSpacing: '0.14em', opacity: 0.4 }}>{year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Series II divider + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ flex: 10, borderTop: '1px solid #111008' }} />
          <span className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, flexShrink: 0 }}>Series II</span>
          <div style={{ flex: 1, borderTop: '1px solid #111008' }} />
        </div>

        {/* Series II grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '64px' }}>
          {seriesTwo.map(({ title, year, image }, i) => (
            <div key={title} className="poster-card" style={{ padding: '0 24px', marginTop: i === 1 ? '48px' : '0', cursor: 'pointer' }} onClick={() => setLightboxIndex(seriesOne.length + i)}>
              <div style={{ overflow: 'hidden' }}>
                <img src={image} alt={title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                <span className="font-old-standard" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: '#111008', color: '#F0EBE0', padding: '2px 0' }}>{title}</span>
                <span className="font-old-standard" style={{ fontSize: '11px', letterSpacing: '0.14em', opacity: 0.4 }}>{year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div style={{ borderTop: '1px solid #111008', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}></div>
        <div style={{ paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ borderLeft: '2px solid #111008', paddingLeft: '16px' }}>
            <p className="font-eb-garamond" style={{ fontSize: '14px', fontStyle: 'italic', opacity: 0.7, lineHeight: 1.7 }}>
              "Design is the silent<br />ambassador of your brand."
            </p>
          </div>
        </div>

      </div>
      <BackToTop />
    </div>
  )
}
