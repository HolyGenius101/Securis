import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { SectionIntro } from '../components/common/SectionIntro'
import { site } from '../lib/site'

export function ContactPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#000000_0%,#0a2b56_52%,#fcf7ee_52%,#fcf7ee_100%)] py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="dark-panel p-8 md:p-10">
            <SectionIntro
              description="Interested in outfitting a gym, studio, retail space, or another customer-facing environment? Start here and we will route your inquiry quickly."
              eyebrow="Contact"
              tone="light"
              title="Plan your rollout"
            />
            <div className="mt-8 grid gap-3 text-sm text-white/78">
              <div className="rounded-[20px] border border-white/10 bg-white/6 px-5 py-4">
                Tell us what type of space you run and where Securis would be most useful first.
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/6 px-5 py-4">
                We can help with gyms, studios, waiting areas, retail counters, and other high-traffic customer zones.
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/6 px-5 py-4">
                Best for demo requests, pilot conversations, bulk placement questions, and partnerships.
              </div>
            </div>
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-mint">
                Direct contact
              </p>
              <a className="mt-3 inline-block text-lg font-medium text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <p className="mt-4 text-sm leading-6 text-white/68">
                Best for business rollout conversations, pilot ideas, partnerships, and general product questions.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <LeadCaptureForm
            description="Share your business name, what kind of space you run, and where you want to test Securis first. We will follow up with the right context."
            interestType="general"
            sourcePage="contact"
            submitLabel="Request a Demo"
            title="Start the conversation"
          />
        </Reveal>
      </Container>
    </section>
  )
}
