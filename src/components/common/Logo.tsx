import { Link } from 'react-router-dom'
import logo from '../../assets/securis-logo.png'
import { cn } from '../../lib/cn'
import { site } from '../../lib/site'

type LogoProps = {
  className?: string
  compact?: boolean
  tone?: 'light' | 'dark'
}

export function Logo({ className, compact = false, tone = 'light' }: LogoProps) {
  const titleClassName = tone === 'light' ? 'text-white' : 'text-brand-ink'
  const taglineClassName = tone === 'light' ? 'text-white/62' : 'text-brand-muted'
  const badgeClassName =
    tone === 'light'
      ? 'border-white/14 bg-white/6 shadow-[0_18px_38px_rgba(6,20,14,0.2)]'
      : 'border-brand-border/70 bg-white/88 shadow-[0_18px_38px_rgba(16,34,23,0.08)]'

  return (
    <Link className={cn('inline-flex items-center gap-3.5', className)} to="/">
      <img
        alt={`${site.name} logo`}
        className={cn(
          'w-12 shrink-0 rounded-2xl border p-1.5 object-contain backdrop-blur-xl',
          badgeClassName,
          compact && 'w-10 rounded-xl p-1.25',
        )}
        src={logo}
      />
      <div>
        <div
          className={cn(
            'text-[1.15rem] font-semibold tracking-[-0.04em]',
            titleClassName,
            compact && 'text-base',
          )}
        >
          {site.name}
        </div>
        <div className={cn('text-[0.68rem] uppercase tracking-[0.16em]', taglineClassName)}>
          {site.tagline}
        </div>
      </div>
    </Link>
  )
}
