# 01 - GitHub Actions

## Objetivos de aprendizaje

- Automatizar pruebas con un workflow de GitHub Actions.

## 1. Por qué CI

La integración continua ejecuta pruebas y comprobaciones en cada cambio del repositorio. El equipo recibe aviso inmediato si algo se rompe.

## 2. Estructura del workflow

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Instalar dependencias
        run: pnpm install --frozen-lockfile

      - name: Ejecutar tests
        run: pnpm test

      - name: Verificar tipos
        run: pnpm tsc --noEmit
```

## 3. Detalles del flujo

- `on: push` dispara el workflow en cada cambio.
- Los jobs corren en un ubuntu limpio.
- El resultado (verde o rojo) aparece junto al commit en GitHub.

## Referencias

Ver `4-recursos/webgrafia/`.
