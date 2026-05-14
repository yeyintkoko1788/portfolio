import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import WorkTogether from './WorkTogether'
import circlingIcon from '../assets/images/circling-interactive-icon.png'
import fdLanding from '../assets/images/fd-landing.png'
import fdFabricLibraryDesktop from '../assets/images/fd-fabric-library-desktop.png'
import fdFabricLibraryMobile from '../assets/images/fd-fabric-library-mobile-2.png'
import fdLinenDesktop from '../assets/images/fd-linen-desktop.png'
import fdLinenMobile from '../assets/images/fd-linen-mobile-2.png'
import fdLabelcheckDesktop from '../assets/images/fd-linen-mobile-3.png'
import fdLabelcheckMobile from '../assets/images/fd-labelcheck-mobile-2.png'
import fdScoreDesktop from '../assets/images/fd-score-desktop.png'
import fdScoreMobile from '../assets/images/fd-score-mobile.jpg'
import fdLabelcheckResultDesktop from '../assets/images/fd-labelcheck-result-desktop.png'
import fdLabelcheckResultMobile from '../assets/images/fd-labelcheck-result-mobile.jpg'

export default function FabricDecodeDetail() {
  const navigate = useNavigate()

  const moreProjects = useMemo(() => {
    const others = projects.filter(p => p.slug !== 'fabric-decode')
    const shuffled = [...others].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 2)
  }, [])

  return (
    <>
    <div style={{ background: '#333333', minHeight: '100vh' }}>
      <div style={{ padding: '60px 80px 0' }}>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#F2F0EC',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '40px',
            padding: 0,
          }}
        >
          ← Back
        </button>

        {/* Subtitle */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#EF767A',
          marginBottom: '16px',
        }}>
          Product Design · Sustainability Tool
        </p>

        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            lineHeight: 1.1,
            margin: 0,
            maxWidth: '800px',
          }}>
            Fabric Decode - Sustainability Tool for What You Wear
          </h1>
          <img
            src={circlingIcon}
            alt=""
            className="spin-slow"
            style={{ width: '72px', height: '72px', flexShrink: 0, marginTop: '4px', filter: 'invert(1)' }}
          />
        </div>

        {/* Meta row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '0 64px', justifyContent: 'start', margin: '32px 0 52px' }}>
          {[
            { label: 'Type', value: 'Personal project' },
            { label: 'Role', value: 'UI/UX designer' },
            { label: 'Tools', value: 'Figma, Claude AI' },
            { label: 'Year', value: '2026' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F2F0EC', margin: '0 0 6px' }}>
                {label}
              </p>
              <p style={{ fontSize: '13px', color: '#F2F0EC', fontWeight: 500, margin: 0 }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div style={{ marginBottom: '72px' }}>
          <img
            src={fdLanding}
            alt="Fabric Decode landing screen"
            style={{ width: '100%', display: 'block', borderRadius: '12px' }}
          />
        </div>

        {/* What It Is */}
        <div style={{ marginBottom: '80px' }}>
          <p style={{
            fontSize: '33px',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '20px',
          }}>
            What It Is
          </p>
          <p style={{
            fontSize: '14px',
            color: '#F2F0EC',
            lineHeight: 1.85,
            maxWidth: '680px',
            marginBottom: '32px',
          }}>
            A web app that decodes garment labels into eco scores, care guidance, and shareable result cards, built for conscious shoppers who want clarity without the research.
          </p>

          <p style={{ fontSize: '14px', color: '#F2F0EC', marginBottom: '16px' }}>
            Three core features:
          </p>

          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
            {[
              'A Label Checker where you enter the fabric name from a garment label and instantly get an eco score, a material breakdown, and care instructions.',
              'A downloadable result card from the label check, designed to be shareable and actually worth saving.',
              'A Fabric Library with detail pages for 9 base materials, each with sustainability data, care guidance, and a score breakdown.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 1.85 }}>
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '32px',
          }}>
            Overview
          </h2>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {[
              { value: '66%', label: "Fewer searches to identify a fabric's impact" },
              { value: '4-in-1', label: 'Outputs from a single label input' },
              { value: '36', label: 'Data points across 9 fabrics × 4 dimensions' },
              { value: '1-click', label: 'Scoring methodology, no tabs opened' },
            ].map(({ value, label }) => (
              <div key={value} style={{
                background: '#F9C8CA',
                borderRadius: '12px',
                padding: '28px 24px',
              }}>
                <p style={{ fontSize: '28px', fontWeight: 700, color: '#5A5A5A', margin: '0 0 10px', lineHeight: 1 }}>
                  {value}
                </p>
                <p style={{ fontSize: '13px', color: '#5A5A5A', lineHeight: 1.6, margin: 0 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Overview paragraph */}
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, margin: 0 }}>
            Understanding what a garment label means typically requires 3 or more separate searches such as one per material, across sources with varying quality and conflicting data. Fabric Decode reduces that to a single input. Type a label composition, get an eco score, score band, material breakdown, and care instructions instantly. That's a 66% reduction in research steps for the most common two-material label.
            {' '}The result isn't just data, it's a designed artifact. Every label check generates a downloadable card, built to be saved and shared. The loop is functional and rewarding: check a label, understand it, keep it.
            {' '}Built in 3 days. 1 day design, 1 day development, 1 day of revisions as a deliberately scoped solo project. Designed in Figma, shipped with Claude Code.
          </p>
        </div>

        {/* The Problem */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '28px',
          }}>
            The Problem
          </h2>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, marginBottom: '16px' }}>
            A garment label that reads "70% cotton, 30% polyester" tells a shopper nothing useful on its own. Is cotton sustainable? Compared to what? How much water did it use? What about polyester, recyclable or not? Each question leads to a separate search, a different source, and often a contradictory answer.
            {' '}For a conscious shopper making a decision at a rack or a checkout page, that research friction is enough to give up. The information exists, it's just scattered, inconsistent, and takes longer than the purchase decision itself.
          </p>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, margin: 0 }}>
            Design question: how do you surface fabric sustainability data for someone with 30 seconds at a rack, not 30 minutes and multiple browser tabs?
          </p>
        </div>

        {/* Design Process */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '16px',
          }}>
            Design Process
          </h2>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 1.85, marginBottom: '32px' }}>
            The product is built around a single user loop: encounter a fabric — understand it — keep the result. Each feature serves one part of that loop.
          </p>

          {/* 3 feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              {
                title: 'Fabric library',
                body: '9 material cards with filter states: all, natural, semi-synthetic, synthetic. Each links to a detail page with sustainability data, score breakdown, pros, cons, and care guidance.',
              },
              {
                title: 'Label checker',
                body: 'One input field. Returns eco score, score band, per-material breakdown, and care instructions. Designed for a single action: no setup, no account, no friction.',
              },
              {
                title: 'Downloadable card',
                body: "Every label check generates a shareable result card. Not a screenshot, a designed output worth saving. It turns a one-time lookup into something you keep, like a receipt for a conscious decision.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#F9C8CA', borderRadius: '12px', padding: '28px 24px' }}>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#5A5A5A', margin: '0 0 12px' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#5A5A5A', lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Fabric library screenshot */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
            <img src={fdFabricLibraryDesktop} alt="Fabric library desktop view" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
            <img src={fdFabricLibraryMobile} alt="Fabric library mobile view" style={{ width: '288px', display: 'block', borderRadius: '12px' }} />
          </div>
        </div>

        {/* Linen page — desktop + mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start', marginBottom: '80px' }}>
          <img src={fdLinenDesktop} alt="Linen page desktop" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
          <img src={fdLinenMobile} alt="Linen page mobile" style={{ width: '220px', display: 'block', borderRadius: '12px' }} />
        </div>

        {/* Label checker — desktop + mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start', marginBottom: '80px' }}>
          <img src={fdLabelcheckDesktop} alt="Label checker desktop" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
          <img src={fdLabelcheckMobile} alt="Label checker mobile" style={{ width: '291px', display: 'block', borderRadius: '12px' }} />
        </div>

        {/* Scoring System */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '20px',
          }}>
            Scoring System
          </h2>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, marginBottom: '32px' }}>
            The eco score is calculated from a weighted formula built on publicly available environmental research. Four dimensions, each normalized to 100:
          </p>

          <div style={{ background: '#F9C8CA', borderRadius: '16px', padding: '40px 48px', marginBottom: '32px' }}>
            {[
              'Sustainability 35%',
              'Recyclability 25%',
              'Water usage 20%',
              'Chemical impact 20%',
              'Final score = weighted average across materials by label percentage. Example: 70% cotton (~60) + 30% polyester (~45) → Eco Score: 55 / 100 Moderate.',
            ].map((line, i) => (
              <p key={i} style={{ fontSize: '14px', color: '#5A5A5A', lineHeight: 1.85, margin: i < 4 ? '0 0 8px' : '16px 0 0' }}>
                {line}
              </p>
            ))}
          </div>

          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, margin: 0 }}>
            The methodology is surfaced directly in the UI. Clicking "How scores work" opens a modal that explains the four dimensions and the score bands, no external link, no fine print. Users can verify the logic in one click without opening a new tab. Transparency is built into the interaction, not bolted on as a footnote.
          </p>
        </div>

        {/* Score — desktop + mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start', marginBottom: '80px' }}>
          <img src={fdScoreDesktop} alt="Score desktop view" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
          <img src={fdScoreMobile} alt="Score mobile view" style={{ width: '154px', display: 'block', borderRadius: '12px' }} />
        </div>

        {/* Outcome */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '20px',
          }}>
            Outcome
          </h2>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, marginBottom: '32px' }}>
            The eco score is calculated from a weighted formula built on publicly available environmental research. Four dimensions, each normalized to 100:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
            {[
              { title: 'End-to-end ownership', body: 'Concept, UX flow, UI design, and a live deployed product — solo, in 3 days.' },
              { title: 'Scope judgment', body: 'Community features cut before development. Deliberate product thinking, not scope creep recovery.' },
              { title: 'Formula-driven UX', body: 'A custom scoring system from research data, with a UI that makes the output feel simple, not scientific.' },
              { title: 'Output as reward', body: 'The downloadable card turns a functional lookup into a kept artifact.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#F9C8CA', borderRadius: '12px', padding: '28px 24px' }}>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#5A5A5A', margin: '0 0 10px' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#5A5A5A', lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
            <img src={fdLabelcheckResultDesktop} alt="Label check result desktop" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
            <img src={fdLabelcheckResultMobile} alt="Label check result mobile" style={{ width: '276px', display: 'block', borderRadius: '12px' }} />
          </div>
        </div>

        {/* Reflection */}
        <div style={{ marginBottom: '100px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F2F0EC',
            marginBottom: '24px',
          }}>
            Reflection
          </h2>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, marginBottom: '16px' }}>
            The scoring formula is built from publicly available data, but it isn't peer-reviewed. The "How scores work" modal makes the methodology visible — adding cited sources per material would make it more defensible as the product grows.
          </p>
          <p style={{ fontSize: '14px', color: '#F2F0EC', lineHeight: 2, margin: 0 }}>
            The downloadable card has the most room to grow. If this had a roadmap, the next step would be wardrobe tracking: saving multiple checks and building a personal eco score over time. The card already behaves like a souvenir — a collection feature is the natural next step.
          </p>
        </div>

      </div>

      {/* More Case Studies */}
      <div style={{ borderTop: '1px solid #4A4A4A', padding: '60px 80px 80px' }}>
        <h2 style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#F2F0EC',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          More Case Studies
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {moreProjects.map(p => (
            <div
              key={p.title}
              onClick={() => p.slug && navigate(`/projects/${p.slug}`)}
              style={{ cursor: p.slug ? 'pointer' : 'default' }}
            >
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
              </div>
              <p style={{
                fontSize: '24px',
                textTransform: 'uppercase',
                color: '#F2F0EC',
                margin: 0,
              }}>
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <WorkTogether />
  </>
  )
}
