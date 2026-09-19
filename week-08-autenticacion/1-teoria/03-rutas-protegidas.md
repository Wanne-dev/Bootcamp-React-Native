# 03 - Rutas protegidas y cierre de sesión

## Objetivos de aprendizaje

- Proteger pantallas privadas.
- Implementar el cierre de sesión.

## 1. Estado de autenticación

El estado se puede guardar en un store de Zustand:

```js
export const useSesionStore = create((set) => ({
  autenticado: false,
  iniciar: () => set({ autenticado: true }),
  cerrar: () => set({ autenticado: false }),
}));
```

## 2. Dos grupos de navegación

```jsx
function RootNavigator() {
  const autenticado = useSesionStore((state) => state.autenticado);

  return autenticado ? <AppTabs /> : <AuthStack />;
}
```

- `AuthStack`: Login y Registro.
- `AppTabs`: Catálogo, Carrito, Cuenta.

## 3. Pantalla de cuenta

```jsx
function CuentaScreen() {
  const cerrar = useSesionStore((state) => state.cerrar);

  const cerrarSesion = async () => {
    await eliminarToken();
    cerrar();
  };

  return (
    <Pressable onPress={cerrarSesion}>
      <Text>Cerrar sesion</Text>
    </Pressable>
  );
}
```

## 4. Regla de la papelería

- Consultar el catálogo no exige sesión.
- Armar pedido y confirmarlo si exige sesión.

## Referencias

Ver `4-recursos/webgrafia/`.
