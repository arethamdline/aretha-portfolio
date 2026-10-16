> Historical brief for the original one-page draft. The current four-page design and editing instructions are documented in README.md; do not use this older brief to overwrite the current site.

# Aretha’s portfolio — Lovable brief

Copy the prompt below into a new Lovable project. Attach the desktop and mobile preview images from this package as visual references, and your original moodboards if available. The previews are layout references; do not assume Lovable can import this entire repository.

---

Build an editable, responsive personal developer portfolio for **Aretha Madeline Budiman**, an AI & Data Science student at **The University of Hong Kong**. Use the attached draft screenshots as the visual source of truth. Preserve their hierarchy, spacing, color balance, and restraint. Refine the implementation and add thoughtful, accessible motion.

## Intent and audience

The site is 70% professional developer portfolio and 30% personal editorial space. A recruiter should immediately understand who Aretha is, what she builds, and how to inspect her work. Other developers should enjoy its care and personality. Keep the work section prominent and put personal notes after it. This is an initial draft: no invented employers, experience, metrics, achievements, dates, location, availability, or working URLs.

## Visual system

- Background: warm ivory **#F5F0E6**, approximately 70–80% of the page.
- Main text and terminal background: deep espresso **#3E2723**.
- Blush **#F4C9D6**: small accents and quiet personal-section surfaces, approximately 10–15%.
- Burgundy **#702838**: primary button, italic emphasis, links, and tiny symbols, approximately 5–10%.
- These percentages are visual guidance, not mathematical requirements.
- Muted body text **#725E56**, fine dividing rules **#D7C9BE**.
- Large elegant serif headings, clean sans-serif body, monospace metadata. Use the draft’s system font stacks initially. An optional later font pairing is a restrained editorial serif and neutral sans; avoid adding blocking remote font dependencies to the first version.
- Comfortable whitespace, thin borders, almost square corners (3–6px). Avoid pills everywhere, big shadows, gradients, glass effects, or a generic SaaS template.
- Original cute details: small asterisk/heart motifs, warm copy, and the terminal’s personality. Capture simplicity and warmth associated with minimal children’s illustration, without using Miffy, a recognizable rabbit silhouette, an X-mouth face, or copied character art. No mascot is required.
- Keep decorative marks rare: one small flourish per region at most. The work should remain the focus.

## Responsive layout and draft copy

**Navigation:** “aretha.” wordmark left; Work / About / Offline / Say hello on the right. Keep all four anchors visible on small screens if they fit. Use a properly labelled menu only if necessary; support keyboard navigation and Escape.

**Hero:** Desktop two columns, roughly 58/42. Left: “DEVELOPER IN THE MAKING”; heading “A curious mind.” / italic burgundy “A builder at heart.” Body: “Hi, I’m Aretha. I explore ideas through code, from thoughtful software to little experiments with data.” Primary action “Explore my work” links to #work; secondary “A little about me” to #about. Academic line: “AI & Data Science / The University of Hong Kong”. Right: espresso terminal, subtle offset neutral backing, and a tiny note: “Serious about the work. A little playful about everything else.” Stack copy before terminal on mobile.

**Terminal:** A real React form. Commands help, whoami, projects, contact, clear. Trim input, ignore casing, handle unknown commands helpfully, and allow both Enter and a visible Run button. Do not use eval, a real shell, network calls, or auto-focus. Label the input and use an aria-live region for responses. Default output identifies the academic subject and interests. Missing contact details return “Contact details are coming soon.”

**Selected work:** “From curiosity to code.” Three equal desktop columns, one column on mobile. Each card has a concept preview, category, title, short summary, proposed technology tags, honest status, and expandable project notes. Concept art must be marked “CONCEPT PREVIEW”; it is not a real screenshot or evidence of results.

1. **BoxBuddy** — AI-powered storage booking assistant. Proposed tags: React, TypeScript, AI.
2. **Bytewise** — AI-assisted workflows for multi-platform content. Proposed tags: n8n, APIs, Automation.
3. **A taste of data** — Michelin restaurant trends in Hong Kong. Proposed tags: R, Data analysis, Statistics.

These names/descriptions/stacks came from an earlier planning discussion and need owner verification. Default status: “Details to confirm”. Expanded notes: The idea / My contribution / Outcome & learning. Clearly label missing contributions and outcomes as content to fill in. Use no fabricated metrics. Show demo/source links only when nonempty URLs are provided. Never use href="#" as a fake project destination.

**About:** Two editorial columns. Heading “Thoughtful by nature. Hands-on by choice.” Copy: “I’m studying AI & Data Science at The University of Hong Kong. I’m interested in how software, data, and thoughtful design can come together to make everyday things a little better.” Follow with “This little corner is for the things I make, the questions I follow, and the person I’m becoming along the way.” Short fields for Learning and My approach. Do not add an experience timeline until real entries are provided.

**/offline:** A compact blush-tinted band, with “A life beyond the semicolon.” and two small editorial notes. Suggested placeholders: “Ideas worth sitting with.” for reading/thoughts, and “Taking the scenic route.” for everyday discoveries. These are editable suggestions, not confirmed hobbies. Don’t invent books, photos, travel, or diary entries. Leave space for future real content without a large empty photo box.

**Contact:** “Good things start with a conversation.” Email, GitHub, and LinkedIn are empty in the initial content model. Show “Contact links coming soon.” until populated. No form or backend.

**Footer:** wordmark plus “Made with curiosity & a little care.” Full name in production.

## Motion pass (after layout approval)

Use CSS for simple hover/focus changes. Use Motion for React only where it makes scroll entry simpler; isolate motion wrappers from content. Keep initial HTML readable even if JavaScript or an observer fails. Never hide essential content indefinitely.

| Element | Behavior | Timing |
| --- | --- | --- |
| Hero text | Optional once-only opacity and 8px upward entrance | 350ms, ease-out |
| Terminal | Optional once-only fade, no continuous floating | 350ms, 80ms delay |
| Work cards | Once-only 8px entrance when visible; cap stagger at 60ms | 300–400ms |
| Main button | Color shift, max 2px lift on pointer hover; visible keyboard focus | 160–180ms |
| Project preview | Optional max 1.015 scale inside clipped container | 180ms |
| Tiny asterisk | Optional single 12-degree rotation on deliberate hover | 180ms |
| Project notes | Prefer native details; do not break its keyboard behavior | immediate, or ≤180ms |
| Anchor navigation | Native smooth scroll when allowed | browser default |

Respect prefers-reduced-motion: no translation, scale, rotation, stagger, or smooth scrolling; show everything immediately. Do not type out the hero or announce animated terminal characters to screen readers. No scroll hijacking, parallax, custom cursor, sound, loading gate, autoplay animation loop, confetti, or distracting bouncing mascot. Touch devices get equally usable controls without hover. Do not add a command palette or dark mode to this initial pass.

## Implementation and editing

Use React, TypeScript, Vite, and Tailwind CSS. No database, authentication, payment, analytics, or external AI API. Reusable components: Header, Hero, Terminal, SectionLabel, ProjectCard, About, Offline, Contact, Footer. Store editable content in src/content.ts, including typed project records and optional links. Keep palette tokens in src/styles.css. The first draft includes a toolbar to toggle a grayscale wireframe; make it removable with one configuration boolean.

Use semantic main/nav/section/article/footer, one h1, ordered h2/h3 hierarchy, native anchors and details, a skip link, visible focus styles, and sufficient color contrast. Decorative previews and marks should not clutter screen-reader output. Make body text at least 16px where practical; avoid tiny critical labels. Support 320px through wide desktop, keyboard-only use, 200% zoom, and reduced motion. Maintain the terminal’s input usability on mobile. Avoid horizontal page overflow.

Use name and accurate description in metadata and a simple original favicon. Keep noindex during drafting. Add the real canonical URL, appropriate share metadata, and sitemap only after the final domain and content are known. No fake domain or portrait.

## Acceptance checks

- Compare desktop 1440px and mobile 390px views against the supplied references.
- Verify 320px, 768px, 1024px, and 1440px widths without unintended horizontal scrolling.
- Every nav and CTA goes to its intended section; unknown external links are omitted.
- Terminal works with all five supported commands, unknown input, and empty input.
- Project notes work with mouse, touch, Enter, and Space.
- Both draft and wireframe modes remain readable.
- Reduced motion removes animated movement.
- TypeScript and production build pass; no browser errors.
- Tell me which content still needs verification and which files to edit.

Finish the layout first. Then do the motion pass without redesigning the page.
