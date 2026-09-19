# Práctica 02 - Protección de rutas

## Objetivo

Separar la navegación segun el estado de autenticación.

## Paso a paso

1. Crear el store de sesión con Zustand.

2. En `RootNavigator`, elegir grupo segun `autenticado`.

3. Implementar la pantalla Cuenta con cierre de sesión.

4. Verificar el ciclo completo: login, uso de la app, cierre, vuelta al login.

## Criterios de cumplimiento

- [ ] Sin sesión se muestra el login.
- [ ] Con sesión se muestran las pestanas de la app.
- [ ] Cerrar sesión elimina el token y vuelve al login.
- [ ] La sesión se restaura al reabrir la app.
