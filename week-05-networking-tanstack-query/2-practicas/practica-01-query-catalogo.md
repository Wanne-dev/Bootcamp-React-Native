# Práctica 01 - Cargar el catálogo con useQuery

## Objetivo

Reemplazar el archivo local de productos por una consulta a la API usando `useQuery`.

## Paso a paso

1. Instalar TanStack Query y envolver la app con `QueryClientProvider`.

2. Crear `src/api/productos.js` con la función `obtenerProductos`.

3. En `HomeScreen`:

```jsx
const { data, isLoading, isError, refetch } = useQuery({
  queryKey: ['productos'],
  queryFn: obtenerProductos,
});
```

4. Renderizar carga, error (con reintento) y datos.

## Criterios de cumplimiento

- [ ] La lista proviene de `useQuery`.
- [ ] Hay pantalla de carga y de error con reintento.
- [ ] La clave de query es `['productos']`.
