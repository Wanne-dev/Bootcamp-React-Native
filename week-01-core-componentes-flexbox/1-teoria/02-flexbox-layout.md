# 02 - Layout con Flexbox

## Objetivos de aprendizaje

- Distribuir elementos con `flexDirection`, `justifyContent`, `alignItems` y `flex`.
- Construir la tarjeta de producto con contenedores anidados.

## 1. Direction por defecto

En React Native todo `View` es un contenedor flex. El eje principal por defecto es vertical (`flexDirection: 'column'`).

## 2. Propiedades principales

| Propiedad | Que controla | Valores comunes |
|---|---|---|
| `flexDirection` | Dirección del eje principal | `column`, `row` |
| `justifyContent` | Distribución en el eje principal | `flex-start`, `center`, `space-between` |
| `alignItems` | Alineacion en el eje secundario | `flex-start`, `center`, `stretch` |
| `flex` | Cuanto crece un hijo para ocupar espacio | número (por ejemplo `1`) |

## 3. Tarjeta de producto horizontal

Imagen a la izquierda, información a la derecha:

```jsx
<View style={styles.tarjeta}>
  <Image source={{ uri: producto.imagen }} style={styles.imagen} />
  <View style={styles.info}>
    <Text style={styles.nombre}>{producto.nombre}</Text>
    <Text style={styles.descripcion}>{producto.descripcion}</Text>
    <Text style={styles.precio}>$ {producto.precio}</Text>
  </View>
</View>
```

```jsx
tarjeta: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 12,
},
info: {
  marginLeft: 12,
  flex: 1,          // la informacion ocupa el espacio restante
},
```

## 4. Encabezado con título y acción

Título a la izquierda, carrito a la derecha:

```jsx
encabezado: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 12,
},
```

## 5. Reglas prácticas

- Anidar `View` para agrupar: no resolver todo con márgenes.
- Preferir `justifyContent` y `alignItems` antes que márgenes mágicos.
- Usar `flex: 1` para que un hijo ocupe el espacio restante.
- Mantener un margen lateral uniforme en toda la pantalla.

## 6. Verificacion

- ¿La tarjeta alinea imagen y texto con `flexDirection: 'row'`?
- ¿La pantalla completa se distribuye con flex y no con `position: 'absolute'`?
- ¿Los espaciados son consistentes?

## Referencias

Ver el diagrama en `0-assets/flexbox-layout.svg`.
