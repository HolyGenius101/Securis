import detailImage from '../assets/securis-detail.png'
import heroImage from '../assets/securis-lifestyle.png'
import mountedImage from '../assets/securis-mounted-real.png'

export const productPageData = {
  hero: {
    eyebrow: 'Product',
    title: 'A smarter place for your phone and essentials',
    description:
      'Securis turns unused machine space into a secure mount and storage point for the items people actually bring to the gym.',
    image: heroImage,
  },
  gallery: [
    {
      title: 'Mounted in real gym conditions',
      image: mountedImage,
    },
    {
      title: 'Storage for phone and small essentials',
      image: detailImage,
    },
  ],
  useCases: [
    'Treadmills and cardio equipment',
    'Strength machines and cable stations',
    'Studios, training facilities, and school gyms',
  ],
  specs: [
    { label: 'Attachment', value: 'Magnet and clamp-ready mounting concept' },
    { label: 'Storage', value: 'Phone plus keys, earbuds, and wallet' },
    { label: 'Build goal', value: 'Durable for repeat use in active spaces' },
  ],
  details: [
    {
      title: 'Engineered for visibility',
      description:
        'Keep your screen in sight for music, timers, and workouts without balancing it on a ledge.',
    },
    {
      title: 'Made for actual gym behavior',
      description:
        'Designed around what people already carry from machine to machine every day.',
    },
    {
      title: 'Ready for facility rollout',
      description:
        'A compact hardware product with clear B2B and B2C sales potential from day one.',
    },
  ],
  faqs: [
    {
      question: 'What does Securis hold?',
      answer:
        'The concept is built to secure a phone and small essentials such as keys, earbuds, and a wallet.',
    },
    {
      question: 'Who is it for?',
      answer:
        'Securis is designed for gym owners, operators, and fitness users who want a safer, cleaner workout setup.',
    },
    {
      question: 'How will pricing work?',
      answer:
        'Consumer pricing is expected in the $29-$49 range, while gyms will receive volume-based pricing and pilot options.',
    },
  ],
}
