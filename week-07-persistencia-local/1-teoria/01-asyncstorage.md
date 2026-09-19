# 01 - AsyncStorage

## Objetivos de aprendizaje

- Leer y escribir datos locales con AsyncStorage.

## 1. Qué es AsyncStorage

AsyncStorage es el almacenamiento clave-valor asíncrono de React Native. Guarda texto en el dispositivo y persiste entre sesiones.

## 2. Instalación

```bash
npx expo install @react-native-async-storage/async-storage
```

## 3. Escribir

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('@papeleria:carrito', JSON.stringify(productos));
```

## 4. Leer

```js
const texto = await AsyncStorage.getItem('@papeleria:carrito');

if (texto) {
  const productos = JSON.parse(texto);
}
```

## 5. Eliminar y limpiar

```js
await AsyncStorage.removeItem('@papeleria:carrito');
await AsyncStorage.clear(); // con cuidado: borra todo
```

## 6. Reglas

- Siempre `JSON.stringify` al escribir y `JSON.parse` al leer objetos.
- Nombres de clave con prefijo del proyecto para evitar colisiones.
- Las operaciones son asíncronas: usar `async/await`.

## Referencias

Ver `4-recursos/webgrafia/`.
