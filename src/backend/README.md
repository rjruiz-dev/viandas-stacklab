# Backend — Viandas StackLab

> API y lógica de negocio del Sistema de Viandas.

## Estado

🔲 **Pendiente de implementación** (previsto para Etapa 2 — Datos Reales)

## Responsabilidades

- API REST para gestión de menús semanales, confirmaciones de viandas y consolidados
- Autenticación de usuarios (empleados y administrador)
- Lógica de deadlines automáticos configurables
- Generación de consolidados diarios para el administrador
- Envío de recordatorios automáticos (email / Slack)
- Endpoints para estadísticas y dashboard del administrador

## Stack Previsto

| Componente | Tecnología | Justificación |
|-----------|-----------|---------------|
| Runtime | Node.js 20+ | Ecosistema amplio, ORMs maduros |
| Framework | Express.js | Simple, sin overhead para un MVP |
| ORM | Prisma | Type-safe, migraciones declarativas |
| Base de Datos | Supabase (PostgreSQL) | Hosted, RLS, auth integrada |
| Auth | Supabase Auth | Email/password + magic links |
| Queue (recordatorios) | BullMQ + Redis | Jobs programados para deadlines y recordatorios |
| API Docs | Swagger/OpenAPI | Documentación automática de endpoints |

## Estructura Prevista

```
backend/
├── src/
│   ├── routes/           # Endpoints REST
│   │   ├── auth.ts       # Login, registro, sesión
│   │   ├── menus.ts      # CRUD de menú semanal (admin)
│   │   ├── orders.ts     # Confirmación de viandas (empleado)
│   │   ├── admin.ts      # Consolidado, estadísticas
│   │   └── webhooks.ts   # Slack commands, health check
│   ├── services/         # Lógica de negocio
│   │   ├── deadline.ts   # Control de deadlines
│   │   ├── reminders.ts  # Envío de recordatorios
│   │   └── reports.ts    # Generación de consolidados
│   ├── middleware/        # Auth, rate limiting, logging
│   ├── jobs/             # BullMQ workers (recordatorios)
│   ├── db/               # Prisma schema + migraciones
│   └── config/           # Variables de entorno, constants
├── prisma/
│   └── schema.prisma     # Modelo de datos
├── tests/                # Unit + integration tests
└── package.json
```
