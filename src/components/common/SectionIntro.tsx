type SectionIntroProps = {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionIntroProps) {
  const alignmentClassName = align === 'center' ? 'mx-auto text-center' : ''
  const eyebrowClassName = tone === 'light' ? 'text-brand-mint' : 'text-brand-green'
  const titleClassName = tone === 'light' ? 'text-white' : 'text-brand-ink'
  const descriptionClassName = tone === 'light' ? 'text-white/68' : 'text-brand-muted'

  return (
    <div className={alignmentClassName}>
      {eyebrow ? (
        <p
          className={`mb-4 inline-flex rounded-full border px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] ${
            tone === 'light'
              ? 'border-white/12 bg-white/6 text-brand-mint'
              : 'border-brand-border/70 bg-white/72 text-brand-green'
          } ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${titleClassName}`}>{title}</h2>
      <p className={`section-copy mt-5 ${descriptionClassName}`}>{description}</p>
    </div>
  )
}
