import clientImg from '../assets/images/client.jpg'
import quoteImg from '../assets/images/quote.png'

export default function FeaturedReview() {
  return (
    <section style={{ padding: '0 80px 80px' }}>
      {/* Title */}
      <h2
        style={{ fontSize: '56px', fontWeight: 700, letterSpacing: '0.06em', color: '#1B1712', textAlign: 'center', marginBottom: '48px' }}
        className="uppercase"
      >
        Featured Review
      </h2>

      {/* Card */}
      <div
        style={{
          background: '#D6CFC2',
          borderRadius: '24px',
          padding: '48px 80px 52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Avatar with quote badge */}
        <div style={{ position: 'relative', marginBottom: '28px' }}>
          <img
            src={clientImg}
            alt="Client"
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
          />
          {/* Quote badge */}
          <img src={quoteImg} alt="quote" style={{ position: 'absolute', bottom: 0, right: 0, width: '26px', height: '26px' }} />
        </div>

        {/* Quote */}
        <p style={{ fontSize: '15px', color: '#3A3530', lineHeight: 1.7, maxWidth: '780px', marginBottom: '24px' }}>
          I recently had to jump on 10+ different calls across eight different countries to find the right owner.
        </p>

        {/* Divider */}
        <div style={{ width: '60px', height: '1px', background: '#3A3530', marginBottom: '20px' }} />

        {/* Name */}
        <p style={{ fontSize: '17px', fontWeight: 700, color: '#1B1712', marginBottom: '6px' }}>
          Lee John Nottingham
        </p>

        {/* Role */}
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#5A5048' }}>
          Client
        </p>
      </div>
    </section>
  )
}
