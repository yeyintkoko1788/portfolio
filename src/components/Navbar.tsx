import { useNavigate, useLocation } from 'react-router-dom'
import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'

type RouteTheme = { bg: string; text: string; hover: string; light: boolean }

const routeThemes: Record<string, RouteTheme> = {
  '/projects/fabric-decode': { bg: '#333333', text: '#9A8F87', hover: '#F2F0EC', light: true },
  '/projects/book-cover':    { bg: '#B8141A', text: 'rgba(255,255,255,0.6)', hover: '#FFFFFF', light: true },
}

const defaultTheme: RouteTheme = { bg: '#F2F0EC', text: '#5A4F4A', hover: '#1B1712', light: false }

function NavLink({ label, theme }: { label: string; theme: RouteTheme }) {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <li className="flex items-center gap-5">
      <span style={{ color: '#C4706A', fontSize: '13px', lineHeight: 1 }}>|</span>
      <a
        href={`/#${id}`}
        onClick={handleClick}
        style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: theme.text, textDecoration: 'none', transition: 'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color = theme.hover)}
        onMouseLeave={e => (e.currentTarget.style.color = theme.text)}
      >
        {label}
      </a>
    </li>
  )
}

const leftLinks = ['About Me', 'Case Studies', 'Creative Lab']
const rightLinks = ['Resume', 'Contact']

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme = routeThemes[pathname] ?? defaultTheme

  return (
    <nav
      style={{ padding: '20px 80px', position: 'sticky', top: 0, zIndex: 50, background: theme.bg, transition: 'background 0.3s' }}
      className="w-full flex items-center justify-between"
    >
      <img
        src={theme.light ? logoLight : logoDark}
        alt="nang"
        className="h-8 w-auto cursor-pointer"
        onClick={() => navigate('/')}
      />
      <ul className="flex items-center gap-5">
        {leftLinks.map(label => <NavLink key={label} label={label} theme={theme} />)}
      </ul>
      <ul className="flex items-center gap-5">
        {rightLinks.map(label => <NavLink key={label} label={label} theme={theme} />)}
      </ul>
    </nav>
  )
}
