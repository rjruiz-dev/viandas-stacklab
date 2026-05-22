# Viandas StackLab — Etapa 1: Esqueleto (Skeleton MVP) Specification

## Capabilities

| Capability | Status | Description |
|---|---|---|
| `weekly-menu` | New | Display hardcoded weekly menu (Mon–Fri, 6 options/day) |
| `attendance-config` | New | Employee selects which days they attend (L–V toggles) |
| `meal-confirmation` | New | One-click confirm with visual feedback (✓) |
| `deadline-simulation` | New | Button to simulate Thursday 10 AM cutoff state |
| `notification-simulation` | New | Static banner showing Gmail/Google Chat reminder UX |
| `admin-consolidated-view` | New | Table showing employees × days with confirmations |
| `admin-traffic-light` | New | Color-coded status (green/red/yellow) for Lucía |

---

## 1. User Stories

| Role | Story |
|---|---|
| **Martín (employee)** | As Martín, I want to configure my office days and confirm viandas in 1 click so I don't forget or waste food. |
| **Lucía (admin)** | As Lucía, I want to see who confirmed and who didn't at a glance so I stop chasing people manually. |

---

## 2. Screen-by-Screen Flow

| # | Screen | File | Purpose |
|---|---|---|---|
| 1 | **Config** | `config.html` | Employee selects Mon–Fri attendance toggles. Saved to localStorage. |
| 2 | **Menu** | `index.html` | Shows weekly menu for selected days only. One-click confirm per day. Visual checkmark feedback. "Simular jueves 10 AM" button. Notification banner. |
| 3 | **Admin** | `admin.html` | Consolidated table: employees × days. Traffic-light colors. Fake export button. |

---

## 3. State Management

All state persisted in `localStorage` with these keys:

| Key | Schema |
|---|---|
| `viandas_user` | `{ name: string, attendance: [bool×5] }` |
| `viandas_confirmations` | `{ [date]: { confirmed: bool, timestamp: ISO, late: bool } }` |
| `viandas_deadline_simulated` | `bool` |

- Cleared on `?reset=1`.
- Graceful degrade if localStorage unavailable: show demo data, console warn.

---

## 4. Data Model

### menu.json
```json
{
  "week": "2026-05-12",
  "days": [
    { "date": "2026-05-12", "label": "Lunes 12/05",
      "options": ["Milanesa napolitana con puré", "Pollo al disco con arroz", "Tartas de verdura", "Pollo grillado", "Ensalada César", "Wrap vegetales"] },
    { "date": "2026-05-13", "label": "Martes 13/05",
      "options": ["Bife de chorizo", "Penne rigate", "Wok de verduras", "Bife grillado", "Bowl quinoa", "Sopa lentejas"] },
    { "date": "2026-05-14", "label": "Miércoles 14/05",
      "options": ["Pollo al horno", "Milanesa de soja", "Lasagna berenjena", "Suprema grillada", "Ensalada atún", "Sandwich pechuga"] },
    { "date": "2026-05-15", "label": "Jueves 15/05",
      "options": ["Ñoquis con tuco", "Risotto champiñones", "Hamburguesa lentejas", "Pechuga plancha", "Sopa verduras", "Wrap pollo"] },
    { "date": "2026-05-16", "label": "Viernes 16/05",
      "options": ["Pescado horno", "Suprema rellena", "Fajitas vegetales", "Filet merluza", "Bowl salmón", "Ensalada griega"] }
  ]
}
```

### Employees (hardcoded demo array)
```json
["Martín Fernández", "Diego López", "Sofía Martínez", "Ana García", "Carlos Ruiz"]
```

### Confirmations
Derived at runtime from localStorage + hardcoded fake data for demo.

---

## 5. Visual Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg-dark` | `#1a1a2e` | Page background, admin header |
| `--accent` | `#e94560` | Primary buttons, links, focus outline |
| `--bg-light` | `#f5f5f5` | Card backgrounds, input fields |
| `--text` | `#ffffff` / `#1a1a2e` | Text on dark / text on light |
| `--success` | `#2ecc71` | Confirmed on time |
| `--warning` | `#f1c40f` | Late confirmation |
| `--danger` | `#e74c3c` | Missing / deadline passed |
| `--radius` | `8px` | Button and card corners |
| `--space` | `16px` | Base spacing unit |
| `--font` | `system-ui, -apple-system, sans-serif` | Typography |

**Mobile-first**: base styles for `<480px`; `@media (min-width: 768px)` for desktop.

---

## 6. Error States & Edge Cases

| Case | Behavior |
|---|---|
| No localStorage | Show demo data; console warn |
| Confirm after deadline | Button disabled; message: "Cierre: jueves 10 AM" |
| No attendance days selected | Show "Configurá tus días" CTA linking to config.html |
| JS disabled | Static HTML still renders menu; no confirm possible |
| Admin with zero employees | Show "Sin datos" placeholder row |
| Invalid date in menu.json | Skip that day with console error |

---

## 7. Accessibility Requirements

- **Buttons**: `aria-pressed` for toggles, `aria-label` for confirm actions.
- **Color**: not sole indicator — checkmark icon + text + color.
- **Focus**: visible `outline: 2px solid var(--accent)`.
- **Language**: `lang="es"` on `<html>`.
- **Table**: `scope="col"` / `scope="row"` on admin table headers.

---

## 8. Performance Constraints

- **< 3 seconds** to first meaningful paint on simulated 3G.
- Single CSS file, no external fonts or images.
- `menu.json` < 5 KB.
- No JS frameworks; vanilla DOM only.
- `<script defer>` on all scripts.

---

## Requirements

### Requirement: weekly-menu

The system MUST display the hardcoded weekly menu (Mon–Fri, 6 options each day) using real data from May 12–16, 2026.

#### Scenario: Menu loads on index.html

- GIVEN the employee opened index.html
- WHEN the page loads
- THEN the 5 days with 6 dishes each are visible
- AND the current day's menu is visually highlighted

### Requirement: attendance-config

The system MUST allow the employee to toggle which days (Mon–Fri) they attend the office.

#### Scenario: Save attendance days

- GIVEN the employee is on config.html
- WHEN they toggle days and click "Guardar"
- THEN the selection persists in localStorage
- AND index.html only shows menu for selected days

#### Scenario: No days selected

- GIVEN no days are selected
- WHEN the employee visits index.html
- THEN a "Configurá tus días" message is shown with a link to config.html

### Requirement: meal-confirmation

The system MUST allow one-click confirmation per day with immediate visual feedback.

#### Scenario: Confirm a day

- GIVEN the employee sees a day's menu
- WHEN they click "Confirmar"
- THEN the button changes to "✓ Confirmado" with green styling
- AND the confirmation is stored with a timestamp

#### Scenario: Deadline passed

- GIVEN the deadline is simulated as passed
- WHEN the employee tries to confirm
- THEN the confirm button is disabled
- AND a message shows "Cierre: jueves 10 AM"

### Requirement: deadline-simulation

The system MUST provide a button to simulate Thursday 10 AM deadline state.

#### Scenario: Simulate deadline

- GIVEN the employee is on index.html
- WHEN they click "Simular jueves 10 AM"
- THEN all confirm buttons are disabled
- AND late confirmations are flagged for admin view

### Requirement: notification-simulation

The system MUST display a static banner showing what a Gmail/Google Chat reminder would look like.

#### Scenario: Banner visible

- GIVEN the employee is on index.html
- WHEN the page loads
- THEN a banner shows: "Recordatorio: Tenés hasta el jueves 10 AM para confirmar tu vianda (simulación Gmail/Google Chat)"

### Requirement: admin-consolidated-view

The system MUST show a table of employees × days with confirmation status.

#### Scenario: View consolidated data

- GIVEN Lucía opens admin.html
- WHEN the page loads
- THEN a table shows all fake employees and their confirmation status per day
- AND unconfirmed cells are clearly marked

### Requirement: admin-traffic-light

The system MUST color-code confirmation status as green (confirmed), red (missing), yellow (late).

#### Scenario: Traffic-light colors

- GIVEN Lucía views the admin table
- WHEN she scans any cell
- THEN green = confirmed on time, red = not confirmed, yellow = confirmed after deadline
- AND colors are accompanied by text labels for accessibility
