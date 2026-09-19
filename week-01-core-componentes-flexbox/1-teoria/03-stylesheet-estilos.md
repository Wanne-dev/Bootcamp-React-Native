# 03 - StyleSheet y estilos

## Objetivos de aprendizaje

- Definir estilos con `StyleSheet.create`.
- Aplicar la paleta de Papelería Digital de forma consistente.

## 1. Por qué StyleSheet

- Valida los estilos y avisa de errores en desarrollo.
- Se definen una vez y se reutilizan en toda la pantalla.
- Mantiene la lógica separada de la presentación.

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginBottom: 12,
  },
});

// uso: <View style={styles.tarjeta}>
```

## 2. Sin unidades

En React Native los tamaños son números sin `px`. La unidad es el dp (density-independent pixel).

```jsx
fontSize: 16,        // correcto
// fontSize: '16px', // incorrecto
```

## 3. Paleta de Papelería Digital

| Rol | Color | Uso |
|---|---|---|
| Primario | `#1E3A8A` | Encabezado, botones principales |
| Acento | `#EA580C` | Precio, acción principal |
| Disponible | `#16A34A` | Estado con stock |
| Agotado | `#DC2626` | Sin stock |
| Fondo suave | `#F3F4F6` | Fondos de sección |
| Texto principal | `#111827` | Títulos |
| Texto secundario | `#6B7280` | Descripciones |

## 4. Estilos por nivel

| Elemento | Estilo sugerido |
|---|---|
| Título de pantalla | `fontSize: 22`, `fontWeight: 'bold'`, `#111827` |
| Nombre del producto | `fontSize: 16`, `fontWeight: '600'`, `#111827` |
| Descripción | `fontSize: 13`, `#6B7280` |
| Precio | `fontSize: 16`, `fontWeight: 'bold'`, `#EA580C` |

## 5. Objetos de estilo en línea

Usar estilos en línea solo para valores dinámicos puntuales:

```jsx
<View style={[styles.chip, categoria.activa && styles.chipActivo]} />
```

El resto debe vivir en `StyleSheet.create`.

## 6. Verificacion

- ¿Todos los estilos están en `StyleSheet.create`?
- ¿Se usan los colores de la paleta y no valores sueltos?
- ¿Los tamaños y espaciados son consistentes entre pantallas?

## Referencias

Ver `4-recursos/webgrafia/`.
