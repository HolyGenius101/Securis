import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { gymsPageData } from '../data/gyms'

export function ForGymsPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-[linear-gradient(180deg,#ffffff_0%,#eef2eb_100%)]">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
              {gymsPageData.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-none tracking-normal text-brand-ink md:text-[4rem]">
              {gymsPageData.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              {gymsPageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#lead-form">Request a demo</Button>
              <Button href="/contact" variant="secondary">
                Contact the team
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-brand-border bg-white p-7 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
                Why operators care
              </p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-brand-muted">
                <li>Less clutter around equipment and benches</li>
                <li>Stronger member convenience without changing machines</li>
                <li>A visible amenity that feels premium and practical</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              description="The operator story is simple: better member experience, cleaner stations, and a practical hardware upgrade people notice right away."
              title="What Securis adds to a facility"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {gymsPageData.benefits.map((benefit) => (
              <Reveal className="h-full" key={benefit.title}>
                <div className="surface-border h-full rounded-lg bg-brand-surface p-6">
                  <h3 className="text-2xl font-semibold text-brand-ink">{benefit.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-brand-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              description="Designed to make rollout conversations easy, even for smaller pilot programs."
              title="How rollout can work"
            />
            <div className="mt-8 space-y-3">
              {gymsPageData.rollout.map((item) => (
                <div className="surface-border rounded-lg bg-white px-5 py-4 text-base leading-7 text-brand-ink" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <SectionIntro
              description="Keep public pricing directional and handle exact packaging in conversations with operators."
              title="Pricing direction"
            />
            <div className="mt-8 space-y-3">
              {gymsPageData.pricing.map((item) => (
                <div className="surface-border rounded-lg bg-white px-5 py-4 text-base leading-7 text-brand-ink" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionIntro
              description="Tell us about your facility, rollout timeline, or pilot goals. We will come back with a practical next step."
              title="Start the conversation"
            />
          </Reveal>
          <Reveal>
            <LeadCaptureForm
              description="This form is built for gym owners, managers, trainers, and operators exploring pilots or bulk orders."
              interestType="gym-owner"
              sourcePage="for-gyms"
              title="Request a demo"
            />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
