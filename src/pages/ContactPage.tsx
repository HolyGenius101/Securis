import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { site } from '../lib/site'

export function ContactPage() {
  return (
    <section className="bg-brand-surface py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionIntro
            description="Interested in early access, gym rollout, or partnership opportunities? Reach out here."
            eyebrow="Contact"
            title="Let's talk"
          />
          <div className="mt-8 rounded-lg border border-brand-border bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
              Direct contact
            </p>
            <a className="mt-3 inline-block text-lg font-medium text-brand-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-4 text-sm leading-6 text-brand-muted">
              Best for early access, gym pilots, partnership ideas, and investor or judge follow-up.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <LeadCaptureForm
            description="Share a few details and the Securis team will follow up with the right context."
            interestType="general"
            sourcePage="contact"
            submitLabel="Send Message"
            title="Send a message"
          />
        </Reveal>
      </Container>
    </section>
  )
}
