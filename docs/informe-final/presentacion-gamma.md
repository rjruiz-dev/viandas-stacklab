# Viandas StackLab — Presentación para Gamma

> Instrucciones: Copiar y pegar cada bloque "SLIDE" como un prompt/texto separado en Gamma.app. Gamma generará el diseño automático.

---

## SLIDE 1: Portada

**Título:** Viandas StackLab: De Excel al 95%

**Subtítulo:** Cómo una empresa de software en Santa Fe pierde $100.000 ARS al mes pidiendo viandas con planillas Excel — y qué vamos a hacer al respecto.

**Detalles:**
- Empresa: StackLab (software, ~50 empleados)
- Ubicación: Santa Fe, Argentina
- Período: Abril – Mayo 2026
- Elaborado por: Equipo de Producto

---

## SLIDE 2: El Problema en Números

**Título:** El problema es real y costoso

**Contenido:**

💰 **Pérdida económica mensual:** $71.000 – $129.000 ARS
- 3 a 5 viandas por semana van directo a la basura
- Costo unitario: $5.500 – $6.000 ARS por vianda

⏱️ **Tiempo perdido:** 8-12 horas mensuales de Lucía (administración)
- Consolidación manual de pedidos
- Persecución de confirmaciones por email y WhatsApp

📉 **Tasa de confirmación actual:** ~70%
- 55% de los empleados (11 de 20) tienen al menos un día sin confirmar
- Emails de recordatorio: <40% de apertura

**Nota al pie:** Datos de observación directa y entrevistas, abril-mayo 2026.

---

## SLIDE 3: Las Voces del Equipo

**Título:** "Ya ni leo los emails de Lucía"

**Contenido:**

> *"Veo el asunto 'PEDIDO VIANDAS' y digo 'después lo hago'. Después me olvido y el jueves a las 10:30 me quiero matar."*
> **— Martín Fernández**, Desarrollador

> *"Los jueves de 9 a 11 AM son un infierno. Termino anotando todo a mano en un papelito."*
> **— Lucía Gómez**, Administración Comedor

> *"Sin querer le marco la vianda a otro empleado. La planilla es compartida. Es un desastre."*
> **— Diego Martínez**, QA

> *"En una empresa de tecnología estamos pidiendo viandas con Excel. Es una locura."*
> **— Sofía Herrera**, Diseñadora UX

**Dato clave:** 4 de 4 empleados entrevistados describieron el mismo problema con lenguaje idéntico.

---

## SLIDE 4: El Workaround de Hoy

**Título:** 5 pasos para pedir una vianda (y que igual puede fallar)

**Contenido:**

El ciclo semanal actual:

1. **Lunes 9 AM:** Lucía recibe el menú, lo copia a Google Sheets, envía email a 50 personas
2. **Lunes-Miércoles:** El empleado abre email → busca link → abre planilla → navega pestaña → busca su nombre → marca días
3. **Martes-Miércoles:** Lucía envía 2 recordatorios. La mayoría ignora los emails.
4. **Jueves 10 AM:** Deadline. Lucía cierra planilla, arma consolidado a mano.
5. **Jueves 10:15 AM:** 3 personas le escriben por WhatsApp: "me olvidé, ¿me agregás?"

**Problemas estructurales:**
- ❌ Planilla compartida: te confundís de fila y pedís por otro
- ❌ Sin confirmación de "ya pediste": no sabés si lo hiciste
- ❌ Celular inusable: Google Sheets en móvil es una tortura
- ❌ Post-deadline imposible: si te olvidaste, cagaste
- ❌ Feriados manuales: Lucía marca a mano cada día no laborable

---

## SLIDE 5: North Star Metric

**Título:** La métrica que importa: % de confirmación correcta

**Contenido:**

**North Star Metric (NSM):**
```
(Viandas confirmadas antes del deadline / Total empleados que asistirán) × 100
```

**Meta objetivo: ≥ 95%**

**Hoy estamos en: ~70%**

**¿Por qué esta métrica?**
- Refleja el outcome real (no output): ¿se resolvió el problema?
- Es "leading": podemos actuar antes del deadline si la tasa baja
- Alinea a todos: Martín quiere comer, Lucía no quiere perseguir, la empresa no quiere tirar plata

**Métricas de soporte:**
- Tiempo admin/semana: de 2.5h → ≤30 min
- Viandas no reclamadas: de 3-5/semana → ≤1
- Cambios post-deadline: de 6-10/s mes → ≤2/semana

---

## SLIDE 6: Impacto Económico y Operativo

**Título:** De $129.000 perdidos a $15.000 controlados

**Contenido:**

**Before (Planilla Excel):**
- 💸 Pérdida mensual: $71.000 – $129.000 ARS
- ⏱️ Horas admin/mes: 8-12 horas
- 📉 Tasa confirmación: ~70%
- 😤 Empleados frustrados, Lucía agotada

**After (MVP web):**
- 💸 Pérdida mensual proyectada: ≤$15.000 ARS
- ⏱️ Horas admin/mes: ≤2 horas
- 📈 Tasa confirmación proyectada: ≥95%
- 😎 Proceso de 5+ pasos → 1 clic

**ROI:**
- Inversión inicial estimada: 40 horas de desarrollo
- Ahorro mensual: ~$84.000 ARS + 6-10 horas de Lucía
- **Payback: 4-5 meses**

**Proyección mes a mes:**
- Mes 1 (semanas 1-2): ≥70% confirmación, ≤4h admin
- Mes 1 (semanas 3-4): ≥90% confirmación, ≤2h admin
- Mes 2: ≥95% confirmación (target NSM), ≤2h admin

---

## SLIDE 7: La Solución — MVP Web

**Título:** Un clic. Eso es todo.

**Contenido:**

**Para el empleado:**
- Ve el menú semanal con fotos/descripciones
- Configura qué días va a la oficina (una vez, se repite semanal)
- Confirma vianda con **1 clic por día**
- Recibe feedback visual: "✅ Confirmado"
- Puede modificar hasta 1 hora antes del deadline
- Recordatorio automático por Slack (24h y 2h antes)

**Para Lucía (admin):**
- Recibe consolidado diario **automático** (quién pidió qué)
- Marca feriados/días no laborables en un calendario
- Ve estadísticas simples: % confirmación, viandas totales, tendencia
- **No toca Excel. Nunca más.**

**Stack técnico:**
- Frontend: Lovable (bolt.new) → HTML/JS responsive
- Backend: Supabase (base de datos + autenticación)
- Notificaciones: Slack API

---

## SLIDE 8: Roadmap — 4 Etapas

**Título:** No hacemos todo de una. Validamos paso a paso.

**Contenido:**

**Etapa 1: Esqueleto (1-2 semanas)**
- MVP simple: menú hardcodeado, 1 clic, consolidado simulado
- **Validamos:** ¿El flujo tiene sentido? ¿Lo usan sin explicación?
- **Éxito:** Martín y 3+ empleados completan en <3 minutos

**Etapa 2: Datos Reales (2-3 semanas)**
- Base de datos real, auth, deadline automático, consolidado real
- **Validamos:** ¿Confirman sin recordatorios? ¿Lucía confía?
- **Éxito:** 15+ empleados, 2 semanas, ≥70% confirmación

**Etapa 3: Recordatorios + Ajustes (1-2 semanas)**
- Slack auto, modificar hasta deadline, estadísticas
- **Validamos:** ¿Los recordatorios mueven la aguja? ¿Bajan las no reclamadas?
- **Éxito:** ≥90% confirmación, ≤30 min admin/semana

**Etapa 4: Validación Final (1 semana)**
- Encuesta a todos, entrevista Lucía, documentación
- **Decisión:** ¿GO, iterar, o pivotar?

---

## SLIDE 9: Criterios de Decisión (GO / NO-GO)

**Título:** Semana 8: decidimos si seguimos o pivotamos

**Contenido:**

🟢 **GO — Adopción definitiva**
- NSM ≥ 95% durante 4 semanas consecutivas
- Lucía administra en < 30 min/semana
- ≥ 80% de empleados prefiere el sistema
- **Acción:** Reemplazar Excel definitivamente

🟡 **GO Condicional — Iterar**
- NSM entre 70% y 94%
- Lucía administra en < 1h/semana
- **Acción:** 1 ciclo más de iteración antes de decisión final

🔴 **NO-GO — Pivotar**
- NSM < 70% después de 4 semanas
- Lucía sigue necesitando recordatorios manuales
- **Acción:** El problema no es fricción, es cultural. Replantear enfoque.

---

## SLIDE 10: Próximos Pasos

**Título:** Empezamos la semana que viene

**Contenido:**

**Inmediato:**
1. Abrir Lovable (bolt.new) + Supabase
2. Construir Esqueleto (Etapa 1): menú, 1 clic, consolidado simulado
3. Convocar 10-15 voluntarios por Slack para Early Adopters

**Próximas 2 semanas:**
4. Testear con Martín, Diego, Sofía y 5-10 más
5. Medir: ¿completan el flujo en <3 min? ¿dicen "es mejor que Excel"?
6. Documentar feedback y ajustar antes de Etapa 2

**Stack recomendado:**
- 🎨 Frontend: Lovable (IA genera UI en minutos)
- 🗄️ Base de datos: Supabase (PostgreSQL + auth)
- 💬 Notificaciones: Slack API
- 📊 Dashboard: Gráficos embebidos

**Pregunta para la audiencia:**
¿Conocen alguna empresa con problema similar? ¿Qué herramienta usaron?

---

*Nota: Los nombres (Martín, Lucía, Diego, Sofía, StackLab) son ficticios para proteger la privacidad. El problema y los datos son reales.*
