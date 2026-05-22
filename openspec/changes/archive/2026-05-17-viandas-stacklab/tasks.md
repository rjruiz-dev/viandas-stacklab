# Tasks: Etapa 1 — Esqueleto (Skeleton MVP)

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 600–750 |
| 400-line budget risk | Medium |
| Chained PRs recommended | Yes |
| Suggested split | PR 1: Foundation (menu.json + style.css + app.js) → PR 2: Pages (3 HTML files) |
| Delivery strategy | ask-on-risk |
| Chain strategy | feature-branch-chain (active: PR 1 → `feature/viandas-stacklab`) |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: Medium

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Shared data, styles, and JS logic | PR 1 | Base: main; `prototype/menu.json`, `style.css`, `app.js` |
| 2 | Three HTML pages wired to shared assets | PR 2 | Base: PR 1 branch; `config.html`, `index.html`, `admin.html` |

## Phase 1: Scaffold & Data

- [x] 1.1 Create `prototype/` directory
- [x] 1.2 Create `prototype/menu.json` with real May 12–16, 2026 menu (6 options/day, shape per spec §4)

## Phase 2: Shared Foundation

- [x] 2.1 Create `prototype/style.css` with `:root` design tokens, mobile-first layout, `.status-ok`/`.status-late`/`.status-missing` traffic-light classes, and `@media (min-width: 768px)` breakpoint
- [x] 2.2 Create `prototype/app.js` with `localStorage` I/O for `viandas_user`, `viandas_confirmations`, `viandas_deadline_simulated`, `?reset=1` handler, date formatter, and confirmation builder
- [x] 2.3 Wire `?reset=1` URL param to clear all viandas keys and reload (spec §3)

## Phase 3: Pages

- [x] 3.1 Create `prototype/config.html` — name input + Mon–Fri toggles with `aria-pressed`, "Guardar" button saves to `viandas_user` (spec §1 scenario "Save attendance days")
- [x] 3.2 Create `prototype/index.html` — fetches `menu.json`, renders only selected attendance days, one-click "Confirmar" per day with ✓ feedback, deadline simulator button disables confirms and flags late, static notification banner per spec §4 scenario "Banner visible"
- [x] 3.3 Create `prototype/admin.html` — hardcoded employee array × days consolidated table with `scope="col"/"row"`, traffic-light cell classes, fake export button, "Sin datos" fallback row per spec §6 edge case
- [x] 3.4 Add `<select>` dropdown in header (all 3 pages) for user simulation; persist selection to `localStorage`

## Phase 4: Verification

- [ ] 4.1 Manual walkthrough: config → confirm 2 days → simulate deadline → verify admin traffic-light colors match spec §6 scenarios
- [ ] 4.2 Test on Chrome DevTools mobile viewport (375px) and real phone; verify <3s paint on simulated 3G per spec §8
- [ ] 4.3 Deploy `prototype/` to GitHub Pages; verify `?reset=1` and all 3 pages load without 404
