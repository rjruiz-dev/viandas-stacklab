# Apply Progress: viandas-stacklab — PR 1 (Foundation)

**Date**: 2026-05-17
**Mode**: Standard (no test runner, no strict_tdd)
**Delivery Strategy**: feature-branch-chain
**Current Work Unit**: PR 1 — Foundation (shared data, styles, and JS logic)
**PR Targets**: `feature/viandas-stacklab` (created from `main`)

---

## Completed Tasks

| # | Task | Status | Lines |
|---|------|--------|-------|
| 1.1 | Create `prototype/` directory | ✅ Complete | — (pre-existing) |
| 1.2 | Create `prototype/menu.json` with real May 12–16, 2026 menu | ✅ Complete | 65 |
| 2.1 | Create `prototype/style.css` with design tokens, mobile-first, traffic-light classes, 768px breakpoint | ✅ Complete | 744 |
| 2.2 | Create `prototype/app.js` with localStorage I/O, state management, user simulation, `?reset=1`, date formatter, confirmation builder | ✅ Complete | 613 |
| 2.3 | Wire `?reset=1` URL param to clear all viandas keys and reload | ✅ Complete | — (in 2.2 init) |

---

## Files Created

| File | Lines | Description |
|------|-------|-------------|
| `prototype/menu.json` | 65 | Hardcoded weekly menu May 12–16, 2026 (5 days × 6 options) per spec §4 |
| `prototype/style.css` | 744 | Mobile-first CSS: design tokens, cards, buttons, forms, toggles, tables, alerts, traffic-light classes, notification banner, deadline banner, responsive grid, reduced-motion, print styles |
| `prototype/app.js` | 613 | Shared vanilla JS module (`ViandasApp`): localStorage I/O with graceful degradation, user/confirmation/deadline state management, `?reset=1` handler, traffic-light status helpers, date formatting, confirmation builder, user simulation dropdown, notification banner dismiss, deadline simulator button |

**Total**: 1422 lines

---

## Implementation Details

### menu.json
- Follows exact shape from spec §4: `{ week, days: [{ date, label, options[] }] }`
- All 30 menu items from the real May 2026 menu

### style.css
- Design tokens in `:root` matching design.md: `--bg-dark: #1a1a2e`, `--accent: #e94560`, `--bg-light: #f5f5f5`, `--success: #51cf66`, `--danger: #ff6b6b`, `--warning: #ffd43b`
- Mobile-first: base styles for `<480px`, `@media (min-width: 768px)` desktop breakpoint, `@media (min-width: 1024px)` larger desktop
- Traffic-light classes: `.status-ok` (green), `.status-late` (yellow), `.status-missing` (red), `.status-na` (gray)
- Components: `.card`, `.btn--primary/secondary/success/danger/warning/outline/sm/block`, `.form-input`, `.toggle-btn` with `[aria-pressed="true"]`, tables with sticky headers, `.alert--info/warning/success/danger`, `.notification-banner`, `.deadline-banner`, `.cta-card`
- Accessibility: `:focus-visible` outline, `@media (prefers-reduced-motion: reduce)`, print styles

### app.js
- **Namespace**: `window.ViandasApp` — global object with full public API
- **localStorage**: `getItem()`, `setItem()`, `removeItem()` with `storageAvailable()` check and graceful fallback to console warnings
- **State**: `getCurrentUser()`, `saveUser()`, `getConfirmations()`, `saveConfirmation()`, `removeConfirmation()`, `isDeadlineSimulated()`, `setDeadlineSimulated()`, `toggleDeadlineSimulated()`
- **Reset**: `resetAll()` clears all 5 viandas keys, removes `?reset=1` from URL, and reloads. Auto-triggered on `init()`.
- **Traffic-light**: `getStatusClass(date, isDeadline)` returns CSS class, `getStatusLabel(date, isDeadline)` returns accessible text
- **Dates**: `formatDateLabel(iso)` → "Lunes 12/05", `getWeekdayName(iso)`, `getDayIndex(iso)`, `nowISO()`
- **User simulation**: `initUserSimulation(container, { onChange })` builds `<select>` with 5 real employee names, checks `?user=` fallback on first load, persists to `viandas_simulated_user`
- **Banner**: `initNotificationBanner(container)` creates dismissible Gmail/Chat style banner, `dismissBanner()` persists across pages
- **Deadline**: `initDeadlineButton(container, { onToggle })` creates toggle button with visual state change
- **Employees**: `["Martín Fernández", "Diego López", "Sofía Martínez", "Ana García", "Carlos Ruiz"]`

---

## Deviations from Design

None — implementation matches design.md architecture decisions and spec.md data model.

---

## Issues Found

None.

---

## Remaining Tasks (for PR 2)

- [ ] 3.1 Create `prototype/config.html`
- [ ] 3.2 Create `prototype/index.html`
- [ ] 3.3 Create `prototype/admin.html`
- [ ] 3.4 Add `<select>` dropdown in header (all 3 pages) — JS logic already in app.js
- [ ] 4.1 Manual walkthrough verification
- [ ] 4.2 Chrome DevTools mobile viewport test
- [ ] 4.3 GitHub Pages deployment

---

## Status

**5/13** tasks complete. Ready for PR 2 (Pages).
