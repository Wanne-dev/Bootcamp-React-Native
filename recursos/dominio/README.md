# Dominio de práctica - Catálogo de la papelería

Carpeta con los datos de referencia del dominio sobre el que se practica todo el bootcamp: la aplicación de una papelería.

## productos.json

Catálogo de referencia con 20 productos reales de una papelería:

- 6 de categoría escolar (cuadernos, mochilas, lápices, escolares).
- 6 de categoría oficina (boligrafos, papel, oficina).
- 4 de categoría arte.
- 4 de categoría tecnología.

Cada producto tiene: SKU único, nombre, descripción, categoría, tipo, precio (en COP), stock, unidad, disponibilidad y variantes (colores o tamaños).

## Uso en el programa

| Semana | Uso |
|---|---|
| week-01 | La tarjeta de producto y la lista Home se construyen con estos datos |
| week-02 | El buscador y los filtros por categoría se prueban con el catálogo |
| week-03 | El detalle de producto recibe estos productos por parámetro |
| week-04 | El carrito agrega estos productos al estado global |
| week-05 | Se mapean estos datos a la API del catálogo |

## Cómo se referencia

En los proyectos de los estudiantes, el catálogo se copia como arreglo en `src/data/productos.js` o se sirve desde una API. Este archivo es la fuente única de verdad del dominio para los ejercicios.
