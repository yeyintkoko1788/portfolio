import { motion, useReducedMotion } from 'framer-motion'
import { stampReveal, staggerContainer, viewportOnce } from '../lib/motionConfig'

const steps = [
  {
    step: 'Step 1',
    title: 'Understand the product',
    text: 'Before touching anything, I learn what the product is, what it\'s trying to do, and where it\'s falling short.',
  },
  {
    step: 'Step 2',
    title: 'Define the problem',
    text: 'I find the real issue, not just the surface complaint. What\'s actually broken and why does it matter?',
  },
  {
    step: 'Step 3',
    title: 'Research',
    text: 'I look at the space, competitors, users, patterns to build context before forming opinions.',
  },
  {
    step: 'Step 4',
    title: 'Think like the user',
    text: 'Who\'s actually using this? What\'s their age, context, patience level? Map the journey from their side.',
  },
  {
    step: 'Step 5',
    title: 'Design',
    text: 'I start with what I want to change and what I want to add. Layout, hierarchy, format built with intention.',
  },
  {
    step: 'Step 6',
    title: 'Iterate with feedback',
    text: 'I don\'t design in a vacuum. I share work, take the notes that matter, and refine until it\'s right.',
  },
]

export default function NewHowIWork() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-[#F0E8D4] text-[#111008]">
      <div className="page-px" style={{ paddingBottom: '48px' }}>
        <div style={{ border: '1px solid #111008' }}>

          {/* Title bar — ink fade-in */}
          <motion.div
            style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 24px' }}
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px', letterSpacing: '0.1em' }}>
              How I Work
            </h2>
          </motion.div>

          {/* Steps grid — 2 rows of 3, each row stamps in with stagger */}
          <div style={{ padding: '0 24px 32px' }}>
            {[steps.slice(0, 3), steps.slice(3, 6)].map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={reduced ? false : 'hidden'}
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '28px', marginBottom: rowIndex === 0 ? '8px' : '0' }}
              >
                {row.map((item, colIndex) => (
                  <motion.div
                    key={item.step}
                    variants={stampReveal}
                    style={{ paddingRight: colIndex < 2 ? '32px' : '0' }}
                  >
                    {/* Step label */}
                    <p className="font-barlow" style={{ fontSize: '11px', letterSpacing: '0.12em', opacity: 0.6, marginBottom: '10px' }}>
                      {item.step}
                    </p>

                    {/* Horizontal line with dot */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#111008',
                        flexShrink: 0,
                        display: 'block',
                      }} />
                      <span style={{
                        flex: 1,
                        height: '1px',
                        backgroundColor: '#111008',
                        display: 'block',
                        marginLeft: '0',
                      }} />
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair" style={{ fontSize: '20px', lineHeight: '1.3', marginBottom: '12px' }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
