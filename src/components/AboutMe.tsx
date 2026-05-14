import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  { text: 'Brand Identity', accent: false },
  { text: 'Photography', accent: true },
  { text: 'Design Systems', accent: false },
  { text: 'Painting', accent: true },
  { text: 'Human Behaviour', accent: false },
  { text: 'Music', accent: false },
]

const timeline = [
  {
    year: '2016',
    label: 'Engineering',
    text: 'Studied Materials & Metallurgy and Integrated Chemical Engineering. A brief stint as an engineer — then a volunteering experience at an orphanage quietly changed everything.',
  },
  {
    year: '2018',
    label: 'Teaching',
    text: 'Moved to Thailand for almost four years, teaching science and English in a lively, multicultural classroom. Somewhere in there, I rediscovered my love for drawing.',
  },
  {
    year: '2021',
    label: 'Fashion',
    text: 'Founded Karotte Collection — a slow-fashion linen brand built from scratch, by hand, with zero business experience and zero losses.',
  },
  {
    year: '2023',
    label: 'Design',
    text: 'Where logic meets creativity, and empathy meets structure. Today I make things that are worth paying attention to.',
  },
]

export default function AboutMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about-me" className="bg-[#EDEBE6]">
      {/* Main content */}
      <div ref={ref} style={{ padding: '80px' }} className="grid grid-cols-[1fr_460px] gap-16 items-start">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8">
            <img src={starIcon} alt="" className="w-3 h-3" />
            <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: '#E7363C' }}>
              Designer &amp; Storyteller
            </span>
          </div>

          {/* Headline — fixed: removed blank middle line */}
          <div className="mb-10">
            <h2
              style={{ fontSize: '72px', lineHeight: 1.0, letterSpacing: '-2px', color: '#1B1712' }}
              className="font-bold uppercase"
            >
              I Design
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

          {/* Timeline bio */}
          <div style={{ marginTop: '60px' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: 0.15 + i * 0.1 }}
                style={{ display: 'flex', gap: '24px', marginBottom: i < timeline.length - 1 ? '32px' : 0 }}
              >
                {/* Year + connector line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '40px' }}>
                  <div style={{ fontSize: '10px', color: '#9A9490', letterSpacing: '0.1em', marginBottom: '8px', whiteSpace: 'nowrap' }}>{item.year}</div>
                  {i < timeline.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: '#D5CFC8' }} />
                  )}
                </div>
                {/* Label + text */}
                <div style={{ paddingBottom: i < timeline.length - 1 ? '8px' : 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E7363C', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                  <p style={{ fontSize: '14px', color: '#6B6260', lineHeight: 1.75 }}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialities — re-enabled */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' as const, delay: 0.55 }}
            style={{ marginTop: '60px' }}
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9490] block mb-4">
              Specialities
            </span>
            <div className="flex flex-wrap gap-2" style={{ marginTop: '20px' }}>
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
          </motion.div>
        </motion.div>

        {/* ── Right ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.15 }}
          className="flex flex-col gap-3 sticky top-8"
        >
          {/* Photo card */}
          <div className="relative" style={{ paddingTop: '12px', paddingLeft: '12px' }}>
            {/* Border card behind */}
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
            <div style={{ background: '#FFE500', width: '25px', height: '25px', borderRadius: '50%', position: 'absolute', top: '-8px', left: '4px', zIndex: 10 }} />
            <div style={{ background: '#FF3366', width: '18px', height: '18px', borderRadius: '50%', position: 'absolute', bottom: '10px', right: '-10px', zIndex: 10 }} />

            <div
              className="relative rounded-2xl overflow-hidden bg-white"
              style={{ width: '100%', aspectRatio: '534.937 / 670.417', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', zIndex: 1 }}
            >
              <img
                src={veraImg}
                alt="Nang"
                className="w-full h-full object-cover object-center"
              />
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

          {/* Info grid + Download */}
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
        </motion.div>
      </div>

      {/* ── Interests strip ── */}
      <div style={{ borderTop: '1px solid #E3DDD5', padding: '18px 80px' }} className="flex items-center gap-8">
        <span className="text-[10px] uppercase tracking-[0.22em] text-[#9A9490] shrink-0">
          Interests
        </span>
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
