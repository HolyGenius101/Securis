import { Link } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation'
import { site } from '../../lib/site'
import { Container } from '../common/Container'
import { Logo } from '../common/Logo'

export function Footer() {
  return (
    <footer className="relative z-10 px-3 pb-4 pt-12 md:px-4">
      <Container className="dark-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/14" />
        <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-brand-mint/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-brand-gold/10 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Logo tone="dark" />
            <p className="mt-5 text-sm leading-6 text-white/68">
              Securis helps gyms, studios, and customer-facing businesses create cleaner, more intentional spaces for the items people already carry every day.
            </p>
            <a
              className="mt-5 inline-block text-sm font-medium text-brand-mint"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white/62">
              {navigationLinks.map((link) => (
                <Link className="transition hover:text-white" key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="overline text-white/42">
              Built for better customer touchpoints
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
