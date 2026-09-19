# 01 - Configuración de expo-notifications

## Objetivos de aprendizaje

- Instalar y configurar notificaciones en Expo.

## 1. Instalación

```bash
npx expo install expo-notifications expo-device
```

## 2. Permiso de notificaciones

```js
import * as Notifications from 'expo-notifications';

const { status } = await Notifications.requestPermissionsAsync();

if (status !== 'granted') {
  console.log('Notificaciones no autorizadas');
}
```

## 3. Notificación local inmediata

```js
await Notifications.scheduleNotificationAsync({
  content: {
    title: 'Tu pedido está listo',
    body: 'Pasa por Papeleria Digital a recogerlo.',
  },
  trigger: null, // inmediata
});
```

## 4. Comportamiento en primer plano

Configurar como se muestra la notificación con la app abierta:

```js
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
```

## Referencias

Ver `4-recursos/webgrafia/`.
