const steps = [
  {
    number: 1,
    title: 'Understand the product',
    description:
      "Before touching anything, I learn what the product is, what it's trying to do, and where it's falling short.",
  },
  {
    number: 2,
    title: 'Define the problem',
    description:
      "I find the real issue, not just the surface complaint. What's actually broken and why does it matter?",
  },
  {
    number: 3,
    title: 'Research',
    description:
      'I look at the space, competitors, users, patterns to build context before forming opinions.',
  },
  {
    number: 4,
    title: 'Think like the user',
    description:
      "Who's actually using this? What's their age, context, patience level? I map the journey from their side, not mine.",
  },
  {
    number: 5,
    title: 'Design',
    description:
      'I start with what I want to change and what I want to add. Layout, hierarchy, format built with intention.',
  },
  {
    number: 6,
    title: 'Iterate with feedback',
    description:
      "I don't design in a vacuum. I share work, take the notes that matter, and refine until it's right.",
  },
]

const ACCENT = '#B6A991'

function StepRow({ row }: { row: typeof steps }) {
  return (
    <div>
      {/* Step labels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {row.map((s) => (
          <span key={s.number} style={{ fontSize: '13px', color: ACCENT, marginBottom: '10px', display: 'block' }}>
            Step {s.number}
          </span>
        ))}
      </div>

      {/* Timeline — single line + circles */}
      <div style={{ position: 'relative', height: '16px', marginBottom: '32px' }}>
        {/* Full-width line */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: ACCENT, transform: 'translateY(-50%)' }} />
        {/* Circles at each column start */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '100%' }}>
          {row.map((s) => (
            <div key={s.number} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 40px' }}>
        {row.map((s) => (
          <div key={s.number}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.2 }}>
              {s.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#C0B5A8', lineHeight: 1.8 }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HowIWork() {
  return (
    <section id="how-i-work" style={{ background: '#333333', padding: '80px' }}>
      <h2
        style={{ fontSize: '40px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em', marginBottom: '64px' }}
        className="uppercase"
      >
        How I Work
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        <StepRow row={steps.slice(0, 3)} />
        <StepRow row={steps.slice(3, 6)} />
      </div>
    </section>
  )
}
