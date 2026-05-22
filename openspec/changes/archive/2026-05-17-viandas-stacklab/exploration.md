# Exploration: Etapa 1 — Esqueleto (Viandas StackLab)

## Current State

The project has completed Problem Identification and Informe Final de Validación (`docs/` folder). Zero code exists in `src/` or `prototype/`. The GO decision is made (12/12 checkpoints). MoSCoW defines 6 Must-have features for the MVP. Etapa 1 goal is to build the cheapest possible prototype to validate the core flow with Martín (employee) and Lucía (admin).

The user has mentally committed to **Lovable (bolt.new)** for the frontend and **Supabase** for the backend, but the immediate task is Etapa 1: a skeleton with hardcoded data, no DB, no auth.

### Affected Areas

- `prototype/` — will contain the Etapa 1 skeleton code
- `design/wireframes/` — needs wireframes for the 3–4 core screens
- `docs/problem-identification/problem-id.md` — source of truth for MoSCoW and user journeys

## Approaches

### 1. Manual HTML + CSS + JS vanilla
Simple static files, no build step.

- **Pros**: Zero dependencies; fastest to iterate; aligns with `prototype/README.md`; trivial to deploy (GitHub Pages / Netlify); forces focus on flow not framework; Martín and Lucía can open it instantly from any device
- **Cons**: Not reusable for Etapa 2 (throwaway code); harder to make responsive without a framework; no component/state management patterns
- **Effort**: Low

### 2. Lovable / Bolt.new
AI-assisted visual prototyping.

- **Pros**: Generates polished UI fast; mobile-responsive by default; produces React code that could seed Etapa 2; good for stakeholder demos
- **Cons**: Code quality is unpredictable and often over-engineered; vendor lock-in; may generate features outside MoSCoW scope (auth screens, animations, DB schemas); harder to “keep it simple” when AI suggests extras; requires understanding and cleaning generated code; burning course hours on polish instead of validation
- **Effort**: Low (to generate), Medium (to clean and constrain)

### 3. Lightweight framework (Alpine.js or Petite Vue)
Minimal reactivity without build step.

- **Pros**: Better reactivity than vanilla JS; still no build step; easy learning curve; closer to eventual Vue/React migration
- **Cons**: Adds a dependency; introduces a learning curve for a 2-week prototype; risk of premature optimization; not necessary for a throwaway skeleton
- **Effort**: Low-Medium

## Recommendation

**Manual HTML + CSS + JS vanilla** for Etapa 1.

The explicit goal of the skeleton is *“the cheapest test of the hypothesis.”* A few static files with hardcoded data is the absolute cheapest. Lovable is valuable for **Etapa 2 (Datos Reales)** when we need a polished, responsive UI with real interactivity and a Supabase backend.

Using Lovable now risks:
1. **Over-building** — generating auth screens, animations, DB schemas that aren’t in scope
2. **Slower iteration** — cleaning AI output vs writing exactly what’s needed
3. **Confusing validation** — users might judge the tool’s polish instead of the flow’s logic

The throwaway nature of vanilla JS is a feature, not a bug — it removes the temptation to “save code for later” and forces us to test the *concept*, not the *implementation*.

**For Etapa 2**, migrate to Lovable + React + Vite to build the real product on top of validated UX.

## What Exactly Goes Into the Skeleton MVP

Based on the 6 Must features from MoSCoW and the Etapa 1 criteria, the skeleton needs **3 screens** and **1 JSON data file**:

| Screen | File | Purpose |
|--------|------|---------|
| **Configurar días** | `config.html` | Martín selecciona qué días de la semana va a la oficina (L–V toggles) |
| **Menú + Confirmar** | `index.html` | Muestra el menú hardcodeado de la semana; por cada día, 1 botón “Confirmar vianda”; feedback visual ✓ inmediato |
| **Consolidado Admin** | `admin.html` | Lucía ve una tabla falsa: empleados × días, con datos hardcodeados que simulan un consolidado real |
| **Datos** | `menu.json` | Menú de una semana real (5 días, plato principal + opción vegetariana) |

**Explicitly OUT for Etapa 1**:
- No base de datos (todo en memoria / JSON estático)
- No autenticación (simular usuario con un select o URL param)
- No deadline real (simular con un botón o mensaje estático)
- No recordatorios
- No exportar a Excel
- No responsive framework (usar CSS puro con media queries básicas)

## Validation Needed from Martín and Lucía

### Martín (Empleado)
1. ¿Entiende el concepto de “configurar días de asistencia” sin explicación? ¿O prefiere marcar día por día?
2. ¿Completa el flujo (configurar días → ver menú → confirmar viandas) en menos de 3 minutos?
3. ¿El botón “Confirmar” con feedback visual le da certeza de que pidió?
4. ¿Lo probaría en el celular? ¿La versión móvil es usable?

### Lucía (Admin)
1. ¿Entiende la vista de consolidado? ¿Le parece más clara que la planilla Excel?
2. ¿Echa de menos alguna columna o dato que hoy tiene en su Excel?
3. ¿Se imagina enviando ese consolidado al proveedor? ¿Le falta “cerrar” algo?
4. ¿Qué haría si alguien le dice “me olvidé, agregame” después de ver el consolidado?

## Risks and Unknowns

| Risk | Impact | Mitigation |
|------|--------|------------|
| **"Días de asistencia" confusion** | High — If Martín doesn’t get the pre-config model in < 3 min, the core UX assumption is wrong | Test with 2 variants: (A) pre-config días, (B) mark each day individually. See which one he finishes faster. |
| **Lucía needs Excel export** | High — If she can’t export the consolidado, she’ll reject the system regardless of how pretty it looks | Ask explicitly: “¿Si esto te generara un Excel, lo usarías?” Include a fake “Exportar” button even if it does nothing, to test intent. |
| **Mobile experience untested** | High — Most employees will use phones. A desktop-only skeleton gives false validation | Force mobile testing. Use BrowserStack, or simply hand Martín your phone. |
| **Deadline behavior can’t be tested** | Medium — With hardcoded data, we can’t validate the “jueves 10 AM cutoff” anxiety | Add a manual “Simular cierre” button that locks the UI and shows the cutoff message. Ask Lucía: “¿Esto te alivia o te estresa?” |
| **Scope creep into Lovable** | Medium — User already committed to Lovable mentally; risk of burning hours on AI polish instead of validation | Time-box Etapa 1 to **4–6 hours max**. If it’s not done by then, stop and reassess. |
| **Hardcoded menu feels fake** | Low — Users might not engage with dummy data | Use a real week’s menu from the actual provider. Ask Lucía for the menú de la semana pasada. |

## Open Questions (Blockers for Proposal)

Before moving to `sdd-propose`, resolve:

1. **Will the skeleton be tested on real mobile devices?** If not, the validation is incomplete.
2. **Should we include a “fake deadline” simulation** (e.g., a button “Simular jueves 10 AM”) so Lucía can experience the cutoff?
3. **Do we have a real menu from the provider** to hardcode, or should we invent one?
4. **Does Lucía need an “Exportar a Excel” button** in the skeleton, even if non-functional, to test intent?

## Ready for Proposal

**Yes** — once the 4 open questions above are answered.

The scope for `sdd-propose` should be narrow:
- 3 static HTML files (config, menu/confirm, admin dashboard)
- 1 CSS file with mobile-first media queries
- 1 JSON file with hardcoded menu data for one real week
- Zero dependencies, zero build step
- Deployed to GitHub Pages or served locally with `npx serve`

---
*Exploration generated by sdd-explore for Viandas StackLab — Etapa 1: Esqueleto*
