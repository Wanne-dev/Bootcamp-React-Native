# Práctica 01 - Store básico del carrito

## Objetivo

Crear el `carritoStore` con las acciones agregar, eliminar, cambiar cantidad y limpiar.

## Paso a paso

1. Instalar Zustand:

```bash
npx expo install zustand
```

2. Crear `src/stores/carritoStore.js` con el store de la teoría 01.

3. Conectar el botón del detalle:

```jsx
const agregar = useCarritoStore((state) => state.agregar);

<Pressable onPress={() => agregar(producto)} style={styles.boton}>
  <Text style={styles.textoBoton}>Agregar al carrito</Text>
</Pressable>
```

4. Mostrar el carrito en `CarritoScreen` con total:

```jsx
const productos = useCarritoStore((state) => state.productos);
const eliminar = useCarritoStore((state) => state.eliminar);
const limpiar = useCarritoStore((state) => state.limpiar);
```

## Criterios de cumplimiento

- [ ] Agregar dos veces un producto suma cantidades.
- [ ] Eliminar quita solo ese SKU.
- [ ] El total se recalcula en cada cambio.
- [ ] Limpiar vacía el carrito.
