# 03 - Envío y manejo de errores

## Objetivos de aprendizaje

- Enviar solo datos validos.
- Comunicar el resultado al usuario.

## 1. handleSubmit

`handleSubmit` valida antes de llamar a la función de envío:

```jsx
<Pressable onPress={handleSubmit(enviar)}>
```

Si hay errores, `enviar` no se ejecuta.

## 2. Estado de envío

```jsx
const [enviando, setEnviando] = useState(false);

const enviar = async (datos) => {
  setEnviando(true);
  try {
    await crearPedido(datos);
    mostrarConfirmacion();
    reset();
  } catch (e) {
    setErrorRaiz(e.message);
  } finally {
    setEnviando(false);
  }
};
```

## 3. Reset y confirmación

- `reset()` limpia el formulario tras un pedido exitoso.
- Una pantalla de confirmación sustituye al formulario.

## 4. Error raiz vs error de campo

- Error de campo: validación de un dato (junto al campo).
- Error raiz: fallo de red o del servidor (arriba del formulario).

## 5. Regla de la papelería

El pedido se envía con nombre, teléfono y dirección validos; el resultado se comunica con una confirmación clara antes de pasar al pago (semana de pagos).

## Referencias

Ver `4-recursos/webgrafia/`.
