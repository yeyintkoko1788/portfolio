const items = [
  { number: '01', title: 'Experiments', image: '/images/lab-experiments.png' },
  { number: '02', title: 'Interactions', image: '/images/lab-interactions.png' },
  { number: '03', title: 'Posters', image: '/images/lab-posters.png' },
  { number: '04', title: 'Painting', image: '/images/lab-painting.png' },
]

export default function NewCreativeLab() {
  return (
    <section style={{ backgroundColor: '#F0E8D4', color: '#111008' }}>
      <div className="page-px" style={{ paddingBottom: '48px' }}>

        {/* Title bar */}
        <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 20px' }}>
          <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px' }}>
            Creative Lab
          </h2>
        </div>

        {/* 4-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: '1px solid #111008', borderTop: 'none' }}>
          {items.map((item, i) => (
            <div
              key={item.number}
              style={{ borderRight: i < items.length - 1 ? '1px solid #111008' : 'none', display: 'flex', flexDirection: 'column' }}
            >
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
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
