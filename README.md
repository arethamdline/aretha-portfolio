# Aretha — a little corner of the internet

The existing portfolio now has four pages, with the original portrait, terminal, portfolio title toolbar, content, and palette retained. The active project is this folder: `outputs/aretha-portfolio-kit/aretha-portfolio`. The sibling `outputs/aretha-portfolio` is an older copy; it was not modified during this redesign.

## Run and check

Open this folder in VS Code and its integrated terminal. Use Node.js 22.12+ or a newer supported LTS.

```sh
npm ci
npm run dev
```

Open the address printed in the terminal (currently http://127.0.0.1:5173/). Save a source file to refresh the development preview automatically.

```sh
npm run typecheck
npm run build
npm run preview
```

Build output is in `dist/`. The source remains in `src/`. `npm run export:preview` also rebuilds the portable `../aretha-preview.html`, embedding local images and fonts. Double-click that HTML for an offline preview; its four pages use hash URLs. Later edits require exporting it again.

## Where to edit content

All personal facts remain in **src/content.ts**.

| Export | What it controls |
| --- | --- |
| `profile` | Hero, biography, philosophy, location and contact links |
| `projects` | Work cards, stack, status, context, contribution, learning and URLs |
| `homeSelections` | Which two projects and two experiences appear on Home |
| `experiences` | Roles, organizations, periods, locations, descriptions and highlights |
| `experienceGroups` | Group titles; each experience has a matching `group` key |
| `archive` | Smaller school/early project entries, optional photos and links |
| `otherSkills` | Text-only toolkit tags below the archive |
| `offlineNotes` | Interests and personal writing |
| `offlineGallery` | Three editable photo slots, alt text and captions |
| `portrait` | Existing portrait path, alt text and caption |
| `pageContent` | Page headings, subtitles, browser titles and descriptions |
| `siteCopy` | About/contact headings and footer line |
| `terminalCopy` | Terminal greeting and small code-style values |
| `draftSettings.showToolbar` | Show or hide the portfolio title toolbar |

`previewTitle` supplies the typographic project illustration. `teaser: true` keeps a project’s demo and source links hidden, even if filled in. The BoxBuddy entry remains titled “Something in the Works,” with a general text composition and no product screenshot. Automation copy stays at the high level supplied in your content. Buildwise is explicitly identified as Bytewise’s product.

Any experience containing “to confirm” is visibly marked Draft in development and omitted from the rendered production/portable preview. Its data stays editable in the source. This is a display rule, not a mechanism for keeping confidential data secret. Confirm the facts before removing those words. Home only selects confirmed entries.

## Photos

The original **public/aretha.jpeg** is unchanged. `AboutPhoto.tsx` reuses it in the hero; `styles.css` controls its frame and crop. Its SHA-256 was verified unchanged after the redesign.

To add offline photos:

1. Put your image files in `public/photos/` (create that folder if needed).
2. Set an `offlineGallery` entry’s `imageUrl` to `/photos/your-file.jpg`.
3. Write meaningful `alt` text and your caption in that entry.

Archive photos use the same approach: set `archive[].imageUrl` and optional `imageAlt`. Empty URLs render intentional placeholders, not broken images. Use `/aretha.jpeg` or `/photos/...` with a leading slash so links resolve from every route. The offline exporter embeds public image files automatically. Remote photos require an internet connection.

## Layout and routing

- `/`: personal hero and portrait, About, philosophy, two featured projects, two journey entries, small hero terminal launcher, collapsible terminal, contact.
- `/work`: all selected work, the smaller archive, then the toolkit tags.
- `/experience`: Professional & Research, Leadership & Community, Earlier Experiences.
- `/offline`: interests, original heart/star/music details, and replaceable photo gallery.

`main.tsx` wraps the site in React Router’s `BrowserRouter`. `App.tsx` maps the four paths to `pages/`, applies metadata, and handles scroll/focus on navigation. Shared navigation/footer remain outside the routes. Unknown paths show a helpful 404 view. “Say Hello” uses `/#contact`, so it also works from another page. Offline exported HTML switches to `HashRouter` because local files do not have a web server.

`vercel.json` rewrites extensionless page requests to `index.html`, preserving direct access and refresh at `/work`, `/experience`, and `/offline`. Vite uses an absolute root base so scripts, fonts and portraits resolve on nested routes. Choose this project folder as the Vercel Root Directory, with `npm run build` and output `dist`, when you are ready. No deployment was made in this task.

Both the HTML robots meta tag and Vercel’s `X-Robots-Tag` remain **noindex, nofollow**. They must stay until you explicitly approve indexing. Metadata changes client-side for each page; full prerendered SEO/social previews can be added at launch if desired. There is no guessed canonical URL or sitemap.

## Design and motion

The existing Tailwind + custom CSS approach is retained. Edit the theme tokens and responsive layout in `src/styles.css`. Fonts are bundled locally through Fontsource: Cormorant Garamond, DM Sans, JetBrains Mono. No remote font account or paid assets are required.

Motion supplies short page fades and once-only 7px section reveals. Content begins readable, without a loading gate. Hover changes are restrained. Reduced-motion preferences remove movement and smooth scrolling. Native `<details>` keeps project notes, experience highlights and the terminal keyboard-operable. The mobile menu supports Escape and closes after navigation; route changes focus the main content.

## File changes

Created:
- `src/pages/Home.tsx`, `Work.tsx`, `Experience.tsx`, `Offline.tsx`
- `src/components/Navbar.tsx`, `Footer.tsx`, `Reveal.tsx`, `ExperienceCard.tsx`, `ArchiveCard.tsx`, `PhotoGallery.tsx`, `TerminalLauncher.tsx`
- `src/lib/experience.ts`, `src/vite-env.d.ts`, `vercel.json`

Modified:
- `src/App.tsx`, `src/main.tsx`, `src/styles.css`
- Existing `AboutPhoto.tsx`, `ProjectCard.tsx`, `Terminal.tsx`
- `src/content.ts`: retained your data; added presentation/photo configuration and grouping; clarified Buildwise’s relationship and generalized the teaser contribution
- `package.json`, `package-lock.json`: React Router, Motion and local fonts; typecheck command
- `vite.config.ts`, `index.html`, `scripts/export-preview.mjs`
- This README; marked the old Lovable brief as historical

The original image and favicon were preserved. No backend, login, database or additional project was created.

Routing and deployment implementation follows the [React Router declarative guide](https://reactrouter.com/start/declarative/installation) and [Vercel Vite guidance](https://vercel.com/docs/frameworks/frontend/vite).

## The two terminals

The portrait’s “>_ hi!” button opens a native modal dialog. It overlaps the bottom-right frame edge, stays straight independently of the rotated frame, and leaves room for the caption. The small terminal near the bottom of Home remains inside its expandable section. Both reuse `Terminal.tsx`, with independent command state and unique input/help IDs. Native modal behavior traps keyboard focus; Escape, the close button, or a backdrop click closes it, returning focus to the launcher. Background scrolling is locked while it is open. `terminalCopy` in `content.ts` controls the launcher and popup text.

## Verification completed

- `npm run typecheck` and `npm run build` passed.
- All four routes loaded directly in development and from the production preview, with route-specific titles and `noindex, nofollow`.
- Responsive checks covered desktop, tablet and phone widths; the terminal dialog was additionally checked at an actual 320px viewport without page or dialog overflow.
- Both terminals work; help, whoami, projects, contact, clear, unknown input and empty input were exercised in the popup.
- Popup Escape restores focus to the launcher, its scroll lock is released, and duplicate input IDs are avoided.
- Keyboard project expansion/collapse, experience highlights, mobile menu/Escape, and contact navigation were checked.
- Development shows one Research Assistant draft; production renders six confirmed experiences and no Research Assistant entry.
- Portrait loaded successfully; original photo hash is unchanged. No browser console errors were observed in the final production checks.
- Reduced-motion handling is implemented in Motion and CSS; runtime preference emulation was not available in the browser tool.
- The offline HTML was regenerated with embedded assets; direct file-URL browser verification is blocked by the browser tool’s URL policy. Web previews were verified. Vercel configuration is ready but has not been deployed/tested on Vercel.
