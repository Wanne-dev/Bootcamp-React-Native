# 01 - JWT y flujo de login

## Objetivos de aprendizaje

- Entender el flujo de autenticación con token.

## 1. Qué es un JWT

Un JWT (JSON Web Token) es un texto firmado que el servidor emite tras validar las credenciales. La app lo guarda y lo envía en las peticiones protegidas para demostrar la sesión.

## 2. Flujo en la papelería

1. El cliente escribe correo y contraseña.
2. La app envía las credenciales al endpoint de login.
3. El servidor responde con un token.
4. La app guarda el token de forma segura.
5. Las peticiones de pedido incluyen el token.

## 3. Llamada de login

```js
export const iniciarSesion = async (correo, contrasena) => {
  const respuesta = await fetch('https://api.papeleria.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, contrasena }),
  });

  if (!respuesta.ok) {
    throw new Error('Credenciales incorrectas');
  }

  const datos = await respuesta.json();
  return datos.token; // JWT emitido por el servidor
};
```

## 4. Regla

- El password nunca se guarda en el dispositivo.
- Solo se persiste el token de sesión.

## Referencias

Ver `4-recursos/webgrafia/`.
