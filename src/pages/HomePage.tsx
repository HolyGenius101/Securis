import { homePageData } from '../data/home'
import { site } from '../lib/site'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { LeadCaptureForm } from '../components/forms/LeadCaptureForm'

export function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-brand-border bg-[linear-gradient(180deg,#ffffff_0%,#f6f7f4_100%)]">
        <Container className="grid min-h-[calc(100svh-72px)] items-center gap-14 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
              {homePageData.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-none tracking-normal text-brand-ink md:text-[4rem]">
              {homePageData.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              {homePageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={homePageData.hero.primaryCta.href}>{homePageData.hero.primaryCta.label}</Button>
              <Button href={homePageData.hero.secondaryCta.href} variant="secondary">
                {homePageData.hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-brand-muted">
              {site.socialProof.map((item) => (
                <span
                  className="rounded-full border border-brand-border bg-white px-4 py-2"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:justify-self-end">
            <div className="relative">
              <div className="absolute inset-x-10 bottom-0 h-12 rounded-full bg-brand-green/10 blur-3xl" />
              <img
                alt="Securis holder mounted on gym equipment"
                className="relative mx-auto w-full max-w-xl rounded-[8px] object-cover shadow-[var(--shadow-panel)]"
                src={homePageData.hero.image}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              description={homePageData.problem.description}
              title={homePageData.problem.title}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {homePageData.problem.bullets.map((bullet) => (
              <Reveal className="h-full" key={bullet}>
                <div className="surface-border h-full rounded-lg bg-brand-surface p-6">
                  <p className="text-lg font-medium leading-7 text-brand-ink">{bullet}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-brand-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-1">
              <img
                alt="Securis mounted on gym equipment"
                className="w-full rounded-lg border border-brand-border object-cover shadow-[var(--shadow-panel)]"
                src={homePageData.solution.image}
              />
              <img
                alt="Securis holding a phone and small valuables"
                className="w-full rounded-lg border border-brand-border object-cover shadow-[var(--shadow-soft)]"
                src={homePageData.solution.detailImage}
              />
            </div>
          </Reveal>
          <Reveal>
            <SectionIntro
              description={homePageData.solution.description}
              title={homePageData.solution.title}
            />
            <div className="mt-8 grid gap-3">
              {homePageData.solution.points.map((point) => (
                <div
                  className="surface-border rounded-lg bg-white px-5 py-4 text-base font-medium text-brand-ink"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              align="center"
              description="Attach, place, and store. The strength of the product is how little explanation it needs."
              eyebrow="How it works"
              title="Built for the rhythm of a real workout"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {homePageData.steps.map((step) => (
              <Reveal className="h-full" key={step.number}>
                <div className="surface-border flex h-full flex-col rounded-lg bg-white p-6">
                  <span className="text-sm font-semibold text-brand-gold">{step.number}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-brand-ink">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-brand-surface">
        <Container>
          <Reveal>
            <SectionIntro
              description="Every detail maps back to what people need at the machine: visibility, stability, and a place for essentials."
              eyebrow="Features"
              title="Built for the way people train"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homePageData.features.map((feature) => (
              <Reveal className="h-full" key={feature.title}>
                <div className="surface-border h-full rounded-lg bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <h3 className="text-xl font-semibold text-brand-ink">{feature.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-white">
        <Container>
          <Reveal>
            <SectionIntro
              description={homePageData.validation.description}
              eyebrow="Validation"
              title={homePageData.validation.title}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 md:grid-cols-3">
              {homePageData.validation.stats.map((stat) => (
                <Reveal className="h-full" key={stat.label}>
                  <div className="surface-border h-full rounded-lg bg-brand-surface p-6">
                    <div className="text-3xl font-semibold text-brand-green">{stat.value}</div>
                    <p className="mt-3 text-sm leading-6 text-brand-muted">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="grid gap-4">
              {homePageData.validation.quotes.map((quote) => (
                <Reveal key={quote}>
                  <blockquote className="surface-border rounded-lg bg-white p-6 text-lg leading-8 text-brand-ink">
                    "{quote}"
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-brand-surface">
        <Container>
          <Reveal>
            <SectionIntro
              description="Securis works as a facility amenity product and a direct consumer accessory, with clear pricing logic for both."
              eyebrow="Business model"
              title="Built for both gyms and everyday users"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {homePageData.pricing.map((item) => (
              <Reveal className="h-full" key={item.audience}>
                <div className="surface-border flex h-full flex-col rounded-lg bg-white p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
                    {item.audience}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-brand-ink">{item.title}</h3>
                  <p className="mt-4 text-lg text-brand-gold">{item.price}</p>
                  <p className="mt-4 flex-1 text-base leading-7 text-brand-muted">{item.description}</p>
                  <Button className="mt-6 w-fit" href={item.cta.href} variant="secondary">
                    {item.cta.label}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionIntro
              description={homePageData.cta.description}
              eyebrow="Get in touch"
              title={homePageData.cta.title}
            />
            <div className="mt-8 rounded-lg bg-brand-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
                Best for
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-brand-muted">
                <li>Gym owners looking for pilot or rollout conversations</li>
                <li>Fitness users who want early access at launch</li>
                <li>Partners exploring bulk or school-facility deployments</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <LeadCaptureForm
              description="Tell us whether you are buying for a facility or for yourself, and we will follow up with the right next step."
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
