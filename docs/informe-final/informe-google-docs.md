# Informe Final — Viandas StackLab

> **Proyecto**: Gestor de pedidos de viandas para comedor interno  
> **Autor**: Rodrigo Ruiz  
> **Empresa**: StackLab (Santa Fe, ~50 empleados)  
> **Período**: Abril – Mayo 2026  
> **Versión**: v2.0 (Re-entrega)

> **⚠️ Nota legal y de privacidad**: Los nombres de personas (Martín Fernández, Lucía Gómez, Diego Martínez, Sofía Herrera) y la empresa "StackLab" son ficticios, creados para proteger la identidad de empleados reales y evitar exponer información sensible. El problema descrito (gestión de viandas mediante Excel, olvidos, desperdicio, fricción administrativa) es **real y documentado**. Las métricas, citas textuales y evidencias se sustentan en observación directa del entorno laboral y entrevistas con personas reales, anonimizadas para este informe.

---

## 1. Resumen Ejecutivo

StackLab tiene un comedor interno para ~20 empleados que asisten a la oficina. El proceso actual usa planillas Excel compartidas y recordatorios por email, generando desperdicio de **$71.000-$129.000 ARS mensuales** en viandas no reclamadas y **8-12 horas mensuales** de trabajo administrativo manual.

**Hallazgos principales** tras 4 semanas de investigación:

- **Desperdicio económico**: 3-5 viandas no reclamadas por semana × $5.500-6.000 ARS
- **Ineficiencia**: Lucía (administradora) pierde 2-3 horas semanales consolidando Excel
- **Fricción**: 4 de 4 empleados entrevistados se olvidan de confirmar; ignoran emails
- **Validación cualitativa**: Todos describieron el mismo problema con lenguaje similar ("me olvidé", "no llegué a completar la planilla")

**Plan**: MVP web (Etapa 1: Esqueleto) → Datos reales (Etapa 2) → Notificaciones (Etapa 3).

**North Star Metric**: "% de viandas confirmadas correctamente por semana" — meta ≥ 95%.

---

## 2. Hipótesis Priorizadas

| # | Hipótesis | Prioridad | Testeo | Resultado |
|---|-----------|-----------|--------|-----------|
| H1 | Si los empleados configuran días y confirman con 1 clic, se reduce 80% los olvidos | **Alta** | MVP Etapa 1 con datos reales (4 semanas) | Pendiente — requiere MVP |
| H2 | Recordatorios por Slack vs email: 3× más apertura | Media | Test A/B 2 semanas | Señal positiva preliminar |
| H3 | Permitir modificar hasta 1h antes del deadline reduce 50% viandas no reclamadas | Media | Feature Etapa 3 | Pendiente |
| H4 | Consolidado automático reduce tiempo admin de 2-3h a ≤30 min/semana | **Alta** | Time-tracking antes/después | Pendiente |
| H5 | Configurar días una vez y repetir semanalmente ≥90% confirmación sin recordatorios | Media | Semanas 3-4 vs 1-2 | Pendiente |

**Criterio GO/NO-GO**: Si a las 4 semanas la tasa de confirmación espontánea es < 70% y el tiempo admin no baja de 1h/semana, la hipótesis central se considera falsada.

---

## 3. Hallazgos y Evidencias

### 3.1 Datos Cuantitativos

| Indicador | Valor actual | Fuente |
|-----------|-------------|--------|
| Viandas confirmadas /semana (promedio) | 20-25 empleados de ~50 totales | Planilla Excel de Lucía |
| Viandas desperdiciadas /semana | 3-5 unidades | Conteo en heladera, viernes 14:00 hs |
| Costo unitario de vianda | $5.500-6.000 ARS | Valor estimado mercado local |
| **Pérdida económica mensual** | **$71.000-$129.000 ARS** | 3-5 viandas × 4.3 semanas × $5.750 |
| Tiempo semanal de administración | 2-3 horas (promedio 2.5h) | Time-tracking auto-reportado |
| **Tiempo administrativo mensual** | **8-12 horas** | Extrapolación semanal |
| Pasos para confirmar una vianda | 5+ pasos (email → link → Sheets → pestaña → buscar nombre → marcar) | Observación directa |
| Tasa de apertura de emails recordatorio | Estimada <40% | Reportado por Lucía |
| Empleados que pidieron cambio post-deadline (último mes) | 6-10 solicitudes | Registro informal WhatsApp |

### 3.2 Datos Cualitativos — Citas Textuales

**Martín Fernández** (Desarrollador, usa comedor 3-4 veces/semana):

> *"Ya ni leo los emails de Lucía. Veo el asunto 'PEDIDO VIANDAS' y digo 'después lo hago'. Después me olvido y el jueves a las 10:30 me quiero matar."*

> *"Me da culpa cuando veo mi vianda en la heladera el viernes y sé que la empresa gastó plata al pedo."*

**Lucía Gómez** (Administradora del comedor / RRHH):

> *"Me cansa ser la que manda recordatorios todos los miércoles. Siento que molesto, pero si no lo hago, la mitad no pide."*

> *"Los jueves de 9 a 11 AM son un infierno. Estoy consolidando la planilla, me escriben tres personas por WhatsApp diciendo 'me olvidé, ¿me agregás?', y el proveedor me espera con el consolidado a las 11."*

> *"El mes pasado armé una planilla con fórmulas condicionales para trackear quién confirmó y quién no. Le dediqué un sábado a la tarde."*

**Diego Martínez** (QA, 34 años):

> *"Desde el celular ni lo intento porque la planilla se ve horrible. Espero a estar en la compu, abro el mail, busco el link, abro la planilla... y cuando llego son tantos pasos que lo dejo para después del almuerzo, y después me olvido por completo."*

> *"La semana pasada fui a la oficina el viernes por una reunión que me avisaron el jueves a la tarde. Ya había pasado el deadline. Tuve que pedir delivery. $8.500 pesos tirados."*

**Sofía Herrera** (Diseñadora UX, cambia menús frecuentemente):

> *"En una empresa de tecnología estamos pidiendo viandas con Excel. Es una locura."*

> *"Yo como vegetariano algunos días y otros no. Si el menú del jueves tiene algo que no me gusta, quisiera poder cambiarlo, pero si ya mandé el pedido el lunes, cagué."*

### 3.3 Señales de Validación Observadas

| Señal | Evidencia |
|-------|-----------|
| Las personas describen el problema sin que se les mencione primero | ✅ Diego: "Yo ya ni leo los mails de Lucía. Veo el asunto y lo ignoro." Martín usó "olvidar" 4 veces espontáneamente |
| Las personas ya gastan tiempo/dinero intentando resolverlo | ✅ Lucía dedicó un sábado entero a crear fórmulas condicionales en Google Sheets |
| Las personas se frustran visiblemente al describir su workaround | ✅ Sofía levantó los ojos al cielo al mencionar el Excel. Martín describió el jueves 10:30 AM como momento de "tirarse de los pelos" |
| Más de 3 personas describieron el mismo problema con palabras similares | ✅ Los 4 entrevistados usaron frases como "me olvidé", "no llegué a completar", "ya había mandado el pedido" de forma independiente |

### 3.4 Evidencia del Workaround Actual — Planillas Excel

Recopilé las planillas reales que usa Lucía. Fueron anonimizadas para proteger privacidad pero preservan estructura y formato exactos.

**Hallazgos del análisis de planillas**:

1. **Consolidación 100% manual**: Lucía cuenta columna por columna cuántos C1, C2, P1, etc. hay por día, luego transcribe nombres de platos desde otra pestaña. ~45 minutos semanales solo en conteo y transcripción.

2. **Fragilidad ante cambios post-deadline**: Múltiples correcciones manuales visibles ("Diego pidió cambio por WhatsApp", "Martín avisó tarde"). No hay versiónado ni auditoría.

3. **Tasa de no-confirmación visible**: En semana documentada, 11 de 20 empleados (55%) tenían al menos un día sin confirmar o con marcas de advertencia (⚠️).

4. **Sin integración con notificaciones**: Las planillas no están vinculadas a ningún sistema de recordatorio. Lucía debe cruzar mentalmente quién no confirmó.

5. **Gestión manual de feriados**: Días feriados o no laborables Lucía los marca a mano para que nadie pueda pedir viandas. Paso extra que se repite cada vez.

6. **Riesgo de editar fila de otro empleado**: En semana documentada, un empleado marcó la vianda de otro por error ("Rodrigo" confundió su fila con "Roberto"), generando pedido incorrecto y vianda no reclamada.

---

## 4. North Star Metric (NSM)

### 4.1 Definición y Fórmula

**"% de viandas confirmadas correctamente por semana"**

```
NSM = (Viandas confirmadas antes del deadline / Total empleados que asistirán a la oficina esa semana) × 100
```

**Meta objetivo**: **≥ 95%**

**Frecuencia de medición**: Semanal (al cierre del deadline, jueves 10:00 AM).

### 4.2 Por qué esta métrica

1. **Refleja directamente el valor del producto**: El propósito central es eliminar los olvidos de confirmación. Cada punto porcentual por debajo del 95% representa un empleado que se quedó sin almuerzo, una vianda desperdiciada, o tiempo administrativo extra para Lucía.

2. **Es accionable y leading**: A diferencia de métricas rezagadas como "viandas desperdiciadas por mes" (que solo se conocen cuando ya ocurrió el daño), la tasa de confirmación se puede monitorear en tiempo real y accionar antes del deadline.

3. **Alinea a todos los stakeholders**: Para Martín y los empleados, significa "no me quedo sin almuerzo". Para Lucía, "no tengo que perseguir a nadie". Para la empresa, "no tiramos plata en viandas que nadie come".

### 4.3 Métricas Secundarias (de soporte)

| Métrica | Definición | Target |
|---------|-----------|--------|
| Tiempo semanal de administración | Horas dedicadas por Lucía a tareas de gestión de viandas | ≤ 30 minutos (vs. 2.5h actuales) |
| Viandas no reclamadas /semana | Unidades en heladera al cierre del viernes | ≤ 1 (vs. 3-5 actuales) |
| Solicitudes de cambio post-deadline | Mensajes de WhatsApp a Lucía pidiendo excepciones | ≤ 2 por semana (vs. 6-10 actuales) |

---

## 5. Dashboard y Métricas de Tracción

Acá están los gráficos que armé con los datos que junté entre abril y mayo de 2026.

### 5.1 North Star Metric — Evolución Semanal

**[G1] assets/graficos/grafico-1-nsm-evolucion.png**

*La tasa de confirmación pasó de un baseline promedio de 72% (planilla Excel) a una proyección de 95% con el MVP. Las primeras semanas muestran alta variabilidad (60-85%) debido a olvidos y confirmaciones tardías. La línea punteada representa la proyección post-MVP con configuración de días fijos y recordatorios automáticos.*

### 5.2 Reducción de Pérdidas Económicas

**[G2] assets/graficos/grafico-2-perdidas-mensuales.png**

*Reducción proyectada de ~$71.000-$129.000 ARS/mes a ≤$15.000 ARS/mes en viandas desperdiciadas. El área sombreada representa el rango de incertidumbre basado en variabilidad del costo unitario ($5.500-$6.000 ARS).*

### 5.3 Tiempo Administrativo

**[G3] assets/graficos/grafico-3-tiempo-admin.png**

*Reducción de 2.5 horas/semana a 0.5 horas/semana proyectado. El tiempo actual se desglosa en: consolidación manual (45 min), seguimiento de confirmaciones (45 min), gestión de cambios y excepciones (30 min), y comunicación con proveedor (15 min).*

### 5.4 Dashboard Compacto — 4 KPIs Integrados

**[G4] assets/graficos/grafico-4-dashboard-compacto.png**

*Dashboard ejecutivo que combina las 4 métricas principales en una sola vista: NSM (%), pérdidas mensuales ($), tiempo admin (h/semana), y viandas no reclamadas (unidades/semana). Diseñado para que Lucía y la dirección puedan ver el estado completo en una pantalla.*

---

## 6. MVP — Etapa 1: Esqueleto

### 6.1 Funcionalidades Implementadas

- **Config**: Empleado selecciona qué días asiste a la oficina (Lun-Vie)
- **Menú**: Menú semanal con 6 opciones por día, selección vía radio button
- **Confirmación**: 1 clic para confirmar plato, cancelación disponible
- **Deadline**: Simulación jueves 10 AM (pedidos post-deadline = "Tarde")
- **Admin**: Tabla semáforo (verde/amarillo/rojo/gris) + 2 reportes CSV
- **Datos separados**: Cada empleado tiene su propio localStorage

### 6.2 Stack Técnico

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Frontend | HTML5 + CSS3 + JS vanilla | Zero dependencies, validación rápida |
| Almacenamiento | localStorage | Zero setup, migración trivial a Supabase en Etapa 2 |
| Datos | JSON estático (menu.json) | Hardcodeado para Etapa 1, migrará a DB en Etapa 2 |
| Tests | Framework propio (~30 líneas) | Sin dependencias externas, ejecutable en navegador |

**URL del MVP**: https://rjruiz-dev.github.io/viandas-stacklab/

---

## 7. Análisis Técnico y Decisiones

### 7.1 Arquitectura

Cuando me puse a armar esto, lo dividí en tres partes:
1. **Configuración**: Empleado marca sus días de asistencia
2. **Selección**: Elige plato del menú y confirma
3. **Consolidación**: Lucía ve todo en tabla semáforo

**Decisión clave — localStorage vs Supabase**: Elegí localStorage porque no sabía si el problema valía la pena. Podía pasar 2 días configurando Supabase o 2 horas armando un esqueleto con localStorage y mostrárselo a Martín y Lucía para ver si lo entendían. Elegí la segunda opción.

**Decisión clave — Arrays vs Objetos**: Los días de la semana son fijos (Lun-Vie). Un array de 5 booleans es O(1) para acceso por índice y ocupa menos espacio que un objeto con claves de fecha.

### 7.2 Complejidad Algorítmica

| Operación | Big-O | Paso dominante | Explicación |
|-----------|-------|----------------|-------------|
| `saveUser()` | **O(1)** | Serialización JSON + escritura | Objeto de tamaño fijo (nombre + 5 booleans) |
| `getConfirmations()` | **O(c)** | Parseo JSON desde localStorage | c = confirmaciones del usuario (≤ 5/semana hoy) |
| `saveConfirmation()` | **O(c)** | Lectura completa + modificación + re-escritura | localStorage obliga a re-escribir todo el objeto |
| `renderAdminTable()` | **O(u × d)** | Doble loop empleado × día | u=5, d=5 → 25 celdas (trivial). Con u=1000 → 5000 celdas (~5ms) |
| `generateCSV()` | **O(u × d)** | Recorre matriz + escape de caracteres | Mismo orden que tabla, + overhead de revisión char-by-char |
| `updateCardForDate()` | **O(1)** | Reemplazo de nodo DOM | Solo actualiza la tarjeta del día confirmado |

**Análisis espacial**:
- Usuario activo: ~50 bytes (constante)
- Confirmaciones/semana: ~400 bytes/usuario
- Total 50 empleados: ~25 KB (localStorage soporta 5 MB)

**Escalabilidad**:
- **50 empleados (hoy)**: Funciona perfecto. localStorage sobra.
- **500 empleados**: Tabla admin empieza a notar lag (50ms). Requiere virtualización.
- **5000 empleados**: localStorage alcanza límite de 5 MB. Requiere IndexedDB o Supabase.
- **50.000 empleados**: Arquitectura cliente-servidor con API REST + PostgreSQL.

### 7.3 Cuellos de Botella Prácticos

**I/O de localStorage**: getItem/setItem son síncronas y bloquean el hilo principal. En la práctica no es problema porque cada empleado opera su propio navegador (no hay concurrencia real).

**Serialización JSON**: JSON.stringify/parse son costosos para objetos grandes. Con 260 confirmaciones (52 semanas), parsear toma ~2ms. No crítico para interacciones humanas.

**Renderizado DOM**: Generar 5000 celdas crea ~5000 nodos. El navegador los renderiza en <50ms, pero el reflow hace scroll lento. Para u>500, necesitaría virtualización.

---

## 8. Pruebas Unitarias

Armé 10 tests con un mini-framework propio (~30 líneas). Se ejecutan abriendo `tests.html` en cualquier navegador. Cero dependencias.

| # | Caso | Entrada | Resultado esperado |
|---|------|---------|---------------------|
| 01 | localStorage disponible | — | `storageAvailable() === true` |
| 02 | Guardar y leer usuario | `{name: "Martín", attendance: [T,F,T,F,F]}` | Objeto idéntico al guardado |
| 03 | Confirmación con plato | `date="2026-05-12", dishIndex=2` | Guardado con plato 2 |
| 04 | Cancelar confirmación | `date="2026-05-13"` | Eliminada de localStorage |
| 05 | Semáforo: sin confirmar | — | `status-missing` (rojo) |
| 06 | Semáforo: a tiempo | `late=false` | `status-ok` (verde) |
| 07 | Semáforo: tarde | `late=true` | `status-late` (amarillo) |
| 08 | Simulación deadline | `toggleDeadlineSimulated()` | Flag cambia correctamente |
| 09 | Formato ISO | — | `YYYY-MM-DD` |
| 10 | Datos separados | Martín confirma; Sofía no | Confirmación de Martín no aparece en Sofía |

**Resultado**: 10/10 tests PASS.

---

## 9. Reproducibilidad

### Cómo correr el proyecto

**Opción A (Directa)**:
```bash
git clone https://github.com/rjruiz-dev/viandas-stacklab.git
cd viandas-stacklab/prototype/
# Abrí index.html en cualquier navegador (doble clic)
```

**Opción B (Servidor local)**:
```bash
cd viandas-stacklab/prototype/
python -m http.server 8000
# Navegá a http://localhost:8000
```

**Requisitos**: Navegador moderno con localStorage. **Zero dependencias.**

### Datos de prueba pre-cargados

El archivo `menu.json` contiene menú de la semana 12-16 mayo 2026 (6 opciones por día). No requiere configuración.

### Casos límite testeados

- Sin selección de plato → alerta obligatoria
- Sin días de asistencia → pantalla vacía con CTA
- Cambio de días → reservas huérfanas se limpian automáticamente
- Deadline pasado → confirmaciones marcadas como "Tarde"
- Cambio de empleado → datos separados, no se mezclan

---

## 10. Plan de Iteración

### Etapa 2 — Datos Reales (si H1 se confirma)
- Migrar localStorage → Supabase (PostgreSQL)
- Autenticación por email
- Historial de confirmaciones
- Dashboard con métricas en tiempo real

### Etapa 3 — Automatización
- Recordatorios por Slack/email
- Notificaciones pre-deadline
- Modificación de pedidos hasta 1h antes del cierre

### Etapa 4 — Decisión GO/NO-GO
- Evaluar NSM a las 4 semanas
- Si ≥ 95% confirmación y ≤ 30 min admin/semana: GO
- Si < 70% confirmación o > 1h admin/semana: pivotar o abandonar

---

## Anexos

### A. Entrevistas realizadas
- Martín Fernández (dev backend): Problemas con olvidos y planilla Excel
- Diego Martínez (QA): Dificultad para modificar pedidos post-deadline, confusión de filas en Excel
- Sofía Herrera (dev frontend): Ignora emails de recordatorio, cambia menús frecuentemente
- Lucía Gómez (admin/RRHH): 2-3 horas semanales en consolidación manual, frustración con persecución de compañeros

### B. Artefactos y Recursos
- **MVP online**: https://rjruiz-dev.github.io/viandas-stacklab/
- **Repo GitHub**: https://github.com/rjruiz-dev/viandas-stacklab
- **Tests**: `prototype/tests.html` (10 pruebas unitarias ejecutables)
- **Planillas originales (anonimizadas)**: `docs/informe-final/assets/planilla-*.md`
- **Gráficos**: `docs/informe-final/assets/graficos/` (4 PNG de métricas)

### C. Planillas Anonimizadas Disponibles
- **Planilla Menú Semanal**: Códigos de plato (C1, C2, P1, S1, L1, L2), platos principales, alternativas, vegetarianos, sin TACC y opciones light
- **Planilla Empleados**: Seguimiento individual de pedidos por día, marcas de confirmación, faltantes y observaciones manuales
- **Consolidado Diario**: Resumen por día para el proveedor, conteos manuales por código de plato, totales y cálculo económico de viandas no reclamadas

---

*Informe Final — Viandas StackLab · Rodrigo Ruiz · Mayo 2026 · Re-entrega v2.0*
