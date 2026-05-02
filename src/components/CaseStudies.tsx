import { useState } from 'react'
import circlingIcon from '../assets/images/circling-interactive-icon.png'
import yangonDelight from '../assets/images/yangondelight.png'
import karotteCollection from '../assets/images/karottecollection.png'
import emailRedesign from '../assets/images/email-redesign.png'
import fabricDecode from '../assets/images/fabric-decode.png'
import bookCover from '../assets/images/bookcover.png'
import adidas from '../assets/images/adidas.png'
import vera from '../assets/images/vera.png'

const projects = [
  {
    title: 'Yangon Delight',
    category: 'UI/UX Design',
    description: 'A food delivery app for a local Myanmar restaurant brand. Focused on warm aesthetics and frictionless ordering.',
    image: yangonDelight,
    tag: 'UI/UX Design',
  },
  {
    title: 'Karotte Collection',
    category: 'Visual Design',
    description: 'Brand identity and visual system for a slow-fashion linen label built from scratch.',
    image: karotteCollection,
    tag: 'Visual Design',
  },
  {
    title: 'Email Redesign',
    category: 'Visual Design',
    description: 'A full overhaul of a transactional email system — cleaner hierarchy, better readability, stronger brand voice.',
    image: emailRedesign,
    tag: 'Visual Design',
  },
  {
    title: 'Fabric Decode',
    category: 'UI/UX Design',
    description: 'An app that helps users understand fabric compositions and care labels through a simple scan.',
    image: fabricDecode,
    tag: 'UI/UX Design',
  },
  {
    title: 'Book Cover',
    category: 'Visual Design',
    description: 'Editorial cover design balancing type and image to communicate tone before the first page is read.',
    image: bookCover,
    tag: 'Visual Design',
  },
  {
    title: 'VERA Vintage Fashion',
    category: 'UI/UX Design',
    description: 'Vintage shopping that teaches you why it matters, lets you try it on with AI, and makes second-hand feel first-class.',
    image: vera,
    tag: 'UI/UX Design',
  },
  {
    title: 'Adidas Campaign',
    category: 'UI/UX Design',
    description: 'A conceptual campaign visual for Adidas — sport meets minimal editorial.',
    image: adidas,
    tag: 'UI/UX Design',
  },
]

const filters = ['All Projects', 'UI/UX Design', 'Visual Design']

type Project = typeof projects[0]

function Card({ p }: { p: Project }) {
  return (
    <div
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
            <Card key={p.title} p={p} />
          ))}
        </div>

        {/* Right column — staggered down */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '160px' }}>
          {filtered.filter((_, i) => i % 2 !== 0).map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
