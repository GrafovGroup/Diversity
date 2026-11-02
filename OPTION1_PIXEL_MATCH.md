# Diversity.ca — Pixel-Match Approved Option 1 (People Focused)

## Design approval and source of truth
The user explicitly approved the latest desktop+mobile **Option 1 — People Focused** full homepage visual mockup shown in conversation (large bright team photo, white header, seven services, lower photo/text section, phone preview). This is a **visual fidelity request**, not an invitation to reinterpret. Existing index.html is a first approximation and should be revised to match the approved composition, colors, spacing, button shapes, photography, icons, and mobile ordering. Preserve the approved Diversity.ca blue → purple → magenta gradient wordmark with no emblem.

## Exact visual requirements
1. White header, full gradient wordmark at left; compact uppercase ABOUT, OUR SERVICES, CORPORATE, GOVERNMENT, PRODUCTS, RESOURCES, CONTACT; search affordance only if functional; FR visible; top-right bright magenta pill button REQUEST A CONSULTATION with white arrow.
2. Hero: near-white / ice-blue photographic background; bright professional team with smiling woman foreground at right and four other professionals behind; soft bright left text space and subtle pale blue/purple edge gradient. Use user-approved hero artwork as source if accessible, otherwise obtain a properly licensed compositionally matching photo; never pretend an unrelated stock image is identical. Desktop text on left, team photo on right.
3. Eyebrow uppercase letterspaced STRATEGY · ADVISORY · IMPLEMENTATION. Large navy headline first line(s) 'Different Perspectives.' and blue-purple-magenta gradient 'Better Outcomes.' Second line gradient should be vibrant. Description: 'Strategic consulting, training, accessibility, and implementation solutions that help Canadian organizations build stronger, more inclusive workplaces.'
4. CTA row: primary solid deep navy pill with white REQUEST A CONSULTATION and arrow; secondary white pill with thin navy outline EXPLORE OUR SERVICES. Both real links, not dead controls.
5. Immediately under hero: **seven horizontal service tiles** on desktop, separated by thin vertical dividers, each with vivid blue/violet/pink line icon, uppercase title, short description, and small arrow. Service categories should align to the seven actual divisions from CODEX_MASTER_BRIEF.md, not invent a research division.
6. Below services: white spacious editorial section; rounded-corner large photograph of professionals collaborating at a table on left; right column eyebrow PEOPLE. OPPORTUNITY. PROGRESS., bold navy 'Building More Inclusive Organizations', supporting paragraph, outlined pill LEARN MORE ABOUT US.
7. Mobile: white compact header with gradient wordmark, FR and hamburger; headline and description above photo; navy primary and white outlined secondary pill buttons stacked; photo of same foreground team below CTAs; seven services become compact vertically stacked rows with icons and arrows; no horizontal overflow.
8. Layout should match approved visual, not generic template: max-width around 1440px, generous gutters, Inter-like modern sans, subtle lavender/blue washes, clean white negative space, dark navy text, gradient accents.

## Bilingual content
EN H1: Different Perspectives. Better Outcomes.
FR H1: Des perspectives différentes. De meilleurs résultats.
EN description: Strategic consulting, training, accessibility, and implementation solutions that help Canadian organizations build stronger, more inclusive workplaces.
FR description: Des services-conseils stratégiques, de la formation et des solutions d’accessibilité et de mise en œuvre pour aider les organisations canadiennes à créer des milieux de travail plus inclusifs et performants.
EN CTA: REQUEST A CONSULTATION / EXPLORE OUR SERVICES
FR CTA: DEMANDER UNE CONSULTATION / DÉCOUVRIR NOS SERVICES

## Implementation requirements
- Inspect index.html, preserve working features, and refactor into maintainable components if appropriate for WHC static hosting.
- Replace external Unsplash hotlink with locally stored properly licensed image(s), record provenance. If the exact approved generated mockup photo is not available as a standalone asset, report that exact photographic duplication requires a source asset; approximate framing faithfully without claiming pixel identity.
- Build proper EN/FR localized content and routes or robust accessible language switching; preserve page context and localized navigation. All CTAs must work; use mailto only as transparent temporary fallback until Formspree endpoint exists.
- Responsive test at 320, 375, 390, 430, 768, 1024, 1440px. Ensure visible focus, contrast, keyboard access, reduced motion, image loading optimization and no layout shifts.
- Produce side-by-side desktop and mobile screenshots compared with approved reference, iterate until visually close. Verify links and run build checks. Commit changes to GitHub; do not deploy to WHC without final approval.
