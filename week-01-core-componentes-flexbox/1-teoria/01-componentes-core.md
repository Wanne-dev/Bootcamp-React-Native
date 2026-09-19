# 01 - Componentes core de React Native

## Objetivos de aprendizaje

- Conocer los componentes base: `View`, `Text`, `Image`, `ScrollView` y `FlatList`.
- Saber cuál usar en cada parte de la pantalla del catálogo.

## 1. De React web a React Native

| Concepto | React web | React Native |
|---|---|---|
| Contenedor | `<div>` | `<View>` |
| Texto | `<p>`, `<span>`, `<h1>` | `<Text>` |
| Imagen | `<img>` | `<Image>` |
| Lista | `<ul>` + scroll | `<ScrollView>` / `<FlatList>` |
| Estilos | CSS | `StyleSheet` |
| Clic | `onClick` | `onPress` |

Regla clave: en React Native **todo texto debe ir dentro de `<Text>`**. Un texto suelto dentro de un `<View>` produce un error de renderizado.

## 2. View

`View` agrupa otros componentes y aplica estilos de caja. Es el contenedor de toda la pantalla.

```jsx
<View style={styles.encabezado}>
  <Text style={styles.titulo}>Papeleria Digital</Text>
</View>
```

## 3. Text

`Text` muestra texto y admite estilo de fuente, tamaño, color y peso.

```jsx
<Text style={styles.nombre}>Cuaderno cuadriculado 100 hojas</Text>
<Text style={styles.precio}>$ 8.500</Text>
```

## 4. Image

`Image` muestra imágenes locales o remotas. Siempre necesita dimensiones (o un contenedor con tamaño definido).

```jsx
<Image
  source={{ uri: 'https://ejemplo.com/cuaderno.jpg' }}
  style={styles.imagen}
/>
```

Imagen local del proyecto:

```jsx
<Image source={require('./assets/cuaderno.png')} style={styles.imagen} />
```

En los ejercicios de esta semana se usa un color de fondo en la imagen como marcador de posición, hasta tener las fotos reales de los productos.

## 5. ScrollView

`ScrollView` permite desplazar contenido largo. Se usa en pantallas como el Detalle de Producto.

```jsx
<ScrollView>
  <Text>Descripcion larga del producto...</Text>
</ScrollView>
```

Renderiza todo su contenido de una vez, por lo que no conviene para listas largas.

## 6. FlatList

`FlatList` es la lista optimizada: renderiza solo los elementos visibles. Es la opción para el catálogo de la papelería.

```jsx
<FlatList
  data={productos}
  keyExtractor={(item) => item.sku}
  renderItem={({ item }) => <TarjetaProducto producto={item} />}
/>
```

- `data`: arreglo de productos.
- `keyExtractor`: clave única por elemento (el SKU).
- `renderItem`: cómo se dibuja cada elemento.

## 7. Resumen de uso en la papelería

| Necesidad | Componente |
|---|---|
| Agrupar secciones de la pantalla | `View` |
| Nombre, descripción, precio | `Text` |
| Foto del producto | `Image` |
| Detalle con contenido largo | `ScrollView` |
| Lista de 20 productos | `FlatList` |

## Referencias

Ver `4-recursos/webgrafia/`.
