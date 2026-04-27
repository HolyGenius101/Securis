import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'
import { homePageData } from '../data/home'
import { site } from '../lib/site'

const ownerSignals = [
  'Fits into pilot conversations without sounding like a renovation project.',
  'Shows value in the exact places customers already improvise with their phone and essentials.',
  'Makes the environment feel more considered before anyone needs a long explanation.',
]

export function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#0a2b56_56%,#f8f2e8_56%,#fcfbf7_100%)]">
        <Container className="grid min-h-[calc(100svh-72px)] gap-14 py-16 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
              {homePageData.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[5.2rem]">
              {homePageData.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              {homePageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={homePageData.hero.primaryCta.href}>{homePageData.hero.primaryCta.label}</Button>
              <Button href={homePageData.hero.secondaryCta.href} variant="secondary">
                {homePageData.hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
              {homePageData.hero.chips.map((item) => (
                <span
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {homePageData.hero.stats.map((stat) => (
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5" key={stat.label}>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-white/62">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:justify-self-end">
            <div className="dark-panel relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-10 top-4 h-40 rounded-full bg-brand-mint/10 blur-3xl" />
              <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/6">
                  <img
                    alt="Securis holder mounted on equipment"
                    className="h-full min-h-[420px] w-full object-cover"
                    src={homePageData.hero.image}
                  />
                </div>
                <div className="grid gap-4">
                  <div className="glass-panel p-5">
                    <div className="text-sm uppercase tracking-[0.14em] text-brand-mint">Best first placements</div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-white/74">
                      {site.socialProof.map((item) => (
                        <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3" key={item}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-panel p-5">
                    <div className="text-sm uppercase tracking-[0.14em] text-brand-gold">Why owners buy in</div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-white/74">
                      {ownerSignals.map((item) => (
                        <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3" key={item}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/6">
                    <img
                      alt="Securis detail showing room for a phone and small items"
                      className="h-44 w-full object-cover"
                      src={homePageData.outcomes.detailImage}
                    />
                  </div>
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
              eyebrow="What changes"
              title="The business case should feel obvious in a single walkthrough"
              description="Business owners do not need a long product education. They need to see cleaner behavior, a better customer touchpoint, and a rollout path that feels small enough to start."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="dark-panel h-full p-8 md:p-10">
                <div className="grid gap-4 sm:grid-cols-3">
                  {homePageData.businessCases.map((item) => (
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5" key={item.title}>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-mint">
                        {item.title}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-white/72">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  {homePageData.outcomes.points.map((point) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-base font-medium text-white/84"
                      key={point}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal className="h-full">
              <div className="light-panel flex h-full flex-col justify-between p-7">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-green">
                    Decision-maker lens
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-brand-ink">
                    A small fixture that changes how the whole station reads.
                  </h3>
                </div>
                <div className="mt-8 space-y-3">
                  {homePageData.questions.items.map((item) => (
                    <div className="rounded-2xl border border-brand-border bg-white/70 px-4 py-4" key={item.title}>
                      <p className="text-base font-semibold text-brand-ink">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-brand-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container>
          <Reveal>
            <SectionIntro
              align="center"
              eyebrow={homePageData.audiences.eyebrow}
              title={homePageData.audiences.title}
              description={homePageData.audiences.description}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homePageData.audiences.cards.map((card) => (
              <Reveal className="h-full" key={card.title}>
                <div className="light-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-green">Use case</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Reveal>
            <div className="dark-panel overflow-hidden p-8 md:p-10">
              <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div>
                  <SectionIntro
                    eyebrow="Rollout logic"
                    title="Start where the visual improvement lands immediately"
                    description="Owners gain confidence fastest when Securis appears in high-traffic zones where phones and small essentials already end up on improvised surfaces."
                    tone="light"
                  />
                  <div className="mt-8 grid gap-4">
                    {homePageData.steps.map((step) => (
                      <div className="rounded-[24px] border border-white/10 bg-white/6 p-5" key={step.number}>
                        <div className="text-sm font-semibold tracking-[0.14em] text-brand-gold">{step.number}</div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/70">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
                  <img
                    alt="Securis mounted on gym equipment"
                    className="w-full rounded-[28px] border border-white/10 object-cover shadow-[var(--shadow-panel)]"
                    src={homePageData.outcomes.image}
                  />
                  <div className="grid gap-4">
                    {homePageData.rollout.map((item) => (
                      <div className="glass-panel p-6" key={item.title}>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-mint">
                          {item.audience}
                        </p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-white/70">{item.description}</p>
                        <p className="mt-5 text-sm font-medium text-brand-gold">{item.price}</p>
                        <Button className="mt-6 w-fit" href={item.cta.href} variant="secondary">
                          {item.cta.label}
                        </Button>
                      </div>
                    ))}
                    <div className="glass-panel p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-mint">
                        What good rollout pages answer
                      </p>
                      <div className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                        {homePageData.priorities.map((item) => (
                          <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3" key={item.title}>
                            <span className="font-medium text-white">{item.title}</span> {item.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="dark-panel p-8 md:p-10">
              <SectionIntro
                description={homePageData.cta.description}
                eyebrow="Start the conversation"
                tone="light"
                title={homePageData.cta.title}
              />
              <div className="mt-8 grid gap-3 text-sm leading-6 text-white/68">
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  Best for gyms, studios, wellness spaces, and customer-facing businesses exploring a pilot.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  Include your business type, number of locations, or the first area where you would place Securis.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                  We will follow up with a practical next step, not a vague waitlist reply.
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <LeadCaptureForm
              description="Share a few details and the Securis team will follow up with a practical next step."
              interestType="gym-owner"
              sourcePage="homepage"
              title="Request a demo"
            />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
