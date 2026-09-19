# 03 - Manejo de permisos

## Objetivos de aprendizaje

- Solicitar permisos solo cuando se necesitan y manejar el rechazo.

## 1. Cuadro de estados

| Estado | Qué hacer |
|---|---|
| No pedido | Mostrar botón para pedir el permiso |
| Concedido | Usar la funcionalidad |
| Rechazado | Explicar por qué se necesita e indicar como habilitarlo |

## 2. Mensaje de rechazo

```jsx
<View>
  <Text>Sin acceso a la camara no se puede escanear productos.</Text>
  <Text>Puedes habilitarla desde los ajustes del telefono.</Text>
</View>
```

## 3. Regla

- Pedir el permiso en el momento de usar la función, no al abrir la app.
- Si se rechaza, no insistir en bucle.

## Referencias

Ver `4-recursos/webgrafia/`.
