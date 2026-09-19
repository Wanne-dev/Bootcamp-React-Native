# Práctica 02 - Componente Tarjeta de Producto con flexbox

## Objetivo

Construir el componente reutilizable Tarjeta de Producto usando flexbox para distribuir imagen, nombre, descripción y precio.

## Paso a paso

1. Crear `src/components/TarjetaProducto.js`:

```jsx
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TarjetaProducto({ producto }) {
  return (
    <View style={styles.tarjeta}>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.descripcion} numberOfLines={2}>
          {producto.descripcion}
        </Text>
        <View style={styles.filaInferior}>
          <Text style={styles.precio}>$ {producto.precio}</Text>
          <Text style={styles.stock}>{producto.stock} en stock</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
  },
  imagen: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  nombre: { fontSize: 16, fontWeight: '600', color: '#111827' },
  descripcion: { fontSize: 13, color: '#6B7280', marginTop: 4 },
  filaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  precio: { fontSize: 16, fontWeight: 'bold', color: '#EA580C' },
  stock: { fontSize: 12, color: '#16A34A' },
});
```

## Qué se evalúa aquí

- La fila inferior usa `flexDirection: 'row'` y `justifyContent: 'space-between'`.
- La información usa `flex: 1` para ocupar el espacio restante.
- La imagen no se deforma y tiene fondo suave como marcador de posición.

## Criterios de cumplimiento

- [ ] El componente recibe `producto` por prop y es reutilizable.
- [ ] La tarjeta se distribuye con flexbox, sin posiciones absolutas.
- [ ] Muestra nombre, descripción, precio y stock.
- [ ] Aplica la paleta de Papelería Digital.

## Referencia

Ver `0-assets/tarjeta-producto.svg`.
