# 01 - Stack Navigator

## Objetivos de aprendizaje

- Instalar React Navigation.
- Crear una pila de pantallas para el catálogo.

## 1. Instalación

En un proyecto Expo:

```bash
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

## 2. Contenedor de navegación

Toda la app se envuelve en `NavigationContainer`:

```jsx
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <CatalogoStack />
    </NavigationContainer>
  );
}
```

## 3. Pila Catálogo → Detalle

```jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function CatalogoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1E3A8A' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}
```

## 4. Cómo se navega

Desde la lista se llama a `navigation.navigate`:

```jsx
function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.sku}
      renderItem={({ item }) => (
        <TarjetaProducto
          producto={item}
          onPress={() => navigation.navigate('Detalle', { producto: item })}
        />
      )}
    />
  );
}
```

## 5. Regla de la papelería

- El Stack controla la secuencia horizontal: Catálogo → Detalle.
- La pestana (Tab) controla la secuencia entre secciones: Catálogo y Carrito.
- Anidar el Stack dentro de la pestana del catálogo para no perder la barra inferior.

## Referencias

Ver `4-recursos/webgrafia/`.
