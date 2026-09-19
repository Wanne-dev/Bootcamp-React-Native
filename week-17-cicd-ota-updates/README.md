# Semana 17: CI/CD y OTA Updates

- Ruta: `bootcamp/week-17-cicd-ota-updates/`
- Dominio de práctica: Papelería Digital (automatización del pipeline)

## Descripción

Se automatiza el repositorio: un pipeline de GitHub Actions que corre las pruebas en cada cambio, y EAS Update para publicar cambios de JavaScript sin volver a pasar por las tiendas.

## Objetivos

- Crear un workflow de integración continua.
- Ejecutar tests automáticamente en cada push.
- Publicar actualizaciones OTA con EAS Update.

## Entregables

1. Workflow de GitHub Actions funcionando.
2. Actualización OTA publicada y verificada.

## Contenido de la semana

| Carpeta | Contenido |
|---|---|
| `1-teoria/` | GitHub Actions y EAS Update |
| `2-practicas/` | Workflow CI y actualización OTA |
| `3-proyecto/` | Pipeline del repositorio |
| `4-recursos/` | Documentación oficial |
| `5-glosario/` | Términos clave |

## Checklist de entrega

- [ ] El workflow corre los tests en cada push.
- [ ] El pipeline falla si los tests fallan.
- [ ] Una actualización OTA se descarga en la app.
- [ ] El flujo está documentado en el repositorio.

## Evaluación

Resumen en `rubrica-evaluacion.md`:

| Criterio | Puntos |
|---|---|
| Pipeline CI | 40 |
| EAS Update | 30 |
| Flujo documentado | 30 |
| **Total** | **100** |

## Cierre del programa

Esta es la última semana del track técnico. La semana 18 (proyecto final) integra todo el recorrido.
