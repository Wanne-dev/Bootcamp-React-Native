# 03 - Medición de rendimiento

## Objetivos de aprendizaje

- Medir antes y después de optimizar.

## 1. Indicadores a observar

- Tiempo hasta mostrar el catálogo.
- Caidas de fotogramas durante el scroll.
- Número de renderizados en un cambio de estado.

## 2. Herramientas

- Dev Menu de Expo (perf monitor, FPS).
- `console.time('catalogo')` / `console.timeEnd('catalogo')` en desarrollo.
- React DevTools (Profiler) para contar renderizados.

## 3. Documentar la mejora

| Metrica | Antes | Después |
|---|---|---|
| Tiempo de primer render (1000 productos) | — | — |
| Renderizados al escribir en el buscador | — | — |

## 4. Regla

- Medir con datos iguales antes y después.
- Una sola variable de cambio por iteración.

## Referencias

Ver `4-recursos/webgrafia/`.
