# 02 - Entrada con fade y scale

## Objetivos de aprendizaje

- Animar la entrada de las tarjetas del catálogo.

## 1. Componente con animación de entrada

```jsx
function TarjetaAnimada({ producto }) {
  const opacidad = useRef(new Animated.Value(0)).current;
  const escala = opacidad.interpolate({
    inputRange: [0, 1],
    outputRange: [0.95, 1],
  });

  useEffect(() => {
    Animated.timing(opacidad, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: opacidad, transform: [{ scale: escala }] }}>
      <TarjetaProducto producto={producto} />
    </Animated.View>
  );
}
```

## 2. Uso en FlatList

```jsx
<FlatList
  data={productos}
  keyExtractor={(item) => item.sku}
  renderItem={({ item }) => <TarjetaAnimada producto={item} />}
/>
```

## 3. Regla

- Entradas cortas (150 a 300 ms).
- No animar todo: elegir uno o dos momentos por pantalla.

## Referencias

Ver `4-recursos/webgrafia/`.
