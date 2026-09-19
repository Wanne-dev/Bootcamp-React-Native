# 03 - Tab Navigator y estructura

## Objetivos de aprendizaje

- Crear pestanas para Catálogo y Carrito.
- Organizar los archivos de navegación y pantallas.

## 1. Instalación

```bash
npx expo install @react-navigation/bottom-tabs
```

## 2. Pestanas

```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1E3A8A',
        tabBarInactiveTintColor: '#6B7280',
      }}
    >
      <Tab.Screen name="Catalogo" component={CatalogoStack} />
      <Tab.Screen name="Carrito" component={CarritoScreen} />
    </Tab.Navigator>
  );
}
```

## 3. Anidar Stack dentro del Tab

Para que la barra inferior no desaparezca al entrar al detalle, el Stack vive dentro de la pestana:

```jsx
<Tab.Screen name="Catalogo" component={CatalogoStack} />
```

`CatalogoStack` contiene `Home` y `Detalle`; `Carrito` es una pantalla directa.

## 4. Estructura de archivos

```text
src/
|-- navigation/
|   |-- RootNavigator.jsx     // Tab: Catalogo + Carrito
|   |-- CatalogoStack.jsx     // Stack: Home + Detalle
|-- screens/
|   |-- HomeScreen.jsx
|   |-- DetalleScreen.jsx
|   |-- CarritoScreen.jsx
|-- components/
|   |-- TarjetaProducto.jsx
|-- data/
|   |-- productos.js
```

## 5. Pantalla temporal de carrito

En esta semana Carrito es una pantalla con texto; en la semana 04 se conecta al estado global.

## Verificacion

- ¿Las pestanas funcionan desde ambas secciones?
- ¿El detalle conserva la barra inferior?

## Referencias

Ver `4-recursos/webgrafia/`.
