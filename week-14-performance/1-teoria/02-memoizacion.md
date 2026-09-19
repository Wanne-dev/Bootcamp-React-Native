# 02 - Memoización

## Objetivos de aprendizaje

- Evitar renderizados innecesarios en la lista.

## 1. React.memo

```jsx
import { memo } from 'react';

const TarjetaProducto = memo(function TarjetaProducto({ producto }) {
  return <View>...</View>;
});
```

Con `memo`, la tarjeta solo se re-renderiza si cambia su prop `producto`.

## 2. useCallback

```jsx
const renderTarjeta = useCallback(
  ({ item }) => <TarjetaProducto producto={item} />,
  []
);

<FlatList renderItem={renderTarjeta} ... />
```

Un callback estable evita recrear las tarjetas en cada render del padre.

## 3. useMemo

```jsx
const productosFiltrados = useMemo(
  () => filtrarProductos(productos, busqueda, categoria),
  [productos, busqueda, categoria]
);
```

## 4. Regla

- Memoizar la tarjeta y los callbacks estables.
- No memoizar todo indiscriminadamente: medir primero.

## Referencias

Ver `4-recursos/webgrafia/`.
