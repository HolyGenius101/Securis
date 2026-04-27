import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { SectionIntro } from '../components/common/SectionIntro'
import { gymsPageData } from '../data/gyms'

const rolloutProof = [
  'Easy to place in one visible zone before expanding.',
  'Simple enough for staff to understand immediately.',
  'Strongest when paired with real customer movement and traffic patterns.',
]

export function ForGymsPage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#0a2b56_58%,#102f5a_100%)]">
        <Container className="grid min-h-[calc(100svh-88px)] gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-end">
          <Reveal className="max-w-3xl">
            <p className="hero-eyebrow text-brand-mint">
              {gymsPageData.hero.eyebrow}
            </p>
            <h1 className="hero-title">
              {gymsPageData.hero.title}
            </h1>
            <p className="hero-copy">
              {gymsPageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#lead-form">Request a demo</Button>
              <Button href="/product" variant="secondary">
                Explore the product
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="dark-panel p-5 sm:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="overline text-brand-mint">
                    Why decision-makers care
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                    <li>Cleaner visible surfaces and fewer improvised storage habits.</li>
                    <li>A more premium customer experience without major construction.</li>
                    <li>A product that can start small and prove itself quickly.</li>
                  </ul>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                  <p className="overline text-brand-gold">
                    What a good first pilot looks like
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                    {rolloutProof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Why it lands"
              title="A business-facing product story should answer the room before it answers the hardware"
              description="Owners buy this when they can picture how the space gets cleaner, more useful, and more premium from a very small placement decision."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {gymsPageData.benefits.map((benefit) => (
              <Reveal className="h-full" key={benefit.title}>
                <div className="light-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <h3 className="card-title text-2xl text-brand-ink">{benefit.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container>
          <Reveal>
            <div className="dark-panel overflow-hidden p-8 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
                <div>
                  <SectionIntro
                    eyebrow="Where it fits"
                    title="Best in spaces where people already carry essentials through the experience"
                    description="The strongest placements are the ones customers understand immediately because they already need a place for their phone, keys, or earbuds."
                    tone="light"
                  />
                  <div className="mt-8 grid gap-3">
                    {gymsPageData.fit.map((item) => (
                      <div
                        className="rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-base leading-7 text-white/78"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {gymsPageData.rollout.map((item, index) => (
                    <div className="glass-panel p-5" key={item}>
                      <div className="overline text-brand-gold">0{index + 1}</div>
                      <p className="mt-3 text-base leading-7 text-white/72">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Buying conversation"
              title="Keep the next step simple enough to say yes to"
              description="Public-facing pricing does not need to be exhaustive. It does need to make the buying path feel low-friction, pilot-friendly, and practical."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {gymsPageData.pricing.map((item) => (
              <Reveal className="h-full" key={item}>
                <div className="light-panel flex h-full flex-col justify-between p-6">
                  <p className="overline text-brand-green">
                    Rollout option
                  </p>
                  <p className="card-title mt-5 text-2xl text-brand-ink">{item}</p>
                  <Button className="mt-8 w-fit" href="#lead-form" variant="secondary">
                    Ask about this path
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="dark-panel p-8 md:p-10">
              <SectionIntro
                description="Tell us about your business type, rollout timeline, or the first zone you want to improve and we will come back with a practical next step."
                eyebrow="Request a demo"
                tone="light"
                title="Start with the first area you want to clean up and we will take it from there"
              />
              <div className="mt-8 space-y-3 text-sm leading-6 text-white/68">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  Best for gyms, studios, wellness brands, and customer-facing spaces evaluating a pilot.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  Share the type of business, number of locations, or where customers currently place their items.
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <LeadCaptureForm
              description="This form is built for owners, operators, and teams exploring pilot placements or broader rollout conversations."
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
