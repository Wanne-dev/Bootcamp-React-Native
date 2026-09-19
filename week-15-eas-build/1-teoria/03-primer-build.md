# 03 - Primer build

## Objetivos de aprendizaje

- Lanzar un build y descargar el artefacto.

## 1. Build de preview (Android)

```bash
eas build --platform android --profile preview
```

## 2. Build de producción (Android)

```bash
eas build --platform android --profile production
```

Este perfil genera un AAB firmado para Google Play.

## 3. Build de iOS

```bash
eas build --platform ios --profile production
```

Requiere una cuenta de Apple Developer.

## 4. Seguimiento y descarga

- La consola muestra el progreso.
- Al terminar, entrega un enlace al artefacto.
- En Android se puede instalar el APK directamente; el AAB se sube a Google Play.

## Referencias

Ver `4-recursos/webgrafia/`.
