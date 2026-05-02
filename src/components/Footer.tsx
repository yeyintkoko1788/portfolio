import logoDark from '../assets/images/logo-dark.png'

const links = ['About', 'How I Work', 'Case Studies', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-[#0F0D0B] border-t border-[#2A2622]">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-16 py-7 flex items-center justify-between">
        <img src={logoDark} alt="Vera" className="h-6 w-auto invert opacity-30" />

        <ul className="flex items-center gap-8">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[13px] text-[#4A4540] hover:text-[#F9F5EE] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[12px] text-[#4A4540]">© 2024 Vera. All rights reserved.</p>
      </div>
    </footer>
  )
}
