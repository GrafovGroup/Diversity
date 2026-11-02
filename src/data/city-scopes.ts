type Text = { en: string; fr: string };
type CityScope = {
  service: string;
  question: Text;
  focused: Text;
  expanded: Text;
  deliverable: Text;
  pricing: Text;
};
const t = (en: string, fr: string) => ({ en, fr });
export const cityScopes: Record<string, CityScope> = {
  toronto: {
    service: 'accessibility',
    question: t(
      'What changes when an accessibility review covers several Toronto-area offices?',
      'Qu’est-ce qui change si l’évaluation couvre plusieurs bureaux du Grand Toronto?',
    ),
    focused: t(
      'For one office, trace a visitor’s route from the entrance to reception and a meeting room. Review booking instructions and record where a visitor may need assistance.',
      'Pour un seul bureau, suivez le parcours de l’entrée à la réception, puis à une salle de réunion. Examinez les consignes de réservation et relevez les obstacles qui peuvent obliger une personne à demander de l’aide.',
    ),
    expanded: t(
      'For a Toronto office and a second site in Mississauga, agree on the same route at each site. Reuse the booking review where instructions are shared. Price each site visit and any return visit separately.',
      'Pour un bureau à Toronto et un deuxième à Mississauga, convenez d’un parcours comparable. Examinez une seule fois les consignes de réservation communes. Faites chiffrer chaque visite et tout déplacement de suivi séparément.',
    ),
    deliverable: t(
      'Ask for a barrier list by site, a shared list of booking changes, and a priority and owner for each action. Specify whether a follow-up visit is included.',
      'Demandez une liste des obstacles par site et des modifications communes à apporter aux réservations. Attribuez une priorité et une personne responsable à chaque action. Précisez si une visite de suivi est incluse.',
    ),
    pricing: t(
      'For an office assessment, the quote changes with the number of distinct visitor routes and site visits. A shared booking process can be reviewed once. Ask the proposal to separate common work, visits and follow-up.',
      'Pour l’évaluation de bureaux, le prix varie selon le nombre de parcours distincts et de visites. Un processus de réservation commun peut être examiné une seule fois. Demandez une ventilation des travaux communs, des visites et du suivi.',
    ),
  },
  montreal: {
    service: 'training',
    question: t(
      'How do we scope inclusive service training for Montréal teams working in two languages?',
      'Comment définir une formation sur le service inclusif pour des équipes montréalaises qui travaillent dans les deux langues?',
    ),
    focused: t(
      'Pilot a French-language session with one reception team. Use a booking call and an in-person request from its daily work as the two practice scenarios.',
      'Commencez par un atelier en français avec une équipe d’accueil. Retenez deux mises en situation tirées du quotidien, par exemple un appel de réservation et une demande au comptoir.',
    ),
    expanded: t(
      'For French- and English-speaking teams across shifts, identify which scenarios can be shared, which terms need adaptation, and how many facilitated sessions each shift needs.',
      'Pour des équipes francophones et anglophones réparties sur plusieurs quarts, déterminez les scénarios communs, la terminologie à adapter et le nombre d’ateliers animés à prévoir par quart.',
    ),
    deliverable: t(
      'Request practice scripts in the agreed languages, a facilitator guide and a supervisor observation sheet. List adaptation, delivery and follow-up as separate items in the quote.',
      'Demandez des scénarios dans les langues convenues, un guide d’animation et une grille d’observation pour la supervision. Faites chiffrer séparément l’adaptation, l’animation et le suivi.',
    ),
    pricing: t(
      'For workplace training, language adaptation and the number of facilitated cohorts are separate costs. Specify the languages, shifts and reusable materials you need so that competing quotes cover the same work.',
      'Pour une formation, l’adaptation linguistique et le nombre de groupes à former constituent des postes de coût distincts. Précisez les langues, les quarts et le matériel réutilisable pour comparer des offres qui couvrent le même travail.',
    ),
  },
  vancouver: {
    service: 'supplier-diversity',
    question: t(
      'How much work goes into making a Vancouver supplier invitation more accessible?',
      'Comment estimer le travail nécessaire pour rendre un appel aux fournisseurs plus accessible à Vancouver?',
    ),
    focused: t(
      'For one facilities contract, review the public invitation, submission instructions and evaluation grid together. Identify steps that ask suppliers for the same evidence twice.',
      'Pour un contrat de services aux immeubles, examinez ensemble l’avis, les instructions de dépôt et la grille d’évaluation. Repérez les étapes où les fournisseurs doivent présenter deux fois la même preuve.',
    ),
    expanded: t(
      'If several Metro Vancouver purchasing teams will reuse the package, compare their approval steps before drafting a common template. Include time for a buyer workshop and a trial against a second contract.',
      'Si plusieurs équipes d’approvisionnement du Grand Vancouver doivent réutiliser la trousse, comparez leurs étapes d’approbation. Prévoyez un atelier avec les acheteurs et un essai sur un deuxième contrat.',
    ),
    deliverable: t(
      'Request an annotated invitation, a revised supplier checklist and an evaluation worksheet. Agree who approves the final wording before the invitation is published.',
      'Demandez un avis annoté, une liste de vérification révisée pour les fournisseurs et une grille d’évaluation. Déterminez qui approuvera le texte avant sa publication.',
    ),
    pricing: t(
      'Reviewing one invitation takes a different scope from producing a reusable procurement kit. Identify the number of documents, approval teams, workshops and trial contracts to be included in the quote.',
      'Réviser un avis et produire une trousse d’approvisionnement réutilisable exigent des travaux différents. Précisez le nombre de documents, d’équipes d’approbation, d’ateliers et de contrats pilotes à inclure dans l’offre.',
    ),
  },
};
