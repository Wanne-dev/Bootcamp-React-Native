# Semana 04: Estado Global con Zustand

- Ruta: `bootcamp/week-04-estado-global-zustand/`
- Dominio de práctica: Papelería Digital (carrito de compras)

## Descripción

El carrito de compras deja de ser una pantalla temporal: se implementa un almacen global con Zustand, compartido entre el detalle de producto y la pestana de Carrito.

## Objetivos

- Crear un store de Zustand para el carrito.
- Implementar acciones para agregar, quitar, cambiar cantidad y limpiar.
- Reflejar el estado del carrito en la pestana de Carrito en tiempo real.
- Persistir el carrito entre sesiones.

## Entregables

1. `carritoStore` con productos, cantidades y acciones.
2. Carrito visible desde la pestana, actualizado desde el detalle de producto.

## Contenido de la semana

| Carpeta | Contenido |
|---|---|
| `1-teoria/` | Fundamentos de Zustand, persistencia y selectores |
| `2-practicas/` | Store básico y persistencia del carrito |
| `3-proyecto/` | Carrito global integrado en la app |
| `4-recursos/` | Documentación de Zustand |
| `5-glosario/` | Términos clave |

## Checklist de entrega

- [ ] Agregar un producto desde el detalle actualiza el carrito.
- [ ] El total se calcula desde el store.
- [ ] Se puede quitar un producto y limpiar el carrito.
- [ ] El carrito persiste al cerrar y abrir la app.

## Evaluación

Resumen en `rubrica-evaluacion.md`:

| Criterio | Puntos |
|---|---|
| Store definido correctamente | 30 |
| Acciones agregar / eliminar / limpiar | 30 |
| Carrito reflejado en la pestana | 20 |
| Persistencia del store | 20 |
| **Total** | **100** |

## Siguiente semana

`week-05-networking-tanstack-query/`: el catálogo pasa a cargarse desde una API.
