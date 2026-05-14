import { motion, type Variants } from 'framer-motion'
import landingBg from '../assets/images/landing-background.png'
import heroImg from '../assets/images/PFP.png'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const stats = [
  { value: '3+', label: 'Years' },
  { value: '15+', label: 'Projects' },
  { value: '2', label: 'Countries' },
]

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
        minHeight: '100vh',
      }}
      className="relative w-full flex items-center justify-between gap-16"
    >
      {/* Left — text content */}
      <motion.div
        className="flex flex-col gap-6 z-10"
        style={{ maxWidth: '540px' }}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          style={{ background: 'rgba(220,216,208,0.85)', color: '#4A4540', borderRadius: '999px', padding: '10px 24px' }}
          className="self-start text-[11px] uppercase tracking-[0.2em]"
        >
          UI/UX &amp; Visual Designer
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          style={{ color: '#F5F3EF', lineHeight: 1.05, fontSize: '50px' }}
          className="font-bold uppercase"
        >
          I Design Things Worth Looking At.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}
          className="text-[15px]"
        >
          I come from engineering and teaching, founded a slow-fashion brand, and
          ended up here designing things I actually want to exist. I notice the
          gaps other people scroll past and I move fast once I see them.
        </motion.p>

        {/* Available status */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' as const }} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4CAF7D] inline-block" />
          <span style={{ color: '#4CAF7D' }} className="text-[13px]">
            Available for full-time roles
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }} className="text-[13px]">
            · Open to relocation
          </span>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' as const }} className="flex items-center gap-10">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-10">
              <div>
                <div style={{ color: '#F5F3EF', fontSize: '24px', fontWeight: 700, lineHeight: 1 }}>{value}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
              </div>
              {i < stats.length - 1 && (
                <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.12)' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' as const }}>
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
        </motion.div>
      </motion.div>

      {/* Right — hero image */}
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 flex-shrink-0"
        style={{ width: '400px' }}
      >
        {/* Decorative dot — top left */}
        <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '28px', height: '28px', borderRadius: '50%', background: '#FFE500', zIndex: 2 }} />
        {/* Decorative dot — bottom right */}
        <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '20px', height: '20px', borderRadius: '50%', background: '#C4706A', zIndex: 2 }} />
        {/* Border card behind */}
        <div style={{ position: 'absolute', top: '14px', left: '14px', right: '-14px', bottom: '-14px', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: '20px', zIndex: 0 }} />

        <img
          src={heroImg}
          alt="Nang"
          className="relative"
          style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', zIndex: 1, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.25)' }}
        />
      </motion.div>
    </section>
  )
}
