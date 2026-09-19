# Proyecto Semana 02 - Catálogo filtrable

## Objetivo

Integrar el buscador y el filtro por categoría en la pantalla Home, con el tema centralizado.

## Estructura de archivos

```text
HolaMundo/
|-- App.js
|-- src/
|   |-- components/
|   |   |-- TarjetaProducto.js
|   |-- screens/
|   |   |-- HomeScreen.js
|   |-- data/
|   |   |-- productos.js
|   |-- theme/
|   |   |-- index.js
```

## Requisitos de la entrega

1. El buscador filtra por nombre y descripción en vivo.
2. La fila de categorías filtra el catálogo y marca la activa.
3. Ambos filtros funcionan combinados.
4. El estado vacío es claro para el usuario.
5. Todos los estilos pasan por el tema.

## Criterios de éxito

- [ ] Se puede encontrar "cuaderno" escribiendo en el buscador.
- [ ] Al tocar "Arte" se muestran solo productos de arte.
- [ ] La lista funciona con 20 productos sin errores.
- [ ] No hay valores de color sueltos fuera del tema.

## Siguiente semana

`week-03-react-navigation/`: al tocar un producto se navega a su detalle.
