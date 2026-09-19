# Proyecto Semana 06 - Formulario de pedido

## Objetivo

Integrar el formulario de datos del cliente antes del checkout, con validación completa y estados de envío.

## Estructura de archivos

```text
HolaMundo/
|-- src/
|   |-- validation/
|   |   |-- pedido.js            // esquemaPedido con Zod
|   |-- screens/
|   |   |-- FormularioPedido.jsx
|   |   |-- ConfirmacionPedido.jsx
|   |-- api/
|   |   |-- pedidos.js           // crearPedido
```

## Flujo

1. El usuario revisa el carrito y toca "Confirmar pedido".
2. Llena nombre, teléfono y dirección.
3. Si los datos son validos, se crea el pedido y se muestra la confirmación.

## Criterios de éxito

- [ ] El formulario valida con Zod antes de enviar.
- [ ] Los errores son claros y están junto al campo.
- [ ] Tras enviar, se muestra una pantalla de confirmación.
- [ ] El formulario se resetea después del éxito.

## Siguiente semana

`week-07-persistencia-local/`: el carrito y las preferencias se guardan localmente.
