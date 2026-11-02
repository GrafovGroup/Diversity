import {
  enquiryGroups,
  serviceOptions,
  type EnquiryGroup,
} from '../data/enquiry-fields';
import { solutionOptions } from '../data/solution-options';

export type FormLocale = 'en' | 'fr';
export type EnquiryKind = 'proposal' | 'assessment' | 'training' | 'contact';

export interface EnquiryContext {
  serviceId: string;
  subserviceId: string | null;
  serviceLabel: string;
  subserviceLabel: string | null;
  solutionId: string | null;
  solutionLabel: string | null;
}
export interface EnquiryDetail {
  id: string;
  label: string;
  value: string;
  displayValue: string;
}
export interface EnquiryRecord {
  schemaVersion: 3;
  createdAt: string;
  locale: FormLocale;
  kind: EnquiryKind;
  name: string;
  email: string;
  organization: string;
  audience: string;
  service: string;
  serviceId: string;
  region: string;
  projectCity: string;
  timeline: string;
  budget: string;
  deadline: string;
  message: string;
  context: EnquiryContext;
  details: { group: EnquiryGroup; fields: EnquiryDetail[] };
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

export function isServiceAllowed(
  kind: EnquiryKind,
  serviceId: string,
): boolean {
  if (!serviceOptions.some((service) => service.id === serviceId)) return false;
  if (kind === 'training')
    return serviceId === 'training' || serviceId === 'unsure';
  if (kind === 'assessment')
    return ['accessibility', 'implementation', 'unsure'].includes(serviceId);
  return true;
}

/** Resolves labels exclusively from local data, never from query text. */
export function resolveEnquiryContext(
  search: URLSearchParams,
  locale: FormLocale,
): EnquiryContext | null {
  if (search.getAll('service').length !== 1) return null;
  const service = serviceOptions.find(
    (item) => item.id === search.get('service'),
  );
  if (!service) return null;
  const subservice =
    search.getAll('subservice').length === 1
      ? service.subservices.find((item) => item.id === search.get('subservice'))
      : undefined;
  const solution =
    search.getAll('solution').length === 1
      ? solutionOptions.find(
          (item) =>
            item.slug === search.get('solution') &&
            item.service === service.id &&
            item.subservice === subservice?.id,
        )
      : undefined;
  return {
    serviceId: service.id,
    subserviceId: subservice?.id ?? null,
    serviceLabel: service.label[locale],
    subserviceLabel: subservice?.label[locale] ?? null,
    solutionId: solution?.slug ?? null,
    solutionLabel: solution?.title[locale] ?? null,
  };
}

export function getEnquiryGroup(
  kind: EnquiryKind,
  serviceId: string,
): EnquiryGroup | null {
  if (!isServiceAllowed(kind, serviceId)) return null;
  if (kind !== 'contact') return kind;
  if (serviceId === 'training') return 'training';
  if (['accessibility', 'implementation'].includes(serviceId))
    return 'assessment';
  return 'proposal';
}

export function createEnquiryRecord(
  data: FormData,
  locale: FormLocale,
  kind: EnquiryKind,
  now = new Date(),
): EnquiryRecord {
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
  const group = getEnquiryGroup(kind, text('service'));
  if (!group) throw new Error('Select a service for this enquiry.');
  const params = new URLSearchParams({ service: text('service') });
  if (text('subservice')) params.set('subservice', text('subservice'));
  if (text('solution')) params.set('solution', text('solution'));
  const context = resolveEnquiryContext(params, locale)!;
  const definition = enquiryGroups.find((item) => item.id === group)!;
  const fields: EnquiryDetail[] = [];
  for (const field of definition.fields) {
    const value = text(field.id);
    if (!value) continue;
    if (field.maxLength && value.length > field.maxLength)
      throw new Error('A project detail is too long.');
    const choice = field.options?.find((option) => option.value === value);
    if (field.options && !choice)
      throw new Error('Choose an available option.');
    if (field.type === 'time' && !/^\d{2}:\d{2}$/.test(value))
      throw new Error('Enter a valid closing time.');
    fields.push({
      id: field.id,
      label: field.label[locale],
      value,
      displayValue: choice?.label[locale] ?? value,
    });
  }
  if (
    group === 'proposal' &&
    text('deadline_time') &&
    !text('deadline_timezone')
  ) {
    throw new Error('Specify the time zone for the closing time.');
  }
  return {
    schemaVersion: 3,
    createdAt: now.toISOString(),
    locale,
    kind,
    name: text('name'),
    email: text('email'),
    organization: text('organization'),
    audience: text('audience'),
    service: context.serviceLabel,
    serviceId: context.serviceId,
    region: text('region'),
    projectCity: text('project_city').slice(0, 120),
    timeline: text('timeline'),
    budget: text('budget'),
    deadline: group === 'proposal' ? text('deadline') : '',
    message: text('message'),
    context,
    details: { group, fields },
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
    record.message,
  ];
  const lines = labels.map(
    (label, index) => `${label}: ${values[index] || '—'}`,
  );
  if (record.context.subserviceLabel)
    lines.push(
      `${french ? 'Service ciblé' : 'Specific service'}: ${record.context.subserviceLabel}`,
    );
  if (record.projectCity)
    lines.push(
      `${french ? 'Ville ou collectivité' : 'City or community'}: ${record.projectCity}`,
    );
  if (record.context.solutionLabel)
    lines.push(`Solution: ${record.context.solutionLabel}`);
  lines.push(
    ...record.details.fields.map(
      (field) => `${field.label}: ${field.displayValue}`,
    ),
  );
  const subject = french
    ? 'Demande de renseignements — Diversity.ca'
    : 'Project enquiry — Diversity.ca';
  return `mailto:info@diversity.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
}

/** One allowlisted record drives provider delivery, local export and email drafts. */
export function createEnquiryPayload(record: EnquiryRecord): FormData {
  const payload = new FormData();
  for (const key of [
    'name',
    'email',
    'organization',
    'audience',
    'service',
    'region',
    'timeline',
    'budget',
    'message',
  ] as const) {
    payload.set(key, record[key]);
  }
  if (record.projectCity) payload.set('project_city', record.projectCity);
  payload.set('locale', record.locale);
  payload.set('enquiry_type', record.kind);
  payload.set('created_at', record.createdAt);
  payload.set('service_id', record.serviceId);
  if (record.context.subserviceId) {
    payload.set('subservice_id', record.context.subserviceId);
    payload.set('subservice', record.context.subserviceLabel!);
  }
  payload.set('detail_group', record.details.group);
  if (record.context.solutionId) {
    payload.set('solution_id', record.context.solutionId);
    payload.set('solution', record.context.solutionLabel!);
  }
  for (const field of record.details.fields)
    payload.set(field.id, field.displayValue);
  payload.set('enquiry_record', JSON.stringify(record));
  payload.set('_subject', `Diversity.ca — ${record.kind}`);
  return payload;
}
