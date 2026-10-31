# Lead operations and configuration

## Current review behaviour

No Formspree endpoint has been supplied. All four intake types validate locally, provide an explicit email-draft link, and offer a JSON download. Nothing is sent merely by preparing a draft. `info@diversity.ca` is the approved public address; mailbox delivery has not been independently tested.

The four intake types are contact, proposal, assessment and training. Service links preselect one of the seven divisions. Corporate/government scope, province/territory, city/sites, timeline and optional budget are captured. Procurement fields include reference, public link, deadline and time zone. Training adds participant count and format; assessments add the assessment focus. Preferred delivery language is requested in the project message; site language is captured separately.

The form collects project-level information. No employee datasets, disability details, secure tender documents or file uploads are requested. The privacy notice is linked beside required consent. The spam-trap field is not included in JSON export.

## Activation after owner supplies endpoint

1. Verify the recipient `info@diversity.ca` in Formspree and confirm successful inbound/outbound mail.
2. Set `PUBLIC_FORM_ENDPOINT` to the approved HTTPS form URL in the build environment; rebuild. It is a public form identifier, never a secret key.
3. Enable provider-side spam protection, domain restrictions and appropriate retention/access settings. The HTML honeypot is supplementary; it does not provide server-side rate limiting.
4. Route on the submitted `service`, `audience`, `province` and `intake` fields in provider workflows. Do not rely on a visitor-supplied recipient email. Confirm subscriptions/feature availability before promising CRM automation.
5. Review and finalize the privacy notice to name the actual operator, privacy contact, provider, retention rules and request process. Check any international processing implications with the operator's adviser.
6. Test each intake in EN and FR with controlled test data, including successful submission, validation error, provider rejection and connection timeout. Confirm mailbox receipt, reply-to, routing and no unexpected duplicate notifications.
7. Confirm that RFP deadline time zones are understood by the receiving team. The website is not a bid-submission channel or supplier-registration system.

## Record format

`schema_version: 1`, ISO creation time, `language`, `intake`, `source_path`, name, email, organization, audience, service, province, city, timeline, optional budget, deadline, deadline_timezone, reference, public_link, optional participants/format/assessment_scope, message and consent. Empty optional values are omitted. The JSON file is downloaded to the visitor's device; this site does not keep a copy.

Provider acceptance means the form service accepted the request, not proof the email reached an inbox. The success message states that distinction. A timeout may occur after provider acceptance, so the fallback explains possible duplication.

## Still required

- Actual owner-approved endpoint and verified recipient.
- Operational owner for enquiries and escalation.
- Approved privacy text and retention process.
- Real delivery tests on the final public origin after deployment approval.
