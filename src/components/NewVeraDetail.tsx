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


export default function NewVeraDetail() {
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
          <span>Vol. 1, No. 4</span>
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
              UI/UX Design · E-Commerce
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Vera – Luxury Vintage Fashion Platform
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
              { label: 'Timeline', value: '2 Weeks' },
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

          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr 1fr', borderBottom: '2px solid #111008' }}>

            {/* Left: Design To goals */}
            <div style={{ borderRight: '2px solid #111008', padding: '28px 28px 28px 0' }}>
              <p className="font-bebas font-regular" style={{ fontSize: '53px', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Design to</p>
              <div style={{ borderTop: '1px solid #111008', marginBottom: '20px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  <span style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, marginRight: '2px' }}>R</span>educe purchase hesitation for high-ticket items through AI virtual try-on, studies show virtual try-on reduces return rates by up to 30% in fashion e-commerce (Forrester Research).
                </p>
                <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  <span style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, marginRight: '2px' }}>B</span>uild trust at every touchpoint across a full purchase journey: browse — filter — try-on — checkout. Integrate sustainability messaging without making it the product, buying secondhand extends a garment's life and reduces demand for new production.
                </p>
                <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  <span style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, marginRight: '2px' }}>W</span>ho it's for: Luxury fashion buyers aged 25-45 who care about quality, provenance, and conscious consumption and expect a premium digital experience to match.
                </p>
              </div>
            </div>

            {/* Middle: Market context */}
            <div style={{ padding: '28px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="font-eb-garamond" style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '20px' }}>
                <span style={{ fontSize: '31px', fontWeight: 700, display: 'inline-block', verticalAlign: 'baseline', lineHeight: 1 }}>T</span>he global secondhand luxury market is projected to reach $60.55 billion by 2029 (Research and Markets).
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                Buyers exist. Demand is growing. But the experience of buying luxury vintage online still lags behind cluttered platforms, inconsistent quality, no way to try before buying something that costs $1,000–$10,000.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                VERA is a professionally curated luxury vintage platform designed to close that gap.
              </p>
            </div>

            {/* Right: Platform image */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/vera-home.png"
                alt="Vera platform overview"
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

          <div style={{ marginTop: '28px', border: '1px solid #111008' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #111008' }}>
              <div style={{ padding: '12px 20px', borderRight: '1px solid #111008' }}>
                <p className="font-eb-garamond" style={{ fontSize: '14px', fontWeight: 700 }}>Signal</p>
              </div>
              <div style={{ padding: '12px 20px' }}>
                <p className="font-eb-garamond" style={{ fontSize: '14px', fontWeight: 700 }}>What it means for design</p>
              </div>
            </div>

            {/* Data rows */}
            {[
              { signal: 'Luxury vintage items cost $1,000–$10,000+', design: 'Trust and authenticity must be visible at every step' },
              { signal: 'No physical inspection before purchase', design: 'Try-on and 360° view features' },
              { signal: 'Existing platforms feel like cluttered resale sites', design: 'Visual and editorial quality has to match the price tag' },
              { signal: 'Sustainability is often over-communicated', design: 'It should be present everywhere, but never the loudest thing on screen' },
            ].map(({ signal, design }, i, arr) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < arr.length - 1 ? '1px solid #111008' : 'none' }}>
                <div style={{ padding: '16px 20px', borderRight: '1px solid #111008' }}>
                  <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.7 }}>{signal}</p>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.7 }}>{design}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 03: Information Architecture ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>03</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Information Architectures</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '28px 0', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/vera-ia.png"
              alt="Vera information architecture"
              style={{ width: '60%', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Section 04: Solution and Key Design Screen ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Solution and Key Design Screen</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '32px' }}>
              The homepage covers the full brand argument in one scroll: hero, material filters, seasonal edit, most loved items, virtual try-on CTA, Why Vintage Matters, brand story, testimonials, recently viewed, newsletter. Collections are named and styled editorially, not by category and filters are specific to the collection type.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1fr', gap: '24px' }}>
              {[
                { label: 'Explore Our Collections', image: '/images/vera-collections.png' },
                { label: 'Evening & Occasion', image: '/images/vera-evening.png' },
              ].map(({ label, image }) => (
                <div key={label}>
                  <img src={image} alt={label} style={{ width: '100%', display: 'block', border: '1px solid #111008' }} />
                </div>
              ))}
            </div>

            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, margin: '32px 0' }}>
              Product detail & AI try-on — "360° View Enabled" and "Individually Sourced." Image viewer with rotate, zoom, and fullscreen controls plus 3 sub-view thumbnails. Product descriptor line follows a consistent format: Name → Type · Color · Era. The empty result state uses a placeholder with clear instructional copy rather than leaving it blank. Reduces confusion at a feature that's new to most users.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.835fr', gap: '24px' }}>
              {[
                { label: 'Product Detail', image: '/images/vera-product.png' },
                { label: 'Virtual Try-On', image: '/images/vera-ai.png' },
              ].map(({ label, image }) => (
                <div key={label}>
                  <img src={image} alt={label} style={{ width: '100%', display: 'block' }} />
                </div>
              ))}
            </div>

            <div style={{ margin: '32px 0' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '12px' }}>
                Cart & Check out — The provenance line stays in the cart. At this price point, the buyer needs to feel confident about what they're buying all the way to checkout, not just on the product page.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                The order summary sidebar stays visible through all 3 checkout steps. High-value purchases need constant reassurance, not a hidden total.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                { label: 'Your Cart', image: '/images/vera-cart.png' },
                { label: 'Checkout — Payment Method', image: '/images/vera-checkout.png' },
              ].map(({ label, image }) => (
                <div key={label}>
                  <img src={image} alt={label} style={{ width: '100%', display: 'block' }} />
                </div>
              ))}
            </div>

            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, margin: '32px 0' }}>
              Wishlist & Order — 4-column product grid matching the listing page card format, with Add to Cart and delete controls per item. Item count shown at the top right. The Total Spent stat is included deliberately.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/images/vera-frame.png" alt="Wishlist and orders" style={{ width: '60%', display: 'block' }} />
            </div>

            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, margin: '32px 0' }}>
              Account Profile — Left sidebar navigation (Profile, Orders, Wishlist, Addresses, Payments) with a main content panel. Two stat tiles (Total Orders, Wishlist Items) and a Recent Activity feed showing order and wishlist actions with timestamps.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/images/vera-account.png" alt="Account profile" style={{ width: '60%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 05: Final Design Outcome ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>05</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Final Design Outcome</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '24px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '24px' }}>
              VERA is a concept project built to full fidelity. No real user data exists but the design addresses documented friction points in the luxury e-commerce space.
            </p>

            <div style={{ border: '1px solid #111008' }}>
              {/* Header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #111008', backgroundColor: 'transparent' }}>
                {['Design feature', 'Problem it solves', 'Supporting data'].map((h, i) => (
                  <div key={h} style={{ padding: '12px 16px', borderRight: i < 2 ? '1px solid #111008' : 'none' }}>
                    <p className="font-eb-garamond" style={{ fontSize: '14px', fontWeight: 700 }}>{h}</p>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {[
                {
                  feature: 'AI Virtual Try-On',
                  problem: 'Purchase hesitation for high-ticket items',
                  data: 'Virtual try-on reduces return rates by 20–30% (Forrester Research)',
                },
                {
                  feature: '360° view + Individually Sourced badge',
                  problem: 'Authenticity anxiety without physical inspection',
                  data: 'Without physical inspection, trust must be built into every screen, authenticity is the primary purchase barrier for luxury vintage buyers',
                },
                {
                  feature: 'Provenance line in cart and PDP',
                  problem: 'Buyer confidence through checkout',
                  data: 'Maintaining provenance and item details through checkout reduces decision uncertainty at the highest-friction point of the purchase journey',
                },
                {
                  feature: 'Sustainability section mid-page',
                  problem: 'Conscious buyer motivation',
                  data: 'Nearly 50% of millennials and Gen Z are willing to pay more for environmentally friendly products (McKinsey, 2023)',
                },
              ].map(({ feature, problem, data }, i, arr) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < arr.length - 1 ? '1px solid #111008' : 'none' }}>
                  <div style={{ padding: '14px 16px', borderRight: '1px solid #111008' }}>
                    <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.7 }}>{feature}</p>
                  </div>
                  <div style={{ padding: '14px 16px', borderRight: '1px solid #111008' }}>
                    <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.7 }}>{problem}</p>
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.7 }}>{data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 06: If I Continue This Project ── */}
        <div style={{ marginBottom: '10px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>06</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>If I Continue This Project</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>
          <div style={{ padding: '28px 0 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              VERA covers the core purchase journey, but a real e-commerce platform goes deeper such as search results, empty states, error flows, mobile, onboarding. If I revisit this, that's where I'd go next.
            </p>
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
          <span>Vol. 1, No. 4 · Nang Atelier · All Rights Reserved</span>
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
            { title: 'Commission Horror Book Cover', image: '/images/proj-bc.png', href: '/projects/book-cover' },
            { title: 'Email Redesigns', image: '/images/proj-email.png', href: '/projects/email-redesign' },
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

      <NewWorkTogether />
      <FloatingAvailability />
      <BackToTop />
    </div>
  )
}
