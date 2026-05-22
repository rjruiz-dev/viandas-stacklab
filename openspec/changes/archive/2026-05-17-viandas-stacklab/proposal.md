# Proposal: Etapa 1 — Esqueleto (Skeleton MVP)

## Intent

Validate the core flow of the viandas system with real users (Martín employee, Lucía admin) before committing to Lovable + Supabase. Build the cheapest possible prototype — static HTML/CSS/JS with hardcoded data — to prove the UX works in <3 minutes per user. Zero dependencies, zero build step.

## Scope

### In Scope
- 3 HTML files: `config.html` (attendance days), `index.html` (menu + confirm), `admin.html` (consolidated view)
- 1 CSS file: `style.css` (mobile-first, pure CSS media queries)
- 1 JSON file: `menu.json` (real menu week May 12–16, 2026)
- Simulated user (URL param or select, no auth)
- "Simular jueves 10 AM" button for deadline testing
- **Simulated notification banner** in `index.html` (static text showing what a Gmail/Google Chat reminder would look like)
- **Admin table with traffic-light colors**: green = confirmed, red = not confirmed, yellow = late confirmation
- Fake export button (visual only, no file generation)
- GitHub Pages deployment or local `npx serve`

### Out of Scope
- Database (memory/JSON only)
- Real authentication
- Real deadline automation
- **Real** notifications (Gmail/Google Chat API integration — this is planned for Etapa 3)
- Excel/CSV export (visual report only)
- Responsive framework (pure CSS)
- Lovable or any AI-generated UI

## Capabilities

### New Capabilities
- `weekly-menu`: Display hardcoded weekly menu (Mon–Fri, 6 options each day)
- `attendance-config`: Employee selects which days they attend (L–V toggles)
- `meal-confirmation`: One-click confirm with visual feedback (✓)
- `deadline-simulation`: Button to simulate Thursday 10 AM cutoff state
- `notification-simulation`: Static banner showing what a Gmail/Google Chat reminder would look like (to validate notification UX)
- `admin-consolidated-view`: Table showing employees × days with confirmations
- `admin-traffic-light`: Color-coded status (green = confirmed, red = missing, yellow = late) so Lucía can instantly see who hasn't ordered

### Modified Capabilities
- None

## Approach

Pure HTML + CSS + JS vanilla. No build step, no dependencies. Hardcoded real menu from planillas (week May 12–16). State stored in memory (localStorage optional for persistence demo). Mobile-first CSS with media queries.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `prototype/` | New | Contains 3 HTML files, 1 CSS, 1 JSON |
| `prototype/index.html` | New | Main employee view: menu + confirm |
| `prototype/config.html` | New | Attendance day configuration |
| `prototype/admin.html` | New | Admin consolidated view |
| `prototype/style.css` | New | Mobile-first styles |
| `prototype/menu.json` | New | Hardcoded real menu data |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Días de asistencia UX confusion | High | Test two variants: pre-config vs mark each day |
| Lucía needs real Excel export | High | Ask explicitly if fake export button satisfies intent |
| Mobile experience untested | High | Force mobile testing with real device |
| Hardcoded menu feels fake | Low | Use real menu from provider (May 12–16) |
| Scope creep to Lovable | Medium | Time-box 4–6 hours max |

## Rollback Plan

Delete `prototype/` folder. Nothing depends on it yet. No DB migrations, no deployed infrastructure.

## Notifications Strategy (Future — Etapa 3)

For the real system (post-MVP), the company already uses **Gmail + Google Chat** (Google Workspace). This is the chosen channel because:
- Everyone already has Gmail open all day
- Google Chat APIs are free with Google Workspace
- No new app installations required (unlike Slack/Discord)
- Can send both email reminders and Chat space messages

Etapa 1 will simulate this with static UI elements only.

## Dependencies

- None (pure static files)

## Success Criteria

- [ ] Martín completes config → menu → confirm flow in <3 minutes on mobile
- [ ] Lucía understands consolidated view without explanation
- [ ] Both users identify at least one thing they'd change
- [ ] No one asks "where do I login?" or "where's the database?"
- [ ] Skeleton deploys to GitHub Pages in <10 minutes