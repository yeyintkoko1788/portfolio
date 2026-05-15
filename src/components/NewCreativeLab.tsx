const items = [
  { number: '01', title: 'Process', image: '/images/lab-experiments.png', href: '/lab/process' },
  { number: '02', title: 'Interactions', image: '/images/lab-interactions.png', href: '/lab/interactions' },
  { number: '03', title: 'Posters', image: '/images/lab-posters.png', href: '/lab/posters' },
  { number: '04', title: 'Painting', image: '/images/lab-painting.png', href: '/lab/painting' },
]

export default function NewCreativeLab() {
  return (
    <section id="creative-lab" style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingBottom: '48px' }}>

        {/* Title bar */}
        <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 20px' }}>
          <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px' }}>
            Creative Lab
          </h2>
        </div>

        {/* Description */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid #111008', marginBottom: '0' }}>
          <p className="font-eb-garamond" style={{ fontSize: '15px', fontStyle: 'italic', lineHeight: 1.6 }}>
            Side work, spec work, and things made for the love of making — process artefacts, motion studies, posters, and paintings.
          </p>
          <span className="font-oswald" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4, flexShrink: 0 }}>Vol. 1 — 4 Entries</span>
        </div>

        {/* 4-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
          {items.map((item, i) => {
            const inner = (
              <>
                {/* Number + title */}
                <div style={{ padding: '30px 32px 10px' }}>
                  <span
                    className="font-barlow font-semibold"
                    style={{ fontSize: '9px', letterSpacing: '0.15em', backgroundColor: '#111008', color: '#F2EDE2', padding: '2px 7px', display: 'inline-block', marginBottom: '8px' }}
                  >
                    {item.number}
                  </span>
                  <p className="font-playfair font-bold" style={{ fontSize: '16px' }}>
                    {item.title}
                  </p>
                </div>
                {/* Image */}
                <div style={{ flex: 1, padding: '0 32px 32px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', aspectRatio: '23/16', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </>
            )
            const sharedStyle = { borderRight: i < items.length - 1 ? '1px solid #111008' : 'none', display: 'flex', flexDirection: 'column' as const }
            return item.href ? (
              <a key={item.number} href={item.href} style={{ ...sharedStyle, textDecoration: 'none', color: 'inherit' }}>
                {inner}
              </a>
            ) : (
              <div key={item.number} style={sharedStyle}>
                {inner}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
