export type Locale = 'en' | 'fr';
export type Localized<T = string> = Record<Locale, T>;
export type ContentSection = {
  heading: Localized;
  body: Localized;
  items?: Localized<string[]>;
};
export type ContentPage = {
  slug: string;
  eyebrow: Localized;
  title: Localized;
  intro: Localized;
  sections: ContentSection[];
  cta?: { label: Localized; path: string };
};

export const pages: ContentPage[] = [
  {
    slug: 'about',
    eyebrow: { en: 'ABOUT DIVERSITY.CA', fr: 'À PROPOS DE DIVERSITY.CA' },
    title: {
      en: 'Progress starts with how we work together.',
      fr: 'Le progrès commence par notre façon de travailler ensemble.',
    },
    intro: {
      en: 'Diversity.ca brings people, policy and implementation into one conversation. Our focus is practical: help organizations understand barriers, make considered decisions and turn their commitments into work that can be carried forward.',
      fr: 'Diversity.ca réunit les personnes, les politiques et la mise en œuvre dans une même démarche. Notre priorité est concrète : aider les organisations à comprendre les obstacles, à prendre des décisions éclairées et à traduire leurs engagements en actions durables.',
    },
    sections: [
      {
        heading: {
          en: 'One connected view of your organization',
          fr: 'Une vision d’ensemble de votre organisation',
        },
        body: {
          en: 'A workplace policy affects the employee experience. A procurement decision affects access to opportunity. A building improvement affects how people use a service. We connect these decisions across seven service divisions, with the scope shaped around the problem you need to solve.',
          fr: 'Une politique interne influence l’expérience employé. Une décision d’approvisionnement influence l’accès aux occasions d’affaires. L’amélioration d’un bâtiment influence l’utilisation d’un service. Nos sept divisions relient ces décisions, dans un mandat défini selon le problème à résoudre.',
        },
        items: {
          en: [
            'Understand the current experience before prescribing a solution.',
            'Include the people affected by a decision in the discussion.',
            'Define ownership, resources and measures alongside recommendations.',
          ],
          fr: [
            'Comprendre l’expérience actuelle avant de proposer une solution.',
            'Faire participer les personnes concernées aux échanges.',
            'Définir les responsabilités, les ressources et les indicateurs avec les recommandations.',
          ],
        },
      },
      {
        heading: {
          en: 'Advisory with a path to implementation',
          fr: 'Des conseils qui mènent à l’action',
        },
        body: {
          en: 'Our proposed engagements can move from assessment and planning to training, procurement support and implementation coordination. Each proposal identifies what Diversity.ca will deliver directly, where a qualified specialist may be needed, and which decisions remain with your organization.',
          fr: 'Les mandats proposés peuvent aller de l’évaluation et de la planification à la formation, au soutien à l’approvisionnement et à la coordination de la mise en œuvre. Chaque proposition précise les livrables assurés directement par Diversity.ca, les besoins éventuels en spécialistes qualifiés et les décisions qui relèvent de votre organisation.',
        },
      },
      {
        heading: {
          en: 'A clear relationship, from the start',
          fr: 'Une relation claire, dès le départ',
        },
        body: {
          en: 'You should know who is doing the work, how information will be used and what you will receive. We use a defined scope, named responsibilities and agreed review points. Specific qualifications, partner involvement and delivery capacity are confirmed for each engagement before work begins.',
          fr: 'Vous devez savoir qui réalise le travail, comment l’information sera utilisée et ce que vous recevrez. Nous privilégions une portée définie, des responsabilités précises et des étapes de révision convenues. Les qualifications particulières, la participation de partenaires et la capacité de livraison sont confirmées pour chaque mandat avant le début des travaux.',
        },
      },
      {
        heading: {
          en: 'Built around Canadian organizations',
          fr: 'Une démarche adaptée aux organisations canadiennes',
        },
        body: {
          en: 'Our service model is designed for corporations, governments, public agencies, educational institutions and other large organizations across Canada. Language, jurisdiction, geography and procurement requirements belong in the project brief—not in an assumption made after the work starts.',
          fr: 'Notre modèle de services s’adresse aux entreprises, aux administrations publiques, aux organismes publics, aux établissements d’enseignement et aux autres grandes organisations au Canada. La langue, la juridiction, la géographie et les exigences d’approvisionnement font partie du mandat dès sa définition.',
        },
      },
    ],
    cta: {
      label: {
        en: 'TELL US WHAT YOU ARE WORKING ON',
        fr: 'PARLEZ-NOUS DE VOTRE PROJET',
      },
      path: '/contact/',
    },
  },
  {
    slug: 'approach',
    eyebrow: { en: 'OUR APPROACH', fr: 'NOTRE APPROCHE' },
    title: {
      en: 'Understand. Prioritize. Put it into practice.',
      fr: 'Comprendre. Prioriser. Passer à l’action.',
    },
    intro: {
      en: 'Useful advice reflects the reality of your organization. Our engagement framework connects evidence and participation with decisions, clear deliverables and a workable plan for implementation.',
      fr: 'Des conseils utiles tiennent compte de la réalité de votre organisation. Notre cadre d’intervention relie les données et la participation aux décisions, à des livrables clairs et à un plan de mise en œuvre réaliste.',
    },
    sections: [
      {
        heading: {
          en: '01 — Listen and define',
          fr: '01 — Écouter et définir',
        },
        body: {
          en: 'Start with the decision you need to make, the people affected and the constraints you face. We clarify the intended outcome, project boundaries, information requirements, language needs and decision-making structure before proposing the work.',
          fr: 'Le point de départ est la décision à prendre, les personnes concernées et vos contraintes. Nous précisons le résultat visé, les limites du mandat, les besoins en information et en langues ainsi que la structure décisionnelle avant de proposer les travaux.',
        },
        items: {
          en: [
            'A shared problem statement and agreed scope.',
            'Stakeholder, access and information requirements.',
            'Delivery responsibilities and review checkpoints.',
          ],
          fr: [
            'Une définition commune du problème et une portée convenue.',
            'Les parties prenantes et les besoins d’accès et d’information.',
            'Les responsabilités de livraison et les étapes de révision.',
          ],
        },
      },
      {
        heading: {
          en: '02 — Assess and make sense of the evidence',
          fr: '02 — Évaluer et interpréter les données',
        },
        body: {
          en: 'Use the methods appropriate to the question: document review, interviews, workshops, journey mapping or a scoped accessibility assessment. We distinguish observed conditions from interpretation and identify limitations so that a recommendation is not mistaken for a complete picture.',
          fr: 'Nous retenons les méthodes adaptées à la question : examen documentaire, entrevues, ateliers, cartographie des parcours ou évaluation ciblée de l’accessibilité. Nous distinguons les constats des interprétations et précisons les limites de l’analyse.',
        },
      },
      {
        heading: {
          en: '03 — Prioritize and plan',
          fr: '03 — Prioriser et planifier',
        },
        body: {
          en: 'Translate findings into choices. Consider the barrier addressed, the people affected, dependencies, effort and available resources. Agree on what can change now, what needs further investigation and what requires a longer investment horizon.',
          fr: 'Les constats deviennent des choix. Nous examinons l’obstacle visé, les personnes concernées, les dépendances, les efforts et les ressources disponibles. Nous convenons de ce qui peut changer maintenant, de ce qui nécessite une analyse supplémentaire et de ce qui exige un investissement à plus long terme.',
        },
        items: {
          en: [
            'A sequenced roadmap with accountable owners.',
            'Deliverables and acceptance criteria for each workstream.',
            'Measures that can be maintained with the information available.',
          ],
          fr: [
            'Une feuille de route séquencée avec des responsables désignés.',
            'Des livrables et des critères d’acceptation pour chaque volet.',
            'Des indicateurs qu’il est possible de suivre avec les données disponibles.',
          ],
        },
      },
      {
        heading: {
          en: '04 — Implement, learn and hand over',
          fr: '04 — Mettre en œuvre, apprendre et transférer',
        },
        body: {
          en: 'Support the agreed changes through practical tools, training or implementation coordination. Review what is working with the people who use it, document outstanding issues and leave your team with ownership of the next steps. Specialist installation, regulated advice and formal certification require separately confirmed qualifications and scope.',
          fr: 'Nous soutenons les changements convenus par des outils pratiques, de la formation ou la coordination de la mise en œuvre. Nous examinons leur fonctionnement avec les personnes qui les utilisent, consignons les questions en suspens et transférons la responsabilité des prochaines étapes à votre équipe. Les installations spécialisées, les conseils réglementés et les certifications officielles exigent une portée et des qualifications confirmées séparément.',
        },
      },
    ],
    cta: {
      label: { en: 'DEFINE YOUR NEXT STEP', fr: 'DÉFINIR LA PROCHAINE ÉTAPE' },
      path: '/request-proposal/',
    },
  },
  {
    slug: 'corporations',
    eyebrow: {
      en: 'SOLUTIONS FOR CORPORATIONS',
      fr: 'SOLUTIONS POUR LES ENTREPRISES',
    },
    title: {
      en: 'Make organizational ambition operational.',
      fr: 'Traduire vos ambitions organisationnelles en actions.',
    },
    intro: {
      en: 'Connect people strategy, accessible experiences and responsible procurement with the way your business actually operates. Start with a focused challenge or bring related workstreams into one coordinated plan.',
      fr: 'Reliez la stratégie humaine, les expériences accessibles et l’approvisionnement responsable au fonctionnement réel de votre entreprise. Abordez un enjeu précis ou rassemblez plusieurs volets dans un plan coordonné.',
    },
    sections: [
      {
        heading: {
          en: 'People and culture, beyond a policy document',
          fr: 'Les personnes et la culture, au-delà des politiques',
        },
        body: {
          en: 'Examine how hiring, onboarding, everyday management and career development are experienced across your organization. An engagement can pair employee listening with policy review and practical guidance for managers, while respecting the limits of available data and employee confidentiality.',
          fr: 'Examinez l’expérience du recrutement, de l’intégration, de la gestion quotidienne et du développement professionnel dans votre organisation. Un mandat peut combiner l’écoute des employés, la révision des politiques et des outils pratiques pour les gestionnaires, en respectant les limites des données disponibles et la confidentialité.',
        },
        items: {
          en: [
            'Workforce and employee-experience assessments.',
            'Leadership and manager capability building.',
            'Policies, change plans and measures of progress.',
          ],
          fr: [
            'Évaluations des pratiques de gestion et de l’expérience employé.',
            'Développement des compétences des leaders et des gestionnaires.',
            'Politiques, plans de changement et indicateurs de progrès.',
          ],
        },
      },
      {
        heading: {
          en: 'Access across the customer and employee journey',
          fr: 'L’accès dans les parcours clients et employés',
        },
        body: {
          en: 'Barriers can occur between a website, an application process, a physical location and a service interaction. Scope an assessment around the journeys that matter, then prioritize improvements across digital content, operating procedures and the built environment.',
          fr: 'Des obstacles peuvent apparaître entre un site Web, un processus de candidature, un lieu physique et une interaction de service. Définissez une évaluation autour des parcours prioritaires, puis planifiez les améliorations du contenu numérique, des procédures et de l’environnement bâti.',
        },
      },
      {
        heading: {
          en: 'A more considered supply chain',
          fr: 'Une chaîne d’approvisionnement mieux réfléchie',
        },
        body: {
          en: 'Review supplier participation, qualification requirements and how opportunities are communicated. We can help structure a supplier-diversity program, identify avoidable participation barriers and connect procurement decisions with your stated social-impact objectives.',
          fr: 'Examinez la participation des fournisseurs, les exigences de qualification et la communication des occasions d’affaires. Nous pouvons vous aider à structurer un programme de diversité des fournisseurs, à repérer les obstacles évitables et à relier les décisions d’achat à vos objectifs d’impact social.',
        },
      },
      {
        heading: {
          en: 'A scope your teams can work with',
          fr: 'Un mandat que vos équipes peuvent mettre en œuvre',
        },
        body: {
          en: 'Bring your business priorities, participating locations, decision timeline and existing initiatives. A proposal can distinguish a diagnostic phase, a practical pilot and a wider rollout, with dependencies, deliverables and team responsibilities made explicit. Work can be scoped for a single function or a cross-functional program.',
          fr: 'Présentez vos priorités d’affaires, les lieux concernés, votre échéancier décisionnel et vos initiatives actuelles. Une proposition peut distinguer une phase de diagnostic, un projet pilote et un déploiement élargi, en précisant les dépendances, les livrables et les responsabilités. Le mandat peut viser une fonction ou un programme transversal.',
        },
      },
    ],
    cta: {
      label: {
        en: 'DISCUSS A CORPORATE ENGAGEMENT',
        fr: 'DISCUTER D’UN MANDAT EN ENTREPRISE',
      },
      path: '/request-proposal/',
    },
  },
  {
    slug: 'government',
    eyebrow: {
      en: 'SOLUTIONS FOR GOVERNMENT',
      fr: 'SOLUTIONS POUR LES ADMINISTRATIONS PUBLIQUES',
    },
    title: {
      en: 'Practical work in the public interest.',
      fr: 'Des actions concrètes au service de l’intérêt public.',
    },
    intro: {
      en: 'Scope advisory and implementation support around your mandate, the people you serve and your procurement process. Our proposed services address accessibility, workforce practices, training, supplier participation and social impact.',
      fr: 'Définissez les services-conseils et le soutien à la mise en œuvre selon votre mandat, les personnes que vous servez et votre processus d’approvisionnement. Les services proposés couvrent l’accessibilité, les pratiques de gestion, la formation, la participation des fournisseurs et l’impact social.',
    },
    sections: [
      {
        heading: {
          en: 'Services designed around public access',
          fr: 'Des services conçus autour de l’accès du public',
        },
        body: {
          en: 'Consider the complete service journey: finding information, completing a form, entering a facility and receiving support. A scoped review can identify barriers and help your team set priorities that reflect service demand, user needs and implementation constraints.',
          fr: 'Considérez l’ensemble du parcours de service : trouver l’information, remplir un formulaire, entrer dans un établissement et obtenir du soutien. Un examen ciblé peut repérer des obstacles et aider votre équipe à établir des priorités selon la demande, les besoins des usagers et les contraintes de mise en œuvre.',
        },
      },
      {
        heading: {
          en: 'A workforce equipped to deliver',
          fr: 'Des équipes outillées pour agir',
        },
        body: {
          en: 'Connect internal policies with the daily decisions of managers and service teams. Training can use role-specific scenarios, while organizational reviews can examine participation, communication, accommodation processes and the clarity of responsibilities.',
          fr: 'Reliez les politiques internes aux décisions quotidiennes des gestionnaires et des équipes de service. La formation peut s’appuyer sur des situations propres à chaque rôle. Les examens organisationnels peuvent porter sur la participation, les communications, les mesures d’adaptation et la clarté des responsabilités.',
        },
        items: {
          en: [
            'Role-specific workshops and practical facilitation.',
            'Policy and process review with implementation priorities.',
            'Clear handover materials for internal program owners.',
          ],
          fr: [
            'Ateliers et animation adaptés aux rôles.',
            'Révision des politiques et des processus avec des priorités de mise en œuvre.',
            'Documents de transfert clairs pour les responsables internes.',
          ],
        },
      },
      {
        heading: {
          en: 'Fit the engagement to the procurement',
          fr: 'Adapter le mandat à l’approvisionnement',
        },
        body: {
          en: 'Provide the solicitation reference, mandatory criteria, deliverables, evaluation approach and submission deadline when requesting a proposal. Any security, insurance, professional designation, language or vendor-registration requirement must be reviewed and confirmed for the specific opportunity. No standing-offer status or government affiliation is implied.',
          fr: 'Indiquez la référence de l’appel d’offres, les critères obligatoires, les livrables, la méthode d’évaluation et la date limite dans votre demande. Toute exigence de sécurité, d’assurance, de titre professionnel, de langue ou d’inscription des fournisseurs doit être examinée et confirmée pour l’occasion visée. Aucun statut d’offre à commandes ni aucune affiliation gouvernementale n’est sous-entendu.',
        },
      },
      {
        heading: {
          en: 'Information handling belongs in the scope',
          fr: 'La gestion de l’information fait partie du mandat',
        },
        body: {
          en: 'Agree on what information is necessary, who may access it, approved transfer methods and the required format for records and deliverables. Do not include protected information or sensitive personal records in an initial website enquiry. Secure exchange arrangements should be established through your approved process.',
          fr: 'Convenez de l’information nécessaire, des personnes autorisées à y accéder, des modes de transfert approuvés et des formats exigés pour les dossiers et les livrables. N’incluez pas d’information protégée ni de renseignements personnels sensibles dans une première demande sur le site. Les modalités d’échange sécurisé doivent suivre votre processus approuvé.',
        },
      },
    ],
    cta: {
      label: {
        en: 'SHARE YOUR PROCUREMENT REQUIREMENTS',
        fr: 'PRÉSENTER VOS EXIGENCES D’APPROVISIONNEMENT',
      },
      path: '/request-proposal/',
    },
  },
  {
    slug: 'procurement',
    eyebrow: {
      en: 'PUBLIC SECTOR PROCUREMENT',
      fr: 'APPROVISIONNEMENT DU SECTEUR PUBLIC',
    },
    title: {
      en: 'A clear scope. An informed procurement.',
      fr: 'Un mandat clair. Un approvisionnement éclairé.',
    },
    intro: {
      en: 'Use this service overview to start a procurement conversation. A bid-specific proposal should confirm the team, qualifications, delivery model, commercial terms and mandatory requirements for your opportunity.',
      fr: 'Utilisez cet aperçu des services pour amorcer une discussion d’approvisionnement. Une proposition propre à l’appel d’offres doit confirmer l’équipe, les qualifications, le mode de prestation, les conditions commerciales et les exigences obligatoires.',
    },
    sections: [
      {
        heading: {
          en: 'Service areas available for scoping',
          fr: 'Domaines de services à définir selon vos besoins',
        },
        body: {
          en: 'Engagements can be scoped within a single service area or coordinated across related workstreams. This overview describes intended services, not verified credentials or eligibility for a specific procurement vehicle.',
          fr: 'Les mandats peuvent viser un seul domaine ou coordonner plusieurs volets connexes. Cet aperçu décrit les services envisagés; il ne constitue ni une attestation de qualifications ni une confirmation d’admissibilité à un mécanisme d’approvisionnement.',
        },
        items: {
          en: [
            'Diversity, equity and inclusion; human resources and organizational practices.',
            'Physical and digital accessibility assessments and improvement planning.',
            'Customized training, supplier-diversity programs and social-impact planning.',
            'Accessibility product sourcing and implementation coordination, with qualified specialists where required.',
          ],
          fr: [
            'Diversité, équité et inclusion; ressources humaines et pratiques organisationnelles.',
            'Évaluations de l’accessibilité physique et numérique et plans d’amélioration.',
            'Formation sur mesure, diversité des fournisseurs et planification de l’impact social.',
            'Recherche de produits d’accessibilité et coordination de la mise en œuvre, avec des spécialistes qualifiés lorsque requis.',
          ],
        },
      },
      {
        heading: {
          en: 'What to include in an initial request',
          fr: 'Quoi inclure dans votre première demande',
        },
        body: {
          en: 'A concise request helps establish whether an opportunity can be assessed within your timeline. Share a public solicitation link or a non-confidential summary first; arrange any restricted document exchange separately.',
          fr: 'Une demande concise permet de déterminer si l’occasion peut être examinée dans vos délais. Fournissez d’abord un lien public vers l’appel d’offres ou un résumé non confidentiel; convenez séparément de l’échange des documents à accès restreint.',
        },
        items: {
          en: [
            'Organization, procurement reference and authorized point of contact.',
            'Objectives, required deliverables, delivery locations and language requirements.',
            'Mandatory criteria, evaluation method and any required partner disclosures.',
            'Questions deadline, submission deadline, planned start date and budget parameters where shareable.',
          ],
          fr: [
            'Organisation, référence d’approvisionnement et personne-ressource autorisée.',
            'Objectifs, livrables, lieux de prestation et exigences linguistiques.',
            'Critères obligatoires, méthode d’évaluation et divulgations requises concernant les partenaires.',
            'Dates limites des questions et des soumissions, début prévu et paramètres budgétaires communicables.',
          ],
        },
      },
      {
        heading: {
          en: 'Confirm evidence before award',
          fr: 'Confirmer les pièces justificatives avant l’attribution',
        },
        body: {
          en: 'Request the documentation your process requires for the named delivery team and any subcontractors. Relevant registrations, insurance, qualifications, clearances, references and commercial terms must be validated for the opportunity. A downloadable capability statement will be released only after its business details and supporting claims have been verified.',
          fr: 'Demandez les documents exigés par votre processus pour l’équipe proposée et les sous-traitants éventuels. Les inscriptions, assurances, qualifications, autorisations, références et conditions commerciales pertinentes doivent être validées pour l’occasion. Une fiche de capacités téléchargeable sera diffusée uniquement après vérification des renseignements d’entreprise et des affirmations qu’elle contient.',
        },
      },
      {
        heading: {
          en: 'Define acceptance and handover early',
          fr: 'Définir tôt l’acceptation et le transfert',
        },
        body: {
          en: 'Agree on review cycles, accessible document formats, ownership of materials, the treatment of confidential information and the evidence needed to accept each deliverable. Identify the internal owner who will maintain the work after the engagement.',
          fr: 'Convenez des cycles de révision, des formats documentaires accessibles, de la propriété des documents, du traitement de l’information confidentielle et des éléments nécessaires à l’acceptation de chaque livrable. Désignez la personne qui assurera le suivi à l’interne après le mandat.',
        },
      },
    ],
    cta: {
      label: {
        en: 'REQUEST A SCOPED PROPOSAL',
        fr: 'DEMANDER UNE PROPOSITION CIBLÉE',
      },
      path: '/request-proposal/',
    },
  },
  {
    slug: 'industries',
    eyebrow: { en: 'INDUSTRIES', fr: 'SECTEURS D’ACTIVITÉ' },
    title: {
      en: 'Different operating realities. A considered approach.',
      fr: 'Des réalités différentes. Une approche adaptée.',
    },
    intro: {
      en: 'The same commitment can require very different work in a branch network, a campus, a public service or a production facility. These examples show how a project can be scoped; they are not claims of past client work.',
      fr: 'Un même engagement peut exiger des interventions très différentes dans un réseau de succursales, un campus, un service public ou un site de production. Ces exemples illustrent des possibilités de mandats, sans constituer des réalisations clients.',
    },
    sections: [
      {
        heading: {
          en: 'Financial and professional services',
          fr: 'Services financiers et professionnels',
        },
        body: {
          en: 'Consider how people move between digital services, appointments, physical branches and specialist support. Potential work includes accessible service journeys, inclusive talent practices, manager training and supplier participation. Any regulated advice or sector-specific assurance must remain within a separately confirmed professional scope.',
          fr: 'Examinez les passages entre les services numériques, les rendez-vous, les succursales et le soutien spécialisé. Les mandats possibles comprennent les parcours accessibles, les pratiques de gestion inclusives, la formation et la participation des fournisseurs. Tout conseil réglementé ou toute assurance sectorielle doit relever d’un cadre professionnel confirmé séparément.',
        },
      },
      {
        heading: {
          en: 'Education and community-serving institutions',
          fr: 'Éducation et établissements au service des collectivités',
        },
        body: {
          en: 'Map the experience of students, staff and visitors across information, admissions, learning spaces and support services. Scope participation methods appropriate to the groups involved, identify barriers between departments and build handover materials that different teams can use.',
          fr: 'Cartographiez l’expérience des étudiants, du personnel et des visiteurs : information, admission, lieux d’apprentissage et services de soutien. Choisissez des méthodes de participation adaptées, repérez les obstacles entre services et préparez des outils de transfert utilisables par différentes équipes.',
        },
      },
      {
        heading: {
          en: 'Property, retail and hospitality',
          fr: 'Immobilier, commerce de détail et hôtellerie',
        },
        body: {
          en: 'Examine the connection between arrival, wayfinding, entrances, service counters and employee procedures. A phased plan can separate immediate operational changes from capital work, with product specifications, site conditions and qualified installation responsibilities confirmed before procurement.',
          fr: 'Examinez les liens entre l’arrivée, l’orientation, les entrées, les comptoirs de service et les procédures du personnel. Un plan par étapes peut distinguer les changements opérationnels immédiats des travaux d’immobilisation. Les caractéristiques des produits, les conditions du site et les responsabilités d’installation sont confirmées avant l’achat.',
        },
      },
      {
        heading: {
          en: 'Manufacturing, infrastructure and distributed teams',
          fr: 'Fabrication, infrastructures et équipes réparties',
        },
        body: {
          en: 'Account for shifts, worksite access, safety processes and uneven access to digital tools. Engagement and training formats should reach the people who do not sit at a desk. Supplier-diversity and social-procurement initiatives can also be scoped around actual purchasing categories and delivery constraints.',
          fr: 'Tenez compte des quarts de travail, de l’accès aux sites, des processus de sécurité et de l’accès variable aux outils numériques. Les activités de consultation et de formation doivent rejoindre les personnes qui ne travaillent pas à un bureau. Les initiatives de diversité des fournisseurs et d’approvisionnement social peuvent être adaptées aux catégories d’achat et aux contraintes de livraison.',
        },
      },
      {
        heading: {
          en: 'Government and public agencies',
          fr: 'Administrations et organismes publics',
        },
        body: {
          en: 'Bring the public mandate, procurement requirements and information-handling expectations into the initial discussion. Plan for accessible services, documented decisions and useful deliverables that can move through the organization’s established approval process.',
          fr: 'Intégrez le mandat public, les exigences d’approvisionnement et les attentes de gestion de l’information à la discussion initiale. Prévoyez des services accessibles, des décisions documentées et des livrables utiles pouvant suivre le processus d’approbation établi de l’organisation.',
        },
      },
    ],
    cta: {
      label: {
        en: 'DISCUSS YOUR OPERATING CONTEXT',
        fr: 'DISCUTER DE VOTRE CONTEXTE',
      },
      path: '/contact/',
    },
  },
  {
    slug: 'canada',
    eyebrow: { en: 'ACROSS CANADA', fr: 'PARTOUT AU CANADA' },
    title: {
      en: 'National scope. Local context.',
      fr: 'Une portée nationale. Des contextes locaux.',
    },
    intro: {
      en: 'Plan an engagement around the places, languages and communities involved. Our Canada-wide service model can combine remote work with on-site activity agreed in the proposal; it does not imply local offices or a team in every region.',
      fr: 'Planifiez votre mandat selon les lieux, les langues et les collectivités concernés. Notre modèle de services pancanadien peut combiner le travail à distance et des activités sur place convenues dans la proposition. Il ne suppose pas l’existence de bureaux ou d’équipes dans chaque région.',
    },
    sections: [
      {
        heading: {
          en: 'Québec and bilingual engagements',
          fr: 'Le Québec et les mandats bilingues',
        },
        body: {
          en: 'Specify the working language, audience and required French and English deliverables at the start. Plan time for terminology decisions, review by the intended audience and consistent updates across versions. A bilingual website or workshop does not by itself resolve an organization’s language obligations.',
          fr: 'Précisez dès le départ la langue de travail, les publics et les livrables requis en français et en anglais. Prévoyez du temps pour les choix terminologiques, la révision par les publics visés et la mise à jour cohérente des versions. Un site ou un atelier bilingue ne règle pas à lui seul les obligations linguistiques d’une organisation.',
        },
      },
      {
        heading: {
          en: 'Ontario and multi-site service networks',
          fr: 'L’Ontario et les réseaux de services multisites',
        },
        body: {
          en: 'For projects spanning Toronto, Ottawa or other communities, distinguish shared policies from the conditions at individual locations. Sample selection matters: a flagship office may not reflect a smaller branch, a leased facility or a rural service point. Agree which sites and user journeys an assessment will cover.',
          fr: 'Pour les projets qui touchent Toronto, Ottawa ou d’autres collectivités, distinguez les politiques communes des conditions propres à chaque lieu. Le choix des sites compte : un bureau principal peut différer d’une petite succursale, d’un local loué ou d’un point de service rural. Convenez des sites et des parcours inclus dans l’évaluation.',
        },
      },
      {
        heading: {
          en: 'Western Canada and the Prairies',
          fr: 'L’Ouest canadien et les Prairies',
        },
        body: {
          en: 'Projects across British Columbia, Alberta, Saskatchewan and Manitoba may involve urban workplaces, distributed operations and travel between sites. Build shift patterns, travel requirements, time zones and relevant site-access rules into the delivery plan. Do not assume one workshop schedule or one installation approach fits every location.',
          fr: 'Les projets en Colombie-Britannique, en Alberta, en Saskatchewan et au Manitoba peuvent réunir des milieux urbains, des activités réparties et des déplacements entre sites. Intégrez les quarts de travail, les déplacements, les fuseaux horaires et les règles d’accès pertinentes au plan. Un même horaire d’atelier ou une même méthode d’installation ne convient pas nécessairement partout.',
        },
      },
      {
        heading: { en: 'Atlantic Canada', fr: 'Le Canada atlantique' },
        body: {
          en: 'For work in New Brunswick, Nova Scotia, Prince Edward Island, and Newfoundland and Labrador, confirm each participating organization’s language needs and service footprint. Where an engagement spans smaller communities or multiple islands and coastal locations, allow for travel logistics and a practical mix of remote and in-person participation.',
          fr: 'Pour les mandats au Nouveau-Brunswick, en Nouvelle-Écosse, à l’Île-du-Prince-Édouard et à Terre-Neuve-et-Labrador, confirmez les besoins linguistiques et le territoire desservi de chaque organisation. Lorsque plusieurs petites collectivités, îles ou localités côtières sont concernées, prévoyez les déplacements et une combinaison réaliste de participation à distance et en personne.',
        },
      },
      {
        heading: {
          en: 'Northern and remote communities',
          fr: 'Les collectivités nordiques et éloignées',
        },
        body: {
          en: 'For Yukon, the Northwest Territories, Nunavut and remote locations elsewhere, discuss connectivity, travel windows, accessibility of participation formats and local decision-making expectations before setting a timetable. Engagement with Indigenous communities requires community-specific relationships and protocols; no representation, partnership or cultural authority is assumed.',
          fr: 'Au Yukon, dans les Territoires du Nord-Ouest, au Nunavut et dans les régions éloignées ailleurs au pays, discutez de la connectivité, des périodes de déplacement, de l’accessibilité des modes de participation et des attentes décisionnelles locales avant de fixer l’échéancier. La participation des communautés autochtones exige des relations et des protocoles propres à chacune; aucune représentation, aucun partenariat ni aucune autorité culturelle n’est présumé.',
        },
      },
    ],
    cta: {
      label: {
        en: 'PLAN A REGIONAL OR NATIONAL PROJECT',
        fr: 'PLANIFIER UN PROJET RÉGIONAL OU NATIONAL',
      },
      path: '/request-proposal/',
    },
  },
  {
    slug: 'partners',
    eyebrow: {
      en: 'CAREERS & COLLABORATION',
      fr: 'CARRIÈRES ET COLLABORATION',
    },
    title: {
      en: 'Bring your expertise to meaningful work.',
      fr: 'Mettez votre expertise au service de projets utiles.',
    },
    intro: {
      en: 'Interested in contributing as a consultant, facilitator or implementation specialist? Start a conversation about your expertise, working languages and availability. This is an expression of interest, not a current job posting or a promise of work.',
      fr: 'Vous souhaitez contribuer comme consultant, animateur ou spécialiste de la mise en œuvre? Présentez votre expertise, vos langues de travail et votre disponibilité. Il s’agit d’une manifestation d’intérêt, et non d’une offre d’emploi ou d’une promesse de mandat.',
    },
    sections: [
      {
        heading: {
          en: 'Expertise that fits the engagement',
          fr: 'Une expertise adaptée au mandat',
        },
        body: {
          en: 'Potential collaboration may involve accessibility, human resources, inclusive organizational practices, adult learning, procurement, social impact or qualified installation services. Participation is determined by the needs and requirements of a specific engagement.',
          fr: 'Les collaborations possibles touchent l’accessibilité, les ressources humaines, les pratiques organisationnelles inclusives, la formation des adultes, l’approvisionnement, l’impact social ou les installations spécialisées. La participation dépend des besoins et des exigences du mandat concerné.',
        },
      },
      {
        heading: { en: 'What to share', fr: 'Quoi nous transmettre' },
        body: {
          en: 'Send a concise professional introduction and links to work you are authorized to share. Please do not send confidential client material, identity documents or sensitive personal information through a general enquiry.',
          fr: 'Transmettez une brève présentation professionnelle et des liens vers des travaux que vous êtes autorisé à partager. N’envoyez pas de documents confidentiels de clients, de pièces d’identité ni de renseignements personnels sensibles dans une demande générale.',
        },
        items: {
          en: [
            'Your area of practice and the work you are equipped to deliver.',
            'Working languages, geographic availability and preferred engagement format.',
            'Relevant qualifications that can be verified, where required.',
            'A public portfolio or a non-confidential description of your methods.',
          ],
          fr: [
            'Votre domaine de pratique et les travaux que vous pouvez réaliser.',
            'Vos langues de travail, votre disponibilité géographique et le mode de collaboration souhaité.',
            'Vos qualifications vérifiables pertinentes, lorsque requises.',
            'Un portfolio public ou une description non confidentielle de vos méthodes.',
          ],
        },
      },
      {
        heading: {
          en: 'Clear responsibilities and honest representation',
          fr: 'Des responsabilités claires et une présentation fidèle',
        },
        body: {
          en: 'Before any engagement, agree on scope, qualifications, insurance where applicable, confidentiality, deliverable ownership and commercial terms. Partner involvement must be disclosed accurately in client proposals. A conversation or submitted profile does not establish an employment relationship or partnership.',
          fr: 'Avant tout mandat, convenez de la portée, des qualifications, des assurances applicables, de la confidentialité, de la propriété des livrables et des conditions commerciales. La participation des partenaires doit être présentée fidèlement dans les propositions. Un échange ou l’envoi d’un profil ne crée pas de relation d’emploi ni de partenariat.',
        },
      },
    ],
    cta: {
      label: { en: 'INTRODUCE YOURSELF', fr: 'PRÉSENTEZ-VOUS' },
      path: '/contact/',
    },
  },
  {
    slug: 'privacy',
    eyebrow: {
      en: 'PRIVACY',
      fr: 'CONFIDENTIALITÉ',
    },
    title: {
      en: 'Your information deserves a clear explanation.',
      fr: 'Vos renseignements méritent une explication claire.',
    },
    intro: {
      en: 'This notice explains how Diversity.ca, operated by Grafov Group, handles information from website visitors and initial enquiries. Contact info@diversity.ca with privacy questions or requests.',
      fr: 'Cet avis explique comment Diversity.ca, exploité par Grafov Group, traite les renseignements des visiteurs et les demandes initiales. Pour toute question ou demande relative à la confidentialité, écrivez à info@diversity.ca.',
    },
    sections: [
      {
        heading: {
          en: 'Information you choose to provide',
          fr: 'Les renseignements que vous choisissez de fournir',
        },
        body: {
          en: 'The enquiry form asks for contact details and project information so we can understand your request, respond and discuss possible work together. Optional fields describe your organization, service needs, location, timeline, budget and procurement deadline. Provide only what is needed for an initial conversation. Please do not include health records, employee files, identity documents or other sensitive information.',
          fr: 'Le formulaire demande vos coordonnées et des renseignements sur votre projet afin de comprendre votre demande, d’y répondre et de discuter d’un éventuel mandat. Les champs facultatifs précisent l’organisation, les besoins, le lieu, l’échéancier, le budget et la date limite d’approvisionnement. Fournissez uniquement les renseignements nécessaires au premier échange. Veuillez ne pas inclure de dossiers médicaux, de dossiers d’employés, de pièces d’identité ni d’autres renseignements sensibles.',
        },
      },
      {
        heading: {
          en: 'How your enquiry is sent',
          fr: 'Comment votre demande est envoyée',
        },
        body: {
          en: 'When you submit a form, your enquiry is sent through Formspree for delivery to info@diversity.ca. Formspree and the services delivering our email, including Forward Email, process the submitted details to handle your request. A confirmation means the submission service accepted your enquiry. The download option only saves a copy on your device; it does not send your enquiry. If you choose an email link instead, your own email service processes the message when you send it.',
          fr: 'Lorsque vous envoyez un formulaire, votre demande est transmise par Formspree à info@diversity.ca. Formspree et les services qui acheminent nos courriels, dont Forward Email, traitent les renseignements soumis afin de prendre en charge votre demande. Une confirmation indique que le service d’envoi a accepté votre demande. L’option de téléchargement enregistre uniquement une copie sur votre appareil; elle n’envoie pas votre demande. Si vous utilisez plutôt un lien de courriel, votre propre service de messagerie traite le message lors de l’envoi.',
        },
      },
      {
        heading: {
          en: 'Website services and technical information',
          fr: 'Services du site et renseignements techniques',
        },
        body: {
          en: 'Diversity.ca is hosted by Web Hosting Canada. A separately published version is hosted through OpenAI Sites. Hosting services may process IP addresses, request details and security logs to deliver and protect the website. The website code contains no advertising trackers or analytics scripts. Email and hosting providers have their own terms and privacy practices; the enquiry retention period below does not describe their technical logs or your own email account.',
          fr: 'Diversity.ca est hébergé par Hébergement Web Canada. Une version publiée séparément est hébergée au moyen d’OpenAI Sites. Les services d’hébergement peuvent traiter les adresses IP, les détails des requêtes et les journaux de sécurité pour fournir et protéger le site. Le code du site ne contient aucun traceur publicitaire ni script d’analyse. Les fournisseurs de messagerie et d’hébergement ont leurs propres conditions et pratiques de confidentialité; la durée de conservation ci-dessous ne vise pas leurs journaux techniques ni votre propre compte de messagerie.',
        },
      },
      {
        heading: {
          en: 'Retention of initial enquiries',
          fr: 'Conservation des demandes initiales',
        },
        body: {
          en: 'Enquiries that do not become client engagements are kept for up to 12 months. This period covers the initial enquiry and follow-up correspondence; it does not describe records created during a client engagement. We use enquiry information to respond to your request and manage the related conversation. Sending an enquiry does not subscribe you to a marketing list.',
          fr: 'Les demandes qui ne donnent pas lieu à un mandat sont conservées pendant une durée maximale de 12 mois. Cette durée vise la demande initiale et les échanges de suivi; elle ne décrit pas la conservation des dossiers créés dans le cadre d’un mandat. Nous utilisons ces renseignements pour répondre à votre demande et gérer les échanges qui s’y rapportent. L’envoi d’une demande ne vous inscrit pas à une liste de marketing.',
        },
      },
      {
        heading: {
          en: 'Privacy questions and requests',
          fr: 'Questions et demandes relatives à la confidentialité',
        },
        body: {
          en: 'Contact the Diversity.ca website owner, Grafov Group, at info@diversity.ca to ask about the information you provided, request access, correction or deletion, or ask us to stop following up. Describe your request and the email address used for the enquiry. Please do not send identity documents with an initial request. Any limits that affect a request can be discussed with you. This notice will be updated if the website’s enquiry or tracking practices change.',
          fr: 'Écrivez au propriétaire du site Diversity.ca, Grafov Group, à info@diversity.ca pour poser une question sur les renseignements fournis, demander l’accès, la rectification ou la suppression, ou nous demander de cesser les suivis. Décrivez votre demande et indiquez l’adresse courriel utilisée lors du premier échange. Veuillez ne pas joindre de pièce d’identité à une demande initiale. Toute limite applicable pourra être discutée avec vous. Cet avis sera mis à jour si les pratiques du site concernant les demandes ou le suivi changent.',
        },
      },
    ],
    cta: {
      label: {
        en: 'CONTACT US',
        fr: 'NOUS JOINDRE',
      },
      path: '/contact/',
    },
  },
  {
    slug: 'accessibility-statement',
    eyebrow: {
      en: 'ACCESSIBILITY',
      fr: 'ACCESSIBILITÉ',
    },
    title: {
      en: 'A website people can use.',
      fr: 'Un site que les personnes peuvent utiliser.',
    },
    intro: {
      en: 'We want people with disabilities to be able to read and use Diversity.ca. This statement describes the website’s accessibility features, the limits of our testing and how to tell us about a barrier.',
      fr: 'Nous souhaitons que les personnes en situation de handicap puissent consulter et utiliser Diversity.ca. Cette déclaration décrit les fonctions d’accessibilité du site, les limites de nos essais et la façon de nous signaler un obstacle.',
    },
    sections: [
      {
        heading: {
          en: 'Our accessibility approach',
          fr: 'Notre approche de l’accessibilité',
        },
        body: {
          en: 'WCAG 2.2 Level AA guides the site’s design and development. Features include structured headings, keyboard navigation, visible focus indicators, text alternatives for meaningful images, responsive layouts and support for reduced-motion preferences. These features and automated checks do not establish full conformance or certification.',
          fr: 'Les WCAG 2.2, niveau AA, orientent la conception et le développement du site. Celui-ci comprend des titres structurés, une navigation au clavier, des indicateurs de focus visibles, des textes de remplacement pour les images porteuses de sens, des mises en page adaptatives et la prise en charge des préférences de mouvement réduit. Ces fonctions et les contrôles automatisés ne constituent pas une déclaration de conformité complète ni une certification.',
        },
      },
      {
        heading: {
          en: 'Languages and enquiry forms',
          fr: 'Langues et formulaires de demande',
        },
        body: {
          en: 'English and Canadian French versions are available, with a language switch on each page. Forms include persistent labels, required-field instructions and validation messages. You can submit an enquiry directly from the website and receive an on-screen confirmation or error message. If a form or download creates a barrier, email info@diversity.ca directly and describe what you need.',
          fr: 'Des versions anglaise et française canadienne sont offertes, avec un sélecteur de langue sur chaque page. Les formulaires comportent des étiquettes permanentes, des consignes pour les champs obligatoires et des messages de validation. Vous pouvez envoyer une demande directement depuis le site et recevoir une confirmation ou un message d’erreur à l’écran. Si un formulaire ou un téléchargement présente un obstacle, écrivez directement à info@diversity.ca et décrivez votre besoin.',
        },
      },
      {
        heading: {
          en: 'Testing and known limits',
          fr: 'Essais et limites connues',
        },
        body: {
          en: 'The development review includes automated checks and keyboard and layout checks recorded in the project’s review notes. The website owner has reviewed the mobile layout; human screen-reader testing has not been completed. Browser-generated validation messages may appear in the browser’s language, even when a French page is selected. Direct submission requires JavaScript, an internet connection and availability of the form service. You can copy info@diversity.ca into your preferred email service if a form cannot be submitted.',
          fr: 'La révision de développement comprend des contrôles automatisés ainsi que des vérifications du clavier et de la mise en page consignées dans les notes du projet. Le propriétaire du site a vérifié la présentation mobile; les essais humains avec lecteur d’écran n’ont pas été réalisés. Les messages de validation générés par le navigateur peuvent s’afficher dans la langue de celui-ci, même sur une page française. L’envoi direct nécessite JavaScript, une connexion Internet et la disponibilité du service de formulaires. Vous pouvez copier info@diversity.ca dans votre service de messagerie habituel si l’envoi du formulaire est impossible.',
        },
      },
      {
        heading: {
          en: 'Tell us about a barrier',
          fr: 'Signalez-nous un obstacle',
        },
        body: {
          en: 'Send accessibility feedback to info@diversity.ca. Include the page address, what you were trying to do, what prevented you from continuing and any alternative format that would help. Your browser, device or assistive technology can help us understand the issue, but you do not need to disclose a disability or medical information.',
          fr: 'Envoyez vos commentaires sur l’accessibilité à info@diversity.ca. Indiquez l’adresse de la page, l’action souhaitée, l’obstacle rencontré et tout autre format qui pourrait vous aider. Le navigateur, l’appareil ou la technologie d’assistance peuvent nous aider à comprendre le problème, mais vous n’avez pas à communiquer de handicap ni de renseignement médical.',
        },
      },
    ],
    cta: {
      label: {
        en: 'REPORT AN ACCESSIBILITY BARRIER',
        fr: 'SIGNALER UN OBSTACLE À L’ACCESSIBILITÉ',
      },
      path: '/contact/',
    },
  },
];

export type Article = {
  slug: string;
  title: Localized;
  intro: Localized;
  published: string;
  sections: ContentSection[];
};

export const articles: Article[] = [
  {
    slug: 'scope-an-accessibility-assessment',
    title: {
      en: 'Before the audit: scope an accessibility assessment that leads to action',
      fr: 'Avant l’audit : définir une évaluation de l’accessibilité qui mène à l’action',
    },
    intro: {
      en: '“Assess our accessibility” is a starting point, not a complete brief. A useful scope explains which experiences will be examined, how findings will be recorded and who will act on the results.',
      fr: '« Évaluer notre accessibilité » constitue un point de départ, et non un mandat complet. Une portée utile précise les expériences à examiner, la façon de consigner les constats et les personnes qui donneront suite aux résultats.',
    },
    published: '2026-10-31',
    sections: [
      {
        heading: {
          en: 'Start with a journey, not just an asset list',
          fr: 'Partir d’un parcours, pas seulement d’une liste de biens',
        },
        body: {
          en: 'A website, an entrance and a service counter can each work in isolation while the overall experience remains difficult. Map a real task from beginning to end: locating a service, understanding eligibility, making contact, arriving and completing the interaction. Then identify the digital, physical and procedural elements that belong in the assessment.',
          fr: 'Un site Web, une entrée et un comptoir peuvent fonctionner séparément alors que le parcours demeure difficile. Décrivez une tâche réelle du début à la fin : trouver un service, comprendre l’admissibilité, communiquer, arriver sur place et terminer l’interaction. Repérez ensuite les éléments numériques, physiques et procéduraux à inclure dans l’évaluation.',
        },
      },
      {
        heading: {
          en: 'Make the sampling decisions visible',
          fr: 'Rendre visibles les choix d’échantillonnage',
        },
        body: {
          en: 'If you have many locations or thousands of pages, a sample may be necessary. Explain why the sample is representative and what it cannot establish. Include different templates, transaction types, locations and operating conditions. Testing one entrance does not establish the condition of every entrance, and reviewing a homepage does not establish the accessibility of a booking journey.',
          fr: 'Avec plusieurs lieux ou des milliers de pages, un échantillon peut être nécessaire. Expliquez sa représentativité et ses limites. Incluez différents gabarits, types de transactions, lieux et conditions d’utilisation. Examiner une entrée ne renseigne pas sur toutes les entrées; réviser une page d’accueil ne permet pas d’établir l’accessibilité d’un processus de réservation.',
        },
      },
      {
        heading: {
          en: 'Ask for findings that someone can use',
          fr: 'Demander des constats utilisables',
        },
        body: {
          en: 'A useful finding includes enough context to reproduce or locate the barrier. Separate the observation from the recommended remedy. A technical specialist may need to confirm a proposed solution, especially where structural changes, installation or regulated work are involved.',
          fr: 'Un constat utile fournit assez de contexte pour reproduire ou localiser l’obstacle. Distinguez l’observation de la solution recommandée. Un spécialiste technique peut devoir confirmer cette solution, notamment lorsqu’elle implique des changements structuraux, des installations ou des travaux réglementés.',
        },
        items: {
          en: [
            'Location or page, task and observed barrier.',
            'People and activities affected, without unnecessary personal details.',
            'Evidence, assessment limits and any applicable reference criteria.',
            'Suggested next action, owner and dependencies.',
          ],
          fr: [
            'Lieu ou page, tâche et obstacle observé.',
            'Personnes et activités concernées, sans renseignements personnels superflus.',
            'Éléments probants, limites de l’évaluation et critères de référence applicables.',
            'Prochaine action suggérée, responsable et dépendances.',
          ],
        },
      },
      {
        heading: {
          en: 'Agree on the decision after the report',
          fr: 'Convenir de la décision qui suivra le rapport',
        },
        body: {
          en: 'Before commissioning the work, identify who will review the findings and how priorities will be set. Reserve time to discuss immediate fixes, further investigation and longer-term investment. Include a way to verify completed changes. An assessment becomes more useful when its handover is planned as carefully as its fieldwork.',
          fr: 'Avant de commander les travaux, déterminez qui examinera les constats et comment les priorités seront établies. Prévoyez du temps pour discuter des corrections immédiates, des analyses supplémentaires et des investissements à plus long terme. Incluez un moyen de vérifier les changements réalisés. Un transfert bien planifié rend l’évaluation plus utile.',
        },
      },
    ],
  },
  {
    slug: 'make-procurement-more-inclusive',
    title: {
      en: 'Inclusive procurement starts before the invitation to bid',
      fr: 'L’approvisionnement inclusif commence avant l’invitation à soumissionner',
    },
    intro: {
      en: 'Supplier participation is shaped by how an opportunity is designed, communicated and evaluated. A practical review looks for avoidable barriers while preserving the requirements that are genuinely necessary to deliver the work.',
      fr: 'La participation des fournisseurs dépend de la conception, de la communication et de l’évaluation d’une occasion d’affaires. Un examen pratique repère les obstacles évitables tout en maintenant les exigences réellement nécessaires à la livraison.',
    },
    published: '2026-10-31',
    sections: [
      {
        heading: {
          en: 'Separate the outcome from the familiar method',
          fr: 'Distinguer le résultat de la méthode habituelle',
        },
        body: {
          en: 'Begin with what the organization needs to receive. Specifications copied from a previous purchase may favour a familiar product, business model or supplier size without a current reason. Review each requirement with the people who will use the result and document why it is needed. Keep legal, safety and operational requirements explicit.',
          fr: 'Commencez par ce que l’organisation doit obtenir. Des exigences copiées d’un achat antérieur peuvent favoriser un produit, un modèle d’affaires ou une taille de fournisseur sans raison actuelle. Révisez chaque exigence avec les personnes qui utiliseront le résultat et documentez sa nécessité. Explicitez les exigences légales, de sécurité et d’exploitation.',
        },
      },
      {
        heading: {
          en: 'Review the cost of participating',
          fr: 'Examiner le coût de participation',
        },
        body: {
          en: 'Time, documentation and uncertainty all affect whether a supplier can respond. Consider whether the request is proportionate to the value and risk of the work. A clear scope, accessible documents, realistic response period and transparent question process can make the opportunity easier to assess without changing the standard of delivery.',
          fr: 'Le temps, les documents et l’incertitude influencent la capacité d’un fournisseur à répondre. Vérifiez si la demande est proportionnée à la valeur et au risque du mandat. Une portée claire, des documents accessibles, un délai réaliste et un processus de questions transparent facilitent l’évaluation de l’occasion sans diminuer les attentes de livraison.',
        },
        items: {
          en: [
            'Can a supplier understand the scope without an informal contact?',
            'Are qualification and insurance requirements tied to a documented need?',
            'Are deliverables bundled in a way that unnecessarily excludes capable suppliers?',
            'Are payment terms and submission instructions easy to find?',
          ],
          fr: [
            'Un fournisseur peut-il comprendre la portée sans contact informel?',
            'Les exigences de qualification et d’assurance répondent-elles à un besoin documenté?',
            'Le regroupement des livrables exclut-il inutilement des fournisseurs capables?',
            'Les modalités de paiement et les instructions de soumission sont-elles faciles à trouver?',
          ],
        },
      },
      {
        heading: {
          en: 'Make outreach and evaluation work together',
          fr: 'Relier la mobilisation et l’évaluation',
        },
        body: {
          en: 'Broader outreach is useful only if the process remains understandable and consistent. Explain evaluation criteria and keep communications aligned with the organization’s procurement rules. Any supplier-diversity designation or eligibility claim should be verified through the process appropriate to the program; avoid assumptions based on names, appearance or location.',
          fr: 'Une mobilisation élargie est utile si le processus demeure compréhensible et cohérent. Expliquez les critères d’évaluation et respectez les règles d’approvisionnement de l’organisation dans les communications. Toute désignation de diversité ou affirmation d’admissibilité doit être vérifiée selon le processus du programme; évitez les suppositions fondées sur les noms, l’apparence ou le lieu.',
        },
      },
      {
        heading: {
          en: 'Measure the process as well as the spend',
          fr: 'Mesurer le processus autant que les dépenses',
        },
        body: {
          en: 'Spending totals alone do not show where participation breaks down. Track which opportunities are communicated, how many suppliers respond, where applications stop and what feedback is available. Define categories and data-handling rules before collecting information. Use the findings to improve the next procurement, not to imply outcomes the data cannot support.',
          fr: 'Les dépenses totales ne montrent pas à elles seules où la participation diminue. Suivez les occasions communiquées, le nombre de réponses, les étapes d’abandon et les commentaires disponibles. Définissez les catégories et les règles de gestion avant de recueillir des données. Servez-vous des constats pour améliorer le prochain achat, sans leur attribuer des résultats qu’ils ne permettent pas d’établir.',
        },
      },
    ],
  },
  {
    slug: 'turn-training-into-practice',
    title: {
      en: 'Design training for the decisions people make tomorrow',
      fr: 'Concevoir la formation pour les décisions de demain',
    },
    intro: {
      en: 'A well-attended workshop is not the same as a changed practice. Start with the situations learners face, give them an opportunity to practise and plan what will support them after the session.',
      fr: 'Un atelier très fréquenté ne signifie pas qu’une pratique a changé. Partez des situations vécues, offrez des occasions de s’exercer et prévoyez le soutien nécessaire après la séance.',
    },
    published: '2026-10-31',
    sections: [
      {
        heading: {
          en: 'Name the action, not only the topic',
          fr: 'Nommer l’action, pas seulement le sujet',
        },
        body: {
          en: '“Inclusion training” leaves many design decisions unanswered. What should a manager, buyer or service representative do differently? A concrete objective might be to respond to an accommodation request using the organization’s process, identify an avoidable barrier in a procurement brief or lead a discussion that makes space for different perspectives.',
          fr: 'Une « formation sur l’inclusion » laisse plusieurs choix de conception en suspens. Que devrait faire différemment un gestionnaire, un acheteur ou un agent de service? Un objectif concret peut être de répondre à une demande d’adaptation selon le processus interne, de repérer un obstacle évitable dans un devis ou d’animer une discussion ouverte à plusieurs perspectives.',
        },
      },
      {
        heading: {
          en: 'Build around realistic practice',
          fr: 'S’appuyer sur des exercices réalistes',
        },
        body: {
          en: 'Use scenarios that reflect the learner’s authority, time pressures and access to support. Keep the scenario specific enough to require a decision, but remove identifying details from any real situation. Invite participants to explain their reasoning, compare options and identify when they should seek further guidance.',
          fr: 'Utilisez des situations qui reflètent l’autorité, les contraintes de temps et les ressources des participants. Le scénario doit être assez précis pour exiger une décision, sans renseignements permettant d’identifier une situation réelle. Invitez les participants à expliquer leur raisonnement, à comparer les options et à déterminer quand demander conseil.',
        },
        items: {
          en: [
            'A short scenario linked to a clear learning objective.',
            'Time to practise a response and receive feedback.',
            'A job aid connected to the organization’s actual process.',
            'Accessible materials and participation options agreed before delivery.',
          ],
          fr: [
            'Un court scénario lié à un objectif d’apprentissage précis.',
            'Du temps pour exercer une réponse et recevoir des commentaires.',
            'Un aide-mémoire lié au processus réel de l’organisation.',
            'Des documents accessibles et des modes de participation convenus avant la séance.',
          ],
        },
      },
      {
        heading: {
          en: 'Give managers a role in the follow-through',
          fr: 'Donner aux gestionnaires un rôle dans le suivi',
        },
        body: {
          en: 'Learners need a chance to use the material. Agree in advance how managers will reinforce the practice, where staff can ask questions and whether a process or resource needs updating. A short follow-up discussion can reveal obstacles that were not visible during the workshop.',
          fr: 'Les participants ont besoin d’utiliser ce qu’ils ont appris. Convenez à l’avance de la façon dont les gestionnaires soutiendront la pratique, des ressources pour poser des questions et des mises à jour nécessaires aux processus. Un bref échange de suivi peut révéler des obstacles qui n’étaient pas visibles pendant l’atelier.',
        },
      },
      {
        heading: {
          en: 'Choose evidence that matches the objective',
          fr: 'Choisir des indicateurs adaptés à l’objectif',
        },
        body: {
          en: 'Attendance shows participation; a satisfaction survey shows how people experienced the session. Neither proves a change in behaviour. Consider a practice exercise, a later review of the relevant process or a structured reflection on how the learning was applied. Keep the evaluation proportionate, explain how information will be used and avoid promising organizational outcomes from a single session.',
          fr: 'La présence indique la participation; un sondage de satisfaction décrit l’expérience de la séance. Aucun des deux ne prouve un changement de comportement. Envisagez un exercice pratique, une révision ultérieure du processus ou une réflexion structurée sur l’application des apprentissages. Gardez l’évaluation proportionnée, expliquez l’utilisation des données et évitez de promettre des résultats organisationnels après une seule séance.',
        },
      },
    ],
  },
];
