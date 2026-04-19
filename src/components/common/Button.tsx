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
  'inline-flex h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition duration-200'

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
      ? 'bg-brand-green text-white hover:bg-brand-green-dark'
      : 'border border-brand-border bg-white text-brand-ink hover:border-brand-green hover:text-brand-green'

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
