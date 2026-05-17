import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { fadeUp, fadeIn, viewportOnce, staggerSlow } from '../lib/motionConfig'

const timeline = [
  {
    years: '2019–2020',
    role: 'ENGINEER',
    text: 'Studied Materials & Metallurgy and Integrated Chemical Engineering. A brief stint as an engineer, then a volunteering experience at an orphanage quietly changed everything.',
  },
  {
    years: '2020–2023',
    role: 'FASHION',
    text: 'Founded Karotte Collection, a slow-fashion fairy brand built from scratch, by hand, with zero business experience and zero losses.',
  },
  {
    years: '2023–2025',
    role: 'TEACHER',
    text: 'Moved to Thailand for almost four years, teaching science and English in a lively, multicultural classroom. Somewhere in there, I rediscovered my love for drawing.',
  },
  {
    years: '2026',
    role: 'DESIGNER',
    text: 'Where logic meets creativity, and empathy meets structure. Today I make things that are worth paying attention to.',
  },
]

const tools = [
  { name: 'Figma', img: '/images/logo-figma.png' },
  { name: 'Canva', img: '/images/logo-canva.png' },
  { name: 'Microsoft', img: '/images/logo-microsoft.png' },
  { name: 'Notion', img: '/images/logo-notion.png' },
]

export default function NewAboutMe() {
  const reduced = useReducedMotion()

  // Portrait parallax — mouse position mapped to ±5 px translation
  const portraitRef = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const imgX = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 50, damping: 20 })
  const imgY = useSpring(useTransform(rawY, [-0.5, 0.5], [-4, 4]), { stiffness: 50, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = portraitRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section id="about" className="bg-[#F0E8D4] text-[#111008]">

      {/* Section header */}
      <motion.div
        className="page-px flex items-center justify-between"
        style={{ paddingTop: '48px', paddingBottom: '32px' }}
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeIn}
      >
        <div style={{ border: '2px solid #111008', outline: '1px solid #111008', outlineOffset: '-8px', padding: '6px 14px' }}>
          <span className="font-oswald text-[15px] tracking-[0.2em] uppercase font-regular">Special<br></br>Edition</span>
        </div>
        <h2 className="font-unifraktur italic" style={{ fontSize: '48px', letterSpacing: '-0.01em' }}>
          *About Me*
        </h2>
        <div style={{ border: '2px solid #111008', outline: '1px solid #111008', outlineOffset: '-8px', padding: '6px 14px' }}>
          <span className="font-oswald text-[15px] tracking-[0.2em] uppercase font-regular">Special<br></br> Edition</span>
        </div>
      </motion.div>

      {/* Main content grid — 3 columns */}
      <div className="page-px" style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr 1fr', gap: '0', borderTop: '4px solid #111008' }}>

        {/* Col 1 — timeline */}
        <div className="border-r border-[#111008]" style={{ paddingRight: '28px', paddingTop: '24px', paddingBottom: '24px' }}>
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', textAlign: 'center', marginBottom: '28px' }}>
            <span className="font-barlow font-semibold uppercase" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>About Me</span>
          </div>

          {/* Timeline block — reveals as one unit */}
          <motion.div
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '80px 1px 1fr', gap: '0' }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 'calc(80px)', top: 0, bottom: 0, width: '1px', backgroundColor: '#111008' }} />

            {timeline.map((item) => (
              <>
                {/* Left: year + role */}
                <div key={item.role + '-label'} style={{ paddingBottom: '32px', paddingRight: '12px' }}>
                  <p className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.08em', opacity: 0.6 }}>{item.years}</p>
                  <p className="font-barlow font-bold uppercase" style={{ fontSize: '11px', letterSpacing: '0.15em' }}>{item.role}</p>
                </div>

                {/* Tick on the vertical line */}
                <div key={item.role + '-tick'} style={{ position: 'relative' }}>
                  <span style={{
                    position: 'absolute',
                    top: '6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '1px',
                    backgroundColor: '#111008',
                    display: 'block',
                  }} />
                </div>

                {/* Right: description */}
                <div key={item.role + '-text'} style={{ paddingBottom: '32px', paddingLeft: '16px' }}>
                  <p className="font-old-standard" style={{ fontSize: '12px', lineHeight: '1.7' }}>{item.text}</p>
                </div>
              </>
            ))}
          </motion.div>
        </div>

        {/* Col 2 — profile photo with parallax */}
        <div className="border-r border-[#111008]" style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', width: '100%' }}
          >
            {/* Registration markers — fixed, do not move with parallax */}
            <span style={{ position: 'absolute', top: '-4px', left: '-4px', width: '8px', height: '8px', backgroundColor: '#111008', display: 'block', zIndex: 2 }} />
            <span style={{ position: 'absolute', top: '-4px', right: '30px', width: '8px', height: '8px', backgroundColor: '#111008', display: 'block', zIndex: 2 }} />
            <span style={{ position: 'absolute', bottom: '120px', left: '-4px', width: '8px', height: '8px', backgroundColor: '#111008', display: 'block', zIndex: 2 }} />
            <span style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: '#111008', display: 'block', zIndex: 2 }} />

            {/* Image frame — shifts with parallax */}
            <motion.div
              style={{
                x: reduced ? 0 : imgX,
                y: reduced ? 0 : imgY,
                border: '1px solid #111008',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
              }}
            >
              {/* Print misregistration on hover: subtle lateral shadow offset */}
              <motion.div
                style={{ width: '100%', height: '100%' }}
                whileHover={reduced ? {} : { boxShadow: '2px 0 0 rgba(0,0,0,0.10), -2px 0 0 rgba(0,0,0,0.07)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.img
                  src="/images/about-photo.png"
                  alt="Nang"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  initial={{ filter: 'grayscale(100%)' }}
                  whileHover={reduced ? {} : { filter: 'grayscale(0%)', scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Col 3 — tools, interests, location */}
        <motion.div
          style={{ paddingLeft: '28px', paddingTop: '24px', paddingBottom: '24px' }}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerSlow}
        >
          {/* Tools */}
          <motion.div variants={fadeUp} style={{ backgroundColor: '#111008', color: '#F0EBE0', textAlign: 'center', marginBottom: '12px' }}>
            <span className="font-barlow font-semibold uppercase" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>Tools</span>
          </motion.div>
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px', paddingBottom: '24px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center justify-center" style={{ gap: '8px' }}>
                {tool.img ? (
                  <img src={tool.img} alt={tool.name} style={{ height: '18px', objectFit: 'contain' }} />
                ) : (
                  <span className="font-barlow font-semibold" style={{ fontSize: '13px', letterSpacing: '0.05em' }}>
                    ✦ {tool.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div variants={fadeUp} style={{ backgroundColor: '#111008', color: '#F0EBE0', textAlign: 'center', marginBottom: '12px' }}>
            <span className="font-barlow font-semibold uppercase" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>Interests</span>
          </motion.div>
          <motion.div variants={fadeUp} style={{ paddingTop: '12px', paddingBottom: '24px' }}>
            <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '2' }}>Painting</p>
            <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '2' }}>Art Directing</p>
          </motion.div>

          {/* Currently based in */}
          <motion.div variants={fadeUp} style={{ backgroundColor: '#111008', color: '#F0EBE0', textAlign: 'center', marginBottom: '12px' }}>
            <span className="font-barlow font-semibold uppercase" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>Currently Based In</span>
          </motion.div>
          <motion.div variants={fadeUp} style={{ paddingTop: '12px' }}>
            <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '2' }}>Danang, Vietnam</p>
            <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '2', opacity: 0.6 }}>Open to full-time or remote roles</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Quotes row */}
      <div className="page-px border-t border-[#111008]" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', paddingTop: '24px', paddingBottom: '24px' }}>
        <motion.div
          className="border-r border-[#111008]"
          style={{ paddingRight: '32px' }}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-playfair italic uppercase" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            Good design is a conversation between the eye and the mind. It is direction.
          </p>
        </motion.div>
        <motion.div
          style={{ paddingLeft: '32px' }}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-playfair italic uppercase" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            My dream is simple: create freely. Move freely. Live fully on my own terms.
          </p>
        </motion.div>
      </div>

      {/* Dark strip */}
      <motion.div
        className="page-px flex items-center justify-between"
        style={{ backgroundColor: '#111008', color: '#F0EBE0', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight:'24px'}}
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="font-oswald font-regular" style={{ fontSize: '16px' }}>Nang</span>
        <span className="font-oswald font-regular uppercase" style={{ fontSize: '16px' }}>#Intentions</span>
        <span className="font-oswald font-regular uppercase" style={{ fontSize: '16px' }}>UI/UX &amp; Visual Designer</span>
      </motion.div>

      {/* Three column philosophy */}
      <motion.div
        className="page-px border-t border-[#111008]"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '24px', paddingBottom: '40px' }}
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
        }}
      >
        <motion.div
          className="border-r border-[#111008]"
          style={{ paddingRight: '24px' }}
          variants={fadeUp}
        >
          <p className="font-barlow font-semibold text-[10px] tracking-[0.2em] uppercase border-b border-[#111008]" style={{ paddingBottom: '8px', marginBottom: '12px' }}>
            Design Philosophy
          </p>
          <p className="font-old-standard" style={{ fontSize: '12px', lineHeight: '1.7' }}>
            Design is a visual argument. Every typeface choice, every weight, every margin is a position. I design with intention where aesthetics and function aren't competing, they're the same thing.
          </p>
        </motion.div>
        <motion.div
          className="border-r border-[#111008]"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
          variants={fadeUp}
        >
          <p className="font-barlow font-semibold text-[10px] tracking-[0.2em] uppercase border-b border-[#111008]" style={{ paddingBottom: '8px', marginBottom: '12px' }}>
            Methodology
          </p>
          <p className="font-old-standard" style={{ fontSize: '12px', lineHeight: '1.7' }}>
            Whether it's a navigation flow or a brand identity, the process starts with understanding and ends with something that works.
          </p>
        </motion.div>
        <motion.div
          style={{ paddingLeft: '24px' }}
          variants={fadeUp}
        >
          <p className="font-barlow font-semibold text-[10px] tracking-[0.2em] uppercase border-b border-[#111008]" style={{ paddingBottom: '8px', marginBottom: '12px' }}>
            Background
          </p>
          <p className="font-old-standard" style={{ fontSize: '12px', lineHeight: '1.7' }}>
            Engineer → Founder → Teacher → Designer. Each chapter taught a different kind of problem-solving. Now they all show up in the work.
          </p>
        </motion.div>
      </motion.div>

    </section>
  )
}
