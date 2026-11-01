export interface SubserviceImage {
  src: string;
  alt: { en: string; fr: string };
}

/** Original editorial illustrations; abstract diagrams, not project results. */
export const subserviceImages: Record<string, SubserviceImage> = {
  'dei/organizational-assessments': {
    src: '/images/subservices/dei-organizational-assessments.svg',
    alt: {
      en: 'Organizational relationships connected to an assessment lens.',
      fr: 'Relations organisationnelles reliées à une loupe d’évaluation.',
    },
  },
  'dei/inclusive-policies': {
    src: '/images/subservices/dei-inclusive-policies.svg',
    alt: {
      en: 'Layered policy documents with review tabs and a checklist.',
      fr: 'Documents de politiques superposés avec onglets de révision et liste de vérification.',
    },
  },
  'dei/inclusion-roadmaps': {
    src: '/images/subservices/dei-inclusion-roadmaps.svg',
    alt: {
      en: 'A winding roadmap links distinct milestones and planning cards.',
      fr: 'Une feuille de route sinueuse relie des jalons distincts et des fiches de planification.',
    },
  },
  'accessibility/digital-accessibility': {
    src: '/images/subservices/accessibility-digital-accessibility.svg',
    alt: {
      en: 'A browser interface with keyboard controls, visible focus and an accessibility figure.',
      fr: 'Interface de navigateur avec commandes au clavier, indicateur de focus et silhouette d’accessibilité.',
    },
  },
  'accessibility/built-environment': {
    src: '/images/subservices/accessibility-built-environment.svg',
    alt: {
      en: 'An architectural illustration connects an entrance with a ramp and a continuous route.',
      fr: 'Illustration architecturale reliant une entrée à une rampe et à un parcours continu.',
    },
  },
  'accessibility/accommodation-planning': {
    src: '/images/subservices/accessibility-accommodation-planning.svg',
    alt: {
      en: 'A branching decision process links a person, support options and a shared resolution.',
      fr: 'Un processus décisionnel relie une personne, des options de soutien et une résolution commune.',
    },
  },
  'people-culture/employee-experience': {
    src: '/images/subservices/people-culture-employee-experience.svg',
    alt: {
      en: 'A curved employee journey connects people, learning and team touchpoints.',
      fr: 'Un parcours du personnel relie les personnes, les apprentissages et les moments de vie d’équipe.',
    },
  },
  'people-culture/leadership-practices': {
    src: '/images/subservices/people-culture-leadership-practices.svg',
    alt: {
      en: 'Overlapping conversation spaces show listening and exchange between people.',
      fr: 'Des espaces de conversation superposés représentent l’écoute et les échanges.',
    },
  },
  'people-culture/change-management': {
    src: '/images/subservices/people-culture-change-management.svg',
    alt: {
      en: 'Separate work cards move toward an organized implementation plan.',
      fr: 'Des fiches de travail distinctes convergent vers un plan de mise en œuvre structuré.',
    },
  },
  'training/inclusive-leadership': {
    src: '/images/subservices/training-inclusive-leadership.svg',
    alt: {
      en: 'Participants gather around a workshop table with shared learning materials.',
      fr: 'Des personnes sont réunies autour d’une table d’atelier avec du matériel d’apprentissage commun.',
    },
  },
  'training/accessible-service': {
    src: '/images/subservices/training-accessible-service.svg',
    alt: {
      en: 'An accessible service counter connects a visitor and a staff member through clear communication.',
      fr: 'Un comptoir de service accessible relie une personne à un membre du personnel par une communication claire.',
    },
  },
  'training/learning-programs': {
    src: '/images/subservices/training-learning-programs.svg',
    alt: {
      en: 'Learning modules connect a visual lesson, practice resources and an open workbook.',
      fr: 'Des modules d’apprentissage relient une leçon visuelle, des ressources pratiques et un cahier ouvert.',
    },
  },
  'supplier-diversity/program-design': {
    src: '/images/subservices/supplier-diversity-program-design.svg',
    alt: {
      en: 'A procurement checklist connects to a structured program framework.',
      fr: 'Une liste de vérification en approvisionnement est reliée à un cadre de programme structuré.',
    },
  },
  'supplier-diversity/supplier-engagement': {
    src: '/images/subservices/supplier-diversity-supplier-engagement.svg',
    alt: {
      en: 'A central conversation connects a diverse network of supplier organizations.',
      fr: 'Une conversation centrale relie un réseau diversifié d’organisations fournisseurs.',
    },
  },
  'supplier-diversity/procurement-measurement': {
    src: '/images/subservices/supplier-diversity-procurement-measurement.svg',
    alt: {
      en: 'An abstract procurement dashboard brings category and participation measures together.',
      fr: 'Un tableau de bord abstrait réunit des mesures de catégories d’achat et de participation.',
    },
  },
  'social-impact/stakeholder-engagement': {
    src: '/images/subservices/social-impact-stakeholder-engagement.svg',
    alt: {
      en: 'Multiple stakeholder perspectives connect to a central discussion.',
      fr: 'Plusieurs points de vue de parties prenantes sont reliés à une discussion centrale.',
    },
  },
  'social-impact/social-procurement': {
    src: '/images/subservices/social-impact-social-procurement.svg',
    alt: {
      en: 'A purchasing flow connects resources, delivery and community benefit.',
      fr: 'Un parcours d’approvisionnement relie les ressources, la prestation et les retombées communautaires.',
    },
  },
  'social-impact/impact-measurement': {
    src: '/images/subservices/social-impact-impact-measurement.svg',
    alt: {
      en: 'A logic chain connects inputs, activities, outputs and intended outcomes with a feedback loop.',
      fr: 'Une chaîne logique relie les intrants, les activités, les extrants et les résultats visés, avec une boucle de rétroaction.',
    },
  },
  'implementation/product-sourcing': {
    src: '/images/subservices/implementation-product-sourcing.svg',
    alt: {
      en: 'An open supply box sits beside a product comparison and requirements checklist.',
      fr: 'Une boîte de fournitures ouverte est placée près d’une comparaison de produits et d’une liste d’exigences.',
    },
  },
  'implementation/signage-wayfinding': {
    src: '/images/subservices/implementation-signage-wayfinding.svg',
    alt: {
      en: 'A floor plan combines a continuous highlighted route with directional signage.',
      fr: 'Un plan d’étage combine un parcours continu mis en évidence et une signalisation directionnelle.',
    },
  },
  'implementation/project-coordination': {
    src: '/images/subservices/implementation-project-coordination.svg',
    alt: {
      en: 'A project schedule connects workstreams, dependencies and delivery roles.',
      fr: 'Un échéancier de projet relie les volets de travail, les dépendances et les rôles de prestation.',
    },
  },
};
