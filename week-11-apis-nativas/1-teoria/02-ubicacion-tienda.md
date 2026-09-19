# 02 - Ubicación de la tienda

## Objetivos de aprendizaje

- Obtener la ubicación del usuario y mostrar la tienda.

## 1. Instalación

```bash
npx expo install expo-location
```

## 2. Permiso de ubicación

```js
import * as Location from 'expo-location';

const { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') {
  // mostrar mensaje y salir
}
```

## 3. Leer la posición

```js
const posicion = await Location.getCurrentPositionAsync({});
// posicion.coords.latitude, posicion.coords.longitude
```

## 4. Datos de la tienda

La ubicación de la tienda es fija:

```js
const TIENDA = {
  nombre: 'Papeleria Digital',
  latitud: 4.6097,    // reemplazar con la direccion real
  longitud: -74.0817, // reemplazar con la direccion real
};
```

Mostrar un mapa (react-native-maps) o un enlace que abre Google Maps con la ruta.

## Referencias

Ver `4-recursos/webgrafia/`.
