# 03 - Tema de estilos

## Objetivos de aprendizaje

- Centralizar colores y espaciados en un solo archivo.
- Aplicar el tema de Papelería Digital de forma consistente.

## 1. Qué es un tema

El tema reune los valores visuales repetidos (colores, espaciados, radios y tipografía). Se define una vez y se importa donde se necesite.

## 2. Archivo de tema

`src/theme/index.js`:

```js
export const colores = {
  primario: '#1E3A8A',
  acento: '#EA580C',
  disponible: '#16A34A',
  agotado: '#DC2626',
  fondo: '#F3F4F6',
  superficie: '#FFFFFF',
  texto: '#111827',
  textoSecundario: '#6B7280',
  borde: '#E5E7EB',
};

export const espaciado = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const radio = {
  tarjeta: 12,
  chip: 16,
  boton: 24,
};
```

## 3. Aplicar el tema

```jsx
import { colores, espaciado, radio } from '../theme';

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.superficie,
    borderRadius: radio.tarjeta,
    borderColor: colores.borde,
    borderWidth: 1,
    padding: espaciado.md,
  },
  precio: {
    color: colores.acento,
    fontWeight: 'bold',
  },
});
```

## 4. Beneficio

- Cambiar un color una sola vez lo actualiza en toda la app.
- Los espaciados quedan normalizados entre pantallas.
- La coherencia con la marca se mantiene sin esfuerzo.

## Verificacion

- ¿No hay valores de color sueltos fuera del tema?
- ¿Los espaciados usan la escala del tema?

## Referencias

Ver `4-recursos/webgrafia/`.
