# AVAW — A Virtual Alchemy Workshop (Website v04)

Static site, ready for GitHub Pages. No build step.

## ⚠️ Before you upload: avoid the nested-folder issue
Upload the **contents** of this folder (`index.html`, `styles.css`, `script.js`,
`translations.js`, `README.md`, and the `images/` folder) directly to the
repo root — don't drag the outer `website` folder itself, or you'll end up
with `yourrepo/website/images/...` instead of `yourrepo/images/...`, and
every image will 404. If you're already in that situation, see "Fixing a
nested folder" at the bottom of this file.

## Deploy to GitHub Pages
1. Create a repo (e.g. `avaw.github.io` for a user site, or any name for a project site).
2. Copy `index.html`, `styles.css`, `script.js`, `translations.js` and the `images/` folder into the repo root.
3. Push to `main`.
4. In the repo → **Settings → Pages** → set source to `main` / root.
5. Site will be live at `https://<username>.github.io/<repo>/`.

## What changed in this version (v04)
- **Header logo fixed for legibility**: the previous full logo image (triangles + subtitle baked in) shrank the "A VIRTUAL ALCHEMY WORKSHOP" text to unreadable size at header height. Now the header shows just the triangle icon (`images/avaw-icon.png`, cropped from your logo) at 36px, paired with the subtitle as real HTML text next to it — sharp at any size, and independently restyleable.
- **Pipeline & Scheduling work sample replaced**: swapped the Gantt-chart image for your new preproduction-desk photo (storyboards, character sheets, a schedule corkboard, and 3D software open on two monitors), captioned "Preproduction desk — storyboard, concept art & schedule" across all 7 languages.

## What changed in v03
- **Logo** swapped for the new AVAW mark (alternating red/white triangles) and enlarged in the header (30px → 48px tall) so the "A VIRTUAL ALCHEMY WORKSHOP" subtitle reads clearly.
- **Chinese (Simplified)** added as a 7th language (中文 / ZH) — same detection/switching behavior as the other six. Note: browsers reporting `zh-TW` or `zh-HK` will still get Simplified Chinese, since only one Chinese variant is built — flag it if Traditional Chinese is needed for those regions.
- **Calendly link** updated to `https://calendly.com/avirtualchemyworkshop`.

## What changed in v02
- **Rebrand**: no personal name anywhere on the site. Header now shows the AVAW logo (background keyed to transparent so it sits cleanly on the dark theme), and the footer reads "AVAW — A Virtual Alchemy Workshop".
- **Contact**: replaced the single email link with two buttons, matching the pattern used on the Arqlántico site — **Say Hello** (`mailto:virtualchemyworkshop@gmail.com`) and **Book a Consultation** (currently pointed at `https://calendly.com/virtualalchemyworkshop` — update this once the Calendly account is live).
- **Positioning shift to preproduction-only**: Statement, Services and the Process pipeline were rewritten. The pipeline now ends at **Animatics / Techvis** as the final content-production stage; a fifth "On set & post" stage is shown but visually de-emphasized (dashed marker, muted text, amber "COORDINATION ONLY" label) to signal availability for coordination without implying content production there.
- **ICVFX service** reframed as design *assistance*: helping through the creation/design process of a Stagecraft setup, including LED panel technology recommendations (brand and type) per project — rather than a general layout/production service.
- **New storyboard samples** added to the Work → Storyboard group (two 6-panel sequences from an earlier project), alongside the existing "Into the Dark" set.
- Header now gets a solid/blurred background once you scroll past the hero, so nav text stays legible over content sections.
- The pipeline Gantt chart caption was softened to "organization & coordination sample" rather than "preproduction pipeline," since the chart image itself still shows postproduction rows — it's shown as a scheduling/coordination skill sample, not a claim that AVAW executes those stages.
- Reference PDFs with "Desafío"/"HAZ_RTVE" in the filename were used only as background for service framing — nothing was quoted or reproduced from them.

## Fixing a nested folder
If GitHub Pages is 404-ing on images because of a `website/website/` style
nesting: open the repo, press `.` to launch github.dev (GitHub's browser
editor), drag the misplaced `images` folder up to the repo root in the file
explorer, delete the leftover wrapper folder, then commit & push from the
Source Control panel. Pages redeploys in 1–2 minutes; hard-refresh
(Ctrl/Cmd+Shift+R) to bypass the browser cache.

## Still open
- **Calendly link** is a placeholder — swap in the real link once the account is set up.
- **Storyboard sequence titles**: the two new samples are captioned generically ("Sequence — scene 01/02") since no project title was given — rename them if you have one.
- Desk-mockup treatment for storyboards/diagrams (presented as physical sheets on a desk) is still a separate, later visual pass, as previously noted.
- Mobile header still drops the nav links at narrow widths; scrolling still reaches everything.
