# Práctica 02 - Swipe para eliminar del carrito

## Objetivo

Implementar el gesto de deslizar en cada línea del carrito para eliminarla.

## Paso a paso

1. Instalar Gesture Handler y envolver la app en `GestureHandlerRootView`.

2. Crear `LineaCarrito` con `traslacionX` y el fondo "Eliminar".

3. Definir el gesto `Pan` con umbral de eliminación.

4. Al cruzar el umbral, llamar a `eliminar(sku)` del store.

5. Probar que el scroll vertical del carrito siga funcionando.

## Criterios de cumplimiento

- [ ] Deslizar a la izquierda elimina el producto.
- [ ] Un gesto corto restaura la posición.
- [ ] El fondo "Eliminar" se ve al deslizar.
- [ ] El scroll vertical no se bloquea.
