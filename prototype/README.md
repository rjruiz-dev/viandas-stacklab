# Prototype — Etapa 1: Esqueleto

> MVP inicial para validar el flujo de confirmación de viandas.

## Estado

🔲 **Pendiente de implementación**

## Descripción

Prototipo web simple con las siguientes características:

- Menú semanal hardcodeado (basado en datos reales de una semana)
- Configuración de días de asistencia a la oficina
- Confirmación de viandas con 1 clic por día
- Feedback visual de "ya confirmaste"
- Consolidado "falso" para la vista de administrador
- Sin base de datos real, sin autenticación, sin deadlines reales (todo en memoria)

## Objetivo de Validación

Responder las siguientes preguntas:

1. ¿El flujo de confirmación tiene sentido para los empleados?
2. ¿Confirman sin que se les explique?
3. ¿La administradora entiende la vista de consolidado?
4. ¿El concepto de "configurar días de asistencia" resuena o lo ven innecesario?

## Criterio de Avance a Etapa 2

- Martín y Lucía completan el flujo completo en menos de 3 minutos cada uno sin ayuda
- Ambos dicen "esto es mejor que la planilla"

## Tecnologías Sugeridas

- HTML + CSS + JavaScript vanilla
- Sin frameworks (mantener la fricción mínima)
- Sin build step
- Servir estáticamente (GitHub Pages, Netlify, o similar)

## Cómo Ejecutar

```bash
# Abrir directamente en el navegador
open index.html

# O servir localmente
npx serve .
```
