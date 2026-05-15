import BackToTop from './BackToTop'

export default function NewProcessDetail() {
  return (
    <div style={{ backgroundColor: '#F0E8D4', color: '#111008', minHeight: '100vh' }}>
      <div className="page-px" style={{ paddingTop: '40px', paddingBottom: '64px' }}>

        {/* Header */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <a
            href="/#creative-lab"
            onClick={(e) => { e.preventDefault(); window.history.back() }}
            className="font-oswald"
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', color: '#111008', opacity: 0.5 }}
          >
            ← Back
          </a>
          <h1 className="font-playfair" style={{ fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, textAlign: 'center' }}>
            Process
          </h1>
        </div>

        {/* Top divider */}
        <div style={{ borderTop: '2px solid #111008', marginBottom: '48px' }} />

        {/* ── Section 1: Field Notes ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', alignItems: 'start', marginBottom: '24px' }}>

          {/* Left — Field notes (pin built into image) */}
          <div>
            <img src="/images/process-fieldnotes.png" alt="Field Notes" style={{ width: '100%', display: 'block' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft:'50px', marginTop:'-24px'}}>
              <span className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '12px 12px', display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#111008', display: 'inline-block', flexShrink: 0 }} />
                Process
              </span>
              <span className="font-old-standard font-regular" style={{ fontSize: '16px' }}>Field Notes</span>
            </div>
          </div>

          {/* Center — Sketch wireframes (DRAFT tag + tape built into image) */}
          <div>
            <img src="/images/process-sketch.png" alt="Structure First — Lo-fi Wireframes" style={{ width: '100%', display: 'block' }} />
            <div style={{marginLeft:'50px', marginTop:'-40px'}}>
              <p className="font-old-standard font-regular" style={{ fontSize: '19px', fontWeight: 700, marginBottom: '2px' }}>Structure First</p>
              <p className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '8px' }}>Lo-Fi Wireframes · 2025</p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span className="font-old-standard font-regular" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', borderBottom: '1px solid #111008', paddingBottom: '2px' }}>First Structure Pass</span>
              </div>
            </div>
          </div>

          {/* Right — Quote + metadata */}
          <div>
            <p className="font-eb-garamond" style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '32px', borderLeft: '2px solid #111008', paddingLeft: '24px' }}>
              "Every project begins<br />in a notebook."
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Phase', value: 'Ideation' },
                { label: 'Tools', value: 'Pen, Paper' },
                { label: 'Period', value: '2025–2026' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #111008', paddingBottom: '8px' }}>
                  <span className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5 }}>{label}</span>
                  <span className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 1 footer tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '64px' }}>
          <span style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#111008', opacity: 1}} />)}
          </span>
          <div style={{ flex: 1, borderTop: '1px solid #111008' }} />
          {['TasteTrail', 'Nell Mag'].map(tag => (
            <span key={tag} className="font-oswald" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#111008', color: '#F0EBE0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 12px', flexShrink: 0 }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F0EBE0', display: 'inline-block' }} />
              {tag}
            </span>
          ))}
          <div style={{ flex: 1, borderTop: '1px solid #111008' }} />
        </div>

        {/* ── Section 2: Frame Zero + Nell ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1.8fr', gap: '48px', alignItems: 'start', marginBottom: '64px' }}>

          {/* Left — Figma lo-fi (caption built into image) */}
          <img src="/images/process-lowfi.png" alt="Frame Zero — Figma Lo-Fi" style={{ width: '100%', display: 'block' }} />

          {/* Right — Nell screens + caption */}
          <div>
            <img src="/images/process-nell-screens.png" alt="Nell Digital Magazine" style={{ width: '100%', display: 'block' }} />
            <div style={{ paddingTop: '16px' }}>
              <span className="font-oswald" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#111008', color: '#F0EBE0', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 12px', marginBottom: '12px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F0EBE0', display: 'inline-block' }} />
                Nell Digital Magazine
              </span>
              <p className="font-old-standard" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }}>Nell</p>
              <p className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>App Concepts · 2025</p>
            </div>
          </div>
        </div>

        {/* ── Section 3: User flow, app flow and IA ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2.5fr', gap: '48px', alignItems: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="font-old-standard font-regular" style={{ fontSize: '24px', fontStyle: 'italic', textAlign: 'end', marginBottom: '16px' }}>
              User flow, app flow and IA
            </p>
            <img src="/images/process-nel-flow.png" alt="Nell — User Flow" style={{ width: '90%', display: 'block' }} />
          </div>
          <img src="/images/process-tastetrail-flow.png" alt="TasteTrail — Flow and IA" style={{ width: '100%', display: 'block' }} />
        </div>

        {/* ── Section 4: TasteTrail screens ── */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ borderLeft: '2px solid #111008', paddingLeft: '12px', marginBottom: '24px' }}>
            <span className="font-old-standard font-regular" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>TasteTrail · Food Recommendation App</span>
          </div>
          <img src="/images/process-tastetrail-screens.png" alt="TasteTrail App Screens" style={{ width: '100%', display: 'block' }} />
          <div style={{ paddingTop: '16px' }}>
            <p className="font-old-standard" style={{ fontSize: '15px', marginBottom: '2px' }}>TasteTrail Mobile App</p>
            <p className="font-oswald" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}>Concept . 2025</p>
          </div>
          <div style={{ borderTop: '1px solid #111008', margin: '20px 0' }} />
          <p className="font-eb-garamond" style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 1.7, maxWidth: '320px' }}>
            "The draft is where the <br></br>real thinking happens."
          </p>
        </div>

      </div>
      <BackToTop />
    </div>
  )
}
