# 02 - Parámetros entre pantallas

## Objetivos de aprendizaje

- Enviar el producto seleccionado al detalle.
- Leer y tipar los parámetros en la pantalla destino.

## 1. Enviar parámetros (origen)

```jsx
navigation.navigate('Detalle', {
  nombre: producto.nombre,
  precio: producto.precio,
  descripcion: producto.descripcion,
  imagen: producto.imagen,
});
```

Para el catálogo se envía el producto seleccionado completo, así el detalle no necesita buscar en los datos.

## 2. Recibir parámetros (destino)

```jsx
function DetalleScreen({ route }) {
  const { nombre, precio, descripcion, imagen } = route.params;

  return (
    <View>
      <Text>{nombre}</Text>
      <Text>$ {precio}</Text>
      <Text>{descripcion}</Text>
    </View>
  );
}
```

## 3. Tipar los parámetros

En JavaScript se documenta la lista de parámetros; en TypeScript se define:

```ts
export type CatalogoStackParamList = {
  Home: undefined;
  Detalle: { producto: Producto };
};
```

Y se aplica al crear el stack:

```ts
const Stack = createNativeStackNavigator<CatalogoStackParamList>();
```

## 4. Producto completo vs id

- Enviar el producto completo es simple y suficiente en esta semana.
- Más adelante, con datos desde una API, se envía solo el SKU y el detalle consulta los datos.

## Verificacion

- ¿El detalle se rendede con los datos del producto tocado?
- ¿Los nombres de las rutas coinciden al navegar?

## Referencias

Ver `4-recursos/webgrafia/`.
