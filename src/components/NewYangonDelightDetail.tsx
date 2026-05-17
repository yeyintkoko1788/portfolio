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

const beforeAfterLabel = (type: 'before' | 'after'): React.CSSProperties => ({
  fontSize: '12px',
  textTransform: 'uppercase',
  padding: '8px 14px',
  backgroundColor: type === 'before' ? '#111008' : '#111008',
  color: '#F0EBE0',
  display: 'block',
  width: '100%',
  marginBottom: '8px',
  textAlign: 'center',
})

import React from 'react'

export default function NewYangonDelightDetail() {
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
          <span>Vol. 1, No. 1</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>
          <a href="https://www.figma.com/proto/JYpXEvfbXvKEAGZoz5x3H9/Projects?node-id=2961-14950&p=f&viewport=974%2C291%2C0.07&t=Ifik9k9Nc7uAHPxK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2409%3A8093&show-proto-sidebar=1&page-id=716%3A2587" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '12px', right: '0', width: '72px', height: '72px', display: 'block', zIndex: 10 }}>
            <img
              src="/images/yd-prototype-badge.png"
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
              UI/UX Design · Restaurant Digital Experience
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Yangon Delight – Restaurant Website Redesign
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
              { label: 'Timeline', value: '3 Days' },
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
          {/* Section header */}
          <div style={sectionHeaderStyle}>
            <span className="font-bebas font-regular" style={{ fontSize: '32px', opacity: 0.4 }}>01</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald font-regular" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Overview</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          {/* 3-col: stats | text | image */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '230px 1fr 1fr',
              borderBottom: '2px solid #111008',
            }}
          >
            {/* Stats column */}
            <div style={{ borderRight: '2px solid #111008', padding: '28px 0', display: 'flex', flexDirection: 'column' }}>
              {[
                { value: '1', label: 'click to reach any core action' },
                { value: '3', label: 'modal flows introduced' },
                { value: '1', label: 'account dashboard built' },
                { value: '6', label: 'pages redesigned' },
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
                <span style={{ fontSize: '31px', fontWeight: 700, display: 'inline-block', verticalAlign: 'baseline', lineHeight: 1 }}>A</span>n award-winning restaurant with a website that worked against it.                 Yangon Delight is Amsterdam-Oost's pioneering Burmese restaurant, rated 8+ by Het Parool and listed among the city's top 10. Despite that reputation, the website buried its three most important actions such as Order Online, Catering, and Reserve inside a dropdown alongside a blog and community pages.
                                There was no account management, no activity tracking, and no clear hierarchy guiding visitors toward any action. I redesigned the 6 core pages and 3 modal flows that serve the restaurant's primary purpose: get people to eat, order, or reserve.              </p>
            </div>

            {/* Image column */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/yd-overview.png"
                alt="Yangon Delight screens overview"
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
              Three stood out as the root causes of every broken flow.
            </p>

            {/* 3 main problem cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {[
                { num: '01', title: 'Broken navigation hierarchy' },
                { num: '02', title: 'Unstable, actionless hero' },
                { num: '03', title: 'Zero account functionality' },
              ].map(({ num, title }) => (
                <div key={num} style={{ border: '1px solid #111008', padding: '24px' }}>
                  <p className="font-bebas" style={{ fontSize: '36px', lineHeight: 1, marginBottom: '12px', opacity: 0.5 }}>{num}</p>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.5 }}>{title}</p>
                </div>
              ))}
            </div>

            {/* Additional issues */}
            <p className="font-eb-garamond" style={{ fontSize: '13px', fontWeight: 700, marginBottom: '16px' }}>Additional issues discovered</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { title: 'Catering page', body: 'Tier prices mismatched across pages. Social proof sat below the inquiry form after the conversion point.' },
                { title: 'Contact & job listings', body: '"Learn More" and "Apply Now" both opened identical emails, no description, no context.' },
                { title: 'Menu page', body: 'No category filters, no search, no back-to-top. A single unbroken scroll through the full menu with no way to navigate by dish type.' },
                { title: 'Reservation flow', body: 'The booking widget was a third-party Zenchef embed displayed in Dutch, a language inconsistency on an otherwise English site.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ border: '1px solid #111008', padding: '24px' }}>
                  <p className="font-eb-garamond" style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px' }}>{title}</p>
                  <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.75, opacity: 0.75 }}>{body}</p>
                </div>
              ))}
            </div>
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
              src="/images/yd-ia.png"
              alt="Yangon Delight IA diagram"
              style={{ width: '60%', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Section 04: Before & After ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SOLUTION AND DESIGN PROCESS</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div>

            {/* Navigation */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', marginBottom: '8px', textTransform:'uppercase'}}>Navigation - Core Actions Surfaced, Secondary Content Stays Put</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>The original nav hid Order Online, Catering, and Reserve inside a More dropdown alongside unrelated content. The redesign surfaces every core restaurant action at the top level. Secondary content which are Community & Impact, Rewards, Blog stay accessible under More, where it belongs.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={beforeAfterLabel('before')}>BEFORE — CORE ACTIONS HIDDEN IN DROPDOWN</div>
                  <img src="/images/yd-navog.png" alt="Original navigation" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
                <div>
                  <div style={beforeAfterLabel('after')}>AFTER — ALL CORE ACTIONS SURFACED</div>
                  <img src="/images/yd-navre.png" alt="Redesigned navigation" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
              </div>
            </div>

            {/* Menu */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Menu Page — From bare scroll to visual-first browsing</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>The original menu had no filters, no search, and no way to navigate by category or dietary need. The redesign makes finding food feel like browsing, not reading a document.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={beforeAfterLabel('before')}>Before — single scroll, no navigation</div>
                  <img src="/images/yd-menuog.png" alt="Original menu" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
                <div>
                  <div style={beforeAfterLabel('after')}>After — filters, search, tabs, pricing</div>
                  <img src="/images/yd-menure.png" alt="Redesigned menu" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
              </div>
            </div>

            {/* Catering */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Catering Page — Structured around 3 user questions</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>Every catering visitor needs to answer three questions before they'll inquire: what does it cost, what's included, and what do I do next. The original answered none of them clearly.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={beforeAfterLabel('before')}>Before — price mismatch, hard to read</div>
                  <img src="/images/yd-cateringog.png" alt="Original catering" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
                <div>
                  <div style={beforeAfterLabel('after')}>After — correct pricing, easy navigation</div>
                  <img src="/images/yd-cateringre.png" alt="Redesigned catering" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
              </div>
            </div>

            {/* Reservation */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Reservation — Dutch third-party widget replaced with on-brand modal</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>The original booking flow used a Zenchef embed displayed in Dutch on an English site with third-party branding and no connection to the design system. The redesign replaces it with a 6-field modal overlay that keeps users in context.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={beforeAfterLabel('before')}>Before — Dutch embed, third-party branding</div>
                  <img src="/images/yd-reserveog.png" alt="Original reservation" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
                <div>
                  <div style={beforeAfterLabel('after')}>After — 6-field modal, on-brand</div>
                  <img src="/images/yd-reservere.png" alt="Redesigned reservation" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>Contact Page — Broken template fixed, layout rebuilt</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>The original shipped with job listings where both buttons send straight to email for the application. The redesign removes the job listings entirely, and introduces a form + map layout that answers where to reach us and where to find us in the same view.</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={beforeAfterLabel('before')}>Before — broken layout, job listings</div>
                  <img src="/images/yd-contactog.png" alt="Original contact" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
                <div>
                  <div style={beforeAfterLabel('after')}>After — form + map, clear hierarchy</div>
                  <img src="/images/yd-contactre.png" alt="Redesigned contact" style={{ width: '100%', display: 'block', border: '1px solid #111008', borderTop: 'none' }} />
                </div>
              </div>
            </div>

            {/* my activity */}
            <div style={{ padding: '28px 0 32px' }}>
              <p className="font-playfair font-medium" style={{ fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px' }}>My Activity — 0→1 Feature</p>
              <h3 className="font-playfair font-regular" style={{ fontSize: '16px', marginBottom: '24px' }}>This feature didn't exist in the original site. Returning customers had zero way to view or manage their bookings. The redesign introduces a full dashboard with booking history, live status tracking, and state-aware actions.</h3>
              <div style={{ paddingTop: '28px' }}>
                <img
                  src="/images/yd-activity.png"
                  alt="My Activity dashboard"
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              {[
                {
                  title: 'Real user, sharper eye',
                  body: 'Finding this site as a genuine user meant I had authentic frustrations to solve, not invented personas. The currency error and the Dutch widget stood out because I was actually trying to use the site.',
                },
                {
                  title: 'Navigation is a trust signal',
                  body: "A restaurant website that hides Order, Catering, and Reserve inside a dropdown doesn't understand why people visit. The redesign puts every core action one click away, not as a minimalism exercise, but as basic respect for the user's intent.",
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ border: '1px solid #111008', padding: '24px' }}>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>{title}</p>
                  <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8 }}>{body}</p>
                </div>
              ))}
            </div>

            <div style={{ border: '1px solid #111008', padding: '24px' }}>
              <p className="font-eb-garamond" style={{ fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}>Content before design</p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.75, opacity: 0.8 }}>
The job listings had no descriptions and two buttons that opened identical emails. I removed them rather than designing around empty content. A polished UI on top of a broken experience is still broken.              </p>
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
          <span>Vol. 1, No. 1 · Nang Atelier · All Rights Reserved</span>
        </div>

      </div>

      {/* ── More Projects ── */}
      <div className="page-px" style={{ paddingBottom: '48px' }}>
        {/* Header */}
        <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>More Projects</span>
          <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
        </div>

        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          {[
            { title: 'Adidas Korea × Enhypen Campaign', image: '/images/proj-lookbook.png', href: '/projects/adidas-korea' },
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
