import { coreImages } from './core-images';
import { utilityImages } from './utility-images';
import { subserviceImages } from './subservice-images';

export interface PageVisual {
  src: string;
  alt: { en: string; fr: string };
}

const photographs: Record<string, PageVisual> = {
  '': {
    src: '/images/photography/home-atrium.webp',
    alt: {
      en: 'Modern museum atrium with intersecting corridors and daylight.',
      fr: 'Un atrium de musée lumineux avec des passages et des courbes architecturales.',
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
    src: '/images/photography/accessibility-environment.webp',
    alt: {
      en: 'Stairs, handrails and escalators beneath an angular institutional roof.',
      fr: 'Des escaliers, des mains courantes et des escaliers mécaniques sous un toit angulaire.',
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
    src: '/images/photography/corporate-collaboration.webp',
    alt: {
      en: 'Three women collaborating with laptops in a shared workspace.',
      fr: 'Trois femmes collaborent avec leurs ordinateurs dans un espace de travail partagé.',
    },
  },
  'services/dei': {
    src: '/images/photography/inclusion-conversation.webp',
    alt: {
      en: 'Small group exchanging ideas around an open publication and devices.',
      fr: 'Un petit groupe échange autour d’une publication et d’appareils numériques.',
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
    src: '/images/photography/impact-landscape.webp',
    alt: {
      en: 'Snow-covered mountain landscape and road.',
      fr: 'Un paysage montagneux enneigé traversé par une route; le lieu n’est pas identifié.',
    },
  },
};

export const homeImages: Record<string, PageVisual> = {
  '@home-corporations': {
    src: '/images/photography/home-corporations.webp',
    alt: {
      en: 'Modern building exterior and geometric roof.',
      fr: 'Un bâtiment contemporain aux lignes géométriques.',
    },
  },
  '@home-guide-1': {
    src: '/images/photography/home-guide-accessibility.webp',
    alt: {
      en: 'Repetitive architectural windows and facade.',
      fr: 'Des fenêtres et des ombres rythment une façade claire.',
    },
  },
  '@home-government': {
    src: '/images/photography/home-government.webp',
    alt: {
      en: 'Person moving through a modern gallery staircase.',
      fr: 'Une personne traverse un escalier courbe dans une galerie.',
    },
  },
  '@home-guide-2': {
    src: '/images/photography/home-guide-procurement.webp',
    alt: {
      en: 'Black-and-white repeating hotel balconies and windows.',
      fr: 'Des balcons et des fenêtres se répètent sur une façade en noir et blanc.',
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
  ...utilityImages,
  ...Object.fromEntries(
    Object.entries(subserviceImages).map(([key, value]) => [
      'services/' + key,
      value,
    ]),
  ),
};
