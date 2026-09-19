# Práctica 01 - Escanear un código

## Objetivo

Crear la pantalla de escaneo que reconoce el SKU de un producto.

## Paso a paso

1. Instalar `expo-camera`.

2. Crear `EscanerScreen` con la vista de camara y `onBarcodeScanned`.

3. Evitar escaneos repetidos: desactivar tras el primer código o pedir que se confirme.

4. Conectar el código con el catálogo: si el SKU existe, navegar al detalle.

## Criterios de cumplimiento

- [ ] El escaner lee un código y deja de escanear.
- [ ] Un SKU válido lleva al detalle del producto.
- [ ] Un código desconocido muestra mensaje.
