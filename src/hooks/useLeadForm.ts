import { useMemo, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { FieldErrors, LeadFormStatus, LeadFormValues } from '../types/forms'

const initialValues: LeadFormValues = {
  name: '',
  email: '',
  gymName: '',
  message: '',
  interestType: 'general',
  sourcePage: 'contact',
  honeypot: '',
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function validate(values: LeadFormValues): FieldErrors {
  const errors: FieldErrors = {}
  const email = values.email.trim().toLowerCase()
  const name = normalizeWhitespace(values.name)
  const message = normalizeWhitespace(values.message)
  const gymName = normalizeWhitespace(values.gymName)
  const isBusinessInquiry =
    values.interestType === 'gym-owner' || values.interestType === 'general'

  if (name.length < 2) {
    errors.name = 'Enter your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email.'
  }

  if (isBusinessInquiry && gymName.length < 2) {
    errors.gymName =
      values.interestType === 'gym-owner'
        ? 'Tell us which gym or facility this is for.'
        : 'Tell us which business or venue this is for.'
  }

  if (message.length < 10) {
    errors.message = 'Give us a little more detail so we can follow up well.'
  }

  return errors
}

export function useLeadForm(
  defaults: Pick<LeadFormValues, 'interestType' | 'sourcePage'> & Partial<LeadFormValues>,
) {
  const [values, setValues] = useState<LeadFormValues>({
    ...initialValues,
    ...defaults,
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<LeadFormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isGymFlow = useMemo(() => values.interestType === 'gym-owner', [values.interestType])
  const isBusinessInquiry = useMemo(
    () => values.interestType === 'gym-owner' || values.interestType === 'general',
    [values.interestType],
  )

  function setField<K extends keyof LeadFormValues>(field: K, value: LeadFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  async function submit() {
    if (values.honeypot) {
      return
    }

    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    if (!supabase) {
      setStatus('error')
      setErrorMessage('Supabase is not configured yet. Add the Vite env keys to enable submissions.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    const payload = {
      name: normalizeWhitespace(values.name),
      email: values.email.trim().toLowerCase(),
      gym_name: normalizeWhitespace(values.gymName) || null,
      message: normalizeWhitespace(values.message),
      source_page: values.sourcePage,
      interest_type: values.interestType,
    }

    const { error } = await supabase.from('contact_submissions').insert(payload)

    if (error) {
      setStatus('error')
      setErrorMessage('We could not send your request right now. Please try again.')
      return
    }

    const { error: emailError } = await supabase.functions.invoke('notify-contact-submission', {
      body: payload,
    })

    if (emailError) {
      setStatus('error')
      setErrorMessage('Your request was saved, but the email notification failed. Please check Supabase.')
      return
    }

    setStatus('success')
    setValues({
      ...initialValues,
      interestType: defaults.interestType,
      sourcePage: defaults.sourcePage,
      message: defaults.message ?? '',
    })
  }

  return {
    values,
    errors,
    status,
    errorMessage,
    isGymFlow,
    isBusinessInquiry,
    setField,
    submit,
  }
}
