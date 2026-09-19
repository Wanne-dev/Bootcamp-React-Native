# 02 - Estados de carga y error

## Objetivos de aprendizaje

- Mostrar una experiencia correcta mientras la consulta se resuelve.

## 1. Los tres estados principales

| Estado | Cómo se detecta | Qué mostrar |
|---|---|---|
| Cargando | `isLoading` | Indicador de actividad |
| Error | `isError` | Mensaje y opción de reintento |
| Con datos | `data` | La lista del catálogo |

## 2. Componente de carga

```jsx
function Cargando() {
  return (
    <View style={styles.centrado}>
      <ActivityIndicator size="large" color="#1E3A8A" />
      <Text>Cargando catalogo...</Text>
    </View>
  );
}
```

## 3. Componente de error con reintento

```jsx
function ErrorCatalogo({ mensaje, onReintentar }) {
  return (
    <View style={styles.centrado}>
      <Text>No se pudo cargar el catalogo.</Text>
      <Text>{mensaje}</Text>
      <Pressable onPress={onReintentar}>
        <Text>Reintentar</Text>
      </Pressable>
    </View>
  );
}
```

`onReintentar` llama a `refetch`:

```jsx
const { refetch } = useQuery({ queryKey: ['productos'], queryFn: OBTENER_PRODUCTOS });
```

## 4. Estado vacío

Si `data` es un arreglo vacío, se muestra un mensaje de catálogo sin productos.

## 5. Regla

Nunca dejar la pantalla en blanco mientras carga o si falla.

## Referencias

Ver `4-recursos/webgrafia/`.
