import { validateFormEndpoint } from './forms';

// All public enquiry forms use the same approved Formspree destination.
export const formEndpoint = validateFormEndpoint(
  import.meta.env.PUBLIC_FORM_ENDPOINT ?? 'https://formspree.io/f/xaeepeno',
);
