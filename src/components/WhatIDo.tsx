import dotsIcon from '../assets/images/DotsNine.png'
import eyeIcon from '../assets/images/Eye.png'

const services = [
  {
    icon: dotsIcon,
    title: 'UI/UX Design',
    description:
      'Interfaces that look right and feel effortless. I work across mobile and desktop, obsessing over layout, hierarchy, and the details most people don\'t notice until they\'re wrong.',
  },
  {
    icon: eyeIcon,
    title: 'Visual Design',
    description:
      'Posters, book covers, brand identity, email design. If it needs to look intentional and say something, this is where I work best.',
  }
]

export default function WhatIDo() {
  return (
    <section id="about" style={{ padding: '0 80px 80px' }}>
      <div
        style={{
          border: '1px solid #E0DAD2',
          borderRadius: '24px',
          padding: '48px',
          margin: '80px 0',
          background: '#F5F2EC',
        }}
      >
        {/* Title */}
        <h2
          style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '0.05em', color: '#1B1712', marginBottom: '40px' }}
          className="uppercase"
        >
          What I Do
        </h2>

        {/* Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {services.map((s) => (
            <div key={s.title}>
              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img src={s.icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                <span
                  style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em', color: '#2E2A26' }}
                  className="uppercase"
                >
                  {s.title}
                </span>
              </div>
              {/* Description */}
              <p style={{ fontSize: '15px', color: '#6B6260', lineHeight: 1.8, width: '100%' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
