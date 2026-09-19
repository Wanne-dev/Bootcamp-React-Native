# 01 - Fundamentos de Reanimated

## Objetivos de aprendizaje

- Configurar Reanimated y crear animaciones fluidas.

## 1. Instalación

```bash
npx expo install react-native-reanimated react-native-worklets
```

Agregar el plugin a `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-worklets/plugin'],
  };
};
```

## 2. Valores compartidos

```jsx
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const opacidad = useSharedValue(0);

const estilo = useAnimatedStyle(() => ({
  opacity: opacidad.value,
}));

// animar
opacidad.value = withTiming(1, { duration: 300 });
```

## 3. Reanimated vs Animated

Reanimated corre en el hilo de UI y no pasa por el puente JS: animaciones y gestos fluidos. `useAnimatedStyle` declara estilos que dependen de valores compartidos.

## Referencias

Ver `4-recursos/webgrafia/`.
