# Práctica 02 - Build de preview

## Objetivo

Compilar un APK de preview e instalarlo en un teléfono.

## Paso a paso

1. Lanzar el build:

```bash
eas build --platform android --profile preview
```

2. Seguir el progreso en la terminal o la consola de Expo.

3. Descargar el APK del enlace final y transferirlo al teléfono.

4. Instalar (permitir orígenes desconocidos en Android) y abrir la app.

## Criterios de cumplimiento

- [ ] El build termina en verde.
- [ ] Se instala el APK en un dispositivo real.
- [ ] La app abre y muestra el catálogo.
