# Star Crossing Night

The World's First Vision-Driven Media House — Where Ideas Meet the Future. From the Gulf to the world.

## Design System

Built on the **Night Sky × Golden Light** palette:
- Deep night (`#080C18`) — background
- Gold (`#D4A017`) — accents, highlights, badges
- Silk (`#F5ECD7`) — surface warmth
- Indigo (`#0F1B33`) — secondary depth

Typography: Cormorant Garamond (English display), Noto Naskh Arabic (Arabic), DM Sans (body), JetBrains Mono (data).

## Structure

```
star-crossing-night/
├── index.html          # Main landing page
├── 404.html            # Styled 404 page
├── favicon.svg
├── styles/
│   ├── variables.css   # Design tokens
│   ├── base.css        # Reset & typography
│   ├── components.css  # Nav, hero, cards, footer
│   ├── utilities.css   # Utility classes
│   └── animations.css  # Scroll reveals & transitions
├── js/
│   └── main.js         # Navigation, scroll effects, observers
├── assets/
│   └── images/         # Photography
├── DEPLOY.md           # Deployment instructions
└── README.md
```

## Tech

- Zero build tools — vanilla HTML, CSS, JS
- Google Fonts via CDN (including Noto Naskh Arabic)
- IntersectionObserver for scroll animations
- Responsive: mobile-first with 768px and 480px breakpoints
- Accessibility: skip-link, ARIA labels, focus states, reduced-motion support
- Bilingual: English + Arabic

## Deploy

See `DEPLOY.md` for full instructions. Quick start: drag the folder onto [Netlify](https://app.netlify.com).
