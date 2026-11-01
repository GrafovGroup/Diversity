/** Original editorial illustrations; each topic has its own composition. */
export const utilityImages: Record<
  string,
  { src: string; alt: { en: string; fr: string } }
> = {
  contact: {
    src: '/images/pages/contact.svg',
    alt: {
      en: 'Two illustrated conversation cards connected by an open dialogue.',
      fr: 'Deux bulles de conversation illustrées évoquant un dialogue ouvert.',
    },
  },
  'request-proposal': {
    src: '/images/pages/request-proposal.svg',
    alt: {
      en: 'An illustrated project brief with defined work packages and a connected delivery plan.',
      fr: 'Un cahier de projet illustré avec des volets de travail définis et un plan de réalisation.',
    },
  },
  'request-assessment': {
    src: '/images/pages/request-assessment.svg',
    alt: {
      en: 'A magnifying glass reveals a barrier along a route through an illustrated floor plan.',
      fr: 'Une loupe révèle un obstacle sur un parcours dans un plan d’aménagement illustré.',
    },
  },
  'training-enquiry': {
    src: '/images/pages/training-enquiry.svg',
    alt: {
      en: 'An illustrated workshop connects a facilitator, participants and a shared learning diagram.',
      fr: 'Un atelier illustré réunit une personne animatrice, des participants et un schéma d’apprentissage commun.',
    },
  },
  privacy: {
    src: '/images/pages/privacy.svg',
    alt: {
      en: 'An illustrated privacy settings panel with individual controls and a protective shield.',
      fr: 'Un panneau de confidentialité illustré avec des réglages individuels et un bouclier de protection.',
    },
  },
  'accessibility-statement': {
    src: '/images/pages/accessibility-statement.svg',
    alt: {
      en: 'An illustrated keyboard navigation path leads to a clearly outlined focus target on a screen.',
      fr: 'Un parcours de navigation au clavier illustré mène à une cible de focus clairement délimitée à l’écran.',
    },
  },
};
