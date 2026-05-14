export default function NewHero() {
  return (
    <section
      className="bg-[#F0E8D4] text-[#111008] flex flex-col items-center page-px"
      style={{ paddingTop: '30px', paddingBottom: '0' }}
    >
      <img
        src="/images/logo-nang.png"
        alt="nang"
        style={{ width: '62%', maxWidth: '896px' }}
        className="select-none"
        draggable={false}
      />

      <p
        className="font-old-standard text-center"
        style={{ fontSize: '17px', lineHeight: '1.6', maxWidth: '672px', marginTop: '20px' }}
      >
        A designer who bridges teaching and design thinking, transforming complex ideas into elegant solutions.
      </p>

      <div
        className="w-full border-t border-[#111008]"
        style={{ marginTop: '20px', marginBottom: '10px' }}
      />

      <p
        className="font-old-standard italic"
        style={{ fontSize: '17px', letterSpacing: '0.05em', paddingBottom: '10px' }}
      >
        UI/UX &amp; Visual Designer
      </p>

      <div className="w-full border-t border-[#111008]" />
    </section>
  )
}
