import logoDark from '../assets/images/logo-dark.png'

const leftLinks = ['About Me', 'Case Studies', 'Creative Lab']
const rightLinks = ['Resume', 'Contact']

function NavLink({ label }: { label: string }) {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <li className="flex items-center gap-5">
      <span className="text-[#C4706A] text-[13px] leading-none select-none">|</span>
      <a
        href={`#${id}`}
        className="text-[11px] uppercase tracking-[0.18em] text-[#5A4F4A] hover:text-[#1B1712] transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav style={{ padding: '40px 80px', position: 'sticky', top: 0, zIndex: 50, background: '#EDEBE6' }} className="w-full flex items-center justify-between">
      {/* Logo */}
      <img src={logoDark} alt="nang" className="h-8 w-auto" />

      {/* Center links */}
      <ul className="flex items-center gap-5">
        {leftLinks.map((label) => (
          <NavLink key={label} label={label} />
        ))}
      </ul>

      {/* Right links */}
      <ul className="flex items-center gap-5">
        {rightLinks.map((label) => (
          <NavLink key={label} label={label} />
        ))}
      </ul>
    </nav>
  )
}
