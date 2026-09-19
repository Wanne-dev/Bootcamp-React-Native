# Proyecto Semana 04 - Carrito global

## Objetivo

Integrar el carrito de Zustand en la app de la papelería: agregar desde el detalle, ver y gestionar en la pestana Carrito, con persistencia.

## Estructura de archivos

```text
HolaMundo/
|-- App.js
|-- src/
|   |-- stores/
|   |   |-- carritoStore.js
|   |-- navigation/
|   |   |-- RootNavigator.jsx
|   |   |-- CatalogoStack.jsx
|   |-- screens/
|   |   |-- HomeScreen.jsx
|   |   |-- DetalleScreen.jsx
|   |   |-- CarritoScreen.jsx
|   |-- components/
|   |   |-- TarjetaProducto.jsx
|   |-- theme/
|   |   |-- index.js
```

## La pestana Carrito

- Lista los productos con cantidad, precio y subtotal.
- Muestra el total en COP.
- Permite eliminar un producto y vaciar el carrito.

## Criterios de éxito

- [ ] El carrito se actualiza en tiempo real al agregar desde el detalle.
- [ ] El total se calcula y se muestra formateado en pesos.
- [ ] El carrito persiste al reabrir la app.
- [ ] La pestana muestra un estado vacío cuando no hay productos.

## Siguiente semana

`week-05-networking-tanstack-query/`: el catálogo se carga desde una API.
