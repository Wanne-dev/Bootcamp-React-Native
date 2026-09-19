# 01 - FlatList optimizado

## Objetivos de aprendizaje

- Aplicar las props de rendimiento de FlatList.

## 1. FlatList vs map

FlatList ya virtualiza la lista: solo renderiza lo visible. Usar `.map` dentro de un ScrollView renderiza todo y degrada el rendimiento con miles de productos.

## 2. Props relevantes

| Prop | Qué hace |
|---|---|
| `removeClippedSubviews` | Recorta vistas fuera de pantalla (iOS) |
| `initialNumToRender` | Cuantos elementos renderiza al inicio |
| `maxToRenderPerBatch` | Cuantos renderiza por lote |
| `windowSize` | Tamanio de la ventana de renderizado |
| `getItemLayout` | Altura fija de cada elemento |
| `keyExtractor` | Clave estable por elemento |

## 3. Configuración de referencia

```jsx
<FlatList
  data={productos}
  keyExtractor={(item) => item.sku}
  renderItem={renderTarjeta}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews
  getItemLayout={(data, index) => ({
    length: 88,
    offset: 88 * index,
    index,
  })}
/>
```

Nota: `getItemLayout` solo si todas las tarjetas miden lo mismo.

## Referencias

Ver `4-recursos/webgrafia/`.
