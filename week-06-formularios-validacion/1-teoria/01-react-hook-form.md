# 01 - React Hook Form

## Objetivos de aprendizaje

- Crear un formulario sin estado manual por campo.

## 1. Instalación

```bash
npx expo install react-hook-form
```

## 2. useForm

```jsx
import { useForm } from 'react-hook-form';

function FormularioPedido() {
  const { control, handleSubmit } = useForm();

  const enviar = (datos) => {
    console.log('Datos validos:', datos);
  };

  return (
    <View>
      <Controller
        control={control}
        name="nombre"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Nombre completo"
          />
        )}
      />
      <Pressable onPress={handleSubmit(enviar)}>
        <Text>Confirmar pedido</Text>
      </Pressable>
    </View>
  );
}
```

## 3. Por qué Controller

`Controller` conecta `TextInput` (que maneja su propio texto) con el estado del formulario. Con `control` y `name` se asocia cada campo.

## 4. No mezclar estados

- No crear `useState` por campo: React Hook Form ya gestiona los valores.
- Los errores también vienen del formulario (con el resolver), no de estado manual.

## 5. Campos del pedido de la papelería

- `nombre`: quien recibe el pedido.
- `telefono`: contacto para confirmar.
- `direccion`: retiro en tienda u entrega.

## Referencias

Ver `4-recursos/webgrafia/`.
