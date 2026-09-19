# Proyecto Semana 07 - Experiencia persistente

## Objetivo

Integrar persistencia local en la app: favoritos y carrito conservados entre sesiones, con manejo de errores.

## Estructura de archivos

```text
HolaMundo/
|-- src/
|   |-- storage/
|   |   |-- claves.js
|   |   |-- favoritos.js
|   |-- stores/
|   |   |-- carritoStore.js      // persist + AsyncStorage
|   |-- screens/
|   |   |-- HomeScreen.jsx
|   |   |-- FavoritosScreen.jsx
```

## Criterios de éxito

- [ ] Al reabrir la app se restauran carrito y favoritos.
- [ ] Ninguna falla de almacenamiento rompe la interfaz.
- [ ] Las claves están centralizadas en un solo archivo.
- [ ] El usuario puede vaciar el carrito por completo.

## Siguiente semana

`week-08-autenticacion/`: login de clientes con token de sesión.
