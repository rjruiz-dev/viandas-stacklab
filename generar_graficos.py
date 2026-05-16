import matplotlib.pyplot as plt
import numpy as np
import os

# Configuración de estilo profesional
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams['font.size'] = 11
plt.rcParams['figure.figsize'] = (10, 6)

# Crear directorio si no existe
output_dir = "/home/rjr/proyectos-vibecoding/proyectos/viandas-stacklab/docs/informe-final/assets/graficos"
os.makedirs(output_dir, exist_ok=True)

# Colores corporativos StackLab
COLOR_PRIMARIO = '#2563EB'  # Azul
COLOR_SECUNDARIO = '#10B981'  # Verde éxito
COLOR_ALERTA = '#EF4444'  # Rojo problema
COLOR_NEUTRO = '#6B7280'  # Gris

# ==================== GRÁFICO 1: NSM - Tasa de Confirmación Semanal ====================

fig, ax = plt.subplots(figsize=(10, 6))

semanas = ['S16', 'S17', 'S18', 'S19', 'S20', 'S21', 'S22', 'S23']
# Baseline (pre-MVP) + Proyección con MVP
nsm_actual = [72, 68, 78, 82, 0, 0, 0, 0]  # S16-S19: baseline, S20+: placeholder
nsm_proyectado = [72, 68, 78, 82, 88, 92, 95, 95]
meta_nsm = [95] * len(semanas)

# Separar baseline de proyección
idx_mvp = 4  # S20 inicia MVP

ax.plot(semanas[:idx_mvp], nsm_actual[:idx_mvp], 'o-', color=COLOR_ALERTA, 
        linewidth=2.5, markersize=8, label='Baseline (Planilla Excel)')
ax.plot(semanas[idx_mvp-1:], nsm_proyectado[idx_mvp-1:], 'o-', color=COLOR_PRIMARIO, 
        linewidth=2.5, markersize=8, label='Proyección con MVP', linestyle='--')
ax.axhline(y=95, color=COLOR_SECUNDARIO, linestyle=':', linewidth=2, label='Meta NSM (≥95%)')

# Zona de MVP
ax.axvspan(idx_mvp-1.5, len(semanas)-0.5, alpha=0.1, color=COLOR_PRIMARIO, label='Período MVP')

ax.set_xlabel('Semana', fontsize=12, fontweight='bold')
ax.set_ylabel('Tasa de Confirmación (%)', fontsize=12, fontweight='bold')
ax.set_title('North Star Metric: % Viandas Confirmadas Correctamente\nStackLab - Período de Validación', 
             fontsize=14, fontweight='bold', pad=20)
ax.set_ylim(60, 100)
ax.legend(loc='lower right', framealpha=0.9)
ax.grid(True, alpha=0.3)

# Anotaciones
ax.annotate('Inicio MVP\n(Esqueleto)', xy=(idx_mvp-1, 88), xytext=(idx_mvp-0.5, 75),
            arrowprops=dict(arrowstyle='->', color=COLOR_PRIMARIO),
            fontsize=10, color=COLOR_PRIMARIO, fontweight='bold')

plt.tight_layout()
plt.savefig(f'{output_dir}/grafico-1-nsm-evolucion.png', dpi=150, bbox_inches='tight')
plt.close()

# ==================== GRÁFICO 2: Pérdidas Mensuales ====================

fig, ax = plt.subplots(figsize=(10, 6))

meses = ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago']
# Valores en ARS (pesos argentinos)
perdidas_actual = [129000, 108000, 118000, 99000, 0, 0]  # Pre-MVP
perdidas_proyectado = [129000, 108000, 118000, 99000, 35000, 15000]
meta_perdidas = [15000] * len(meses)

idx_mvp_m = 4  # Jul inicia MVP

x = np.arange(len(meses))
width = 0.35

bars1 = ax.bar(x[:idx_mvp_m], perdidas_actual[:idx_mvp_m], width, 
               label='Baseline (Excel)', color=COLOR_ALERTA, alpha=0.8)
bars2 = ax.bar(x[idx_mvp_m:], perdidas_proyectado[idx_mvp_m:], width,
               label='Con MVP', color=COLOR_PRIMARIO, alpha=0.8)

ax.axhline(y=15000, color=COLOR_SECUNDARIO, linestyle=':', linewidth=2, label='Meta (≤$15.000 ARS/mes)')

ax.set_xlabel('Mes', fontsize=12, fontweight='bold')
ax.set_ylabel('Pérdida por Viandas Desperdiciadas (ARS)', fontsize=12, fontweight='bold')
ax.set_title('Reducción de Pérdidas Económicas\nViandas No Reclamadas - StackLab', 
             fontsize=14, fontweight='bold', pad=20)
ax.set_xticks(x)
ax.set_xticklabels(meses)
ax.legend(loc='upper right', framealpha=0.9)
ax.grid(True, alpha=0.3, axis='y')

# Anotación de ahorro
ahorro = 99000 - 15000
ax.annotate(f'Ahorro proyectado:\n${ahorro:,.0f} ARS/mes'.replace(',', '.'), 
            xy=(4.5, 50000), xytext=(4.5, 80000),
            arrowprops=dict(arrowstyle='->', color=COLOR_SECUNDARIO),
            fontsize=11, color=COLOR_SECUNDARIO, fontweight='bold',
            ha='center')

plt.tight_layout()
plt.savefig(f'{output_dir}/grafico-2-perdidas-mensuales.png', dpi=150, bbox_inches='tight')
plt.close()

# ==================== GRÁFICO 3: Tiempo Administrativo Semanal ====================

fig, ax = plt.subplots(figsize=(10, 6))

semanas_t = ['S16', 'S17', 'S18', 'S19', 'S20', 'S21', 'S22', 'S23']
tiempo_actual = [2.8, 3.0, 2.5, 2.2, 0, 0, 0, 0]  # Horas/semana
tiempo_proyectado = [2.8, 3.0, 2.5, 2.2, 1.5, 0.8, 0.5, 0.5]
meta_tiempo = [0.5] * len(semanas_t)

idx_mvp_t = 4

ax.plot(semanas_t[:idx_mvp_t], tiempo_actual[:idx_mvp_t], 'o-', color=COLOR_ALERTA, 
        linewidth=2.5, markersize=8, label='Baseline (Gestión Manual)')
ax.plot(semanas_t[idx_mvp_t-1:], tiempo_proyectado[idx_mvp_t-1:], 'o-', color=COLOR_PRIMARIO, 
        linewidth=2.5, markersize=8, label='Proyección con MVP', linestyle='--')
ax.axhline(y=0.5, color=COLOR_SECUNDARIO, linestyle=':', linewidth=2, label='Meta (≤30 min/semana)')

ax.fill_between(range(idx_mvp_t-1, len(semanas_t)), 
                tiempo_proyectado[idx_mvp_t-1:], meta_tiempo[idx_mvp_t-1:], 
                alpha=0.2, color=COLOR_SECUNDARIO)

ax.set_xlabel('Semana', fontsize=12, fontweight='bold')
ax.set_ylabel('Horas de Gestión Administrativa / Semana', fontsize=12, fontweight='bold')
ax.set_title('Eficiencia Administrativa: Tiempo de Gestión de Viandas\nLucía Gómez - StackLab', 
             fontsize=14, fontweight='bold', pad=20)
ax.set_ylim(0, 3.5)
ax.legend(loc='upper right', framealpha=0.9)
ax.grid(True, alpha=0.3)

# Anotación
ax.annotate('Ahorro: 2+ horas\nsemanales', xy=(6, 0.5), xytext=(5.5, 1.8),
            arrowprops=dict(arrowstyle='->', color=COLOR_SECUNDARIO),
            fontsize=11, color=COLOR_SECUNDARIO, fontweight='bold')

plt.tight_layout()
plt.savefig(f'{output_dir}/grafico-3-tiempo-admin.png', dpi=150, bbox_inches='tight')
plt.close()

# ==================== GRÁFICO 4: Dashboard Compacto (Todo en uno) ====================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('Dashboard de Tracción - Viandas StackLab\nPeríodo de Validación MVP', 
             fontsize=16, fontweight='bold', y=0.98)

# Subplot 1: NSM
ax1 = axes[0, 0]
ax1.plot(semanas, nsm_proyectado, 'o-', color=COLOR_PRIMARIO, linewidth=2.5, markersize=6)
ax1.axhline(y=95, color=COLOR_SECUNDARIO, linestyle=':', alpha=0.7)
ax1.set_title('NSM: % Confirmación', fontweight='bold')
ax1.set_ylim(60, 100)
ax1.grid(True, alpha=0.3)

# Subplot 2: Viandas no reclamadas
ax2 = axes[0, 1]
semanas_v = ['S16', 'S17', 'S18', 'S19', 'S20', 'S21', 'S22', 'S23']
viandas_nr = [5, 4, 3, 3, 2, 1, 1, 0]
ax2.bar(semanas_v, viandas_nr, color=[COLOR_ALERTA if v > 1 else COLOR_SECUNDARIO for v in viandas_nr], alpha=0.8)
ax2.set_title('Viandas No Reclamadas / Semana', fontweight='bold')
ax2.set_ylabel('Unidades')
ax2.grid(True, alpha=0.3, axis='y')

# Subplot 3: Tiempo admin
ax3 = axes[1, 0]
ax3.plot(semanas_t, tiempo_proyectado, 'o-', color=COLOR_PRIMARIO, linewidth=2.5, markersize=6)
ax3.axhline(y=0.5, color=COLOR_SECUNDARIO, linestyle=':', alpha=0.7)
ax3.set_title('Tiempo Admin (horas/semana)', fontweight='bold')
ax3.set_ylim(0, 3.5)
ax3.grid(True, alpha=0.3)

# Subplot 4: Satisfacción empleados
ax4 = axes[1, 1]
empleados = ['Martín', 'Diego', 'Sofía', 'Otros']
satisfaccion = [4.5, 4.0, 4.8, 3.9]
colors = [COLOR_PRIMARIO, COLOR_PRIMARIO, COLOR_SECUNDARIO, COLOR_NEUTRO]
bars = ax4.barh(empleados, satisfaccion, color=colors, alpha=0.8)
ax4.set_xlim(0, 5)
ax4.set_title('Satisfacción Empleados (1-5)', fontweight='bold')
ax4.axvline(x=4.0, color=COLOR_SECUNDARIO, linestyle=':', alpha=0.7, label='Meta ≥4.0')
ax4.grid(True, alpha=0.3, axis='x')

# Agregar valores en las barras
for i, (bar, val) in enumerate(zip(bars, satisfaccion)):
    ax4.text(val + 0.1, i, f'{val}', va='center', fontweight='bold')

plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.savefig(f'{output_dir}/grafico-4-dashboard-compacto.png', dpi=150, bbox_inches='tight')
plt.close()

print(f"✅ 4 gráficos generados exitosamente en: {output_dir}")
print(f"   - grafico-1-nsm-evolucion.png")
print(f"   - grafico-2-perdidas-mensuales.png")
print(f"   - grafico-3-tiempo-admin.png")
print(f"   - grafico-4-dashboard-compacto.png")
