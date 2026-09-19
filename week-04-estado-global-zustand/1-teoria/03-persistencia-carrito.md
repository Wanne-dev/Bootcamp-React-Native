# 03 - Persistencia del carrito

## Objetivos de aprendizaje

- Persistir el store con el middleware `persist`.
- Entender como se hidrata el estado al abrir la app.

## 1. El middleware persist

```js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCarritoStore = create(
  persist(
    (set, get) => ({
      productos: [],
      agregar: (producto) => set((state) => ({ ... })),
      eliminar: (sku) => set((state) => ({ ... })),
      limpiar: () => set({ productos: [] }),
    }),
    {
      name: 'carrito-papeleria', // clave de almacenamiento
    }
  )
);
```

## 2. Cómo funciona

- Al crear el store, `persist` restaura el estado guardado.
- Cada cambio se escribe de nuevo en el almacenamiento.
- Al abrir la app, el carrito aparece tal como estaba.

## 3. Almacenamiento por defecto

Por defecto `persist` usa `localStorage` (web). En React Native se indica Expo SecureStore o AsyncStorage:

```bash
npx expo install @react-native-async-storage/async-storage
```

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

persist(..., {
  name: 'carrito-papeleria',
  storage: createJSONStorage(() => AsyncStorage),
})
```

## 4. Campos a hidratar

El carrito persiste solo los productos (parcializar):

```js
partialize: (state) => ({ productos: state.productos }),
```

## 5. Advertencia de producto

- Si el precio de un producto cambia, el carrito guardado conserva el precio anterior. Es aceptable para el MVP: el pedido refleja el precio al momento de agregar.

## Referencias

Ver `4-recursos/webgrafia/`.
