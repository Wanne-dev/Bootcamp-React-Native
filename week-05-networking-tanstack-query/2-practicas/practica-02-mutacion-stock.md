# Práctica 02 - Mutación de stock y refresco

## Objetivo

Registrar una venta que resta stock en la API y refresca el catálogo.

## Paso a paso

1. Crear la función `actualizarStock` en `src/api/productos.js`.

2. Agregar en el detalle de producto:

```jsx
const queryClient = useQueryClient();

const mutacion = useMutation({
  mutationFn: actualizarStock,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['productos'] });
  },
});
```

3. Conectar el botón "Registrar venta" a `mutacion.mutate({ sku, stock: stock - 1 })`.

4. Mostrar el estado `isPending` mientras se ejecuta.

## Criterios de cumplimiento

- [ ] La mutación llama a la API con el stock nuevo.
- [ ] Tras el éxito, la lista se refresca.
- [ ] El botón se deshabilita mientras la mutación está en curso.
