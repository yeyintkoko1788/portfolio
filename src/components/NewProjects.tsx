import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer, paperSpring, viewportOnce } from '../lib/motionConfig'

const projects = [
  {
    number: '01',
    category: 'UI/UX Design · Web',
    title: 'Yangon Delight Restaurant Website',
    desc: 'Discovered as a real user. Surfaced Menu, Online Order, and Catering from a hidden dropdown and redesigned 6 pages to match how people actually visit a restaurant.',
    image: '/images/proj-yd.png',
    href: '/projects/yangon-delight',
    tags : ['→ 33% navigation complexity • 9 → 6 top-navi tems']
  },
  {
    number: '02',
    category: 'UI/UX Design · Mobile Web',
    title: 'Adidas Korea × Enhypen: Sunghoon Taekwondo Campaign navigation',
    desc: "Adidas Korea's Sunghoon x Taekwondo campaign had a fully built lookbook and zero navigation paths to reach it. Four targeted fixes transformed a dead-end into a destination.",
    image: '/images/proj-lookbook.png',
    href: '/projects/adidas-korea',
    tags : ['O → 100% navigation completion • Dead-end eliminated • No new content required']
  },
  {
    number: '03',
    category: 'UI/UX Research · Tool',
    title: 'Fabric Decode — Sustainability Transparency Tool',
    desc: 'Designed a label-scanning tool that translates opaque fabric composition data into human-readable sustainability ratings. Closes the information gap between fast fashion marketing and material reality.',
    image: '/images/proj-fabric.png',
    href: '/projects/fabric-decode',
    tags : ['UX Research', 'Information Design', 'Start-to-script Tool']
  },
  {
    number: '04',
    category: 'UI/UX Design · Platform',
    title: 'Vera Vintage Fashion Platform',
    desc: 'End-to-end fashion marketplace targeting secondhand-first shoppers. Trust signals, discovery flow, and seller-buyer interaction architecture.',
    image: '/images/proj-vera.png',
    href: '/projects/vera',
    tags : ['Full Flow', 'Research to prototype']
  },
  {
    number: '05',
    category: 'Visual Design · Print',
    title: 'Horror Short Story Collection — Book Cover',
    desc: 'Commissioned cover for a surrealist fiction collection. First paid client project. Real brief, real client, printed and delivered.',
    image: '/images/proj-bc.png',
    href: '/projects/book-cover',
    tags : ['Print', 'Art Direction', 'Typography']
  },
  {
    number: '06',
    category: 'Email Design · Campaign',
    title: 'Email Marketing Redesigns',
    desc: 'VIVAIA, TRIP ADVISOR, NIKE and GLOSSIER. Four emails with real problems. One designer who couldn\'t scroll past without fixing them.',
    image: '/images/proj-email.png',
    href: '/projects/email-redesign',
    tags : ['Editorial UX', 'Conversion-focused UI']
  },
  {
    number: '07',
    category: 'Branding · Identity',
    title: 'Karotte Collection Branding',
    desc: 'Retrospective brand identity for Karotte Collection, a slow-fashion linen label I founded, built, and ran solo in Myanmar.',
    image: '/images/proj-karotte.png',
    href: '/projects/karotte',
    tags : ['Logo', 'Palette', 'Type System']
  },
]

const filters = ['All Projects', 'UI/UX Designs', 'Visual Designs']

export default function NewProjects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const navigate = useNavigate()
  const reduced = useReducedMotion()

  const rows = [projects.slice(0, 2), projects.slice(2, 4), projects.slice(4, 7)]
  const visibleRows = rows
    .map((row, i) => ({ row, originalIdx: i }))
    .filter(({ originalIdx: i }) => {
      if (activeFilter === 'UI/UX Designs') return i < 2
      if (activeFilter === 'Visual Designs') return i === 2
      return true
    })

  // Brief delay lets the press animation feel tactile before navigation
  const handleCardClick = (href: string) => {
    if (href === '#') return
    if (reduced) { navigate(href); return }
    setTimeout(() => navigate(href), 110)
  }

  return (
    <section id="projects" style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ border: '1px solid #111008', padding: '24px' }}>

          {/* Header — ink fade-in */}
          <motion.div
            className="flex items-center justify-between"
            style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 20px' }}
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px' }}>
              Projects
            </h2>
            <span className="font-barlow" style={{ fontSize: '11px', color: '#F0EBE0', letterSpacing: '0.15em' }}>
              7 Projects · UI/UX &amp; Visual
            </span>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex" style={{ borderTop: '1px solid #111008', borderBottom: '2px solid #111008' }}>
            {filters.map((f, i) => (
              <div
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-oswald uppercase"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '15px',
                  letterSpacing: '0.18em',
                  padding: '8px 0',
                  borderRight: i < filters.length - 1 ? '2px solid #111008' : 'none',
                  backgroundColor: activeFilter === f ? '#111008' : 'transparent',
                  color: activeFilter === f ? '#F0EBE0' : '#111008',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
                {f}
              </div>
            ))}
          </div>

          {/* Project grid — rows: 2 | 2 | 3 */}
          {visibleRows.map(({ row, originalIdx }) => (
            <motion.div
              key={originalIdx}
              initial={reduced ? false : 'hidden'}
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: originalIdx === 0 ? '35fr 65fr' : originalIdx === 1 ? '1fr 1fr' : '1fr 1fr 1fr',
                gap: '0',
                marginBottom: '0',
              }}
            >
              {row.map((project, colIdx) => (
                <motion.div
                  key={project.number}
                  className="project-card"
                  variants={fadeUp}
                  whileHover={reduced ? {} : { y: -5, zIndex: 1 }}
                  whileTap={reduced ? {} : { y: 2, zIndex: 1 }}
                  transition={paperSpring}
                  onClick={() => handleCardClick(project.href)}
                  style={{
                    borderTop: '0.5px solid #111008',
                    borderBottom: originalIdx === 2 ? '1px solid #111008' : '0.5px solid #111008',
                    borderRight: colIdx < row.length - 1 ? '1px solid #111008' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: project.href !== '#' ? 'pointer' : 'default',
                    backgroundColor: '#F0E8D4',
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  {/* Category bar */}
                  <div style={{ padding: '12px 16px 8px' }}>
                    <span className="font-barlow font-semibold uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', backgroundColor: '#111008', color: '#F2EDE2', padding: '5px 10px', display: 'inline-block' }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '20px 20px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Number + title */}
                    <div className="flex" style={{ gap: '16px', marginBottom: '20px' }}>
                      <span className="font-playfair font-bold" style={{ fontSize: '42px', lineHeight: '1', opacity: 0.2, flexShrink: 0 }}>
                        {project.number}
                      </span>
                      <div>
                        <h3 className="font-playfair font-bold" style={{ fontSize: '17px', lineHeight: '1.3', marginBottom: '10px' }}>
                          {project.title}
                        </h3>
                        <p className="font-old-standard" style={{ fontSize: '13px', lineHeight: '1.7', opacity: 0.7 }}>
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', overflow: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        style={{ width: '100%', objectFit: 'contain', maxHeight: '200px' }}
                      />
                    </div>

                    {/* Tags */}
                    {project.tags && (
                      <div style={{ borderTop: '1px solid #111008', paddingTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="font-barlow"
                            style={{ fontSize: '9px', letterSpacing: '0.12em', border: '1px solid #111008', padding: '3px 8px' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Link — keep for fallback */}
                    {!project.tags && <div style={{ borderTop: '1px solid #111008', paddingTop: '10px' }}>
                      {project.href !== '#' ? (
                        <Link
                          to={project.href}
                          className="font-barlow font-semibold uppercase"
                          style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#111008', textDecoration: 'none' }}
                        >
                          View Case Study →
                        </Link>
                      ) : (
                        <span className="font-barlow font-semibold uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', opacity: 0.3 }}>
                          Coming Soon
                        </span>
                      )}
                    </div>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
