import veraImg from '../assets/images/PFP.png'
import downloadIcon from '../assets/images/download-icon.png'
import starIcon from '../assets/images/star-icon.png'

const specialities = [
  'Figma', 'UX Research', 'Interaction Design',
  'Prototyping', 'Design Systems', 'Usability Testing', 'Visual Design',
]

const info = [
  { label: 'Based In', value: 'Vietnam' },
  { label: 'Available', value: 'Freelance & Full-time' },
  { label: 'Languages', value: 'EN · MY' },
  { label: 'Timezone', value: 'UTC +6:30' },
]

const interests = [
  { text: 'Brand Identity', star: false, accent: false },
  { text: 'Photography', star: true, accent: true },
  { text: 'Design Systems', star: false, accent: false },
  { text: 'Painting', star: true, accent: true },
  { text: 'Human Behaviour', star: false, accent: false },
  { text: 'Music', star: true, accent: false },
]

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-[#EDEBE6]">
      {/* Main content */}
      <div style={{ padding: '80px' }} className="grid grid-cols-[1fr_460px] gap-16 items-start">

        {/* ── Left ── */}
        <div>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8">
            <img src={starIcon} alt="" className="w-3 h-3" />
            <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: '#E7363C' }}>
              Designer &amp; Storyteller
            </span>
          </div>

          {/* Headline */}
          <div className="mb-10">
            <h2
              style={{ fontSize: '72px', lineHeight: 1.0, letterSpacing: '-2px', color: '#1B1712' }}
              className="font-bold uppercase"
            >
              I Design
            </h2>
            <h2
              style={{ fontSize: '72px', lineHeight: 1.0, letterSpacing: '-2px', color: '#1B1712' }}
              className="font-bold uppercase"
            >
              &nbsp;
            </h2>
            <h2
              style={{ fontSize: '72px', lineHeight: 1.0, letterSpacing: '-2px', color: '#1B1712', marginTop: '8px' }}
              className="font-bold uppercase"
            >
              People{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Love.</span>
                <span style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: 0,
                  right: 0,
                  height: '14px',
                  background: '#FFE500',
                  borderRadius: '10px',
                  zIndex: 0,
                }} />
              </span>
            </h2>
          </div>

          {/* Bio */}
          <div
            style={{ color: '#6B6260', lineHeight: 1.8, maxWidth: '480px', marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            className="text-[14px] mb-10"
          >
            <p>I started out surrounded by microscopes and formulas. After studying Materials & Metallurgy and Integrated Chemical Engineering, I worked briefly as an engineer until a volunteering experience at an orphanage quietly changed everything.</p>
            <p>
            <p></p>
              It led me to Thailand, where I spent almost four years teaching science and English in a lively, multicultural classroom. Somewhere between lesson plans and late nights, I rediscovered my love for drawing and making things look beautiful.
            </p>
              Before going fully digital, I founded Karotte Collection, a slow-fashion linen brand I built from scratch, by hand, with zero business experience and zero losses. It was my first proof that I could take something from idea to existence.
            <p>
              That spark grew into design. Where logic meets creativity, and empathy meets structure. Today I make things that are worth paying attention to.
            </p>
          </div>

          {/* Specialities */}
          {/* <div 
          style={{marginTop: '60px' }}>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9490] block mb-4">
              Specialities
            </span>
            <div className="flex flex-wrap gap-2" style={{marginTop: '20px' }}>
              {specialities.map((s) => (
                <span
                  key={s}
                  style={{ border: '1px solid #C8C2BA', color: '#5A4F4A', padding: '8px 22px' }}
                  className="text-[11px] uppercase tracking-[0.08em] rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div> */}
        </div>

        {/* ── Right ── */}
        <div className="flex flex-col gap-3 sticky top-8">
          {/* Photo card */}
          {/* Outer wrapper: paddingTop+Left creates room for border card to peek out */}
          <div className="relative" style={{ paddingTop: '12px', paddingLeft: '12px' }}>
            {/* Border card — sits at top-left, behind main card */}
            <div
              className="absolute rounded-2xl"
              style={{
                border: '1.5px solid #C8C2BA',
                top: 0,
                left: '15px',
                right: '-12px',
                bottom: '12px',
                zIndex: 0,
              }}
            />

            {/* Yellow dot — top left corner */}
            <div
              style={{ background: '#FFE500', width: '25px', height: '25px', borderRadius: '50%', position: 'absolute', top: '-8px', left: '4px', zIndex: 10 }}
            />
            {/* Salmon dot — bottom right corner */}
            <div
              style={{ background: '#FF3366', width: '18px', height: '18px', borderRadius: '50%', position: 'absolute', bottom: '10px', right: '-10px', zIndex: 10 }}
            />

            {/* Main photo card — shifted to bottom-right by the padding */}
            <div
              className="relative rounded-2xl overflow-hidden bg-white"
              style={{ width: '100%', aspectRatio: '534.937 / 670.417', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', zIndex: 1 }}
            >
              <img
                src={veraImg}
                alt="Nang"
                className="w-full h-full object-cover object-center"
              />
              {/* Name overlay */}
              <div
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)', paddingTop: '80px', paddingLeft: '28px', paddingBottom: '28px' }}
                className="absolute bottom-0 left-0 right-0"
              >
                <div style={{ color: 'rgba(255,255,255,0.65)' }} className="text-[10px] uppercase tracking-[0.18em] mb-1">
                  UI/UX &amp; Visual Designer
                </div>
                <div className="text-white font-bold text-xl tracking-widest uppercase">Nang</div>
              </div>
            </div>
          </div>

          {/* Info grid + Download — same offset as main card */}
          <div style={{ paddingLeft: '12px' }} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              {info.map(({ label, value }) => (
                <div
                  key={label}
                  style={{ background: '#0a0a0a05', border: '1px solid #0a0a0a15', borderRadius: '16px', padding: '20px 24px' }}
                >
                  <div style={{ marginBottom: '8px' }} className="text-[10px] uppercase tracking-[0.18em] text-[#9A9490]">
                    {label}
                  </div>
                  <div className="text-[14px] font-semibold text-[#1B1712]">{value}</div>
                </div>
              ))}
            </div>

            {/* Download résumé */}
            <a
              href="/resume.pdf"
              download
              style={{ background: '#00000000', border: '1px solid #0a0a0a15', borderRadius: '16px', padding: '20px 24px' }}
              className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#1B1712] hover:bg-[#1B1712] hover:text-white transition-all duration-200 group"
            >
              Download Résumé
              <img src={downloadIcon} alt="" className="w-4 h-4 group-hover:invert transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Interests strip ── */}
      <div style={{ borderTop: '1px solid #E3DDD5', padding: '18px 80px' }} className="flex items-center gap-8">
        <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9490] shrink-0">
          Interests
        </span>

        {/* Marquee */}
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', width: 'max-content', animation: 'marquee 20s linear infinite' }}>
            {[...interests, ...interests].map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', marginRight: '36px', flexShrink: 0 }}>
                <img src={starIcon} alt="" style={{ width: '11px', height: '11px', marginRight: '36px' }} />
                <span style={{ color: item.accent ? '#FF3366' : '#5A4F4A', fontSize: '13px', whiteSpace: 'nowrap' }}>
                  {item.text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
