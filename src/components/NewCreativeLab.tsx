import { motion, useReducedMotion } from 'framer-motion'
import { viewportOnce, staggerContainer, fadeUp } from '../lib/motionConfig'

const items = [
  { number: '01', title: 'Process', image: '/images/lab-experiments.png', href: '/lab/process' },
  { number: '02', title: 'Interactions', image: '/images/lab-interactions.png', href: '/lab/interactions' },
  { number: '03', title: 'Posters', image: '/images/lab-posters.png', href: '/lab/posters' },
  { number: '04', title: 'Painting', image: '/images/lab-painting.png', href: '/lab/painting' },
]

// Image hover variants — triggered via parent motion.a whileHover propagation
const imageVariants = {
  rest: { filter: 'grayscale(100%) blur(0.3px)', scale: 1 as const },
  hover: { filter: 'grayscale(0%) blur(0px)', scale: 1.03 as const },
}

export default function NewCreativeLab() {
  const reduced = useReducedMotion()

  return (
    <section id="creative-lab" style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingBottom: '48px' }}>

        {/* Title bar — ink fade-in */}
        <motion.div
          style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 20px' }}
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px' }}>
            Creative Lab
          </h2>
        </motion.div>

        {/* Description */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid #111008', marginBottom: '0' }}>
          <p className="font-eb-garamond" style={{ fontSize: '15px', fontStyle: 'italic', lineHeight: 1.6 }}>
            Side work, spec work, and things made for the love of making — process artefacts, motion studies, posters, and paintings.
          </p>
          <span className="font-oswald" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4, flexShrink: 0 }}>Vol. 1 — 4 Entries</span>
        </div>

        {/* 4-column grid — staggered fade+rise, then grayscale→color on hover */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}
          initial={reduced ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {items.map((item, i) => {
            const sharedStyle = {
              borderRight: i < items.length - 1 ? '1px solid #111008' : 'none',
              display: 'flex',
              flexDirection: 'column' as const,
            }

            return (
              <motion.a
                key={item.number}
                href={item.href}
                className="lab-card"
                style={{ ...sharedStyle, textDecoration: 'none', color: 'inherit' }}
                variants={fadeUp}
                initial="rest"
                whileHover={reduced ? undefined : 'hover'}
                animate="rest"
              >
                {/* Number + title */}
                <div style={{ padding: '30px 32px 10px' }}>
                  <span
                    className="font-barlow font-semibold"
                    style={{ fontSize: '9px', letterSpacing: '0.15em', backgroundColor: '#111008', color: '#F2EDE2', padding: '2px 7px', display: 'inline-block', marginBottom: '8px' }}
                  >
                    {item.number}
                  </span>
                  <p className="font-playfair font-bold" style={{ fontSize: '16px' }}>
                    {item.title}
                  </p>
                </div>

                {/* Image — grayscale starts desaturated, brightens on hover */}
                <div style={{ flex: 1, padding: '0 32px 32px' }}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    variants={reduced ? {} : imageVariants}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ width: '100%', aspectRatio: '23/16', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </motion.a>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
