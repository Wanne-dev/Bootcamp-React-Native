# Práctica 01 - Pantalla de login

## Objetivo

Crear el login con correo y contraseña que guarda el token.

## Paso a paso

1. Instalar `expo-secure-store`.

2. Crear `src/api/auth.js` con `iniciarSesion`.

3. Crear la pantalla de login con dos campos y un botón.

4. Al enviar, guardar el token y marcar la sesión como iniciada:

```js
const token = await iniciarSesion(correo, contrasena);
await guardarToken(token);
iniciar();
```

## Criterios de cumplimiento

- [ ] El login llama a la API y guarda el token.
- [ ] Las credenciales incorrectas muestran error.
- [ ] El botón se deshabilita mientras inicia sesión.
