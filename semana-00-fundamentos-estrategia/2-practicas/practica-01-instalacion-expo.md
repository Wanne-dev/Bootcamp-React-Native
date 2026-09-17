# Practica 01 - Primer proyecto "Hola Mundo" con Expo

## Objetivo

Crear y ejecutar un proyecto "Hola Mundo" para validar que el entorno de desarrollo funciona.

## Requisitos previos

- Node.js LTS instalado (ver `1-teoria/03-setup-entorno.md`).
- Aplicacion Expo Go instalada en el telefono.

## Paso a paso

1. Crear el proyecto:

```bash
npx create-expo-app@latest HolaMundo --template blank
```

2. Entrar a la carpeta y arrancar Expo:

```bash
cd HolaMundo
npx expo start
```

3. Escanear el codigo QR con Expo Go (o presionar `a` para el emulador Android o `i` para el simulador iOS).

4. Abrir `App.js` y reemplazar el contenido por:

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
      <Text>El entorno de desarrollo esta funcionando.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
```

5. Guardar el archivo y confirmar el cambio en caliente (hot reload) en el dispositivo.

## Entregable

- Captura de pantalla del dispositivo (o emulador) mostrando "Hola Mundo".
- Guardar la captura en `0-assets/`.

## Criterios de cumplimiento

- [ ] El proyecto inicia sin errores.
- [ ] "Hola Mundo" se muestra en el dispositivo.
- [ ] La captura de pantalla queda guardada en `0-assets/`.
