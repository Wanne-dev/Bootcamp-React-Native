# 01 - Camara y escaner de códigos

## Objetivos de aprendizaje

- Escanear códigos de barras de los productos.

## 1. Instalación

```bash
npx expo install expo-camera
```

Para escaneo, Expo ofrece soporte de códigos de barras dentro de `expo-camera` (o la librería `expo-barcode-scanner` en versiones anteriores).

## 2. Permiso de camara

```js
import { CameraView, useCameraPermissions } from 'expo-camera';

const [permiso, pedirPermiso] = useCameraPermissions();

if (!permiso) return null;
if (!permiso.granted) {
  return (
    <View>
      <Text>Necesitamos la camara para escanear productos</Text>
      <Pressable onPress={pedirPermiso}><Text>Permitir</Text></Pressable>
    </View>
  );
}
```

## 3. Vista de escaneo

```jsx
<CameraView
  style={{ flex: 1 }}
  onBarcodeScanned={({ data }) => manejarCodigo(data)}
/>
```

## 4. Conectar con el catálogo

El código escaneado es el SKU o el código de barras del producto:

```js
const manejarCodigo = (data) => {
  const producto = productos.find((p) => p.sku === data || p.codigo === data);
  if (producto) {
    navegar('Detalle', { producto });
  } else {
    mostrar('Producto no encontrado');
  }
};
```

## Referencias

Ver `4-recursos/webgrafia/`.
