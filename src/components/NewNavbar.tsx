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
            Design Archive · Vol. 01 · Nang Atelier
        </span>
        <nav className="flex items-center text-[11px] tracking-[0.18em] uppercase font-barlow font-semibold gap-1">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">Projects</a>
          <span className="opacity-30">/</span>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">About Me</a>
          <span className="opacity-30">/</span>
          <a href="#creative-lab" onClick={(e) => { e.preventDefault(); document.getElementById('creative-lab')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">Creative Lab</a>
          <span className="opacity-30">/</span>
          <a href="https://drive.google.com/file/d/1F8o1gPdBOWdzEWVtGvPY5QavrRzhAwNc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity px-2">Resume</a>
          <span className="opacity-30">/</span>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:opacity-60 transition-opacity px-2">Contact</a>
        </nav>
      </div>
    </header>
  )
}
