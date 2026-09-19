# 03 - useMutation e invalidación de cache

## Objetivos de aprendizaje

- Actualizar el stock de un producto con `useMutation`.
- Refrescar el catálogo después del cambio.

## 1. Mutación de stock

```js
const ACTUALIZAR_STOCK = async ({ sku, stock }) => {
  const respuesta = await fetch(`https://api.papeleria.com/productos/${sku}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ stock }),
  });
  if (!respuesta.ok) throw new Error('No se pudo actualizar el stock');
  return respuesta.json();
};
```

## 2. useMutation

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function PantallaStock({ sku, stock }) {
  const queryClient = useQueryClient();

  const mutacion = useMutation({
    mutationFn: ACTUALIZAR_STOCK,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productos'] });
    },
  });

  return (
    <Pressable onPress={() => mutacion.mutate({ sku, stock: stock - 1 })}>
      <Text>Registrar venta (stock - 1)</Text>
    </Pressable>
  );
}
```

## 3. Invalidar la cache

`invalidateQueries` marca la consulta como obsoleta y la vuelve a obtener. Así el catálogo refleja el stock nuevo sin reiniciar la app.

## 4. Estado de la mutación

- `mutacion.isPending`: la mutación está en curso.
- `mutacion.isError`: fallo; mostrar mensaje.

## 5. Regla de la papelería

- Cada venta resta stock en el backend.
- Tras confirmar, se invalida `['productos']` para refrescar la lista.
- El detalle puede invalidar también `['productos', sku]`.

## Referencias

Ver `4-recursos/webgrafia/`.
