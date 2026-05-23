# INFORME FINAL DE VALIDACIÓN DE PRODUCTO

## Sistema de Gestión de Viandas — StackLab

| Campo | Detalle |
|-------|---------|
| **Proyecto** | Viandas StackLab — Gestor de Pedidos para el Comedor Interno |
| **Empresa** | StackLab (Santa Fe, Argentina) |
| **Autor** | Rodrigo Ruiz |
| **Período de validación** | Abril – Mayo 2026 |
| **Versión** | 5.0 (Versión Final — Estructura de entrega) |
| **MVP en vivo** | https://rjruiz-dev.github.io/viandas-stacklab/ |
| **Repositorio** | https://github.com/rjruiz-dev/viandas-stacklab |

> **⚠️ Nota legal y de privacidad:** Los nombres de personas (Martín Fernández, Lucía Gómez, Diego Martínez, Sofía Herrera) y la empresa "StackLab" son ficticios, creados para proteger la identidad de empleados reales y evitar exponer información sensible de la empresa y proveedores involucrados. El problema descrito (gestión de viandas mediante Excel, olvidos, desperdicio, fricción administrativa) es **real y documentado**. Las métricas, citas textuales y evidencias se sustentan en observación directa del entorno laboral, time-tracking y entrevistas anonimizadas elaboradas exclusivamente para este informe.

---

StackLab es una empresa de software en Santa Fe (~50 empleados, ~20 asistentes regulares al comedor). La gestión de viandas se hace mediante Google Sheets + emails manuales. Tras 4 semanas de investigación (observación de campo, entrevistas y auditoría de planillas), se identificaron ineficiencias cuantificables que justifican el desarrollo de un MVP.

**Hallazgos principales fundamentados en datos reales:**

- **Desperdicio económico sistémico:** se documentó una pérdida mensual constante estimada entre **$71.000 y $129.000 ARS**. Esto es el resultado directo de viandas que se piden pero nunca se consumen (3 a 5 unidades por semana, a un costo promedio de ~$5.750 ARS por vianda).
- **Ineficiencia administrativa crítica:** la responsable de Recursos Humanos y Administración del comedor (Lucía Gómez) invierte entre **8 y 12 horas mensuales** exclusivamente en tareas de revisión manual, consolidación de pedidos, conteo de platos y seguimiento uno-a-uno para obtener confirmaciones faltantes.
- **Fricción operativa y fallas de UX:** los empleados sufren de "ceguera de notificaciones" e ignoran sistemáticamente los recordatorios por email (tasa de apertura estimada < 40%). El flujo actual exige al empleado cumplir con más de 5 pasos para realizar un pedido, y los cambios de último momento son imposibles después del deadline del jueves a las 10:00 AM.

**Plan de acción estratégico:**

La propuesta central es reemplazar la planilla por un MVP web que permita a cada empleado configurar sus días de asistencia y confirmar su vianda con un solo clic, automatizando a su vez la consolidación para la administración. Todo el proyecto está regido por una única **North Star Metric (NSM)**: *"Alcanzar un ≥ 95% de viandas confirmadas correctamente por semana"*.

---

## 2. Hipótesis Priorizadas

| # | Hipótesis | Prioridad | Método de testeo | Estado |
|---|-----------|-----------|------------------|--------|
| **H1** | Si los empleados pueden configurar sus días y confirmar viandas con **1 clic**, se reducirán un 80% los olvidos diarios | **Alta** | MVP Etapa 1 con usuarios reales durante 4 semanas. Métrica: tasa de confirmación espontánea vs. Excel | *Pendiente — requiere uso del MVP* |
| **H4** | Si la administración recibe un **consolidado automático**, el tiempo de gestión bajará de 2.5h a ≤ 30 min/semana | **Alta** | Comparación directa de time-tracking antes/después de la implementación de Etapa 2 | *Pendiente de validación* |
| **H2** | Si los recordatorios se envían por **Slack** en lugar de email, la tasa de apertura y acción será 3× mayor | Media | Test A/B Slack vs email durante 2 semanas | *Señal positiva preliminar: 3/4 entrevistados ignoran el email activamente* |
| **H3** | Permitir modificar el pedido hasta 1h antes del cierre reducirá las viandas no reclamadas en un 50% adicional | Media | Despliegue del feature "Cancelar Pedido" en Etapa 3 | *Pendiente de validación* |
| **H5** | Si el sistema permite configurar un patrón de asistencia semanal repetitivo, la confirmación natural superará el 90% sin necesidad de alertas | Media | Comparar adopción orgánica en semanas 3-4 vs. semanas 1-2 del MVP | *Pendiente de validación* |

**Criterios GO/NO-GO (evaluación en Semana 8):**

Las hipótesis H1 y H4 determinan la viabilidad del proyecto. Si a las 4 semanas de uso la tasa de confirmación espontánea no supera el 70% y el tiempo de administración de Lucía no baja a menos de 1 hora semanal, la hipótesis central se considerará **falsada**. Esto indicaría que el problema es cultural y no tecnológico, lo que justificaría el abandono o pivoteo de la herramienta.

- **GO definitivo**: NSM ≥ 95% durante 4 semanas consecutivas + Lucía < 30 min/semana → reemplazar Excel definitivamente.
- **GO condicional**: NSM entre 70-94% + Lucía < 1h/semana → iterar 1 ciclo más antes de decidir.
- **NO-GO**: NSM < 70% después de 4 semanas + Lucía sigue enviando recordatorios manuales → pivotar o abandonar.

---

## 3. Hallazgos y Evidencias

### 3.1 Datos Cuantitativos

| Indicador | Valor actual | Fuente de evidencia |
|-----------|-------------|---------------------|
| Viandas confirmadas por semana | 20-25 de ~50 empleados | Planilla Excel histórica de administración |
| Viandas desperdiciadas por semana | 3-5 unidades | Conteo físico en heladera (viernes 14:00 hs) |
| Costo unitario promedio | $5.750 ARS | Valor estimado mercado local |
| **Pérdida económica mensual** | **$71.000 – $129.000 ARS** | Cálculo: 3-5 viandas × 4.3 semanas × $5.750 |
| Tiempo de gestión semanal (Lucía) | 2.5 horas promedio | Time-tracking auto-reportado |
| Tiempo de gestión mensual | 8-12 horas | Extrapolación semanal |
| Pasos para confirmar una vianda | 5+ pasos | Observación directa del flujo completo |
| Tasa de apertura de emails recordatorio | < 40% estimada | Reportado por Lucía: "muchos me preguntan el menú por chat en vez de abrir el email" |
| Solicitudes de cambio post-deadline | 6-10 por semana | Historial de mensajes directos de WhatsApp a Lucía |
| Empleados sin confirmar (semana auditada) | 11 de 20 (55%) | Auditoría planilla semana 12-16 mayo 2026 |

**Desglose del flujo actual — por qué tiene 5+ pasos:**

1. Abrir el email de recordatorio (en bandeja saturada de Jira, Slack y GitHub).
2. Clic en el enlace adjunto → esperar carga de Google Sheets.
3. Navegar hasta la pestaña de la semana en curso.
4. Buscar el propio nombre en una lista de 50 filas.
5. Tipear o marcar los códigos de plato para los días de asistencia.

Cada paso es una oportunidad de abandono. La respuesta natural es "lo hago después" — que se convierte en el olvido del jueves a las 10:30 AM.

### 3.2 Datos Cualitativos — Citas Textuales

**Martín Fernández** (Desarrollador, 37 años — usa el comedor 3-4 veces por semana):

> *"Ya ni leo los emails de Lucía. Veo el asunto 'PEDIDO VIANDAS — Semana...' y digo 'después lo hago'. Después me olvido y el jueves a las 10:30 me quiero matar. Me da culpa cuando veo mi vianda en la heladera el viernes y sé que la empresa gastó plata al pedo. Pero entre Jira, Slack y GitHub, el email es lo último que miro."*

**Lucía Gómez** (RRHH / Administración, 45 años):

> *"Me cansa ser la que manda recordatorios todos los miércoles. Siento que molesto, pero si no lo hago, la mitad no pide."*

> *"Los jueves de 9 a 11 AM son un infierno. Estoy consolidando la planilla, me escriben tres personas por WhatsApp diciendo 'me olvidé, ¿me agregás?', y el proveedor me espera a las 11. Termino anotando todo a mano en un papelito. El mes pasado armé una planilla con fórmulas condicionales para trackear quién confirmó y quién no. Le dediqué un sábado a la tarde de mi tiempo libre."*

**Diego Martínez** (QA, 34 años):

> *"Desde el celular ni lo intento porque la planilla se ve horrible. Espero a estar en la compu, abro el mail, busco el link, abro la planilla... y cuando llego son tantos pasos que lo dejo para después del almuerzo, y después me olvido por completo."*

> *"La semana pasada fui a la oficina el viernes por una reunión que me avisaron el jueves a la tarde. Ya había pasado el deadline. Tuve que pedir delivery. $8.500 pesos tirados. Me dolió."*

**Sofía Herrera** (Diseñadora UX, 29 años — cambia menú frecuentemente):

> *"En una empresa de tecnología estamos pidiendo viandas con Excel. Es una locura."*

> *"Yo como vegetariano algunos días y otros no. Si el menú del jueves tiene algo que no me gusta, quisiera poder cambiarlo, pero si ya mandé el pedido el lunes, cagué."*

### 3.3 Señales de Validación del Problema

| Señal | ¿Se observó? | Evidencia |
|-------|-------------|-----------|
| Describen el problema sin que se los mencione | ✓ Sí | Diego arrancó describiendo el proceso antes de que se lo preguntara. Martín usó "olvidar" 4 veces espontáneamente. |
| Ya gastan tiempo/dinero intentando resolverlo | ✓ Sí | Lucía dedicó un **sábado entero** a crear fórmulas condicionales en Sheets para trackear confirmaciones. |
| Se frustran visiblemente al describir el workaround | ✓ Sí | Sofía levantó los ojos al cielo al mencionar Excel. Martín describió el jueves 10:30 AM como "tirarse de los pelos". |
| Más de 3 personas describieron el mismo problema | ✓ Sí | Los 4 usaron frases como "me olvidé", "no llegué a completar" y "ya había mandado el pedido" de forma independiente. |

### 3.4 Evidencia del Workaround Actual — Auditoría de Planillas Excel

Para cuantificar la fragilidad del sistema, se auditaron las planillas reales (anonimizadas) de la semana del 12 al 16 de mayo de 2026. Resultados:

1. **Alta tasa de no-confirmación**: 11 de 20 empleados (55%) tenían al menos un día sin confirmar, obligando a Lucía a estimar a ciegas o interrumpir al equipo.

2. **Consolidación manual**: contar códigos C1/C2/P1/S1/L1/L2 por día, transcribir nombres de platos y armar el consolidado consume ~**45 min semanales**.

3. **Sin auditoría de cambios**: correcciones post-deadline visibles como "Diego pidió cambio por WhatsApp". No hay versionado — si algo falla, no hay forma de saber qué cambió ni cuándo.

4. **Feriados a mano**: bloquear días no laborables celda por celda, cada vez que hay un feriado o semana atípica.

5. **Sin recordatorios automáticos**: Lucía cruza mentalmente la lista y contacta uno por uno a quienes no confirmaron.

6. **Riesgo de sobreescritura**: caso documentado — "Rodrigo Sánchez" marcó un plato en la fila de "Roberto Sánchez", generando una vianda sobrante y un consolidado incorrecto al proveedor.

---

## 4. North Star Metric (NSM)

Para que la validación del MVP sea objetiva, se define una única métrica que determina si el producto resuelve el problema central.

### 4.1 Definición y Fórmula

**"% de viandas confirmadas correctamente por semana"**

```
NSM = (Viandas confirmadas antes del deadline / Total empleados que asistirán a la oficina esa semana) × 100
```

- **Meta objetivo**: ≥ 95%
- **Frecuencia de medición**: semanal, al cierre del deadline (jueves 10:00 AM).
- **Valor actual (baseline)**: ~72% promedio con Excel, con alta variabilidad semana a semana dependiendo de la insistencia manual de Lucía.

### 4.2 Por qué esta métrica y no otra

La elección no fue arbitraria. Se descartaron "viandas desperdiciadas/mes" y "tiempo de gestión de Lucía" porque no capturan el problema con precisión necesaria para actuar:

1. **Es un indicador líder (leading):** medir desperdicio mensual solo informa del fracaso cuando la plata ya se perdió. La tasa de confirmación se monitorea en tiempo real y permite disparar recordatorios preventivos.
2. **Refleja directamente el valor del producto:** cada punto por debajo del 95% equivale a un empleado sin almuerzo, tiempo perdido de Lucía, o dinero malgastado.
3. **Alinea a todos los stakeholders:** para empleados = "no me quedo sin almuerzo"; para Lucía = "no persigo a nadie"; para la empresa = "no tiramos plata".

### 4.3 Métricas Secundarias de Soporte

La NSM es el número que determina si el producto funciona, pero no lo dice todo. Estas tres métricas complementarias permiten detectar si el sistema está generando valor en los otros ejes críticos del problema:

| Métrica | Definición | Baseline actual | Target con MVP |
|---------|-----------|----------------|----------------|
| Tiempo semanal de Lucía en gestión | Horas dedicadas a tareas de administración de viandas | 2.5h/semana | ≤ 30 min/semana |
| Viandas no reclamadas por semana | Unidades en heladera al cierre del viernes | 3-5 unidades | ≤ 1 unidad |
| Solicitudes de cambio post-deadline | Mensajes de WhatsApp a Lucía pidiendo excepciones | 6-10 por semana | ≤ 2 por semana |

---

## 5. Dashboard y Métricas de Tracción

El dashboard integra los 4 indicadores clave del proyecto. Los gráficos de detalle por métrica se encuentran en el **Anexo 7.9**.

### Dashboard Ejecutivo — 4 KPIs Integrados

![Dashboard compacto: NSM, pérdidas mensuales, tiempo admin, viandas no reclamadas](assets/graficos/grafico-4-dashboard-compacto.png)

Vista integrada de NSM (%), pérdidas mensuales ($), tiempo administrativo (h/semana) y viandas no reclamadas (unidades/semana). Permite evaluar el estado completo del sistema en 10 segundos.

---

## 6. Plan de Iteración y Próximos Experimentos

El plan aplica una filosofía conservadora: no se construye infraestructura compleja antes de validar que la fricción básica de UX está resuelta. Cada fase solo inicia si la anterior demostró lo que necesitaba demostrar.

| Fase | Entregables técnicos | Criterio de pase | Plazo estimado |
|------|---------------------|-----------------|----------------|
| **1. Esqueleto (Completado)** | MVP web en HTML/JS vanilla. Menú JSON hardcodeado, configuración de asistencia, confirmación 1 clic, vista admin con tabla semáforo y exportación CSV (localStorage). | 3+ early adopters completan el flujo completo en < 3 min sin solicitar soporte técnico. | 1-2 semanas |
| **2. Datos Reales** | Migración a Supabase/PostgreSQL. Autenticación simple por email, deadline operado por servidor, consolidado real exportable. | 15+ empleados usan la plataforma 2 semanas consecutivas. Tasa de confirmación natural ≥ 70% sin recordatorios de Lucía. | 2-3 semanas |
| **3. Recordatorios** | Integración con API de Slack: alertas automáticas 24h y 2h antes del deadline. Feature "Modificar Pedido" activo. | NSM cruza la barrera del ≥ 90%. Lucía confirma que su tiempo de gestión bajó a ≤ 30 min/semana. | 1-2 semanas |
| **4. Decisión GO/NO-GO** | Evaluación corporativa formal. Encuesta de satisfacción a toda la plantilla. Entrevista de cierre con Lucía y dirección. | **GO definitivo**: ≥ 80% de los empleados prefiere el sistema sobre Excel. NSM ≥ 95% durante 4 semanas. | 1 semana |

**Experimentos futuros de validación:**

Además de las métricas principales, hay tres hipótesis pendientes que requieren experimentos específicos para ser validadas o descartadas:

- **H2 (Slack vs. email):** Test A/B 2 semanas en Etapa 3. Métricas: tasa de apertura, tiempo de respuesta, % que confirma dentro de la primera hora. Señal preliminar: 3/4 entrevistados ignoran activamente los emails.

- **H5 (patrón repetitivo):** Comparar confirmación espontánea semanas 1-2 vs. 3-4 del MVP. Si ≥ 90% confirma sin recordatorio en semana 4, H5 se valida y los recordatorios pasan a ser red de seguridad.

- **H3 (modificación post-deadline):** Medir caída de mensajes de WhatsApp a Lucía en Etapa 3. Éxito: de 6-10/semana actuales a ≤ 2/semana.

---

## 7. Anexos

### 7.1 MVP — Funcionalidades Implementadas y Stack Técnico

La Etapa 1 fue desarrollada bajo la filosofía *Zero Setup*: validar la UX rápidamente sin costos de infraestructura que podrían resultar desperdicio si el producto no funciona.

**Funcionalidades implementadas en Etapa 1 (Esqueleto):**

- **Config:** el empleado selecciona qué días de la semana asiste a la oficina (Lun-Vie). Esta configuración se persiste y no necesita repetirse cada semana.
- **Menú:** menú semanal con 6 opciones por día (C1 Clásico, C2 Alternativo, P1 Vegetariano, S1 Sin TACC, L1/L2 Light), seleccionables vía radio button.
- **Confirmación:** 1 clic para confirmar el plato del día; cancelación disponible antes del deadline.
- **Deadline:** simulación del corte del jueves a las 10:00 AM — los pedidos realizados después quedan marcados como "Tarde" en la vista admin.
- **Admin:** tabla semáforo (verde = confirmado a tiempo, amarillo = tarde, rojo = sin confirmar, gris = no asiste) + 2 reportes CSV exportables.
- **Datos separados:** cada empleado opera su propio namespace en localStorage; no hay mezcla de datos entre distintos usuarios.

**Stack técnico:**

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Frontend | HTML5 + CSS3 + JS vanilla | Zero dependencies — cualquier empleado puede abrir el `.html` directamente sin instalar nada |
| Almacenamiento | localStorage | Zero setup — migración directa a Supabase en Etapa 2 sin cambiar la lógica de negocio |
| Datos | JSON estático (`menu.json`) | Hardcodeado para Etapa 1; migrará a tabla en DB en Etapa 2 |
| Tests | Framework propio (~30 líneas) | Sin dependencias externas; ejecutable en cualquier navegador sin configuración |

**Decisión clave — localStorage vs. Supabase:** podía pasar 2 días configurando Supabase o 2 horas armando el esqueleto con localStorage. Elegí la segunda: si el problema no valía la pena resolverlo, no tenía sentido incurrir en costos de infraestructura antes de validar la interfaz.

**Decisión clave — Arrays vs. Objetos para días de asistencia:** los días son invariablemente fijos (Lun-Vie). Un array de 5 booleans es **O(1)** por índice y ocupa una fracción de lo que ocuparía un objeto con claves de fecha completas, que además requeriría parsear fechas ISO.

---

### 7.2 Análisis de Corrección Algorítmica y Eficiencia

El sistema de gestión de viandas opera sobre estructuras de datos simples pero con decisiones de diseño que impactan directamente en el rendimiento percibido por el usuario y en la viabilidad de escalar a más empleados. Esta sección analiza la complejidad de cada operación crítica, los límites espaciales del sistema y los trade-offs que se priorizaron conscientemente.

#### Complejidad por operación

| Operación | Big-O | Paso dominante | Explicación |
|-----------|-------|----------------|-------------|
| `saveUser()` | **O(1)** | Serialización JSON + escritura | Objeto de tamaño fijo (nombre + 5 booleans); tiempo constante independiente de la cantidad de usuarios registrados |
| `getConfirmations()` | **O(c)** | Parseo JSON desde localStorage | `c` = número de confirmaciones del usuario activo (≤ 5/semana en uso normal; crece linealmente con semanas acumuladas) |
| `saveConfirmation()` | **O(c)** | Lectura completa + modificación + re-escritura | localStorage no permite escritura parcial; obliga a leer, modificar en memoria y re-serializar todo el objeto |
| `renderAdminTable()` | **O(u × d)** | Doble loop empleado × día | `u` = empleados, `d` = días (5). Con `u` = 20 → 100 celdas (trivial, < 1ms). Con `u` = 1000 → 5000 celdas (~5ms) |
| `generateCSV()` | **O(u × d)** | Recorre matriz + escape de caracteres | Mismo orden que renderAdminTable, con overhead adicional por revisión char-by-char para escapado correcto de CSV |
| `updateCardForDate()` | **O(1)** | Reemplazo de nodo DOM | Actualiza únicamente la tarjeta del día que acaba de confirmarse; no recalcula el estado de ningún otro nodo |

#### Análisis espacial

| Escenario | Almacenamiento estimado | Viabilidad con localStorage |
|-----------|------------------------|----------------------------|
| 1 usuario activo | ~50 bytes (constante) | Sin restricción |
| 1 usuario, 1 semana completa de confirmaciones | ~400 bytes | Sin restricción |
| 20 empleados (escala actual StackLab) | ~10 KB | Sobra ampliamente (límite: 5 MB) |
| 50 empleados | ~25 KB | Sin restricción |
| 500 empleados | ~250 KB | Aún viable; rendimiento de tabla empieza a notar lag (~50ms) |
| 5.000 empleados | ~2.5 MB | Alcanza límite → migrar a IndexedDB o Supabase |
| 50.000 empleados | ~25 MB | Requiere arquitectura cliente-servidor con API REST + PostgreSQL |

#### Cuellos de botella prácticos

- **I/O de localStorage síncrono:** bloquea el hilo principal, pero no genera problema práctico porque cada empleado opera su propio navegador de forma independiente.
- **Serialización JSON:** con 52 semanas acumuladas (~260 entradas), parsear el objeto toma ~2ms — por debajo del umbral de percepción humana (~100ms).
- **Renderizado DOM:** para `u > 500` empleados, el reflow del layout empieza a notar lag. Solución: virtualización de listas (React/Svelte `windowing`).

#### Trade-offs de diseño

| Decisión tomada | Alternativa descartada | Razonamiento |
|-----------------|----------------------|--------------|
| Array de 5 booleans para asistencia | Objeto con claves de fecha (`{"2026-05-12": true}`) | Array: acceso O(1) por índice, ~5 bytes, semana laboral siempre fija en 5 días. Objeto: también O(1) promedio, pero ~80 bytes y requiere parsear fechas ISO para cada acceso. El array gana en todos los ejes relevantes para este caso de uso. |
| localStorage para Etapa 1 | Supabase/PostgreSQL desde el inicio | localStorage: 0 setup, 0 costo, validación en 2 horas. Supabase: 2 días de configuración de esquemas, autenticación y despliegue antes de poder mostrar algo funcional. Para un MVP de validación, la velocidad de aprendizaje supera a la robustez técnica. |
| Framework de tests propio (~30 líneas) | Jest / Vitest | Cero dependencias externas, ejecutable abriendo `tests.html` directamente en el navegador. Suficiente para los 10 casos críticos de Etapa 1. En Etapa 2, con Supabase y autenticación, la migración a Jest/Vitest es el camino natural. |

---

### 7.3 Pruebas Unitarias

Se implementó un mini-framework de testing propio (~30 líneas de JS) sin dependencias de build. Ejecuta los 10 casos críticos, reporta PASS/FAIL por cada uno, y detiene la ejecución con mensaje claro ante un fallo. Acceso: abrir `prototype/tests.html` en cualquier navegador moderno.

**Resultado global: 10/10 PASS**

| # | Caso de prueba | Entrada | Resultado esperado | Estado |
|---|----------------|---------|-------------------|--------|
| 01 | localStorage disponible en el entorno de ejecución | — | `storageAvailable() === true` | ✓ PASS |
| 02 | Guardar un usuario y recuperarlo con fidelidad | `{name: "Martín", attendance: [T,F,T,F,F]}` | Objeto recuperado bit-a-bit idéntico al guardado | ✓ PASS |
| 03 | Confirmación de plato se persiste correctamente | `date="2026-05-12", dishIndex=2` | Entrada guardada asociada a `dishIndex=2` | ✓ PASS |
| 04 | Cancelar una confirmación la elimina del almacenamiento | `date="2026-05-13"` | Entrada eliminada de localStorage; no queda rastro | ✓ PASS |
| 05 | Semáforo: día sin confirmar muestra estado rojo | Sin confirmación registrada | Estado CSS `status-missing` aplicado | ✓ PASS |
| 06 | Semáforo: confirmado antes del deadline muestra verde | `late=false` | Estado CSS `status-ok` aplicado | ✓ PASS |
| 07 | Semáforo: confirmado después del deadline muestra amarillo | `late=true` | Estado CSS `status-late` aplicado | ✓ PASS |
| 08 | La simulación de deadline es togglable en modo desarrollo | `toggleDeadlineSimulated()` | Flag cambia de `false` a `true` y viceversa correctamente | ✓ PASS |
| 09 | Las fechas se generan y persisten en formato ISO estándar | — | Salida siempre en formato `YYYY-MM-DD` | ✓ PASS |
| 10 | Las confirmaciones de un empleado no contaminan a otro | Martín confirma; Sofía no confirma | El namespace de Sofía no contiene ninguna entrada de Martín | ✓ PASS |

**Casos límite específicamente cubiertos:**

- Sin selección de plato al intentar confirmar → alerta obligatoria; el sistema no guarda un estado inválido.
- Sin días de asistencia configurados al abrir la app → pantalla vacía con call-to-action explícito para configurar.
- Cambio de días de asistencia en una semana ya iniciada → las confirmaciones huérfanas (de días que ya no están marcados como asistencia) se limpian automáticamente.
- Intento de confirmar con deadline ya vencido → confirmación se guarda como "Tarde" y el semáforo refleja amarillo, no verde.
- Cambio de empleado activo en la misma sesión del navegador → los datos del empleado anterior no son accesibles ni visibles en el contexto del nuevo empleado.

---

### 7.4 Reproducibilidad — Cómo Ejecutar el Proyecto

El sistema fue diseñado con reproducibilidad como requisito desde el inicio. Cualquier evaluador puede levantar el entorno completo en menos de 2 minutos, sin dependencias externas.

**Requisitos mínimos:** navegador moderno (Chrome, Firefox, Safari o Edge) con localStorage habilitado. Sin Node.js, npm, Docker ni variables de entorno.

**Opción A — Acceso directo (recomendado para evaluación):**

```bash
git clone https://github.com/rjruiz-dev/viandas-stacklab.git
cd viandas-stacklab/prototype/
# Abrí index.html con doble clic en cualquier navegador
```

**Opción B — Servidor local (para evitar restricciones CORS en algunos navegadores):**

```bash
cd viandas-stacklab/prototype/
python -m http.server 8000
# Navegá a http://localhost:8000
```

**Opción C — MVP en producción (sin ningún setup):**

```
https://rjruiz-dev.github.io/viandas-stacklab/
```

**Datos de prueba pre-cargados:**

El archivo `menu.json` contiene el menú real de la semana 12-16 mayo 2026 con las 6 opciones por día (C1 Clásico, C2 Alternativo, P1 Vegetariano, S1 Sin TACC, L1 Light y L2 Light Premium). No se requiere ninguna configuración adicional: al abrir el archivo, el menú ya está disponible.

**Ejecutar los tests unitarios:**

```bash
# Abrí prototype/tests.html en cualquier navegador
# Los 10 casos se ejecutan automáticamente al cargar la página
# El resultado aparece en pantalla: 10/10 PASS (o detalle del fallo si alguno falla)
```

**Secuencia recomendada para evaluación completa:**

1. Abrir `index.html` → configurar días de asistencia como empleado.
2. Confirmar platos para los días configurados.
3. Abrir `admin.html` (o el panel admin desde el mismo index) → verificar tabla semáforo.
4. Exportar uno de los 2 reportes CSV y validar el formato.
5. Activar la simulación de deadline y confirmar un plato → verificar que aparece como "Tarde" (amarillo).
6. Abrir `tests.html` → verificar 10/10 PASS.

---

### 7.5 Alternativas Evaluadas y Priorización Funcional

Antes de decidir construir el MVP, se evaluaron las alternativas que el equipo ya había intentado o podría intentar sin necesidad de desarrollo. El análisis dejó en claro por qué ninguna alternativa existente escala:

| Workaround | Por qué se usa actualmente | Por qué falla como solución definitiva |
|------------|---------------------------|----------------------------------------|
| **Google Sheets + Email** | Herramientas corporativas gratuitas, adoptadas por defecto, sin curva de aprendizaje | No detecta a quién ignoró el email. Permite sobreescritura accidental de filas ajenas. Toda la consolidación es manual. No tiene deadline automatizado. |
| **Grupo de WhatsApp** | Notificaciones inmediatas, alta visibilidad, todo el mundo ya tiene la app | Completamente inauditable. Imposible extraer datos estructurados de 50 personas escribiendo en simultáneo. Lucía terminaría transcribiendo mensajes a mano. |
| **Planilla física en la cocina** | Visible justo en el punto de consumo, sin tecnología de por medio | Excluye al personal en días de trabajo remoto. No previene cambios de último momento. No automatiza el consolidado al proveedor. |

**Priorización funcional — Matriz MoSCoW para Etapa 1:**

La limitación de alcance fue deliberada y estricta. Incluir todo desde el principio es la forma más eficiente de retrasar la validación:

- 🔴 **Must Have (incluido en Etapa 1):** menú semanal visual, configuración de días laborables, confirmación en 1 clic, tabla de consolidación con semáforo, exportación a CSV.
- 🟡 **Should Have (Etapa 3):** recordatorios automáticos vía API de Slack, anulación de pedidos post-confirmación, reportes estadísticos gráficos.
- ⚪ **Won't Have (descartado por overkill para el tamaño del problema):** aplicaciones nativas móviles (iOS/Android), integraciones con plataformas de RRHH (Workday/Bamboo), portal de acceso directo para el proveedor de catering.

---

### 7.6 Script de Reclutamiento de Early Adopters

El siguiente mensaje fue utilizado de forma real vía Slack para conseguir los primeros beta-testers del MVP. El tono fue deliberadamente casual e informal: un mensaje corporativo habría sido ignorado exactamente igual que los emails de recordatorio de viandas.

> *"👋 ¡Hola equipo! Estamos armando una prueba para simplificar el proceso de pedido de viandas del comedor. La idea es que puedas confirmar tu vianda en menos de 10 segundos sin tocar Google Sheets. Buscamos 10-15 voluntarios para probar la versión inicial durante 2 semanas. No necesitás instalar nada — es una web que funciona en el celu y la compu. Si te interesa, reaccioná a este mensaje con 🍽️ y te agrego a la prueba. La semana que viene largamos 🚀"*

---

### 7.7 Plantilla de Entrevista Cualitativa (Pre-MVP)

Las entrevistas fueron diseñadas específicamente para evitar respuestas sesgadas hacia lo que el entrevistado cree que el entrevistador quiere escuchar. Por eso todas las preguntas comienzan con apertura de flujo libre y evitan mencionar soluciones o tecnologías hasta el final:

1. *"Contame paso a paso qué hacés desde que te enterás del menú semanal hasta que tenés tu vianda en la mano. No omitas nada, por más mínimo que parezca."*
2. *"¿Cuándo fue la última vez que tuviste un problema con el pedido? (ej. olvido, comida incorrecta, llegaste tarde). Contame exactamente qué pasó y cómo te sentiste."*
3. *"Si tuvieras el poder de cambiar UNA sola cosa del proceso actual, ¿qué cambiarías? ¿Por qué justo eso?"*
4. *"De 1 a 5, ¿qué tan urgente es resolver esto para vos? (1 = me da igual completamente, 5 = lo sufro activamente cada semana)"*

---

### 7.8 Artefactos y Recursos

| Artefacto | Descripción | Ubicación |
|-----------|-------------|-----------|
| **MVP en vivo** | Vista empleado + vista admin desplegadas en GitHub Pages | https://rjruiz-dev.github.io/viandas-stacklab/ |
| **Repositorio** | Código fuente completo del proyecto | https://github.com/rjruiz-dev/viandas-stacklab |
| **Tests unitarios** | 10 pruebas ejecutables en navegador, sin dependencias | `prototype/tests.html` |
| **Planilla Menú Semanal** | Versión anonimizada con códigos de plato (C1, C2, P1, S1, L1, L2) y opciones especiales | `docs/informe-final/assets/planilla-menu-semanal.md` |
| **Planilla Empleados** | Seguimiento individual de pedidos por día con marcas de confirmación, faltantes y observaciones | `docs/informe-final/assets/planilla-empleados.md` |
| **Consolidado Diario** | Resumen para el proveedor con conteos por código, totales y cálculo económico de no-reclamadas | `docs/informe-final/assets/planilla-consolidado.md` |
| **Gráficos de métricas** | 4 PNG: evolución NSM, pérdidas mensuales, tiempo admin, dashboard compacto 4 KPIs | `docs/informe-final/assets/graficos/` |

---

### 7.9 Gráficos de Métricas — Detalle

<table>
<tr>
<td><img src="assets/graficos/grafico-1-nsm-evolucion.png" width="200"><br><em>NSM semanal: baseline 72% → ≥ 95%</em></td>
<td><img src="assets/graficos/grafico-2-perdidas-mensuales.png" width="200"><br><em>Pérdidas: $71-129k → ≤ $15k ARS/mes</em></td>
<td><img src="assets/graficos/grafico-3-tiempo-admin.png" width="200"><br><em>Tiempo admin: 2.5h → ≤ 30 min/semana</em></td>
</tr>
</table>

---

*Informe Final — Viandas StackLab · Rodrigo Ruiz · Mayo 2026 · Versión 5.0*
