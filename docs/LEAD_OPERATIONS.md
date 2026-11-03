# Lead operations and configuration

## Current review behaviour

The owner supplied `https://formspree.io/f/xaeepeno` on 31 October 2026. It is now the tracked default for all four intake types in both languages. Forms submit using vanilla JavaScript AJAX and only report provider acceptance after a successful JSON response. A native HTML POST supports visitors without JavaScript. Email fallback and JSON download remain available. `info@diversity.ca` is the intended public recipient; recipient verification and mailbox delivery have not been independently tested.

The four intake types are contact, proposal, assessment and training. Service links preselect one of the seven divisions. Corporate/government scope, province/territory, city/sites, timeline and optional budget are captured. Procurement fields include reference, public link, deadline and time zone. Training adds participant count and format; assessments add the assessment focus. Preferred delivery language is requested in the project message; site language is captured separately.

The form collects project-level information. No employee datasets, disability details, secure tender documents or file uploads are requested. The privacy notice is linked beside required consent. The spam-trap field is not included in JSON export.

## Provider verification and launch

1. Verify the recipient `info@diversity.ca` in Formspree and confirm successful inbound/outbound mail.
2. The default endpoint is checked in and also shown in `.env.example`. `PUBLIC_FORM_ENDPOINT` can override it at build time; setting it explicitly empty disables sending. Rebuild after changes. The endpoint is a public identifier, never a secret key.
3. Enable provider-side spam protection, domain restrictions and appropriate retention/access settings. The HTML honeypot is supplementary; it does not provide server-side rate limiting.
4. Route on the submitted `service`, `audience`, `province` and `intake` fields in provider workflows. Do not rely on a visitor-supplied recipient email. Confirm subscriptions/feature availability before promising CRM automation.
5. Review and finalize the privacy notice to name the actual operator, privacy contact, provider, retention rules and request process. Check any international processing implications with the operator's adviser.
6. Test each intake in EN and FR with controlled test data, including successful submission, validation error, provider rejection and connection timeout. Confirm mailbox receipt, reply-to, routing and no unexpected duplicate notifications.
7. Confirm that RFP deadline time zones are understood by the receiving team. The website is not a bid-submission channel or supplier-registration system.

## Record format

`schema_version: 1`, ISO creation time, `language`, `intake`, `source_path`, name, email, organization, audience, service, province, city, timeline, optional budget, deadline, deadline_timezone, reference, public_link, optional participants/format/assessment_scope, message and consent. Empty optional values are omitted. The JSON file is downloaded to the visitor's device; this site does not keep a copy.

Submissions include `subject`, `language`, `intake` and `source_path` in both AJAX and native HTML flows. The `email` field supplies Formspree’s reply-to address. Recipient routing is managed in the Formspree dashboard.

Provider acceptance means the form service accepted the request, not proof the email reached an inbox. The success message states that distinction. A timeout may occur after provider acceptance, so the fallback explains possible duplication.

## Still required

- Verified recipient and confirmation that the endpoint is enabled.
- Operational owner for enquiries and escalation.
- Approved privacy text and retention process.
- Real delivery tests on the final public origin after deployment approval.
