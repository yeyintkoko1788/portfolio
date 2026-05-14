import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkTogether from './WorkTogether'
import { projects } from '../data/projects'
import circlingIcon from '../assets/images/circling-interactive-icon.png'
import ydOverview from '../assets/images/yd-overview.png'
import ydTopnav from '../assets/images/yd-topnav.png'
import ydTopnavOg from '../assets/images/yd-topnav-og.png'
import ydMenu from '../assets/images/yd-menu.png'
import ydMenuOg from '../assets/images/yd-menu-og.png'
import ydCatering from '../assets/images/yd-catering.png'
import ydCateringOg from '../assets/images/yd-catering-og.png'
import ydReserve from '../assets/images/yd-reserve.png'
import ydReserveOg from '../assets/images/yd-reserve-og.png'
import ydContactForm from '../assets/images/yd-contact-form.png'
import ydContactOg from '../assets/images/yd-contact-og.png'
import ydMyActivity from '../assets/images/yd-my-activity.png'

export default function YangonDelightDetail() {
  const navigate = useNavigate()

  const moreProjects = useMemo(() => {
    const others = projects.filter(p => p.slug !== 'yangon-delight')
    const shuffled = [...others].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 2)
  }, [])

  return (
    <div style={{ background: '#F2F0EC', minHeight: '100vh' }}>
      <div style={{ margin: '0 auto', padding: '60px 80px 0' }}>

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
            color: '#7A736A',
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
          UI/UX Redesign · Restaurant Digital Experience
        </p>

        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#1B1712',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Yangon Delight Website Redesign
          </h1>
          <img
            src={circlingIcon}
            alt=""
            className="spin-slow"
            style={{ width: '72px', height: '72px', flexShrink: 0, marginTop: '4px' }}
          />
        </div>

        {/* Meta row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '0 64px', justifyContent: 'start', margin: '32px 0 52px' }}>
          {[
            { label: 'Type', value: 'Personal project' },
            { label: 'Role', value: 'UI/UX designer' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Year', value: '2026' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A736A', margin: '0 0 6px' }}>
                {label}
              </p>
              <p style={{ fontSize: '13px', color: '#1B1712', fontWeight: 500, margin: 0 }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Overview image */}
        <div style={{ marginBottom: '72px' }}>
          <img
            src={ydOverview}
            alt="Yangon Delight screens overview"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        {/* Overview section */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A736A',
            marginBottom: '20px',
          }}>
            Overview
          </p>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '24px',
          }}>
            An award-winning restaurant with a website that worked against it
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#5A4F4A',
            lineHeight: 1.85,
          }}>
            Yangon Delight is Yangon's pioneering Burmese restaurant, rated 8+ by Net Parrot and listed among the city's top 10.
            Despite that reputation, the website had 9 navigation items with the 3 most critical user actions buried inside a collapsed dropdown.
            There was no account management, no activity tracking, and no status hierarchy guiding visitors toward any action.
            I redesigned the full digital experience across 6 pages and 3 modal flows as a self-initiated concept project — found and chosen as a real user.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          marginBottom: '80px',
        }}>
          {[
            { value: '6', label: 'pages redesigned' },
            { value: '3', label: 'modal flows introduced' },
            { value: '33%', label: 'nav complexity reduced' },
            { value: '0 → 1', label: 'account dashboard built' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontSize: '36px', fontWeight: 700, color: '#EF767A', margin: '0 0 8px', lineHeight: 1 }}>
                {value}
              </p>
              <p style={{ fontSize: '12px', color: '#7A736A', margin: 0, lineHeight: 1.5 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A736A',
            marginBottom: '20px',
          }}>
            The Problem
          </p>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Three structural failures that broke every user journey
          </h2>
          <p style={{ fontSize: '14px', color: '#7A736A', marginBottom: '32px' }}>
            Three stood out as the root causes of every broken flow.
          </p>

          {/* 3 problem cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {[
              { num: '01', title: 'Broken navigation hierarchy' },
              { num: '02', title: 'Unstable, actionless hero' },
              { num: '03', title: 'Zero account functionality' },
            ].map(({ num, title }) => (
              <div key={num} style={{
                background: '#333333',
                border: '1px solid #E0DAD2',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#EF767A', margin: '0 0 10px', letterSpacing: '0.05em' }}>
                  {num}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#F2F0EC', margin: 0, lineHeight: 1.4 }}>
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* Additional issues label */}
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#7A736A',
            marginBottom: '16px',
          }}>
            Additional issues discovered
          </p>

          {/* 4 dark issue cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '80px' }}>
            {[
              {
                title: 'Catering page',
                body: 'Two pages mismatched across pages. Social proof sat below the inquiry form after the conversion point.',
              },
              {
                title: 'Contact & Job listings',
                body: '"Learn More" and "Apply Now" both opened identical emails, no description, no context.',
              },
              {
                title: 'Menu page',
                body: 'No category filters, no search, no back-to-top. A single unbroken scroll through the full menu with no way to navigate by dish type.',
              },
              {
                title: 'Reservation flow',
                body: 'The booking widget was a third-party Zenchef embed displayed in Dutch, a language inconsistency on an otherwise English site.',
              },
            ].map(({ title, body }) => (
              <div key={title} style={{
                background: '#333333',
                borderRadius: '12px',
                padding: '28px',
              }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#F2F0EC', margin: '0 0 10px' }}>
                  {title}
                </p>
                <p style={{ fontSize: '13px', color: '#ADADAD', lineHeight: 1.7, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before vs After — Navigation */}
        <div style={{ marginBottom: '80px' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A736A',
            marginBottom: '20px',
          }}>
            Before vs After
          </p>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Navigation — from 9 buried items to 1-click access
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            The original nav forced users into a dropdown to find the most-used pages. The redesign surfaces all core actions at the top level and reduces total items by 33%.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Before */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#E8A09A', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  Before — Single scroll, no navigation
                </p>
              </div>
              <img
                src={ydTopnavOg}
                alt="Original Yangon Delight navigation"
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            {/* After */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#8BAF8B', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  After — Filters, search, tabs, pricing
                </p>
              </div>
              <img
                src={ydTopnav}
                alt="Redesigned Yangon Delight navigation"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Before vs After — Menu */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Menu page — from bare scroll to visual-first browsing
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            The original menu had no filters, no search, and no way to navigate by category or dietary need. The redesign makes finding food feel like browsing, not reading a document.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Before */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#E8A09A', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  Before — 9 items, core actions hidden
                </p>
              </div>
              <img
                src={ydMenuOg}
                alt="Original Yangon Delight menu"
                style={{ width: '100%', display: 'block' }}
              />
            </div>

            {/* After */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#8BAF8B', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  After — 5 items, all top actions visible
                </p>
              </div>
              <img
                src={ydMenu}
                alt="Redesigned Yangon Delight menu"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Before vs After — Catering */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Catering page — structured around 3 user questions
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            Every catering visitor needs to answer three questions before they'll inquire: what does it cost, what's included, and what do I do next. The original answered none of them directly.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#E8A09A', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  Before — Price doesn't match, hard to read menu
                </p>
              </div>
              <img src={ydCateringOg} alt="Original catering page" style={{ width: '100%', display: 'block' }} />
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#8BAF8B', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  After — Correct pricing, easy to read menu, easy navigation
                </p>
              </div>
              <img src={ydCatering} alt="Redesigned catering page" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* Before vs After — Reservation */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Reservation — Dutch third-party widget replaced with on-brand modal
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            The original booking flow used a Zenchef embed displayed in Dutch on an English site with third-party branding and no connection to the design system. The redesign replaces it with a 6-field modal overlay that keeps users in context.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#E8A09A', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  Before — Dutch embed, third-party branding
                </p>
              </div>
              <img src={ydReserveOg} alt="Original reservation flow" style={{ width: '100%', display: 'block' }} />
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#8BAF8B', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  After — 6-field modal, on-brand
                </p>
              </div>
              <img src={ydReserve} alt="Redesigned reservation modal" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* Before vs After — Contact */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            Contact page — Broken template fixed, layout rebuilt
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            The original shipped with job listings where both buttons sent straight to email for the application. The redesign removes the job listings entirely, and introduces a form + map layout that answers where to reach us and where to find us in the same view.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#E8A09A', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  Before — Contact form and job listings
                </p>
              </div>
              <img src={ydContactOg} alt="Original contact page" style={{ width: '100%', display: 'block' }} />
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E0DAD2' }}>
              <div style={{ background: '#8BAF8B', padding: '10px 16px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>
                  After — Contact form in necessary details
                </p>
              </div>
              <img src={ydContactForm} alt="Redesigned contact page" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* My Activity — 0→1 feature */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            My Activity dashboard — a 0→1 feature
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '32px' }}>
            This feature didn't exist in the original site. Returning customers had zero way to view or manage their bookings. The redesign introduces a full dashboard with booking history, live status tracking, and state-aware actions.
          </p>

          <div style={{ borderRadius: '16px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={ydMyActivity}
              alt="My Activity dashboard"
              style={{ width: '100%', display: 'block', borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* Reflection */}
        <div style={{ marginBottom: '100px' }}>
          <p style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A736A',
            marginBottom: '20px',
          }}>
            Reflection
          </p>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1B1712',
            lineHeight: 1.25,
            marginBottom: '12px',
          }}>
            What this project taught me
          </h2>
          <p style={{ fontSize: '14px', color: '#5A4F4A', lineHeight: 1.85, marginBottom: '40px' }}>
            Six pages in, the clearest lesson was that every decision had to be justified, not just by how it looked, but by what problem it solved and for whom.
          </p>

          {/* Top 2 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            {[
              {
                title: 'Real user, sharper eye',
                body: 'Finding this site as a genuine user meant I had authentic frustrations to solve, not invented personas. The currency error and the Dutch widget stood out because I was actually trying to use the site.',
              },
              {
                title: 'Sequencing is a UX decision',
                body: "Moving the testimonial above the CTAs on the catering page wasn't aesthetic. It was a conversion sequencing fix, trust before the ask. That distinction is exactly the kind of thinking I want to be designing for.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#333333', borderRadius: '12px', padding: '32px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#F2F0EC', margin: '0 0 12px' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#ADADAD', lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Bottom full-width card */}
          <div style={{ background: '#333333', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#F2F0EC', margin: '0 0 12px' }}>Content before design</p>
            <p style={{ fontSize: '13px', color: '#ADADAD', lineHeight: 1.75, margin: 0 }}>
              The job listings had no descriptions and two buttons that opened identical emails. I removed them rather than designing around empty content. A polished UI on top of a broken experience is still broken.
            </p>
          </div>
        </div>

      </div>

      {/* More Case Studies */}
      <div style={{ borderTop: '1px solid #C4B8A8', marginTop: '20px', padding: '60px 80px 80px' }}>
        <h2 style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#1B1712',
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
                color: '#5A4F4A',
                margin: 0,
              }}>
                {p.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WorkTogether />
    </div>
  )
}
