# VoV Design Reverse-Engineering Workflow

A methodology for building an organic design system — not pixel-perfect clones — by combining Refero discovery with precise CSS extraction.

## Philosophy

We don't copy websites. We study how the best editorial sites achieve their visual impact, extract the precise values that make it work, then fuse those learnings with VoV's own brand DNA (aurora gradient, desert dusk palette, Cormorant Garamond, bilingual EN/AR).

The goal: every design decision in VoV should be traceable to either (a) a deliberate brand choice or (b) a proven pattern extracted from a reference — never a guess.

## The Three-Layer Stack

```
Layer 1: REFERO — "What's worth studying?"
  → Search by pattern (hero layout, scroll reveal, card grid)
  → Collect 3-5 reference URLs per pattern
  → Output: Reference URLs + screenshots + rationale

Layer 2: EXTRACTION — "What makes it actually work?"
  → Open reference in Chrome MCP
  → Run getComputedStyle() extraction scripts
  → Capture: exact font sizes, line heights, letter spacing,
    padding, gap, border-radius, transition timing, colors
  → Document interaction model (scroll vs click vs hover)
  → Output: Component spec file with precise values

Layer 3: FUSION — "How does this become VoV?"
  → Map extracted tokens to VoV's design variables
  → Keep brand-defining elements (color, typeface, tone)
  → Adopt structural patterns (spacing ratios, grid proportions)
  → Adapt interaction patterns (timing, easing, triggers)
  → Output: Updated VoV design system + code
```

## Extraction Scripts

### Full Component CSS Extraction

Run via Chrome MCP `javascript_tool` on any reference site:

```javascript
(function(selector) {
  const el = document.querySelector(selector);
  if (!el) return JSON.stringify({ error: 'Not found: ' + selector });
  const props = [
    'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
    'textTransform','textDecoration','backgroundColor','background',
    'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'margin','marginTop','marginRight','marginBottom','marginLeft',
    'width','height','maxWidth','minWidth','maxHeight','minHeight',
    'display','flexDirection','justifyContent','alignItems','gap',
    'gridTemplateColumns','gridTemplateRows',
    'borderRadius','border','boxShadow','overflow',
    'position','top','right','bottom','left','zIndex',
    'opacity','transform','transition','cursor',
    'objectFit','mixBlendMode','filter','backdropFilter'
  ];
  function extract(element) {
    const cs = getComputedStyle(element);
    const styles = {};
    props.forEach(p => {
      const v = cs[p];
      if (v && v !== 'none' && v !== 'normal' && v !== 'auto'
          && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') styles[p] = v;
    });
    return styles;
  }
  function walk(element, depth) {
    if (depth > 3) return null;
    return {
      tag: element.tagName.toLowerCase(),
      classes: element.className?.toString().split(' ').slice(0,5).join(' '),
      text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3
        ? element.textContent.trim().slice(0, 100) : null,
      styles: extract(element),
      children: [...element.children].slice(0, 15).map(c => walk(c, depth+1)).filter(Boolean)
    };
  }
  return JSON.stringify(walk(el, 0), null, 2);
})('SELECTOR');
```

### Typography Scale Extraction

```javascript
JSON.stringify({
  h1: (() => { const el = document.querySelector('h1'); if (!el) return null; const cs = getComputedStyle(el); return { fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing, fontFamily: cs.fontFamily.split(',')[0] }; })(),
  h2: (() => { const el = document.querySelector('h2'); if (!el) return null; const cs = getComputedStyle(el); return { fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing }; })(),
  h3: (() => { const el = document.querySelector('h3'); if (!el) return null; const cs = getComputedStyle(el); return { fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing }; })(),
  body: (() => { const el = document.querySelector('p'); if (!el) return null; const cs = getComputedStyle(el); return { fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing }; })(),
  label: (() => { const el = document.querySelector('[class*="label"], [class*="tag"], [class*="caption"]'); if (!el) return null; const cs = getComputedStyle(el); return { fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing, textTransform: cs.textTransform }; })()
}, null, 2);
```

### Spacing System Extraction

```javascript
(() => {
  const sections = document.querySelectorAll('section, [class*="section"], main > div');
  const paddings = new Set();
  const gaps = new Set();
  sections.forEach(s => {
    const cs = getComputedStyle(s);
    ['paddingTop','paddingBottom','paddingLeft','paddingRight'].forEach(p => {
      const v = parseInt(cs[p]); if (v > 0) paddings.add(v);
    });
    const g = parseInt(cs.gap); if (g > 0) gaps.add(g);
  });
  return JSON.stringify({
    sectionPaddings: [...paddings].sort((a,b) => a-b),
    gaps: [...gaps].sort((a,b) => a-b)
  }, null, 2);
})();
```

### Transition & Animation Extraction

```javascript
(() => {
  const all = document.querySelectorAll('*');
  const transitions = new Map();
  all.forEach(el => {
    const t = getComputedStyle(el).transition;
    if (t && t !== 'all 0s ease 0s' && t !== 'none') {
      const key = t.replace(/\d+\.\d+s/g, m => parseFloat(m).toFixed(2)+'s');
      transitions.set(key, (transitions.get(key) || 0) + 1);
    }
  });
  return JSON.stringify(
    [...transitions.entries()]
      .sort((a,b) => b[1] - a[1])
      .slice(0, 15)
      .map(([t, count]) => ({ transition: t, occurrences: count })),
    null, 2
  );
})();
```

## Component Spec Template

For each pattern we study, create:

```
docs/design-system/<pattern-name>.spec.md
```

Contents:
- Source URL and screenshot
- Interaction model (static / scroll / click / hover / time)
- Extracted CSS values (from getComputedStyle, not eyeballed)
- VoV adaptation notes (what we keep, what we change, why)
- Responsive behavior at 1440 / 768 / 390

## Workflow: Improving a VoV Section

1. **Identify** — which section needs work? (e.g., "the X feed cards feel flat")
2. **Refero search** — find 3 reference sites that solve this pattern well
3. **Extract** — use Chrome MCP + scripts above to get precise values
4. **Compare** — put VoV's current values next to the reference values
4. **Decide** — for each property, choose: keep VoV's value, adopt reference value, or blend
5. **Implement** — update the CSS with the chosen values
6. **Verify** — screenshot VoV before/after, confirm improvement

## Anti-Patterns

- Never clone a full page — extract individual patterns
- Never adopt a value without understanding why it works
- Never override VoV brand colors/fonts with extracted ones
- Never skip the "compare" step — blind adoption creates Frankenstein designs
- Never estimate ("it looks like 16px") — always use getComputedStyle()
- Never extract only default state — check hover, scroll, active states too

## VoV Brand Constants (never overridden by extraction)

- **Palette**: Desert Dusk Gradient (#110E0A → #FAF6EE → #110E0A)
- **Accent**: Gold (#D4A055) and its variants
- **Display font**: Cormorant Garamond (300/400/600)
- **Body font**: DM Sans (300/400/500)
- **Arabic font**: Noto Naskh Arabic
- **Aurora gradient**: 4-layer radial gradient with warm golds
- **Fluted glass filter**: repeating-linear-gradient ribbing + blur

## What CAN Be Refined by Extraction

- Spacing ratios (section padding, component gaps)
- Typography scale (relative sizes, line-height ratios)
- Transition timing (duration, easing curves)
- Border-radius values
- Grid proportions (column ratios, aspect ratios)
- Hover/scroll behavior patterns (trigger thresholds, state changes)
- Shadow depth and spread values
- Opacity levels for layered elements
