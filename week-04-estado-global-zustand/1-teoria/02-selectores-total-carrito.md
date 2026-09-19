# 02 - Selectores y calculo del total

## Objetivos de aprendizaje

- Leer solo la parte del estado que se necesita.
- Calcular el total del carrito de forma correcta.

## 1. Selector: leer una parte

Zustand re-renderiza el componente solo cuando cambia la parte seleccionada:

```js
const productos = useCarritoStore((state) => state.productos);
```

Es más eficiente que leer el store completo.

## 2. Calcular el total sin guardarlo

El total es un valor derivado: se calcula a partir de los productos en cada renderizado.

```js
function CarritoScreen() {
  const productos = useCarritoStore((state) => state.productos);

  const total = productos.reduce(
    (suma, p) => suma + p.precio * p.cantidad,
    0
  );

  return (
    <View>
      <FlatList data={productos} ... />
      <Text>Total: $ {total.toLocaleString('es-CO')}</Text>
    </View>
  );
}
```

## 3. Formatear precios en COP

```js
function formatearCOP(valor) {
  return '$ ' + valor.toLocaleString('es-CO');
}

formatearCOP(8500);   // "$ 8.500"
formatearCOP(89900);  // "$ 89.900"
```

## 4. Contador en la pestana

La pestana Carrito puede mostrar la cantidad de artículos:

```jsx
const cantidad = useCarritoStore(
  (state) => state.productos.reduce((n, p) => n + p.cantidad, 0)
);
```

## 5. Reglas

- No guardar el total en el store: derivarlo.
- Usar selectores pequeños para evitar renderizados innecesarios.
- Formatear precios en un helper único.

## Referencias

Ver `4-recursos/webgrafia/`.
