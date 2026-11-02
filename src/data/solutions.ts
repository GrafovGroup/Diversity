import { solutionOptions } from './solution-options';
type Bilingual<T> = { en: T; fr: T };
const t = (en: string, fr: string): Bilingual<string> => ({ en, fr });
const list = (en: string[], fr: string[]): Bilingual<string[]> => ({ en, fr });
interface SolutionCopy {
  slug: string;
  kind: 'service' | 'product';
  summary: Bilingual<string>;
  scope: Bilingual<string>;
  deliverables: Bilingual<string[]>;
  business: Bilingual<string>;
  government: Bilingual<string>;
  prepare: Bilingual<string[]>;
  boundary: Bilingual<string>;
}
const copy: SolutionCopy[] = [
  {
    slug: 'inclusive-job-postings',
    kind: 'service',
    summary: t(
      'Make the next vacancy easier to understand, apply for and assess fairly.',
      'Rendez votre prochaine offre d’emploi plus claire, plus accessible et plus facile à évaluer équitablement.',
    ),
    scope: t(
      'A focused review of one job posting or a small set of related roles. We examine essential requirements, exclusionary wording, application instructions and the accommodation invitation with your hiring team.',
      'Une révision ciblée d’une offre ou d’un petit groupe de postes similaires. Nous examinons avec votre équipe les exigences essentielles, les formulations pouvant exclure, les consignes de candidature et l’invitation à demander des mesures d’adaptation.',
    ),
    deliverables: list(
      [
        'An annotated posting with the reason for each proposed change',
        'A revised, ready-to-review version in the agreed language or languages',
        'A checklist your recruiters can reuse for future vacancies',
        'A short handover to confirm essential requirements with the hiring manager',
      ],
      [
        'Une offre annotée expliquant chaque modification proposée',
        'Une version révisée à approuver dans la ou les langues convenues',
        'Une liste de vérification réutilisable pour les prochains recrutements',
        'Un échange avec le gestionnaire pour confirmer les exigences essentielles',
      ],
    ),
    business: t(
      'Useful before a hiring campaign, a new branch opening or a refresh of frequently used job templates.',
      'Utile avant une campagne de recrutement, l’ouverture d’une succursale ou la mise à jour de modèles d’offres.',
    ),
    government: t(
      'Scope a review around the approved merit criteria, classification and official-language requirements supplied by your team.',
      'Cadrez la révision selon les critères de mérite, la classification et les exigences linguistiques approuvés par votre équipe.',
    ),
    prepare: list(
      [
        'The draft posting and role description',
        'Essential duties and selection criteria',
        'Your application process and accommodation contact',
      ],
      [
        'L’offre et la description de poste provisoires',
        'Les fonctions essentielles et les critères de sélection',
        'Le processus de candidature et le contact pour les mesures d’adaptation',
      ],
    ),
    boundary: t(
      'Your HR team approves job requirements and final wording. Recruitment advertising, candidate screening and legal review are separate scopes.',
      'Votre équipe RH approuve les exigences et le texte final. La diffusion, la présélection et l’examen juridique font l’objet de mandats distincts.',
    ),
  },
  {
    slug: 'structured-interview-toolkit',
    kind: 'service',
    summary: t(
      'Give interview panels a shared set of questions, scoring criteria and candidate instructions.',
      'Donnez aux comités d’entrevue des questions, des critères d’évaluation et des consignes communes.',
    ),
    scope: t(
      'Build a practical interview package for one role or job family. Questions connect to the work, with consistent prompts and scoring anchors that help panels explain their decisions.',
      'Créez une trousse pratique pour un poste ou une famille d’emplois. Les questions portent sur le travail, avec des relances cohérentes et des repères de notation pour aider les comités à expliquer leurs décisions.',
    ),
    deliverables: list(
      [
        'A role-specific interview guide and question bank',
        'A scorecard with observable evidence and rating anchors',
        'Candidate instructions and an accommodation request prompt',
        'A panel briefing with a practice scoring exercise',
      ],
      [
        'Un guide d’entrevue et une banque de questions adaptés au poste',
        'Une grille fondée sur des éléments observables et des repères de notation',
        'Des consignes aux candidats et une invitation à demander des adaptations',
        'Une séance de préparation avec un exercice de notation',
      ],
    ),
    business: t(
      'A practical starting point when different managers interview for the same role or hiring is growing quickly.',
      'Un point de départ concret lorsque plusieurs gestionnaires recrutent pour un même poste ou que les embauches augmentent.',
    ),
    government: t(
      'Use your approved competencies and assessment plan to define the toolkit; retain your established staffing approvals.',
      'Utilisez vos compétences et votre plan d’évaluation approuvés pour définir la trousse, tout en conservant vos mécanismes d’autorisation.',
    ),
    prepare: list(
      [
        'Role profile and assessment criteria',
        'Current interview questions',
        'Panel size, interview format and working languages',
      ],
      [
        'Le profil du poste et les critères d’évaluation',
        'Les questions d’entrevue actuelles',
        'La taille du comité, le format et les langues de travail',
      ],
    ),
    boundary: t(
      'The toolkit supports human assessment. It does not rank candidates automatically or replace your staffing and accommodation decisions.',
      'La trousse soutient l’évaluation humaine. Elle ne classe pas automatiquement les candidats et ne remplace pas vos décisions de dotation ou d’adaptation.',
    ),
  },
  {
    slug: 'inclusion-pulse-survey',
    kind: 'service',
    summary: t(
      'Turn a focused set of employee questions into priorities your team can act on.',
      'Transformez quelques questions ciblées au personnel en priorités concrètes pour votre équipe.',
    ),
    scope: t(
      'Design a short survey around a defined workplace question, such as belonging, speaking up or access to development. Agree on participation, reporting and privacy arrangements before collecting responses.',
      'Concevez un court sondage sur une question précise : sentiment d’appartenance, prise de parole ou accès au développement. Convenez des modalités de participation, de présentation et de confidentialité avant la collecte.',
    ),
    deliverables: list(
      [
        'A survey draft and participation message',
        'A collection and reporting plan with minimum group-size rules',
        'An aggregate findings brief with limitations explained',
        'A facilitated review to choose a small number of next actions',
      ],
      [
        'Un projet de sondage et un message d’invitation',
        'Un plan de collecte et de présentation avec des seuils minimaux par groupe',
        'Une synthèse agrégée précisant les limites des résultats',
        'Un échange animé pour retenir quelques actions prioritaires',
      ],
    ),
    business: t(
      'Useful for a team baseline, a post-change check-in or deciding where to focus a workplace inclusion plan.',
      'Utile pour établir un portrait initial, faire le point après un changement ou orienter un plan d’inclusion.',
    ),
    government: t(
      'Define the survey with your privacy, labour-relations and employee-engagement leads, including internal approval and retention requirements.',
      'Définissez le sondage avec vos responsables de la vie privée, des relations de travail et de la mobilisation, y compris les autorisations et la conservation des données.',
    ),
    prepare: list(
      [
        'The decision you want the survey to inform',
        'Approximate workforce size and participation languages',
        'Existing survey tools and privacy requirements',
      ],
      [
        'La décision que le sondage doit éclairer',
        'La taille approximative de l’effectif et les langues de participation',
        'Les outils de sondage et les exigences de confidentialité existants',
      ],
    ),
    boundary: t(
      'Anonymity depends on the collection design and group size. Demographic questions, listening sessions and platform administration are agreed separately; do not send employee records through the enquiry form.',
      'L’anonymat dépend du mode de collecte et de la taille des groupes. Les questions démographiques, les séances d’écoute et l’administration de la plateforme sont convenues séparément. N’envoyez pas de dossiers du personnel par le formulaire.',
    ),
  },
  {
    slug: 'respectful-workplace-microlearning',
    kind: 'service',
    summary: t(
      'Short, practical learning units built around the situations your staff encounter.',
      'De courts modules pratiques fondés sur les situations vécues par votre personnel.',
    ),
    scope: t(
      'Develop a small learning series on respectful communication, inclusive meetings or responding to everyday exclusion. Choose facilitator-led sessions, self-guided materials or an agreed digital format.',
      'Créez une courte série sur la communication respectueuse, les réunions inclusives ou les réactions à l’exclusion au quotidien. Choisissez des séances animées, des ressources autonomes ou un format numérique convenu.',
    ),
    deliverables: list(
      [
        'Learning objectives and a short module outline',
        'Workplace scenarios and reflection questions',
        'A facilitator or learner guide with practical actions',
        'A knowledge check and manager follow-up prompts',
      ],
      [
        'Des objectifs d’apprentissage et un plan de modules courts',
        'Des mises en situation et des questions de réflexion',
        'Un guide d’animation ou d’apprentissage avec des actions concrètes',
        'Une vérification des acquis et des pistes de suivi pour les gestionnaires',
      ],
    ),
    business: t(
      'Fit learning into onboarding, team meetings or a rollout across locations without building a full course first.',
      'Intégrez l’apprentissage à l’accueil, aux réunions ou à un déploiement multisite sans commencer par un cours complet.',
    ),
    government: t(
      'Adapt examples to public service, service counters or internal teams, with bilingual delivery and accessible formats scoped at the outset.',
      'Adaptez les exemples aux services publics, aux comptoirs ou aux équipes internes, en prévoyant dès le départ les langues et les formats accessibles.',
    ),
    prepare: list(
      [
        'The audience and one or two priority behaviours',
        'Relevant internal policies and terminology',
        'Delivery format, languages and any learning-platform requirements',
      ],
      [
        'Le public et un ou deux comportements prioritaires',
        'Les politiques et la terminologie internes pertinentes',
        'Le format, les langues et les exigences de la plateforme de formation',
      ],
    ),
    boundary: t(
      'Duration, facilitation and platform packaging are specified in the proposal. This is learning support, not an investigation or a substitute for required policy-specific training.',
      'La durée, l’animation et l’intégration à une plateforme sont précisées dans la proposition. Ce soutien à l’apprentissage ne constitue pas une enquête et ne remplace pas les formations exigées par vos politiques.',
    ),
  },
  {
    slug: 'accessible-documents',
    kind: 'service',
    summary: t(
      'Improve the structure and usability of the documents people need to read and use.',
      'Améliorez la structure et la facilité d’utilisation des documents destinés à votre public.',
    ),
    scope: t(
      'Remediate a defined set of Word, PowerPoint or PDF files. The work starts with source-file review and an agreed testing scope, including headings, reading order, links, tables and alternative text where applicable.',
      'Corrigez un ensemble défini de fichiers Word, PowerPoint ou PDF. Le travail commence par l’examen des sources et une portée de vérification convenue : titres, ordre de lecture, liens, tableaux et textes de remplacement selon le cas.',
    ),
    deliverables: list(
      [
        'Revised files in the agreed editable and publication formats',
        'A record of structural and content changes',
        'A check summary describing methods and unresolved issues',
        'Authoring guidance for maintaining the corrected files',
      ],
      [
        'Des fichiers corrigés dans les formats modifiables et de diffusion convenus',
        'Un relevé des changements de structure et de contenu',
        'Une synthèse des vérifications et des problèmes non résolus',
        'Des consignes pour maintenir l’accessibilité des fichiers',
      ],
    ),
    business: t(
      'Start with a customer guide, employee handbook, presentation deck or frequently used form.',
      'Commencez par un guide client, un manuel du personnel, une présentation ou un formulaire courant.',
    ),
    government: t(
      'Define required formats, review methods and acceptance criteria for a public report, consultation document or service information package.',
      'Définissez les formats, les méthodes de révision et les critères d’acceptation pour un rapport public, une consultation ou des documents de service.',
    ),
    prepare: list(
      [
        'File types, page counts and original editable files if available',
        'Publication languages and intended audience',
        'Required standards, testing methods and deadline',
      ],
      [
        'Les types de fichiers, le nombre de pages et les sources modifiables disponibles',
        'Les langues de diffusion et le public visé',
        'Les normes, les méthodes de vérification et l’échéance requises',
      ],
    ),
    boundary: t(
      'Scans, complex tables and forms may require reconstruction. Automated checks alone do not establish accessibility; any conformance claim must match the agreed manual testing and remaining limitations.',
      'Les numérisations, tableaux complexes et formulaires peuvent nécessiter une reconstruction. Les contrôles automatisés ne suffisent pas à établir l’accessibilité; toute conclusion doit refléter les vérifications manuelles et les limites restantes.',
    ),
  },
  {
    slug: 'plain-language-bilingual-review',
    kind: 'service',
    summary: t(
      'Help English- and French-speaking readers understand what to do next.',
      'Aidez les lecteurs francophones et anglophones à comprendre la prochaine étape.',
    ),
    scope: t(
      'Review a defined document, form or short set of webpages for clarity, tone and consistency between English and French. Prioritize the reader’s task, explain unfamiliar terms and make instructions easier to follow.',
      'Révisez un document, un formulaire ou quelques pages Web pour améliorer la clarté, le ton et la cohérence entre le français et l’anglais. Priorisez la tâche du lecteur, expliquez les termes peu connus et simplifiez les consignes.',
    ),
    deliverables: list(
      [
        'Annotated English and French versions',
        'Revised headings, instructions and calls to action',
        'A short bilingual terminology list',
        'A review handover highlighting meaning that needs owner approval',
      ],
      [
        'Des versions française et anglaise annotées',
        'Des titres, des consignes et des appels à l’action révisés',
        'Un court lexique bilingue',
        'Un relevé des points de sens à faire approuver par le responsable',
      ],
    ),
    business: t(
      'Useful for onboarding instructions, customer notices, employee communications and supplier guidance.',
      'Utile pour les consignes d’accueil, les avis aux clients, les communications internes et les guides fournisseurs.',
    ),
    government: t(
      'Apply the review to service instructions or public information while retaining policy meaning and your official publication approvals.',
      'Révisez des consignes de service ou de l’information publique en préservant le sens des politiques et vos autorisations de publication.',
    ),
    prepare: list(
      [
        'The current English and French text',
        'The reader’s task and approved terminology',
        'Content that must retain specific legal or policy wording',
      ],
      [
        'Les textes français et anglais actuels',
        'La tâche du lecteur et la terminologie approuvée',
        'Les passages dont la formulation juridique ou administrative doit être conservée',
      ],
    ),
    boundary: t(
      'Translation from scratch, certified translation, legal interpretation and user research are separate scopes. The content owner approves the final meaning.',
      'La traduction intégrale, la traduction certifiée, l’interprétation juridique et la recherche auprès des utilisateurs sont des mandats distincts. Le responsable du contenu approuve le sens final.',
    ),
  },
  {
    slug: 'accessible-meetings-events',
    kind: 'service',
    summary: t(
      'Plan participation needs before invitations go out and the room is booked.',
      'Prévoyez les besoins de participation avant l’envoi des invitations et la réservation de la salle.',
    ),
    scope: t(
      'Prepare an accessibility plan for one meeting, workshop or small event. Consider registration, venue or platform, materials, communication supports, breaks and an accommodation contact.',
      'Préparez un plan d’accessibilité pour une réunion, un atelier ou un petit événement. Examinez l’inscription, le lieu ou la plateforme, les documents, les aides à la communication, les pauses et le contact pour les adaptations.',
    ),
    deliverables: list(
      [
        'A planning checklist with owners and decisions',
        'Registration and invitation wording',
        'An accessibility briefing for hosts and facilitators',
        'A run-of-show review and participant feedback questions',
      ],
      [
        'Une liste de planification avec responsables et décisions',
        'Des textes d’inscription et d’invitation',
        'Une fiche d’accessibilité pour les hôtes et les animateurs',
        'Une révision du déroulement et des questions de rétroaction',
      ],
    ),
    business: t(
      'Use it for an employee town hall, customer workshop, conference session or hybrid team meeting.',
      'Pour une assemblée du personnel, un atelier client, une conférence ou une réunion hybride.',
    ),
    government: t(
      'Plan a public consultation, committee session or community meeting with clear responsibilities for participant requests and service arrangements.',
      'Planifiez une consultation, une séance de comité ou une rencontre communautaire en précisant les responsabilités liées aux demandes et aux services.',
    ),
    prepare: list(
      [
        'Event format, date and approximate attendance',
        'Venue or platform details and working languages',
        'Known participation needs and the responsible event lead',
      ],
      [
        'Le format, la date et la participation approximative',
        'Le lieu ou la plateforme et les langues de travail',
        'Les besoins connus et le responsable de l’événement',
      ],
    ),
    boundary: t(
      'Interpretation, captioning, venue inspections, equipment and on-site support require separate arrangements. A plan cannot guarantee that every individual need is met without consultation.',
      'L’interprétation, le sous-titrage, l’inspection des lieux, l’équipement et le soutien sur place nécessitent des dispositions distinctes. La réponse aux besoins individuels exige une consultation.',
    ),
  },
  {
    slug: 'inclusive-supplier-onboarding',
    kind: 'service',
    summary: t(
      'Make the route from supplier interest to a complete application clearer.',
      'Clarifiez le parcours entre l’intérêt d’un fournisseur et le dépôt d’un dossier complet.',
    ),
    scope: t(
      'Review one supplier onboarding journey: an invitation, registration form, qualification checklist and supporting guidance. Identify unclear requirements, unnecessary friction and opportunities for more accessible communication.',
      'Révisez un parcours d’accueil : invitation, formulaire d’inscription, critères de qualification et documentation. Repérez les exigences ambiguës, les obstacles évitables et les possibilités d’améliorer la communication.',
    ),
    deliverables: list(
      [
        'A supplier journey map and prioritized barrier log',
        'Proposed revisions to instructions and form fields',
        'A clear requirements checklist for prospective suppliers',
        'An internal handover with owners and next actions',
      ],
      [
        'Une carte du parcours et un registre priorisé des obstacles',
        'Des propositions de révision des consignes et des champs',
        'Une liste claire des exigences pour les fournisseurs potentiels',
        'Un transfert interne précisant les responsables et les actions',
      ],
    ),
    business: t(
      'Useful when expanding a supplier base or reducing avoidable back-and-forth during vendor registration.',
      'Utile pour élargir un bassin de fournisseurs ou réduire les échanges évitables pendant l’inscription.',
    ),
    government: t(
      'Review public-facing supplier guidance against the mandatory criteria supplied by procurement, with changes routed through your approval process.',
      'Examinez les guides publics selon les critères obligatoires fournis par l’approvisionnement, en soumettant les modifications à vos autorisations.',
    ),
    prepare: list(
      [
        'Supplier forms and guidance',
        'Mandatory qualification requirements',
        'Examples of recurring questions without supplier-sensitive information',
      ],
      [
        'Les formulaires et les guides fournisseurs',
        'Les exigences de qualification obligatoires',
        'Des questions fréquentes, sans renseignements sensibles sur les fournisseurs',
      ],
    ),
    boundary: t(
      'This review does not certify supplier ownership, change mandatory procurement rules or guarantee contract awards. Procurement decisions remain with your organization.',
      'Cette révision ne certifie pas la propriété des fournisseurs, ne modifie pas les règles obligatoires et ne garantit aucun contrat. Les décisions d’approvisionnement demeurent celles de votre organisation.',
    ),
  },
  {
    slug: 'bilingual-wayfinding-signs',
    kind: 'product',
    summary: t(
      'Coordinate clear English/French signs for entrances, rooms and shared spaces.',
      'Coordonnez une signalétique claire en français et en anglais pour les entrées, les salles et les espaces communs.',
    ),
    scope: t(
      'A made-to-order signage package, from a defined location list to reviewed artwork and a supplier quotation. Discuss language hierarchy, contrast, lettering, materials and mounting before production.',
      'Un ensemble de signalétique sur commande, d’une liste d’emplacements définie aux maquettes approuvées et à la soumission du fournisseur. Convenez de l’ordre des langues, du contraste, du lettrage, des matériaux et de la fixation avant la production.',
    ),
    deliverables: list(
      [
        'A sign schedule with agreed messages and locations',
        'Bilingual artwork proofs for approval',
        'A supplier quote with quantities, materials and lead time',
        'An installation and acceptance checklist for the agreed scope',
      ],
      [
        'Un tableau des panneaux avec messages et emplacements convenus',
        'Des épreuves bilingues à approuver',
        'Une soumission précisant quantités, matériaux et délais',
        'Une liste de vérification pour l’installation et la réception prévues',
      ],
    ),
    business: t(
      'For offices, meeting rooms, customer reception areas and multi-tenant workplaces.',
      'Pour les bureaux, salles de réunion, accueils clients et immeubles à locataires multiples.',
    ),
    government: t(
      'For public-facing facilities, with required terminology, language order and site standards supplied by the purchasing team.',
      'Pour les lieux accueillant le public, selon la terminologie, l’ordre des langues et les normes du site fournis par l’équipe acheteuse.',
    ),
    prepare: list(
      [
        'Locations, photographs and approximate sign quantities',
        'Approved wording, languages and brand standards',
        'Material, mounting and any tactile or Braille requirements',
      ],
      [
        'Les emplacements, les photos et les quantités approximatives',
        'Les textes, les langues et les normes graphiques approuvés',
        'Les matériaux, la fixation et les exigences tactiles ou en braille',
      ],
    ),
    boundary: t(
      'Products are quoted to specification, not sold from an online stock list. Tactile/Braille work needs specialist verification; site surveys, code review and installation are included only when specified.',
      'Les produits sont chiffrés selon vos spécifications, sans inventaire vendu en ligne. Les éléments tactiles ou en braille nécessitent une vérification spécialisée; relevés, examen réglementaire et installation sont inclus uniquement si précisés.',
    ),
  },
  {
    slug: 'inclusive-name-badges',
    kind: 'product',
    summary: t(
      'Make names easier to read and introductions easier to navigate.',
      'Facilitez la lecture des noms et les premiers échanges.',
    ),
    scope: t(
      'Plan and source badges for a workplace or event, with readable names, optional pronunciation or pronoun fields and bilingual role labels where useful. Offer choices without requiring personal disclosures.',
      'Planifiez et procurez des porte-noms pour le travail ou un événement : noms lisibles, champs facultatifs de prononciation ou de pronoms et fonctions bilingues au besoin. Proposez des choix sans imposer de renseignements personnels.',
    ),
    deliverables: list(
      [
        'Badge layout options and an editable data template',
        'A proof with agreed type size and contrast',
        'Holder and attachment options for review',
        'A quantity-based quotation and packing plan',
      ],
      [
        'Des options de mise en page et un modèle de données modifiable',
        'Une épreuve avec taille de caractères et contraste convenus',
        'Des options de supports et de fixation à examiner',
        'Une soumission selon la quantité et un plan de conditionnement',
      ],
    ),
    business: t(
      'For conferences, staff onboarding, networking sessions and customer-facing teams.',
      'Pour les conférences, l’accueil du personnel, les activités de réseautage et les équipes en contact avec la clientèle.',
    ),
    government: t(
      'For consultations, learning events or internal teams; keep security credentials and identity verification within existing systems.',
      'Pour les consultations, formations ou équipes internes; les titres de sécurité et la vérification d’identité demeurent dans vos systèmes existants.',
    ),
    prepare: list(
      [
        'Approximate quantity and event or delivery date',
        'Required and optional badge fields',
        'Brand artwork and preferred attachment options',
      ],
      [
        'La quantité approximative et la date souhaitée',
        'Les champs obligatoires et facultatifs',
        'Les éléments graphiques et les fixations préférées',
      ],
    ),
    boundary: t(
      'Badge data is shared only through an agreed transfer process. Security features, final materials and attachment safety requirements are confirmed before ordering.',
      'Les données des porte-noms sont transmises par un processus convenu. Les éléments de sécurité, les matériaux et les exigences des fixations sont confirmés avant la commande.',
    ),
  },
  {
    slug: 'sensory-support-kits',
    kind: 'product',
    summary: t(
      'Offer optional comfort items in spaces where people may need a quieter experience.',
      'Proposez des articles de confort facultatifs dans les espaces où certaines personnes recherchent plus de calme.',
    ),
    scope: t(
      'Scope and source a kit for a reception area, meeting venue or public event. Possible items include hearing protection, simple tactile items and a clear instruction card; selection follows your users, setting and safety requirements.',
      'Définissez et procurez une trousse pour un accueil, une salle ou un événement public. Elle peut comprendre une protection auditive, des objets tactiles simples et une fiche d’utilisation, selon le public, le contexte et les exigences de sécurité.',
    ),
    deliverables: list(
      [
        'A proposed item list with intended use and alternatives',
        'Supplier specifications for review before purchase',
        'A bilingual use, return and care card',
        'A replenishment plan and quantity-based quotation',
      ],
      [
        'Une liste proposée avec usages prévus et solutions de rechange',
        'Les spécifications fournisseurs à examiner avant l’achat',
        'Une fiche bilingue d’utilisation, de retour et d’entretien',
        'Un plan de réapprovisionnement et une soumission selon la quantité',
      ],
    ),
    business: t(
      'For employee events, customer reception or shared meeting spaces where voluntary support items may be useful.',
      'Pour les événements du personnel, les accueils clients ou les espaces partagés où des articles facultatifs peuvent être utiles.',
    ),
    government: t(
      'For libraries, service locations and consultation events, with supervision, cleaning and replenishment responsibilities defined.',
      'Pour les bibliothèques, les points de service et les consultations, en précisant la supervision, le nettoyage et le réapprovisionnement.',
    ),
    prepare: list(
      [
        'The setting, user age range and intended use',
        'Quantity, storage and cleaning arrangements',
        'Material restrictions and product-safety requirements',
      ],
      [
        'Le lieu, les âges visés et l’usage prévu',
        'Les quantités, le rangement et le nettoyage prévus',
        'Les restrictions de matériaux et les exigences de sécurité des produits',
      ],
    ),
    boundary: t(
      'Items are selected and quoted before purchase. These are optional comfort supports, not medical devices or a replacement for individual accommodation; suitability and safety must be checked for the intended users.',
      'Les articles sont choisis et chiffrés avant l’achat. Ce sont des aides au confort facultatives, non des dispositifs médicaux ni un remplacement des adaptations individuelles; leur pertinence et leur sécurité doivent être vérifiées pour le public visé.',
    ),
  },
  {
    slug: 'large-print-materials',
    kind: 'product',
    summary: t(
      'Give people a readable print option alongside your standard documents.',
      'Offrez une version imprimée lisible en complément de vos documents habituels.',
    ),
    scope: t(
      'Prepare and coordinate production of a large-print version of a defined booklet, handout or information sheet. Agree on type size, spacing, contrast, paper and binding with the intended readers in mind.',
      'Préparez et coordonnez une version en gros caractères d’un livret, d’un dépliant ou d’une fiche. Convenez de la taille des caractères, des espacements, du contraste, du papier et de la reliure en fonction du public.',
    ),
    deliverables: list(
      [
        'A reformatted print-ready file',
        'An English/French layout proof where both languages are included',
        'An accessible digital companion when included in scope',
        'A print quotation with quantity, finishing and delivery details',
      ],
      [
        'Un fichier remis en page et prêt à imprimer',
        'Une épreuve française et anglaise lorsque les deux langues sont incluses',
        'Une version numérique accessible si prévue au mandat',
        'Une soumission d’impression précisant quantité, finition et livraison',
      ],
    ),
    business: t(
      'For customer instructions, workplace guides, event handouts and frequently requested information.',
      'Pour les consignes clients, les guides de travail, les documents d’événement et l’information souvent demandée.',
    ),
    government: t(
      'For service information, consultation materials and public notices, with content approval and distribution requirements agreed in advance.',
      'Pour l’information de service, les consultations et les avis publics, en convenant d’avance de l’approbation et de la distribution.',
    ),
    prepare: list(
      [
        'Approved text and editable source files',
        'Requested format, languages and approximate quantity',
        'Reader preferences, print specifications and delivery date',
      ],
      [
        'Le texte approuvé et les fichiers sources modifiables',
        'Le format, les langues et la quantité approximative',
        'Les préférences de lecture, les spécifications et la date de livraison',
      ],
    ),
    boundary: t(
      'Large print is one format choice and does not meet every access need. Braille, audio, translation and complex document remediation are separate scopes; print specifications and proofs are approved before production.',
      'Les gros caractères constituent une option et ne répondent pas à tous les besoins. Le braille, l’audio, la traduction et la correction de documents complexes sont des mandats distincts; les spécifications et les épreuves sont approuvées avant la production.',
    ),
  },
];
export const solutions = copy.map((item) => {
  const option = solutionOptions.find((option) => option.slug === item.slug);
  if (!option) throw new Error(`Missing solution metadata: ${item.slug}`);
  return { ...item, ...option };
});
export type Solution = (typeof solutions)[number];
