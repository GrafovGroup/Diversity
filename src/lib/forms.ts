export type FormLocale = 'en' | 'fr';
export type EnquiryKind = 'proposal' | 'assessment' | 'training' | 'contact';

export interface EnquiryRecord {
  schemaVersion: 1;
  createdAt: string;
  locale: FormLocale;
  kind: EnquiryKind;
  name: string;
  email: string;
  organization: string;
  audience: string;
  service: string;
  region: string;
  timeline: string;
  budget: string;
  deadline: string;
  message: string;
  consent: true;
}

/** Only the approved provider is supported; an empty value enables email drafts. */
export function validateFormEndpoint(value: string | undefined): string | null {
  const candidate = value?.trim();
  if (!candidate) return null;
  if (!/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(candidate)) {
    throw new Error(
      'PUBLIC_FORM_ENDPOINT must be an HTTPS Formspree form URL: https://formspree.io/f/FORM_ID',
    );
  }
  return candidate;
}

export function createEnquiryRecord(
  data: FormData,
  locale: FormLocale,
  kind: EnquiryKind,
  now = new Date(),
): EnquiryRecord {
  if (data.get('consent') !== 'yes') throw new Error('Consent is required.');
  if (String(data.get('_gotcha') ?? '').trim())
    throw new Error('Unable to prepare this enquiry.');
  const text = (key: string) => String(data.get(key) ?? '').trim();
  for (const key of [
    'name',
    'email',
    'organization',
    'audience',
    'service',
    'region',
    'message',
  ]) {
    if (!text(key)) throw new Error('Complete all required fields.');
  }
  if (text('message').length < 20)
    throw new Error(
      'Please provide at least 20 characters of project context.',
    );
  return {
    schemaVersion: 1,
    createdAt: now.toISOString(),
    locale,
    kind,
    name: text('name'),
    email: text('email'),
    organization: text('organization'),
    audience: text('audience'),
    service: text('service'),
    region: text('region'),
    timeline: text('timeline'),
    budget: text('budget'),
    deadline: text('deadline'),
    message: text('message'),
    consent: true,
  };
}

export function createEnquiryMailto(record: EnquiryRecord): string {
  const french = record.locale === 'fr';
  const labels = french
    ? [
        'Nom',
        'Courriel',
        'Organisation',
        'Secteur',
        'Service',
        'Région',
        'Échéancier',
        'Budget',
        'Date limite',
        'Message',
      ]
    : [
        'Name',
        'Email',
        'Organization',
        'Audience',
        'Service',
        'Region',
        'Timeline',
        'Budget',
        'Deadline',
        'Message',
      ];
  const values = [
    record.name,
    record.email,
    record.organization,
    record.audience,
    record.service,
    record.region,
    record.timeline,
    record.budget,
    record.deadline,
    record.message,
  ];
  const body = labels
    .map((label, index) => `${label}: ${values[index] || '—'}`)
    .join('\n\n');
  const subject = french
    ? 'Demande de renseignements — Diversity.ca'
    : 'Project enquiry — Diversity.ca';
  return `mailto:info@diversity.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
