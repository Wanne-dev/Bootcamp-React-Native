# Proyecto Semana 13 - Suite del catálogo y el carrito

## Objetivo

Entregar una suite de pruebas que cubra los flujos clave de la papelería.

## Estructura de archivos

```text
HolaMundo/
|-- package.json              // script test + preset jest-expo
|-- src/
|   |-- components/
|   |   |-- __tests__/
|   |   |   |-- TarjetaProducto.test.jsx
|   |   |   |-- Buscador.test.jsx
|   |-- stores/
|   |   |-- __tests__/
|   |   |   |-- carritoStore.test.js
|   |   |-- carritoStore.js
|   |   |-- calcularTotal.js   // funcion pura
```

## Qué debe cubrir

- TarjetaProducto: render correcto con y sin stock.
- Buscador: filtra por nombre y por categoría.
- Carrito: agregar, repetir, eliminar, limpiar y total.

## Criterios de éxito

- [ ] `npm test` ejecuta toda la suite en verde.
- [ ] Los tests son deterministas (sin red ni aleatoriedad).
- [ ] Los mocks están aislados por archivo.

## Siguiente semana

`week-14-performance/`: optimizar el catálogo con miles de productos.
