# VoV Design System Specification

Derived from precise extraction of Linear.app and Monocle.com, fused with VoV brand DNA.

## Sources & Rationale

| Property | Linear | Monocle | VoV Decision |
|----------|--------|---------|--------------|
| Display font | Inter Variable (sans) | Plantin (serif) | **Cormorant Garamond** (serif — editorial like Monocle, lighter than Plantin) |
| Body font | Inter Variable | Helvetica Neue | **DM Sans** (geometric sans — cleaner than Helvetica, lighter than Inter) |
| Display letter-spacing | -0.022em | inherited | **-0.02em** (adopt Linear's tighter heading tracking) |
| Body letter-spacing | -0.011em | inherited | **-0.01em** (subtle tightening) |
| Content max-width | 1024px | 800px (content) / 1296px (wide) | **1200px** (keep — between both references) |
| Section padding | 64px block | 80px desktop | **clamp(6rem, 14vw, 14rem)** (keep — already generous) |
| Base transition | 0.25s | 0.25s | **250ms** (confirmed by both) |
| Fast transition | 0.15s | 0.1s-0.2s | **150ms** (adopt Linear's micro-interaction timing) |
| Slow transition | — | 0.5s | **600ms** (reveal animations — keep current) |
| Primary easing | ease-out-quint | ease-in-out | **cubic-bezier(0.23, 1, 0.32, 1)** (adopt Linear's ease-out-quint for reveals) |
| UI easing | ease-out-quad | ease | **cubic-bezier(0.25, 0.46, 0.45, 0.94)** (adopt Linear's ease-out-quad for hovers) |
| Border-radius small | 4px/6px | var(--border-radius) | **6px** (slightly softer) |
| Border-radius medium | 12px | — | **12px** (adopt for cards) |
| Border-radius large | 16px/24px | — | **16px** (adopt for images/panels) |
| Shadow (resting) | 0 2px 4px rgba(0,0,0,0.1) | none | **0 4px 24px rgba(0,0,0,0.3)** (keep — darker theme needs stronger shadow) |
| Shadow (hover) | 0 4px 24px rgba(0,0,0,0.2) | none | **0 8px 40px rgba(0,0,0,0.4) + gold glow** (keep VoV signature) |
| Header blur | 20px | — | **20px** (confirmed) |
| Scrollbar | 6px, rgba(255,255,255,0.1) | — | **6px, earth-shadow color** (keep VoV warmth) |

## Updated Token Values

### Easing Curves (NEW — from Linear)
```css
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
```

### Transition Timing (REFINED)
```css
--duration-micro: 150ms;   /* hover color, opacity flickers */
--duration-fast: 250ms;    /* UI interactions, border changes */
--duration-normal: 400ms;  /* card lifts, nav transitions */
--duration-slow: 600ms;    /* scroll reveals, entrance animations */
--duration-glacial: 1200ms; /* parallax image zoom, aurora shift */
```

### Typography Tracking (NEW)
```css
--tracking-display: -0.02em;  /* h1, hero brand, manifesto */
--tracking-title: -0.015em;   /* h2, ed-title */
--tracking-body: -0.01em;     /* body paragraphs */
--tracking-label: 0.2em;      /* uppercase labels — wider for legibility */
```

### Border Radius Scale (REFINED)
```css
--radius-sm: 6px;     /* buttons, small elements */
--radius-md: 12px;    /* cards, panels, rev-cells */
--radius-lg: 16px;    /* images, xfeed-cards, large containers */
--radius-pill: 100px; /* CTA buttons, tags */
```

### Spacing (ADD intermediates)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px — base unit */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```
