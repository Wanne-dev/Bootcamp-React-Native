# 02 - Validación con Zod

## Objetivos de aprendizaje

- Definir un esquema de validación con Zod.
- Conectarlo al formulario con el resolver.

## 1. Instalación

```bash
npx expo install zod @hookform/resolvers
```

## 2. Esquema del pedido

```js
import { z } from 'zod';

export const esquemaPedido = z.object({
  nombre: z.string().min(3, 'Escribe tu nombre completo'),
  telefono: z
    .string()
    .min(7, 'Telefono demasiado corto')
    .regex(/^[0-9+\s-]+$/, 'Solo numeros, espacios o guiones'),
  direccion: z.string().min(5, 'Escribe una direccion valida'),
});

export type DatosPedido = z.infer<typeof esquemaPedido>;
```

## 3. Conectar con el resolver

```js
import { zodResolver } from '@hookform/resolvers/zod';

const { control, handleSubmit, formState } = useForm({
  resolver: zodResolver(esquemaPedido),
});

const { errors } = formState;
```

## 4. Reglas de Zod utilizadas

| Método | Uso |
|---|---|
| `z.string()` | Campo de texto |
| `.min(n, mensaje)` | Longitud minima |
| `.regex(patron, mensaje)` | Formato (teléfono) |
| `.email(mensaje)` | Correo electronico |
| `z.number()` | Campo numérico |

## 5. Mostrar el error del campo

```jsx
{errors.nombre && <Text style={styles.error}>{errors.nombre.message}</Text>}
```

## Referencias

Ver `4-recursos/webgrafia/`.
