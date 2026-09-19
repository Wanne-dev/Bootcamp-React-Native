# Práctica 02 - Aviso de pedido listo

## Objetivo

Conectar la confirmación del pedido con una notificación local.

## Paso a paso

1. En la pantalla de confirmación, tras crear el pedido:

```js
await Notifications.scheduleNotificationAsync({
  content: {
    title: 'Tu pedido está listo',
    body: 'Gracias por tu compra en Papeleria Digital.',
  },
  trigger: null,
});
```

2. Agregar `data: { pantalla: 'pedido' }` al contenido.

3. Manejar el tap para abrir el detalle del pedido.

## Criterios de cumplimiento

- [ ] La notificación sale al confirmar el pedido.
- [ ] Tocar la notificación abre la pantalla correcta.
- [ ] El contenido respeta el tono de la marca.
