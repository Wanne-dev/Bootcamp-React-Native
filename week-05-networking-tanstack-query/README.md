# Semana 05: Networking con TanStack Query

- Ruta: `bootcamp/week-05-networking-tanstack-query/`
- Dominio de práctica: Papelería Digital (catálogo y stock desde una API)

## Descripción

El catálogo deja de venir de un archivo local: se carga desde una API con TanStack Query, con estados de carga y error, y se actualiza el stock con una mutación.

## Objetivos

- Consumir una API del catálogo con `useQuery`.
- Manejar estados de carga, error y datos.
- Actualizar stock o crear pedidos con `useMutation`.
- Invalidar la cache para refrescar el catálogo.

## Entregables

1. Catálogo cargado desde una API y renderizado con estados correctos.
2. Mutación que actualiza el stock de un producto y refresca la lista.

## Contenido de la semana

| Carpeta | Contenido |
|---|---|
| `1-teoria/` | Cliente API, useQuery y useMutation |
| `2-practicas/` | Query del catálogo y mutación de stock |
| `3-proyecto/` | Catálogo desde API integrado |
| `4-recursos/` | Documentación de TanStack Query |
| `5-glosario/` | Términos clave |

## Checklist de entrega

- [ ] El catálogo se obtiene con `useQuery` desde la API.
- [ ] La pantalla muestra carga mientras consulta y error si falla.
- [ ] La mutación actualiza el stock y refresca la lista.
- [ ] La configuración del cliente está centralizada.

## Evaluación

Resumen en `rubrica-evaluacion.md`:

| Criterio | Puntos |
|---|---|
| Query del catálogo | 30 |
| Manejo de carga y error | 30 |
| Mutación de stock o pedido | 20 |
| Invalidación de cache | 20 |
| **Total** | **100** |

## Siguiente semana

`week-06-formularios-validacion/`: formulario de pedido con React Hook Form y Zod.
