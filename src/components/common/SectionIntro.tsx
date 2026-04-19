type SectionIntroProps = {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  const alignmentClassName = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={alignmentClassName}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-4">{description}</p>
    </div>
  )
}
