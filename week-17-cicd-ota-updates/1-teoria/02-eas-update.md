# 02 - EAS Update (actualizaciones OTA)

## Objetivos de aprendizaje

- Publicar cambios de JavaScript sin pasar por las tiendas.

## 1. Qué es EAS Update

EAS Update distribuye actualizaciones del código JavaScript de la app por la red. Los usuarios reciben el cambio sin descargar una versión nueva de la tienda, siempre que no cambien binarios nativos.

## 2. Instalación

```bash
npx expo install expo-updates
```

Configurar en `app.json`:

```json
{
  "expo": {
    "updates": {
      "url": "https://u.expo.dev/<project-id>"
    },
    "runtimeVersion": "1.0.0"
  }
}
```

## 3. Publicar una actualización

```bash
eas update --branch production --message "Corrige texto del detalle"
```

## 4. Qué se puede actualizar OTA

- Cambios de JavaScript y assets (textos, estilos, lógica).
- No se pueden cambiar los binarios nativos (nuevos módulos, permisos): eso exige un build nuevo.

## Referencias

Ver `4-recursos/webgrafia/`.
