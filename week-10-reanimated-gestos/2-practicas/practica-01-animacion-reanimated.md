# Práctica 01 - Animación con Reanimated

## Objetivo

Configurar Reanimated y animar una tarjeta con `useSharedValue` y `withTiming`.

## Paso a paso

1. Instalar Reanimated y agregar el plugin de worklets.

2. Crear una tarjeta que aparezca con fade cuando se monta:

```jsx
const opacidad = useSharedValue(0);

useEffect(() => {
  opacidad.value = withTiming(1, { duration: 300 });
}, []);

const estilo = useAnimatedStyle(() => ({ opacity: opacidad.value }));
```

3. Verificar en Expo Go que la animación es fluida.

## Criterios de cumplimiento

- [ ] El plugin está en `babel.config.js`.
- [ ] La tarjeta anima con Reanimated.
- [ ] No hay mezcla con la API Animated en la misma pantalla.
