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
        'sticky top-0 z-50 px-2 pt-2 transition duration-300 sm:px-3 sm:pt-3 md:px-4',
        scrolled
          ? 'bg-transparent'
          : 'bg-transparent',
      )}
    >
      <Container
        className={cn(
          'flex h-[70px] items-center justify-between gap-3 rounded-[24px] border px-3 shadow-[0_16px_60px_rgba(6,20,14,0.12)] backdrop-blur-2xl transition duration-300 sm:h-[74px] sm:gap-4 sm:rounded-[28px] sm:px-4 md:px-6',
          scrolled
            ? 'border-white/12 bg-brand-night/78 shadow-[0_26px_90px_rgba(6,20,14,0.3)]'
            : 'border-white/10 bg-[linear-gradient(135deg,rgba(3,7,18,0.92)_0%,rgba(10,43,86,0.88)_56%,rgba(24,65,120,0.82)_100%)] shadow-[0_24px_80px_rgba(6,20,14,0.28)]',
        )}
      >
        <Logo className="shrink-0" compact />

        <nav className="hidden items-center gap-6 xl:flex">
          {navigationLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'relative text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition after:duration-300',
                  scrolled
                    ? 'text-white/70 after:bg-brand-mint hover:text-white'
                    : 'text-white/72 after:bg-brand-mint hover:text-white',
                  isActive && 'text-white after:scale-x-100',
                )
              }
              key={link.href}
              to={link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/for-businesses">Request a Demo</Button>
        </div>

        <button
          aria-label="Toggle navigation"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border xl:hidden',
            scrolled
              ? 'border-white/16 bg-white/6 text-white'
              : 'border-white/16 bg-white/8 text-white',
          )}
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="px-2 pt-2 sm:px-3 xl:hidden">
          <Container className="flex flex-col gap-2 rounded-[28px] border border-white/10 bg-brand-night/92 py-4 shadow-[0_24px_80px_rgba(6,20,14,0.32)] backdrop-blur-2xl">
            {navigationLinks.map((link) => (
              <NavLink
                className="rounded-2xl px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white/82 transition hover:bg-white/6 hover:text-white"
                key={link.href}
                onClick={() => setOpen(false)}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="mt-2 w-full" href="/for-businesses">
              Request a Demo
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
