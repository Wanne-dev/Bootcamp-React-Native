# Proyecto Semana 03 - Navegación completa de la app

## Objetivo

Integrar Stack y Tab en la app de la papelería: Catálogo → Detalle, con pestana de Carrito.

## Estructura de archivos

```text
HolaMundo/
|-- App.js
|-- src/
|   |-- navigation/
|   |   |-- RootNavigator.jsx
|   |   |-- CatalogoStack.jsx
|   |-- screens/
|   |   |-- HomeScreen.jsx
|   |   |-- DetalleScreen.jsx
|   |   |-- CarritoScreen.jsx
|   |-- components/
|   |   |-- TarjetaProducto.jsx
|   |-- data/
|   |   |-- productos.js
|   |-- theme/
|   |   |-- index.js
```

## Detalle de producto

El detalle muestra imagen, nombre, descripción, precio y stock, con un botón "Agregar al carrito" (sin lógica aun).

## Criterios de éxito

- [ ] El flujo Catálogo → Detalle → volver funciona.
- [ ] Las pestanas Catálogo y Carrito funcionan.
- [ ] El producto llega al detalle por parámetro y se muestra correctamente.
- [ ] Los colores de cabecera usan el primario de la papelería.

## Siguiente semana

`week-04-estado-global-zustand/`: el botón "Agregar al carrito" conecta con un store global.
