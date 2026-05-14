export default function FloatingAvailability() {
  return (
    <div
      className="font-barlow"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#111008',
        color: '#F0EBE0',
        padding: '8px 14px',
        fontSize: '10px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        boxShadow: '0 2px 12px rgba(17,16,8,0.18)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#7EC8A4',
          flexShrink: 0,
          animation: 'pulse-dot 2s ease-in-out infinite',
        }}
      />
      Open to Opportunities and relocation
    </div>
  )
}
