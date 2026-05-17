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

export default function NewFabricDecodeDetail() {
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
          <span>Vol. 1, No. 3</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>
          <a href="https://fabric-decode.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '12px', right: '0', width: '72px', height: '72px', display: 'block', zIndex: 10 }}>
            <img
              src="/images/fd-viewlive.png"
              alt="View Live"
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
              Product Design · Sustainability Tool
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Fabric Decode – Sustainability Tool for What You Wear
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
              { label: 'Tools', value: 'Figma · Claude.AI' },
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

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', borderBottom: '2px solid #111008' }}>

            {/* Stats column */}
            <div style={{ borderRight: '2px solid #111008', padding: '28px 0', display: 'flex', flexDirection: 'column' }}>
              {[
                { value: '66%', label: 'FEWER SEARCHES TO IDENTIFY FABRICS IMPACT\n(based on an average of 3 separate searches)' },
                { value: '4 IN 1', label: 'outputs from a single label input' },
                { value: '36', label: 'data points across 9 fabricss x 4 dimensions' },
                { value: '1 CLICK', label: 'scoring methodology, on tab open' },
              ].map(({ value, label }, i, arr) => (
                <div key={label}>
                  <div style={{ padding: '20px 10px', textAlign: 'center' }}>
                    <p className="font-bebas" style={{ fontSize: '36px', lineHeight: 1, marginBottom: '4px' }}>{value}</p>
                    <p className="font-oswald" style={{ fontSize: '10px', color: '#0A0A0A', letterSpacing: '0.12em' }}>
                      {label.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < label.split('\n').length - 1 && <br />}</React.Fragment>)}
                    </p>
                  </div>
                  {i < arr.length - 1 && <div style={{ borderTop: '2px solid #111008', margin: '0 10px' }} />}
                </div>
              ))}
              <div style={{ borderTop: '2px solid #111008', margin: '0 10px' }} />
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.6, padding: '16px 12px', opacity: 0.6 }}>
                 Built in 3 days. 1 day design, 1 day development, 1 day of revisions as a deliberately scoped solo project. Designed in Figma, shipped with Claude Code.
              </p>
            </div>

            {/* Text column */}
            <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="font-old-standard" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>W</span>
                <span className="font-old-standard" style={{ fontSize: '15px', textTransform: 'uppercase', paddingBottom: '4px' }}>hat it is</span>
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 2, marginBottom: '20px' }}>
                A web app that decodes garment labels into eco scores, care guidance, and shareable result cards, built for conscious shoppers who want clarity without the research.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', marginBottom: '12px' }}>Three core features:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'A Label Checker where you enter the fabric name from a garment label and instantly get an eco score, a material breakdown, and care instructions.',
                  'And a downloadable result card from the label check, designed to be shareable and actually worth saving.',
                  'A Fabric Library with detail pages for 9 base materials, each with sustainability data, care guidance, and a score breakdown.',
                ].map((item, i) => (
                  <li key={i} className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 2, opacity: 0.8 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image column */}
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
              <img
                src="/images/fd-landing.png"
                alt="Fabric Decode landing screen"
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

          <div style={{ padding: '36px 0 0' }}>
            {/* The Core Problem */}
            <div style={{ marginBottom: '40px' }}>
              <p className="font-eb-garamond" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>T</span>
                <span className="font-barlow" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', paddingBottom: '4px' }}>he Core Problem</span>
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '14px' }}>
                A garment label that reads "70% cotton, 30% polyester" tells a shopper nothing useful on its own. Is cotton sustainable? Compared to what? How much water did it use? What about polyester, recyclable or not? Each question leads to a separate search, a different source, and often a contradictory answer.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                For a conscious shopper making a decision at a rack or a checkout page, that research friction is enough to give up. The information exists, it's just scattered, inconsistent, and takes longer than the purchase decision itself.
              </p>
            </div>

            {/* Design Question */}
            <div style={{ marginBottom: '36px' }}>
              <p className="font-eb-garamond" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>D</span>
                <span className="font-barlow" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', paddingBottom: '4px' }}>esign Question</span>
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
                How do you surface fabric sustainability data for someone with 30 seconds at a rack, not 30 minutes and multiple browser tabs?
              </p>
            </div>

            <div style={{ borderTop: '1px solid #111008' }} />
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
              src="/images/fd-ia.png"
              alt="Fabric Decode IA diagram"
              style={{ width: '60%', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Section 04: Solution and Design Process ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>04</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Solution and Design Process</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          {/* 3-col feature overview */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #111008' }}>
            {[
              {
                title: 'Fabric Library',
                subtitle: 'Get knowledge through library',
                body: '9 material cards with filter states all, natural, semi-synthetic, synthetic. Each links to a detail page with sustainability data, score breakdown, pros, cons, and care guidance.',
              },
              {
                title: 'Label Checker',
                subtitle: 'Check your clothes label',
                body: 'One input field. Returns eco score, score band, per-material breakdown, and care instructions. Designed for a single action, no setup, no account, no friction.',
              },
              {
                title: 'Downloadable Card',
                subtitle: 'Souvenir',
                body: 'Every label check generates a shareable result card. Not a screenshot, a designed output worth saving. It turns a one-time lookup into something you keep, like a receipt for a conscious decision.',
              },
            ].map(({ title, subtitle, body }, i) => (
              <div
                key={title}
                style={{ padding: '28px 24px 28px', borderRight: i < 2 ? '1px solid #111008' : 'none' }}
              >
                <p className="font-playfair font-bold" style={{ fontSize: '22px', textTransform: 'uppercase', marginBottom: '8px' }}>{title}</p>
                <p className="font-barlow" style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '14px', opacity: 0.6 }}>{subtitle}</p>
                <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.8 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Individual feature mockups */}
          <div>
            {/* Label Checker */}
            <div style={{ padding: '28px 0 32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                <img src="/images/fd-desktop-linen.png" alt="Label checker desktop" style={{ width: '100%', display: 'block' }} />
                <img src="/images/fd-mobile-linen.png" alt="Label checker mobile" style={{ width: '289px', display: 'block' }} />
              </div>
            </div>

            {/* Result Card */}
            <div style={{ padding: '28px 0 32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                <img src="/images/fd-desktop-result.png" alt="Result card desktop" style={{ width: '100%', display: 'block' }} />
                <img src="/images/fd-mobile-result.png" alt="Result card mobile" style={{ width: '288px', display: 'block' }} />
              </div>
            </div>

            {/* How Score Works */}
            <div style={{ padding: '28px 0 32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                <img src="/images/fd-desktop-howscore.png" alt="How score works desktop" style={{ width: '100%', display: 'block' }} />
                <img src="/images/fd-mobile-howscore.png" alt="How score works mobile" style={{ width: '288px', display: 'block' }} />
              </div>
            </div>

            {/* Fabric Library */}
            <div style={{ padding: '28px 0 32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
                <img src="/images/fd-desktop-library.png" alt="Fabric library desktop" style={{ width: '100%', display: 'block' }} />
                <img src="/images/fd-mobile-library.png" alt="Fabric library mobile" style={{ width: '288px', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 05: Scoring System ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>05</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scoring System</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '28px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '24px' }}>
              The eco score is calculated from a weighted formula built on publicly available environmental research. Four dimensions, each normalized to 100:
            </p>

            <div style={{ border: '1px solid #111008', padding: '32px 28px', marginBottom: '24px' }}>
              {[
                'Sustainability 35%',
                'Recyclability 25%',
                'Water usage 20%',
                'Chemical impact 20%',
                'Final score = weighted average across materials by label percentage. Example: 70% cotton (~60) + 30% polyester (~45) → Eco Score: 55 / 100 Moderate.',
              ].map((line, i) => (
                <p key={i} className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, margin: i < 4 ? '0 0 10px' : '20px 0 0' }}>
                  {line}
                </p>
              ))}
            </div>

            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85 }}>
              The methodology is surfaced directly in the UI. Clicking "How scores work" opens a modal that explains the four dimensions and the score bands, no external link, no fine print. Users can verify the logic in one click without opening a new tab. Transparency is built into the interaction, not bolted on as a footnote.
            </p>
          </div>
        </div>

        {/* ── How scores work — visual ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
            <img src="/images/fd-desktop-howscore.png" alt="How scores work desktop" style={{ width: '100%', display: 'block' }} />
            <img src="/images/fd-mobile-howscore.png" alt="How scores work mobile" style={{ width: '288px', display: 'block' }} />
          </div>
        </div>

        {/* ── Section 06: Outcome ── */}
        <div style={{ marginBottom: '48px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>06</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Outcome</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          <div style={{ padding: '28px 0' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '24px' }}>
              The eco score is calculated from a weighted formula built on publicly available environmental research. Four dimensions, each normalized to 100:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
              <img src="/images/fd-desktop-result.png" alt="Label check result desktop" style={{ width: '100%', display: 'block' }} />
              <img src="/images/fd-mobile-result.png" alt="Label check result mobile" style={{ width: '288px', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 07: Reflection ── */}
        <div style={{ marginBottom: '10px' }}>
          <div style={sectionHeaderStyle}>
            <span className="font-bebas" style={{ fontSize: '32px', opacity: 0.4 }}>07</span>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#F0EBE0', opacity: 0.3 }} />
            <span className="font-oswald" style={{ fontSize: '16px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Reflection</span>
            <div style={{ flex: 1, borderTop: '1px solid #F0EBE0', opacity: 0.3 }} />
          </div>

          {/* Left (paragraphs + key learnings) | Right (pull quote + image) */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '0', padding: '0 0 0', borderBottom: '1px solid #111008' }}>

            {/* Left area */}
            <div style={{ paddingRight: '32px', borderRight: '1px solid #111008' }}>
              {/* Two paragraphs side by side, no divider */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px', marginTop: '38px' }}>
                <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                  The scoring formula is built from publicly available environmental research, but it hasn't been validated by a textile scientist. The "How scores work" modal makes the methodology visible, adding cited sources per material would make it more defensible as the product grows.
                </p>
                <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                  The downloadable result card has the most room to grow. If this had a roadmap, the next step would be wardrobe tracking: saving multiple checks and building a personal eco score over time. The card already behaves like a souvenir, a collection feature is the natural next step.
                </p>
              </div>

              <div style={{ borderTop: '1px solid #111008', marginBottom: '20px' }} />

              {/* Key Learnings below */}
              <div>
                <p className="font-barlow" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px', opacity: 0.5 }}>Key Learnings</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px' }}>
                  {[
                    'Simplicity is a deliberate choice, not a limitation',
                    'Building what you design forces a different kind of honesty',
                    'A smaller, focused product beats a larger, unfocused one.',
                    'Transparency about methodology builds more trust than authority',
                  ].map((item) => (
                    <p key={item} className="font-eb-garamond" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      <span style={{ marginRight: '8px', opacity: 0.4 }}>—</span>{item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Pull quote + image */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop:'38px'}}>
              <img src="/images/fd-colon.png" alt="" style={{ width: '56px', display: 'block', margin: '0 auto 8px' }} />
              <p className="font-playfair font-medium" style={{ fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px', textAlign: 'center', padding: '0 16px' }}>
                Good design doesn't moralize. It informs, then gets out of the way.
              </p>
              <img src="/images/fd-app-mockup.png" alt="" style={{ width: '100%', display: 'block', opacity: 0.85 }} />
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
            padding: '12px 0',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span>Case Study — Nang Atelier Digital Platform</span>
          <span>Vol. 1, No. 3 · Nang Atelier · All Rights Reserved</span>
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
