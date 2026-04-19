import { Link } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation'
import { site } from '../../lib/site'
import { Logo } from '../common/Logo'
import { Container } from '../common/Container'

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <a className="mt-4 inline-block text-sm font-medium text-brand-green" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-brand-muted">
          {navigationLinks.map((link) => (
            <Link className="transition hover:text-brand-green" key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  )
}
