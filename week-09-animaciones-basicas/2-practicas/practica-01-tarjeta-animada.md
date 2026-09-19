# Práctica 01 - Animación de entrada de la tarjeta

## Objetivo

Animar la aparición de cada tarjeta del catálogo con fade y scale.

## Paso a paso

1. Crear `TarjetaAnimada` con un `Animated.Value` de opacidad.

2. Interpolar opacidad a escala.

3. Usar `useEffect` para lanzar la animación al montar.

4. Reemplazar `TarjetaProducto` por `TarjetaAnimada` en la FlatList.

## Criterios de cumplimiento

- [ ] La tarjeta aparece con fade al cargar.
- [ ] La animación usa `useNativeDriver`.
- [ ] La lista sigue siendo fluida.
