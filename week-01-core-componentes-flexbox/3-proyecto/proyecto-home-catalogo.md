# Proyecto Semana 01 - Home del catálogo

## Objetivo

Integrar la pantalla Home con la lista real del catálogo de la papelería, usando los 20 productos y el componente Tarjeta de Producto.

## Requisitos previos

- Practica 01 y 02 completadas.
- Catálogo de la papelería en `src/data/productos.js` (tomado de `productos.json`).

## Estructura de archivos

```text
HolaMundo/
|-- App.js                       // renderiza HomeScreen
|-- src/
|   |-- components/
|   |   |-- TarjetaProducto.js
|   |-- screens/
|   |   |-- HomeScreen.js
|   |-- data/
|   |   |-- productos.js
```

## Qué debe cumplir la entrega

1. La pantalla abre y muestra el catálogo sin errores.
2. Cada producto muestra nombre, descripción, precio y stock.
3. La lista usa `FlatList` con `keyExtractor` por SKU.
4. El layout es responsivo (se adapta a distintos anchos con flexbox).

## Datos de referencia

- 20 productos de la papelería: cuadernos, boligrafos, mochilas, arte y tecnología.
- Moneda: COP.
- Paleta aplicada: primario `#1E3A8A`, acento `#EA580C`.

## Criterios de éxito

- [ ] Home renderiza los 20 productos.
- [ ] La tarjeta se ve correcta en un emulador o en Expo Go.
- [ ] No hay errores de consola.
- [ ] Captura de la pantalla guardada como evidencia.

## Siguiente semana

`week-02-listas-inputs-estilos/`: el buscador del Home pasa a ser funcional y se agregan filtros por categoría.
