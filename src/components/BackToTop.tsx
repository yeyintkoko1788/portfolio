import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      className="font-oswald"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '28px',
        left: '28px',
        zIndex: 50,
        backgroundColor: '#111008',
        color: '#F0EBE0',
        border: 'none',
        padding: '8px 14px',
        fontSize: '10px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxShadow: '0 2px 12px rgba(17,16,8,0.18)',
      }}
    >
      ↑ Top
    </button>
  )
}
