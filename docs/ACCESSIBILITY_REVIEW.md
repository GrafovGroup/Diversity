# Accessibility review — November 1, 2026

Review build: **1.1.2**, on `codex/diversity-bilingual-site`.

## Status and method

An assistant-led browser accessibility review was completed, with targeted fixes and regression checks. This is **not a completed human accessibility review**, a screen-reader user session, an independent audit or a WCAG conformance certification. Human assistive-technology testing remains outstanding.

The review used Chromium 154 on Linux, keyboard input through Playwright, rendered screenshots, browser accessibility trees, computed styles and source inspection. Accessibility-tree inspection confirms information exposed by the browser; it does not confirm what NVDA, JAWS, VoiceOver or TalkBack actually announces.

English and Canadian French were reviewed. Viewports of 320, 640 and 1440 CSS pixels were used for reflow. Increased text spacing used line height 1.5, paragraph spacing 2em, letter spacing .12em and word spacing .16em. A separate CSS simulation doubled computed text sizes. These are reflow and text-resize checks: browser zoom keyboard shortcuts had no effect in this headless environment, so actual browser zoom was not verified.

## Scope

- Navigation: skip links, forward keyboard order, mobile-menu opening, Escape and focus return, closed-menu exclusion, language switching, page/section identification and native FAQ disclosures.
- Forms: all four enquiry types in both languages, keyboard completion, required-field errors, minimum message length, conditional groups, consent, draft creation, local downloads and mocked delivery failures. No real enquiry was sent.
- Semantics and imagery: 13 representative routes spanning home, service index, division, subservice, insights index, article, information, enquiry, accessibility statement and 404 templates. Headings, landmarks, link names, language metadata and image alternatives were inspected.
- Visual access: text and control contrast, visible focus, forced-color light/dark rendering, target spacing, narrow layouts and increased text spacing. Layout measurements were supplemented by visual inspection of selected screenshots. The broader reflow pass covered 182 representative scenarios with the revised stylesheet, including six expanded-menu cases; six additional final 404 scenarios bring the reflow total to 188. Six built-site target-spacing checks also passed. Final built-output regressions cover the confirmed failures.

## Findings and corrections

| Finding                                                                                  | Effect                                                                                                          | Correction                                                                                                          | Verification                                                                                            |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Form-field boundaries were 2.02:1 against white                                          | Unfocused controls were difficult to distinguish; relevant to WCAG 1.4.11                                       | Border changed from `#acb7ca` to `#7b8798`                                                                          | 3.65:1 against white; computed-style regression check                                                   |
| Related-service accessible names omitted part of the visible label                       | Voice commands using “Explore this service” / “Découvrir ce service” could fail to match; WCAG 2.5.3            | Accessible names retain the complete visible phrase before the destination title                                    | Browser accessible-name checks on division and subservice pages in both languages                       |
| Global focus color was 2.97:1 on navy; language-link outlines extended beyond the topbar | Focus was less distinct and partly clipped                                                                      | Focus color adjusted; language links use an inset white ring and larger targets                                     | 3.21:1 on navy, 4.66:1 on paper; white language ring remains inside its target                          |
| Increased spacing and text size caused header, card and call-to-action overflow          | Content or controls could require horizontal scrolling or be clipped; relevant to WCAG 1.4.4, 1.4.10 and 1.4.12 | Flexible header height/wrapping, grids that can shrink, responsive columns and long-word wrapping                   | Narrow-layout and text-spacing regressions plus the broader layout review                               |
| The 404 illustration forced the narrow page to 580px wide                                | Small-screen visitors had to scroll sideways to recover from a missing page                                     | Image width now follows its container while keeping its aspect ratio                                                | Dedicated 320px normal/increased-spacing image and recovery-link bounds check                           |
| The message field’s 20-character minimum was not visible before validation               | Users had to discover a requirement after an error                                                              | Added the minimum to the associated English/French helper text                                                      | Accessible description includes the requirement; short input still receives native validation and focus |
| Section links were announced as the current page; language links had abbreviated names   | Navigation context was less precise                                                                             | Exact pages retain `aria-current="page"`; ancestor sections use `true`; language names are “English” and “Français” | Browser accessibility/name and current-state checks                                                     |

The changes preserve all page content, unique imagery and matching language routes.

## Observed behavior

- The first Tab reveals the skip link; activating it focuses the main region, and the next Tab enters main content.
- Space opens the mobile menu; Tab enters its links; Escape closes it and restores focus to the menu button. Closed links leave the keyboard sequence.
- FAQ summaries open with Space and close with Enter. The browser exposes their expanded state.
- All eight enquiry journeys were completed with keyboard input. Empty submissions focus the first missing required field. Short messages focus the message field. Conditional questions remain in logical order and expose named groups and associated instructions.
- Draft feedback receives focus, and the next Tab reaches the prepared-email link. Mocked provider rejection preserves entries, restores controls and presents localized feedback. Real provider receipt and external email applications were not tested.
- Sampled pages have one H1 and an ordered heading hierarchy. Meaningful primary image alternatives are localized; decorative card imagery avoids duplicate announcements.
- Light/dark forced-color rendering preserves text and controls. Reduced-motion styles disable animations/transitions and smooth scrolling. No carousel, autoplay media or time-limited task is present in the reviewed flows.
- Small text links were assessed with the WCAG 2.5.8 spacing/inline exceptions in mind; a height below 24 pixels alone was not treated as a failure. Language controls now have explicit minimum target dimensions; checkbox labels provide a larger activation area.

## Evidence and regression coverage

The final build is checked by the repository’s regression suite, including seven new accessibility scenarios (six bilingual scenarios and one standalone error-page check) in `tests/accessibility-review.spec.ts`. Current results and build metrics are recorded in `QA_REPORT.md`.

Local evidence is under `artifacts/a11y-review/`: keyboard observations, form keyboard/recovery records, accessibility-tree snapshots, contrast captures, before/after reflow measurements and screenshots. Files captured before corrections are retained as diagnostic evidence and should not be mistaken for the final state. Screenshots alone do not establish accessibility.

## Remaining human review

A person using assistive technology should complete the following before this is described as a human-reviewed release. Record the tester, date, device, browser/assistive-technology versions, page, task, expected behavior, observed result and any issue. Testers do not need to disclose a diagnosis.

| Session                                                   | Tasks and expected results                                                                                                                                                                                                                                              |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NVDA with Firefox or Chrome on Windows                    | Navigate headings, landmarks and link lists; confirm clear link names, image alternatives and language pronunciation. Complete assessment and proposal forms; verify required-field errors, conditional questions, status feedback and recovery are announced usefully. |
| VoiceOver with Safari on macOS/iOS                        | Repeat the core journeys using the rotor and touch exploration. Verify menu state, focus order, form labels, native selects/date controls and return from the email application.                                                                                        |
| Actual browser zoom and operating-system text enlargement | Use 200% and 400% zoom, then enlarge system/browser text. Confirm all content and controls remain available without unintended two-dimensional scrolling or obscured focus.                                                                                             |
| Voice input / switch or keyboard-only input               | Activate visible service-link phrases, change language, open/close the menu and FAQs, complete a form and download a sample. Confirm no traps and no unexpected loss of work.                                                                                           |
| French-language browser and assistive technology          | Check pronunciation, native validation messages, dates and select controls with French configured at the operating-system/browser level. The installed test browser produced some English native validation even on French pages.                                       |

Long insight-card link names remain a usability observation for that user review; they identify their destinations but can be verbose in a screen-reader link list. No claim about their spoken usability is made here.
