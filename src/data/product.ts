import heroImage from '../assets/securis-hero-real.png'
import mountedImage from '../assets/securis-mounted-real.png'

export const productPageData = {
  hero: {
    eyebrow: 'Product',
    title: 'A commercial holder designed for the items customers always carry',
    description:
      'Securis gives business owners a dedicated place for phones and small essentials so customer stations feel cleaner, more organized, and easier to use.',
    image: mountedImage,
  },
  gallery: [
    {
      title: 'Mounted for high-traffic commercial use',
      image: mountedImage,
    },
    {
      title: 'Installed where customers naturally pause',
      image: heroImage,
    },
  ],
  useCases: [
    'Gyms, health clubs, cardio floors, and training stations',
    'Studios, recovery rooms, and boutique wellness spaces',
    'Retail counters, service desks, waiting zones, and reception areas',
  ],
  specs: [
    { label: 'Placement logic', value: 'Best for stations where customers pause, train, wait, or check out' },
    { label: 'Storage behavior', value: 'Sized for a phone plus compact essentials such as keys, cards, or earbuds' },
    { label: 'Commercial intent', value: 'Built for repeated use in customer-facing environments' },
  ],
  details: [
    {
      title: 'Designed for obvious use',
      description:
        'Customers understand it at a glance because it solves a habit they already have: finding somewhere safe to set down a phone.',
    },
    {
      title: 'Built around real customer behavior',
      description:
        'It is made for the items people carry through workouts, appointments, pickups, and quick transactions.',
    },
    {
      title: 'Easy to place strategically',
      description:
        'Owners can begin with one equipment line, one counter, or one waiting area before expanding into the rest of the space.',
    },
  ],
  faqs: [
    {
      question: 'What does Securis hold?',
      answer:
        'Securis is designed for a phone and compact daily-carry items such as keys, earbuds, cards, or other small personal essentials.',
    },
    {
      question: 'Where does it make the most sense?',
      answer:
        'It performs best in customer-facing spaces where people naturally pause and set items down, especially gyms, studios, reception points, counters, and waiting areas.',
    },
    {
      question: 'How should a business roll it out?',
      answer:
        'Most owners should start with a small placement set in the busiest and most visible part of the business, then expand once the value is easy to see.',
    },
  ],
}
