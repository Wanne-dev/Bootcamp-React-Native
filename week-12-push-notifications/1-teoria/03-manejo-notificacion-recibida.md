# 03 - Manejo de la notificación recibida

## Objetivos de aprendizaje

- Reaccionar al toque sobre una notificación.

## 1. Listener de respuesta

```js
useEffect(() => {
  const sub = Notifications.addNotificationResponseReceivedListener((respuesta) => {
    const data = respuesta.notification.request.content.data;
    if (data?.pedidoId) {
      navegar('Pedido', { pedidoId: data.pedidoId });
    }
  });

  return () => sub.remove();
}, []);
```

## 2. Responder con datos

Al programar la notificación se incluye `data`:

```js
content: {
  title: 'Tu pedido está listo',
  body: 'Pasa por la tienda a recogerlo.',
  data: { pedidoId: 'PED-001' },
}
```

## 3. Regla

- La notificación comunica algo accionable.
- Al tocarla, la app abre la pantalla relacionada, no el inicio sin contexto.

## Referencias

Ver `4-recursos/webgrafia/`.
