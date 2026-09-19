# Práctica 02 - Actualización OTA

## Objetivo

Publicar una actualización OTA y verificar que la app la recibe.

## Paso a paso

1. Instalar `expo-updates` y configurar `updates.url` y `runtimeVersion`.

2. Hacer un cambio visible (por ejemplo, un texto en el Home).

3. Publicar:

```bash
eas update --branch production --message "Cambio de texto en Home"
```

4. Abrir la app instalada y verificar que el cambio se descarga.

## Criterios de cumplimiento

- [ ] La actualización se publica correctamente.
- [ ] La app muestra el cambio sin reinstalar.
- [ ] Se deja registro del comando y el resultado.
