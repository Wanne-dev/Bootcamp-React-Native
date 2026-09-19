# Práctica 01 - Test del componente TarjetaProducto

## Objetivo

Probar que la tarjeta renderiza nombre, precio y stock.

## Paso a paso

1. Configurar Jest con preset `jest-expo`.

2. Crear `src/components/__tests__/TarjetaProducto.test.jsx`.

3. Renderizar con un producto de prueba y comprobar textos:

```jsx
expect(screen.getByText('Cuaderno cuadriculado 100 hojas')).toBeTruthy();
expect(screen.getByText('$ 8.500')).toBeTruthy();
```

4. Probar el caso de producto sin stock (muestra "Agotado").

## Criterios de cumplimiento

- [ ] El test corre con `npm test` y pasa.
- [ ] Verifica comportamiento, no estilos.
- [ ] Usa datos de prueba explicitos.
