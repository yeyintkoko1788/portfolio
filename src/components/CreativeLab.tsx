import painting from '../assets/images/painting.png'
import interaction from '../assets/images/interaction.png'
import poster from '../assets/images/poster.png'
import experiment from '../assets/images/Container.png'

function Label({ title, category, number }: { title: string; category: string; number: string }) {
  return (
    <div style={{ marginTop: '12px' }}>
      <p style={{ fontSize: '18px', fontWeight: 500, color: '#1B1712', marginBottom: '6px' }}>{title}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', color: '#9A9490', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{category}</span>
        <span style={{ fontSize: '11px', color: '#9A9490' }}>{number}</span>
      </div>
      <div style={{ width: '60px', height: '1px', background: '#D6D0C8' }} />
    </div>
  )
}

export default function CreativeLab() {
  return (
    <section id="creative-lab" style={{ padding: '80px' }}>
      {/* Header */}
      <h2
        style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '0.08em', color: '#1B1712', textAlign: 'center', marginBottom: '12px' }}
        className="uppercase"
      >
        Creative Lab
      </h2>
      <p style={{ textAlign: 'center', color: '#7A736A', fontSize: '14px', marginBottom: '48px' }}>
        The part of the work that doesn't make it to the case studies.
      </p>

      {/* 3-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', margin: '0 80px' }}>

        {/* Experiments — col 1, spans rows 1 & 2 */}
        <div style={{ gridColumn: '1', gridRow: '1 / 3' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', height: 'calc(100% - 72px)' }}>
            <img src={experiment} alt="Experiments" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <Label title="Experiments" category="Motion & AI" number="01" />
        </div>

        {/* Interactions — col 2, row 1 */}
        <div style={{ gridColumn: '2', gridRow: '1' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '38 / 40' }}>
            <img src={interaction} alt="Interactions" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '12px' }} />
          </div>
          <Label title="Interactions" category="Motion & UI" number="02" />
        </div>

        {/* Posters — col 3, row 1 */}
        <div style={{ gridColumn: '3', gridRow: '1' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '38 / 40' }}>
            <img src={poster} alt="Posters" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '12px' }} />
          </div>
          <Label title="Posters" category="Type & Type" number="03" />
        </div>

        {/* Paintings — cols 2-3, row 2 (fills blank space) */}
        <div style={{ gridColumn: '2 / 4', gridRow: '2' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4 / 1' }}>
            <img src={painting} alt="Paintings" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <Label title="Paintings" category="Colour" number="04" />
        </div>

      </div>

      <div style={{ height: '1px', background: '#E0DAD2', marginTop: '80px' }} />
    </section>
  )
}
