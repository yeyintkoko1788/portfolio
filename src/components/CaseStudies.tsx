import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import circlingIcon from '../assets/images/circling-interactive-icon.png'
import { projects } from '../data/projects'

const filters = ['All Projects', 'UI/UX Design', 'Visual Design']

type Project = typeof projects[0]

function Card({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #E0DAD2',
        cursor: 'pointer',
        aspectRatio: '1 / 1',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="group"
    >
      {/* Project image — 563:400 ratio */}
      <div style={{ aspectRatio: '563 / 400', width: '100%', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={p.image}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
          className="group-hover:scale-105"
        />
      </div>

      {/* Card body */}
      <div style={{ flex: 1, padding: '0 20px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1B1712' }}>{p.title}</h3>
          <img src={circlingIcon} alt="" className="spin-slow" style={{ width: '48px', height: '48px', flexShrink: 0, marginLeft: '8px' }} />
        </div>
        <p style={{ fontSize: '12px', color: '#7A736A', lineHeight: 1.7 }}>{p.description}</p>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const navigate = useNavigate()
  const [active, setActive] = useState('All Projects')

  const filtered = active === 'All Projects'
    ? projects
    : projects.filter((p) => p.tag === active)

  return (
    <section id="case-studies" style={{ padding: '80px' }}>
      {/* Title */}
      <h2
        style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '0.08em', color: '#1B1712', marginBottom: '20px', textAlign: 'center' }}
        className="uppercase"
      >
        Featured Case Studies
      </h2>

      {/* Filter tabs — pipe style matching navbar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span style={{ color: '#C4706A', fontSize: '13px', lineHeight: 1 }}>|</span>
            <span style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: active === f ? '#1B1712' : '#5A4F4A',
              fontWeight: active === f ? 600 : 400,
              transition: 'color 0.2s',
            }}>
              {f}
            </span>
          </button>
        ))}
      </div>

      {/* Staggered 2-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '180px', alignItems: 'start' }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {filtered.filter((_, i) => i % 2 === 0).map((p) => (
            <Card key={p.title} p={p} onClick={() => p.slug && navigate(`/projects/${p.slug}`)} />
          ))}
        </div>

        {/* Right column — staggered down */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '160px' }}>
          {filtered.filter((_, i) => i % 2 !== 0).map((p) => (
            <Card key={p.title} p={p} onClick={() => p.slug && navigate(`/projects/${p.slug}`)} />
          ))}
        </div>
      </div>
    </section>
  )
}
