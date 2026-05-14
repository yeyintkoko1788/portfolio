import React from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  background: 'transparent',
  border: '1px solid #111008',
  borderRadius: '0',
  fontSize: '13px',
  color: '#111008',
  outline: 'none',
  fontFamily: 'inherit',
}

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  background: 'transparent',
  border: '1px solid #111008',
  borderRadius: '0',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '13px',
  letterSpacing: '0.03em',
  color: '#111008',
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  display: 'block',
  paddingBottom: '10px',
  borderBottom: '1px solid #111008',
  marginBottom: '20px',
  fontWeight: 600,
}

export default function NewWorkTogether() {
  return (
    <section id="contact" style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingBottom: '48px' }}>

        {/* Header bar */}
        <div
          style={{
            backgroundColor: '#111008',
            color: '#F0EBE0',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2
            className="font-playfair font-bold uppercase"
            style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.1 }}
          >
            Let's Work Together!
          </h2>
        </div>

        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 0.8fr',
            border: '1px solid #111008',
            borderTop: 'none',
          }}
        >
          {/* Col 1 — Available For + Form */}
          <div style={{ borderRight: '1px solid #111008', padding: '28px 24px' }}>
            <span className="font-eb-garamond" style={labelStyle}>Available For</span>
            <p className="font-eb-garamond" style={{ fontSize: '14px', lineHeight: 1.75, marginBottom: '24px' }}>
              Available for full-time roles and freelance projects.
              Reach out with a brief description of the work.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
              <input placeholder="Your Name" style={inputStyle} />
              <input placeholder="Your Email" type="email" style={inputStyle} />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              style={{ ...inputStyle, resize: 'none', marginBottom: '16px', display: 'block' }}
            />
            <button type="submit" style={buttonStyle}>Send message →</button>
          </div>

          {/* Col 2 — Response Time / Based in Vietnam */}
          <div style={{ borderRight: '1px solid #111008', padding: '28px 24px' }}>
            <span className="font-barlow" style={labelStyle}>Response Time</span>
            <p className="font-eb-garamond" style={{ fontSize: '16px', marginBottom: '48px' }}>Within 12-24 hours</p>
            <span className="font-barlow" style={labelStyle}>Based in Vietnam</span>
            <p className="font-eb-garamond" style={{ fontSize: '16px' }}>Work globally</p>
          </div>

          {/* Col 3 — Find Me At */}
          <div style={{ borderRight: '1px solid #111008', padding: '28px 24px' }}>
            <span className="font-barlow" style={labelStyle}>Find Me At</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-eb-garamond"
              style={{
                fontSize: '16px',
                fontStyle: 'italic',
                display: 'block',
                paddingBottom: '14px',
                borderBottom: '1px solid #111008',
                marginBottom: '14px',
                color: '#111008',
                textDecoration: 'none',
              }}
            >
              LinkedIn /
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-eb-garamond"
              style={{
                fontSize: '16px',
                fontStyle: 'italic',
                display: 'block',
                paddingBottom: '14px',
                borderBottom: '1px solid #111008',
                marginBottom: '14px',
                color: '#111008',
                textDecoration: 'none',
              }}
            >
              Instagram /
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-eb-garamond"
              style={{
                fontSize: '16px',
                fontStyle: 'italic',
                display: 'block',
                paddingBottom: '14px',
                borderBottom: '1px solid #111008',
                marginBottom: '14px',
                color: '#111008',
                textDecoration: 'none',
              }}
            >
              Tiktok /
            </a>
          </div>

          {/* Col 4 — Logo */}
          <div
            style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <img
              src="/images/logo-nang.png"
              alt="nang"
              style={{ width: '100%', maxWidth: '240px' }}
            />
            <div style={{ textAlign: 'center', paddingTop:'20px'}}>
              <p className="font-barlow" style={{ fontSize: '11px', letterSpacing: '0.2em'}}>
                nang
              </p>
              <p className="font-barlow" style={{ fontSize: '11px', letterSpacing: '0.2em'}}>
                atelier
              </p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div
          className="font-barlow"
          style={{
            borderLeft: '1px solid #111008',
            borderRight: '1px solid #111008',
            borderBottom: '1px solid #111008',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>Made in Myanmar</span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span>Nang · Portfolio</span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span style={{ textTransform: 'lowercase', letterSpacing: '0.05em', fontSize: '15px' }}>nang.atelier@gmail.com</span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span>© 2026</span>
        </div>

      </div>
    </section>
  )
}
