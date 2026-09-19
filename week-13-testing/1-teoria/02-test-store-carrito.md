# 02 - Probar la lógica del carrito

## Objetivos de aprendizaje

- Probar el store de Zustand sin interfaz.

## 1. Probar acciones puras

El store se puede instanciar y manipular sin renderizar:

```js
import { useCarritoStore } from '../carritoStore';

beforeEach(() => {
  useCarritoStore.setState({ productos: [] });
});
```

## 2. Test de agregar

```js
test('agregar un producto nuevo lo anade con cantidad 1', () => {
  useCarritoStore.getState().agregar(producto);
  const { productos } = useCarritoStore.getState();
  expect(productos).toHaveLength(1);
  expect(productos[0].cantidad).toBe(1);
});
```

## 3. Test de sumar cantidad

```js
test('agregar dos veces el mismo producto suma cantidad', () => {
  useCarritoStore.getState().agregar(producto);
  useCarritoStore.getState().agregar(producto);
  expect(useCarritoStore.getState().productos[0].cantidad).toBe(2);
});
```

## 4. Test del total (lógica pura)

Extraer el calculo a una función pura para probarla sin el store:

```js
export function calcularTotal(productos) {
  return productos.reduce((s, p) => s + p.precio * p.cantidad, 0);
}

test('calcula el total del carrito', () => {
  expect(calcularTotal([{ precio: 8500, cantidad: 2 }])).toBe(17000);
});
```

## Referencias

Ver `4-recursos/webgrafia/`.
