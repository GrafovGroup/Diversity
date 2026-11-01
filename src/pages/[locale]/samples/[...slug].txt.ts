import type { APIRoute } from 'astro';
import { engagementGuides } from '../../../data/engagements';
import type { Locale } from '../../../data/services';

export function getStaticPaths() {
  return (['en', 'fr'] as const).flatMap((locale) =>
    Object.keys(engagementGuides).map((slug) => ({
      params: { locale, slug },
      props: { locale, slug },
    })),
  );
}

export const GET: APIRoute = ({ props }) => {
  const { locale, slug } = props as { locale: Locale; slug: string };
  const guide = engagementGuides[slug];
  const en = locale === 'en';
  const lines = [
    'Diversity.ca',
    en
      ? 'ILLUSTRATIVE OUTLINE — FOR SCOPING DISCUSSION'
      : 'EXEMPLE DE STRUCTURE — POUR DISCUTER DE LA PORTÉE',
    '',
    guide.sampleTitle[locale],
    '',
    guide.sampleIntro[locale],
    '',
    ...guide.sampleSections[locale].flatMap((section, i) => [
      `${i + 1}. ${section.title}`,
      section.description,
      '',
    ]),
    en ? 'A USEFUL STARTING POINT' : 'PRÉPARER LE PREMIER ÉCHANGE',
    ...guide.prepare[locale].map((item) => `- ${item}`),
    '',
    en
      ? 'WHAT WE AGREE BEFORE STARTING'
      : 'CE QUI SERA CONVENU AVANT DE COMMENCER',
    ...guide.boundaries[locale].map((item) => `- ${item}`),
    '',
    en
      ? 'Final methods, contents and responsibilities are agreed in your proposal.'
      : 'Les méthodes, le contenu et les responsabilités seront convenus dans votre proposition.',
    '',
    `https://diversity.ca/${locale}/services/${slug}/`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
