# 02 - Almacenamiento seguro del token

## Objetivos de aprendizaje

- Guardar el token con Expo SecureStore.

## 1. Por qué SecureStore

Expo SecureStore cifra los valores con el sistema (Keychain en iOS, Keystore en Android). Es el lugar correcto para tokens, a diferencia de AsyncStorage.

## 2. Instalación

```bash
npx expo install expo-secure-store
```

## 3. Guardar y leer

```js
import * as SecureStore from 'expo-secure-store';

const CLAVE_TOKEN = 'token-papeleria';

export async function guardarToken(token) {
  await SecureStore.setItemAsync(CLAVE_TOKEN, token);
}

export async function obtenerToken() {
  return SecureStore.getItemAsync(CLAVE_TOKEN);
}

export async function eliminarToken() {
  await SecureStore.deleteItemAsync(CLAVE_TOKEN);
}
```

## 4. Comprobar la sesión al iniciar

```js
useEffect(() => {
  obtenerToken().then((token) => {
    if (token) {
      setAutenticado(true);
    }
  });
}, []);
```

## Referencias

Ver `4-recursos/webgrafia/`.
