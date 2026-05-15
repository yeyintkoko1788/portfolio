import { useState, useEffect, useRef } from 'react'
import BackToTop from './BackToTop'

const items = [
  { title: 'Rosa Nocturne',          subtitle: 'Desktop Prototype', image: '/images/int-desktop1.png',    video: '/videos/new-rose.mp4' },
  { title: 'Bedside Lamp',           subtitle: 'Mobile Prototype',  image: '/images/int-mobile.png',      video: '/videos/new-mobile.mp4' },
  { title: 'Design In Motion',       subtitle: 'Motion Poster',     image: '/images/int-motionposter.png', video: '/videos/int-motion.mp4' },
  { title: 'Back to the Future',     subtitle: 'Desktop Prototype', image: '/images/int-desktop2.png',    video: '/videos/int-desktop2.mov' },
  { title: 'Folder Tab Interaction', subtitle: 'Motion Studies',    image: '/images/int-file.png',         video: '/videos/int-folder.mp4' },
]

function Caption({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ paddingTop: '10px' }}>
      <p className="font-old-standard" style={{ fontSize: '13px', fontWeight: 700, marginBottom: '2px' }}>{title}</p>
      <p className="font-oswald" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>{subtitle}</p>
    </div>
  )
}

function Thumbnail({ item, onClick }: { item: typeof items[0]; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', position: 'relative' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
        <img src={item.image} alt={item.title} style={{ width: '100%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.25)' }}>
            <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '15px solid rgba(255,255,255,0.9)', marginLeft: '3px' }} />
          </div>
        </div>
      </div>
      <Caption title={item.title} subtitle={item.subtitle} />
    </div>
  )
}

export default function NewInteractionsDetail() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const [desktop1, desktop2, mobile, dd, obsidian] = items

  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + items.length) % items.length : null)
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % items.length : null)
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
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <style>{`
            .lightbox-overlay, .lightbox-overlay *, .lightbox-overlay *:hover,
            .lightbox-overlay button, .lightbox-overlay button:hover { cursor: url('/images/cursor-white.png') 0 0, auto !important; }
            .lightbox-btn:hover { opacity: 1 !important; border-color: rgba(240,235,224,0.8) !important; }
          `}</style>

          <button onClick={closeLightbox} className="lightbox-btn font-oswald"
            style={{ position: 'absolute', top: '24px', right: '32px', background: 'none', border: 'none', color: '#F0EBE0', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, transition: 'opacity 0.2s' }}>
            Close X
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev() }} className="lightbox-btn"
            style={{ position: 'absolute', left: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}>
            ‹
          </button>

          <video
            key={items[lightboxIndex].video}
            src={items[lightboxIndex].video}
            autoPlay
            loop
            playsInline
            controls
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '80vh', maxWidth: '70vw', display: 'block', borderRadius: '8px' }}
          />

          <button onClick={(e) => { e.stopPropagation(); next() }} className="lightbox-btn"
            style={{ position: 'absolute', right: '32px', background: 'none', border: '1px solid rgba(240,235,224,0.3)', color: '#F0EBE0', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, paddingBottom: '2px', opacity: 0.5, transition: 'opacity 0.2s, border-color 0.2s' }}>
            ›
          </button>

          <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
            <p className="font-playfair" style={{ color: '#F0EBE0', fontSize: '14px', marginBottom: '4px' }}>{items[lightboxIndex].title}</p>
            <p className="font-oswald" style={{ color: '#F0EBE0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>{items[lightboxIndex].subtitle}</p>
          </div>

          <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {items.map((_, i) => (
              <span key={i} onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F0EBE0', opacity: i === lightboxIndex ? 1 : 0.3, cursor: 'pointer', display: 'inline-block' }} />
            ))}
          </div>
        </div>
      )}

      <div className="page-px" style={{ paddingTop: '40px', paddingBottom: '64px' }}>

        {/* Header */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <a href="/#creative-lab" onClick={(e) => { e.preventDefault(); window.history.back() }}
            className="font-oswald"
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', opacity: 0.5 }}>
            ← Back
          </a>
          <h1 className="font-playfair" style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Interactions
          </h1>
        </div>

        <div style={{ borderTop: '2px solid #111008', marginBottom: '40px' }} />

        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '3.5fr 2fr', gap: '32px', alignItems: 'start', marginBottom: '40px' }}>
          <Thumbnail item={desktop1} onClick={() => setLightboxIndex(0)} />
          <div onClick={() => setLightboxIndex(1)} style={{ cursor: 'pointer', position: 'relative' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={desktop2.image} alt={desktop2.title} style={{ width: '100%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                  <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '15px solid rgba(255,255,255,0.9)', marginLeft: '3px' }} />
                </div>
              </div>
              </div>
            <div style={{ marginTop: '-90px', marginLeft:'90px' }}>
              <p className="font-old-standard" style={{ fontSize: '13px', fontWeight: 700, marginBottom: '2px' }}>{desktop2.title}</p>
              <p className="font-oswald" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>{desktop2.subtitle}</p>
            </div>              
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '32px', alignItems: 'start', marginBottom: '64px' }}>
          <Thumbnail item={mobile} onClick={() => setLightboxIndex(2)} />
            <div onClick={() => setLightboxIndex(3)} style={{ cursor: 'pointer', position: 'relative' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={dd.image} alt={dd.title} style={{ width: '100%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.25)' }}>
                  <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '15px solid rgba(255,255,255,0.9)', marginLeft: '3px' }} />
                </div>
              </div>
              </div>
            <div style={{ marginTop: '-40px', marginLeft:'40px' }}>
              <p className="font-old-standard" style={{ fontSize: '13px', fontWeight: 700, marginBottom: '2px' }}>{dd.title}</p>
              <p className="font-oswald" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>{dd.subtitle}</p>
            </div>              
          </div>
          <Thumbnail item={obsidian} onClick={() => setLightboxIndex(4)} />
        </div>

        {/* Footer quote */}
        <div style={{ borderTop: '1px solid #111008', paddingTop: '32px' }}>
          <div style={{ borderLeft: '2px solid #111008', paddingLeft: '16px' }}>
            <p className="font-eb-garamond" style={{ fontSize: '14px', fontStyle: 'italic', opacity: 0.7, lineHeight: 1.7 }}>
              "Interaction is the<br />invisible craft of design."
            </p>
          </div>
        </div>

      </div>
      <BackToTop />
    </div>
  )
}
