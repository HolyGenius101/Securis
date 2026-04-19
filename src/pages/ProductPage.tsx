import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { Reveal } from '../components/common/Reveal'
import { SectionIntro } from '../components/common/SectionIntro'
import { productPageData } from '../data/product'

export function ProductPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-white">
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
              {productPageData.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-[2.75rem] font-semibold leading-none tracking-normal text-brand-ink md:text-[4rem]">
              {productPageData.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              {productPageData.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Talk to the team</Button>
              <Button href="/for-gyms" variant="secondary">
                For gyms
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <img
              alt="Securis product mounted in a gym"
              className="w-full rounded-lg border border-brand-border object-cover shadow-[var(--shadow-panel)]"
              src={productPageData.hero.image}
            />
          </Reveal>
        </Container>
      </section>

      <section className="section-pad border-b border-brand-border bg-brand-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              description="Securis is designed around the environments where devices and valuables are always close by but never properly placed."
              title="Where it works"
            />
            <div className="mt-8 space-y-3">
              {productPageData.useCases.map((item) => (
                <div className="surface-border rounded-lg bg-white px-5 py-4 text-base text-brand-ink" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <SectionIntro
              description="A compact hardware footprint with a clear user job at every station."
              title="Product focus"
            />
            <div className="mt-8 grid gap-4">
              {productPageData.specs.map((spec) => (
                <div className="surface-border rounded-lg bg-white p-5" key={spec.label}>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">
                    {spec.label}
                  </p>
                  <p className="mt-3 text-lg text-brand-ink">{spec.value}</p>
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
              description="Real product photos help the story land faster: what it holds, where it mounts, and how it fits into an actual gym."
              title="Product in use"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {productPageData.gallery.map((image) => (
              <Reveal key={image.title}>
                <div className="overflow-hidden rounded-lg border border-brand-border bg-brand-surface">
                  <img
                    alt={image.title}
                    className="h-full w-full object-cover"
                    src={image.image}
                  />
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
              align="center"
              description="Securis is deliberately simple: protect the phone, create storage, and make the station feel better to use."
              title="Why the product matters"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {productPageData.details.map((detail) => (
              <Reveal className="h-full" key={detail.title}>
                <div className="surface-border h-full rounded-lg bg-brand-surface p-6">
                  <h3 className="text-2xl font-semibold text-brand-ink">{detail.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-muted">{detail.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-brand-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionIntro
              description="The key questions decision-makers and early customers will ask first."
              title="FAQ"
            />
          </Reveal>
          <div className="grid gap-4">
            {productPageData.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="surface-border rounded-lg bg-white p-6">
                  <h3 className="text-xl font-semibold text-brand-ink">{faq.question}</h3>
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
