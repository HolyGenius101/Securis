import mountedImage from '../assets/securis-mounted-real.png'

export const homePageData = {
  hero: {
    eyebrow: 'For gyms, studios, retail, and service venues',
    title: 'Give customers a better place to set what they carry.',
    description:
      'Securis helps business owners add a clean, visible holder for phones and small essentials so equipment, counters, and waiting areas feel more organized from the first glance.',
    primaryCta: { label: 'Request a Placement Plan', href: '/for-businesses#lead-form' },
    secondaryCta: { label: 'See Where It Fits', href: '/for-businesses' },
    image: mountedImage,
    chips: ['Fast to understand', 'Built for everyday traffic', 'Easy to test in one zone'],
    stats: [
      { value: 'Cleaner', label: 'stations and shared surfaces' },
      { value: 'Stronger', label: 'first impressions for customers' },
      { value: 'Smarter', label: 'use of overlooked wall space' },
    ],
  },
  audiences: {
    eyebrow: 'Use cases',
    title: 'Built for spaces where customers arrive with a phone in hand',
    description:
      'Securis works best anywhere people pause, set something down, or need a more organized place for personal items during a short interaction.',
    cards: [
      {
        title: 'Gyms & fitness clubs',
        description: 'Keep phones and small items off cardio machines, benches, and the floor.',
      },
      {
        title: 'Studios & wellness spaces',
        description: 'Add a more polished customer touchpoint to training, recovery, and class-based environments.',
      },
      {
        title: 'Retail & service counters',
        description: 'Give customers a dedicated place for essentials during checkout, pickup, or consultation.',
      },
      {
        title: 'Waiting areas & lounges',
        description: 'Reduce tabletop clutter while making the space feel more intentional and cared for.',
      },
    ],
  },
  outcomes: {
    eyebrow: 'Why it sells',
    title: 'A small upgrade people notice without needing it explained',
    description:
      'Owners do not need a major remodel to make a space feel more thoughtful. Securis adds a practical convenience feature that instantly makes busy stations look cleaner and better managed.',
    image: mountedImage,
    detailImage: mountedImage,
    points: [
      'Cut down on phones and keys being balanced on machine edges, ledges, and counters',
      'Make shared stations feel cleaner and more premium without changing the full layout',
      'Add a visible customer convenience that staff never need to explain twice',
      'Start with a few placements and expand only where it clearly improves the experience',
    ],
  },
  businessCases: [
    {
      title: 'Better customer behavior',
      description:
        'When there is an obvious place to set a phone or keys, customers use it naturally and clutter drops fast.',
    },
    {
      title: 'Cleaner visual standards',
      description:
        'Equipment, counters, and waiting spaces look more organized when personal items are not scattered across every surface.',
    },
    {
      title: 'Simple rollout logic',
      description:
        'Owners can test high-traffic stations first, confirm the value, and expand with confidence.',
    },
  ],
  steps: [
    {
      number: '01',
      title: 'Choose the right stations',
      description:
        'Start with the machines, counters, or waiting zones where people already set down a phone, wallet, keys, or earbuds.',
    },
    {
      number: '02',
      title: 'Let the habit form on its own',
      description:
        'The value is immediate: customers keep essentials close without balancing them on awkward surfaces.',
    },
    {
      number: '03',
      title: 'Scale what works',
      description:
        'Once the first placements prove themselves, owners can add more locations with a clear rollout plan.',
    },
  ],
  priorities: [
    {
      title: 'Will this look right in our space?',
      description:
        'It needs to feel like a clean, intentional part of the environment, not an afterthought added later.',
    },
    {
      title: 'Will customers actually use it?',
      description:
        'The strongest placements are the ones that match existing customer habits, especially where phones are already coming out.',
    },
    {
      title: 'Can we test it before rolling it out wider?',
      description:
        'Most owners want a pilot-friendly starting point before committing across a full floor or multiple locations.',
    },
    {
      title: 'Is the payoff clear enough to justify it?',
      description:
        'The best sales story is practical: cleaner stations, better customer convenience, and a more polished environment.',
    },
  ],
  questions: {
    title: 'What decision-makers ask first',
    description:
      'The fastest way to win owner interest is to answer rollout and placement questions before they need to ask them twice.',
    items: [
      {
        title: 'Where do we start?',
        description: 'Start with the most visible stations where phones and small items already end up during normal customer use.',
      },
      {
        title: 'What changes right away?',
        description: 'The space feels cleaner, the customer habit becomes more organized, and the station looks more intentionally designed.',
      },
      {
        title: 'How do we roll it out?',
        description: 'Begin with a few high-traffic placements, watch usage, then expand where the improvement is obvious.',
      },
    ],
  },
  rollout: [
    {
      audience: 'For business owners',
      price: 'Single site to multi-location rollout',
      title: 'Start where customers will notice it on day one',
      description:
        'The smartest first step is a focused placement plan for your busiest zone, flagship area, or most visible customer station.',
      cta: { label: 'Discuss Placement', href: '/for-businesses#lead-form' },
    },
  ],
  cta: {
    title: 'Tell us about your space and we will recommend the right first placements',
    description:
      'Share your business type, layout, and customer flow. We will follow up with a practical starting point for your location.',
  },
}
