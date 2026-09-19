# Práctica 02 - Tab Navigator Catálogo y Carrito

## Objetivo

Agregar pestanas para Catálogo y Carrito, manteniendo la barra inferior visible al navegar al detalle.

## Paso a paso

1. Instalar bottom tabs:

```bash
npx expo install @react-navigation/bottom-tabs
```

2. Crear `RootNavigator` con dos pestanas:

```jsx
<Tab.Navigator>
  <Tab.Screen name="Catalogo" component={CatalogoStack} options={{ headerShown: false }} />
  <Tab.Screen name="Carrito" component={CarritoScreen} />
</Tab.Navigator>
```

3. Dejar `CarritoScreen` como pantalla temporal con un título "Tu carrito".

4. Envolver la app en `NavigationContainer` y montar `RootNavigator`.

## Criterios de cumplimiento

- [ ] Cambiar entre Catálogo y Carrito funciona.
- [ ] La barra inferior sigue visible en el Detalle.
- [ ] El Stack del catálogo no duplica cabeceras.
