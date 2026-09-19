# Práctica 02 - Validación con Zod

## Objetivo

Agregar el esquema Zod al formulario y mostrar los errores por campo.

## Paso a paso

1. Instalar `zod` y `@hookform/resolvers`.

2. Crear el esquema en `src/validation/pedido.js`.

3. Conectar el resolver:

```js
const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(esquemaPedido),
});
```

4. Renderizar el mensaje bajo cada campo:

```jsx
{errors.nombre && <Text style={styles.error}>{errors.nombre.message}</Text>}
```

5. Comprobar que el envío no ocurre con el teléfono vacío o el nombre corto.

## Criterios de cumplimiento

- [ ] El esquema valida nombre, teléfono y dirección.
- [ ] Cada error aparece junto a su campo.
- [ ] Un formulario inválido no llama a `enviar`.
