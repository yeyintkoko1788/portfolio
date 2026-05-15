import linkedinLogo from '../assets/images/LinkedinLogo.png'
import instagramLogo from '../assets/images/InstagramLogo.png'
import tiktokLogo from '../assets/images/TiktokLogo.png'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  background: '#EDEAE4',
  border: '1px solid #E0DAD2',
  borderRadius: '10px',
  fontSize: '13px',
  color: '#1B1712',
  outline: 'none',
  fontFamily: 'inherit',
}

export default function WorkTogether() {
  return (
    <section id="contact" style={{ padding: '40px 80px 80px' }}>
      {/* 2-col × 2-row grid: top content / bottom info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '0 80px' }}>

        {/* ── Left top ── */}
        <div style={{ paddingBottom: '48px' }}>
          <span style={{ fontSize: '11px', color: '#C4706A', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '24px' }}>
            Contact
          </span>
          <h2 style={{ fontSize: '56px', fontWeight: 700, color: '#1B1712', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '24px' }}>
            Let's Work Together.
          </h2>
          <p style={{ fontSize: '15px', color: '#7A736A', lineHeight: 1.75, maxWidth: '380px' }}>
            Whether you have a project in mind, a question, or just want to say hello. I'd love to hear from you.
          </p>
        </div>

        {/* ── Right top ── */}
        <div style={{ paddingBottom: '48px' }}>
          <span style={{ fontSize: '11px', color: '#C4706A', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '24px' }}>
            Let's Talk
          </span>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <input placeholder="Your Name" style={inputStyle} />
              <input placeholder="Your Email" type="email" style={inputStyle} />
            </div>
            <textarea placeholder="Your Message" rows={6} style={{ ...inputStyle, resize: 'none' }} />
            <div>
              <button type="submit" style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid #E0DAD2',
                borderLeft: '3px solid #C4706A',
                borderRadius: '6px',
                fontSize: '13px',
                color: '#C4706A',
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.05em',
              }}>
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* ── Left bottom ── */}
        <div style={{ borderTop: '1px solid #E0DAD2', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#C4706A', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
              Response Time
            </span>
            <p style={{ fontSize: '16px', color: '#1B1712', fontWeight: 500 }}>Within 12-24 hours</p>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#9A9490', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
              Based in Vietnam
            </span>
            <p style={{ fontSize: '16px', color: '#1B1712', fontWeight: 500 }}>Work globally</p>
          </div>
        </div>

        {/* ── Right bottom ── */}
        <div style={{ borderTop: '1px solid #E0DAD2', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#9A9490', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
              Email
            </span>
            <a href="mailto:nang.atelier@gmail.com" style={{ fontSize: '15px', color: '#5A4F4A', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              nang.atelier@gmail.com
            </a>
          </div>
          <div>
            <span style={{ fontSize: '11px', color: '#9A9490', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '12px' }}>
              Social
            </span>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="www.linkedin.com/in/zin-mar-soe" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '22px', height: '22px', opacity: 0.6 }} />
              </a>
              <a href="https://www.instagram.com/nang.atelier?igsh=MWpmbTJjMnU5c2w3Mw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" style={{ width: '22px', height: '22px', opacity: 0.6 }} />
              </a>
              <a href="https://www.tiktok.com/@nang.atelier?_r=1&_t=ZS-96Ndwo9zTD6" target="_blank" rel="noopener noreferrer">
                <img src={tiktokLogo} alt="TikTok" style={{ width: '22px', height: '22px', opacity: 0.6 }} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
