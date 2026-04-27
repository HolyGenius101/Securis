import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { productPageData } from '../data/product'

const trustSignals = [
  'Designed for high-traffic commercial environments.',
  'Built around the phone-plus-essentials behavior owners already see every day.',
  'Easy to understand in a first walkthrough, demo, or pilot conversation.',
]

export function ProductPage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#0a2b56_58%,#102f5a_100%)]">
        <Container className="grid gap-10 py-14 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-center">
          <Reveal className="max-w-3xl">
            <p className="hero-eyebrow text-brand-mint">
              {productPageData.hero.eyebrow}
            </p>
            <h1 className="hero-title">
              {productPageData.hero.title}
            </h1>
            <p className="hero-copy">
              {productPageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">Talk to the team</Button>
              <Button href="/for-businesses" variant="secondary">
                For businesses
              </Button>
            </div>
            <div className="mt-10 grid gap-3">
              {trustSignals.map((item) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-sm leading-6 text-white/74"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="dark-panel p-4 sm:p-5 lg:p-6">
              <div className="grid gap-4 xl:grid-cols-[1.06fr_0.94fr]">
                <img
                  alt="Securis product mounted in a gym"
                  className="min-h-[320px] w-full rounded-[28px] border border-white/10 object-cover shadow-[var(--shadow-hero)] sm:min-h-[420px]"
                  src={productPageData.hero.image}
                />
                <div className="grid gap-4">
                  {productPageData.specs.map((spec) => (
                    <div className="glass-panel p-5" key={spec.label}>
                      <p className="overline text-brand-mint">
                        {spec.label}
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/76">{spec.value}</p>
                    </div>
                  ))}
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
              eyebrow="Product in context"
              title="What owners need to understand before they ask for a pilot"
              description="The product page should make it clear where Securis belongs, what behavior it supports, and why it improves the surrounding environment."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <Reveal className="h-full">
              <div className="light-panel h-full p-7">
                <p className="overline text-brand-green">Where it works</p>
                <div className="mt-6 space-y-3">
                  {productPageData.useCases.map((item) => (
                    <div className="rounded-2xl border border-brand-border bg-white/70 px-5 py-4 text-base text-brand-ink" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal className="h-full">
              <div className="dark-panel h-full p-8 md:p-10">
                <SectionIntro
                  eyebrow="Why it matters"
                  title="A stronger touchpoint, not just a place to put a phone"
                  description="The right product framing is about visible convenience, cleaner presentation, and a better experience at the exact moment customers need somewhere to place their essentials."
                  tone="light"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {productPageData.details.map((detail) => (
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5" key={detail.title}>
                      <h3 className="card-title text-xl text-white">{detail.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/70">{detail.description}</p>
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
              eyebrow="Real product views"
              title="Show the product the way a buyer evaluates it"
              description="Real product photos help the pitch land quickly by showing what it holds, where it belongs, and how it cleans up the surrounding space."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-brand-border bg-brand-surface shadow-[var(--shadow-soft)]">
                <img
                  alt={productPageData.gallery[0].title}
                  className="h-full min-h-[300px] w-full object-cover sm:min-h-[440px]"
                  src={productPageData.gallery[0].image}
                />
              </div>
            </Reveal>
            <div className="grid gap-4">
              {productPageData.gallery.map((image) => (
                <Reveal key={image.title}>
                  <div className="overflow-hidden rounded-[24px] border border-brand-border bg-brand-surface shadow-[var(--shadow-soft)]">
                    <img alt={image.title} className="h-44 w-full object-cover sm:h-56" src={image.image} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="dark-panel p-8 md:p-10">
              <SectionIntro
                description="These are the practical questions business owners and operators tend to ask before they move into a pilot conversation."
                eyebrow="FAQ"
                tone="light"
                title="Answer the questions that decide whether the conversation continues"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/for-businesses#lead-form">Request a demo</Button>
                <Button href="/contact" variant="secondary">
                  Ask a specific question
                </Button>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {productPageData.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="light-panel p-6">
                  <h3 className="card-title text-xl text-brand-ink">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-brand-muted">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
