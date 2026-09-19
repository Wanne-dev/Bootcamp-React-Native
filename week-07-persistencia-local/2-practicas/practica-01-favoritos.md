# Práctica 01 - Favoritos persistentes

## Objetivo

Guardar los SKUs favoritos y restaurarlos al abrir la app.

## Paso a paso

1. Instalar AsyncStorage.

2. Crear `src/storage/favoritos.js` con `guardarFavoritos` y `cargarFavoritos`.

3. En la tarjeta de producto, agregar el corazon de favorito:

```jsx
const favorito = favoritos.includes(producto.sku);
<Pressable onPress={() => alternarFavorito(producto.sku)}>
  <Text>{favorito ? 'Favorito' : 'Marcar'}</Text>
</Pressable>
```

4. Cargar los favoritos al montar la pantalla y guardar en cada cambio.

## Criterios de cumplimiento

- [ ] Los favoritos se restauran al abrir la app.
- [ ] Marcar y desmarcar persiste el cambio.
- [ ] Se usan claves prefijadas.
