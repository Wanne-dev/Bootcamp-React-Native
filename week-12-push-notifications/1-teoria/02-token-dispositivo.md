# 02 - Token de dispositivo

## Objetivos de aprendizaje

- Obtener y entender el token de notificaciones remotas.

## 1. Por qué el token

Las notificaciones remotas (push de servidor) necesitan identificar el dispositivo. El token es ese identificador único.

## 2. Obtener el token

```js
import * as Device from 'expo-device';

const token = await Notifications.getExpoPushTokenAsync();
console.log(token.data);
```

Nota: en emuladores Android el token puede no generarse; probar en dispositivo físico con Expo Go o una build.

## 3. Guardar el token

```js
await SecureStore.setItemAsync('token-push', token.data);
```

## 4. Flujo de la papelería

1. El cliente instala la app y acepta notificaciones.
2. La app guarda el token.
3. Cuando el pedido está listo, el servidor envía un push a ese token.
4. En el MVP se usa una notificación local inmediata como sustituto.

## Referencias

Ver `4-recursos/webgrafia/`.
