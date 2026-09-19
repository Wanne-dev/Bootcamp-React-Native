# 01 - TextInput y estado local

## Objetivos de aprendizaje

- Controlar un campo de texto con `useState`.
- Filtrar el catálogo de la papelería en vivo.

## 1. Estado del campo de busqueda

```jsx
import { useState } from 'react';

const [busqueda, setBusqueda] = useState('');

<TextInput
  value={busqueda}
  onChangeText={setBusqueda}
  placeholder="Buscar cuaderno, lapiz, mochila..."
/>
```

`value` refleja el estado y `onChangeText` lo actualiza. El resultado es un campo controlado.

## 2. Filtrar el catálogo

El filtro se calcula en cada renderizado a partir del texto:

```jsx
const resultados = productos.filter((producto) =>
  producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
);
```

Detalles del filtro de la papelería:

- Buscar por nombre y por descripción.
- Normalizar a minúsculas para que "Cuaderno" coincida con "cuaderno".
- No modificar el arreglo original: `filter` devuelve un arreglo nuevo.

Ejemplo con nombre y descripción:

```jsx
const texto = busqueda.toLowerCase();

const resultados = productos.filter(
  (producto) =>
    producto.nombre.toLowerCase().includes(texto) ||
    producto.descripcion.toLowerCase().includes(texto)
);
```

## 3. Estado vacío

Cuando no hay resultados, se muestra un mensaje:

```jsx
{resultados.length === 0 ? (
  <Text>No se encontraron productos</Text>
) : (
  <FlatList data={resultados} ... />
)}
```

## 4. Combinar busqueda con autocorreción

- `autoCorrect={false}` para evitar cambios del teclado en nombres de productos.
- `clearButtonMode` (iOS) para limpiar el campo.

## Verificacion

- ¿El campo se controla con estado?
- ¿El filtro es insensible a mayúsculas?
- ¿Se muestra un estado vacío cuando no hay resultados?

## Referencias

Ver `4-recursos/webgrafia/`.
