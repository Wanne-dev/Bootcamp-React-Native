# 02 - Inicializar y configurar

## Objetivos de aprendizaje

- Preparar el proyecto para EAS.

## 1. Instalación y login

```bash
npm install -g eas-cli
eas login
```

## 2. Inicializar

```bash
eas init
```

Este comando enlaza el proyecto local con un proyecto de la cuenta de Expo.

## 3. Configurar el identificador

En `app.json`:

```json
{
  "expo": {
    "name": "Papeleria Digital",
    "slug": "papeleria-digital",
    "ios": {
      "bundleIdentifier": "com.papeleria.digital"
    },
    "android": {
      "package": "com.papeleria.digital"
    }
  }
}
```

El paquete debe ser único: usar un dominio propio o el nombre del negocio.

## 4. Iconos y splash

Recomendado antes del build:

```bash
npx expo install expo-splash-screen
```

Los iconos y splash se declaran en `app.json`.

## Referencias

Ver `4-recursos/webgrafia/`.
