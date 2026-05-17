import React from 'react'
import NewWorkTogether from './NewWorkTogether'
import FloatingAvailability from './FloatingAvailability'
import BackToTop from './BackToTop'

const sectionHeaderStyle: React.CSSProperties = {
  backgroundColor: '#111008',
  color: '#F0EBE0',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}

export default function NewKarotteDetail() {
  return (
    <div style={{ backgroundColor: '#F0E8D4', color: '#111008', minHeight: '100vh' }}>
      <div className="page-px">

        {/* ── Newspaper dateline strip ── */}
        <div
          className="font-oswald"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
            borderBottom: '1px solid #111008',
            padding: '8px 0',
            fontSize: '10px',
            letterSpacing: '0.18em',
          }}
        >
          <span>Vol. 1, No. 7</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>

          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <a
              href="/#projects" onClick={(e) => { e.preventDefault(); window.history.back() }}
              className="font-oswald"
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#111008',
                opacity: 0.5,
              }}
            >
              ← Back
            </a>
            <p
              className="font-oswald font-medium"
              style={{ fontSize: '16px', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center' }}
            >
              Visual Design · Brand Identity Design
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Karotte Collection – Brand Identity Design
          </h1>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
            <div style={{ flex: 1, borderTop: '2px solid #111008' }} />
            <img src="/images/divider-star.png" alt="" style={{ width: '12px', height: '12px', flexShrink: 0 }} />
            <div style={{ flex: 1, borderTop: '2px solid #111008' }} />
          </div>

          {/* Meta row */}
          <div
            className="font-barlow"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}
          >
            {[
              { label: 'Role', value: 'Brand Designer' },
              { label: 'Timeline', value: '5 Days' },
              { label: 'Tools', value: 'Figma' },
            ].map(({ label, value }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span style={{ margin: '0 40px', opacity: 0.3 }}>|</span>}
                <span>
                  <span style={{ opacity: 0.5 }}>{label}: </span>
                  <span style={{ fontWeight: 600 }}>{value}</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '2px solid #111008', margin: '25px 0' }} />

        {/* ── Section 01: Overview ── */}
        <div style={{ marginBottom: '48px', marginTop: '40px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>01</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Overview</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '2px solid #111008' }}>

            {/* Left: text */}
            <div style={{ padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '20px' }}>
                <span style={{ fontSize: '31px', fontWeight: 700, display: 'inline-block', verticalAlign: 'baseline', lineHeight: 1 }}>K</span>arotte Collection was a slow-fashion linen brand I founded in Myanmar. I spent 5 months building it from the ground up before the first garment went on sale, sourcing Burmese linen, sketching every design, coordinating production with a seamstress, packaging every order by hand, and running the Facebook page solo.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '20px' }}>
                The brand launched with 5 garments in stock and ran for a year across 2020–2021, operating on pre-order for additional sizes and turning a real profit with no prior knowledge of margin or pricing strategy.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                It ended when it had to. I left Myanmar.
              </p>
            </div>

            {/* Middle: redesigned logo */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px'}}>Redesigned Logo & Wordmark</p>
              <img src="/images/karotte-frame.png" alt="Redesigned Karotte logo" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Right: original logo */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px'}}>Original Bunny Logo</p>
              <img src="/images/karotte-brand-foundation.png" alt="Original Karotte bunny logo" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 02: Problem ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>02</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Problem</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '28px' }}>
              The original identity was built entirely on instinct. The logo, a hand-drawn rabbit clutching a carrot was sincere but inconsistent with the quiet, elevated feeling the clothes were meant to carry. The color palette mixed earthy tones, black, and red without a unifying rationale. There was no type system, no color system, nothing that could hold together across touchpoints or scale with the brand.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/images/karotte-og.png" alt="Karotte original" style={{ width: '60%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 03: Visual Direction & Logo System ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>03</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Visual Direction & Logo System</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '32px' }}>
              Two phrases anchored the direction: Made With Love and Design With Intention. The wordmark uses Space Grotesk, geometric with enough warmth to avoid feeling cold. The key decision was replacing the O in KAROTTE with a carrot glyph. Not an illustration beside the name, but embedded inside it. The carrot is the letter.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '0.99fr 0.81fr 1.4fr', gap: '20px' }}>
              <img src="/images/karotte-moodboard.png" alt="Visual Direction" style={{ width: '100%', display: 'block' }} />
              <img src="/images/karotte-group.png" alt="Logo & Typography" style={{ width: '100%', display: 'block' }} />
              <img src="/images/karotte-colors.png" alt="Color System" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 04: Brand Application & Care Card ── */}
        <div style={{ marginBottom: '10px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Brand Application & Care Card</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '16px' }}>
              The identity was applied across woven garment labels, hang tags, tote bags, and packaging. The woven label small, stitched directly into linen is where the logo had to perform at its smallest. It holds.
            </p>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '32px' }}>
              The care card is the most personal touchpoint in the system. The front carries the logo, the brand tagline, and the origin: Made in Myanmar. Designed with intention. The back has garment care instructions and a QR code with the line: Scan to discover the story behind your piece.
            </p>

            <div style={{ display: 'grid', width: '80%', gridTemplateColumns: '0.543fr 1fr', gap: '24px', margin: '0 auto' }}>
              {[
                { label: 'Brand Application & Visual System', src: '/images/karotte-brand-usage.png' },
                { label: 'Brand & Care Card', src: '/images/karotte-care-card.png' },
              ].map(({ label, src }) => (
                <div key={label}>
                  <img src={src} alt={label} style={{ width: '100%', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 05: Reflection ── */}
        <div style={{ marginBottom: '10px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>05</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Reflection</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '28px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '16px' }}>
              I built this brand before I understood what branding was. I chose fabrics by instinct, sketched garments I couldn't sew myself, modeled the clothes in my own backyard, and shipped every order by hand. It was real but imperfect, personal, and entirely mine.
            </p>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              This redesign wasn't about erasing that. It was about giving it the visual language it always deserved.
            </p>
          </div>
        </div>

        {/* ── Newspaper footer strip ── */}
        <div className="font-oswald" style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111008', padding: '12px 0', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          <span>Case Study — Nang Atelier Digital Platform</span>
          <span>Vol. 1, No. 7 · Nang Atelier · All Rights Reserved</span>
        </div>

      </div>

      {/* ── More Projects ── */}
      <div className="page-px" style={{ paddingBottom: '48px' }}>
        <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>More Projects</span>
          <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
        </div>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          {[
            { title: 'Yangon Delight Restaurant Website', image: '/images/proj-yd.png', href: '/projects/yangon-delight' },
            { title: 'Adidas Korea × Enhypen Campaign', image: '/images/proj-lookbook.png', href: '/projects/adidas-korea' },
            { title: 'Fabric Decode Sustainability Tool', image: '/images/proj-fabric.png', href: '/projects/fabric-decode' },
            { title: 'Vera Vintage Fashion Platform', image: '/images/proj-vera.png', href: '/projects/vera' },
            { title: 'Commission Horror Book Cover', image: '/images/proj-bc.png', href: '/projects/book-cover' },
            { title: 'Email Marketing Redesigns', image: '/images/proj-email.png', href: '/projects/email-redesign' },
          ].map(({ title, image, href }) => (
            <a key={title} href={href} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #111008', display: 'block', flexShrink: 0, width: '280px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '12px 16px', minHeight: '65px', display: 'flex', alignItems: 'center' }}>
                <p className="font-playfair font-bold" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#F0E8D4', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <img src={image} alt={title} style={{ width: '100%', objectFit: 'contain', maxHeight: '180px', display: 'block' }} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="page-px" style={{ paddingBottom: '48px', display: 'flex', justifyContent: 'center' }}>
        <a
          href="/"
          className="font-oswald"
          style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', border: '1px solid #111008', padding: '10px 32px', display: 'inline-block' }}
        >
          ← Home
        </a>
      </div>
      <NewWorkTogether />
      <FloatingAvailability />
      <BackToTop />
    </div>
  )
}
