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

export default function NewEmailDetail() {
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
          <span>Vol. 1, No. 6</span>
          <span style={{ textAlign: 'center' }}>nang atelier</span>
          <span style={{ textAlign: 'right' }}>WEDNESDAY MAY 4, 2026</span>
        </div>

        {/* ── Project header ── */}
        <div style={{ padding: '32px 0 0', position: 'relative' }}>

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
              Visual Design · Email Marketing Design
            </p>
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: '52px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-0.5px', textAlign: 'center', marginTop: '20px' }}
          >
            Email Redesigns – Vivaia, Tripadvisor, Nike, Glossier
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
              { label: 'Role', value: 'Visual Designer' },
              { label: 'Type', value: 'Spec Works' },
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

          <div style={{ padding: '28px 0 24px' }}>
            <p className="font-eb-garamond" style={{ fontSize: '15px', lineHeight: 1.85, marginBottom: '32px' }}>
              I selected four brand emails where I spotted specific problems such as unfocused campaigns, wrong emotional tone, or missed conversion opportunities. For each one I identified what was broken, made deliberate decisions about what to change, and kept what was already working and a different editorial bet on the same brief. These aren't full redesigns for the sake of it, each change has a reason.
            </p>

            {/* Campaign tags + badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', maxWidth: '680px' }}>
                {[
                  { label: "Vivaia - Women's Day Campaign", id: 'section-vivaia' },
                  { label: 'Tripadvisor - Storybook Castles', id: 'section-tripadvisor' },
                  { label: 'Glossier - You Collection', id: 'section-glossier' },
                  { label: 'Nike - Welcome Email', id: 'section-nike' },
                ].map(({ label, id }) => (
                  <button
                    key={id}
                    className="font-barlow"
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#111008'; (e.currentTarget as HTMLButtonElement).style.color = '#F0EBE0' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#111008' }}
                    style={{ border: '1px solid #111008', padding: '10px 20px', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: '999px', display: 'inline-block', backgroundColor: 'transparent', color: '#111008', cursor: 'pointer', transition: 'background-color 0.2s, color 0.2s' }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Arrow + spinning badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginBottom:'100px'}}>
                <img src="/images/email-arrow.png" alt="" style={{ width: '80px', display: 'block' }} />
                <img src="/images/vera-prototype-badge.png" alt="" className="spin-slow" style={{ width: '80px', height: '80px', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 02: Vivaia ── */}
        <div id="section-vivaia" style={{ marginBottom: '48px' }}>
          {/* Campaign label */}
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px', marginBottom: '0' }}>
            <span className="font-oswald" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Vivaia – Women's Day Campaign</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
            {/* Left column */}
            <div style={{ borderRight: '1px solid #111008', padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfare font-regular " style={{ fontSize: '15px',  textTransform: 'uppercase' }}>Problem</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
                The original Vivaia email used Women's Day as a banner and then immediately abandoned the theme. Below the hero it became a generic sale email, ballot flats at 56% off, product grids, unrelated promotions. The campaign promise wasn't kept. Users who opened because of Women's Day got a discount catalogue instead.
              </p>

              <div style={{ borderTop: '1px solid #111008', margin: '0 -24px', marginBottom: '24px' }} />

              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfare font-regular " style={{ fontSize: '15px',  textTransform: 'uppercase' }}>What I Kept</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The product category browsing section, "Sale, New Arrival, Best Sellers" stays because it serves users who aren't interested in the campaign but still opened the email. Always give people a second reason to click.
              </p>
            </div>

            {/* Right column */}
            <div style={{ padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfare font-regular " style={{ fontSize: '15px',  textTransform: 'uppercase' }}>What I Changed & Why</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I restructured the entire email around one campaign moment, the Lucky Card draw and made Women's Day the thread running top to bottom. The hero introduces the campaign. The rewards section shows what's at stake. The "How To Participate" section creates curiosity without revealing the full mechanic. If Vivaia wanted users to engage with the draw, showing the entire process upfront removes the incentive to click. A sneak peek creates more pull than a full reveal.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I explored two visual directions: one illustration led with a silhouette here, one photography led with the actual product as hero. The photography version is stronger for a fashion brand, the shoe does more work than any illustration.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                I also added a discount code teaser at the very top. In email marketing, surfacing an offer immediately reduces friction. The original buried it.
              </p>
            </div>
          </div>

          {/* Email mockups */}
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 0.6fr 1.44fr', gap: '16px', marginTop: '24px' }}>
            <div>
              <img src="/images/email-vivaia-re.png" alt="Vivaia redesign illustration" style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <img src="/images/email-vivaia-og.png" alt="Vivaia redesign photography" style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <img src="/images/viva-original.png" alt="Vivaia original email" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* ── Section 03: TripAdvisor ── */}
        <div id="section-tripadvisor" style={{ marginBottom: '48px' }}>
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px' }}>
            <span className="font-oswald" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Tripadvisor – Storybook Castles</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
            {/* Left column */}
            <div style={{ borderRight: '1px solid #111008', padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>Problem</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
                The original TripAdvisor email had two redundant CTAs "See the list" and "See the full list" both linking to the same page of 9 castles. The individual castle CTAs all said "Explore now" regardless of which castle they were for. Generic CTAs tell users nothing about where they're going.
              </p>

              <div style={{ borderTop: '1px solid #111008', margin: '0 -24px', marginBottom: '24px' }} />

              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Kept</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The three-castle selection and the individual location pins, both were already working well in the original.
              </p>
            </div>

            {/* Right column */}
            <div style={{ padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Changed & Why</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I replaced all generic CTAs with destination-specific ones: "View Château de Chambord," "View Himeji Castle," "View Chapultepec Castle." Specific links reduce anxiety about where a click leads and feel more like a curated editorial experience, which is what this email is trying to be.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I cut the duplicate bottom CTA entirely; one "See The 9 Castles" at the top is enough. Repeating the same link twice suggests uncertainty about whether the first one worked.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The visual direction shifted to a cream palette with wavy image masks reinforcing the "storybook" theme visually, not just in the headline. If the concept is storybook castles, the design should feel like one.
              </p>
            </div>
          </div>

          {/* Email mockups — 2 groups × 2 photos */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                {['/images/email-trip-og.png', '/images/email-trip-re.png'].map((src, i) => (
                  <img key={i} src={src} alt={`TripAdvisor redesign ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                ))}
              </div>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>Redesigns</p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                {['/images/email-scr3.png', '/images/email-scr4.png'].map((src, i) => (
                  <img key={i} src={src} alt={`TripAdvisor original ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                ))}
              </div>
              <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>Original Design</p>
            </div>
          </div>
        </div>

        {/* ── Section 04: Nike ── */}
        <div id="section-nike" style={{ marginBottom: '48px' }}>
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px' }}>
            <span className="font-oswald" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Nike – Welcome Email</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
            <div style={{ borderRight: '1px solid #111008', padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>Problem</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
                The original Nike welcome email closed with "Thanks for being with us" in large type, the emotional tone of a goodbye, not a welcome. For a new member receiving their first communication from Nike, that's the wrong feeling to leave them with. It also ended with a red Nike-swoosh whose purpose wasn't clear, decorative branding that added noise without meaning. The body copy was long, centred, and dense, not how Nike talks and not how anyone reads email.
              </p>
              <div style={{ borderTop: '1px solid #111008', margin: '0 -24px', marginBottom: '24px' }} />
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Kept</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The hero image, the four benefit categories with icons, and the overall black and white Nike aesthetic. Nike's welcome email structure is actually sound, the problems were in the copy tone and closing sequence, not the architecture.
              </p>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Changed & Why</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I personalised the headline, "Just arrived for Zin" instead of the generic welcome. Welcome emails with name personalisation perform measurably better because they signal that the brand sees you as an individual, not a subscriber number.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I cut "Thanks for being with us" entirely and replaced the closing with "EXCLUSIVE ACCESS", a forward-looking statement that gives new members something to look forward to rather than a farewell they didn't earn yet.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                I removed the unexplained red swoosh. If a design element doesn't have a clear purpose, it's noise.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The benefit copy is shorter, but the copy is cleaner and more reasonable. Nike's voice is punchy, not explanatory.
              </p>
            </div>
          </div>

          {/* Email mockups */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.768fr', gap: '24px', marginTop: '24px', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
            {[
              { label: 'Redesign', src: '/images/email-nike-re.png', alt: 'Nike redesign' },
              { label: 'Original', src: '/images/email-scr5.png', alt: 'Nike original' },
            ].map(({ label, src, alt }) => (
              <div key={label}>
                <img src={src} alt={alt} style={{ width: '100%', display: 'block', marginBottom: '10px' }} />
                <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 05: Glossier ── */}
        <div id="section-glossier" style={{ marginBottom: '48px' }}>
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px' }}>
            <span className="font-oswald" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Glossier – You Collection</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
            <div style={{ borderRight: '1px solid #111008', padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>Problem</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
                The original Glossier You Collection email has a broken layout, the hierarchy works, the palette is clean, the alternating rhythm pulls you down the page. The redesign wasn't about fixing inconsistency. It was about asking a different question: what if the hero worked harder as an entry point, and what if the product sections gave buyers more to act on?
              </p>
              <div style={{ borderTop: '1px solid #111008', margin: '0 -24px', marginBottom: '24px' }} />
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Kept</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The minimal colour palette, the short section labels (ICONIC, SERENE, ETHEREAL, DREAMY), the poetic brand voice in the descriptions, and the smiley face and hand illustration in the footer. Those belong to Glossier's visual identity and aren't mine to change.
              </p>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '6px 14px', display: 'inline-block', marginBottom: '14px' }}>
                <span className="font-playfair font-regular" style={{ fontSize: '15px', textTransform: 'uppercase' }}>What I Changed & Why</span>
              </div>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                The original hero blends into the rest of the email, no clear visual stop, no distinct above-the-fold moment before the product listing begins. My version creates a defined hero block with a stronger headline hierarchy that separates the opening from the product content below. The "Shop your favourite" header then gives the listing a clean entry point.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '16px' }}>
                Each product section now pairs two images, product and ingredient/texture content alongside expanded copy that includes actual scent notes and fragrance breakdown.
              </p>
              <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85 }}>
                The original descriptions are short and poetic, communicating how each scent will feel on your skin like sensory, emotional, embodied. Mine are more informational. Someone deciding whether to buy on a first-ever whiff needs more to act on. Whether that's the right call depends on the campaign goal.
              </p>
            </div>
            
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop:'24px' }}>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                  {['/images/email-scr6.png', '/images/email-scr7.png'].map((src, i) => (
                    <img key={i} src={src} alt={`Glossier original ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                  ))}
                </div>
                <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>Original</p>
              </div>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                  {['/images/email-glossier-re1.png', '/images/email-glossier-re2.png'].map((src, i) => (
                    <img key={i} src={src} alt={`Glossier redesign ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                  ))}
                </div>
                <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center' }}>Redesign</p>
              </div>
            </div>

          {/* What I'd Do Differently */}
          <div style={{ marginTop: '32px' }}>
            <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '10px 20px', marginBottom: '20px' }}>
              <span className="font-oswald" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>What I'd Do Differently</span>
            </div>
            <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.85, marginBottom: '24px' }}>
              The image direction was the wrong call for this brand. Glossier's identity lives in lifestyle photography like skin, texture, real people, natural light and the original curvy that. Product shots paired with ingredient close-ups belong to a more clinical brand language. In a real execution, I'd keep the structural changes and shoot everything as lifestyle instead.
            </p>
          </div>
        </div>

        {/* ── Newspaper footer strip ── */}
        <div className="font-oswald" style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #111008', padding: '12px 0', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          <span>Case Study — Nang Atelier Digital Platform</span>
          <span>Vol. 1, No. 6 · Nang Atelier · All Rights Reserved</span>
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
