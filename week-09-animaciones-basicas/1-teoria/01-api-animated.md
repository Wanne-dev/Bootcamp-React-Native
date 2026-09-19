# 01 - La API Animated

## Objetivos de aprendizaje

- Crear valores animados y reproducir animaciones.

## 1. Animated.Value

Un valor animado guarda un número que cambia en el tiempo:

```js
import { useRef } from 'react';
import { Animated } from 'react-native';

const opacidad = useRef(new Animated.Value(0)).current;
```

## 2. Animated.timing

```js
Animated.timing(opacidad, {
  toValue: 1,
  duration: 250,
  useNativeDriver: true,
}).start();
```

## 3. Interpolacion

Mapear un valor a una propiedad visual:

```js
const escala = opacidad.interpolate({
  inputRange: [0, 1],
  outputRange: [0.9, 1],
});
```

## 4. Aplicar al componente

```jsx
<Animated.View style={{ opacity: opacidad, transform: [{ scale: escala }] }}>
  <TarjetaProducto producto={producto} />
</Animated.View>
```

## 5. Driver nativo

`useNativeDriver: true` ejecuta la animación en el hilo nativo (fluido). Aplica a `opacity` y `transform`. No aplica a `backgroundColor` o `height`/`width`.

## Referencias

Ver `4-recursos/webgrafia/`.
