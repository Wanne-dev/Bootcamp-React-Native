# 02 - Gestos con Gesture Handler

## Objetivos de aprendizaje

- Detectar y responder a gestos de pan.

## 1. Instalación

```bash
npx expo install react-native-gesture-handler
```

Envolver la app en `GestureHandlerRootView`:

```jsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>...</NavigationContainer>
    </GestureHandlerRootView>
  );
}
```

## 2. Gesto de pan

```jsx
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const pan = Gesture.Pan()
  .onUpdate((e) => {
    traslacionX.value = e.translationX;
  })
  .onEnd((e) => {
    traslacionX.value = withTiming(0);
  });

<GestureDetector gesture={pan}>
  <Animated.View style={estilo}>
    <Text>Desliza para borrar</Text>
  </Animated.View>
</GestureDetector>
```

## 3. Coordinar con el scroll

Para listas, un pan horizontal debe coexistir con el scroll vertical. Se limita el gesto a un eje con `activeOffsetX` y se deja el vertical libre.

## Referencias

Ver `4-recursos/webgrafia/`.
