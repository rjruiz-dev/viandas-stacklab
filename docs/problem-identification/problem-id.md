# 🧩 Identificación de Problema para Vibe Coding — Sistema de Viandas StackLab

> **Herramienta de pre-producción.** Completá esto ANTES de abrir Bolt, Lovable, V0 o cualquier herramienta de vibe coding.
> Si no podés completar una sección, el problema no está suficientemente claro. Eso es información valiosa.

---

## 0. Metadata

| Campo | Valor |
|-------|-------|
| **Nombre tentativo del producto** | `Viandas StackLab — Gestor de pedidos de viandas para el comedor de StackLab` |
| **Fecha** | `2026-05-15` |
| **Autor** | `Martín Fernández (empleado StackLab — usuario directo del sistema)` |
| **Versión del documento** | `v1.0` |
| **Estado** | `[x] Borrador  [ ] En revisión  [ ] GO  [ ] NO-GO` |

---

## 1. Claridad Conceptual

> Antes de seguir, fijate bien: ¿tenés un problema real, una idea piola, o una oportunidad posta? Confundir estos tres es la causa #1 de que nadie use lo que construyas.

| Concepto | Definición | Ejemplo (viandas StackLab) | ¿Es lo tuyo? |
|----------|-----------|------------------------------|--------------|
| **Problema** | Una situación real que genera fricción, pérdida de tiempo o dinero para una persona concreta. | Martín se olvida de pedir su vianda a pesar de los recordatorios por email. Lucía pierde 2-3 horas semanales en planillas Excel consolidando pedidos. | `[x]` |
| **Idea** | Una solución técnica que se te ocurrió. Puede o no resolver un problema real. | "Una app para pedir viandas del comedor." | `[ ]` |
| **Oportunidad** | Un problema real + señales de que el mercado no tiene una solución adecuada + que vos podés resolverlo. | 50+ empleados en StackLab sufren este problema semanalmente. No existe una herramienta interna que lo resuelva. Lucía estaría dispuesta a adoptar cualquier cosa que le ahorre las planillas. | `[ ]` |

**⚠️ CHECKPOINT 0:** ¿Tenés un PROBLEMA, no solo una idea?

- `[x]` Sé nombrar a una persona real que tiene este problema (no "los usuarios")
- `[x]` Sé describir el problema sin mencionar ninguna solución tecnológica
- `[x]` El problema existe aunque yo no construya nada

> Si no marcaste los 3: volvé atrás. Todavía estás en el espacio de las ideas.

---

## 2. Declaración del Problema

> La frase del problema tiene 5 elementos obligatorios. Si falta uno, la frase está incompleta.

### 2.1 Los 5 elementos

| Elemento | Guía | Tu respuesta |
|----------|------|-------------|
| **Contexto** | ¿En qué situación ocurre el problema? ¿Cuándo, dónde, bajo qué condiciones? | Cada semana en StackLab, una empresa de software con aproximadamente 50 empleados en Santa Fe. El comedor contrata viandas de un proveedor externo. El ciclo semanal va de lunes (menú publicado) a jueves (cierre del consolidado diario) y viernes (entrega de viandas). |
| **Usuario objetivo** | ¿Quién lo experimenta? Persona específica, no segmento. Nombre, rol, situación. | **Martín Fernández**, 37 años, desarrollador en StackLab. Trabaja de lunes a viernes en la oficina, almuerza viandas del comedor. **Lucía Gómez**, 45 años, encargada de administración del comedor y RRHH. Gestiona la relación con el proveedor, consolida pedidos, maneja recordatorios. |
| **Pain** | ¿Qué fricción concreta experimenta? Acción que no puede hacer o que hace mal. | Martín se olvida de confirmar su vianda antes del deadline (jueves 10 AM) a pesar de recibir recordatorios por email. Si se olvidó, se queda sin almuerzo. Si cambia de planes y necesita ir a la oficina a último momento, tampoco puede pedir. Si pidió y ese día no fue, su vianda queda en la heladera sin reclamar. Lucía pasa 2-3 horas semanales copiando datos entre emails y planillas Excel, enviando recordatorios manuales y persiguiendo a los empleados para que confirmen. |
| **Frecuencia** | ¿Con qué regularidad ocurre? | Cada semana. Los olvidos ocurren 3-5 veces por semana. El trabajo administrativo de Lucía es fijo: 2-3 horas semanales, mínimo 8-12 horas al mes. |
| **Impacto cuantificable** | ¿Qué pierde o le cuesta? Tiempo, dinero, clientes, reputación. | 3-5 viandas desperdiciadas por semana × ~$5.500-6.000 ARS c/u = $71.000-$129.000 ARS/mes en comida que nadie come. Lucía pierde 8-12 horas/mes en tareas manuales de consolidación y seguimiento. Los empleados que se olvidan se quedan sin almuerzo o tienen que comprar delivery a último momento. |

### 2.2 La frase del problema

> Armá una sola frase usando los 5 elementos. Si no podés, los elementos no están claros.

**Formato:** `[Usuario] necesita [acción o resultado] porque [contexto + pain], lo cual genera [impacto cuantificable] con una frecuencia de [frecuencia].`

**Tu frase:**
> Martín y sus compañeros de StackLab —una empresa de software de aproximadamente 50 empleados— necesitan gestionar sus pedidos de viandas semanales sin depender de planillas Excel ni recordatorios por email que nadie lee, porque cada semana 3 a 5 personas se olvidan de confirmar o no pueden cambiar su pedido después del deadline del jueves, lo que genera entre $71.000 y $129.000 ARS mensuales en viandas desperdiciadas y le consume a Lucía —la encargada del comedor— entre 2 y 3 horas semanales de consolidación manual y seguimiento.

---

## 3. Criterios de Validación del Problema

> **⚠️ CHECKPOINT 1 — OBLIGATORIO:** Todos los criterios deben ser ✅ para continuar al paso 4.
> Si alguno es ❌, el problema no está suficientemente validado. No sigas.

| # | Criterio | Pregunta de verificación | Estado |
|---|----------|-------------------------|--------|
| 1 | **Relevancia** | ¿El problema importa lo suficiente como para que la persona pague o cambie su comportamiento? | `[x] ✅  [ ] ❌` |
| 2 | **Frecuencia** | ¿Ocurre al menos una vez por semana o en momentos de alto impacto? | `[x] ✅  [ ] ❌` |
| 3 | **Impacto** | ¿Genera pérdida medible de tiempo, dinero, clientes o reputación? | `[x] ✅  [ ] ❌` |
| 4 | **Claridad** | ¿Podés explicárselo a alguien en 2 oraciones sin que pregunte "¿qué querés decir"? | `[x] ✅  [ ] ❌` |

**Evidencia que sustenta los criterios:**
```
Soy empleado de StackLab y sufro esto desde hace 2 años. Charlé informalmente con 3 compañeros de distintos equipos (Diego, backend; Sofía, UX; y otro del equipo de QA). Los 3 me dijeron que se olvidaron de pedir al menos 2-3 veces en los últimos meses. Diego me dijo: "Ya ni leo los emails de Lucía, los veo y digo 'después lo hago' y me olvido". Sofía me contó que un miércoles pidió vianda, el jueves le avisaron de una reunión externa, y no pudo cancelar — la vianda quedó en la heladera. Todos los viernes a las 14 hs la heladera tiene entre 2 y 4 viandas sin reclamar. Lucía me dijo (en una charla de pasillo) que odia "tener que andar atrás de la gente" y que el Excel le come tiempo que podría usar en otras cosas.
```

---

## 4. Clasificación de Pains

> Los problemas tienen capas. Identificarlas cambia el diseño del producto.

### 4.1 Mapa de pains

| Tipo | Definición | Ejemplo (viandas StackLab) | ¿Existe en tu caso? | Descripción concreta |
|------|-----------|------------------------------|----------------------|----------------------|
| **Funcional** | Una tarea que no puede completar de forma eficiente | Martín no puede confirmar su vianda con un solo paso; tiene que buscar el email en su bandeja de entrada, abrir la planilla Excel en Google Sheets, encontrar la pestaña de la semana correcta, buscar su nombre y marcar. Si se olvidó, ya no puede hacer nada. | `[x]` | Los empleados olvidan confirmar viandas a pesar de los recordatorios. Si el deadline pasó, no pueden agregar ni modificar su pedido aunque tengan una reunión de último minuto. Lucía consolida manualmente datos de Google Sheets a un Excel que envía al proveedor. Todo el proceso depende de que alguien "se acuerde". |
| **Emocional** | Frustración, ansiedad, inseguridad que genera el problema | Martín siente culpa cuando ve su vianda sin reclamar en la heladera el viernes. Sabe que la empresa pagó por esa comida que nadie comió. Lucía siente frustración por tener que "perseguir" a sus compañeros cada semana. | `[x]` | Martín: "Me da culpa cuando veo mi vianda en la heladera y sé que la empresa gastó plata al pedo". Lucía: "Me cansa ser la pesada que manda recordatorios. Siento que molesto pero si no lo hago, la mitad no pide." Los compañeros de Martín mencionaron incomodidad al tener que justificar olvidos recurrentes. |
| **Social** | Impacto en percepción, reputación o estatus ante otros | Los empleados que sistemáticamente dejan viandas sin reclamar pueden ser percibidos como desconsiderados. Lucía es percibida como "la que te persigue para que pidas". | `[x]` | En la oficina hay un chiste recurrente los viernes: "¿De quién es la vianda huérfana de hoy?". Los empleados que olvidan frecuentemente se sienten señalados. Lucía siente que su rol es "la molestadora oficial del comedor" y que eso desgasta su relación con los compañeros. |

### 4.2 Pain más crítico

> ¿Cuál de los tres genera mayor disposición a pagar o cambiar comportamiento?

**Pain principal:** `[x] Funcional  [ ] Emocional  [ ] Social`

**Justificación:**
> El pain funcional es el que mueve todo. Si los empleados pudieran confirmar su vianda fácil y cambiar el pedido hasta un rato antes, el resto de los problemas (la culpa, la frustración, el quedar mal) se solucionan solos. Lucía no tendría que andar mandando recordatorios si el sistema lo hace solo. Como me dijo Diego: "No es que no quiera pedir — es que cuando veo el email ya estoy en otra cosa y me olvido."

---

## 5. Alternativas y Workarounds Actuales

> Tu competencia no es otra app. Es lo que la gente hace HOY para arreglárselas sin tu producto.

### 5.1 Alternativas existentes

| # | Alternativa | Por qué la usan | Por qué no resuelve el problema completamente |
|---|------------|-----------------|-----------------------------------------------|
| 1 | **Google Sheets + email** (sistema actual) | Es lo que hay. Todos tienen acceso a Google Sheets. Los emails ya están en la rutina de la empresa. | No notifica a quien no abrió el email. No envía recordatorios automáticos. No permite cambios después del deadline aunque la persona tenga un motivo válido. Requiere que Lucía consolide manualmente los datos. Es frágil: si alguien edita mal una celda, se rompe todo. |
| 2 | **WhatsApp (grupo del comedor)** | Todos tienen WhatsApp. Las notificaciones son más visibles que el email. | Se mezcla con conversaciones sociales. Es imposible trackear quién confirmó y quién no en un grupo de 50 personas. No hay consolidado automático. Lucía tendría que leer 50 mensajes por semana. Imposible de escalar. |
| 3 | **Planilla física en el comedor** | Visible para el que va a la cocina. Simple, no requiere tecnología. | Solo sirve para los que están en la oficina. Los que trabajan remoto no la ven. Se puede ensuciar, perder. No hay historial. No resuelve cambios de último momento. |

### 5.2 Workaround principal

> ¿Qué hack improvisado usa la persona HOY para no morir con el problema?

**Workaround:**
> Lucía arma la planilla de Google Sheets con el menú semanal cada lunes a las 9 AM. Manda el link por email a todos con el asunto "PEDIDO VIANDAS — Semana XX". El martes a las 10 AM manda un recordatorio. El miércoles a las 4 PM manda OTRO recordatorio, esta vez más urgente. Cuando alguien le dice por WhatsApp "Me olvidé, ¿me agregás?" ella lo anota a mano en el Excel. El jueves a las 10 AM cierra todo y arma el consolidado para el proveedor. Si le escriben a las 10:15 AM ya no puede hacer nada.

**¿Qué dice este workaround sobre el problema?**
> Que Lucía ya está harta de tener que arreglar esto a mano. Que los emails no sirven para esto — la gente los ignora. Que todos quieren poder cambiar el pedido a último momento (porque en una empresa de software las reuniones surgen de un día para el otro). Y que esto pasa TODAS las semanas, no es un evento de una vez.

---

## 6. Usuario Objetivo

> NO es un segmento demográfico ("millennials emprendedores"). Es una persona con nombre, contexto y comportamiento específico.
> Si tu usuario objetivo pudiera ser cualquiera, no es un usuario objetivo.

### 6.1 Persona específica

#### Perfil 1: El empleado (Martín Fernández)

| Campo | Contenido |
|-------|-----------|
| **Nombre** | Martín Fernández |
| **Edad aproximada** | 37 años |
| **Rol / Ocupación** | Desarrollador de software en StackLab. Trabaja en la oficina 3-4 días por semana, algunos días remoto. |
| **Contexto operativo** | Tiene reuniones que surgen a último momento. Algunos días decide a la mañana si va a la oficina o trabaja desde casa. Recibe 80+ emails por día — los del comedor se pierden entre Jira, Slack y GitHub. |
| **Motivación principal** | No quiere quedarse sin almuerzo los días que va a la oficina. No quiere que la empresa gaste plata en viandas que él no come. |
| **Comportamiento digital** | Usa Slack para comunicación diaria, GitHub para código, Google Calendar para agenda. El email es su "inbox del caos": lo revisa pero no acciona sobre la mayoría. WhatsApp solo para coordinación rápida. |
| **Disposición a pagar** | No pagaría (es empleado, no comprador). Pero adoptaría cualquier herramienta que sea más simple que la planilla actual. |
| **Momento de mayor dolor** | Jueves a las 10:15 AM cuando se acuerda que no pidió vianda y el deadline ya pasó. O viernes al mediodía cuando ve su vianda en la heladera y él no fue a la oficina. |

#### Perfil 2: La administradora (Lucía Gómez)

| Campo | Contenido |
|-------|-----------|
| **Nombre** | Lucía Gómez |
| **Edad aproximada** | 45 años |
| **Rol / Ocupación** | Encargada de administración del comedor y RRHH en StackLab. También maneja compras de insumos, relación con proveedores y eventos internos. |
| **Contexto operativo** | Tiene múltiples responsabilidades además del comedor. El proceso semanal de viandas le insume 2-3 horas que podría usar en otras tareas. No tiene formación técnica avanzada pero maneja Google Sheets con soltura. |
| **Motivación principal** | Quiere que el proceso funcione solo, sin tener que perseguir a sus compañeros cada semana. Quiere dejar de ser "la que molesta". |
| **Comportamiento digital** | Maneja Google Workspace, Excel, email. Usa WhatsApp para comunicación informal con compañeros y proveedores. No usa Slack — prefiere hablar cara a cara o por email. |
| **Disposición a pagar** | No paga ella directamente (es herramienta de la empresa). Pero sí tiene poder de decisión para adoptar o rechazar una nueva herramienta. Adoptaría cualquier cosa que reduzca su carga manual. |
| **Momento de mayor dolor** | Jueves de 9 a 11 AM: cierre del consolidado, recordatorios de último minuto, reclamos de gente que se olvidó, armado del Excel final para el proveedor. |

### 6.2 ¿Por qué estas personas y no otras?

> Martín es el tipo de compañero que todos conocemos: vive en Slack, ignora emails y le cambian los planes de un día para el otro. Si le funciona a él, le funciona a cualquiera. Lucía es la que manda: si ella no aprueba la herramienta, nadie la usa. Hay que resolverlo para los dos: el empleado confirma fácil, y Lucía no tiene que hacer nada a mano.

---

## 7. Research Rápido

> Antes de codear, asegurate de que esto sea real. No es opcional.

### 7.1 Entrevistas (15-20 min)

**Objetivo:** Entender el comportamiento actual, no validar tu solución.

**Preguntas abiertas (hacé al menos 3):**

1. `Contame cómo hacés para pedir tu vianda cada semana. Desde que te llega el email hasta que tenés la vianda en la mano el viernes.`
2. `¿Cuándo fue la última vez que te olvidaste de pedir o que no pudiste cambiar un pedido? ¿Qué pasó ese día?`
3. `Si mañana te digo que Lucía deja de mandar recordatorios, ¿cómo te enterarías de que hay que pedir vianda?`

**Preguntas cerradas (máx 2, al final):**

4. `En una escala del 1 al 5, ¿qué tan molesto es para vos el proceso actual de pedir viandas? (1 = no me molesta, 5 = me frustra mucho)`
5. `¿Usarías una web simple en vez de la planilla si podés confirmar con 1 click?`

**Tus preguntas:**

| # | Tipo | Pregunta |
|---|------|---------|
| 1 | Abierta | `Contame paso a paso qué hacés desde que te enterás del menú semanal hasta que tenés tu vianda en la mano. No omitas nada, por más mínimo que parezca.` |
| 2 | Abierta | `¿Cuándo fue la última vez que tuviste un problema con una vianda? (olvido, cambio imposible, vianda no reclamada). Contame exactamente qué pasó y cómo te sentiste.` |
| 3 | Abierta | `Si pudieras cambiar UNA sola cosa del proceso actual, ¿qué cambiarías? ¿Por qué justo eso?` |
| 4 | Cerrada | `Del 1 al 5, ¿qué tan urgente es resolver esto para vos? (1 = me da igual, 5 = lo necesito para ayer)` |
| 5 | Cerrada | `Si existiera una herramienta que te permita configurar tus días de oficina y confirmar viandas en menos de 10 segundos, ¿la usarías en vez de la planilla?` |

### 7.2 Señales de validación temprana

> ¿Qué tenés que ver/escuchar para saber que el problema es real ANTES de construir?

| Señal | ¿La observaste? | Evidencia |
|-------|----------------|-----------|
| La persona describe el problema sin que vos lo menciones primero | `[x]` | Diego dijo: "Yo ya ni leo los mails de Lucía. Veo el asunto y lo ignoro directamente. Después me arrepiento." |
| La persona ya gasta tiempo o dinero intentando resolverlo | `[x]` | Lucía tiene una planilla de Google Sheets con fórmulas condicionales para trackear quién confirmó y quién no. Le dedica tiempo a mantenerla y mejorarla cada mes. |
| La persona se frustra visiblemente al describir su workaround actual | `[x]` | Sofía levantó los ojos al cielo cuando mencionó que no pudo cancelar su vianda por una reunión de último momento. "Es ridículo que en una empresa de tecnología pidamos viandas con Excel." |
| La persona pregunta cuándo va a estar lista la solución | `[ ]` | *(No aplica aún — no se ha comunicado que se está trabajando en una solución. Esto se espera después de la primera demo.)* |
| Más de 3 personas distintas describieron el mismo problema con palabras similares | `[x]` | Los 3 compañeros consultados (Diego, Sofía, y otro compañero de QA) usaron frases como "me olvidé", "no llegué a completar la planilla", "ya había mandado el pedido" de forma independiente y sin saber que estábamos relevando el problema. |

**⚠️ CHECKPOINT 2:** ¿Tenés al menos 3 señales confirmadas?

- `[x]` Sí → continuá
- `[ ]` No → hacé más entrevistas antes de seguir

---

## 8. Hipótesis Central de Valor

> Una sola hipótesis. Verificable. Con métrica. Con plazo.
> Si no podés falsificarla, no es una hipótesis — es un deseo.

### 8.1 Formato Si-Entonces

**Formato:** `Si [usuario específico] puede [acción que hoy no puede hacer bien], entonces [resultado medible] en [plazo].`

**Ejemplo (de otro caso):**
> Si Laura puede ver en tiempo real el estado de pago de todos sus miembros y enviar recordatorios automáticos, entonces reducirá su tiempo de gestión de cobros de 3 horas a menos de 30 minutos semanales en los primeros 30 días de uso.

**Tu hipótesis:**
> Si los empleados de StackLab (como Martín) pueden configurar sus días de asistencia a la oficina y confirmar sus viandas con 1 clic desde cualquier dispositivo, y Lucía puede obtener el consolidado diario automático sin intervención manual, entonces los olvidos de pedido se reducirán al menos un 80% (de 3-5 semanales a 0-1) y el tiempo semanal de Lucía en gestión de viandas bajará de 2-3 horas a menos de 30 minutos en las primeras 4 semanas de uso.

### 8.2 Criterios de éxito

| Componente | Detalle |
|-----------|---------|
| **Métrica principal (NSM)** | % de viandas confirmadas correctamente por semana vs. total de empleados que asisten a la oficina (target: ≥ 95% de confirmación sin recordatorios manuales) |
| **Métrica secundaria** | Tiempo semanal de Lucía en tareas de gestión de viandas (target: ≤ 30 minutos, vs. 2-3 horas actuales) |
| **Criterio de éxito mínimo** | De 20-25 empleados que piden vianda regularmente, al menos 18 confirman su pedido antes del deadline sin intervención de Lucía. Lucía reporta una reducción de tiempo ≥ 60%. |
| **Plazo de validación** | 4 semanas de uso real con el MVP (2 ciclos completos de pedido) |
| **¿Cómo lo medís?** | Logs del sistema (confirmaciones por usuario, timestamp, cambios realizados). Time-tracking auto-reportado de Lucía (planilla de horas antes/después). Conteo de viandas sin reclamar en heladera los viernes a las 14 hs. |

### 8.3 ¿Cómo falsificás la hipótesis?

> Si después de 4 semanas de uso, Lucía sigue necesitando enviar recordatorios manuales porque la tasa de confirmación espontánea es menor al 70%, o si su tiempo de gestión semanal no bajó de 1 hora, la hipótesis es falsa. En ese caso, el problema no es de fricción de confirmación sino de otra naturaleza (cultural, de hábito, de visibilidad del canal, etc.).

---

## 9. User Journey Actual

> Cómo resuelve el problema HOY, sin tu producto. Mapeá la realidad, no el ideal.

### 9.1 Mapa de pasos — El ciclo semanal de viandas

| Paso | Día | Acción | Herramienta que usa | 😤 Punto de dolor | Tiempo estimado |
|------|-----|--------|--------------------|--------------------|-----------------|
| 1 | Lunes 9 AM | Lucía recibe el menú semanal del proveedor, lo copia a la planilla de Google Sheets y envía el link por email a todos los empleados. | Google Sheets, Gmail | El email compite con 50+ correos en la bandeja de entrada de cada empleado. Muchos ni lo abren. | 15 min (Lucía) |
| 2 | Lunes a Miércoles | Los empleados que se acuerdan abren el email, buscan el link, abren la planilla, navegan a la pestaña de la semana, buscan su nombre y marcan los días que quieren vianda. | Google Sheets | El proceso tiene 5+ pasos. Si estás en el celular, la planilla es inusable. No hay confirmación de que "ya lo hiciste". **Además: al ser una planilla compartida, te podés confundir de fila y pedir en nombre de otro empleado sin darte cuenta.** | 2-3 min por empleado (si se acuerda) |
| 3 | Martes 10 AM | Lucía revisa la planilla, ve que faltan confirmaciones y envía el recordatorio #1 por email. | Gmail | Lucía ya está gastando tiempo en seguimiento. Sabe que este email va a ser ignorado por varios. | 10 min (Lucía) |
| 4 | Miércoles 4 PM | Lucía envía el recordatorio #2 con tono más urgente ("Cierro mañana a las 10 AM. Si no completaron, no hay vianda"). | Gmail | Frustración de Lucía: "¿Por qué tengo que andar rogando que pidan?". Estrés de los empleados que ven el email tarde. | 10 min (Lucía) |
| 5 | Jueves 10 AM | **DEADLINE.** Lucía cierra la planilla, exporta los datos y arma el consolidado para el proveedor. Si alguien le escribe por WhatsApp a las 10:15, lo anota a mano en el Excel. | Google Sheets, Excel, WhatsApp | **Punto de máxima fricción.** Martín se acuerda a las 10:30 que no pidió. Le escribe a Lucía. Ella ya mandó el consolidado. Martín se queda sin vianda. Lucía se siente mal por decir que no. | 45-60 min (Lucía) |
| 6 | Jueves 11 AM | Lucía envía el consolidado al proveedor. Fin del ciclo de pedido. | Email | Irreversible. Si alguien pidió y mañana no viene, no hay forma de cancelar. | 5 min (Lucía) |
| 7 | Viernes 12 PM | Llegan las viandas. Los empleados que pidieron retiran su vianda del comedor. | — | Las viandas de los que pidieron pero no vinieron quedan en la heladera. Nadie las reclama. | — |
| 8 | Viernes 2 PM | Lucía (o alguien de la cocina) guarda las viandas no reclamadas en la heladera. Al final del día, si nadie las reclamó, se tiran. | Heladera | **Desperdicio tangible.** 3-5 viandas = $16.500-$30.000 ARS tirados a la basura cada viernes. | 5 min |

**Tiempo total estimado:** Lucía: 2-3 horas semanales. Empleados: 2-3 minutos por pedido × 25 empleados = ~1 hora colectiva por semana (solo en planilla, sin contar el costo cognitivo de "acordarse").

### 9.2 Momento de mayor fricción

> El paso 5: jueves 10 AM, el deadline. Ahí se juntan todos los problemas: Lucía está corriendo para armar el consolidado, Martín y otros 2-3 se acuerdan tarde y le llenan el WhatsApp de mensajes pidiendo "agregame", y Lucía tiene que elegir entre ser buena (más trabajo a mano) o estricta (compañeros sin almuerzo, y ella se siente mal). Esto pasa TODAS las semanas y es lo que genera más desperdicio, frustración y discusiones.

---

## 10. Definición del MVP

> El MVP no es la app más chica que podés hacer. Es la prueba más barata para ver si tu hipótesis es cierta.

### 10.1 ¿Qué valida exactamente?

> Que los empleados (como Martín) confirman sus viandas solos, sin que Lucía tenga que andar atrás de ellos, cuando el proceso es 1 click. Y que Lucía ve el consolidado sin tocar una planilla. Si el 80% de los empleados confirman antes del deadline durante 4 semanas, la hipótesis está validada.

### 10.2 Tabla MoSCoW

| Categoría | Feature | Justificación |
|-----------|---------|---------------|
| **Must** (sin esto no hay MVP) | Visualización del menú semanal (lunes a viernes, con opciones de plato) | Sin esto el empleado no puede decidir qué pedir. Es la pantalla principal de interacción. |
| **Must** | Configuración de días de asistencia (qué días va a la oficina) | El core de la hipótesis: el empleado define su semana laboral y sobre eso confirma viandas. Reduce la fricción de "tener que acordarme cada día". |
| **Must** | Confirmación de vianda con 1 clic por día | La acción crítica. Si requiere más de 1 clic o más de 10 segundos, no es mejor que la planilla actual. |
| **Must** | Vista de confirmación (feedback visual de "ya pediste") | Sin feedback, el empleado no sabe si confirmó o no. El dolor actual incluye la incertidumbre de "¿habré completado la planilla?". |
| **Must** | Deadline automático configurable (ej: jueves 10 AM) | El sistema debe cortar las confirmaciones a la hora definida. Sin esto, Lucía sigue teniendo que "cerrar la planilla" manualmente. |
| **Must** | Consolidado diario automático para el admin (vista de "quiénes pidieron qué") | Es lo que Lucía hace manualmente cada jueves. Si el sistema no lo genera solo, Lucía no gana nada. |
| **Should** (importante pero no bloqueante) | Recordatorio automático por email o Slack 24h y 2h antes del deadline | Reduce la dependencia de Lucía para seguimiento. Pero el MVP puede funcionar sin esto si la tasa de confirmación espontánea es alta. |
| **Should** | Bloqueo de fila / prevención de edición cruzada (cada empleado solo ve y edita su propia fila) | En la planilla actual te podés confundir de fila y pedir en nombre de otro. Un sistema donde cada uno ve solo su pedido elimina este riesgo. |
| **Should** | Vista de histórico de pedidos por empleado | Útil para trackear hábitos y resolver disputas, pero no bloquea la validación de la hipótesis. |
| **Should** | Calendario de feriados / días no laborables (el admin marca feriados, los empleados no pueden pedir esos días) | Lucía hace esto manualmente hoy. Automatizarlo ahorra un paso recurrente y evita pedidos en días que la empresa no trabaja. |
| **Could** (nice to have) | Preferencias de menú / restricciones alimentarias (vegetariano, sin TACC, etc.) | Valioso para la experiencia, pero el proveedor actual ya conoce estas restricciones. No afecta la hipótesis central. |
| **Could** | "Favoritos" o "repetir pedido de la semana anterior" | Acelera el proceso para empleados rutinarios. No es necesario para validar. |
| **Could** | Integración con Google Calendar para detectar días de oficina automáticamente | Muy útil, pero complejo y no esencial para la hipótesis. |
| **Won't** (fuera del MVP — explícito) | Pago online / integración con medios de pago | Las viandas las paga la empresa, no el empleado. No hay transacción económica en el sistema. |
| **Won't** | App móvil nativa (iOS/Android) | Web responsive es suficiente para validar. El 95% del uso va a ser desde el celular o la laptop del trabajo. |
| **Won't** | Integración con sistemas de RRHH (altas/bajas de empleados, legajos) | Overkill absoluto para el MVP. Lucía maneja la lista de empleados manualmente sin problema. |
| **Won't** | Portal del proveedor (que el proveedor pueda loguearse y ver pedidos) | El consolidado se exporta y se envía por email. No necesitamos construir un B2B para validar la hipótesis. |
| **Won't** | Múltiples comedores o sucursales | StackLab tiene una sola sede. No hay necesidad de multi-tenancy en el MVP. |
| **Won't** | Notificaciones push | El MVP usa email/Slack para recordatorios. Las notificaciones push requieren app nativa o service workers complejos. |

### 10.3 ¿Qué queda EXPLÍCITAMENTE fuera?

- `Cualquier integración de pagos — la empresa paga al proveedor, los empleados no pagan`
- `App móvil nativa — web responsive 100%`
- `Integración con RRHH o nómina — la lista de empleados se maneja manualmente`
- `Portal del proveedor — el consolidado se exporta y se envía por los canales actuales`
- `Roles y permisos complejos — solo dos roles: empleado y admin`
- `Múltiples sucursales o comedores — alcance: solo StackLab sede central`
- `Personalización de menú por empleado — el menú es fijo semanal, lo define el proveedor`

---

## 11. Etapas de Construcción

> No hagas todo de una. Cada etapa tiene que funcionar y aprender algo antes de pasar a la siguiente.

| Etapa | Nombre | Qué construís | Qué aprendés | Criterio de avance |
|-------|--------|--------------|-------------|-------------------|
| **1** | **Esqueleto** | Web simple (HTML + JS vanilla o framework ligero). Menú semanal hardcodeado (datos de una semana real del proveedor). Martín puede ver el menú, marcar días de asistencia y confirmar viandas con 1 clic. Lucía puede ver un consolidado "falso" (datos hardcodeados). Sin base de datos, sin autenticación, sin deadlines reales. Todo en memoria. | ¿El flujo tiene sentido para Martín? ¿Confirma sin que le expliquen? ¿Lucía entiende la vista de consolidado? ¿El concepto de "configurar días" resuena o lo ven innecesario? | Martín y Lucía completan el flujo completo en menos de 3 minutos cada uno sin ayuda. Ambos dicen "esto es mejor que la planilla". |
| **2** | **Datos reales** | Base de datos real (SQLite o Supabase). Autenticación simple (login con email). Menú semanal cargado por Lucía desde un formulario (no hardcodeado). Deadline real y automático. Confirmaciones persisten. Consolidado se genera solo con datos reales. | ¿Los empleados cargan sus días reales? ¿Confirman sin recordatorios? ¿Lucía confía en el consolidado automático? ¿El deadline automático genera rechazo o aceptación? | 15+ empleados usan el sistema para 2 semanas consecutivas. Lucía no toca una planilla de Google Sheets en esas 2 semanas. Tasa de confirmación ≥ 70% sin recordatorios. |
| **3** | **Recordatorios y ajustes** | Recordatorios automáticos por email o Slack 24h y 2h antes del deadline. Capacidad de modificar/cancelar pedido hasta el deadline. Estadísticas básicas para Lucía. | ¿Los recordatorios automáticos mueven la aguja sobre la tasa de confirmación? ¿La posibilidad de modificar pedidos reduce viandas no reclamadas? ¿Las estadísticas le sirven a Lucía para algo o es info que no usa? | Tasa de confirmación ≥ 90%. Reducción de viandas no reclamadas ≥ 50% vs. baseline de la planilla. Lucía reporta < 30 min semanales en gestión. |
| **4** | **Validación externa** | Encuesta a todos los empleados sobre satisfacción con el nuevo sistema. Entrevista estructurada con Lucía (antes/después). Documentación de resultados: métricas cuantitativas y cualitativas. Decisión: ¿se adopta definitivamente o se vuelve a la planilla? | ¿El problema estaba correctamente identificado? ¿La solución resuelve los pains funcional, emocional y social? ¿Hay adoption orgánica (empleados que recomiendan a otros)? ¿Lucía recuperó las 2-3 horas semanales? | ≥ 80% de empleados prefiere el sistema nuevo a la planilla. Lucía dice explícitamente "no vuelvo a la planilla". Hipótesis central validada o falsificada con datos. |

---

## 12. GO / NO-GO

> **⚠️ CHECKPOINT FINAL**
> Acá se decide de posta. Si falta algo, no abras Bolt ni Lovable todavía. Arreglá primero lo que falta.

### 12.1 Checklist de decisión

| # | Criterio | Estándar mínimo | Estado |
|---|----------|----------------|--------|
| 1 | **Problema real identificado** | Puedo nombrarlo en una frase con los 5 elementos (contexto, usuario, pain, frecuencia, impacto) | `[x] ✅  [ ] ❌` |
| 2 | **Usuario específico** | Tengo una persona concreta, no un segmento. Sé su nombre, rol y situación. | `[x] ✅  [ ] ❌` |
| 3 | **Evidencia de primera mano** | Hablé con al menos 3 personas reales que tienen este problema | `[x] ✅  [ ] ❌` |
| 4 | **Señales de validación** | Al menos 3 de las 5 señales de la sección 7.2 están confirmadas | `[x] ✅  [ ] ❌` |
| 5 | **Hipótesis falsificable** | Tengo una hipótesis Si/Entonces con métrica, criterio de éxito y plazo definidos | `[x] ✅  [ ] ❌` |
| 6 | **Workaround documentado** | Sé exactamente cómo resuelve el problema HOY y por qué eso es insuficiente | `[x] ✅  [ ] ❌` |
| 7 | **MVP acotado** | Tengo una tabla MoSCoW con al menos 3 Won'ts explícitos | `[x] ✅  [ ] ❌` |
| 8 | **Diferenciación clara** | Sé por qué las alternativas actuales no resuelven el problema completamente | `[x] ✅  [ ] ❌` |
| 9 | **Etapas definidas** | Tengo las 4 etapas de construcción con criterios de avance concretos | `[x] ✅  [ ] ❌` |
| 10 | **Pain crítico identificado** | Sé si el pain es funcional, emocional o social — y sé cuál es el más urgente | `[x] ✅  [ ] ❌` |
| 11 | **Disposición a pagar** | Al menos 1 persona real dijo explícitamente que pagaría (o ya paga por algo similar) | `[x] ✅  [ ] ❌` |
| 12 | **User Journey mapeado** | Tengo el journey actual paso a paso con tiempos estimados y puntos de dolor marcados | `[x] ✅  [ ] ❌` |

### 12.2 Resultado

**Total de ✅:** `12 / 12`

| Resultado | Criterio | Acción |
|-----------|---------|--------|
| 🟢 **GO** | 12/12 ✅ | Abrí Bolt/Lovable/V0. Empezá por la Etapa 1 (Esqueleto). |
| 🟡 **GO CONDICIONAL** | 10-11/12 ✅ | Podés empezar, pero documentá los riesgos. Revisitá los ❌ en la semana 1. |
| 🔴 **NO-GO** | < 10/12 ✅ | No abras ninguna herramienta todavía. Los ❌ son trabajo de validación, no de código. |

### 12.3 Decisión y próximo paso

**Decisión:** `[x] GO  [ ] GO CONDICIONAL  [ ] NO-GO`

**Próximo paso concreto:**
> GO → Empezar a construir. Primero la Etapa 1: un esqueleto simple (HTML/JS) para probar si el flujo funciona con Martín y Lucía.

**Nota sobre el criterio #11 (Disposición a pagar):**
> Acá el "comprador" no es una persona sino la empresa. Lucía ya está "pagando" con 8-12 horas mensuales de su tiempo en tareas manuales. La empresa ya está "pagando" $71.000-$129.000 ARS/mes en viandas desperdiciadas. El ROI es inmediato: si el sistema cuesta 40 horas de desarrollo inicial y ahorra 8 horas mensuales de Lucía + $80.000 ARS/mes en viandas, el payback es de 4-5 meses.

**Fecha de revisión:** `2026-05-22` (1 semana — después de la Etapa 1 Esqueleto)

---

*Documento generado con la plantilla de problem-identification para el proyecto Viandas StackLab. Caso real: Sistema de Gestión de Viandas para el comedor de StackLab.*
