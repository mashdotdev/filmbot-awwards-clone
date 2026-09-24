# Responsive audit

## Scope

Reviewed all nine page sections, shared buttons, feature table, integrations,
progress bars, SVG overlay, global styles, and Lenis/GSAP integration. Preserved
the fonts, colors, editorial image compositions, hero entrance, image expansion,
theatre reveal, and footer card animation. No pinned ScrollTriggers exist here.

## Changes

- Shared page gutters and bounded section/editorial spacing; root font size now
  transitions continuously instead of jumping at 1024px.
- Bounded hero and audience headings, readable mobile body text, and natural
  wrapping for feature copy. The expanding image caption uses container sizing.
- Content-aware hero, theatre, contact, and footer heights. Short viewports can
  scroll through content instead of clipping it.
- Responsive feature list and integration tiles; progress labels no longer
  collide with percentages.
- Footer cards stack on phones, use two columns on tablets (last card spans both),
  and preserve the three-card desktop reveal. Footer controls wrap as needed.
- Responsive media proportions, corrected theatre/video imports for Vite, and
  removed the extra-width image pair in the audience section.
- GSAP media contexts use the same 1024px boundary as desktop layouts and revert
  when crossing it. Expansion measurements refresh on resize; font readiness
  refreshes ScrollTrigger. Lenis uses milliseconds and updates ScrollTrigger.

Intentional full-bleed imagery, scattered absolute-positioned images, and
cinematic viewport heights remain where they define the design. The two existing
admin placeholder panels and existing copy were retained.

## Verification

- Existing development preview at localhost:5173.
- DOM geometry sweep: 71 widths, 320 through 2560px in 32px increments, at 900px
  height, allowing ScrollTrigger's resize debounce to settle. Zero document-width
  overflow and zero scroll-width overflow in headings, paragraphs, or buttons.
- Additional breakpoint checks included 375, 390, 430, 480, 640, 768, 820, 1023,
  1024, 1100, 1280, 1440, 1536, and 1920px.
- Short/landscape checks: 320x568, 667x375, 820x600, 1024x600, and 2560x1440.
- Visual spot checks of the phone hero, feature caption/list, theatre reveal,
  memberships, mobile/tablet footer, desktop hero, and completed desktop card
  reveal. All image elements loaded; the local video reported readyState 4.
- `npm run lint`, `npx tsc -b`, and `git diff --check` passed.

## Limitations

`npm run build` could not run Vite's required child process in the Windows
sandbox (EPERM). Permission for an elevated build was declined. Production
bundling is therefore unverified. Browser checks used Chromium; physical-device
Safari/mobile browser chrome and every intermediate animation frame have not
been exhaustively verified. These checks are evidence from sampled widths, not
a claim of pixel-perfect behavior on every browser/device.
