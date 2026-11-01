export type Locale = 'en' | 'fr';

type Localized<T> = Record<Locale, T>;

export interface Subservice {
  slug: string;
  title: Localized<string>;
  intro: Localized<string>;
  description: Localized<string>;
  deliverables: Localized<string[]>;
}

export interface Service {
  slug: string;
  number: string;
  title: Localized<string>;
  shortTitle: Localized<string>;
  intro: Localized<string>;
  description: Localized<string>;
  outcomes: Localized<string[]>;
  process: Localized<string[]>;
  deliverables: Localized<string[]>;
  faq: Localized<{ q: string; a: string }[]>;
  subservices: Subservice[];
}

const localized = <T>(en: T, fr: T): Localized<T> => ({ en, fr });

/** Proposed service scope. Qualifications, staffing and project terms are confirmed in each engagement. */
export const services: Service[] = [
  {
    slug: 'dei',
    number: '01',
    title: localized(
      'Diversity, equity & inclusion',
      'Diversité, équité et inclusion',
    ),
    shortTitle: localized('Diversity & inclusion', 'Diversité et inclusion'),
    intro: localized(
      'Turn inclusion into everyday organizational practice.',
      'Faire de l’inclusion une pratique organisationnelle au quotidien.',
    ),
    description: localized(
      'Connect your commitment to inclusion with the decisions that shape hiring, advancement and participation. We help define the questions, examine policies and employee experience, and develop a practical plan with clear ownership. The work starts with your context and the people affected by it.',
      'Reliez votre engagement envers l’inclusion aux décisions qui façonnent l’embauche, l’avancement et la participation. Nous vous aidons à préciser les questions à examiner, à analyser les politiques et l’expérience du personnel, puis à élaborer un plan concret assorti de responsabilités claires. Le travail commence par votre réalité et les personnes concernées.',
    ),
    outcomes: localized(
      [
        'A clearer picture of barriers across the employee experience.',
        'Priorities that connect inclusion to organizational objectives.',
        'An action plan with accountable owners and meaningful indicators.',
      ],
      [
        'Un portrait plus clair des obstacles dans le parcours du personnel.',
        'Des priorités qui relient l’inclusion aux objectifs de l’organisation.',
        'Un plan d’action avec des responsables désignés et des indicateurs pertinents.',
      ],
    ),
    process: localized(
      [
        'Agree on objectives, scope and responsible use of employee information.',
        'Review existing policies and available evidence; listen through accessible consultation.',
        'Validate findings with stakeholders and identify practical changes.',
        'Build the action plan, assign ownership and establish a review rhythm.',
      ],
      [
        'Convenir des objectifs, de la portée et de l’utilisation responsable des renseignements sur le personnel.',
        'Examiner les politiques et les données disponibles; organiser une consultation accessible.',
        'Valider les constats avec les parties prenantes et déterminer les changements réalisables.',
        'Élaborer le plan d’action, attribuer les responsabilités et fixer la fréquence des suivis.',
      ],
    ),
    deliverables: localized(
      [
        'Assessment summary with evidence, limitations and priority barriers.',
        'Policy recommendations and an implementation sequence.',
        'A measurable inclusion roadmap tailored to your resources.',
        'A leadership briefing and progress-review framework.',
      ],
      [
        'Sommaire d’évaluation précisant les éléments probants, les limites et les obstacles prioritaires.',
        'Recommandations sur les politiques et séquence de mise en œuvre.',
        'Feuille de route en inclusion adaptée à vos ressources et assortie de mesures de suivi.',
        'Présentation à la direction et cadre de suivi des progrès.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Do we need an existing DEI strategy?',
          a: 'No. An engagement can start with a focused assessment, an existing initiative that needs direction, or a review of a mature strategy. We agree on a proportionate scope before work begins.',
        },
        {
          q: 'How is employee information handled?',
          a: 'Collection, access, retention and reporting rules are agreed before consultation. We favour the minimum information needed and aggregated reporting where appropriate; confidentiality limits are explained to participants.',
        },
        {
          q: 'Will the work include quotas or a certification?',
          a: 'Neither is assumed. Recommendations reflect your objectives, context and applicable obligations. This service does not award a certification or replace legal advice.',
        },
      ],
      [
        {
          q: 'Faut-il déjà avoir une stratégie en EDI?',
          a: 'Non. Le mandat peut commencer par une évaluation ciblée, une initiative à mieux orienter ou la révision d’une stratégie établie. Nous convenons d’une portée proportionnée avant de commencer.',
        },
        {
          q: 'Comment les renseignements sur le personnel sont-ils traités?',
          a: 'Les règles de collecte, d’accès, de conservation et de présentation des résultats sont convenues avant la consultation. Nous privilégions les renseignements strictement nécessaires et les résultats regroupés lorsque cela convient. Les limites de la confidentialité sont expliquées aux personnes participantes.',
        },
        {
          q: 'Le mandat prévoit-il des quotas ou une certification?',
          a: 'Ni l’un ni l’autre n’est présumé. Les recommandations tiennent compte de vos objectifs, de votre réalité et des obligations applicables. Ce service n’accorde aucune certification et ne remplace pas un avis juridique.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'organizational-assessments',
        title: localized(
          'Organizational inclusion assessments',
          'Évaluations de l’inclusion organisationnelle',
        ),
        intro: localized(
          'Establish a useful baseline before choosing the next initiative.',
          'Établir un point de départ utile avant de choisir la prochaine initiative.',
        ),
        description: localized(
          'Examine how employees experience recruitment, onboarding, development and advancement. A scoped review brings together policy analysis, available workforce information and voluntary consultation to distinguish evidence from assumptions and identify where deeper investigation is needed.',
          'Examinez l’expérience du personnel en matière de recrutement, d’accueil, de développement et d’avancement. Une évaluation ciblée réunit l’analyse des politiques, les renseignements disponibles sur les effectifs et une consultation volontaire afin de distinguer les constats des hypothèses et de repérer les questions à approfondir.',
        ),
        deliverables: localized(
          [
            'Assessment scope and consultation plan.',
            'Barrier and opportunity map with evidence limitations.',
            'Prioritized recommendations and next-step briefing.',
          ],
          [
            'Portée de l’évaluation et plan de consultation.',
            'Portrait des obstacles et des possibilités précisant les limites des données.',
            'Recommandations hiérarchisées et présentation des prochaines étapes.',
          ],
        ),
      },
      {
        slug: 'inclusive-policies',
        title: localized(
          'Inclusive policy and practice review',
          'Révision inclusive des politiques et des pratiques',
        ),
        intro: localized(
          'Make expectations clearer and processes more consistent.',
          'Clarifier les attentes et rendre les processus plus cohérents.',
        ),
        description: localized(
          'Review the policies and decision points that affect fair access to opportunity. We examine language, responsibilities, access to information and how a policy is applied in practice, then identify revisions for your internal decision-makers and legal advisers to consider.',
          'Examinez les politiques et les décisions qui influencent l’accès équitable aux possibilités. Nous analysons le langage, les responsabilités, l’accès à l’information et l’application concrète des politiques, puis proposons des révisions à vos responsables internes et à vos conseillers juridiques.',
        ),
        deliverables: localized(
          [
            'Policy inventory and gap analysis.',
            'Proposed revisions with practical implementation notes.',
            'Communication and manager enablement recommendations.',
          ],
          [
            'Inventaire des politiques et analyse des écarts.',
            'Révisions proposées et notes pratiques de mise en œuvre.',
            'Recommandations pour la communication et l’accompagnement des gestionnaires.',
          ],
        ),
      },
      {
        slug: 'inclusion-roadmaps',
        title: localized(
          'Inclusion strategy and measurement',
          'Stratégie en inclusion et mesure des progrès',
        ),
        intro: localized(
          'Give your priorities owners, milestones and a way to learn.',
          'Associer vos priorités à des responsables, des jalons et un mécanisme d’apprentissage.',
        ),
        description: localized(
          'Translate assessment findings into a sequenced plan that fits operational capacity. Define the intended changes, assign accountable roles and select indicators that show both activity and employee experience. Build in regular review so the plan can evolve with evidence.',
          'Transformez les constats de l’évaluation en un plan progressif adapté à votre capacité opérationnelle. Définissez les changements visés, attribuez les responsabilités et choisissez des indicateurs qui reflètent les activités et l’expérience du personnel. Prévoyez des suivis réguliers pour ajuster le plan à la lumière des résultats.',
        ),
        deliverables: localized(
          [
            'Strategic objectives and implementation roadmap.',
            'Responsibility matrix and milestone schedule.',
            'Indicator definitions and progress-report template.',
          ],
          [
            'Objectifs stratégiques et feuille de route de mise en œuvre.',
            'Matrice des responsabilités et calendrier des jalons.',
            'Définition des indicateurs et modèle de suivi des progrès.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'accessibility',
    number: '02',
    title: localized(
      'Accessibility advisory & audits',
      'Services-conseils et audits en accessibilité',
    ),
    shortTitle: localized('Accessibility', 'Accessibilité'),
    intro: localized(
      'Understand the barriers. Plan the work that removes them.',
      'Comprendre les obstacles. Planifier les mesures pour les éliminer.',
    ),
    description: localized(
      'Bring digital, physical and workplace accessibility into one practical conversation. We help scope assessments, identify barriers in services and environments, and organize remediation around impact, urgency and feasibility. Assessment methods and the standards in scope are agreed at the outset; recommendations do not imply certification.',
      'Abordez l’accessibilité numérique, physique et au travail dans une démarche cohérente. Nous vous aidons à définir la portée des évaluations, à repérer les obstacles dans les services et les milieux, puis à prioriser les correctifs selon leur incidence, leur urgence et leur faisabilité. Les méthodes et les normes visées sont convenues dès le départ; les recommandations ne constituent pas une certification.',
    ),
    outcomes: localized(
      [
        'A documented view of barriers within the agreed assessment scope.',
        'A remediation plan that distinguishes immediate actions from larger projects.',
        'Clearer responsibilities for accessible services and ongoing maintenance.',
      ],
      [
        'Un portrait documenté des obstacles dans la portée d’évaluation convenue.',
        'Un plan de correction distinguant les mesures immédiates des projets plus importants.',
        'Des responsabilités plus claires pour l’accessibilité des services et leur maintien.',
      ],
    ),
    process: localized(
      [
        'Define sites, digital journeys, audiences and assessment criteria.',
        'Review information, assess representative tasks and gather relevant user feedback.',
        'Document barriers, their effects and recommended remediation.',
        'Prioritize work, establish ownership and plan verification after changes.',
      ],
      [
        'Définir les lieux, les parcours numériques, les publics et les critères d’évaluation.',
        'Examiner les renseignements disponibles, évaluer des tâches représentatives et recueillir les commentaires pertinents.',
        'Documenter les obstacles, leurs effets et les correctifs recommandés.',
        'Prioriser les travaux, attribuer les responsabilités et prévoir la vérification des changements.',
      ],
    ),
    deliverables: localized(
      [
        'Assessment report with scope, methods and limitations.',
        'Barrier register with evidence and recommended actions.',
        'Prioritized remediation roadmap and responsibility matrix.',
        'Verification plan and accessible-service recommendations.',
      ],
      [
        'Rapport d’évaluation précisant la portée, les méthodes et les limites.',
        'Registre des obstacles avec éléments probants et mesures recommandées.',
        'Feuille de route des correctifs et matrice des responsabilités.',
        'Plan de vérification et recommandations pour des services accessibles.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Does an audit certify legal compliance?',
          a: 'No. An audit documents findings against the agreed criteria and within a defined scope. Legal obligations, technical standards and certification programs are distinct; any required legal or regulated professional review is identified separately.',
        },
        {
          q: 'Can digital and physical accessibility be assessed together?',
          a: 'Yes, when the scope calls for it. We can connect online information, booking or service journeys with the experience of arriving at and using a physical location. The appropriate specialists are identified for each area.',
        },
        {
          q: 'Can you help after the assessment?',
          a: 'The engagement can include remediation planning, procurement support and implementation coordination. Specialist design, construction, testing or installation is scoped and assigned to appropriately qualified providers where required.',
        },
      ],
      [
        {
          q: 'Un audit certifie-t-il la conformité juridique?',
          a: 'Non. Un audit documente les constats selon les critères convenus et dans une portée définie. Les obligations juridiques, les normes techniques et les programmes de certification sont distincts. Tout examen juridique ou professionnel réglementé nécessaire est déterminé séparément.',
        },
        {
          q: 'Peut-on évaluer ensemble l’accessibilité numérique et physique?',
          a: 'Oui, lorsque la portée du mandat le prévoit. Nous pouvons relier l’information en ligne et les parcours de réservation ou de service à l’expérience d’arrivée et d’utilisation d’un lieu physique. Les spécialistes appropriés sont déterminés pour chaque volet.',
        },
        {
          q: 'Pouvez-vous accompagner la suite de l’évaluation?',
          a: 'Le mandat peut comprendre la planification des correctifs, le soutien à l’approvisionnement et la coordination de la mise en œuvre. Les travaux spécialisés de conception, de construction, d’essai ou d’installation sont définis et confiés à des prestataires ayant les qualifications requises.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'digital-accessibility',
        title: localized(
          'Digital accessibility assessments',
          'Évaluations de l’accessibilité numérique',
        ),
        intro: localized(
          'Examine the journeys people need to complete, not only individual pages.',
          'Examiner les parcours à accomplir, au-delà des pages individuelles.',
        ),
        description: localized(
          'Scope representative web pages, documents and interactions against agreed accessibility criteria. Combine appropriate automated checks with manual evaluation of keyboard access, structure, labels and task completion. Findings include enough context for design and development teams to act.',
          'Définissez un échantillon représentatif de pages Web, de documents et d’interactions à examiner selon les critères d’accessibilité convenus. Combinez des vérifications automatisées appropriées à une évaluation manuelle de l’accès au clavier, de la structure, des libellés et de la réalisation des tâches. Les constats fournissent le contexte nécessaire aux équipes de conception et de développement.',
        ),
        deliverables: localized(
          [
            'Page and journey sampling plan.',
            'Issue register with reproduction steps and user impact.',
            'Remediation priorities and a targeted retest plan.',
          ],
          [
            'Plan d’échantillonnage des pages et des parcours.',
            'Registre des problèmes avec étapes de reproduction et effets sur les utilisateurs.',
            'Priorités de correction et plan de vérification ciblé.',
          ],
        ),
      },
      {
        slug: 'built-environment',
        title: localized(
          'Built environment and service access',
          'Accessibilité des lieux et des services',
        ),
        intro: localized(
          'Follow the complete experience of arriving, navigating and participating.',
          'Considérer toute l’expérience : arriver, s’orienter et participer.',
        ),
        description: localized(
          'Review agreed aspects of the route through a facility and its services, from arrival information and entrances to circulation, signage and customer interactions. Record observable barriers and identify where technical measurements, professional design or a more detailed site investigation are needed.',
          'Examinez les éléments convenus du parcours dans un établissement et de l’accès à ses services : renseignements avant l’arrivée, entrées, circulation, signalisation et interactions avec le personnel. Consignez les obstacles observables et les situations nécessitant des mesures techniques, une conception professionnelle ou une étude plus approfondie.',
        ),
        deliverables: localized(
          [
            'Site review scope and observations.',
            'Barrier register organized by location and user journey.',
            'Action priorities and specialist referral requirements.',
          ],
          [
            'Portée de l’examen des lieux et observations.',
            'Registre des obstacles par lieu et par parcours.',
            'Priorités d’action et besoins de recours à des spécialistes.',
          ],
        ),
      },
      {
        slug: 'accommodation-planning',
        title: localized(
          'Accommodation and accessibility planning',
          'Planification de l’accessibilité et des mesures d’adaptation',
        ),
        intro: localized(
          'Create a clearer process for requesting and arranging support.',
          'Clarifier la démarche pour demander et organiser du soutien.',
        ),
        description: localized(
          'Map how accommodation requests are received, considered, implemented and reviewed. Clarify responsibilities, accessible communication and appropriate handling of sensitive information. This work focuses on process design; individual legal, medical and employment decisions remain with the responsible professionals and organization.',
          'Décrivez la réception, l’analyse, la mise en place et le suivi des demandes de mesures d’adaptation. Clarifiez les responsabilités, les communications accessibles et le traitement approprié des renseignements sensibles. Le mandat porte sur la conception du processus; les décisions individuelles d’ordre juridique, médical ou professionnel relèvent des personnes compétentes et de l’organisation.',
        ),
        deliverables: localized(
          [
            'Request and decision-process map.',
            'Draft templates and communication guidance.',
            'Implementation checklist and review schedule.',
          ],
          [
            'Schéma du processus de demande et de décision.',
            'Ébauches de modèles et conseils de communication.',
            'Liste de vérification et calendrier de suivi.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'people-culture',
    number: '03',
    title: localized(
      'People, culture & organizational consulting',
      'Ressources humaines, culture et organisation',
    ),
    shortTitle: localized('People & culture', 'Personnel et culture'),
    intro: localized(
      'Build the conditions for people and organizations to move forward.',
      'Créer les conditions pour faire progresser les personnes et l’organisation.',
    ),
    description: localized(
      'Culture takes shape in everyday decisions: how leaders communicate, how work is organized and how people experience change. We help connect employee listening with practical improvements to people processes, leadership routines and organizational ways of working.',
      'La culture se construit dans les décisions quotidiennes : la communication des leaders, l’organisation du travail et la façon dont le personnel vit le changement. Nous relions l’écoute du personnel à des améliorations concrètes des pratiques de ressources humaines, des habitudes de gestion et des modes de travail.',
    ),
    outcomes: localized(
      [
        'A shared understanding of employee experience and organizational friction.',
        'People practices that are clearer and easier to apply consistently.',
        'A change plan that gives leaders and employees a practical role.',
      ],
      [
        'Une compréhension commune de l’expérience du personnel et des irritants organisationnels.',
        'Des pratiques de gestion des personnes plus claires et plus cohérentes.',
        'Un plan de changement donnant un rôle concret aux leaders et au personnel.',
      ],
    ),
    process: localized(
      [
        'Understand the operating context, workforce and decision-making structure.',
        'Gather perspectives and map the employee journey or process in scope.',
        'Co-design improvements with the teams responsible for delivery.',
        'Prepare implementation, communication and feedback routines.',
      ],
      [
        'Comprendre le contexte opérationnel, les effectifs et la structure décisionnelle.',
        'Recueillir les points de vue et cartographier le parcours ou le processus visé.',
        'Concevoir les améliorations avec les équipes responsables de leur mise en œuvre.',
        'Préparer la mise en œuvre, les communications et les mécanismes de rétroaction.',
      ],
    ),
    deliverables: localized(
      [
        'Employee-experience findings and priority themes.',
        'People-process recommendations and proposed tools.',
        'Leadership and change communication plan.',
        'Implementation roadmap with feedback measures.',
      ],
      [
        'Constats sur l’expérience du personnel et thèmes prioritaires.',
        'Recommandations sur les processus RH et outils proposés.',
        'Plan de communication pour les leaders et l’accompagnement du changement.',
        'Feuille de route de mise en œuvre avec mesures de rétroaction.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Can this work support a reorganization?',
          a: 'Yes. A scoped engagement can focus on employee experience, role clarity, consultation and change communication. Employment-law decisions and any required labour relations advice remain separate professional responsibilities.',
        },
        {
          q: 'Do you replace our HR team?',
          a: 'No replacement is assumed. The scope is designed around your team’s capacity, with agreed responsibilities for analysis, recommendations and implementation support.',
        },
        {
          q: 'How do you avoid a survey with no follow-through?',
          a: 'Before listening begins, we agree on who will receive findings, how decisions will be made and how employees will hear what happens next. Recommendations include owners and a practical review schedule.',
        },
      ],
      [
        {
          q: 'Cette démarche peut-elle soutenir une réorganisation?',
          a: 'Oui. Un mandat ciblé peut porter sur l’expérience du personnel, la clarté des rôles, la consultation et les communications liées au changement. Les décisions en droit du travail et les conseils nécessaires en relations de travail demeurent des responsabilités professionnelles distinctes.',
        },
        {
          q: 'Remplacez-vous notre équipe de ressources humaines?',
          a: 'Aucun remplacement n’est présumé. La portée tient compte de la capacité de votre équipe, avec des responsabilités convenues pour l’analyse, les recommandations et le soutien à la mise en œuvre.',
        },
        {
          q: 'Comment éviter un sondage sans suite?',
          a: 'Avant de consulter le personnel, nous convenons des destinataires des résultats, du processus décisionnel et de la façon de communiquer les suites. Les recommandations précisent les responsables et un calendrier de suivi réaliste.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'employee-experience',
        title: localized(
          'Culture and employee experience',
          'Culture et expérience du personnel',
        ),
        intro: localized(
          'Understand where the stated culture meets everyday experience.',
          'Comprendre l’écart entre la culture souhaitée et l’expérience quotidienne.',
        ),
        description: localized(
          'Use appropriately scoped listening, journey mapping and process review to identify moments that affect belonging, clarity and participation. Findings distinguish common themes from isolated observations and connect employee feedback to decisions the organization can make.',
          'Misez sur une consultation ciblée, la cartographie du parcours et l’analyse des processus pour repérer les moments qui influencent l’appartenance, la clarté et la participation. Les constats distinguent les thèmes récurrents des observations isolées et relient les commentaires aux décisions que l’organisation peut prendre.',
        ),
        deliverables: localized(
          [
            'Listening plan and employee-journey map.',
            'Findings summary with participation limitations.',
            'Prioritized improvements and employee feedback plan.',
          ],
          [
            'Plan de consultation et carte du parcours du personnel.',
            'Sommaire des constats précisant les limites de participation.',
            'Améliorations prioritaires et plan de retour au personnel.',
          ],
        ),
      },
      {
        slug: 'leadership-practices',
        title: localized(
          'Leadership and people-management practices',
          'Leadership et pratiques de gestion des personnes',
        ),
        intro: localized(
          'Translate expectations into actions managers can use.',
          'Transformer les attentes en gestes que les gestionnaires peuvent poser.',
        ),
        description: localized(
          'Clarify the behaviours and routines that support inclusive management: setting expectations, giving feedback, allocating opportunities and responding to concerns. Practical tools can be paired with training and team conversations to support consistent use.',
          'Clarifiez les comportements et les habitudes qui favorisent une gestion inclusive : définir les attentes, offrir de la rétroaction, répartir les possibilités et répondre aux préoccupations. Des outils pratiques peuvent être jumelés à de la formation et à des échanges d’équipe pour en favoriser une utilisation cohérente.',
        ),
        deliverables: localized(
          [
            'Agreed leadership behaviours and practice guide.',
            'Manager conversation and decision-support tools.',
            'Enablement plan and feedback measures.',
          ],
          [
            'Comportements de leadership convenus et guide de pratiques.',
            'Outils de conversation et d’aide à la décision pour les gestionnaires.',
            'Plan d’accompagnement et mesures de rétroaction.',
          ],
        ),
      },
      {
        slug: 'change-management',
        title: localized(
          'Change management and organizational alignment',
          'Gestion du changement et cohérence organisationnelle',
        ),
        intro: localized(
          'Help people understand the change and their part in it.',
          'Aider les personnes à comprendre le changement et leur rôle.',
        ),
        description: localized(
          'Assess who is affected by a planned change, what they need to know and what could make adoption difficult. Build a sequence of communication, involvement and support that fits the implementation timetable and gives decision-makers timely feedback.',
          'Déterminez qui est touché par un changement prévu, quels renseignements sont nécessaires et ce qui pourrait freiner l’adoption. Élaborez une séquence de communications, de participation et de soutien adaptée au calendrier de mise en œuvre, avec une rétroaction utile aux responsables des décisions.',
        ),
        deliverables: localized(
          [
            'Stakeholder and change-impact assessment.',
            'Communication, engagement and readiness plan.',
            'Adoption indicators and issue-escalation process.',
          ],
          [
            'Analyse des parties prenantes et des effets du changement.',
            'Plan de communication, de mobilisation et de préparation.',
            'Indicateurs d’adoption et processus de signalement des problèmes.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'training',
    number: '04',
    title: localized(
      'Training & capacity building',
      'Formation et renforcement des capacités',
    ),
    shortTitle: localized(
      'Training & development',
      'Formation et développement',
    ),
    intro: localized(
      'Learning that connects to the work people actually do.',
      'Un apprentissage ancré dans le travail réel.',
    ),
    description: localized(
      'Design learning around the situations your teams encounter, from inclusive leadership to accessible service delivery. We help define learning objectives, adapt content to the audience and build opportunities to practise. Follow-up tools connect a workshop with the decisions people make afterward.',
      'Concevez l’apprentissage en fonction des situations vécues par vos équipes, du leadership inclusif à la prestation de services accessibles. Nous précisons les objectifs, adaptons le contenu au public et prévoyons des occasions de mise en pratique. Les outils de suivi relient l’atelier aux décisions prises par la suite.',
    ),
    outcomes: localized(
      [
        'Learning objectives tied to real roles and responsibilities.',
        'Practical exercises and tools participants can apply.',
        'A way to assess understanding and support learning after the session.',
      ],
      [
        'Des objectifs d’apprentissage liés aux rôles et aux responsabilités réels.',
        'Des exercices et des outils que les personnes participantes peuvent utiliser.',
        'Une façon d’évaluer la compréhension et de soutenir les apprentissages après la séance.',
      ],
    ),
    process: localized(
      [
        'Agree on the audience, learning needs, language and delivery format.',
        'Develop relevant scenarios and accessible participant materials.',
        'Facilitate learning with discussion and practical application.',
        'Review feedback and provide tools for follow-through.',
      ],
      [
        'Convenir du public, des besoins, de la langue et du mode de prestation.',
        'Élaborer des mises en situation pertinentes et du matériel accessible.',
        'Animer l’apprentissage par la discussion et la mise en pratique.',
        'Examiner les commentaires et fournir des outils de suivi.',
      ],
    ),
    deliverables: localized(
      [
        'Learning needs summary and session objectives.',
        'Adapted workshop content and participant materials.',
        'Practical exercises, discussion guides and take-away tools.',
        'Feedback summary and recommendations for continued learning.',
      ],
      [
        'Sommaire des besoins et objectifs de la séance.',
        'Contenu d’atelier adapté et matériel pour les personnes participantes.',
        'Exercices, guides de discussion et outils à réutiliser.',
        'Synthèse des commentaires et recommandations pour poursuivre l’apprentissage.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Can training be delivered in English and French?',
          a: 'Language requirements, facilitator availability and translation or adaptation needs are confirmed in the proposal. Tell us whether you need separate sessions, bilingual materials or a bilingual delivery format.',
        },
        {
          q: 'Is the training accredited?',
          a: 'No accreditation is claimed. Any attendance record or completion acknowledgement is described accurately in the agreed scope and is not presented as a professional qualification.',
        },
        {
          q: 'Can you tailor a session to our policies and sector?',
          a: 'Yes. Provide the relevant policies, audience profile and learning goals during scoping. Content can use realistic, anonymized scenarios without exposing confidential employee or client information.',
        },
      ],
      [
        {
          q: 'La formation peut-elle être offerte en français et en anglais?',
          a: 'Les exigences linguistiques, la disponibilité des personnes responsables de l’animation et les besoins de traduction ou d’adaptation sont confirmés dans la proposition. Précisez si vous souhaitez des séances distinctes, du matériel bilingue ou une prestation bilingue.',
        },
        {
          q: 'La formation est-elle accréditée?',
          a: 'Aucune accréditation n’est revendiquée. Toute attestation de participation ou de réalisation est décrite avec exactitude dans la portée convenue et n’est pas présentée comme une qualification professionnelle.',
        },
        {
          q: 'Pouvez-vous adapter une séance à nos politiques et à notre secteur?',
          a: 'Oui. Fournissez les politiques pertinentes, le profil du public et les objectifs d’apprentissage lors de la définition du mandat. Des mises en situation réalistes et anonymisées peuvent être utilisées sans divulguer de renseignements confidentiels sur le personnel ou la clientèle.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'inclusive-leadership',
        title: localized(
          'Inclusive leadership workshops',
          'Ateliers de leadership inclusif',
        ),
        intro: localized(
          'Practise the conversations and decisions that shape team experience.',
          'S’exercer aux conversations et aux décisions qui façonnent l’expérience des équipes.',
        ),
        description: localized(
          'Build a session around leadership situations such as allocating opportunities, navigating disagreement, giving feedback and creating space for participation. Participants examine decision-making habits, work through scenarios and identify changes they can make within their role.',
          'Structurez une séance autour de situations de leadership : répartir les possibilités, aborder les désaccords, offrir de la rétroaction et favoriser la participation. Les personnes participantes examinent leurs habitudes décisionnelles, travaillent sur des mises en situation et déterminent les changements possibles dans leur rôle.',
        ),
        deliverables: localized(
          [
            'Role-specific learning objectives and scenarios.',
            'Facilitated workshop and participant workbook.',
            'Individual action-planning tool and team follow-up prompts.',
          ],
          [
            'Objectifs et mises en situation adaptés aux rôles.',
            'Atelier animé et cahier de participation.',
            'Outil de planification individuelle et pistes de suivi en équipe.',
          ],
        ),
      },
      {
        slug: 'accessible-service',
        title: localized(
          'Accessibility and inclusive service learning',
          'Formation en accessibilité et en service inclusif',
        ),
        intro: localized(
          'Help front-line teams respond with clarity, dignity and flexibility.',
          'Aider les équipes de première ligne à répondre avec clarté, dignité et souplesse.',
        ),
        description: localized(
          'Focus on accessible communication, service barriers and responding appropriately when a person requests support. Use examples from your service environment and clarify when staff should act, seek guidance or use an established accommodation process.',
          'Mettez l’accent sur les communications accessibles, les obstacles au service et les réponses appropriées lorsqu’une personne demande du soutien. Utilisez des exemples de votre milieu et précisez quand le personnel peut agir, demander conseil ou suivre un processus établi de mesures d’adaptation.',
        ),
        deliverables: localized(
          [
            'Service-specific curriculum and practical scenarios.',
            'Accessible communication and response tools.',
            'Knowledge checks and recommendations for ongoing practice.',
          ],
          [
            'Programme adapté aux services et mises en situation pratiques.',
            'Outils de communication accessible et d’intervention.',
            'Vérifications des acquis et recommandations pour poursuivre la pratique.',
          ],
        ),
      },
      {
        slug: 'learning-programs',
        title: localized(
          'Custom learning programs and internal capacity',
          'Parcours de formation sur mesure et capacités internes',
        ),
        intro: localized(
          'Build a learning sequence that extends beyond one workshop.',
          'Créer un parcours d’apprentissage qui va au-delà d’un atelier.',
        ),
        description: localized(
          'Map learning needs across roles and create a sequence of sessions, practice activities and supporting resources. Where appropriate, prepare internal champions or facilitators to reinforce agreed practices, with clear boundaries around the expertise required for specialist topics.',
          'Établissez les besoins selon les rôles, puis créez une séquence de séances, d’activités de mise en pratique et de ressources. Au besoin, préparez des personnes-ressources ou des animateurs internes à soutenir les pratiques convenues, en précisant les limites et l’expertise nécessaire pour les sujets spécialisés.',
        ),
        deliverables: localized(
          [
            'Learning pathway and delivery plan.',
            'Reusable materials and facilitator guidance.',
            'Evaluation framework and maintenance responsibilities.',
          ],
          [
            'Parcours d’apprentissage et plan de prestation.',
            'Matériel réutilisable et guide d’animation.',
            'Cadre d’évaluation et responsabilités de mise à jour.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'supplier-diversity',
    number: '05',
    title: localized(
      'Supplier diversity & procurement',
      'Diversité des fournisseurs et approvisionnement',
    ),
    shortTitle: localized('Supplier diversity', 'Diversité des fournisseurs'),
    intro: localized(
      'Open pathways to opportunity through better procurement practices.',
      'Créer des possibilités grâce à de meilleures pratiques d’approvisionnement.',
    ),
    description: localized(
      'Examine how suppliers learn about opportunities, meet requirements and participate in procurement. We help organizations design supplier diversity approaches, review unnecessary barriers and connect program intentions with practical sourcing, engagement and reporting processes. Recommendations are tailored to the rules and governance that apply to your organization.',
      'Examinez comment les fournisseurs découvrent les possibilités, répondent aux exigences et participent aux processus d’approvisionnement. Nous aidons les organisations à concevoir leur démarche de diversité des fournisseurs, à repérer les obstacles évitables et à traduire leurs intentions en pratiques de recherche, de mobilisation et de suivi. Les recommandations tiennent compte des règles et de la gouvernance applicables.',
    ),
    outcomes: localized(
      [
        'A supplier diversity approach aligned with purchasing objectives and rules.',
        'Clearer, more accessible pathways for suppliers to participate.',
        'Consistent definitions and reporting for program decisions.',
      ],
      [
        'Une démarche de diversité des fournisseurs cohérente avec les objectifs et les règles d’achat.',
        'Des voies de participation plus claires et accessibles pour les fournisseurs.',
        'Des définitions et un suivi cohérents pour orienter le programme.',
      ],
    ),
    process: localized(
      [
        'Review purchasing context, categories, policies and applicable constraints.',
        'Map supplier participation barriers and opportunities for engagement.',
        'Design program criteria, governance and practical sourcing processes.',
        'Develop implementation tools and a proportionate measurement approach.',
      ],
      [
        'Examiner le contexte d’achat, les catégories, les politiques et les contraintes applicables.',
        'Repérer les obstacles à la participation et les possibilités de mobilisation.',
        'Concevoir les critères du programme, sa gouvernance et ses processus de recherche de fournisseurs.',
        'Élaborer des outils de mise en œuvre et une méthode de mesure proportionnée.',
      ],
    ),
    deliverables: localized(
      [
        'Procurement process and supplier-access review.',
        'Supplier diversity program framework and responsibilities.',
        'Engagement plan and purchasing-team tools.',
        'Data definitions, reporting templates and review schedule.',
      ],
      [
        'Examen du processus d’approvisionnement et de l’accès des fournisseurs.',
        'Cadre du programme de diversité des fournisseurs et responsabilités.',
        'Plan de mobilisation et outils pour les équipes d’achat.',
        'Définitions des données, modèles de suivi et calendrier de révision.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Do you certify diverse suppliers?',
          a: 'No. Supplier certification, eligibility and verification requirements are defined separately. We can help you document an appropriate recognition and verification approach without representing Diversity.ca as a certifying body.',
        },
        {
          q: 'Can public-sector procurement teams use this service?',
          a: 'Yes. The scope must reflect your procurement policies, applicable trade obligations and approval processes. Recommendations that affect eligibility or evaluation should receive your organization’s required procurement and legal review.',
        },
        {
          q: 'Does participation guarantee contracts for suppliers?',
          a: 'No. Engagement can improve access to information and participation opportunities, but awards remain subject to the buyer’s stated procurement process and requirements.',
        },
      ],
      [
        {
          q: 'Certifiez-vous les fournisseurs issus de la diversité?',
          a: 'Non. Les exigences de certification, d’admissibilité et de vérification sont définies séparément. Nous pouvons aider à documenter une méthode de reconnaissance et de vérification appropriée sans présenter Diversity.ca comme un organisme de certification.',
        },
        {
          q: 'Ce service convient-il aux équipes d’approvisionnement public?',
          a: 'Oui. La portée doit tenir compte de vos politiques d’approvisionnement, des obligations commerciales applicables et des processus d’approbation. Toute recommandation touchant l’admissibilité ou l’évaluation devrait faire l’objet des examens internes requis en approvisionnement et en droit.',
        },
        {
          q: 'La participation garantit-elle des contrats aux fournisseurs?',
          a: 'Non. La mobilisation peut améliorer l’accès à l’information et aux possibilités de participation. L’attribution des contrats demeure soumise au processus et aux exigences annoncés par l’acheteur.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'program-design',
        title: localized(
          'Supplier diversity program design',
          'Conception de programmes de diversité des fournisseurs',
        ),
        intro: localized(
          'Build a program that purchasing teams can put into practice.',
          'Concevoir un programme que les équipes d’achat peuvent mettre en pratique.',
        ),
        description: localized(
          'Define program objectives, supplier categories, governance and appropriate recognition criteria. Connect the program with existing procurement processes so responsibilities, verification needs and decision points are understood before launch.',
          'Définissez les objectifs, les catégories de fournisseurs, la gouvernance et les critères de reconnaissance appropriés. Reliez le programme aux processus d’approvisionnement existants pour clarifier les responsabilités, les besoins de vérification et les décisions à prendre avant le lancement.',
        ),
        deliverables: localized(
          [
            'Program charter and scope.',
            'Recognition, verification and governance recommendations.',
            'Phased implementation plan and purchasing-team guidance.',
          ],
          [
            'Charte et portée du programme.',
            'Recommandations sur la reconnaissance, la vérification et la gouvernance.',
            'Plan de mise en œuvre progressif et guide pour les équipes d’achat.',
          ],
        ),
      },
      {
        slug: 'supplier-engagement',
        title: localized(
          'Supplier engagement and accessible sourcing',
          'Mobilisation des fournisseurs et recherche accessible',
        ),
        intro: localized(
          'Make opportunities easier to understand and navigate.',
          'Rendre les possibilités plus faciles à comprendre et à saisir.',
        ),
        description: localized(
          'Review how opportunities are communicated and how suppliers enter the process. Design information sessions, accessible guidance and feedback opportunities while keeping procurement communications consistent with fairness, confidentiality and your organization’s rules.',
          'Examinez la communication des possibilités et l’entrée des fournisseurs dans le processus. Concevez des séances d’information, des guides accessibles et des occasions de rétroaction, tout en respectant l’équité, la confidentialité et les règles de votre organisation.',
        ),
        deliverables: localized(
          [
            'Supplier-journey review and engagement plan.',
            'Accessible opportunity and onboarding guidance.',
            'Feedback collection tools and improvement recommendations.',
          ],
          [
            'Examen du parcours des fournisseurs et plan de mobilisation.',
            'Guides accessibles sur les possibilités et l’intégration.',
            'Outils de rétroaction et recommandations d’amélioration.',
          ],
        ),
      },
      {
        slug: 'procurement-measurement',
        title: localized(
          'Procurement measurement and reporting',
          'Mesure et suivi de l’approvisionnement',
        ),
        intro: localized(
          'Use consistent information to see participation and purchasing patterns.',
          'Utiliser des renseignements cohérents pour comprendre la participation et les achats.',
        ),
        description: localized(
          'Define what the program needs to measure and what the available data can support. Establish definitions for participation, supplier recognition and spending, note data gaps and design reports that avoid overstating reach or impact.',
          'Déterminez ce que le programme doit mesurer et ce que les données disponibles permettent d’établir. Définissez la participation, la reconnaissance des fournisseurs et les dépenses, signalez les lacunes et concevez des rapports qui ne surestiment ni la portée ni les retombées.',
        ),
        deliverables: localized(
          [
            'Measurement framework and data dictionary.',
            'Data-quality review and collection recommendations.',
            'Reporting template with interpretation notes and limitations.',
          ],
          [
            'Cadre de mesure et dictionnaire des données.',
            'Examen de la qualité des données et recommandations de collecte.',
            'Modèle de rapport avec notes d’interprétation et limites.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'social-impact',
    number: '06',
    title: localized(
      'Social impact & sustainability',
      'Impact social et développement durable',
    ),
    shortTitle: localized('Social impact', 'Impact social'),
    intro: localized(
      'Connect responsible intentions with credible, measurable action.',
      'Relier les intentions responsables à des actions crédibles et mesurables.',
    ),
    description: localized(
      'Bring greater clarity to the social outcomes your organization wants to support. We help frame priorities, listen to affected stakeholders and design practical approaches to social procurement, community initiatives and reporting. Measurement starts with an honest account of what can be demonstrated.',
      'Précisez les retombées sociales que votre organisation souhaite favoriser. Nous aidons à définir les priorités, à écouter les parties prenantes concernées et à concevoir des démarches concrètes d’approvisionnement social, d’initiatives communautaires et de reddition de comptes. La mesure commence par une description honnête de ce qui peut être démontré.',
    ),
    outcomes: localized(
      [
        'Social priorities connected to organizational decisions and stakeholder needs.',
        'An action framework that distinguishes activities from intended outcomes.',
        'Reporting that makes evidence, assumptions and limitations visible.',
      ],
      [
        'Des priorités sociales liées aux décisions de l’organisation et aux besoins des parties prenantes.',
        'Un cadre d’action distinguant les activités des résultats visés.',
        'Des rapports qui rendent visibles les données probantes, les hypothèses et les limites.',
      ],
    ),
    process: localized(
      [
        'Clarify the decision, initiative or reporting need and the people affected.',
        'Gather stakeholder perspectives using a proportionate engagement plan.',
        'Define intended outcomes, activities, responsibilities and measures.',
        'Prepare implementation and reporting tools, with an explicit evidence standard.',
      ],
      [
        'Préciser la décision, l’initiative ou le besoin de suivi, ainsi que les personnes concernées.',
        'Recueillir les points de vue à l’aide d’un plan de consultation proportionné.',
        'Définir les résultats visés, les activités, les responsabilités et les mesures.',
        'Préparer les outils de mise en œuvre et de suivi avec des exigences explicites en matière de preuves.',
      ],
    ),
    deliverables: localized(
      [
        'Stakeholder map and engagement findings.',
        'Social impact priorities and a practical action framework.',
        'Outcome map, indicator definitions and collection plan.',
        'Reporting structure with evidence and claims-review guidance.',
      ],
      [
        'Carte des parties prenantes et constats de consultation.',
        'Priorités d’impact social et cadre d’action concret.',
        'Carte des résultats, définition des indicateurs et plan de collecte.',
        'Structure de rapport et guide de validation des preuves et des affirmations.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Does this include environmental certification or assurance?',
          a: 'No certification, audit assurance or specialist environmental assessment is implied. Any environmental measurement, regulated advice or external assurance requirement must be scoped with appropriately qualified specialists.',
        },
        {
          q: 'Can you help define social procurement outcomes?',
          a: 'Yes. Work can connect purchasing decisions with intended social benefits, identify feasible measures and clarify the evidence needed. Recommendations must fit the buyer’s procurement framework.',
        },
        {
          q: 'How do you avoid overstating impact?',
          a: 'We distinguish what was done, who participated and what changed. Reports identify the source and limits of evidence and avoid claiming that an initiative caused an outcome when the available information does not support that conclusion.',
        },
      ],
      [
        {
          q: 'Le service comprend-il une certification environnementale ou une mission d’assurance?',
          a: 'Aucune certification, assurance d’audit ou évaluation environnementale spécialisée n’est implicite. Les besoins de mesure environnementale, de conseils réglementés ou d’assurance externe doivent être définis avec des spécialistes possédant les qualifications appropriées.',
        },
        {
          q: 'Pouvez-vous aider à définir les retombées de l’approvisionnement social?',
          a: 'Oui. Le mandat peut relier les décisions d’achat aux avantages sociaux visés, déterminer des mesures réalisables et préciser les preuves nécessaires. Les recommandations doivent respecter le cadre d’approvisionnement de l’acheteur.',
        },
        {
          q: 'Comment éviter de surestimer l’impact?',
          a: 'Nous distinguons les activités réalisées, la participation et les changements observés. Les rapports précisent les sources et les limites des données et évitent d’attribuer un résultat à une initiative lorsque les renseignements disponibles ne permettent pas cette conclusion.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'stakeholder-engagement',
        title: localized(
          'Stakeholder engagement and material priorities',
          'Consultation des parties prenantes et priorités essentielles',
        ),
        intro: localized(
          'Listen with a clear purpose and explain how input will be used.',
          'Écouter avec un objectif clair et expliquer l’utilisation des commentaires.',
        ),
        description: localized(
          'Identify who is affected by an initiative, what decisions their input can inform and what accessible participation requires. Design engagement that makes the purpose, limits and follow-up clear, then synthesize themes without presenting consultation as universal agreement.',
          'Déterminez qui est touché par une initiative, quelles décisions peuvent être éclairées par les commentaires et quelles conditions favorisent une participation accessible. Concevez une consultation dont l’objectif, les limites et les suites sont clairs, puis synthétisez les thèmes sans assimiler la consultation à un consensus général.',
        ),
        deliverables: localized(
          [
            'Stakeholder map and accessible engagement plan.',
            'Discussion materials and findings synthesis.',
            'Decision implications and participant follow-up approach.',
          ],
          [
            'Carte des parties prenantes et plan de consultation accessible.',
            'Matériel de discussion et synthèse des constats.',
            'Implications pour les décisions et démarche de retour aux personnes participantes.',
          ],
        ),
      },
      {
        slug: 'social-procurement',
        title: localized(
          'Social procurement strategy',
          'Stratégie d’approvisionnement social',
        ),
        intro: localized(
          'Explore how purchasing can support defined social objectives.',
          'Examiner comment les achats peuvent soutenir des objectifs sociaux définis.',
        ),
        description: localized(
          'Review purchasing categories and opportunities to consider social value within the rules that apply. Define feasible objectives, evaluation considerations and supplier reporting expectations, with appropriate internal procurement and legal review before adoption.',
          'Examinez les catégories d’achat et les possibilités de considérer la valeur sociale dans le respect des règles applicables. Définissez des objectifs réalisables, des éléments d’évaluation et des attentes de suivi pour les fournisseurs, sous réserve des examens internes appropriés en approvisionnement et en droit avant l’adoption.',
        ),
        deliverables: localized(
          [
            'Opportunity assessment by purchasing category.',
            'Proposed social-value criteria and implementation considerations.',
            'Pilot plan and outcome-reporting framework.',
          ],
          [
            'Évaluation des possibilités par catégorie d’achat.',
            'Critères de valeur sociale proposés et considérations de mise en œuvre.',
            'Plan de projet pilote et cadre de suivi des résultats.',
          ],
        ),
      },
      {
        slug: 'impact-measurement',
        title: localized(
          'Impact planning and reporting',
          'Planification et suivi de l’impact',
        ),
        intro: localized(
          'Tell a clearer story about what changed and what remains uncertain.',
          'Présenter clairement les changements observés et les incertitudes.',
        ),
        description: localized(
          'Build a practical connection between resources, activities and intended outcomes. Select indicators, identify information sources and agree on review responsibilities. Develop reporting that shows progress and limitations together, rather than treating activity counts as proof of long-term impact.',
          'Établissez un lien concret entre les ressources, les activités et les résultats visés. Choisissez des indicateurs, déterminez les sources d’information et convenez des responsabilités de suivi. Concevez des rapports qui présentent à la fois les progrès et les limites, sans assimiler le nombre d’activités à une preuve d’impact à long terme.',
        ),
        deliverables: localized(
          [
            'Outcome map and measurement plan.',
            'Indicator definitions and evidence register.',
            'Reporting template and review process.',
          ],
          [
            'Carte des résultats et plan de mesure.',
            'Définition des indicateurs et registre des éléments probants.',
            'Modèle de rapport et processus de révision.',
          ],
        ),
      },
    ],
  },
  {
    slug: 'implementation',
    number: '07',
    title: localized(
      'Accessibility solutions & implementation',
      'Solutions d’accessibilité et mise en œuvre',
    ),
    shortTitle: localized(
      'Solutions & implementation',
      'Solutions et mise en œuvre',
    ),
    intro: localized(
      'Move from a barrier assessment to a coordinated plan of action.',
      'Passer de l’évaluation des obstacles à une mise en œuvre coordonnée.',
    ),
    description: localized(
      'Bring together the requirements, products, people and decisions needed to act on accessibility priorities. We help scope product sourcing, signage, wayfinding and barrier-removal projects, then coordinate delivery with appropriately qualified partners. Product suitability, technical design, permits and specialist installation responsibilities are confirmed for each project.',
      'Réunissez les exigences, les produits, les personnes et les décisions nécessaires pour agir sur vos priorités d’accessibilité. Nous aidons à définir les besoins d’approvisionnement, de signalisation, d’orientation et d’élimination des obstacles, puis à coordonner les travaux avec des partenaires ayant les qualifications appropriées. L’adéquation des produits, la conception technique, les permis et les responsabilités d’installation spécialisée sont précisés pour chaque projet.',
    ),
    outcomes: localized(
      [
        'A clear scope connecting assessed barriers with proposed solutions.',
        'Coordinated purchasing and installation responsibilities.',
        'A documented handover with maintenance and verification needs.',
      ],
      [
        'Une portée claire reliant les obstacles évalués aux solutions proposées.',
        'Des responsabilités coordonnées pour les achats et l’installation.',
        'Une remise documentée précisant les besoins d’entretien et de vérification.',
      ],
    ),
    process: localized(
      [
        'Review assessment findings, site conditions and the intended user experience.',
        'Define requirements, technical dependencies and partner responsibilities.',
        'Coordinate sourcing, scheduling, installation interfaces and decisions.',
        'Organize verification, documentation and handover to the responsible team.',
      ],
      [
        'Examiner les constats, les conditions du site et l’expérience utilisateur visée.',
        'Définir les exigences, les dépendances techniques et les responsabilités des partenaires.',
        'Coordonner l’approvisionnement, l’échéancier, les interfaces d’installation et les décisions.',
        'Organiser la vérification, la documentation et la remise à l’équipe responsable.',
      ],
    ),
    deliverables: localized(
      [
        'Requirements brief and proposed solution scope.',
        'Sourcing comparisons and partner responsibility matrix.',
        'Implementation schedule, decision log and issue register.',
        'Handover checklist with warranties, maintenance and verification records as available.',
      ],
      [
        'Document d’exigences et portée des solutions proposées.',
        'Comparaisons d’approvisionnement et matrice des responsabilités des partenaires.',
        'Calendrier de mise en œuvre, registre des décisions et suivi des enjeux.',
        'Liste de remise comprenant les garanties et les documents d’entretien et de vérification disponibles.',
      ],
    ),
    faq: localized(
      [
        {
          q: 'Who carries out regulated or specialist installation?',
          a: 'Appropriately qualified partners perform work that requires specific licensing, technical qualifications or permits. The proposal identifies delivery roles; we do not represent coordination as licensed trade or engineering work.',
        },
        {
          q: 'Can you supply automatic door operators and signage?',
          a: 'Product sourcing and supply can be scoped around verified requirements. Availability, compatibility, pricing, warranty and installation are confirmed in the proposal; this site is not a live product catalogue.',
        },
        {
          q: 'Can a product alone make a facility accessible?',
          a: 'No single product establishes accessibility across a facility. The solution must be considered within the full user journey, site conditions, applicable requirements and ongoing maintenance arrangements.',
        },
      ],
      [
        {
          q: 'Qui réalise les installations réglementées ou spécialisées?',
          a: 'Des partenaires ayant les qualifications appropriées effectuent les travaux nécessitant des permis, des licences ou une expertise technique particulière. La proposition précise les rôles de prestation; la coordination n’est pas présentée comme un travail de métier réglementé ou d’ingénierie.',
        },
        {
          q: 'Pouvez-vous fournir des ouvre-portes automatiques et de la signalisation?',
          a: 'La recherche et la fourniture de produits peuvent être définies selon des exigences vérifiées. La disponibilité, la compatibilité, les prix, les garanties et l’installation sont confirmés dans la proposition. Ce site ne constitue pas un catalogue de produits en temps réel.',
        },
        {
          q: 'Un produit peut-il à lui seul rendre un lieu accessible?',
          a: 'Un seul produit ne permet pas d’établir l’accessibilité de tout un lieu. La solution doit être examinée en fonction du parcours complet, des conditions du site, des exigences applicables et des dispositions d’entretien.',
        },
      ],
    ),
    subservices: [
      {
        slug: 'product-sourcing',
        title: localized(
          'Accessibility product sourcing and supply',
          'Recherche et fourniture de produits d’accessibilité',
        ),
        intro: localized(
          'Start with the need, then assess the product options.',
          'Définir le besoin avant d’évaluer les produits.',
        ),
        description: localized(
          'Translate agreed accessibility requirements into a sourcing brief for products such as automatic door operators, assistive fixtures and supporting equipment. Compare suitability, technical dependencies, supplier information and maintenance considerations before a purchase decision.',
          'Transformez les exigences d’accessibilité convenues en un document d’approvisionnement pour des produits comme les ouvre-portes automatiques, les équipements d’assistance et les accessoires connexes. Comparez l’adéquation, les dépendances techniques, les renseignements des fournisseurs et les besoins d’entretien avant la décision d’achat.',
        ),
        deliverables: localized(
          [
            'Product requirements and compatibility questions.',
            'Options comparison with supplier information and limitations.',
            'Procurement, warranty and installation coordination checklist.',
          ],
          [
            'Exigences des produits et questions de compatibilité.',
            'Comparaison des options avec renseignements des fournisseurs et limites.',
            'Liste de coordination des achats, des garanties et de l’installation.',
          ],
        ),
      },
      {
        slug: 'signage-wayfinding',
        title: localized(
          'Accessible signage and wayfinding',
          'Signalisation et orientation accessibles',
        ),
        intro: localized(
          'Help people understand where they are and where to go next.',
          'Aider les personnes à se situer et à trouver leur chemin.',
        ),
        description: localized(
          'Review routes, decision points and information needs to define a coordinated signage approach. Consider language, readability, visual contrast and appropriate tactile information within the project scope, then coordinate design, production and installation with the relevant specialists.',
          'Examinez les parcours, les points de décision et les besoins d’information pour définir une approche cohérente de signalisation. Considérez la langue, la lisibilité, le contraste visuel et l’information tactile pertinente selon la portée, puis coordonnez la conception, la production et l’installation avec les spécialistes concernés.',
        ),
        deliverables: localized(
          [
            'Wayfinding review and sign-location plan.',
            'Content and performance requirements for design.',
            'Production, placement and verification coordination checklist.',
          ],
          [
            'Examen de l’orientation et plan d’emplacement des panneaux.',
            'Exigences de contenu et de performance pour la conception.',
            'Liste de coordination de la production, de l’installation et de la vérification.',
          ],
        ),
      },
      {
        slug: 'project-coordination',
        title: localized(
          'Barrier-removal project coordination',
          'Coordination de projets d’élimination des obstacles',
        ),
        intro: localized(
          'Keep the scope, decisions and delivery responsibilities connected.',
          'Assurer la cohérence entre la portée, les décisions et les responsabilités.',
        ),
        description: localized(
          'Coordinate an agreed program of accessibility improvements across internal teams, suppliers and qualified installers. Track dependencies, scheduling, decisions and unresolved issues while maintaining a clear distinction between coordination and the regulated responsibilities of designers and trades.',
          'Coordonnez un programme convenu d’améliorations de l’accessibilité entre les équipes internes, les fournisseurs et les installateurs qualifiés. Suivez les dépendances, l’échéancier, les décisions et les enjeux en suspens, tout en distinguant clairement la coordination des responsabilités réglementées des concepteurs et des gens de métier.',
        ),
        deliverables: localized(
          [
            'Project scope, schedule and responsibility matrix.',
            'Decision log, issue register and progress updates.',
            'Handover package and outstanding-items list.',
          ],
          [
            'Portée, échéancier et matrice des responsabilités.',
            'Registre des décisions, suivi des enjeux et comptes rendus d’avancement.',
            'Dossier de remise et liste des éléments à compléter.',
          ],
        ),
      },
    ],
  },
];
