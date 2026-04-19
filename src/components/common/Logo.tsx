import { Link } from 'react-router-dom'
import logo from '../../assets/securis-logo.png'
import { site } from '../../lib/site'
import { cn } from '../../lib/cn'

type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link className={cn('inline-flex items-center gap-3', className)} to="/">
      <img
        alt={`${site.name} logo`}
        className={cn('w-12 shrink-0 object-contain', compact && 'w-10')}
        src={logo}
      />
      <div>
        <div className={cn('text-xl font-semibold text-brand-ink', compact && 'text-lg')}>
          {site.name}
        </div>
        <div className="text-xs text-brand-muted">{site.tagline}</div>
      </div>
    </Link>
  )
}
