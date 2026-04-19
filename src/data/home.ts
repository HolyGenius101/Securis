import heroImage from '../assets/securis-hero-real.png'
import detailImage from '../assets/securis-detail.png'
import mountedImage from '../assets/securis-mounted-real.png'

export const homePageData = {
  hero: {
    eyebrow: 'Hardware for modern training floors',
    title: 'Secure your phone. Keep your essentials close.',
    description:
      'Securis attaches to gym equipment so members can mount a phone, store keys and earbuds, and train without clutter or risk.',
    primaryCta: { label: 'Get Early Access', href: '#lead-form' },
    secondaryCta: { label: 'For Gym Owners', href: '/for-gyms' },
    image: heroImage,
  },
  problem: {
    title: 'The workout problem no one solved',
    description:
      'Phones slip. Essentials scatter. Members improvise around machines that were never built to hold what they bring every day.',
    bullets: [
      'Phones fall off machines and hit the floor.',
      'Keys, wallets, and earbuds get left on benches or in cup holders.',
      'Members carry valuables from station to station between sets.',
    ],
  },
  solution: {
    title: 'Meet Securis',
    description:
      'A secure mount and storage point that turns any compatible station into a cleaner, safer workout setup.',
    image: mountedImage,
    detailImage,
    points: [
      'Universal across common gym equipment',
      'Secure hold designed for active environments',
      'Storage beyond just a phone',
      'Built for facilities and direct consumer sales',
    ],
  },
  steps: [
    {
      number: '01',
      title: 'Attach',
      description:
        'Mount Securis to compatible gym equipment using its secure attachment system.',
    },
    {
      number: '02',
      title: 'Place Phone',
      description: 'Keep your phone visible, protected, and off the floor during every set.',
    },
    {
      number: '03',
      title: 'Store Items',
      description: 'Give keys, earbuds, and a wallet a dedicated place within reach.',
    },
  ],
  features: [
    {
      title: 'Universal fit',
      description: 'Designed to work across a wide range of gym machines and training setups.',
    },
    {
      title: 'Strong hold',
      description: 'Keeps phones stable and protected in real workout conditions.',
    },
    {
      title: 'Storage space',
      description: 'Adds a convenient home for small essentials without extra clutter.',
    },
    {
      title: 'Durable build',
      description: 'Made for repeated use in high-traffic fitness environments.',
    },
  ],
  validation: {
    title: 'Early validation',
    description:
      'Built from direct feedback on a problem gym users and operators already recognize.',
    stats: [
      { value: '2 markets', label: 'B2B gym sales and direct consumer demand' },
      { value: '3 core uses', label: 'Phone mount, essentials storage, equipment compatibility' },
      { value: '1 clear pain', label: 'No secure place for devices during workouts' },
    ],
    quotes: [
      'There is always a moment where you set your phone somewhere sketchy between sets.',
      'A clean storage point would be an easy member-experience win for gyms.',
    ],
  },
  pricing: [
    {
      audience: 'For individuals',
      price: '$29-$49',
      title: 'Expected direct-to-consumer pricing',
      description:
        'A simple accessory that keeps your device safe and your essentials close.',
      cta: { label: 'Join the waitlist', href: '#lead-form' },
    },
    {
      audience: 'For gyms',
      price: 'Volume pricing',
      title: 'Pilot, bulk, and custom packages',
      description:
        'Deploy Securis across machines as a premium member-experience upgrade.',
      cta: { label: 'Request a demo', href: '/for-gyms' },
    },
  ],
  cta: {
    title: 'Bring Securis to your gym or get on the launch list',
    description:
      'Tell us who you are and we will follow up with next steps, pilot details, or early access updates.',
  },
}
