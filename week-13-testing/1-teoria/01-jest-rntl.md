# 01 - Jest y React Native Testing Library

## Objetivos de aprendizaje

- Configurar el entorno de pruebas de un proyecto Expo.

## 1. Instalación

```bash
npx expo install jest-expo jest @testing-library/react-native -- --save-dev
```

Nota: usar las versiones compatibles que indique `npx expo install` para la SDK del proyecto.

## 2. Configuración en package.json

```json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo"
  }
}
```

## 3. Primer test de componente

```jsx
import { render, screen } from '@testing-library/react-native';
import TarjetaProducto from '../TarjetaProducto';

test('muestra el nombre y el precio del producto', () => {
  const producto = {
    sku: 'CUAD-001',
    nombre: 'Cuaderno cuadriculado 100 hojas',
    descripcion: 'Cuaderno cosido',
    precio: 8500,
    stock: 60,
  };

  render(<TarjetaProducto producto={producto} />);

  expect(screen.getByText('Cuaderno cuadriculado 100 hojas')).toBeTruthy();
  expect(screen.getByText('$ 8.500')).toBeTruthy();
});
```

## 4. Ejecutar

```bash
npm test
```

## Referencias

Ver `4-recursos/webgrafia/`.
