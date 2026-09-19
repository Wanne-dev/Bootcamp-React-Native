# 01 - Cliente API y useQuery

## Objetivos de aprendizaje

- Configurar el cliente de TanStack Query.
- Cargar el catálogo de la papelería con `useQuery`.

## 1. Instalación

```bash
npx expo install @tanstack/react-query
```

## 2. Proveedor en la raiz

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
```

## 3. Función que obtiene el catálogo

```js
const OBTENER_PRODUCTOS = async () => {
  const respuesta = await fetch('https://api.papeleria.com/productos');
  if (!respuesta.ok) {
    throw new Error('No se pudo cargar el catalogo');
  }
  return respuesta.json();
};
```

## 4. useQuery

```jsx
import { useQuery } from '@tanstack/react-query';

function HomeScreen() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productos'],
    queryFn: OBTENER_PRODUCTOS,
  });

  if (isLoading) return <Text>Cargando catalogo...</Text>;
  if (isError) return <Text>Error: {error.message}</Text>;

  return <FlatList data={data} ... />;
}
```

## 5. Claves de query

La clave identifica la consulta en la cache. La clave del catálogo es `['productos']`. Para un detalle se usa `['productos', sku]`.

## Referencias

Ver `4-recursos/webgrafia/`.
