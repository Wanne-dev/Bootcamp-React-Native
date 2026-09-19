# 02 - Claves y errores

## Objetivos de aprendizaje

- Definir claves unicas y seguras.
- Manejar fallos de lectura y escritura.

## 1. Convencion de claves

Prefijar con el nombre del proyecto y el módulo:

```js
const CLAVES = {
  carrito: '@papeleria:carrito',
  favoritos: '@papeleria:favoritos',
  preferencias: '@papeleria:preferencias',
};
```

## 2. Escribir con manejo de errores

```js
async function guardar(objeto) {
  try {
    await AsyncStorage.setItem(CLAVES.carrito, JSON.stringify(objeto));
  } catch (error) {
    console.warn('No se pudo guardar el carrito', error);
  }
}
```

## 3. Leer con valores por defecto

```js
async function cargar() {
  try {
    const texto = await AsyncStorage.getItem(CLAVES.carrito);
    return texto ? JSON.parse(texto) : [];
  } catch (error) {
    console.warn('No se pudo leer el carrito', error);
    return [];
  }
}
```

## 4. Datos corruptos

`JSON.parse` lanza error si el texto no es válido. El `try/catch` lo captura y devuelve el valor por defecto.

## Referencias

Ver `4-recursos/webgrafia/`.
