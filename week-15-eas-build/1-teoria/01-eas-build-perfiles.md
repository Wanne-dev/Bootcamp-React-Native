# 01 - EAS Build y perfiles

## Objetivos de aprendizaje

- Entender EAS y sus perfiles de build.

## 1. Qué es EAS Build

EAS (Expo Application Services) Build compila la app en la nube. Sin Android Studio ni Xcode local: se sube el proyecto y Expo devuelve un artefacto instalable.

## 2. Perfiles de build

| Perfil | Uso |
|---|---|
| `development` | Instalar en el teléfono para depurar (con Expo Dev Client) |
| `preview` | APK para probar en dispositivos sin publicar |
| `production` | AAB para Google Play / IPA para App Store |

## 3. eas.json

```json
{
  "cli": { "version": ">= 5.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Referencias

Ver `4-recursos/webgrafia/`.
