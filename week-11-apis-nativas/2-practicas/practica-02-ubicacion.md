# Práctica 02 - Mostrar la ubicación

## Objetivo

Crear la pantalla "Nuestra tienda" con la ubicación y un botón para abrir la ruta.

## Paso a paso

1. Instalar `expo-location`.

2. Crear `TiendaScreen` con los datos fijos de la tienda.

3. Pedir permiso de ubicación para calcular la distancia al cliente (opcional).

4. Agregar un botón que abra Google Maps con la dirección:

```js
const url = `https://www.google.com/maps/search/?api=1&query=${latitud},${longitud}`;
Linking.openURL(url);
```

## Criterios de cumplimiento

- [ ] La pantalla muestra la dirección y horario.
- [ ] El botón abre la ruta en Google Maps.
- [ ] El permiso se pide solo si se usa la distancia.
