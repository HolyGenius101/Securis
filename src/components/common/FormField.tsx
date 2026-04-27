import { cn } from '../../lib/cn'

type FormFieldProps = {
  label: string
  value: string
  name: string
  placeholder: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  textarea?: boolean
}

const fieldClassName =
  'w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/15'

export function FormField({
  label,
  value,
  name,
  placeholder,
  onChange,
  error,
  required,
  textarea,
}: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold tracking-[-0.01em] text-brand-ink">
        {label}
        {required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea
          className={cn(fieldClassName, 'min-h-32 resize-y')}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          className={fieldClassName}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          value={value}
        />
      )}
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  )
}
