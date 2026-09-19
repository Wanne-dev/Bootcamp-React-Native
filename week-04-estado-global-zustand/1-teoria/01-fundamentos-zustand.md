# 01 - Fundamentos de Zustand

## Objetivos de aprendizaje

- Crear un store de Zustand para el carrito de la papelería.
- Entender `create`, `set` y `get`.

## 1. Por qué Zustand

Zustand es una librería de estado global para React con poca configuración: se crea un store, se lee con un hook y se actualiza con funciones de acción. Evita el boilerplate de Context o Redux.

## 2. Instalación

```bash
npx expo install zustand
```

## 3. Crear el store del carrito

```js
import { create } from 'zustand';

export const useCarritoStore = create((set, get) => ({
  productos: [],

  agregar: (producto) =>
    set((state) => {
      const existente = state.productos.find((p) => p.sku === producto.sku);

      if (existente) {
        return {
          productos: state.productos.map((p) =>
            p.sku === producto.sku
              ? { ...p, cantidad: p.cantidad + 1 }
              : p
          ),
        };
      }

      return {
        productos: [...state.productos, { ...producto, cantidad: 1 }],
      };
    }),

  eliminar: (sku) =>
    set((state) => ({
      productos: state.productos.filter((p) => p.sku !== sku),
    })),

  cambiarCantidad: (sku, cantidad) =>
    set((state) => ({
      productos: state.productos.map((p) =>
        p.sku === sku ? { ...p, cantidad } : p
      ),
    })),

  limpiar: () => set({ productos: [] }),
}));
```

## 4. Leer el estado en un componente

```jsx
import { useCarritoStore } from '../stores/carritoStore';

function CarritoScreen() {
  const productos = useCarritoStore((state) => state.productos);
  const eliminar = useCarritoStore((state) => state.eliminar);
  const limpiar = useCarritoStore((state) => state.limpiar);
  // ...
}
```

## 5. Agregar desde el detalle

```jsx
const agregar = useCarritoStore((state) => state.agregar);

<Pressable onPress={() => agregar(producto)}>
  <Text>Agregar al carrito</Text>
</Pressable>
```

## 6. Reglas de la papelería

- Una línea por SKU: agregar un producto existente suma cantidad.
- El precio se guarda en el momento de agregar (si cambia en el futuro, el pedido conserva su valor).
- El total se calcula con un selector, no se guarda como estado.

## Referencias

Ver `4-recursos/webgrafia/`.
