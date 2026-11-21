import type { ContentPage } from './pages';
const l = (en: string, fr: string) => ({ en, fr });

export const ideaAdvisory: ContentPage = {
  slug: 'idea-advisory',
  eyebrow: l('INCLUSION IN PRACTICE', 'L’INCLUSION EN PRATIQUE'),
  title: l(
    'IDEA advisory. Tools your teams can use.',
    'Conseil en inclusion. Des outils pour vos équipes.',
  ),
  intro: l(
    'Inclusion, diversity, equity and accessibility (IDEA) advisory for Canadian organizations. Turn an existing commitment into clearer decisions, more accessible services and a practical plan your team can maintain.',
    'Services-conseils en inclusion, diversité, équité et accessibilité (IDEA) pour les organisations canadiennes. Traduisez vos engagements en décisions éclairées, en services plus accessibles et en un plan que votre équipe peut maintenir.',
  ),
  cta: {
    label: l('SCOPE AN IDEA PROJECT', 'DÉFINIR UN MANDAT EN IDEA'),
    path: '/request-proposal/?service=dei',
  },
  sections: [
    {
      heading: l(
        'Start with the decision you need to make',
        'Partir de la décision à prendre',
      ),
      body: l(
        'An existing plan may need a usable tool, a focused review or help with implementation. Define the priority service, policy or employee experience first. We can scope a single workstream or combine related priorities into one engagement.',
        'Un plan existant peut nécessiter un outil pratique, un examen ciblé ou un soutien à la mise en œuvre. Précisez d’abord le service, la politique ou l’expérience du personnel à améliorer. Le mandat peut viser un volet précis ou regrouper plusieurs priorités connexes.',
      ),
      items: {
        en: [
          'A policy or decision tool that staff find difficult to apply.',
          'Programs that are not reaching the people they are intended to serve.',
          'Public information that is hard to find, understand or use.',
          'Recommendations that need owners, resources and measures of progress.',
        ],
        fr: [
          'Une politique ou un outil décisionnel difficile à appliquer.',
          'Des programmes qui rejoignent mal les personnes visées.',
          'De l’information publique difficile à trouver, à comprendre ou à utiliser.',
          'Des recommandations à assortir de responsables, de ressources et d’indicateurs.',
        ],
      },
    },
    {
      heading: l(
        'Inclusion lenses and decision tools',
        'Grilles d’analyse inclusive et outils décisionnels',
      ),
      body: l(
        'An inclusion lens is a set of prompts that helps staff consider who benefits, who may face barriers and what could change before making a decision. A scoped engagement can review your existing tool, compare relevant practices and test a draft against real staff scenarios.',
        'Une grille d’analyse inclusive aide le personnel à examiner qui bénéficie d’une décision, qui pourrait rencontrer des obstacles et quelles adaptations envisager. Un mandat ciblé peut comprendre la révision de votre outil, la comparaison de pratiques pertinentes et la mise à l’essai d’une version provisoire dans des situations concrètes.',
      ),
      items: {
        en: [
          'Revised decision prompts and an editable tool.',
          'Plain-language guidance with worked examples.',
          'A staff pilot, feedback summary and agreed revisions.',
          'Adoption guidance and a named internal owner.',
        ],
        fr: [
          'Questions décisionnelles révisées et outil modifiable.',
          'Guide en langage clair accompagné d’exemples.',
          'Essai avec le personnel, synthèse des commentaires et révisions convenues.',
          'Conseils d’adoption et responsable interne désigné.',
        ],
      },
    },
    {
      heading: l(
        'Community participation and barriers to access',
        'Participation communautaire et obstacles à l’accès',
      ),
      body: l(
        'Listen to staff, service users, community partners and people whose perspectives are often missed. Review a defined sample of programs or service journeys to understand how language, cost, accessibility, trust, timing and operating practices affect participation. Agree on accessible engagement methods and information-handling rules before consultation.',
        'Consultez le personnel, les usagers, les partenaires communautaires et les personnes dont le point de vue est peu représenté. Examinez un échantillon défini de programmes ou de parcours pour comprendre les effets de la langue, des coûts, de l’accessibilité, de la confiance, des horaires et des pratiques opérationnelles sur la participation. Convenez des méthodes de consultation accessibles et des règles de gestion de l’information avant les échanges.',
      ),
      items: {
        en: [
          'Targeted engagement plan and summary of what was heard.',
          'Barrier map with evidence, gaps and practical responses.',
          'Community program and partnership recommendations.',
          'Recognition-date principles that consider community input and organizational governance.',
        ],
        fr: [
          'Plan de consultation ciblée et synthèse des points de vue recueillis.',
          'Portrait des obstacles, des constats, des lacunes et des réponses possibles.',
          'Recommandations sur les programmes et les partenariats communautaires.',
          'Principes de reconnaissance des dates significatives tenant compte de la communauté et de la gouvernance.',
        ],
      },
    },
    {
      heading: l(
        'Communications people can understand and use',
        'Des communications faciles à comprendre et à utiliser',
      ),
      body: l(
        'Assess how people discover a program, understand eligibility and take the next step. Review plain language, cognitive accessibility, cultural relevance, channel choices and language needs. Prioritize accessible web content and define document testing and acceptance requirements when PDFs are needed.',
        'Examinez comment les personnes découvrent un programme, comprennent les critères d’admissibilité et passent à l’étape suivante. Analysez le langage clair, l’accessibilité cognitive, la pertinence culturelle, les canaux et les besoins linguistiques. Privilégiez le contenu Web accessible et définissez les tests et les critères d’acceptation lorsque des PDF sont nécessaires.',
      ),
      items: {
        en: [
          'Audience, message and channel recommendations.',
          'A prioritized content-improvement brief with example revisions.',
          'Agreed accessibility criteria, review methods and format requirements.',
          'Measures such as task completion, comprehension and participation.',
        ],
        fr: [
          'Recommandations sur les publics, les messages et les canaux.',
          'Cahier d’amélioration du contenu avec priorités et exemples de révision.',
          'Critères d’accessibilité, méthodes de vérification et formats convenus.',
          'Indicateurs de réalisation des démarches, de compréhension et de participation.',
        ],
      },
    },
    {
      heading: l(
        'One connected roadmap, with a workable handover',
        'Une feuille de route cohérente et un transfert utile',
      ),
      body: l(
        'Bring research, benchmarking and engagement findings together in a decision-ready report. Distinguish actions possible with existing resources from those needing funding, specialist support or partnerships. Set priorities around operational feasibility and the capacity to maintain the changes.',
        'Réunissez la recherche, l’analyse comparative et la consultation dans un rapport qui facilite la décision. Distinguez les actions réalisables avec les ressources actuelles de celles qui nécessitent du financement, des spécialistes ou des partenariats. Priorisez selon la faisabilité et la capacité de maintenir les changements.',
      ),
      items: {
        en: [
          'Phased priorities with owners, dependencies and resource implications.',
          'Success indicators, available baselines and a review schedule.',
          'Editable source files, supporting guidance and a staff handover.',
          'Agreed review rounds, acceptance criteria and ownership of deliverables.',
        ],
        fr: [
          'Priorités par étapes avec responsables, dépendances et besoins en ressources.',
          'Indicateurs, données de départ disponibles et calendrier de suivi.',
          'Fichiers sources modifiables, documentation et transfert au personnel.',
          'Cycles de révision, critères d’acceptation et propriété des livrables convenus.',
        ],
      },
    },
    {
      heading: l(
        'Define the scope before the work begins',
        'Définir le mandat avant de commencer',
      ),
      body: l(
        'Share your existing plan, priority decisions, intended participants, timeline and budget parameters. The proposal will define the work, delivery team, specialist roles, consultation quantities, language and travel needs, meeting rhythm and deliverables. Qualifications and relevant references are confirmed for the proposed team before an engagement is agreed.',
        'Présentez votre plan actuel, les décisions prioritaires, les personnes à consulter, l’échéancier et les paramètres budgétaires. La proposition précisera les travaux, l’équipe, les rôles spécialisés, l’ampleur de la consultation, les langues, les déplacements, les rencontres et les livrables. Les qualifications et les références pertinentes de l’équipe proposée sont confirmées avant de convenir du mandat.',
      ),
    },
  ],
  faq: [
    {
      q: l(
        'Do we need a new inclusion strategy?',
        'Faut-il une nouvelle stratégie en inclusion?',
      ),
      a: l(
        'No. A focused engagement can improve a tool, program or priority within your existing plan. A full organizational review is a separate scope.',
        'Non. Un mandat ciblé peut améliorer un outil, un programme ou une priorité de votre plan actuel. Un examen organisationnel complet constitue un mandat distinct.',
      ),
    },
    {
      q: l(
        'Can staff and community members help shape the work?',
        'Le personnel et la communauté peuvent-ils contribuer?',
      ),
      a: l(
        'Yes. The proposal can include interviews, workshops, surveys or a small pilot, with accessible participation options. Methods, participant groups, quantities and confidentiality limits are agreed in advance.',
        'Oui. La proposition peut prévoir des entrevues, des ateliers, des sondages ou un essai limité, avec des modalités de participation accessibles. Les méthodes, les groupes, les quantités et les limites de confidentialité sont convenus à l’avance.',
      ),
    },
    {
      q: l('What will our team receive?', 'Que recevra notre équipe?'),
      a: l(
        'The agreed scope may include an editable inclusion tool, a guidance document and an integrated recommendations report with implementation priorities and measures. Formats, accessibility checks and handover sessions are specified in the proposal.',
        'Selon la portée convenue, les livrables peuvent inclure une grille d’analyse inclusive modifiable, un guide et un rapport intégré avec priorités et indicateurs. Les formats, les vérifications d’accessibilité et les séances de transfert sont précisés dans la proposition.',
      ),
    },
  ],
};
