# Star Crossing Night — Site Structure & Copy

## AI Slop Kill List

Banned forever:
- "Create · Connect · Vision"
- "Where Ideas Meet the Future"  
- "The World's First Vision-Driven Media House"
- "Six Streams, One Vision"
- "From the Gulf to the world" (used 4× before — dead)
- "we create, connect, and envision"
- "Begin the Conversation"
- "Visionaries on Our Horizon"
- "A Prospective Circle of Dialogue"
- "Revenue Architecture"
- "An Integrated House of Media, Counsel & Infrastructure"
- "each designed to serve, amplify, and sustain"
- Any "X · Y · Z" triad structure
- Roman numeral decorations (MMXXVI)
- ✦ emoji spam
- "powered by technology, supported by light"
- "a tool by which civilization remembers"

Rule: If it sounds like a pitch deck, rewrite it. If it could come from any company on earth, it's too generic. If you can't imagine a real person saying it out loud, cut it.

---

## Design Principles

1. **Extreme whitespace** — sections breathe. 200px+ gaps between major blocks.
2. **Short text** — no paragraph longer than 3 lines on desktop.
3. **Magazine layout** — asymmetric grids, text/image overlap, visual tension.
4. **Content = visual design** — the words themselves create atmosphere.
5. **One idea per section** — don't cram.
6. **Bilingual as texture** — Arabic isn't a translation, it's a design element.

---

## Section Map

### 1. NAV (sticky, glassmorphism on scroll)
- Logo: "SCN" monogram left (small, quiet)
- Links: About / Work / People / Contact
- CTA pill: "Let's Talk" (rounded, gold outline)
- Behavior: transparent at top → frosted glass on scroll (backdrop-filter: blur)

### 2. HERO (100vh, near-empty)
- Full-screen desert image, heavy warm gradient overlay
- Center-bottom:
  - "Star Crossing Night" — large serif, white
  - "ليلة عبور النجوم" — Arabic below, gold, smaller
  - One line: "A media house for the Gulf and beyond."
  - Single button: "See our work ↓"
- No badge. No founder names. No "Create · Connect · Vision."
- Star particle canvas stays (subtle)

### 3. MANIFESTO (text-only section, dark bg)
- Massive vertical padding (160px+)
- Centered, max-width 640px
- Copy:
  > "We don't publish content. We build context.
  > The stories that matter aren't trending — they're unfolding.
  > In technology, in sport, in the culture of a region rewriting its own future."
- Arabic version below, slightly smaller, gold muted
- No dividers, no decorations. Just words and space.

### 4. WHAT WE DO (Aesop-style alternating layout)
- Two blocks, each: image left + text right (then flip)

**Block A:**
- Image: dunes-gold.jpg (3:4 tall)
- Text:
  - Label: "Editorial"
  - Title: "Long-form stories. Cinematic podcasts. Gulf perspectives."
  - Body: "Our platform publishes essays, documentaries, and dialogue series covering tech founders, sporting culture, and the people building the Gulf's next chapter."
  - Arabic: short mirror text

**Block B:**
- Image: architecture.jpg (3:4 tall)  
- Text:
  - Label: "Services"
  - Title: "We back creators. We connect capital."
  - Body: "Independent creators get editorial direction and distribution. The founders we cover get introduced to serious investors. Media counsel and AI advisory for the companies shaping what's next."
  - Arabic: short mirror text

### 5. MARQUEE (infinite horizontal scroll)
- Full-width strip, dark bg with gold text
- Repeating: "Editorial · Podcast · Documentary · Creator Studio · Capital Bridge · Advisory"
- Pauses on hover
- Letter-spacing: wide. Font: mono or display uppercase.

### 6. PEOPLE (clean, minimal cards)
- Section label: "People"
- Title: "Conversations we're starting."
- Body: "Founders, racers, and chroniclers."
- 3 cards, each:
  - Name (large serif)
  - Role (gold, small caps)
  - One sentence bio (2 lines max)
  - No numbered Roman numerals
- Card style: subtle border, large padding, hover lift + gold border-left

### 7. FULL-BLEED IMAGE (parallax break)
- Full-width, 70vh, city-future.jpg
- Slow parallax scroll
- Overlay text centered:
  - "Based in Saudi Arabia."
  - "المملكة العربية السعودية"
- That's it. Nothing else. The image does the work.

### 8. REVENUE (light section, clean grid)
- Background: warm cream/parchment
- Section label: "How it works"
- No "Six Streams, One Vision"
- Simple 2×3 grid:
  - Each cell: bold title + one-line description
  - "Subscriptions" — "A paid community. Content co-creation. Private events."
  - "Research" — "Commissioned analysis for tech companies and event organizers."
  - "Equity" — "When our coverage builds a company, we participate."
  - "Partnerships" — "Branded programming at Gulf sporting and tech events."
  - "Referrals" — "Connecting founders to institutional investors."
  - "Data" — "Verified fact infrastructure for media and research. (Planned)"
- No elaborate descriptions. One line each.

### 9. CTA (light bg, ultra-minimal)
- Centered
- "Interested?"
- "jacques.mak@manhattanxholding.com"
- One button: "Get in touch"
- That's it. Three elements. Maximum whitespace.

### 10. FOOTER (dark, quiet)
- Left: "Star Crossing Night" + "© 2026"
- Right: links (About / Work / People / Contact)
- Arabic site name below
- No "Create · Connect · Vision" tagline
- No long description paragraph

---

## Design Spells to Apply

| Pattern | Where | How |
|---------|-------|-----|
| Sticky glassmorphism nav | Nav | backdrop-filter: blur(20px), bg rgba with low alpha, border-bottom 1px subtle |
| Grain/noise texture | Body overlay | Already have this via SVG filter — keep at 3.5% opacity |
| Reveal on scroll | All content blocks | IntersectionObserver: translateY(40px) + opacity 0 → visible. Staggered delays. |
| Parallax | Hero bg, full-bleed image | transform: translateY(scrollY * 0.3) on images |
| Infinite marquee | Section 5 | CSS animation: translateX(-50%) infinite linear, duplicated content |
| Micro-interactions | Buttons, cards | hover: scale(1.02), shadow deepen, border-color change. Transition 300ms ease-out |
| Large rounded buttons | CTA pill in nav, section buttons | border-radius: 100px, padding generous |
| Magazine asymmetry | "What We Do" section | Grid with offset columns, intentional misalignment |

---

## Typography Hierarchy

- Hero title: Cormorant Garamond, 300 weight, clamp(3rem, 6vw, 7rem)
- Section titles: Cormorant Garamond, 400 weight, clamp(1.8rem, 3vw, 3.5rem)
- Labels: DM Sans, 500 weight, 0.7rem, uppercase, letter-spacing 4px, gold
- Body: DM Sans, 400 weight, 1rem-1.1rem, line-height 1.8
- Arabic: Noto Naskh Arabic, following each English block, gold or muted
- Mono accents: JetBrains Mono for marquee, small labels

---

## Color Flow (section backgrounds, dark → light → dark)

1. Nav: transparent → rgba(17,14,10,0.85) frosted
2. Hero: #110E0A (night earth)
3. Manifesto: #1A1410 (deep umber)
4. What We Do: #1A1410 → #231C14
5. Marquee: #110E0A (dark strip)
6. People: #2C2218 (warm dusk)
7. Full-bleed image: (image, no bg needed)
8. Revenue: #FAF6EE (parchment) — THE FLIP to light
9. CTA: #FAF6EE (parchment)
10. Footer: #110E0A (night earth) — back to dark
