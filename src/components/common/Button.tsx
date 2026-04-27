import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ButtonProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const baseClassName =
  'inline-flex h-12 w-full items-center justify-center rounded-full px-5 text-center text-sm font-semibold tracking-[0.01em] transition duration-300 ease-out sm:w-auto'

export function Button({
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled,
  className,
}: ButtonProps) {
  const variantClassName =
    variant === 'primary'
      ? 'border border-white/14 bg-[linear-gradient(135deg,#1e8cff_0%,#0a63c9_48%,#084d9b_100%)] text-white shadow-[var(--shadow-button)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(10,99,201,0.3)]'
      : 'border border-brand-border/70 bg-white/78 text-brand-ink shadow-[0_16px_40px_rgba(43,26,18,0.06)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-brand-green/40 hover:bg-white hover:text-brand-green'

  const resolvedClassName = cn(
    baseClassName,
    variantClassName,
    disabled && 'cursor-not-allowed opacity-60',
    className,
  )

  if (href) {
    const isInternal = href.startsWith('/')

    if (isInternal) {
      return (
        <Link className={resolvedClassName} to={href}>
          {children}
        </Link>
      )
    }

    return (
      <a className={resolvedClassName} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={resolvedClassName} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
