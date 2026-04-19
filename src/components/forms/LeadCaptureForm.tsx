import type { FormEvent } from 'react'
import { useLeadForm } from '../../hooks/useLeadForm'
import type { LeadInterest, LeadSource } from '../../types/forms'
import { Button } from '../common/Button'
import { FormField } from '../common/FormField'

type LeadCaptureFormProps = {
  sourcePage: LeadSource
  interestType: LeadInterest
  title?: string
  description?: string
  submitLabel?: string
}

export function LeadCaptureForm({
  sourcePage,
  interestType,
  title = 'Request a demo or join the list',
  description = 'Tell us who you are, and we will reach out with next steps.',
  submitLabel = 'Request a Demo',
}: LeadCaptureFormProps) {
  const { values, errors, status, errorMessage, isGymFlow, setField, submit } = useLeadForm({
    sourcePage,
    interestType,
    message:
      interestType === 'gym-owner'
        ? 'I want to learn more about bringing Securis to our facility.'
        : '',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await submit()
  }

  return (
    <form
      className="surface-border rounded-lg bg-white p-6 shadow-[var(--shadow-soft)] md:p-7"
      id="lead-form"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-brand-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-brand-muted">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          error={errors.name}
          label="Name"
          name="name"
          onChange={(value) => setField('name', value)}
          placeholder="Your name"
          required
          value={values.name}
        />
        <FormField
          error={errors.email}
          label="Email"
          name="email"
          onChange={(value) => setField('email', value)}
          placeholder="you@example.com"
          required
          value={values.email}
        />
      </div>

      <div className="mt-4">
        <FormField
          error={errors.gymName}
          label={isGymFlow ? 'Gym Name' : 'Gym Name (optional)'}
          name="gymName"
          onChange={(value) => setField('gymName', value)}
          placeholder="Securis Training Club"
          required={isGymFlow}
          value={values.gymName}
        />
      </div>

      <div className="mt-4">
        <FormField
          error={errors.message}
          label="Message"
          name="message"
          onChange={(value) => setField('message', value)}
          placeholder={
            isGymFlow
              ? 'Tell us about your facility, number of locations, or pilot interest.'
              : 'Tell us what you want to hear about first.'
          }
          required
          textarea
          value={values.message}
        />
      </div>

      <input
        className="hidden"
        name="company-website"
        onChange={(event) => setField('honeypot', event.target.value)}
        tabIndex={-1}
        value={values.honeypot}
      />

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Button
          className="min-w-40"
          disabled={status === 'loading'}
          type="submit"
          variant="primary"
        >
          {status === 'loading' ? 'Sending...' : submitLabel}
        </Button>
        <div className="text-sm text-brand-muted">
          {status === 'success' ? (
            <span className="font-medium text-brand-green">
              Thanks. Your request is in. We will be in touch soon.
            </span>
          ) : null}
          {status === 'error' ? <span className="text-red-600">{errorMessage}</span> : null}
        </div>
      </div>
    </form>
  )
}
