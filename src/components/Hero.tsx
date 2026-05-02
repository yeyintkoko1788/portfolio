import landingBg from '../assets/images/landing-background.png'

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
      }}
      className="relative w-full flex items-center justify-between"
    >
      {/* Left — text content */}
      <div className="flex flex-col gap-6 w-full z-10">
        {/* Badge */}
        <span
          style={{ background: 'rgba(220,216,208,0.85)', color: '#4A4540', borderRadius: '999px', padding: '10px 24px' }}
          className="self-start text-[11px] uppercase tracking-[0.2em]"
        >
          UI/UX &amp; Visual Designer
        </span>

        {/* Headline */}
        <h1
          style={{ color: '#F5F3EF', lineHeight: 1.05, fontSize: '50px' }}
          className="font-bold uppercase w-full"
        >
          I Design Things Worth Looking At.
        </h1>

        {/* Description */}
        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }} className="text-[15px] w-full">
          I come from engineering and teaching, founded a slow-fashion brand, and
          ended up here designing things I actually want to exist. I notice the
          gaps other people scroll past and I move fast once I see them.
        </p>

        {/* Available status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4CAF7D] inline-block" />
          <span style={{ color: '#4CAF7D' }} className="text-[13px]">
            Available for full-time roles
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }} className="text-[13px]">
            · Open to relocation
          </span>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.25)',
              borderLeft: '3px solid #C4706A',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#C4706A',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Contact
          </a>
        </div>
      </div>

    </section>
  )
}
