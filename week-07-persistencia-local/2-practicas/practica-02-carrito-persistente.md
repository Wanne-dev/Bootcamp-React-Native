# Práctica 02 - Carrito persistente

## Objetivo

Conectar el carrito de Zustand con AsyncStorage y verificar la persistencia.

## Paso a paso

1. Confirmar que el store del carrito usa `persist` con `AsyncStorage` (semana 04).

2. Probar el flujo completo:

- Agregar productos al carrito.
- Cerrar la app desde Expo Go.
- Reabrir y verificar que el carrito sigue.

3. Agregar un botón "Vaciar carrito" que también elimine la clave:

```js
const limpiar = useCarritoStore((state) => state.limpiar);
```

El middleware persist se encarga de la escritura automática.

## Criterios de cumplimiento

- [ ] El carrito persiste al reabrir la app.
- [ ] Limpiar deja el almacenamiento vacío.
- [ ] No se guardan datos derivados como el total.
