# Práctica 01 - Workflow de CI

## Objetivo

Crear el workflow de GitHub Actions que corre los tests en cada push.

## Paso a paso

1. Crear `.github/workflows/ci.yml` en el repositorio.

2. Configurar los pasos: checkout, setup-node, pnpm, instalar, test.

3. Hacer push y verificar en Actions que el workflow corre.

4. Romper un test a proposito y comprobar que el pipeline falla.

## Criterios de cumplimiento

- [ ] El workflow se dispara con cada push.
- [ ] Los tests corren en el runner de GitHub.
- [ ] Un test rojo muestra el pipeline en rojo.
