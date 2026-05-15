import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motionConfig'

const services = [
  {
    icon: '/images/dots-nine.png',
    title: 'UI/UX Design',
    text: 'From mobile apps to desktop interfaces. I focus on layout, hierarchy, and the visual layer, making sure it looks good and holds up under real use.',
  },
  {
    icon: '/images/eye.png',
    title: 'Visual Design',
    text: 'Posters, book covers, brand identity, email design. If it needs to look intentional and say something, this is where I work best.',
  },
]

export default function NewWhatIDo() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-[#F0E8D4] text-[#111008]">
      <div className="page-px" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ border: '1px solid #111008' }}>

          {/* Section title bar — ink fade-in */}
          <motion.div
            style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 24px' }}
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px', letterSpacing: '0.1em' }}>
              What I Do
            </h2>
          </motion.div>

          {/* Services — staggered fade+rise */}
          <motion.div
            style={{ padding: '36px 24px' }}
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                style={{ marginBottom: i < services.length - 1 ? '48px' : '0' }}
              >
                {/* Icon + title */}
                <div className="flex items-center" style={{ gap: '12px', marginBottom: '16px' }}>
                  <img src={item.icon} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  <h3 className="font-barlow font-bold uppercase" style={{ fontSize: '22px', letterSpacing: '0.08em' }}>
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="font-old-standard" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
