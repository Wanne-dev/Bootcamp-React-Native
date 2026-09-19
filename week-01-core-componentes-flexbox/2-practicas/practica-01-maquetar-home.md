# Práctica 01 - Maquetar la pantalla Home del catálogo

## Objetivo

Maquetar la pantalla Home de Papelería Digital con encabezado, buscador visual, fila de categorías y lista de productos usando `FlatList`.

## Paso a paso

1. Crear la estructura de archivos:

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
```

2. Copiar el catálogo a `productos.js` (exportar el arreglo de `productos.json`).

3. Escribir `HomeScreen`:

```jsx
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import TarjetaProducto from '../components/TarjetaProducto';
import { productos } from '../data/productos';

export default function HomeScreen() {
  return (
    <View style={styles.pantalla}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Papeleria Digital</Text>
      </View>
      <TextInput placeholder="Buscar producto..." style={styles.buscador} />
      <FlatList
        data={productos}
        keyExtractor={(item) => item.sku}
        renderItem={({ item }) => <TarjetaProducto producto={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F3F4F6' },
  encabezado: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  buscador: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});
```

## Resultado esperado

- La pantalla muestra el encabezado azul, un buscador y los 20 productos en tarjetas.

## Criterios de cumplimiento

- [ ] La lista usa `FlatList` y no un `map` manual.
- [ ] El encabezado y el buscador se distribuyen con flexbox.
- [ ] La pantalla usa la paleta de la papelería.

## Referencia

Ver `0-assets/home-maqueta.svg`.
