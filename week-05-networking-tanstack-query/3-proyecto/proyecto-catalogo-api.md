# Proyecto Semana 05 - Catálogo desde API

## Objetivo

Integrar el catálogo remoto en la app de la papelería: carga con `useQuery`, estados completos, y actualización de stock con `useMutation`.

## Estructura de archivos

```text
HolaMundo/
|-- App.js                       // QueryClientProvider + NavigationContainer
|-- src/
|   |-- api/
|   |   |-- productos.js         // obtenerProductos, actualizarStock
|   |-- screens/
|   |   |-- HomeScreen.jsx       // useQuery + carga/error
|   |   |-- DetalleScreen.jsx    // useMutation de stock
|   |   |-- CarritoScreen.jsx
|   |-- stores/
|   |   |-- carritoStore.js
|   |-- navigation/
|   |-- components/
|   |-- theme/
```

## Criterios de éxito

- [ ] El catálogo se obtiene de la API y se renderiza con FlatList.
- [ ] Estados de carga, error y vacío cubiertos.
- [ ] La venta resta stock y la lista refleja el cambio.
- [ ] El carrito de la semana 04 sigue funcionando sobre los datos remotos.

## Siguiente semana

`week-06-formularios-validacion/`: formulario de datos del pedido con React Hook Form y Zod.
