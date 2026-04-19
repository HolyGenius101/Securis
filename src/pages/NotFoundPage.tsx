import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'

export function NotFoundPage() {
  return (
    <section className="bg-white py-24">
      <Container className="text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-green">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-brand-ink">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-brand-muted">
          The page you are looking for does not exist. Head back to the homepage and we will get
          you back on track.
        </p>
        <Button className="mt-8" href="/">
          Back to home
        </Button>
      </Container>
    </section>
  )
}
