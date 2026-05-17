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

export default function NewAdidasDetail() {
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
          <span>Vol. 1, No. 2</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>
          <a href="https://www.figma.com/proto/JYpXEvfbXvKEAGZoz5x3H9/Projects?node-id=70-804&p=f&viewport=560%2C472%2C0.08&t=gi3CJjkE8rFsQbLF-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4331" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '12px', right: '0', width: '72px', height: '72px', display: 'block', zIndex: 10 }}>
            <img
              src="/images/ad-prototype-badge.png"
              alt="See Prototype"
              className="spin-slow"
              style={{ width: '72px', height: '72px', display: 'block' }}
            />
          </a>

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
              UI/UX Design · Navigation Improvement
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Adidas Korea Mobile Web – Sunghoon × Taekwondo Campaign Navigation
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
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {[
              { label: 'Role', value: 'UI/UX Designer' },
              { label: 'Timeline', value: '2 Days' },
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr 1fr',
              borderBottom: '2px solid #111008',
            }}
          >
            {/* Stats column */}
            <div style={{ borderRight: '2px solid #111008', padding: '28px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {[
                { value: '100%', label: 'navigation completion' },
                { value: '4', label: 'navigation paths added' },
                { value: '0', label: 'new content required' },
              ].map(({ value, label }, i, arr) => (
                <div key={label}>
                  <div style={{ padding: '20px 10px', textAlign: 'center' }}>
                    <p className="font-bebas" style={{ fontSize: '36px', lineHeight: 1, marginBottom: '4px' }}>{value}</p>
                    <p className="font-oswald" style={{ fontSize: '10px', color: '#0A0A0A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</p>
                  </div>
                  {i < arr.length - 1 && <div style={{ borderTop: '2px solid #111008', margin: '0 10px' }} />}
                </div>
              ))}
            </div>

            {/* Text column */}
            <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 2, marginBottom: '20px' }}>
                <span style={{ fontSize: '31px', fontWeight: 700, display: 'inline-block', verticalAlign: 'baseline', lineHeight: 1 }}>A</span>didas Korea ran a collaboration with ENHYPEN's Sunghoon centered on the Taekwondo series. The campaign included a fully built lookbook that remains live today. Despite the campaign's scale, the lookbook had 0 navigation paths from the homepage. Searching "Lookbook" or "Sunghoon" returned 0 results. This redesign adds 4 targeted fixes are a Campaign menu entry, a submenu listing, a homepage feature card, and a direct lookbook CTA, increasing navigation access from 0 to 100%.
              </p>
            </div>

            {/* Image column */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/ad-screens-12.png"
                alt="Adidas Korea campaign screens"
                style={{ width: '100%', display: 'block' }}
              />
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
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
              A sold-out campaign with 1.2M+ engaged fans — and no way to reach it from the website.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {[
                { num: '01', title: 'Zero navigation paths to the lookbook from the homepage' },
                { num: '02', title: 'Site search returned 0 results for "Lookbook" or "Sunghoon"' },
                { num: '03', title: 'Campaign content was live but effectively invisible to users' },
              ].map(({ num, title }) => (
                <div key={num} style={{ border: '1px solid #111008', padding: '24px' }}>
                  <p className="font-bebas" style={{ fontSize: '36px', lineHeight: 1, marginBottom: '12px', opacity: 0.5 }}>{num}</p>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.5 }}>{title}</p>
                </div>
              ))}
            </div>

            <img
              src="/images/ad-problem.png"
              alt="Adidas Korea problem diagram"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Section 03: Information Architecture ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>03</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Information Architecture</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '28px 0', display: 'flex', justifyContent: 'center'}}>
            <img
              src="/images/ad-ia.png"
              alt="Adidas Korea IA diagram"
              style={{ width: '60%', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Section 04: Solution ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Solution and Design Process</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div>
            {/* Fix 1 + Fix 2 */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Fix 1 & 2 — Campaign Menu Entry + Columns Listing</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>Adding a dedicated Campaign entry to the main navigation and surfacing the lookbook in a columns-style listing gives the content a discoverable home without any new pages.</h3>
              <img
                src="/images/ad-screens-12.png"
                alt="Campaign menu entry and columns listing"
                style={{ width: '100%', display: 'block', border: '1px solid #111008' }}
              />
            </div>

            {/* Fix 3 */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Fix 3 — Homepage Feature</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>A homepage feature block surfaces the Sunghoon × Taekwondo campaign directly on the landing page, converting the most-visited page into the campaign's primary entry point.</h3>
              <img
                src="/images/ad-screen-3.png"
                alt="Homepage campaign feature"
                style={{ width: '100%', display: 'block', border: '1px solid #111008' }}
              />
            </div>

            {/* Fix 4 */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Fix 4 — Direct Lookbook CTA</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>A direct CTA on the product and shop pages links users to the campaign lookbook, closing the loop between purchase intent and campaign content.</h3>
              <div style={{ paddingTop: '28px', marginBottom: '38px' }}>
                <img
                  src="/images/ad-screen-4.png"
                  alt="Lookbook CTA"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>Each look is directly connected to shoppable products, allowing users to move from inspiration to purchase.</h3>
              <div style={{ paddingTop: '28px' }}>
                <img
                  src="/images/ad-shop.png"
                  alt="Shop page with CTA"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
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

          <div style={{ padding: '24px 0 0' }}>
            <div>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8 }}>
                  Navigation gaps are harder to catch than broken flows because nothing visibly fails. Working within an existing brand system meant the fix had to be invisible, additions that felt like they were always there.            
              </p>
            </div>
          </div>
        </div>

        {/* ── Newspaper footer strip ── */}
        <div
          className="font-oswald"
          style={{
            marginBottom: '48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #111008',
            padding: '12px 0',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span>Case Study — Nang Atelier Digital Platform</span>
          <span>Vol. 1, No. 2 · Nang Atelier · All Rights Reserved</span>
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
            { title: 'Fabric Decode Sustainability Tool', image: '/images/proj-fabric.png', href: '/projects/fabric-decode' },
            { title: 'Vera Vintage Fashion Platform', image: '/images/proj-vera.png', href: '/projects/vera' },
            { title: 'Commission Horror Book Cover', image: '/images/proj-bc.png', href: '/projects/book-cover' },
            { title: 'Email Marketing Redesigns', image: '/images/proj-email.png', href: '/projects/email-redesign' },
            { title: 'Karotte Collection Branding', image: '/images/proj-karotte.png', href: '/projects/karotte' },
          ].map(({ title, image, href }) => (
            <a
              key={title}
              href={href !== '#' ? href : undefined}
              style={{ textDecoration: 'none', color: 'inherit', cursor: href !== '#' ? 'pointer' : 'default', border: '1px solid #111008', display: 'block', flexShrink: 0, width: '280px' }}
            >
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
