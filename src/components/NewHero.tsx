import { motion, useReducedMotion } from 'framer-motion'

const inkCorners = [
  { src: '/images/hero-ink-tl.png', pos: { top: 0, left: '80px' },    delay: 0.15 },
  { src: '/images/hero-ink-tr.png', pos: { top: 0, right: '80px' },   delay: 0.25 },
  { src: '/images/hero-ink-bl.png', pos: { bottom: 0, left: '80px' }, delay: 0.35 },
  { src: '/images/hero-ink-br.png', pos: { bottom: 0, right: '80px' }, delay: 0.45 },
]

const stickers = [
  { src: '/images/hero-sticker-approved.png',    pos: { left: '220px', top: '180px' },    rotate: '-6deg',  width: '128px', delay: 0.65 },
  { src: '/images/hero-sticker-nang.png',        pos: { left: '20%',   top: '48%' },      rotate: '-12deg', width: '130px', delay: 0.80 },
  { src: '/images/hero-sticker-sign.png',        pos: { right: '20%',  top: '40%' },      rotate: '2deg',   width: '118px', delay: 0.70 },
  { src: '/images/hero-sticker-classified.png',  pos: { right: '25%',  top: '65%' },      rotate: '5deg',   width: '148px', delay: 0.90 },
  { src: '/images/hero-sticker-barcode.png',     pos: { right: '12%',  bottom: '20px' },  width: '150px',   delay: 1.00 },
]

// How long the unroll takes — all other delays are offset by this
const UNROLL = 0.6

export default function NewHero() {
  const reduced = useReducedMotion()

  return (
    <motion.section
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
      initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: UNROLL, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* Roll edge — shadow that sweeps down with the unroll, simulating paper curl */}
      {!reduced && (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '10px',
            background: 'linear-gradient(to bottom, rgba(17,16,8,0.18), transparent)',
            pointerEvents: 'none',
            zIndex: 20,
          }}
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: UNROLL, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Inner editorial frame */}
      <motion.div
        style={{ position: 'absolute', inset: '16px', pointerEvents: 'none', zIndex: 1 }}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: UNROLL + 0.1 }}
      />

      {/* Vintage world map — background texture */}
      {/* <img
        src="/images/hero-map.png"
        draggable={false}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '80px',
          right: '80px',
          width: 'calc(100% - 160px)',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          mixBlendMode: 'multiply',
          opacity: 0.5,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      /> */}

      {/* Ink splatter corners */}
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
          transition={{ duration: 1.0, delay: UNROLL + delay }}
        />
      ))}

      {/* Stickers */}
      {stickers.map(({ src, pos, rotate, width, delay }) => (
        <motion.img
          key={src}
          src={src}
          draggable={false}
          style={{
            position: 'absolute',
            width,
            rotate,
            userSelect: 'none',
            mixBlendMode: 'multiply',
            zIndex: 3,
            ...pos,
          }}
          variants={{
            hidden:   { opacity: 0, scale: 0.88 },
            visible:  { opacity: 1, scale: 1,   transition: { duration: 0.6, delay: UNROLL + delay, ease: [0.25, 0.1, 0.25, 1] as const } },
            hover:    { scale: 1.1, y: -5,      transition: { type: 'spring', stiffness: 300, damping: 18 } },
          }}
          initial={reduced ? false : 'hidden'}
          animate="visible"
          whileHover={reduced ? undefined : 'hover'}
        />
      ))}

      {/* Stamp */}
      <motion.img
        src="/images/hero-stamp.png"
        draggable={false}
        style={{ position: 'absolute', top: '100px', right: '380px', width: '120px', zIndex: 3, userSelect: 'none' }}
        variants={{
          hidden:  { opacity: 0, scale: 1.15, rotate: 6 },
          visible: { opacity: 1, scale: 1,    rotate: 12, transition: { type: 'spring', stiffness: 120, damping: 14, delay: UNROLL + 1.1 } },
          hover:   { scale: 1.08, y: -4,                 transition: { type: 'spring', stiffness: 300, damping: 18 } },
        }}
        initial={reduced ? false : 'hidden'}
        animate="visible"
        whileHover={reduced ? undefined : 'hover'}
      />

      {/* Left vertical label */}
      <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, pointerEvents: 'none' }}>
        <motion.span
          className="font-barlow"
          style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: UNROLL + 1.25 }}
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
          transition={{ duration: 0.7, delay: UNROLL + 1.25 }}
        >
          Thinking in Systems
        </motion.span>
      </div>

      {/* Paper plane flight traces */}
      {!reduced && (
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
        >
          <defs>
            <path id="hero-flight-path-b" d="M -30 520 C 180 455, 390 575, 620 490 S 880 408, 1100 505 S 1300 558, 1470 468" />
            <path id="hero-flight-path-t" d="M 1470 175 C 1260 120, 1040 215, 820 155 S 575 100, 360 168 S 140 220, -30 158" />
          </defs>
          <use href="#hero-flight-path-b" fill="none" stroke="#111008" strokeWidth="1.2" strokeDasharray="3 10" opacity="0.5" />
          <use href="#hero-flight-path-t" fill="none" stroke="#111008" strokeWidth="1.0" strokeDasharray="3 10" opacity="0.5" />
          <g opacity="0.55">
            <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" begin={`${UNROLL + 1.5}s`}>
              <mpath href="#hero-flight-path-b" />
            </animateMotion>
            <path d="M 16 0 L -13 -10 L -6 0 L -13 10 Z" fill="#111008" />
            <line x1="-6" y1="0" x2="-13" y2="0" stroke="#111008" strokeWidth="1.2" />
          </g>
          <g opacity="0.45">
            <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin={`${UNROLL + 5}s`}>
              <mpath href="#hero-flight-path-t" />
            </animateMotion>
            <path d="M 13 0 L -10 -8 L -5 0 L -10 8 Z" fill="#111008" />
            <line x1="-5" y1="0" x2="-10" y2="0" stroke="#111008" strokeWidth="1.0" />
          </g>
        </svg>
      )}

      {/* Center content */}
      <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '48px', paddingBottom: '56px', position: 'relative', zIndex: 2 }}>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            <motion.p
              className="font-barlow"
              style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '20px' }}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: UNROLL + 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.img
              src="/images/logo-nang.png"
              alt="nang"
              className="select-none"
              draggable={false}
              style={{ width: '65vw', maxWidth: '780px' }}
              variants={{
                hidden:  { opacity: 0 },
                visible: { opacity: 1,    transition: { duration: 1.2, delay: UNROLL + 0.28, ease: [0.25, 0.1, 0.25, 1] as const } },
                hover:   { scale: 1.05, y: -3, transition: { type: 'spring', stiffness: 260, damping: 22 } },
              }}
              initial={reduced ? false : 'hidden'}
              animate="visible"
              whileHover={reduced ? undefined : 'hover'}
            />

            <motion.p
              className="font-old-standard"
              style={{ fontSize: '15px', lineHeight: '1.65', maxWidth: '460px', marginTop: '24px' }}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: UNROLL + 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            >
              A designer who believes successful design thinking happens at the intersection of aesthetic and function.
            </motion.p>

            <motion.p
              className="font-barlow font-semibold"
              style={{ fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '16px' }}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: UNROLL + 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Visual &amp; UI/UX Designer
            </motion.p>

          </div>
        </div>

        {/* Scroll prompt */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.p
            className="font-barlow"
            style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 1 }}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: UNROLL + 1.4 }}
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
              opacity: { duration: 0.6, delay: UNROLL + 1.55 },
              y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: UNROLL + 2.1, repeatDelay: 0.4 },
            }}
          />
        </div>

      </div>

      {/* Bottom info strip */}
      <motion.div
        style={{ position: 'absolute', bottom: '28px', left: '80px', right: '80px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', zIndex: 2 }}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: UNROLL + 1.35 }}
      >
        <span className="font-barlow" style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', marginLeft: '150px' }}>
          Special Edition
        </span>
        <img src="/images/hero-star.png" alt="" draggable={false} style={{ width: '28px' }} />
      </motion.div>

    </motion.section>
  )
}
