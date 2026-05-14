const services = [
  {
    icon: '/images/dots-nine.png',
    title: 'UI/UX Design',
    text: 'From mobile apps to desktop interfaces. I focus on layout, hierarchy, and the visual layer, making sure it looks good and holds up under real use.',
  },
  {
    icon: '/images/eye.png',
    title: 'Visual Design',
    text: 'Posters, book covers, brand identity, email design. If it needs to look intentional and say something, this is where I work best.',
  },
]

export default function NewWhatIDo() {
  return (
    <section className="bg-[#F0E8D4] text-[#111008]">
      <div className="page-px" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ border: '1px solid #111008' }}>

          {/* Section title bar */}
          <div style={{ backgroundColor: '#111008', color: '#F0EBE0', padding: '14px 24px' }}>
            <h2 className="font-playfair font-bold uppercase" style={{ fontSize: '32px', letterSpacing: '0.1em' }}>
              What I Do
            </h2>
          </div>

          {/* Services */}
          <div style={{ padding: '36px 24px' }}>
            {services.map((item, i) => (
              <div key={item.title} style={{ marginBottom: i < services.length - 1 ? '48px' : '0' }}>
                {/* Icon + title */}
                <div className="flex items-center" style={{ gap: '12px', marginBottom: '16px' }}>
                  <img src={item.icon} alt="" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  <h3 className="font-barlow font-bold uppercase" style={{ fontSize: '22px', letterSpacing: '0.08em' }}>
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="font-old-standard" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
