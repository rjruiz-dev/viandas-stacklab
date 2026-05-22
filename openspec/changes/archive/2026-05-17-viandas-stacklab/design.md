# Design: Etapa 1 — Esqueleto (Skeleton MVP)

## Technical Approach

Three static HTML files plus one shared CSS and one JSON data file, served as-is. No build step, no dependencies. State lives in `localStorage` across pages. A hardcoded employee array and fake confirmation data seed the admin view so Lucía sees a realistic consolidated table immediately. All interactivity is vanilla DOM; CSS variables provide the design token system. Mobile-first with a single `@media (min-width: 768px)` breakpoint.

---

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| User simulation | `<select>` dropdown in page header, persisted to `localStorage` | URL param (`?user=Martín`) | Dropdown survives page navigation without managing URLs; easier for non-technical testers. Fallback: read `?user=` on first load, then ignore. |
| Deadline simulation | Button toggles `viandas_deadline_simulated` boolean in `localStorage`; JS disables confirm buttons and injects banner | Static message, CSS-only | Must be reversible for repeated demos. Button gives explicit control. |
| Notification simulation | Static top banner in `index.html` with dismiss button | Modal, toast | Banner is always visible (no discovery problem), zero JS needed to render, and matches how Gmail/Chat previews look in-thread. |
| Traffic-light colors | CSS utility classes `.status-ok`, `.status-late`, `.status-missing` | Inline styles | Classes keep styles in CSS, support `@media (prefers-reduced-motion)` and theming, and pair naturally with ARIA labels. |
| Cross-page state | `localStorage` only | `sessionStorage`, URL params | Must survive full page loads (each screen is its own HTML file). `localStorage` is the only zero-dep option. |
| Reset / demo | `?reset=1` clears all keys and reloads | Manual dev-tools clearing | Enables one-click demo reset for user testing without explaining dev tools. |

---

## Data Flow

```
config.html ──localStorage──┐
                            ├──→ index.html  ←── menu.json (fetch/XHR)
                            │        ↓
                            │   confirmations + deadline flag
                            │        ↓
                            └──→ admin.html  ←── fake employee array
```

1. Employee sets name + attendance days on `config.html` → saved to `viandas_user`.
2. `index.html` reads `viandas_user`, fetches `menu.json`, renders only selected days.
3. Confirm click writes to `viandas_confirmations` with `timestamp` and `late` flag.
4. Deadline button sets `viandas_deadline_simulated = true`; confirm buttons disable and new marks are flagged `late`.
5. `admin.html` reads `viandas_confirmations`, merges with hardcoded employee array, renders traffic-light table.

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `prototype/index.html` | Create | Menu + confirm + notification banner + deadline simulator |
| `prototype/config.html` | Create | Name input + Mon–Fri attendance toggles |
| `prototype/admin.html` | Create | Consolidated table with traffic-light statuses |
| `prototype/style.css` | Create | Mobile-first CSS with design tokens and one media query |
| `prototype/menu.json` | Create | Hardcoded real menu (May 12–16, 2026) |
| `prototype/app.js` | Create | Shared vanilla JS: localStorage I/O, render helpers, deadline toggle |

---

## Interfaces / Contracts

### localStorage Keys

| Key | Type | Schema |
|-----|------|--------|
| `viandas_user` | JSON | `{ name: string, attendance: [bool,bool,bool,bool,bool] }` |
| `viandas_confirmations` | JSON | `{ "2026-05-12": { confirmed: true, timestamp: "ISO", late: false }, … }` |
| `viandas_deadline_simulated` | boolean | `true` / `false` |

### menu.json Shape

```json
{
  "week": "2026-05-12",
  "days": [
    { "date": "2026-05-12", "label": "Lunes 12/05",
      "options": ["Milanesa napolitana con puré", "…"] }
  ]
}
```

### CSS Token API

```css
:root {
  --bg-dark: #1a1a2e; --accent: #e94560; --bg-light: #f5f5f5;
  --success: #51cf66; --danger: #ff6b6b; --warning: #ffd43b;
  --radius: 8px; --space: 16px;
}
```

---

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | localStorage read/write, date formatter, confirmation builder | Manual console assertions in browser dev tools |
| Integration | Config → index → admin end-to-end flow | Walkthrough script: set user, confirm 2 days, simulate deadline, check admin colors |
| E2E | Mobile viewport usability | Chrome DevTools device mode + real phone smoke test |

---

## Migration / Rollout

No migration required. `prototype/` is self-contained. Delete folder to roll back.

---

## Open Questions

- [ ] Should `menu.json` live in `prototype/` or be inlined as a `<script type="application/json">` to avoid a fetch and work offline instantly?
