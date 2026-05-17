import { motion, useReducedMotion } from 'framer-motion'
import { fadeIn, viewportOnce } from '../lib/motionConfig'

export default function NewFeaturedReview() {
  const reduced = useReducedMotion()

  return (
    <section style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingBottom: '48px' }}>

        {/* Title bar */}
        <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 20px', marginBottom: '0' }}>
          <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px', letterSpacing: '0.05em' }}>
            Featured Review
          </h2>
        </div>

        {/* Review card — fades and rises into view */}
        <motion.div
          style={{ backgroundColor: '#F0E8D4', border: '1px solid #111008', borderTop: 'none', padding: '48px 24px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >

          {/* Avatar with quote badge */}
          <motion.div
            style={{ position: 'relative', marginBottom: '28px' }}
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
          >
            <img
              src="/images/client.jpg"
              alt="Lee John Nottingham"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'grayscale(20%)',
                display: 'block',
              }}
            />
            <span style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#111008',
              color: '#F0EBE0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              lineHeight: '1',
            }}>
              "
            </span>
          </motion.div>

          {/* Quote */}
          <p className="font-old-standard" style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center', maxWidth: '760px', marginBottom: '24px' }}>
              Working with Nang was smooth and collaborative. The final book cover matched the vision I had in mind while still feeling professional and visually appealing.           
          </p>
          {/* Divider */}
          <div style={{ width: '60px', height: '1px', backgroundColor: '#111008', marginBottom: '20px' }} />

          {/* Name */}
          <p className="font-playfair font-bold" style={{ fontSize: '18px', marginBottom: '6px' }}>
            Lee John Nottingham
          </p>

          {/* Role */}
          <p className="font-barlow uppercase" style={{ fontSize: '11px', letterSpacing: '0.15em', opacity: 0.6 }}>
            Client
          </p>

        </motion.div>
      </div>
    </section>
  )
}
