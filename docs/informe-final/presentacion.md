---
marp: true
theme: default
paginate: true
backgroundColor: #1a1a2e
color: #eee
style: |
  section {
    font-family: 'Segoe UI', system-ui, sans-serif;
    padding: 40px;
  }
  h1 { color: #e94560; font-size: 2.2em; }
  h2 { color: #0f3460; font-size: 1.6em; }
  blockquote {
    border-left: 4px solid #e94560;
    padding-left: 16px;
    font-style: italic;
    color: #ccc;
  }
  table {
    font-size: 0.75em;
  }
  th {
    background-color: #16213e;
    color: #e94560;
  }
  td {
    border: 1px solid #333;
  }
  .highlight {
    color: #e94560;
    font-weight: bold;
  }
---

<!-- _class: lead -->

# 🍽️ Viandas StackLab

## Gestor de Pedidos de Viandas

**Informe Final — Validación de Producto**

Período: Abril – Mayo 2026 | Santa Fe, Argentina

---

<!-- _class: lead -->

## ¿Qué es esto?

StackLab (50 empleados) tiene un comedor interno gestionado con **planillas Excel compartidas** y recordatorios por email.

**Resultado:** desperdicio, frustración y horas de trabajo manual.

Este informe cuenta cómo detectamos el problema y qué proponemos hacer.

---

## El Problema en Números

| Indicador | Valor Actual |
|-----------|-------------|
| Viandas desperdiciadas/semana | **3-5 unidades** |
| Pérdida económica mensual | **$71.000 - $129.000 ARS** |
| Tiempo admin/semana (Lucía) | **2-3 horas** |
| Pasos para confirmar vianda | **5+ pasos** |
| Tasa de apertura de emails | **< 40%** |

---

## 💬 Lo que dicen los empleados

> *"Ya ni leo los emails de Lucía. Veo el asunto y digo 'después lo hago'. Después me olvido."*
> **— Martín Fernández**, Desarrollador

> *"Los jueves de 9 a 11 AM son un infierno. Me escriben tres personas por WhatsApp diciendo 'me olvidé, ¿me agregás?'"*
> **— Lucía Gómez**, Administración Comedor

> *"La planilla es compartida. Me confundí de fila y le pedí la vianda a otro empleado sin darme cuenta."*
> **— Diego Martínez**, QA

---

## 🚨 Señales de Validación

| Señal | Estado |
|-------|--------|
| Las personas describen el problema sin que se les pregunte | ✅ Confirmado |
| Gastan tiempo/dinero intentando resolverlo | ✅ Confirmado |
| Se frustran al describir su workaround | ✅ Confirmado |
| +3 personas describen el mismo problema | ✅ Confirmado |

**4 de 4 entrevistados** usaron frases como "me olvidé", "no llegué a completar" de forma independiente.

---

## 🎯 North Star Metric

### "% de viandas confirmadas correctamente por semana"

```
NSM = (Viandas confirmadas antes del deadline / Total empleados que asistirán) × 100
```

### **Meta: ≥ 95%**

**¿Por qué esta métrica?**
- Refleja directamente el valor del producto
- Es accionable (se puede intervenir antes del deadline)
- Alinea a todos: empleados, Lucía y la empresa

---

## 📊 Métricas de Soporte

| Métrica | Target |
|---------|--------|
| Tiempo semanal de administración | ≤ 30 min |
| Viandas no reclamadas/semana | ≤ 1 |
| Cambios post-deadline | ≤ 2/semana |

---

## 🛠️ Workaround Actual — Planillas Excel

### Hallazgos críticos:

1. **Consolidación 100% manual** — 45 min/semana contando a mano
2. **Fragilidad post-deadline** — Correcciones manuales sin auditoría
3. **55% sin confirmar** — 11 de 20 empleados con advertencias ⚠️
4. **Sin notificaciones** — Lucía debe perseguir a cada uno
5. **Feriados manuales** — Marca a mano cada feriado
6. **Confusión de filas** — Empleados editan filas de otros por error

---

## 📈 Dashboard — Evolución Proyectada

### Gráfico 1: North Star Metric

![Evolución NSM](assets/graficos/grafico-1-nsm-evolucion.png)

**Baseline 72% → Target 95%**

---

## 💰 Reducción de Pérdidas

### Gráfico 2: Impacto Económico

![Pérdidas Mensuales](assets/graficos/grafico-2-perdidas-mensuales.png)

**~$71.000-$129.000 ARS/mes → ≤$15.000 ARS/mes**

---

## ⚡ Eficiencia Administrativa

### Gráfico 3: Tiempo de Gestión

![Tiempo Admin](assets/graficos/grafico-3-tiempo-admin.png)

**2.5-3h/semana → 0.5h/semana**

---

## 🎯 Dashboard Ejecutivo

### Gráfico 4: 4 Paneles de Tracción

![Dashboard Compacto](assets/graficos/grafico-4-dashboard-compacto.png)

---

## 🗺️ Roadmap — 4 Etapas

| Etapa | Qué construimos | Métrica de éxito |
|-------|----------------|-----------------|
| **1. Esqueleto** | MVP web simple (menú hardcodeado, 1 clic) | Flujo completo en <3 min |
| **2. Datos Reales** | Base de datos, auth, deadline automático | 15+ empleados, 2 semanas, ≥70% confirmación |
| **3. Recordatorios** | Slack auto + modificar hasta deadline | ≥90% confirmación, ≤30 min admin/semana |
| **4. Validación** | Encuesta + entrevista Lucía | ≥80% prefiere sistema, Lucía dice "no vuelvo a Excel" |

---

## ✅ Criterios GO / NO-GO

| Resultado | Condición |
|-----------|-----------|
| 🟢 **GO** | NSM ≥95%, Lucía <30min/semana, ≥80% prefiere sistema |
| 🟡 **GO Condicional** | NSM 70-94%, requiere iteración |
| 🔴 **NO-GO** | NSM <70% después de 4 semanas → pivotar |

---

<!-- _class: lead -->

## 🚀 Próximo Paso

### Construir el MVP — Etapa 1: Esqueleto

**Stack recomendado:** Lovable (bolt.new) + Supabase

**Herramientas:**
- Lovable.dev para el frontend en minutos
- Supabase para base de datos y auth
- Slack API para recordatorios (Etapa 3)

---

<!-- _class: lead -->

## 📄 Documentación Completa

**Informe detallado:** `docs/informe-final/informe.md`

**Planillas de evidencia:** `docs/informe-final/assets/`

**Problem ID:** `docs/problem-identification/problem-id.md`

---

<!-- _class: lead -->

# ¿Preguntas? 🍽️

**StackLab — Santa Fe, Argentina**

*Los nombres son ficticios para proteger la privacidad. El problema y los datos son reales.*
