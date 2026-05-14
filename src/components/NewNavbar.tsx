export default function NewNavbar() {
  return (
    <header className="bg-[#F0E8D4] text-[#111008]">
      {/* Top strip */}
      <div className="grid items-center page-px border-b border-[#111008]" style={{ gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '30px', paddingBottom: '10px' }}>
        <span className="border border-[#111008] text-[11px] tracking-[0.18em] uppercase font-barlow font-medium" style={{ padding: '2px 12px', justifySelf: 'start' }}>
          Portfolio / Vol. 1
        </span>
        <span className="text-[11px] tracking-[0.22em] uppercase font-barlow" style={{ textAlign: 'center' }}>
          · UI/UX &amp; Visual Designer ·
        </span>
        <span className="border border-[#111008] text-[11px] tracking-[0.18em] font-barlow font-medium" style={{ padding: '2px 12px', justifySelf: 'end' }}>
          2025–2026
        </span>
      </div>

      {/* Nav strip */}
      <div className="flex items-center justify-between page-px py-2.5 border-b border-[#111008]" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <span className="text-[11px] tracking-[0.14em] uppercase font-barlow text-[#111008]/70">
          Career Switcher | Self-Taught Designer | Former-Educator
        </span>
        <nav className="flex items-center text-[11px] tracking-[0.18em] uppercase font-barlow font-semibold gap-1">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">Projects</a>
          <span className="opacity-30">/</span>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">About Me</a>
          <span className="opacity-30">/</span>
          <span className="px-2 opacity-40">Resume</span>
          <span className="opacity-30">/</span>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">Contact</a>
        </nav>
      </div>
    </header>
  )
}
