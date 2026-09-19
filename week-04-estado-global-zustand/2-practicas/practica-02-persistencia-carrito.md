# Práctica 02 - Persistir el carrito entre sesiones

## Objetivo

Hacer que el carrito sobreviva al cierre de la app con el middleware `persist`.

## Paso a paso

1. Instalar AsyncStorage:

```bash
npx expo install @react-native-async-storage/async-storage
```

2. Envolver el store con `persist`:

```js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCarritoStore = create(
  persist(
    (set) => ({
      productos: [],
      agregar: (producto) => set((state) => ({ ... })),
      eliminar: (sku) => set((state) => ({ ... })),
      limpiar: () => set({ productos: [] }),
    }),
    {
      name: 'carrito-papeleria',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

3. Probar: agregar productos, cerrar la app desde Expo Go y volver a abrirla.

## Criterios de cumplimiento

- [ ] El carrito conserva los productos al reabrir.
- [ ] La clave de almacenamiento es única del proyecto.
- [ ] No persisten funciones ni datos derivados.
