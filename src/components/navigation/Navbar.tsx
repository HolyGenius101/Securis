import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation'
import { cn } from '../../lib/cn'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Logo } from '../common/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition duration-200',
        scrolled
          ? 'border-brand-border bg-white/95 backdrop-blur'
          : 'border-transparent bg-white/90 backdrop-blur',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo className="shrink-0" compact />

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-brand-muted transition hover:text-brand-green',
                  isActive && 'text-brand-ink',
                )
              }
              key={link.href}
              to={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/for-gyms">For Gym Owners</Button>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand-border md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-brand-ink" />
            <span className="block h-0.5 w-5 bg-brand-ink" />
            <span className="block h-0.5 w-5 bg-brand-ink" />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-brand-border bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigationLinks.map((link) => (
              <NavLink
                className="rounded-lg px-3 py-3 text-sm font-medium text-brand-ink transition hover:bg-brand-surface"
                key={link.href}
                onClick={() => setOpen(false)}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="mt-2 w-full" href="/for-gyms">
              For Gym Owners
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
