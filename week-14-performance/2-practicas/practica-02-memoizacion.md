# Práctica 02 - Memoizar tarjeta y callback

## Objetivo

Aplicar React.memo y useCallback a la lista del catálogo.

## Paso a paso

1. Envolver `TarjetaProducto` con `memo`.

2. Extraer `renderItem` a una función con `useCallback`.

3. Memoizar el filtro con `useMemo`.

4. Verificar con React DevTools qué escribir en el buscador no re-renderiza todas las tarjetas.

## Criterios de cumplimiento

- [ ] La tarjeta está memoizada.
- [ ] El `renderItem` es estable.
- [ ] Se confirma la reducción de renderizados.
