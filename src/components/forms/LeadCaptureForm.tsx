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
  title = 'Request a rollout conversation',
  description = 'Share a few details about your business and where you want to place Securis. We will follow up with the most relevant next step.',
  submitLabel = 'Request a Demo',
}: LeadCaptureFormProps) {
  const {
    values,
    errors,
    status,
    errorMessage,
    isGymFlow,
    isBusinessInquiry,
    setField,
    submit,
  } = useLeadForm({
    sourcePage,
    interestType,
    message:
      interestType === 'gym-owner'
        ? 'I want to learn more about bringing Securis into our business.'
        : '',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await submit()
  }

  return (
    <form
      className="surface-border rounded-[28px] bg-white p-6 shadow-[var(--shadow-soft)] md:p-7"
      id="lead-form"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <h3 className="card-title text-2xl text-brand-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-brand-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-brand-muted/90">
          <span className="overline rounded-full border border-brand-line bg-brand-surface px-3 py-1">
            Business inquiries welcome
          </span>
          <span className="overline rounded-full border border-brand-line bg-brand-surface px-3 py-1">
            No obligation
          </span>
          <span className="overline rounded-full border border-brand-line bg-brand-surface px-3 py-1">
            Fast follow-up
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          error={errors.name}
          label="Your Name"
          name="name"
          onChange={(value) => setField('name', value)}
          placeholder="Full name"
          required
          value={values.name}
        />
        <FormField
          error={errors.email}
          label="Work Email"
          name="email"
          onChange={(value) => setField('email', value)}
          placeholder="you@business.com"
          required
          value={values.email}
        />
      </div>

      <div className="mt-4">
        <FormField
          error={errors.gymName}
          label={isBusinessInquiry ? 'Business or Venue Name' : 'Business or Venue Name (optional)'}
          name="gymName"
          onChange={(value) => setField('gymName', value)}
          placeholder="Northside Training Club"
          required={isBusinessInquiry}
          value={values.gymName}
        />
        <p className="mt-2 text-xs leading-5 text-brand-muted">
          {isGymFlow
            ? 'Include the gym, studio, or facility you want to outfit so we can tailor the conversation.'
            : 'This helps us understand the type of customer-facing space you are planning for.'}
        </p>
      </div>

      <div className="mt-4">
        <FormField
          error={errors.message}
          label={isBusinessInquiry ? 'What are you looking to equip?' : 'Message'}
          name="message"
          onChange={(value) => setField('message', value)}
          placeholder={
            isGymFlow
              ? 'Example: We run a 2-location gym and want to explore locker-area or machine-side placement. We would love to understand rollout options.'
              : isBusinessInquiry
                ? 'Tell us about your space, customer flow, and where Securis would create the most value first.'
                : 'Tell us about your space, use case, or what you want to learn first.'
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
        <div className="text-sm text-brand-muted md:max-w-xs md:text-right">
          {status === 'idle' ? (
            <span>We only use your details to reply about your inquiry.</span>
          ) : null}
          {status === 'success' ? (
            <span className="font-medium text-brand-green">
              Thanks. Your request is in and the team has been notified.
            </span>
          ) : null}
          {status === 'error' ? <span className="text-red-600">{errorMessage}</span> : null}
        </div>
      </div>
    </form>
  )
}
