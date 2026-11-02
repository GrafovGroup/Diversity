import type { Locale } from './services';

export const searchTitles: Record<string, Record<Locale, string>> = {
  '': {
    en: 'DEI Consulting, Accessibility & Workplace Training in Canada',
    fr: 'Services-conseils en EDI, accessibilité et formation au Canada',
  },
  services: {
    en: 'DEI, Accessibility & Inclusion Services in Canada',
    fr: 'Services en EDI, en accessibilité et en inclusion au Canada',
  },
  government: {
    en: 'DEI & Accessibility Consulting for Government in Canada',
    fr: 'Conseil en EDI et en accessibilité pour le secteur public canadien',
  },
  corporations: {
    en: 'Corporate DEI Consulting & Workplace Inclusion in Canada',
    fr: 'Conseil en EDI et inclusion au travail pour les entreprises',
  },
  contact: {
    en: 'Contact Diversity.ca for DEI & Accessibility Consulting',
    fr: 'Contacter Diversity.ca pour un mandat en EDI ou en accessibilité',
  },
  'request-assessment': {
    en: 'Request an Accessibility Assessment',
    fr: 'Demander une évaluation de l’accessibilité',
  },
  'request-proposal': {
    en: 'Request a DEI or Accessibility Proposal',
    fr: 'Demander une proposition en EDI ou en accessibilité',
  },
  'training-enquiry': {
    en: 'Enquire About Workplace Inclusion Training',
    fr: 'Demander une formation sur l’inclusion au travail',
  },
};
