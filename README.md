# AVAW — A Virtual Alchemy Workshop (Website v02)

Static site, ready for GitHub Pages. No build step.

## Deploy to GitHub Pages
1. Create a repo (e.g. `avaw.github.io` for a user site, or any name for a project site).
2. Copy `index.html`, `styles.css`, `script.js`, `translations.js` and the `images/` folder into the repo root.
3. Push to `main`.
4. In the repo → **Settings → Pages** → set source to `main` / root.
5. Site will be live at `https://<username>.github.io/<repo>/`.

## What changed in this version (v02)
- **Rebrand**: no personal name anywhere on the site. Header now shows the AVAW logo (background keyed to transparent so it sits cleanly on the dark theme), and the footer reads "AVAW — A Virtual Alchemy Workshop".
- **Contact**: replaced the single email link with two buttons, matching the pattern used on the Arqlántico site — **Say Hello** (`mailto:virtualchemyworkshop@gmail.com`) and **Book a Consultation** (currently pointed at `https://calendly.com/virtualalchemyworkshop` — update this once the Calendly account is live).
- **Positioning shift to preproduction-only**: Statement, Services and the Process pipeline were rewritten. The pipeline now ends at **Animatics / Techvis** as the final content-production stage; a fifth "On set & post" stage is shown but visually de-emphasized (dashed marker, muted text, amber "COORDINATION ONLY" label) to signal availability for coordination without implying content production there.
- **ICVFX service** reframed as design *assistance*: helping through the creation/design process of a Stagecraft setup, including LED panel technology recommendations (brand and type) per project — rather than a general layout/production service.
- **New storyboard samples** added to the Work → Storyboard group (two 6-panel sequences from an earlier project), alongside the existing "Into the Dark" set.
- Header now gets a solid/blurred background once you scroll past the hero, so nav text stays legible over content sections.
- The pipeline Gantt chart caption was softened to "organization & coordination sample" rather than "preproduction pipeline," since the chart image itself still shows postproduction rows — it's shown as a scheduling/coordination skill sample, not a claim that AVAW executes those stages.
- Reference PDFs with "Desafío"/"HAZ_RTVE" in the filename were used only as background for service framing — nothing was quoted or reproduced from them.

## Still open
- **Calendly link** is a placeholder — swap in the real link once the account is set up.
- **Storyboard sequence titles**: the two new samples are captioned generically ("Sequence — scene 01/02") since no project title was given — rename them if you have one.
- Desk-mockup treatment for storyboards/diagrams (presented as physical sheets on a desk) is still a separate, later visual pass, as previously noted.
- Mobile header still drops the nav links at narrow widths; scrolling still reaches everything.
