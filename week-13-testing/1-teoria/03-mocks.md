# 03 - Mocks

## Objetivos de aprendizaje

- Aislar las dependencias externas de una prueba.

## 1. Por qué mockear

Las pruebas deben ser deterministas: sin red, sin almacenamiento real y sin datos que cambien. Se reemplazan las dependencias por dobles.

## 2. Mock de AsyncStorage

```js
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(),
}));
```

## 3. Mock de la API

```js
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(productosPrueba),
  })
);
```

## 4. Regla

- Datos de prueba pequeños y explicitos.
- Un mock por dependencia, en la cabecera del archivo de test.

## Referencias

Ver `4-recursos/webgrafia/`.
