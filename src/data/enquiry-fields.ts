export type FieldLocale = 'en' | 'fr';
export type EnquiryGroup = 'assessment' | 'training' | 'proposal';
type Label = Record<FieldLocale, string>;
export interface ServiceOption {
  id: string;
  label: Label;
  subservices: { id: string; label: Label }[];
}
export const serviceOptions: ServiceOption[] = [
  {
    id: 'dei',
    label: {
      en: 'Diversity & inclusion',
      fr: 'Diversité et inclusion',
    },
    subservices: [
      {
        id: 'organizational-assessments',
        label: {
          en: 'Organizational inclusion assessments',
          fr: 'Évaluations de l’inclusion organisationnelle',
        },
      },
      {
        id: 'inclusive-policies',
        label: {
          en: 'Inclusive policy and practice review',
          fr: 'Révision inclusive des politiques et des pratiques',
        },
      },
      {
        id: 'inclusion-roadmaps',
        label: {
          en: 'Inclusion strategy and measurement',
          fr: 'Stratégie en inclusion et mesure des progrès',
        },
      },
    ],
  },
  {
    id: 'accessibility',
    label: {
      en: 'Accessibility',
      fr: 'Accessibilité',
    },
    subservices: [
      {
        id: 'digital-accessibility',
        label: {
          en: 'Digital accessibility assessments',
          fr: 'Évaluations de l’accessibilité numérique',
        },
      },
      {
        id: 'built-environment',
        label: {
          en: 'Built environment and service access',
          fr: 'Accessibilité des lieux et des services',
        },
      },
      {
        id: 'accommodation-planning',
        label: {
          en: 'Accommodation and accessibility planning',
          fr: 'Planification de l’accessibilité et des mesures d’adaptation',
        },
      },
    ],
  },
  {
    id: 'people-culture',
    label: {
      en: 'People & culture',
      fr: 'Personnel et culture',
    },
    subservices: [
      {
        id: 'employee-experience',
        label: {
          en: 'Culture and employee experience',
          fr: 'Culture et expérience du personnel',
        },
      },
      {
        id: 'leadership-practices',
        label: {
          en: 'Leadership and people-management practices',
          fr: 'Leadership et pratiques de gestion des personnes',
        },
      },
      {
        id: 'change-management',
        label: {
          en: 'Change management and organizational alignment',
          fr: 'Gestion du changement et cohérence organisationnelle',
        },
      },
    ],
  },
  {
    id: 'training',
    label: {
      en: 'Training & development',
      fr: 'Formation et développement',
    },
    subservices: [
      {
        id: 'inclusive-leadership',
        label: {
          en: 'Inclusive leadership workshops',
          fr: 'Ateliers de leadership inclusif',
        },
      },
      {
        id: 'accessible-service',
        label: {
          en: 'Accessibility and inclusive service learning',
          fr: 'Formation en accessibilité et en service inclusif',
        },
      },
      {
        id: 'learning-programs',
        label: {
          en: 'Custom learning programs and internal capacity',
          fr: 'Parcours de formation sur mesure et capacités internes',
        },
      },
    ],
  },
  {
    id: 'supplier-diversity',
    label: {
      en: 'Supplier diversity',
      fr: 'Diversité des fournisseurs',
    },
    subservices: [
      {
        id: 'program-design',
        label: {
          en: 'Supplier diversity program design',
          fr: 'Conception de programmes de diversité des fournisseurs',
        },
      },
      {
        id: 'supplier-engagement',
        label: {
          en: 'Supplier engagement and accessible sourcing',
          fr: 'Mobilisation des fournisseurs et recherche accessible',
        },
      },
      {
        id: 'procurement-measurement',
        label: {
          en: 'Procurement measurement and reporting',
          fr: 'Mesure et suivi de l’approvisionnement',
        },
      },
    ],
  },
  {
    id: 'social-impact',
    label: {
      en: 'Social impact',
      fr: 'Impact social',
    },
    subservices: [
      {
        id: 'stakeholder-engagement',
        label: {
          en: 'Stakeholder engagement and material priorities',
          fr: 'Consultation des parties prenantes et priorités essentielles',
        },
      },
      {
        id: 'social-procurement',
        label: {
          en: 'Social procurement strategy',
          fr: 'Stratégie d’approvisionnement social',
        },
      },
      {
        id: 'impact-measurement',
        label: {
          en: 'Impact planning and reporting',
          fr: 'Planification et suivi de l’impact',
        },
      },
    ],
  },
  {
    id: 'implementation',
    label: {
      en: 'Solutions & implementation',
      fr: 'Solutions et mise en œuvre',
    },
    subservices: [
      {
        id: 'product-sourcing',
        label: {
          en: 'Accessibility product sourcing and supply',
          fr: 'Recherche et fourniture de produits d’accessibilité',
        },
      },
      {
        id: 'signage-wayfinding',
        label: {
          en: 'Accessible signage and wayfinding',
          fr: 'Signalisation et orientation accessibles',
        },
      },
      {
        id: 'project-coordination',
        label: {
          en: 'Barrier-removal project coordination',
          fr: 'Coordination de projets d’élimination des obstacles',
        },
      },
    ],
  },
  {
    id: 'unsure',
    label: {
      en: 'Help me define the scope',
      fr: 'À déterminer ensemble',
    },
    subservices: [],
  },
];

export interface EnquiryField {
  id: string;
  label: Label;
  type: 'text' | 'textarea' | 'select' | 'date' | 'time';
  help?: Label;
  options?: { value: string; label: Label }[];
  wide?: boolean;
  maxLength?: number;
}
const label = (en: string, fr: string): Label => ({ en, fr });
const option = (value: string, en: string, fr: string) => ({
  value,
  label: label(en, fr),
});
export const enquiryGroups: {
  id: EnquiryGroup;
  title: Label;
  intro: Label;
  fields: EnquiryField[];
}[] = [
  {
    id: 'assessment',
    title: label('Scope your assessment', 'Précisons votre évaluation'),
    intro: label(
      'These optional details help identify the right assessment scope. A rough description is enough; avoid personal or confidential information.',
      'Ces renseignements facultatifs aident à définir la portée de l’évaluation. Une description sommaire suffit; évitez les renseignements personnels ou confidentiels.',
    ),
    fields: [
      {
        id: 'assessment_type',
        label: label(
          'What would you like assessed?',
          'Que souhaitez-vous faire évaluer?',
        ),
        type: 'select',
        options: [
          option(
            'digital',
            'Websites, documents or digital services',
            'Sites Web, documents ou services numériques',
          ),
          option(
            'built',
            'Buildings or physical spaces',
            'Bâtiments ou espaces physiques',
          ),
          option(
            'both',
            'Digital and physical environments',
            'Environnements numériques et physiques',
          ),
          option('unsure', 'Help me decide', 'À préciser ensemble'),
        ],
      },
      {
        id: 'assessment_assets',
        label: label(
          'Locations or assets in scope',
          'Lieux ou éléments à examiner',
        ),
        type: 'textarea',
        wide: true,
        maxLength: 600,
        help: label(
          'For example: two public entrances, a website, or a collection of PDF documents. Share general locations only; no access codes or private links.',
          'Par exemple : deux entrées publiques, un site Web ou un ensemble de documents PDF. Indiquez des lieux généraux, sans code d’accès ni lien privé.',
        ),
      },
      {
        id: 'assessment_barriers',
        label: label(
          'Barriers or concerns you have noticed',
          'Obstacles ou difficultés déjà observés',
        ),
        type: 'textarea',
        wide: true,
        maxLength: 600,
        help: label(
          'Describe the experience or task that is difficult, without identifying individuals or sharing medical details.',
          'Décrivez l’expérience ou la tâche qui pose problème, sans identifier de personnes ni fournir de renseignements médicaux.',
        ),
      },
    ],
  },
  {
    id: 'training',
    title: label(
      'Shape the learning experience',
      'Précisons l’expérience d’apprentissage',
    ),
    intro: label(
      'Tell us what would make the training useful for your team. All details in this section are optional.',
      'Indiquez ce qui rendrait la formation utile à votre équipe. Tous les renseignements de cette section sont facultatifs.',
    ),
    fields: [
      {
        id: 'training_size',
        label: label('Estimated group size', 'Taille estimée du groupe'),
        type: 'select',
        options: [
          option('1-15', '1–15 participants', '1 à 15 personnes'),
          option('16-30', '16–30 participants', '16 à 30 personnes'),
          option('31-60', '31–60 participants', '31 à 60 personnes'),
          option(
            '61-plus',
            'More than 60 participants',
            'Plus de 60 personnes',
          ),
          option('unsure', 'Not decided yet', 'À déterminer'),
        ],
      },
      {
        id: 'training_roles',
        label: label(
          'Participant roles',
          'Fonctions des personnes participantes',
        ),
        type: 'text',
        maxLength: 180,
        help: label(
          'For example: managers, procurement staff or customer-service teams.',
          'Par exemple : gestionnaires, personnel de l’approvisionnement ou équipes du service à la clientèle.',
        ),
      },
      {
        id: 'training_goal',
        label: label(
          'What should participants be able to do afterwards?',
          'Que devraient pouvoir faire les participants après la formation?',
        ),
        type: 'textarea',
        wide: true,
        maxLength: 600,
      },
      {
        id: 'training_format',
        label: label('Preferred format', 'Format souhaité'),
        type: 'select',
        options: [
          option('online', 'Online', 'En ligne'),
          option('in-person', 'In person', 'En personne'),
          option('hybrid', 'Hybrid', 'Hybride'),
          option('unsure', 'Open to recommendations', 'À déterminer ensemble'),
        ],
      },
      {
        id: 'training_language',
        label: label('Delivery language', 'Langue de la formation'),
        type: 'select',
        options: [
          option('en', 'English', 'Anglais'),
          option('fr', 'French', 'Français'),
          option('bilingual', 'English and French', 'Anglais et français'),
          option('unsure', 'To be confirmed', 'À confirmer'),
        ],
      },
    ],
  },
  {
    id: 'proposal',
    title: label('Define the brief', 'Précisons le mandat'),
    intro: label(
      'These optional details help shape a useful proposal. If a formal procurement process applies, its instructions and deadlines take precedence; this enquiry is not a bid submission.',
      'Ces renseignements facultatifs aident à préparer une proposition utile. Si une procédure d’approvisionnement officielle s’applique, ses instructions et ses échéances prévalent; cette demande ne constitue pas une soumission.',
    ),
    fields: [
      {
        id: 'proposal_reference',
        label: label(
          'RFP or project reference',
          'Référence de l’appel d’offres ou du projet',
        ),
        type: 'text',
        maxLength: 160,
      },
      {
        id: 'proposal_deliverables',
        label: label('Deliverables you would like', 'Livrables souhaités'),
        type: 'textarea',
        wide: true,
        maxLength: 600,
        help: label(
          'For example: a prioritized assessment report, a practical action plan or a facilitated workshop.',
          'Par exemple : un rapport d’évaluation avec priorités, un plan d’action concret ou un atelier animé.',
        ),
      },
      {
        id: 'proposal_constraints',
        label: label('Requirements or constraints', 'Exigences ou contraintes'),
        type: 'textarea',
        wide: true,
        maxLength: 600,
        help: label(
          'Mention approvals, language needs, available resources or procurement instructions. Do not share confidential tender documents.',
          'Mentionnez les approbations, les besoins linguistiques, les ressources disponibles ou les instructions d’approvisionnement. Ne transmettez pas de documents d’appel d’offres confidentiels.',
        ),
      },
      {
        id: 'deadline',
        label: label(
          'Procurement closing date',
          'Date de clôture de l’appel d’offres',
        ),
        type: 'date',
      },
      {
        id: 'deadline_time',
        label: label('Closing time', 'Heure de clôture'),
        type: 'time',
      },
      {
        id: 'deadline_timezone',
        label: label('Closing time zone', 'Fuseau horaire de clôture'),
        type: 'select',
        wide: true,
        help: label(
          'Use the zone stated in the solicitation. Dates and times are recorded as entered, without conversion. If uncertain, leave the time blank and explain in your message.',
          'Utilisez le fuseau indiqué dans l’appel d’offres. La date et l’heure sont conservées telles que saisies, sans conversion. En cas de doute, laissez l’heure vide et précisez-le dans votre message.',
        ),
        options: [
          option(
            'America/St_Johns',
            'Newfoundland (St. John’s)',
            'Terre-Neuve (St. John’s)',
          ),
          option(
            'America/Halifax',
            'Atlantic (Halifax)',
            'Atlantique (Halifax)',
          ),
          option(
            'America/Toronto',
            'Eastern (Toronto / Montréal)',
            'Est (Toronto / Montréal)',
          ),
          option('America/Winnipeg', 'Central (Winnipeg)', 'Centre (Winnipeg)'),
          option(
            'America/Regina',
            'Saskatchewan (Regina)',
            'Saskatchewan (Regina)',
          ),
          option(
            'America/Edmonton',
            'Mountain (Edmonton)',
            'Rocheuses (Edmonton)',
          ),
          option(
            'America/Vancouver',
            'Pacific (Vancouver)',
            'Pacifique (Vancouver)',
          ),
          option(
            'America/Whitehorse',
            'Yukon (Whitehorse)',
            'Yukon (Whitehorse)',
          ),
          option(
            'other',
            'Another zone — specify in your message',
            'Autre fuseau — à préciser dans votre message',
          ),
          option('unsure', 'To be confirmed', 'À confirmer'),
        ],
      },
    ],
  },
];
