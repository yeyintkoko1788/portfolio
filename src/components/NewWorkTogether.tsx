import { useState } from 'react'

const FORMSPREE_ID = 'mkoyllby'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
                <input placeholder="Your Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                style={{ ...inputStyle, resize: 'none', marginBottom: '16px', display: 'block' }}
              />
              <button type="submit" disabled={status === 'sending'} style={{ ...buttonStyle, opacity: status === 'sending' ? 0.5 : 1 }}>
                {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send message →'}
              </button>
              {status === 'error' && <p className="font-oswald" style={{ fontSize: '10px', marginTop: '8px', opacity: 0.6 }}>Something went wrong. Try emailing directly.</p>}
            </form>
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
              href="https://www.linkedin.com/in/zin-mar-soe"
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
              href="https://www.instagram.com/nang.atelier?igsh=MWpmbTJjMnU5c2w3Mw%3D%3D&utm_source=qr"
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
              href="https://www.tiktok.com/@nang.atelier?_r=1&_t=ZS-96Ndwo9zTD6"
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
