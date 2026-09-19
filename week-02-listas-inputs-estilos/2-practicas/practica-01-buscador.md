# Práctica 01 - Buscador funcional del catálogo

## Objetivo

Convertir el buscador de la pantalla Home en un filtro funcional que busca por nombre y descripción.

## Paso a paso

1. Agregar el estado y el filtro en `HomeScreen`:

```jsx
import { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import TarjetaProducto from '../components/TarjetaProducto';
import { productos } from '../data/productos';
import { colores, espaciado } from '../theme';

export default function HomeScreen() {
  const [busqueda, setBusqueda] = useState('');

  const texto = busqueda.toLowerCase();

  const resultados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto)
  );

  return (
    <View style={styles.pantalla}>
      <TextInput
        value={busqueda}
        onChangeText={setBusqueda}
        placeholder="Buscar producto..."
        autoCorrect={false}
        style={styles.buscador}
      />
      {resultados.length === 0 ? (
        <View style={styles.vacio}>
          <Text style={styles.textoVacio}>No se encontraron productos</Text>
        </View>
      ) : (
        <FlatList
          data={resultados}
          keyExtractor={(item) => item.sku}
          renderItem={({ item }) => <TarjetaProducto producto={item} />}
        />
      )}
    </View>
  );
}
```

2. Probar con "cuaderno", "mochila" y "lápiz".

## Criterios de cumplimiento

- [ ] El filtro actualiza la lista mientras se escribe.
- [ ] Busca por nombre y por descripción.
- [ ] Muestra el estado vacío cuando no hay resultados.
- [ ] La lista conserva `keyExtractor` por SKU.
