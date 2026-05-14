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

export default function NewBookCoverDetail() {
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
          <span>Vol. 1, No. 5</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>
          <img
            src="/images/vera-prototype-badge.png"
            alt="See Prototype"
            className="spin-slow"
            style={{ position: 'absolute', top: '12px', right: '0', width: '72px', height: '72px' }}
          />

          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <a
              href="/#projects" onClick={(e) => { e.preventDefault(); window.history.back() }}
              className="font-oswald"
              style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', opacity: 0.5 }}
            >
              ← Back
            </a>
            <p
              className="font-oswald font-medium"
              style={{ fontSize: '16px', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center' }}
            >
              Visual Design · Book Cover Design
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Book Cover of the Wounded Spiral
          </h1>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
            <div style={{ flex: 1, borderTop: '2px solid #111008' }} />
            <img src="/images/divider-star.png" alt="" style={{ width: '12px', height: '12px', flexShrink: 0 }} />
            <div style={{ flex: 1, borderTop: '2px solid #111008' }} />
          </div>

          {/* Meta rows — 2 rows of 4 */}
          <div
            className="font-barlow"
            style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}
          >
            {[
              [
                { label: 'Client', value: 'Lee John Nottingham' },
                { label: 'Genre', value: 'Surrealist Fiction' },
                { label: 'Type', value: 'Book Cover' },
                { label: 'Format', value: 'A5 Paperback (5.83 × 8.27 in)' },
              ],
              [
                { label: 'Role', value: 'Visual/Graphic Designer' },
                { label: 'Timeline', value: '2 Weeks' },
                { label: 'Tools', value: 'Figma' },
                { label: 'Deliverables', value: 'Full Wrap' },
              ],
            ].map((row, ri) => (
              <div key={ri} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: ri === 0 ? '6px' : '0' }}>
                {row.map(({ label, value }, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && <span style={{ margin: '0 24px', opacity: 0.3 }}>|</span>}
                    <span>
                      <span style={{ opacity: 0.5 }}>{label}: </span>
                      <span style={{ fontWeight: 600 }}>{value}</span>
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '2px solid #111008', margin: '25px 0' }} />

        {/* ── Section 01: Overview ── */}
        <div style={{ marginBottom: '48px', marginTop: '40px'}}>
          <div style={sectionHeaderStyle }>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>01</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Overview</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' , borderBottom: '2px solid #111008'}}>

            {/* Left: text */}
            <div style={{ padding: '28px 28px 28px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '20px' }}>
                <span style={{ fontSize: '31px', fontWeight: 700, display: 'inline-block', verticalAlign: 'baseline', lineHeight: 1 }}>T</span>he client provided an original oil painting as the primary visual and an AI-generated cover as a directional reference. His brief: dark, painterly, literary-surreal. Restrained, not pulp horror, not gothic. The painting stays the centrepiece.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                The challenge: the painting was never designed to be a book cover. Dense detail, no clean negative space, and elements that work in a painting but not on a cover. Making it readable without altering its character was the core design problem.
              </p>
            </div>

            {/* Middle: original painting */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px', opacity: 0.5 }}>Original Painting</p>
              <img src="/images/bc-painting.jpg" alt="Original oil painting" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* Right: AI generated cover */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px', opacity: 0.5 }}>AI Generated Cover</p>
              <img src="/images/bc-ai.jpg" alt="AI generated cover reference" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 02: Research ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>02</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Research</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              Research focused on published literary and surrealist fiction covers of how designers handle painterly source material and place typography over complex backgrounds. References from Pinterest, YouTube, and Google. Key takeaway: let the painting lead, keep typography minimal, use tarnished gold to signal literary weight.
            </p>
          </div>
        </div>

        {/* ── Section 03: Concept Development ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>03</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Concept Development</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "The painting's two figures were split across the wrap, masked figure on the front, figure facing away on the back. The background was repositioned on each side to create space for typography at the top.",
              "Font color was the hardest single decision. The painting has no dominant tone. After multiple tests, a bold mustard yellow was selected — with drop shadow, darker base, lighter stroke, and a noise effect vector that causes the painting's colors to reflect into the letterforms. The title feels embedded, not placed.",
              "Three fonts were tested at the client's request for Baskerville, Cinzel, and Trajan Pro. He chose Cinzel Bold and Baskerville.",
              "Two creative directions were presented: Version 1 stripped everything back to painting and type, clean, restrained, the stronger design. Version 2 added an ornate gold border worked as a concept but pushed toward decorative, softening the atmosphere the brief called for.",
            ].map((text, i) => (
              <p key={i} className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>{text}</p>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', paddingBottom: '16px' }}>
            {[
              { label: 'Version 1', image: '/images/bc-v2.png' },
              { label: 'Version 2', image: '/images/bc-v1.png' },
            ].map(({ label, image }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={image} alt={label} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 04: Final Design ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Final Design</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>Two versions delivered for the final print decision.</p>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              BookCover2 <em>(client's current choice)</em>: Closest to the AI reference. Grass separated and repositioned at the back with progressive blur and gradient for blurb legibility. Figure scaled down for depth.
            </p>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              BookCover1 <em>(recommended)</em>: Aeroplane and spacecraft removed, blurry in the original and unrelated to the book's tone. Without them, the masked figure dominates and the background connects seamlessly across the spine as one unified scene. Stronger hierarchy on the fake cover and in typography using Cinzel Decorative and Baskerville.
            </p>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>The client agreed to print both and decide on paper.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <img src="/images/bc-final2.png" alt="Final design version 1" style={{ width: '100%', display: 'block' }} />
            <img src="/images/bc-final1.png" alt="Final design version 2" style={{ width: '100%', display: 'block' }} />
            <img src="/images/bc-mockup-table.png" alt="Book mockup on table" style={{ width: '100%', display: 'block' }} />
            <img src="/images/bc-mockup-stacked.png" alt="Stacked book mockup" style={{ width: '100%', display: 'block' }} />
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

          <div style={{ padding: '24px 0 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              {[
                {
                  title: 'Real user, sharper eye',
                  body: 'Finding this site as a genuine user meant I had authentic frustrations to solve, not invented personas. The currency error and the Dutch widget stood out because I was actually trying to use the site.',
                },
                {
                  title: 'Sequencing is a UX decision',
                  body: "Moving the testimonial above the CTAs on the catering page wasn't aesthetic. It was a conversion sequencing fix, trust before the ask. That distinction is exactly the kind of thinking I want to be designing for.",
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ border: '1px solid #111008', padding: '24px' }}>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>{title}</p>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8 }}>{body}</p>
                </div>
              ))}
            </div>
            <div style={{ border: '1px solid #111008', padding: '24px', marginBottom: '32px' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Content before design</p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8 }}>
                The job listings had no descriptions and two buttons that opened identical emails. I removed them rather than designing around empty content. A polished UI on top of a broken experience is still broken.
              </p>
            </div>
          </div>
        </div>

        {/* ── Newspaper footer strip ── */}
        <div className="font-oswald" style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111008', padding: '12px 0', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          <span>Case Study — Nang Atelier Digital Platform</span>
          <span>Vol. 1, No. 5 · Nang Atelier · All Rights Reserved</span>
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
            { title: 'Email Redesigns', image: '/images/proj-email.png', href: '/projects/email-redesign' },
            { title: 'Karotte Collection Branding', image: '/images/proj-karotte.png', href: '/projects/karotte' },
          ].map(({ title, image, href }) => (
            <a key={title} href={href !== '#' ? href : undefined} style={{ textDecoration: 'none', color: 'inherit', cursor: href !== '#' ? 'pointer' : 'default', border: '1px solid #111008', display: 'block', flexShrink: 0, width: '280px' }}>
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

      <NewWorkTogether />
      <FloatingAvailability />
      <BackToTop />
    </div>
  )
}
