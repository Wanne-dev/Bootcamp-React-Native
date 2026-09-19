# Práctica 01 - Stack básico Catálogo → Detalle

## Objetivo

Crear la pila de navegación para abrir el detalle de un producto desde la lista.

## Paso a paso

1. Instalar las dependencias:

```bash
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

2. Crear `src/navigation/CatalogoStack.jsx` con dos pantallas.

3. Hacer que la tarjeta reciba un `onPress` y navegue:

```jsx
<TarjetaProducto
  producto={item}
  onPress={() => navigation.navigate('Detalle', { producto: item })}
/>
```

4. Crear `DetalleScreen` que muestre nombre, precio y descripción desde `route.params`.

## Criterios de cumplimiento

- [ ] Al tocar un producto se abre el detalle.
- [ ] El detalle muestra el producto correcto.
- [ ] La flecha de volver regresa al catálogo.
