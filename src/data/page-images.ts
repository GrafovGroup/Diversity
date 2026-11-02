import { coreImages } from './core-images';
import { utilityImages } from './utility-images';
import { subserviceImages } from './subservice-images';
import { servicePhotography } from './service-photography';

export interface PageVisual {
  src: string;
  alt: { en: string; fr: string };
  fit?: 'cover' | 'contain';
  width?: number;
  height?: number;
  srcset?: string;
  sizes?: string;
  objectPosition?: string;
}

const photographs: Record<string, PageVisual> = {
  '': {
    src: '/images/diversity_option1_exact_hero_crop.png',
    fit: 'cover',
    width: 545,
    height: 405,
    alt: {
      en: 'A smiling woman in a navy blazer with colleagues in a bright setting with a purple-blue background.',
      fr: 'Une femme souriante en veston bleu marine avec des collègues dans un décor lumineux aux tons violets et bleus.',
    },
  },
  government: {
    src: '/images/photography/government-civic.webp',
    alt: {
      en: 'Person photographing a columned civic building from outside.',
      fr: 'Une personne photographie un bâtiment à colonnes depuis l’extérieur.',
    },
  },
  'services/accessibility': {
    src: '/images/editorial/accessible-participation.svg',
    fit: 'contain',
    alt: {
      en: 'Illustration of a wheelchair user at an adjustable-height desk with a keyboard, laptop and captioned video call.',
      fr: 'Illustration d’une personne en fauteuil roulant à un bureau à hauteur réglable, avec clavier, ordinateur portable et appel vidéo sous-titré.',
    },
  },
  'insights/scope-an-accessibility-assessment': {
    src: '/images/photography/assessment-handrail.webp',
    alt: {
      en: 'Close view of a contrasting handrail against a bright green stair wall.',
      fr: 'Une main courante contrastée se détache sur un mur d’escalier vert.',
    },
  },
  'insights/turn-training-into-practice': {
    src: '/images/photography/learning-auditorium.webp',
    alt: {
      en: 'Conference audience seated in a large auditorium.',
      fr: 'Des personnes assistent à une conférence dans un grand auditorium.',
    },
  },
  'services/training': {
    src: '/images/photography/training-discussion.webp',
    alt: {
      en: 'Audience members seen from behind listening to an out-of-focus speaker.',
      fr: 'Des membres du public écoutent une personne qui prend la parole.',
    },
  },
  'insights/make-procurement-more-inclusive': {
    src: '/images/photography/procurement-digital.webp',
    alt: {
      en: 'Close view of a laptop keyboard and screen.',
      fr: 'Vue rapprochée du clavier et de l’écran d’un ordinateur portable.',
    },
  },
  'services/people-culture': {
    src: '/images/photography/people-workplace.webp',
    alt: {
      en: 'Person working on a laptop, hands and torso in view.',
      fr: 'Une personne travaille sur un ordinateur portable; ses mains et son buste sont visibles.',
    },
  },
  corporations: {
    src: '/images/photography/inclusion-conversation.webp',
    fit: 'contain',
    width: 960,
    height: 1280,
    alt: {
      en: 'Small group exchanging ideas around an open publication and devices.',
      fr: 'Un petit groupe échange autour d’une publication et d’appareils numériques.',
    },
  },
  'services/dei': {
    src: '/images/editorial/inclusive-workshop.svg',
    fit: 'contain',
    alt: {
      en: 'Illustration of three colleagues, including a wheelchair user, sharing ideas around a table.',
      fr: 'Illustration de trois collègues, dont une personne en fauteuil roulant, échangeant des idées autour d’une table.',
    },
  },
  'services/implementation': {
    src: '/images/photography/implementation-planning.webp',
    alt: {
      en: 'Person writing detailed notes at a desk beside a laptop.',
      fr: 'Une personne prend des notes détaillées à un bureau, à côté d’un ordinateur.',
    },
  },
  'services/supplier-diversity': {
    src: '/images/photography/supplier-planning.webp',
    alt: {
      en: 'Person taking notes beside a laptop and coffee.',
      fr: 'Une personne prend des notes à côté d’un ordinateur et d’un café.',
    },
  },
  'services/social-impact': {
    src: '/images/photography/community-belonging.webp',
    fit: 'contain',
    width: 1280,
    height: 1280,
    alt: {
      en: 'Four people standing outdoors with their arms around one another at sunset.',
      fr: 'Quatre personnes debout à l’extérieur, les bras autour des épaules les unes des autres, au coucher du soleil.',
    },
  },
};

export const homeImages: Record<string, PageVisual> = {
  '@home-corporations': {
    src: '/images/photography/digital-work.webp',
    width: 1500,
    height: 1000,
    alt: {
      en: 'Person working at a desktop computer with code visible on the screen.',
      fr: 'Une personne travaille à un ordinateur de bureau dont l’écran affiche du code.',
    },
  },
  '@home-guide-1': {
    src: '/images/editorial/accessible-interface.svg',
    alt: {
      en: 'Illustration of keyboard navigation, a visible focus indicator and video captions.',
      fr: 'Illustration de la navigation au clavier, d’un indicateur de focus visible et de sous-titres vidéo.',
    },
  },
  '@home-government': {
    src: '/images/editorial/public-participation.svg',
    alt: {
      en: 'Illustration of people, including a wheelchair user, talking at an accessible service counter.',
      fr: 'Illustration de personnes, dont une en fauteuil roulant, qui échangent à un comptoir de service accessible.',
    },
  },
  '@home-guide-2': {
    src: '/images/editorial/equitable-procurement.svg',
    alt: {
      en: 'Illustration of three supplier proposals considered alongside a shared evaluation checklist.',
      fr: 'Illustration de trois propositions de fournisseurs examinées à l’aide d’une grille d’évaluation commune.',
    },
  },
  '@home-guide-3': {
    src: '/images/photography/home-guide-learning.webp',
    alt: {
      en: 'Open notebook and pen beside a laptop on a wooden desk.',
      fr: 'Un carnet ouvert et un stylo à côté d’un ordinateur sur un bureau en bois.',
    },
  },
};

export const pageImages: Record<string, PageVisual> = {
  ...photographs,
  ...coreImages,
  ...servicePhotography,
  ...utilityImages,
  ...Object.fromEntries(
    Object.entries(subserviceImages).map(([key, value]) => [
      'services/' + key,
      value,
    ]),
  ),
};
