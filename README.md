# Viandas StackLab

> **Gestor de pedidos de viandas para el comedor de StackLab.**

## Acerca del Proyecto

StackLab es una empresa de software con aproximadamente 50 empleados en Santa Fe. El comedor interno ofrece viandas a su personal, pero la gestión actual —basada en planillas Excel compartidas y recordatorios manuales por email— genera desperdicio económico ($71.000-$129.000 ARS/mes en viandas no reclamadas), ineficiencia administrativa (8-12 horas mensuales de trabajo manual) y fricción interpersonal.

Este proyecto construye una herramienta web simple para que los empleados configuren sus días de asistencia y confirmen viandas con un solo clic, mientras la administradora recibe un consolidado automático sin intervención manual.

## Cómo Ejecutar (Reproducibilidad)

Este proyecto **no requiere instalación de dependencias ni servidor web**.

### Opción A: Abrir directamente (recomendado)
```bash
git clone https://github.com/rjruiz-dev/viandas-stacklab.git
cd viandas-stacklab/prototype/
# Abrí index.html en cualquier navegador moderno (doble clic)
```

### Opción B: Servidor local (si preferís)
```bash
cd viandas-stacklab/prototype/
python -m http.server 8000
# Navegá a http://localhost:8000
```

### Tests unitarios
```bash
# Abrí tests.html en navegador. Resultados visibles inmediatamente.
# 10 pruebas cubren: almacenamiento, confirmaciones, cancelaciones,
# estados de semáforo, deadline, separación de datos por empleado.
```

**Requisitos:** Navegador moderno con localStorage habilitado. **Zero dependencias.**

## Enfoque Híbrido

El repositorio sigue un enfoque progresivo: documentación → prototipo → código fuente.

- **docs/**: Problem identification, informe final de validación y assets visuales.
- **prototype/**: Prototipos rápidos y pruebas de concepto (MVP Etapa 1).
- **src/**: Código fuente del producto (backend + frontend).
- **design/**: Wireframes, mockups y recursos de diseño UX/UI.
- **docker/**: Configuración de servicios para desarrollo local.

## Estructura del Repositorio

```
viandas-stacklab/
├── README.md                         ← Este archivo
├── docs/
│   ├── informe-final/
│   │   ├── informe.md                ← Informe completo de validación (7 secciones)
│   │   └── assets/                   ← Gráficos, dashboards, imágenes
│   └── problem-identification/
│       └── problem-id.md             ← Análisis detallado del problema
├── prototype/
│   └── README.md                     ← MVP — Etapa 1 (Esqueleto)
├── src/
│   ├── backend/
│   │   └── README.md                 ← API y lógica de negocio
│   └── frontend/
│       └── README.md                 ← Interfaz web responsive
├── design/
│   ├── wireframes/
│   │   └── README.md                 ← Bocetos de flujo de usuario
│   └── mockups/
│       └── README.md                 ← Diseños visuales de alta fidelidad
└── docker/
    └── docker-compose.yml            ← Servicios de desarrollo local
```

## Métricas Clave

| Indicador | Actual (pre-MVP) | Meta |
|-----------|-----------------|------|
| **NSM**: % viandas confirmadas correctamente /semana | ~70% | ≥ 95% |
| Viandas no reclamadas /semana | 3-5 | ≤ 1 |
| Tiempo admin /semana | 2-3 horas | ≤ 30 minutos |
| Costo desperdicio /mes | $71.000-$129.000 ARS | ≤ $25.000 ARS |

## Fases del Proyecto

1. **Problem Identification** ✅ — Completado (ver `docs/problem-identification/`)
2. **Informe Final de Validación** ✅ — Completado (ver `docs/informe-final/`)
3. **Etapa 1 — Esqueleto** 🔲 — Prototipo web con datos hardcodeados
4. **Etapa 2 — Datos Reales** 🔲 — MVP con base de datos y consolidado automático
5. **Etapa 3 — Recordatorios** 🔲 — Automatización de notificaciones y ajustes
6. **Etapa 4 — Validación Final** 🔲 — Decisión GO / NO-GO

## Tecnologías Previstas

- **Frontend**: HTML + JS vanilla (etapa 1), React o Vue (etapas posteriores)
- **Backend**: Node.js (Express) o Python (FastAPI)
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth (email/password, magic link)
- **Notificaciones**: Email (Resend) + Slack API
- **Analítica**: PostHog (eventos, funnels, dashboards)
- **Infraestructura**: Docker Compose (desarrollo), Vercel/Railway (producción)

## North Star Metric

**"% de viandas confirmadas correctamente por semana"** — meta ≥ 95%.

Mide cuántos empleados que van a la oficina confirman su vianda antes del deadline sin necesidad de intervención manual de la administradora. Refleja directamente el valor del producto: eliminar olvidos y fricción.

---

*Proyecto parte del proceso de validación de producto para StackLab.*
