# Proyecto Semana 08 - Cliente autenticado

## Objetivo

Integrar la autenticación completa en la app de la papelería.

## Estructura de archivos

```text
HolaMundo/
|-- src/
|   |-- api/
|   |   |-- auth.js
|   |-- storage/
|   |   |-- token.js            // SecureStore
|   |-- stores/
|   |   |-- sesionStore.js
|   |-- navigation/
|   |   |-- RootNavigator.jsx   // AuthStack vs AppTabs
|   |   |-- AuthStack.jsx
|   |-- screens/
|   |   |-- LoginScreen.jsx
|   |   |-- CuentaScreen.jsx
```

## Criterios de éxito

- [ ] Login valida credenciales y guarda el token en SecureStore.
- [ ] La app restaura la sesión al reabrir.
- [ ] El pedido requiere sesión; el catálogo no.
- [ ] Cerrar sesión limpia el token y vuelve al login.

## Siguiente semana

`week-09-animaciones-basicas/`: animar el botón de agregar al carrito.
