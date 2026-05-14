import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import WorkTogether from './WorkTogether'
import circlingIcon from '../assets/images/circling-interactive-icon.png'
import bcPainting from '../assets/images/bc-painting.jpg'
import bcAi from '../assets/images/bc-ai.jpg'
import bcV1 from '../assets/images/bc-v1.png'
import bcV2 from '../assets/images/bc-v2.png'
import bcFinal1 from '../assets/images/bc-final1.png'
import bcFinal2 from '../assets/images/bc-final2.png'
import bcMockupTable from '../assets/images/bc-mockup-table.png'
import bcMockupStacked from '../assets/images/bc-mockup-stacked.png'

const BG = '#B8141A'
const TEXT = '#F2F0EC'
const MUTED = 'rgba(255,255,255,0.55)'
const GREEN = "#C0DD97"

export default function BookCoverDetail() {
  const navigate = useNavigate()

  const moreProjects = useMemo(() => {
    const others = projects.filter(p => p.slug !== 'book-cover')
    const shuffled = [...others].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 2)
  }, [])

  return (
    <>
      <div style={{ background: BG, minHeight: '100vh' }}>
        <div style={{ padding: '60px 80px 0' }}>

          {/* Back */}
          <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: MUTED, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '40px', padding: 0 }}>
            ← Back
          </button>

          {/* Subtitle */}
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: GREEN, marginBottom: '16px' }}>
            Visual Design · Editorial
          </p>

          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, lineHeight: 1.1, margin: 0, maxWidth: '800px' }}>
              Book Cover of the Wounded Spiral
            </h1>
            <img src={circlingIcon} alt="" className="spin-slow" style={{ width: '72px', height: '72px', flexShrink: 0, marginTop: '4px', filter: 'invert(1)' }} />
          </div>

          {/* Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '0 64px', justifyContent: 'start', margin: '32px 0 80px' }}>
            {[
              { label: 'Type', value: 'Personal project' },
              { label: 'Role', value: 'Graphic designer' },
              { label: 'Tools', value: 'Illustrator, Photoshop' },
              { label: 'Year', value: '2026' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: MUTED, margin: '0 0 6px' }}>{label}</p>
                <p style={{ fontSize: '13px', color: TEXT, fontWeight: 500, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* The Brief */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>The Brief</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
                The client provided an original oil painting as the primary visual and an AI-generated cover as a directional reference. His brief: dark, painterly, literary-surreal. Restrained, not pulp horror, not gothic. The painting stays the centerpiece.            </p>
                <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
                The challenge: the painting was never designed to be a book cover. Dense detail, no clean negative space, and elements that work in a painting but not on a cover. Making it readable without altering its character was the core design problem.
                </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <img src={bcPainting} alt="Original painting reference" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '12px' }} />
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, margin: 0 }}>Original painting</p>
              </div>
              <div>
                <img src={bcAi} alt="Reference research" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '12px' }} />
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, margin: 0 }}>Reference research</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>Research</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2 }}>
              Research focused on published literary and surrealist fiction covers of how designers handle painterly source material and place typography over complex backgrounds. References from Pinterest, YouTube, and Google. Key takeaway: let the painting lead, keep typography minimal, use tarnished gold to signal literary weight.
            </p>
          </div>

          {/* Concept Development */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>Concept Development</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
The painting's two figures were split across the wrap, masked figure on the front, figure facing away on the back. The background was repositioned on each side to create space for typography at the top.<br></br>
Font color was the hardest single decision. The painting has no dominant tone. After multiple tests, a bold custard yellow was selected — with drop shadow, darker base, lighter stroke, and a noise effect vector that causes the painting's colors to reflect into the letterforms. The title feels embedded, not placed.<br></br>
Three fonts were tested at the client's request for Baskerville, Cinzel, and Trajan Pro. He chose Cinzel Bold and Baskerville. <br></br>
Two creative directions were presented: Version 1 stripped everything back to painting and type, clean, restrained, the stronger design. Version 2 added an ornate gold border worked as a concept but pushed toward decorative, softening the atmosphere the brief called for.            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <img src={bcV1} alt="Concept V1" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '12px' }} />
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, margin: 0 }}>Version 1</p>
              </div>
              <div>
                <img src={bcV2} alt="Concept V2" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '12px' }} />
                <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, margin: 0 }}>Version 2</p>
              </div>
            </div>
          </div>

          {/* Revision */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>Revision</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2 }}>
The client arrived with clear references but became indecisive mid-process, something he acknowledged himself. 4 rounds, each turned around in under 1 hour: typography, layout, blurb copy, and final back cover adjustments. The blurb was initially centered, I flagged it, made the case for left-alignment, and the client agreed.            </p>
          </div>

          {/* Final Design */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>Final Design</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
Two versions delivered for the final print decision.
BookCover2 (client's current choice): Closest to the AI reference. Grass separated and repositioned at the back with progressive blur and gradient for blurb legibility. Figure scaled down for depth.            </p>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
            BookCover1 (recommended): Aeroplane and spacecraft removed, blurry in the original and unrelated to the book's tone. Without them, the masked figure dominates and the background connects seamlessly across the spine as one unified scene. Stronger hierarchy on the bakc cover and in typography using Cinzel Decorative and Baskerville.
            </p>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '40px' }}>
            The client agreed to print both and decide on paper.
            </p>
            <img src={bcFinal1} alt="Final cover design" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }} />
            <img src={bcFinal2} alt="Final cover spread" style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <img src={bcMockupTable} alt="Book mockup on table" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
              <img src={bcMockupStacked} alt="Stacked book mockup" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
            </div>
          </div>

          {/* Reflections */}
          <div style={{ marginBottom: '100px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT, marginBottom: '20px' }}>Reflections</h2>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, marginBottom: '16px' }}>
This project had limited creative freedom problem, the brief was clear, the painting was strong, and the genre direction was specific. The real difficulty was technical and interpersonal.            </p>
            <p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, margin: 0, marginBottom: '16px'}}>
Working with a client-owned painting not designed for print meant solving readability without touching the original. No clean negative space, no dominant focal point, too many competing elements. Every crop and layer decision had to feel invisible.            </p>
<p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, margin: 0,  marginBottom: '16px' }}>
The client was indecisive at times but consistently cooperative, which made the process easier to navigate. Staying patient, turning revisions around fast, and presenting clear reasoning for each decision kept the project on track. Advocating for the left-aligned blurb was a small moment but an important one, good design decisions are worth making the case for. The same goes for suggesting BookCover1, which the client agreed to print alongside his chosen version to make sure he's confident in his final decision. The final call is still pending, but he has confirmed he is satisfied with the work at this stage.
</p>
<p style={{ fontSize: '14px', color: TEXT, lineHeight: 2, margin: 0,  marginBottom: '16px'}}>
First client project. Delivered on time, within scope, with a satisfied client.
</p>
          </div>

        </div>

        {/* More Case Studies */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '60px 80px 80px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT, textAlign: 'center', marginBottom: '40px' }}>
            More Case Studies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {moreProjects.map(p => (
              <div key={p.title} onClick={() => p.slug && navigate(`/projects/${p.slug}`)} style={{ cursor: p.slug ? 'pointer' : 'default' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
                </div>
                <p style={{
                fontSize: '24px',
                textTransform: 'uppercase',
                color: TEXT,
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
