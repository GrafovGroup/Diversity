import type { Locale } from './services';

export interface EngagementGuide {
  sampleTitle: Record<Locale, string>;
  sampleIntro: Record<Locale, string>;
  sampleSections: Record<Locale, { title: string; description: string }[]>;
  prepare: Record<Locale, string[]>;
  boundaries: Record<Locale, string[]>;
}

type Pair = [string, string];
type Section = [string, string, string, string];

function guide(
  title: Pair,
  intro: Pair,
  sections: Section[],
  prepare: Pair[],
  boundaries: Pair[],
): EngagementGuide {
  return {
    sampleTitle: { en: title[0], fr: title[1] },
    sampleIntro: { en: intro[0], fr: intro[1] },
    sampleSections: {
      en: sections.map(([heading, description]) => ({
        title: heading,
        description,
      })),
      fr: sections.map(([, , heading, description]) => ({
        title: heading,
        description,
      })),
    },
    prepare: { en: prepare.map(([en]) => en), fr: prepare.map(([, fr]) => fr) },
    boundaries: {
      en: boundaries.map(([en]) => en),
      fr: boundaries.map(([, fr]) => fr),
    },
  };
}

/** Illustrative outlines, not completed client reports or promises of final scope. */
export const engagementGuides: Record<string, EngagementGuide> = {
  dei: guide(
    [
      'Inclusion assessment and action brief',
      'Bilan et plan d’action en inclusion',
    ],
    [
      'An illustrative outline connecting organizational evidence to decisions about policy, participation and accountability.',
      'Exemple de structure reliant les constats organisationnels aux décisions sur les politiques, la participation et les responsabilités.',
    ],
    [
      [
        'Context and evidence',
        'The agreed questions, sources reviewed, participation approach and limits of the available evidence.',
        'Contexte et éléments probants',
        'Les questions convenues, les sources examinées, la démarche de participation et les limites des données disponibles.',
      ],
      [
        'Barriers and priorities',
        'Themes across policies and employee journeys, with the reasons for prioritizing each issue.',
        'Obstacles et priorités',
        'Les thèmes dégagés des politiques et des parcours du personnel, avec les motifs de leur priorisation.',
      ],
      [
        'Action and ownership',
        'Proposed actions, responsible roles, dependencies and a schedule for reviewing progress.',
        'Actions et responsabilités',
        'Les actions proposées, les rôles responsables, les dépendances et les modalités de suivi.',
      ],
    ],
    [
      [
        'A short description of your organizational objectives and workforce context.',
        'Un bref portrait de vos objectifs organisationnels et de votre effectif.',
      ],
      [
        'An inventory of relevant policies and any existing inclusion commitments.',
        'Un inventaire des politiques pertinentes et des engagements existants en inclusion.',
      ],
      [
        'Names of project roles and a high-level summary of previous consultation.',
        'Les rôles de l’équipe de projet et un résumé général des consultations antérieures.',
      ],
    ],
    [
      [
        'Employee consultation methods, confidentiality and access to information are agreed before collection.',
        'Les méthodes de consultation, la confidentialité et l’accès aux renseignements sont convenus avant toute collecte.',
      ],
      [
        'An organizational review does not investigate individual complaints or replace employment-law advice.',
        'Un examen organisationnel ne constitue pas une enquête sur des plaintes individuelles et ne remplace pas un avis en droit du travail.',
      ],
    ],
  ),
  'dei/organizational-assessments': guide(
    [
      'Organizational inclusion assessment outline',
      'Structure d’une évaluation organisationnelle de l’inclusion',
    ],
    [
      'This illustrative assessment structure separates observations, interpretation and questions requiring further evidence.',
      'Cette structure d’évaluation donnée en exemple distingue les observations, leur interprétation et les questions nécessitant d’autres éléments probants.',
    ],
    [
      [
        'Assessment frame',
        'The employee journeys, organizational units and evidence sources included in the review.',
        'Cadre d’évaluation',
        'Les parcours du personnel, les unités et les sources compris dans l’examen.',
      ],
      [
        'Theme register',
        'A structured record of recurring barriers, supporting observations and gaps in understanding.',
        'Registre des thèmes',
        'Un relevé structuré des obstacles récurrents, des observations à l’appui et des aspects à approfondir.',
      ],
      [
        'Decision brief',
        'Priority questions for leadership and options for validating or addressing each theme.',
        'Note décisionnelle',
        'Les questions prioritaires pour la direction et les options pour valider ou traiter chaque thème.',
      ],
    ],
    [
      [
        'The business decisions the assessment should inform.',
        'Les décisions que l’évaluation doit éclairer.',
      ],
      [
        'An anonymized overview of workforce structure and existing aggregate indicators.',
        'Un aperçu anonymisé de la structure de l’effectif et des indicateurs agrégés disponibles.',
      ],
      [
        'A list of consultation channels and groups whose perspectives should be included.',
        'Une liste des moyens de consultation et des groupes dont les perspectives devraient être prises en compte.',
      ],
    ],
    [
      [
        'Sampling and participation determine what the findings can reasonably represent.',
        'L’échantillonnage et la participation déterminent la portée représentative des constats.',
      ],
      [
        'Individual employee records are not needed in the public enquiry; any later access requires an agreed protocol.',
        'Aucun dossier individuel n’est requis dans la demande publique; tout accès ultérieur exige un protocole convenu.',
      ],
    ],
  ),
  'dei/inclusive-policies': guide(
    [
      'Policy review and revision matrix',
      'Matrice d’examen et de révision des politiques',
    ],
    [
      'An example of how policy recommendations can be organized for an internal owner to review and decide.',
      'Un exemple de présentation des recommandations pour faciliter leur examen et les décisions du responsable interne.',
    ],
    [
      [
        'Policy inventory',
        'The purpose, owner, review date and employee touchpoints of each policy in scope.',
        'Inventaire des politiques',
        'L’objet, le responsable, la date de révision et les points de contact avec le personnel de chaque politique visée.',
      ],
      [
        'Revision notes',
        'Specific wording or process concerns, the rationale for change and proposed alternatives.',
        'Notes de révision',
        'Les formulations ou processus à examiner, les motifs de modification et les solutions proposées.',
      ],
      [
        'Adoption checklist',
        'Approval, communication, training and follow-up decisions needed before a revised policy is used.',
        'Liste de préparation à l’adoption',
        'Les décisions d’approbation, de communication, de formation et de suivi requises avant l’application d’une politique révisée.',
      ],
    ],
    [
      [
        'A list of policies, handbooks and related procedures to review.',
        'Une liste des politiques, des guides et des procédures connexes à examiner.',
      ],
      [
        'Your policy approval process and the roles involved.',
        'Votre processus d’approbation des politiques et les rôles concernés.',
      ],
      [
        'A non-identifying summary of recurring questions about policy use.',
        'Un résumé sans renseignements identificatoires des questions récurrentes sur l’application des politiques.',
      ],
    ],
    [
      [
        'Recommendations remain subject to your legal, labour-relations and governance review.',
        'Les recommandations demeurent soumises à vos examens juridique, de relations du travail et de gouvernance.',
      ],
      [
        'Implementation support, translations and training materials are scoped separately from the policy review.',
        'L’accompagnement à la mise en œuvre, les traductions et les documents de formation sont définis séparément de l’examen des politiques.',
      ],
    ],
  ),
  'dei/inclusion-roadmaps': guide(
    [
      'Inclusion implementation roadmap',
      'Feuille de route de mise en œuvre en inclusion',
    ],
    [
      'This illustrative roadmap turns agreed priorities into work that can be assigned, sequenced and reviewed.',
      'Cette feuille de route donnée en exemple transforme les priorités convenues en travaux pouvant être attribués, ordonnés et suivis.',
    ],
    [
      [
        'Priority map',
        'The relationship between each proposed initiative, the barrier it addresses and the intended change.',
        'Carte des priorités',
        'Le lien entre chaque initiative proposée, l’obstacle visé et le changement recherché.',
      ],
      [
        'Delivery sequence',
        'Dependencies, accountable roles and decision points across immediate and longer-term work.',
        'Séquence de réalisation',
        'Les dépendances, les rôles responsables et les décisions à prendre pour les travaux à court et à plus long terme.',
      ],
      [
        'Review dashboard',
        'Indicator definitions, information sources and questions for periodic leadership discussions.',
        'Tableau de suivi',
        'Les définitions des indicateurs, les sources d’information et les questions pour les échanges périodiques avec la direction.',
      ],
    ],
    [
      [
        'Existing assessment findings or an agreed list of inclusion priorities.',
        'Les constats d’évaluations existantes ou une liste convenue de priorités en inclusion.',
      ],
      [
        'Available resources and initiatives already underway.',
        'Les ressources disponibles et les initiatives en cours.',
      ],
      [
        'Your planning calendar and the decision-makers responsible for approval.',
        'Votre calendrier de planification et les responsables des approbations.',
      ],
    ],
    [
      [
        'Targets are developed from a credible baseline rather than invented for the roadmap.',
        'Les cibles sont établies à partir d’un point de départ crédible, et non inventées pour la feuille de route.',
      ],
      [
        'The roadmap does not itself authorize staffing, spending or changes to employment practices.',
        'La feuille de route n’autorise pas en elle-même les décisions de dotation, les dépenses ou les changements aux pratiques d’emploi.',
      ],
    ],
  ),
  accessibility: guide(
    [
      'Accessibility findings and improvement plan',
      'Constats d’accessibilité et plan d’amélioration',
    ],
    [
      'An illustrative report structure for explaining barriers, assessment limits and the decisions needed to improve access.',
      'Exemple de structure de rapport présentant les obstacles, les limites de l’évaluation et les décisions nécessaires pour améliorer l’accès.',
    ],
    [
      [
        'Scope and criteria',
        'The places, digital journeys or services reviewed, the chosen criteria and any exclusions.',
        'Portée et critères',
        'Les lieux, les parcours numériques ou les services examinés, les critères retenus et les exclusions.',
      ],
      [
        'Barrier register',
        'Each observed issue, its effect on use, supporting evidence and a proposed response.',
        'Registre des obstacles',
        'Chaque problème observé, son effet sur l’utilisation, les éléments à l’appui et une réponse proposée.',
      ],
      [
        'Improvement priorities',
        'A sequenced list of actions, dependencies and responsibilities, with a plan for checking changes.',
        'Priorités d’amélioration',
        'Une liste ordonnée des actions, des dépendances et des responsabilités, avec une démarche de vérification des changements.',
      ],
    ],
    [
      [
        'An inventory of the locations, websites, documents or service journeys involved.',
        'Un inventaire des lieux, des sites Web, des documents ou des parcours de service visés.',
      ],
      [
        'Known barriers and previous findings summarized without personal case details.',
        'Un résumé des obstacles connus et des constats antérieurs, sans détails de dossiers personnels.',
      ],
      [
        'The people responsible for access, maintenance and implementing recommendations.',
        'Les rôles responsables de l’accès, de l’entretien et de la mise en œuvre des recommandations.',
      ],
    ],
    [
      [
        'The applicable criteria and any specialist assessments are confirmed when defining scope.',
        'Les critères applicables et les évaluations spécialisées sont confirmés lors de la définition de la portée.',
      ],
      [
        'An assessment supports improvement decisions; it is not a certification or a guarantee of legal compliance.',
        'Une évaluation soutient les décisions d’amélioration; elle ne constitue ni une certification ni une garantie de conformité juridique.',
      ],
    ],
  ),
  'accessibility/digital-accessibility': guide(
    [
      'Digital accessibility issue register',
      'Registre des problèmes d’accessibilité numérique',
    ],
    [
      'This sample outline shows how findings can become reproducible tasks for a product or development team.',
      'Cet exemple montre comment transformer des constats en tâches reproductibles pour une équipe produit ou de développement.',
    ],
    [
      [
        'Test coverage',
        'Selected templates and user journeys, browsers, assistive technologies and testing limitations.',
        'Couverture des essais',
        'Les gabarits et parcours retenus, les navigateurs, les technologies d’assistance et les limites des essais.',
      ],
      [
        'Reproduction notes',
        'Steps to reproduce a barrier, its user impact and the relevant criterion or design expectation.',
        'Notes de reproduction',
        'Les étapes pour reproduire un obstacle, son effet sur l’utilisateur et le critère ou principe de conception pertinent.',
      ],
      [
        'Remediation and retest',
        'Recommended fixes, team ownership and evidence to collect when checking the revised experience.',
        'Correction et nouveaux essais',
        'Les corrections recommandées, les responsabilités de l’équipe et les éléments à recueillir pour vérifier l’expérience révisée.',
      ],
    ],
    [
      [
        'Public URLs and a list of important tasks people need to complete.',
        'Les adresses publiques et une liste des tâches importantes à accomplir.',
      ],
      [
        'The technology stack, document formats and supported devices, if known.',
        'Les technologies, les formats de documents et les appareils pris en charge, si vous les connaissez.',
      ],
      [
        'Any prior audit summaries and a plan for arranging test access securely.',
        'Les sommaires d’audits antérieurs et une démarche pour organiser un accès d’essai sécurisé.',
      ],
    ],
    [
      [
        'Coverage is limited to the agreed sample and versions; automated scans alone are not a complete assessment.',
        'La couverture se limite à l’échantillon et aux versions convenus; les analyses automatisées seules ne constituent pas une évaluation complète.',
      ],
      [
        'Code changes, document remediation and ongoing monitoring require their own agreed scope.',
        'Les modifications de code, la correction de documents et la surveillance continue exigent une portée convenue.',
      ],
    ],
  ),
  'accessibility/built-environment': guide(
    ['Built-environment access review', 'Examen de l’accessibilité des lieux'],
    [
      'An illustrative outline for documenting the experience of moving through a site and planning further technical work.',
      'Exemple de structure pour documenter les déplacements dans un lieu et planifier les travaux techniques à approfondir.',
    ],
    [
      [
        'Route and area inventory',
        'Arrival points, entrances, circulation routes and service areas included in the visit.',
        'Inventaire des parcours et des espaces',
        'Les points d’arrivée, les entrées, les voies de circulation et les espaces de service compris dans la visite.',
      ],
      [
        'Observed conditions',
        'Location-specific barriers, permitted photographs and measurements relevant to the agreed criteria.',
        'Conditions observées',
        'Les obstacles par emplacement, les photographies autorisées et les mesures pertinentes selon les critères convenus.',
      ],
      [
        'Options for improvement',
        'Operational changes, potential physical work and questions for qualified design or construction professionals.',
        'Options d’amélioration',
        'Les changements opérationnels, les travaux physiques possibles et les questions à soumettre aux professionnels qualifiés.',
      ],
    ],
    [
      [
        'Site locations, access arrangements and the areas to include.',
        'Les emplacements, les modalités d’accès et les espaces à inclure.',
      ],
      [
        'Available non-sensitive floor plans and a summary of planned renovations.',
        'Les plans d’étage non sensibles disponibles et un résumé des rénovations prévues.',
      ],
      [
        'A facilities contact and any restrictions affecting a visit.',
        'Une personne-ressource pour les installations et les restrictions applicables à une visite.',
      ],
    ],
    [
      [
        'A visual access review does not replace engineering, building-code or permit review by qualified parties.',
        'Un examen visuel de l’accessibilité ne remplace pas les examens d’ingénierie, de code du bâtiment ou de permis effectués par des intervenants qualifiés.',
      ],
      [
        'Intrusive testing, construction drawings and installation are excluded unless separately agreed.',
        'Les essais intrusifs, les plans de construction et l’installation sont exclus, sauf entente distincte.',
      ],
    ],
  ),
  'accessibility/accommodation-planning': guide(
    [
      'Accommodation process design pack',
      'Dossier de conception du processus d’accommodement',
    ],
    [
      'A sample structure for a clear, respectful organizational process, without using an individual employee case.',
      'Exemple de structure d’un processus organisationnel clair et respectueux, sans recours à un dossier individuel.',
    ],
    [
      [
        'Request pathway',
        'How a request is received, acknowledged and routed to the appropriate decision-maker.',
        'Parcours d’une demande',
        'La réception, l’accusé de réception et l’acheminement d’une demande vers la personne responsable.',
      ],
      [
        'Roles and information',
        'Who needs to participate, what information is necessary and how access is controlled.',
        'Rôles et renseignements',
        'Les personnes devant participer, les renseignements nécessaires et les modalités de contrôle de l’accès.',
      ],
      [
        'Review and follow-up',
        'Decision records, communication prompts and a process for revisiting arrangements as needs change.',
        'Révision et suivi',
        'Les traces décisionnelles, les repères de communication et le processus de révision des mesures lorsque les besoins évoluent.',
      ],
    ],
    [
      [
        'Existing process documents and a summary of recurring procedural questions.',
        'Les documents de processus existants et un résumé des questions de procédure récurrentes.',
      ],
      [
        'The roles involved in requests, decisions and implementation.',
        'Les rôles liés aux demandes, aux décisions et à la mise en œuvre.',
      ],
      [
        'Your information-handling requirements, without medical records or personal case files.',
        'Vos exigences de traitement de l’information, sans dossiers médicaux ni dossiers personnels.',
      ],
    ],
    [
      [
        'Process design does not determine entitlement or resolve an individual accommodation request.',
        'La conception du processus ne détermine pas les droits ni l’issue d’une demande individuelle d’accommodement.',
      ],
      [
        'Medical, legal or specialist advice is obtained through the appropriate qualified professionals.',
        'Les avis médicaux, juridiques ou spécialisés sont obtenus auprès des professionnels qualifiés appropriés.',
      ],
    ],
  ),
  'people-culture': guide(
    [
      'People and culture improvement brief',
      'Dossier d’amélioration des pratiques RH et de la culture',
    ],
    [
      'An illustrative deliverable linking employee experience, management practices and organizational change.',
      'Exemple de livrable reliant l’expérience du personnel, les pratiques de gestion et le changement organisationnel.',
    ],
    [
      [
        'Experience and context',
        'The organizational priorities, employee touchpoints and existing practices examined.',
        'Expérience et contexte',
        'Les priorités organisationnelles, les points de contact du personnel et les pratiques examinées.',
      ],
      [
        'Practical changes',
        'Recommended adjustments to processes, manager routines and communication.',
        'Changements concrets',
        'Les ajustements recommandés aux processus, aux pratiques de gestion et aux communications.',
      ],
      [
        'Ownership and adoption',
        'Roles, implementation dependencies and ways to review whether new practices are being used.',
        'Responsabilités et adoption',
        'Les rôles, les dépendances et les moyens de vérifier l’utilisation des nouvelles pratiques.',
      ],
    ],
    [
      [
        'A summary of your organizational structure and current people priorities.',
        'Un résumé de votre structure organisationnelle et de vos priorités RH.',
      ],
      [
        'Relevant process documents and aggregate employee-feedback themes.',
        'Les documents de processus pertinents et les thèmes agrégés issus de la rétroaction du personnel.',
      ],
      [
        'Upcoming changes that could affect teams or management practices.',
        'Les changements prévus pouvant toucher les équipes ou les pratiques de gestion.',
      ],
    ],
    [
      [
        'The mandate focuses on organizational practices, rather than individual performance or clinical support.',
        'Le mandat porte sur les pratiques organisationnelles, plutôt que sur le rendement individuel ou le soutien clinique.',
      ],
      [
        'Employee listening and any use of workforce data require agreed privacy and participation arrangements.',
        'L’écoute du personnel et l’utilisation de données sur l’effectif exigent des modalités convenues de confidentialité et de participation.',
      ],
    ],
  ),
  'people-culture/employee-experience': guide(
    [
      'Employee journey improvement map',
      'Carte d’amélioration du parcours du personnel',
    ],
    [
      'This illustrative map organizes experiences around moments that matter, rather than attributing findings to individuals.',
      'Cette carte donnée en exemple organise les expériences autour des moments importants, sans attribuer les constats à des personnes.',
    ],
    [
      [
        'Journey stages',
        'The selected stages, such as joining, developing, accessing support and moving between roles.',
        'Étapes du parcours',
        'Les étapes retenues, comme l’arrivée, le développement, l’accès au soutien et les changements de rôle.',
      ],
      [
        'Experience themes',
        'What helps or hinders participation at each stage, with evidence sources and open questions.',
        'Thèmes de l’expérience',
        'Les facteurs facilitant ou limitant la participation à chaque étape, avec les sources et les questions à approfondir.',
      ],
      [
        'Improvement backlog',
        'Proposed process changes, responsible owners and practical ways to gather follow-up feedback.',
        'Liste des améliorations',
        'Les changements de processus proposés, les responsables et les moyens concrets de recueillir une rétroaction ultérieure.',
      ],
    ],
    [
      [
        'The employee groups and journey stages you want to understand.',
        'Les groupes de personnel et les étapes du parcours que vous souhaitez comprendre.',
      ],
      [
        'Existing onboarding, development or support-process summaries.',
        'Les résumés des processus d’accueil, de développement ou de soutien existants.',
      ],
      [
        'Aggregate feedback already available and any consultation constraints.',
        'La rétroaction agrégée disponible et les contraintes de consultation.',
      ],
    ],
    [
      [
        'Findings describe patterns in the agreed sample, not every employee’s experience.',
        'Les constats décrivent les tendances de l’échantillon convenu, et non l’expérience de chaque personne.',
      ],
      [
        'Individual grievance handling and employee case management remain outside a journey-mapping exercise.',
        'Le traitement des griefs individuels et la gestion des dossiers du personnel ne font pas partie de la cartographie des parcours.',
      ],
    ],
  ),
  'people-culture/leadership-practices': guide(
    [
      'Manager practice toolkit outline',
      'Structure d’une trousse de pratiques de gestion',
    ],
    [
      'A sample toolkit structure for making leadership expectations usable in routine decisions and conversations.',
      'Exemple de structure d’une trousse pour rendre les attentes de leadership applicables aux décisions et aux échanges courants.',
    ],
    [
      [
        'Practice expectations',
        'Observable habits for meetings, feedback, delegation and equitable access to opportunities.',
        'Pratiques attendues',
        'Les habitudes observables pour les réunions, la rétroaction, la délégation et l’accès équitable aux possibilités.',
      ],
      [
        'Conversation tools',
        'Prompts and decision questions that help managers prepare for common situations.',
        'Outils de conversation',
        'Des repères et des questions décisionnelles pour préparer les situations de gestion courantes.',
      ],
      [
        'Application and reflection',
        'Ways to try a practice, gather feedback and discuss adjustments with peers.',
        'Application et réflexion',
        'Des moyens d’essayer une pratique, de recueillir de la rétroaction et de discuter des ajustements entre collègues.',
      ],
    ],
    [
      [
        'The management roles and recurring situations the toolkit should address.',
        'Les rôles de gestion et les situations récurrentes à couvrir.',
      ],
      [
        'Existing leadership expectations or competency frameworks.',
        'Les attentes de leadership ou les référentiels de compétences existants.',
      ],
      [
        'Your preferred learning format and opportunities for managers to practise.',
        'Le format d’apprentissage souhaité et les possibilités de mise en pratique.',
      ],
    ],
    [
      [
        'The toolkit supports practice development; it is not an assessment of individual leadership performance.',
        'La trousse soutient le développement des pratiques; elle n’évalue pas le rendement individuel en leadership.',
      ],
      [
        'Facilitated coaching, confidential case advice and formal evaluation are separate services to define.',
        'L’accompagnement animé, les conseils sur des situations confidentielles et l’évaluation formelle sont des services distincts à définir.',
      ],
    ],
  ),
  'people-culture/change-management': guide(
    [
      'Change readiness and adoption plan',
      'Plan de préparation au changement et d’adoption',
    ],
    [
      'An illustrative plan connecting a proposed change to the people, decisions and support needed for adoption.',
      'Exemple de plan reliant un changement proposé aux personnes, aux décisions et au soutien nécessaires à son adoption.',
    ],
    [
      [
        'Change impact map',
        'How the proposed change affects roles, workflows, users and existing commitments.',
        'Carte des effets du changement',
        'Les effets du changement sur les rôles, les processus, les utilisateurs et les engagements existants.',
      ],
      [
        'Engagement and support',
        'The conversations, communications, learning and practical assistance needed by each audience.',
        'Participation et soutien',
        'Les échanges, les communications, l’apprentissage et l’aide pratique nécessaires à chaque public.',
      ],
      [
        'Adoption checkpoints',
        'Decision gates, signs of readiness and a way to surface and respond to implementation issues.',
        'Points de suivi de l’adoption',
        'Les étapes décisionnelles, les signes de préparation et les moyens de signaler et de traiter les difficultés de mise en œuvre.',
      ],
    ],
    [
      [
        'A description of the proposed change and the decision already made or still pending.',
        'Une description du changement proposé et des décisions prises ou à venir.',
      ],
      [
        'The affected teams, audiences and operational dependencies.',
        'Les équipes, les publics et les dépendances opérationnelles concernés.',
      ],
      [
        'Key milestones and existing communication or training plans.',
        'Les jalons importants et les plans de communication ou de formation existants.',
      ],
    ],
    [
      [
        'Change support does not replace the sponsor’s authority to approve the initiative or its resources.',
        'L’accompagnement du changement ne remplace pas l’autorité du responsable quant à l’approbation de l’initiative et de ses ressources.',
      ],
      [
        'Technical implementation and labour-relations processes need their own responsible teams and scope.',
        'La mise en œuvre technique et les démarches de relations du travail nécessitent des équipes responsables et une portée distinctes.',
      ],
    ],
  ),
  training: guide(
    [
      'Learning design and delivery pack',
      'Dossier de conception et de prestation de formation',
    ],
    [
      'This example outlines the materials that can connect a workshop to practical application at work.',
      'Cet exemple présente les documents pouvant relier un atelier à une application concrète au travail.',
    ],
    [
      [
        'Learning brief',
        'The intended audience, work situations, learning objectives and accessibility requirements.',
        'Cahier de formation',
        'Le public visé, les situations de travail, les objectifs d’apprentissage et les besoins d’accessibilité.',
      ],
      [
        'Session materials',
        'An agenda, facilitation notes and participant activities designed for the agreed format.',
        'Matériel de séance',
        'Un programme, des notes d’animation et des activités adaptés au format convenu.',
      ],
      [
        'Transfer to practice',
        'Job aids, reflection prompts and follow-up questions for managers or participants.',
        'Transfert dans la pratique',
        'Des aide-mémoire, des questions de réflexion et des pistes de suivi pour les gestionnaires ou les participants.',
      ],
    ],
    [
      [
        'Audience roles, approximate group size and preferred delivery format.',
        'Les rôles du public, la taille approximative du groupe et le format souhaité.',
      ],
      [
        'The decisions or behaviours participants should be better prepared to address.',
        'Les décisions ou les comportements que les participants devraient pouvoir mieux aborder.',
      ],
      [
        'Language preferences and accessibility needs expressed without personal medical details.',
        'Les langues souhaitées et les besoins d’accessibilité, sans détails médicaux personnels.',
      ],
    ],
    [
      [
        'Learning materials and delivery are tailored to an agreed scope; attendance does not establish competence or certification.',
        'Le matériel et la prestation sont adaptés à une portée convenue; la présence ne démontre pas à elle seule une compétence ou une certification.',
      ],
      [
        'Translation, recording, reuse rights and post-session support are confirmed before delivery.',
        'La traduction, l’enregistrement, les droits de réutilisation et le soutien après la séance sont convenus avant la prestation.',
      ],
    ],
  ),
  'training/inclusive-leadership': guide(
    [
      'Inclusive leadership workshop outline',
      'Structure d’un atelier sur le leadership inclusif',
    ],
    [
      'An illustrative session design based on practical management choices, using fictional learning scenarios.',
      'Exemple de conception d’une séance fondée sur des choix de gestion concrets et des situations d’apprentissage fictives.',
    ],
    [
      [
        'Decision scenarios',
        'Fictional situations involving participation, feedback and access to development opportunities.',
        'Situations décisionnelles',
        'Des situations fictives sur la participation, la rétroaction et l’accès aux possibilités de développement.',
      ],
      [
        'Guided practice',
        'Structured discussion and rehearsal prompts for trying alternative management responses.',
        'Mise en pratique guidée',
        'Des repères de discussion et de simulation pour essayer différentes réponses de gestion.',
      ],
      [
        'Personal application',
        'A take-away planning sheet for selecting a practice to try and a way to review it.',
        'Application individuelle',
        'Une fiche pour choisir une pratique à essayer et une façon d’en faire le suivi.',
      ],
    ],
    [
      [
        'The leadership level and experience of the intended participants.',
        'Le niveau de responsabilité et l’expérience des participants visés.',
      ],
      [
        'Common management situations, described without identifying employees.',
        'Des situations de gestion courantes, décrites sans identifier de membres du personnel.',
      ],
      [
        'Existing leadership commitments the workshop should reinforce.',
        'Les engagements de leadership que l’atelier devrait renforcer.',
      ],
    ],
    [
      [
        'Exercises use agreed fictional or anonymized scenarios, not unresolved employee cases.',
        'Les exercices utilisent des situations fictives ou anonymisées convenues, et non des dossiers individuels non résolus.',
      ],
      [
        'A workshop offers practice and reflection; individual coaching or assessment requires a separate scope.',
        'Un atelier propose de la pratique et de la réflexion; le coaching ou l’évaluation individuelle exige une portée distincte.',
      ],
    ],
  ),
  'training/accessible-service': guide(
    [
      'Accessible service learning kit',
      'Trousse d’apprentissage sur le service accessible',
    ],
    [
      'This example focuses on service interactions and escalation choices that staff can practise together.',
      'Cet exemple porte sur les interactions de service et les décisions de recours que le personnel peut pratiquer ensemble.',
    ],
    [
      [
        'Service situations',
        'Fictional examples across reception, phone, digital channels and alternate ways to obtain service.',
        'Situations de service',
        'Des exemples fictifs à l’accueil, au téléphone, dans les canaux numériques et dans d’autres modes de prestation.',
      ],
      [
        'Response practice',
        'Activities for asking about preferences, communicating clearly and responding to a barrier.',
        'Pratique des réponses',
        'Des activités pour s’informer des préférences, communiquer clairement et réagir à un obstacle.',
      ],
      [
        'Service reference aid',
        'A concise reminder of available options, internal contacts and escalation steps.',
        'Aide-mémoire de service',
        'Un rappel concis des options disponibles, des personnes-ressources et des étapes de recours.',
      ],
    ],
    [
      [
        'The service channels and frontline roles involved.',
        'Les canaux de service et les rôles de première ligne concernés.',
      ],
      [
        'Current service procedures and escalation arrangements.',
        'Les procédures de service et les mécanismes de recours actuels.',
      ],
      [
        'Anonymized examples of barriers encountered by users or staff.',
        'Des exemples anonymisés d’obstacles rencontrés par les usagers ou le personnel.',
      ],
    ],
    [
      [
        'Training does not by itself verify that a service, building or digital channel is accessible.',
        'La formation ne vérifie pas à elle seule l’accessibilité d’un service, d’un bâtiment ou d’un canal numérique.',
      ],
      [
        'Jurisdiction-specific mandatory training content and records must be confirmed in the learning brief.',
        'Le contenu et les registres de formation obligatoires propres au territoire doivent être précisés dans le cahier de formation.',
      ],
    ],
  ),
  'training/learning-programs': guide(
    [
      'Learning program architecture',
      'Architecture d’un programme d’apprentissage',
    ],
    [
      'An illustrative program outline showing how learning activities, work practice and feedback can fit together.',
      'Exemple de programme montrant comment articuler les activités d’apprentissage, la pratique au travail et la rétroaction.',
    ],
    [
      [
        'Learning pathway',
        'Modules and prerequisites linked to distinct participant roles and responsibilities.',
        'Parcours d’apprentissage',
        'Les modules et préalables liés aux rôles et aux responsabilités des participants.',
      ],
      [
        'Delivery design',
        'A blend of facilitated sessions, self-directed resources and supported practice.',
        'Conception de la prestation',
        'Une combinaison de séances animées, de ressources autonomes et de pratique accompagnée.',
      ],
      [
        'Learning review',
        'Questions and activities for checking understanding and identifying what needs reinforcement.',
        'Bilan des apprentissages',
        'Des questions et des activités pour vérifier la compréhension et cerner les besoins de consolidation.',
      ],
    ],
    [
      [
        'Your target audiences and existing training catalogue.',
        'Vos publics cibles et votre offre de formation existante.',
      ],
      [
        'Available learning platforms, facilitation capacity and scheduling constraints.',
        'Les plateformes disponibles, les capacités d’animation et les contraintes d’horaire.',
      ],
      [
        'The workplace practices the program should help people apply.',
        'Les pratiques professionnelles que le programme devrait aider à appliquer.',
      ],
    ],
    [
      [
        'Platform administration, custom software and course hosting are separate from program design.',
        'L’administration des plateformes, les logiciels sur mesure et l’hébergement des cours sont distincts de la conception du programme.',
      ],
      [
        'Assessment methods and any completion records must match the agreed learning objectives and evidence.',
        'Les méthodes d’évaluation et les attestations de participation doivent correspondre aux objectifs et aux éléments probants convenus.',
      ],
    ],
  ),
  'supplier-diversity': guide(
    [
      'Supplier diversity program brief',
      'Dossier de programme de diversité des fournisseurs',
    ],
    [
      'An illustrative deliverable for connecting supplier participation goals to procurement practices and responsible measurement.',
      'Exemple de livrable reliant les objectifs de participation des fournisseurs aux pratiques d’approvisionnement et à une mesure responsable.',
    ],
    [
      [
        'Current-state review',
        'Spend categories, purchasing pathways and participation barriers within the agreed scope.',
        'Portrait de départ',
        'Les catégories de dépenses, les parcours d’achat et les obstacles à la participation compris dans la portée.',
      ],
      [
        'Program design',
        'Definitions, governance, outreach approaches and proposed changes to purchasing practices.',
        'Conception du programme',
        'Les définitions, la gouvernance, les démarches de mobilisation et les changements proposés aux pratiques d’achat.',
      ],
      [
        'Measurement approach',
        'Information sources, verification responsibilities and indicators with clearly stated limitations.',
        'Démarche de mesure',
        'Les sources d’information, les responsabilités de vérification et les indicateurs assortis de limites explicites.',
      ],
    ],
    [
      [
        'Your procurement objectives and the purchasing categories in scope.',
        'Vos objectifs d’approvisionnement et les catégories d’achat visées.',
      ],
      [
        'Aggregate purchasing information and a summary of current supplier processes.',
        'Des renseignements agrégés sur les achats et un résumé des processus fournisseurs actuels.',
      ],
      [
        'Existing supplier definitions, participation commitments and governance requirements.',
        'Les définitions des fournisseurs, les engagements de participation et les exigences de gouvernance existants.',
      ],
    ],
    [
      [
        'Supplier eligibility and any certification claims need an agreed verification process.',
        'L’admissibilité des fournisseurs et toute certification déclarée nécessitent un processus de vérification convenu.',
      ],
      [
        'Advice does not guarantee supplier participation, contract awards or eligibility under a particular procurement program.',
        'Les conseils ne garantissent ni la participation des fournisseurs, ni l’attribution de contrats, ni l’admissibilité à un programme d’approvisionnement.',
      ],
    ],
  ),
  'supplier-diversity/program-design': guide(
    [
      'Supplier program operating model',
      'Modèle de fonctionnement d’un programme fournisseurs',
    ],
    [
      'This sample outline describes the decisions needed to move from an ambition to a workable internal program.',
      'Cet exemple présente les décisions nécessaires pour transformer une ambition en programme interne applicable.',
    ],
    [
      [
        'Purpose and definitions',
        'The program’s intended role, supplier categories and boundaries of participation.',
        'Objet et définitions',
        'Le rôle prévu du programme, les catégories de fournisseurs et les limites de participation.',
      ],
      [
        'Operating responsibilities',
        'Roles for procurement, business units, supplier engagement and information stewardship.',
        'Responsabilités opérationnelles',
        'Les rôles de l’approvisionnement, des unités, de la mobilisation des fournisseurs et de la gestion de l’information.',
      ],
      [
        'Launch decisions',
        'Pilot categories, communication needs and review gates before expanding the program.',
        'Décisions de lancement',
        'Les catégories pilotes, les besoins de communication et les étapes de révision avant l’élargissement du programme.',
      ],
    ],
    [
      [
        'The business objectives and sponsor for the proposed program.',
        'Les objectifs organisationnels et le responsable du programme proposé.',
      ],
      [
        'Current sourcing, onboarding and purchasing procedures.',
        'Les procédures actuelles de recherche, d’intégration et d’achat auprès des fournisseurs.',
      ],
      [
        'A summary of applicable purchasing rules and internal approval requirements.',
        'Un résumé des règles d’achat applicables et des exigences d’approbation internes.',
      ],
    ],
    [
      [
        'Program definitions and eligibility rules require organizational approval before use.',
        'Les définitions et les règles d’admissibilité du programme doivent être approuvées avant leur utilisation.',
      ],
      [
        'Procurement-system configuration and operation of a supplier registry are separate implementation decisions.',
        'La configuration des systèmes et l’exploitation d’un registre de fournisseurs sont des décisions de mise en œuvre distinctes.',
      ],
    ],
  ),
  'supplier-diversity/supplier-engagement': guide(
    [
      'Supplier engagement plan and briefing kit',
      'Plan de mobilisation des fournisseurs et trousse d’information',
    ],
    [
      'An illustrative plan for making opportunities and participation requirements easier for suppliers to understand.',
      'Exemple de plan pour rendre les occasions d’affaires et les exigences de participation plus faciles à comprendre.',
    ],
    [
      [
        'Audience and channels',
        'The supplier groups, communication channels and access barriers to consider.',
        'Publics et canaux',
        'Les groupes de fournisseurs, les canaux de communication et les obstacles d’accès à considérer.',
      ],
      [
        'Opportunity briefing',
        'Clear information about scope, participation steps, decision processes and where to ask questions.',
        'Présentation des occasions',
        'Des renseignements clairs sur la portée, les étapes de participation, les processus de décision et les moyens de poser des questions.',
      ],
      [
        'Feedback and follow-up',
        'Ways to capture supplier questions, route responses and improve future outreach.',
        'Rétroaction et suivi',
        'Des moyens de recueillir les questions, d’acheminer les réponses et d’améliorer les démarches futures.',
      ],
    ],
    [
      [
        'The opportunities or purchasing categories you expect to discuss.',
        'Les occasions ou les catégories d’achat que vous prévoyez présenter.',
      ],
      [
        'Existing supplier communications and published participation requirements.',
        'Les communications fournisseurs existantes et les exigences de participation publiées.',
      ],
      [
        'The roles authorized to answer questions and the procurement timetable.',
        'Les rôles autorisés à répondre aux questions et le calendrier d’approvisionnement.',
      ],
    ],
    [
      [
        'Outreach must respect the communication and fairness requirements of any active solicitation.',
        'La mobilisation doit respecter les exigences de communication et d’équité de tout appel d’offres en cours.',
      ],
      [
        'Engagement activities do not imply endorsement, prequalification or a promise of future work.',
        'Les activités de mobilisation ne constituent ni une recommandation, ni une préqualification, ni une promesse de contrat.',
      ],
    ],
  ),
  'supplier-diversity/procurement-measurement': guide(
    [
      'Procurement indicator dictionary',
      'Dictionnaire d’indicateurs d’approvisionnement',
    ],
    [
      'This example makes the meaning, calculation and limits of procurement indicators explicit before reporting them.',
      'Cet exemple précise le sens, le calcul et les limites des indicateurs d’approvisionnement avant leur publication.',
    ],
    [
      [
        'Indicator definitions',
        'What each measure describes, which transactions are included and how values are calculated.',
        'Définitions des indicateurs',
        'L’objet de chaque mesure, les transactions incluses et les modalités de calcul.',
      ],
      [
        'Data and verification',
        'Source systems, supplier-status checks, ownership and the treatment of missing information.',
        'Données et vérification',
        'Les systèmes sources, les vérifications du statut fournisseur, les responsabilités et le traitement des données manquantes.',
      ],
      [
        'Reporting notes',
        'Comparability cautions, review frequency and questions that should accompany a dashboard.',
        'Notes de présentation',
        'Les réserves de comparabilité, la fréquence de révision et les questions devant accompagner un tableau de bord.',
      ],
    ],
    [
      [
        'The decisions your procurement reporting should support.',
        'Les décisions que vos rapports d’approvisionnement doivent soutenir.',
      ],
      [
        'A data dictionary or anonymized sample structure, rather than supplier banking or personal information.',
        'Un dictionnaire de données ou une structure d’échantillon anonymisée, sans renseignements bancaires ou personnels des fournisseurs.',
      ],
      [
        'Existing definitions for spend, supplier categories and reporting periods.',
        'Les définitions existantes des dépenses, des catégories fournisseurs et des périodes de déclaration.',
      ],
    ],
    [
      [
        'Data quality and verification coverage limit what a reported indicator can establish.',
        'La qualité des données et la couverture des vérifications limitent ce qu’un indicateur peut démontrer.',
      ],
      [
        'A reporting framework is not an independent assurance opinion or certification of supplier status.',
        'Un cadre de présentation ne constitue ni une opinion d’assurance indépendante ni une certification du statut fournisseur.',
      ],
    ],
  ),
  'social-impact': guide(
    [
      'Social impact planning framework',
      'Cadre de planification de l’impact social',
    ],
    [
      'An illustrative framework connecting community priorities, organizational activities and credible evidence of change.',
      'Exemple de cadre reliant les priorités des communautés, les activités de l’organisation et les éléments probants du changement.',
    ],
    [
      [
        'Purpose and stakeholders',
        'The issue being addressed, the people affected and the perspectives needed to shape the work.',
        'Objet et parties prenantes',
        'L’enjeu visé, les personnes concernées et les perspectives nécessaires pour orienter la démarche.',
      ],
      [
        'Activities and intended outcomes',
        'A clear distinction between what the organization does and the changes it hopes to support.',
        'Activités et résultats recherchés',
        'Une distinction claire entre les actions de l’organisation et les changements qu’elle souhaite soutenir.',
      ],
      [
        'Evidence and learning',
        'Potential indicators, information sources and opportunities to reconsider assumptions.',
        'Éléments probants et apprentissage',
        'Les indicateurs possibles, les sources d’information et les occasions de revoir les hypothèses.',
      ],
    ],
    [
      [
        'The social priorities and communities relevant to the proposed work.',
        'Les priorités sociales et les communautés concernées par la démarche proposée.',
      ],
      [
        'Existing commitments, partnerships and available evidence.',
        'Les engagements, les partenariats et les éléments probants existants.',
      ],
      [
        'The decisions and reporting audiences the framework must serve.',
        'Les décisions et les publics de reddition de comptes que le cadre doit servir.',
      ],
    ],
    [
      [
        'Community participation, compensation and use of shared knowledge are agreed with the appropriate parties.',
        'La participation, la rémunération et l’utilisation des connaissances partagées sont convenues avec les parties appropriées.',
      ],
      [
        'The framework does not establish impact, regulatory compliance or sustainability certification by itself.',
        'Le cadre ne démontre pas à lui seul un impact, une conformité réglementaire ou une certification de durabilité.',
      ],
    ],
  ),
  'social-impact/stakeholder-engagement': guide(
    [
      'Stakeholder participation and feedback plan',
      'Plan de participation et de rétroaction des parties prenantes',
    ],
    [
      'A sample plan for clarifying who can contribute, how participation is supported and how input will be used.',
      'Exemple de plan précisant qui peut contribuer, comment soutenir la participation et comment utiliser les contributions.',
    ],
    [
      [
        'Participation map',
        'Groups affected by the decision, existing relationships and gaps in representation.',
        'Carte de participation',
        'Les groupes touchés par la décision, les relations existantes et les lacunes de représentation.',
      ],
      [
        'Engagement design',
        'Questions, accessible formats, participation supports and clear information about decision authority.',
        'Conception de la démarche',
        'Les questions, les formats accessibles, les mesures de soutien et les précisions sur le pouvoir décisionnel.',
      ],
      [
        'Feedback record',
        'A structure for summarizing themes, explaining responses and reporting back to participants.',
        'Compte rendu de rétroaction',
        'Une structure pour résumer les thèmes, expliquer les réponses et faire un retour aux participants.',
      ],
    ],
    [
      [
        'The decision to be informed and what participants can influence.',
        'La décision à éclairer et les aspects sur lesquels les participants peuvent avoir une influence.',
      ],
      [
        'Existing relationships, engagement commitments and known participation barriers.',
        'Les relations, les engagements de participation et les obstacles connus.',
      ],
      [
        'The time and resources available for accessible participation and follow-up.',
        'Le temps et les ressources disponibles pour une participation accessible et un suivi.',
      ],
    ],
    [
      [
        'A general engagement plan does not replace any specific legal consultation duty or relationship protocol.',
        'Un plan général de mobilisation ne remplace pas une obligation juridique de consultation ou un protocole relationnel particulier.',
      ],
      [
        'Participation cannot be assumed to represent consent or the views of an entire community.',
        'La participation ne peut être présumée constituer un consentement ou représenter les points de vue d’une communauté entière.',
      ],
    ],
  ),
  'social-impact/social-procurement': guide(
    [
      'Social procurement opportunity brief',
      'Dossier d’occasions en approvisionnement social',
    ],
    [
      'An illustrative brief showing how social objectives can be considered within a defined purchasing process.',
      'Exemple de dossier montrant comment considérer des objectifs sociaux dans un processus d’achat défini.',
    ],
    [
      [
        'Opportunity screening',
        'Purchasing categories, community priorities and practical opportunities for added social value.',
        'Repérage des occasions',
        'Les catégories d’achat, les priorités communautaires et les occasions concrètes de valeur sociale.',
      ],
      [
        'Requirement options',
        'Possible outcome statements, supplier questions and evaluation considerations for internal review.',
        'Options d’exigences',
        'Des énoncés de résultats, des questions aux fournisseurs et des considérations d’évaluation à examiner à l’interne.',
      ],
      [
        'Delivery evidence',
        'What suppliers could reasonably report, who reviews it and how unmet expectations are addressed.',
        'Éléments de suivi',
        'Les renseignements que les fournisseurs pourraient raisonnablement fournir, les responsables de leur examen et le traitement des écarts.',
      ],
    ],
    [
      [
        'The contract categories and social priorities you want to connect.',
        'Les catégories de contrats et les priorités sociales que vous souhaitez relier.',
      ],
      [
        'Your purchasing rules, evaluation process and available contract-management capacity.',
        'Vos règles d’achat, votre processus d’évaluation et vos capacités de gestion des contrats.',
      ],
      [
        'Non-confidential information about supplier-market capacity and current requirements.',
        'Des renseignements non confidentiels sur les capacités du marché et les exigences actuelles.',
      ],
    ],
    [
      [
        'Proposed requirements need procurement and legal review before inclusion in a solicitation.',
        'Les exigences proposées doivent être examinées par l’approvisionnement et les services juridiques avant leur intégration à un appel d’offres.',
      ],
      [
        'Potential social value is not a guarantee of employment, participation or community outcomes.',
        'La valeur sociale envisagée ne garantit pas des emplois, une participation ou des retombées communautaires.',
      ],
    ],
  ),
  'social-impact/impact-measurement': guide(
    [
      'Impact logic and evidence plan',
      'Logique d’impact et plan de collecte des éléments probants',
    ],
    [
      'This sample outline separates activities, outputs and intended outcomes so claims can be assessed against evidence.',
      'Cet exemple distingue les activités, les réalisations et les résultats recherchés afin d’évaluer les affirmations à partir d’éléments probants.',
    ],
    [
      [
        'Logic model',
        'The proposed links between resources, activities, outputs and outcomes, including assumptions.',
        'Modèle logique',
        'Les liens proposés entre les ressources, les activités, les réalisations et les résultats, y compris les hypothèses.',
      ],
      [
        'Measurement plan',
        'Indicator definitions, feasible collection methods, responsibilities and review points.',
        'Plan de mesure',
        'Les définitions des indicateurs, les méthodes de collecte réalisables, les responsabilités et les points de suivi.',
      ],
      [
        'Interpretation guide',
        'How to discuss contribution, uncertainty and alternative explanations when presenting results.',
        'Guide d’interprétation',
        'La façon de présenter la contribution, l’incertitude et les autres explications possibles des résultats.',
      ],
    ],
    [
      [
        'The activities and intended changes to be evaluated.',
        'Les activités et les changements recherchés à évaluer.',
      ],
      [
        'Available baseline information and the practical limits on collecting new data.',
        'Les données de départ disponibles et les limites pratiques de nouvelles collectes.',
      ],
      [
        'Who will use the findings and what decisions depend on them.',
        'Les destinataires des constats et les décisions qui en dépendent.',
      ],
    ],
    [
      [
        'Indicators and targets must reflect available evidence and capacity; no result is assumed in advance.',
        'Les indicateurs et les cibles doivent refléter les données et les capacités disponibles; aucun résultat n’est présumé.',
      ],
      [
        'Independent evaluation, causal attribution and assurance require a separately agreed methodology and scope.',
        'L’évaluation indépendante, l’attribution causale et l’assurance nécessitent une méthode et une portée convenues séparément.',
      ],
    ],
  ),
  implementation: guide(
    [
      'Accessibility implementation coordination pack',
      'Dossier de coordination des travaux d’accessibilité',
    ],
    [
      'An illustrative pack for turning an agreed accessibility priority into coordinated sourcing, installation and handover decisions.',
      'Exemple de dossier pour traduire une priorité d’accessibilité convenue en décisions coordonnées d’approvisionnement, d’installation et de remise des travaux.',
    ],
    [
      [
        'Requirements and interfaces',
        'The intended use, site constraints and points where products, trades or operating procedures must work together.',
        'Exigences et interfaces',
        'L’utilisation prévue, les contraintes du site et les liens entre les produits, les corps de métier et les procédures opérationnelles.',
      ],
      [
        'Delivery coordination',
        'Responsibilities, supplier questions, approvals and a sequence for organizing the work.',
        'Coordination de la réalisation',
        'Les responsabilités, les questions aux fournisseurs, les approbations et la séquence d’organisation des travaux.',
      ],
      [
        'Handover and maintenance',
        'The documentation, demonstrations and maintenance information to request before closing the project.',
        'Remise et entretien',
        'Les documents, les démonstrations et les renseignements d’entretien à demander avant la clôture du projet.',
      ],
    ],
    [
      [
        'The barrier or priority to address and any assessment recommendations already available.',
        'L’obstacle ou la priorité à traiter et les recommandations d’évaluation disponibles.',
      ],
      [
        'Site access arrangements, operating restrictions and the facility owner’s approval process.',
        'Les modalités d’accès, les contraintes d’exploitation et le processus d’approbation du propriétaire.',
      ],
      [
        'The proposed budget, timing and roles already assigned to design or installation.',
        'Le budget envisagé, l’échéancier et les rôles déjà attribués à la conception ou à l’installation.',
      ],
    ],
    [
      [
        'Design decisions, permits and regulated work remain with appropriately qualified and authorized parties.',
        'Les décisions de conception, les permis et les travaux réglementés relèvent des intervenants qualifiés et autorisés appropriés.',
      ],
      [
        'Product supply, trade work, warranties and acceptance responsibilities are confirmed in the written scope.',
        'La fourniture des produits, les travaux spécialisés, les garanties et les responsabilités de réception sont précisés dans la portée écrite.',
      ],
    ],
  ),
  'implementation/product-sourcing': guide(
    [
      'Accessible product options and requirements sheet',
      'Fiche d’exigences et d’options de produits d’accessibilité',
    ],
    [
      'This illustrative sourcing sheet supports a comparison of products against a defined use and site context.',
      'Cette fiche d’approvisionnement donnée en exemple soutient la comparaison des produits selon l’utilisation prévue et le contexte du site.',
    ],
    [
      [
        'Use and site requirements',
        'The task the product must support, installation conditions and compatibility questions.',
        'Exigences d’utilisation et du site',
        'La tâche à soutenir, les conditions d’installation et les questions de compatibilité.',
      ],
      [
        'Options comparison',
        'Documented features, supplier information, lead-time assumptions and questions still to resolve.',
        'Comparaison des options',
        'Les caractéristiques documentées, les renseignements des fournisseurs, les hypothèses de délai et les questions à résoudre.',
      ],
      [
        'Purchase and handover checks',
        'Approval, installation, maintenance and warranty information to confirm before ordering.',
        'Vérifications d’achat et de remise',
        'Les approbations et les renseignements d’installation, d’entretien et de garantie à confirmer avant la commande.',
      ],
    ],
    [
      [
        'A plain-language description of the access need and intended users.',
        'Une description simple du besoin d’accessibilité et des utilisateurs visés.',
      ],
      [
        'Known site dimensions, interfaces and existing equipment, without sensitive security details.',
        'Les dimensions connues, les interfaces et les équipements existants, sans détails de sécurité sensibles.',
      ],
      [
        'Budget parameters and who can approve the product and installation.',
        'Les paramètres budgétaires et les responsables de l’approbation du produit et de l’installation.',
      ],
    ],
    [
      [
        'Supplier specifications and suitability must be verified for the actual site; a shortlist is not a certification.',
        'Les spécifications et l’adéquation au site doivent être vérifiées; une présélection ne constitue pas une certification.',
      ],
      [
        'Pricing, availability and warranties remain subject to the selected supplier’s confirmed terms.',
        'Les prix, la disponibilité et les garanties demeurent soumis aux conditions confirmées du fournisseur retenu.',
      ],
    ],
  ),
  'implementation/signage-wayfinding': guide(
    [
      'Wayfinding hierarchy and sign schedule',
      'Hiérarchie d’orientation et nomenclature de signalisation',
    ],
    [
      'An illustrative design brief for helping people understand destinations and make route decisions through a place.',
      'Exemple de cahier de conception pour aider les personnes à comprendre les destinations et à choisir leur parcours dans un lieu.',
    ],
    [
      [
        'Journey and decision points',
        'The destinations, entrances, route choices and points where orientation information is needed.',
        'Parcours et points de décision',
        'Les destinations, les entrées, les choix de parcours et les endroits nécessitant des repères d’orientation.',
      ],
      [
        'Information hierarchy',
        'Naming, language, visual hierarchy and tactile or other format considerations for agreed sign types.',
        'Hiérarchie de l’information',
        'La dénomination, les langues, la hiérarchie visuelle et les formats tactiles ou autres pour les types de panneaux convenus.',
      ],
      [
        'Sign schedule',
        'A structured list of sign locations, messages, review status and fabrication questions.',
        'Nomenclature de signalisation',
        'Une liste structurée des emplacements, des messages, des états de révision et des questions de fabrication.',
      ],
    ],
    [
      [
        'A destination list, public floor plans and known navigation problems.',
        'Une liste des destinations, des plans publics et des problèmes d’orientation connus.',
      ],
      [
        'Approved naming conventions, brand guidance and language requirements.',
        'Les conventions de dénomination, les directives de marque et les exigences linguistiques approuvées.',
      ],
      [
        'Existing signs and the roles responsible for content, facilities and user review.',
        'La signalisation existante et les rôles responsables du contenu, des installations et de la consultation des usagers.',
      ],
    ],
    [
      [
        'Fabrication specifications, tactile details and mounting must be validated with qualified suppliers and applicable requirements.',
        'Les spécifications de fabrication, les détails tactiles et la fixation doivent être validés avec des fournisseurs qualifiés selon les exigences applicables.',
      ],
      [
        'Emergency, fire and regulated signage require the appropriate specialist approval and are not assumed to be covered.',
        'La signalisation d’urgence, d’incendie et réglementée exige les approbations spécialisées appropriées et n’est pas présumée incluse.',
      ],
    ],
  ),
  'implementation/project-coordination': guide(
    [
      'Implementation responsibilities and handover plan',
      'Plan des responsabilités de mise en œuvre et de remise',
    ],
    [
      'This sample coordination pack makes dependencies, decisions and close-out evidence visible across the project team.',
      'Cet exemple de dossier de coordination rend visibles les dépendances, les décisions et les éléments de clôture pour l’équipe de projet.',
    ],
    [
      [
        'Responsibility matrix',
        'Who specifies, approves, supplies, installs, checks and maintains each agreed work item.',
        'Matrice des responsabilités',
        'Les responsables de la spécification, de l’approbation, de la fourniture, de l’installation, de la vérification et de l’entretien.',
      ],
      [
        'Sequence and decision log',
        'Dependencies, access windows, approvals and unresolved questions affecting delivery.',
        'Séquence et registre décisionnel',
        'Les dépendances, les périodes d’accès, les approbations et les questions non résolues touchant la réalisation.',
      ],
      [
        'Handover register',
        'Documents, outstanding items, operating instructions and the owner’s acceptance decisions.',
        'Registre de remise',
        'Les documents, les éléments en suspens, les instructions d’exploitation et les décisions de réception du propriétaire.',
      ],
    ],
    [
      [
        'The approved objectives, work items and project decision-maker.',
        'Les objectifs approuvés, les travaux visés et le responsable des décisions.',
      ],
      [
        'Known suppliers, qualified trades and internal facilities contacts.',
        'Les fournisseurs connus, les corps de métier qualifiés et les personnes-ressources internes.',
      ],
      [
        'Operational constraints, access windows and required approval milestones.',
        'Les contraintes d’exploitation, les périodes d’accès et les jalons d’approbation requis.',
      ],
    ],
    [
      [
        'Coordination does not transfer professional design, site-safety or regulated-work duties from the responsible parties.',
        'La coordination ne transfère pas les obligations de conception professionnelle, de sécurité du chantier ou de travaux réglementés des intervenants responsables.',
      ],
      [
        'Final acceptance, commissioning and defect resolution responsibilities must be explicit in the project agreements.',
        'Les responsabilités de réception finale, de mise en service et de correction des défauts doivent être explicites dans les ententes du projet.',
      ],
    ],
  ),
};
