import type { Locale } from './services';
type Text = Record<Locale, string>;
export interface Region {
  slug: string;
  code: string;
  name: Text;
  intro: Text;
  planning: Text;
}
const t = (en: string, fr: string): Text => ({ en, fr });
export const regions: Region[] = [
  {
    slug: 'british-columbia',
    code: 'bc',
    name: t('British Columbia', 'Colombie-Britannique'),
    intro: t(
      'Build an inclusion or accessibility project around the locations people actually use: a Lower Mainland office, an Island service counter or an Interior operation. Start by identifying the teams, customer journeys and facilities to include.',
      'Structurez votre projet d’inclusion ou d’accessibilité selon les lieux réellement fréquentés : un bureau du Lower Mainland, un comptoir sur l’île de Vancouver ou un établissement de l’Intérieur. Définissez d’abord les équipes, les parcours et les installations à inclure.',
    ),
    planning: t(
      'Separate work that can be reviewed remotely from observations that require a visit. If your sites span the mainland and Vancouver Island, include travel time and site access in the proposal. Test the approach with one representative location before extending it.',
      'Distinguez les éléments examinables à distance des observations qui nécessitent une visite. Si vos sites se trouvent sur le continent et sur l’île de Vancouver, prévoyez les déplacements et l’accès aux lieux dans la proposition. Testez la démarche dans un établissement représentatif avant de l’élargir.',
    ),
  },
  {
    slug: 'alberta',
    code: 'ab',
    name: t('Alberta', 'Alberta'),
    intro: t(
      'Connect inclusion, employee experience and accessible service across office and operational settings. An Alberta engagement can focus on a corporate team, a public-facing facility or a group of locations with different working conditions.',
      'Reliez l’inclusion, l’expérience du personnel et l’accessibilité des services dans les bureaux et les milieux opérationnels. Un mandat en Alberta peut viser une équipe de gestion, un établissement ouvert au public ou plusieurs sites aux conditions de travail différentes.',
    ),
    planning: t(
      'Identify shift schedules, contractor participation and site orientation requirements before setting workshops or visits. Agree who can approve changes in each location and how findings will be shared between office and field teams.',
      'Précisez les horaires de quarts, la participation des sous-traitants et les exigences d’accueil sur site avant de planifier les ateliers ou les visites. Convenez des responsables autorisés à approuver les changements et du partage des constats entre les bureaux et le terrain.',
    ),
  },
  {
    slug: 'saskatchewan',
    code: 'sk',
    name: t('Saskatchewan', 'Saskatchewan'),
    intro: t(
      'Plan practical support for workplaces, suppliers and public services in Saskatchewan. Define whether the first priority is a hiring process, an accessible service journey, a learning program or an approach to procurement.',
      'Planifiez un accompagnement concret pour les milieux de travail, les fournisseurs et les services publics de la Saskatchewan. Déterminez la priorité initiale : recrutement, parcours de service accessible, programme de formation ou pratiques d’approvisionnement.',
    ),
    planning: t(
      'For projects linking Saskatoon, Regina and smaller communities, identify travel dependencies and who needs an alternative to an in-person meeting. Keep procurement criteria and supplier communications consistent across participating business units.',
      'Pour un projet reliant Saskatoon, Regina et de petites collectivités, repérez les contraintes de déplacement et les personnes qui ont besoin d’une autre option qu’une réunion en présence. Harmonisez les critères d’approvisionnement et les communications aux fournisseurs entre les unités participantes.',
    ),
  },
  {
    slug: 'manitoba',
    code: 'mb',
    name: t('Manitoba', 'Manitoba'),
    intro: t(
      'Bring workplace inclusion, accessibility and service delivery into a single practical plan. Manitoba projects can start with one Winnipeg or Brandon location, or with a shared process used by teams across the province.',
      'Réunissez l’inclusion au travail, l’accessibilité et la prestation des services dans un plan concret. Au Manitoba, le projet peut commencer dans un établissement de Winnipeg ou de Brandon, ou porter sur un processus commun utilisé dans la province.',
    ),
    planning: t(
      'Document which public-facing tasks, documents and employee groups are in scope. Where northern or rural sites participate, agree how they will contribute and how their operating conditions will be reflected in the recommendations.',
      'Documentez les tâches de service, les documents et les groupes de personnel inclus dans le mandat. Si des sites ruraux ou nordiques participent, convenez de leur mode de contribution et de la façon de tenir compte de leurs conditions dans les recommandations.',
    ),
  },
  {
    slug: 'ontario',
    code: 'on',
    name: t('Ontario', 'Ontario'),
    intro: t(
      'Scope diversity, equity and inclusion, accessibility and training around Ontario workplaces and the people they serve. Connect head-office decisions with the experience at branches, campuses, customer locations and operational sites.',
      'Définissez vos projets de diversité, d’équité et d’inclusion, d’accessibilité et de formation selon les milieux de travail ontariens et leurs publics. Reliez les décisions du siège social à l’expérience vécue dans les succursales, les campus et les sites opérationnels.',
    ),
    planning: t(
      'A Greater Toronto Area project may involve several municipalities and property owners. A province-wide engagement may also include smaller or northern communities. Agree the assessment sample, approval responsibilities and travel scope before treating a pilot as representative of the whole organization.',
      'Dans la région du Grand Toronto, un projet peut toucher plusieurs municipalités et propriétaires. Un mandat provincial peut aussi inclure de petites collectivités ou des localités du Nord. Convenez de l’échantillon, des responsabilités d’approbation et des déplacements avant de généraliser les résultats d’un projet pilote.',
    ),
  },
  {
    slug: 'quebec',
    code: 'qc',
    name: t('Quebec', 'Québec'),
    intro: t(
      'Develop French-language inclusion, accessibility and learning projects for Québec organizations, with English deliverables where needed. Specify the audience and working language before reviewing policies, documents or service experiences.',
      'Développez des projets d’inclusion, d’accessibilité et de formation en français pour les organisations québécoises, avec des livrables en anglais au besoin. Précisez les publics et la langue de travail avant d’examiner les politiques, les documents ou les parcours de service.',
    ),
    planning: t(
      'Agree terminology, translation responsibilities and who approves each language version. For engagements spanning Montréal, Québec City and regional operations, test examples with the relevant teams instead of assuming identical workplace or service conditions.',
      'Convenez de la terminologie, des responsabilités de traduction et de l’approbation de chaque version. Pour un mandat réunissant Montréal, Québec et des établissements régionaux, validez les exemples avec les équipes concernées afin de tenir compte des différences de contexte.',
    ),
  },
  {
    slug: 'new-brunswick',
    code: 'nb',
    name: t('New Brunswick', 'Nouveau-Brunswick'),
    intro: t(
      'Prepare inclusion, accessible communication and service projects around the French- and English-language audiences your organization serves. A New Brunswick engagement can combine policy review, practical learning and customer-facing improvements.',
      'Préparez vos projets d’inclusion, de communication accessible et de prestation de services selon les publics francophones et anglophones de votre organisation. Au Nouveau-Brunswick, un mandat peut combiner révision des politiques, formation pratique et amélioration de l’accueil.',
    ),
    planning: t(
      'Specify language requirements by audience and deliverable, including how bilingual feedback will be analyzed. If multiple cities or rural service points are involved, assign local reviewers and agree how changes will reach every participating site.',
      'Précisez les besoins linguistiques par public et par livrable, y compris l’analyse des commentaires recueillis dans les deux langues. Si plusieurs villes ou points de service ruraux participent, désignez des personnes responsables de la révision et du déploiement dans chaque lieu.',
    ),
  },
  {
    slug: 'nova-scotia',
    code: 'ns',
    name: t('Nova Scotia', 'Nouvelle-Écosse'),
    intro: t(
      'Connect workplace inclusion with accessible public and customer services in Nova Scotia. Define the project around a tangible decision: improving an intake process, preparing supervisors, reviewing information or planning changes to a facility.',
      'Reliez l’inclusion au travail à l’accessibilité des services publics et à la clientèle en Nouvelle-Écosse. Ciblez une décision concrète : améliorer l’accueil, préparer les gestionnaires, revoir l’information ou planifier des changements dans un établissement.',
    ),
    planning: t(
      'Distinguish Halifax-area work from visits elsewhere in the province, including Cape Breton. Include seasonal staffing, event schedules and the needs of remote participants where they affect the project. Agree which recommendations can be piloted before a wider rollout.',
      'Distinguez les activités dans la région d’Halifax des visites ailleurs dans la province, notamment au Cap-Breton. Tenez compte du personnel saisonnier, des événements et des personnes à distance lorsqu’ils influencent le mandat. Choisissez les recommandations à tester avant un déploiement élargi.',
    ),
  },
  {
    slug: 'prince-edward-island',
    code: 'pe',
    name: t('Prince Edward Island', 'Île-du-Prince-Édouard'),
    intro: t(
      'Plan focused inclusion and accessibility support for Island workplaces, public services and visitor-facing organizations. Start with the process or location where a practical improvement would make the clearest difference.',
      'Planifiez un accompagnement ciblé en inclusion et en accessibilité pour les milieux de travail, les services publics et les organisations d’accueil de l’Île. Commencez par le processus ou le lieu où une amélioration concrète aurait le plus d’utilité.',
    ),
    planning: t(
      'For seasonal operations, schedule learning and document updates before the busiest period. Include rural service points in the scope when they use the same policies, and confirm travel arrangements for any on-site component.',
      'Pour les activités saisonnières, planifiez la formation et la mise à jour des documents avant la période la plus achalandée. Incluez les points de service ruraux qui utilisent les mêmes politiques et confirmez les déplacements nécessaires aux activités sur place.',
    ),
  },
  {
    slug: 'newfoundland-and-labrador',
    code: 'nl',
    name: t('Newfoundland and Labrador', 'Terre-Neuve-et-Labrador'),
    intro: t(
      'Build an inclusion or accessibility engagement that reflects the actual locations and teams involved in Newfoundland and Labrador. A St. John’s office review and a project spanning coastal or Labrador operations require different delivery plans.',
      'Élaborez un mandat d’inclusion ou d’accessibilité qui tient compte des équipes et des lieux concernés à Terre-Neuve-et-Labrador. Une révision dans un bureau de St. John’s et un projet touchant des sites côtiers ou le Labrador nécessitent des plans de réalisation différents.',
    ),
    planning: t(
      'Identify each site, local meeting time and travel dependency in the brief. Separate remote document review and learning from site observations, and confirm how staff with limited availability or connectivity can participate.',
      'Indiquez chaque site, l’heure locale des rencontres et les contraintes de déplacement dans la demande. Distinguez la révision documentaire et la formation à distance des observations sur place, puis prévoyez la participation du personnel dont les disponibilités ou la connexion sont limitées.',
    ),
  },
  {
    slug: 'yukon',
    code: 'yt',
    name: t('Yukon', 'Yukon'),
    intro: t(
      'Plan workplace inclusion, accessibility and learning with the Yukon communities and organizations involved. Clarify whether the project concerns Whitehorse, other communities or a territory-wide process before establishing its scope.',
      'Planifiez l’inclusion au travail, l’accessibilité et la formation avec les organisations et les collectivités du Yukon concernées. Précisez si le mandat vise Whitehorse, d’autres collectivités ou un processus territorial avant d’en fixer la portée.',
    ),
    planning: t(
      'Confirm travel windows, connectivity and local participation arrangements. Where First Nations are involved, agree the appropriate relationships, permissions and community-specific process with those communities; English or French delivery does not replace local-language or cultural expertise.',
      'Confirmez les périodes de déplacement, la connectivité et les modalités de participation locales. Lorsque des Premières Nations sont concernées, convenez avec elles des relations, des autorisations et de la démarche appropriées. Les services en français ou en anglais ne remplacent pas l’expertise linguistique ou culturelle locale.',
    ),
  },
  {
    slug: 'northwest-territories',
    code: 'nt',
    name: t('Northwest Territories', 'Territoires du Nord-Ouest'),
    intro: t(
      'Scope inclusion and accessibility work around the communities, languages and service routes relevant to your Northwest Territories project. Distinguish a Yellowknife-based activity from work that requires participation across the territory.',
      'Définissez vos projets d’inclusion et d’accessibilité selon les collectivités, les langues et les parcours de service concernés dans les Territoires du Nord-Ouest. Distinguez les activités à Yellowknife des démarches qui nécessitent une participation ailleurs sur le territoire.',
    ),
    planning: t(
      'Agree accessible remote participation options, local coordination and any interpretation needs before setting dates. For multi-community projects, identify who will validate findings in each setting and budget separately for travel and locally arranged support.',
      'Convenez des modes de participation à distance accessibles, de la coordination locale et des besoins d’interprétation avant de fixer les dates. Pour un projet multicommunautaire, déterminez qui validera les constats dans chaque milieu et prévoyez séparément les déplacements et le soutien local.',
    ),
  },
  {
    slug: 'nunavut',
    code: 'nu',
    name: t('Nunavut', 'Nunavut'),
    intro: t(
      'Begin a Nunavut engagement with the people, communities and service context concerned. Define a manageable first scope for workplace practices, accessible information, staff learning or a public-facing process.',
      'Commencez un mandat au Nunavut par les personnes, les collectivités et le contexte de service concernés. Définissez une première portée réaliste : pratiques au travail, information accessible, formation du personnel ou processus de service au public.',
    ),
    planning: t(
      'For Iqaluit or other communities, agree the delivery language, interpretation, connectivity and travel arrangements explicitly. Community participation and Inuit-language or cultural expertise require locally appropriate involvement; they are not implied by an English/French service offering.',
      'Pour Iqaluit ou d’autres collectivités, convenez explicitement des langues de prestation, de l’interprétation, de la connectivité et des déplacements. La participation communautaire et l’expertise linguistique ou culturelle inuit nécessitent un apport local approprié; elles ne sont pas présumées dans une offre en français et en anglais.',
    ),
  },
];
