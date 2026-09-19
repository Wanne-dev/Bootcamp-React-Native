# Práctica 02 - Test del carrito

## Objetivo

Cubrir las acciones del store del carrito con pruebas.

## Paso a paso

1. Crear `src/stores/__tests__/carritoStore.test.js`.

2. Resetear el estado en `beforeEach`.

3. Probar los cuatro comportamientos:

- Agregar producto nuevo.
- Agregar producto repetido (suma cantidad).
- Eliminar.
- Limpiar.

4. Probar `calcularTotal` como función pura.

## Criterios de cumplimiento

- [ ] Hay un test por acción del carrito.
- [ ] Los tests no dependen de AsyncStorage real.
- [ ] El total se prueba con la función pura.
