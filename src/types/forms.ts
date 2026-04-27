export type LeadInterest = 'general' | 'gym-owner' | 'early-access'

export type LeadSource = 'homepage' | 'for-gyms' | 'contact'

export type LeadFormValues = {
  name: string
  email: string
  gymName: string
  message: string
  interestType: LeadInterest
  sourcePage: LeadSource
  honeypot: string
}

export type FieldErrors = Partial<Record<keyof LeadFormValues, string>>

export type LeadFormStatus = 'idle' | 'loading' | 'success' | 'error'
