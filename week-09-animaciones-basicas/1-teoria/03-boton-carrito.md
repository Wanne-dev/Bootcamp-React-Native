# 03 - Animación del botón de carrito

## Objetivos de aprendizaje

- Dar feedback al agregar un producto.

## 1. Spring para el botón

```jsx
function BotonAgregar({ onPress }) {
  const escala = useRef(new Animated.Value(1)).current;

  const presionar = () => {
    Animated.sequence([
      Animated.timing(escala, { toValue: 0.9, duration: 80, useNativeDriver: true }),
      Animated.spring(escala, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();

    onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale: escala }] }}>
      <Pressable onPress={presionar} style={styles.boton}>
        <Text style={styles.texto}>Agregar al carrito</Text>
      </Pressable>
    </Animated.View>
  );
}
```

## 2. Secuencias y combinaciones

- `Animated.sequence`: animaciones una tras otra.
- `Animated.parallel`: animaciones a la vez.
- `Animated.spring`: rebote natural, ideal para botones.

## 3. Coherencia con la papelería

El acento naranja (`#EA580C`) es el color del CTA; la animación refuerza la acción principal sin agregar ruido.

## Referencias

Ver `4-recursos/webgrafia/`.
