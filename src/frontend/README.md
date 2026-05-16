# Frontend — Viandas StackLab

> Interfaz web responsive del Sistema de Viandas.

## Estado

🔲 **Pendiente de implementación** (previsto para Etapa 2 — Datos Reales)

## Pantallas

1. **Configuración de días de asistencia**: selector semanal de días de oficina vs. remoto
2. **Menú semanal**: visualización del menú por día con opciones de plato
3. **Confirmación de viandas**: 1 clic por día, feedback visual inmediato
4. **Dashboard de administrador**: consolidado diario, estadísticas, lista de pendientes
5. **Login / Registro**: autenticación simple con email

## Principios de Diseño

- **Web responsive first**: optimizado para uso desde celular y laptop
- **Mobile-first CSS**: la mayoría de los empleados confirmarán desde el teléfono
- **Sin app nativa**: no hay budget ni necesidad para iOS/Android en el MVP
- **Accesibilidad**: contraste suficiente, navegación por teclado, etiquetas ARIA
- **Carga rápida**: sin build steps pesados, sin frameworks innecesarios para Etapa 1

## Stack Previsto

| Componente | Tecnología | Justificación |
|-----------|-----------|---------------|
| Framework | React 19 + Vite | Componentes reutilizables, ecosistema amplio |
| Estilos | Tailwind CSS | Rápido de prototipar, responsive utilities built-in |
| Estado | Zustand o React Context | Simple, sin boilerplate de Redux |
| HTTP Client | fetch o ky | Nativo, sin dependencia de Axios |
| Auth UI | Supabase Auth UI | Componentes prebuilt para login/registro |
| Forms | React Hook Form + Zod | Validación declarativa, type-safe |

## Estructura Prevista

```
frontend/
├── src/
│   ├── components/       # Componentes reutilizables (Button, Card, Modal)
│   ├── pages/            # Pantallas completas (Home, Menu, Admin)
│   ├── hooks/            # Hooks personalizados (useWeekMenu, useAuth)
│   ├── lib/              # Cliente Supabase, utilidades
│   ├── styles/           # Tailwind config, global CSS
│   └── App.tsx           # Entry point + router
├── public/
├── index.html
├── tailwind.config.js
└── package.json
```
