# 03 - Swipe para quitar del carrito

## Objetivos de aprendizaje

- Implementar el deslizado horizontal para eliminar una línea del carrito.

## 1. Estado del swipe

```jsx
const traslacionX = useSharedValue(0);
const ALTO = 90;

const estilo = useAnimatedStyle(() => ({
  transform: [{ translateX: traslacionX.value }],
}));
```

## 2. Gesto con umbral

```jsx
const pan = Gesture.Pan()
  .activeOffsetX([-10, 10])
  .onUpdate((e) => {
    traslacionX.value = e.translationX;
  })
  .onEnd((e) => {
    if (e.translationX < -ALTO) {
      // fuera: se elimina
      traslacionX.value = withTiming(-500, { duration: 200 });
      eliminar(sku);
    } else {
      // se restaura
      traslacionX.value = withTiming(0);
    }
  });
```

## 3. Fondo de acción

Detrás de la tarjeta, un fondo rojo (`#DC2626`) con el texto "Eliminar" aparece al deslizar.

## 4. Regla del carrito

Eliminar por swipe pide confirmar en una app real. En el MVP del bootcamp se elimina directo; la semana de patrones puede anadir confirmación.

## Referencias

Ver `4-recursos/webgrafia/`.
