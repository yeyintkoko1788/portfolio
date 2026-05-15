import { motion, useReducedMotion } from 'framer-motion'

const inkCorners = [
  { src: '/images/hero-ink-tl.png', pos: { top: 0, left: '80px' },    delay: 0.15 },
  { src: '/images/hero-ink-tr.png', pos: { top: 0, right: '80px' },   delay: 0.25 },
  { src: '/images/hero-ink-bl.png', pos: { bottom: 0, left: '80px' }, delay: 0.35 },
  { src: '/images/hero-ink-br.png', pos: { bottom: 0, right: '80px' }, delay: 0.45 },
]

export default function NewHero() {
  const reduced = useReducedMotion()

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100svh - 140px)',
        backgroundColor: '#F0E8D4',
        color: '#111008',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingLeft: '80px',
        paddingRight: '80px',
      }}
    >
      {/* Inner editorial frame — emerges like a page coming off the press */}
      <motion.div
        style={{ position: 'absolute', inset: '16px', pointerEvents: 'none', zIndex: 1 }}
        initial={reduced ? false : { opacity: 0, scale: 0.984 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Ink splatter corners — mix-blend-mode:multiply makes white areas transparent */}
      {inkCorners.map(({ src, pos, delay }) => (
        <motion.img
          key={src}
          src={src}
          draggable={false}
          style={{
            position: 'absolute',
            width: '17vw',
            maxWidth: '220px',
            pointerEvents: 'none',
            userSelect: 'none',
            mixBlendMode: 'multiply',
            zIndex: 0,
            ...pos,
          }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay }}
        />
      ))}

      {/* Stamp — settles into position with a spring press */}
      <motion.img
        src="/images/hero-stamp.png"
        draggable={false}
        style={{ position: 'absolute', top: '100px', right: '380px', width: '120px', zIndex: 3, userSelect: 'none' }}
        initial={reduced ? false : { opacity: 0, scale: 1.15, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1.1 }}
      />

      {/* Left vertical label */}
      <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, pointerEvents: 'none' }}>
        <motion.span
          className="font-barlow"
          style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.25 }}
        >
          Issue No.01
        </motion.span>
      </div>

      {/* Right vertical label */}
      <div style={{ position: 'absolute', right: '80px', top: 0, bottom: 0, width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, pointerEvents: 'none' }}>
        <motion.span
          className="font-barlow"
          style={{ transform: 'rotate(90deg)', whiteSpace: 'nowrap', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.25 }}
        >
          Thinking in Systems
        </motion.span>
      </div>

      {/* ── Center content ─────────────────────────────────────────────────── */}
      <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '48px', paddingBottom: '56px', position: 'relative', zIndex: 2 }}>

        {/* ── Main content — 2-D centering: outer for position, inner for column ── */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <motion.p
              className="font-barlow"
              style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '20px' }}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.img
              src="/images/logo-nang.png"
              alt="nang"
              className="select-none"
              draggable={false}
              style={{ width: '55vw', maxWidth: '680px' }}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            />

            <motion.p
              className="font-old-standard"
              style={{ fontSize: '15px', lineHeight: '1.65', maxWidth: '460px', marginTop: '24px' }}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            >
              A designer who believes successful design thinking happens at the intersection of aesthetic and function.
            </motion.p>

            <motion.p
              className="font-barlow font-semibold"
              style={{ fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '16px' }}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            >
              UI/UX &amp; Visual Designer
            </motion.p>

          </div>
        </div>

        {/* ── Scroll prompt — sits below the main content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p
            className="font-barlow"
            style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5 }}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            Scroll to open the issue
          </motion.p>

          <motion.img
            src="/images/hero-scrolldown.png"
            alt=""
            draggable={false}
            style={{ width: '10px', marginTop: '10px' }}
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: [0, 7, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1.55 },
              y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 2.1, repeatDelay: 0.4 },
            }}
          />
        </div>

      </div>

      {/* ── Bottom info strip ──────────────────────────────────────────────── */}
      <motion.div
        style={{ position: 'absolute', bottom: '28px', left: '80px', right: '80px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', zIndex: 2 }}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.35 }}
      >
        <span className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', marginLeft:'150px' }}>
          Danang, Vietnam
        </span>
        <img src="/images/hero-star.png" alt="" draggable={false} style={{ width: '28px' }} />
        <span className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'right', marginRight:'150px' }}>
          Open to Opportunities
        </span>
      </motion.div>
    </section>
  )
}
