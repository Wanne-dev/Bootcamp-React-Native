# Plan del temario - React Native (17 semanas)

Programa de 17 semanas para aprender desarrollo móvil con React Native y Expo, usando la aplicación de la papelería como dominio de práctica: un mismo catálogo de 20 productos (`recursos/dominio/productos.json`), una misma paleta de colores y unas mismas pantallas a lo largo de todo el recorrido.

## Convenciones

- Cada semana sigue la misma estructura interna:

```text
week-NN-tema/
|-- README.md
|-- rubrica-evaluacion.md
|-- 0-assets/
|-- 1-teoria/
|-- 2-practicas/
|-- 3-proyecto/
|-- 4-recursos/
|-- 5-glosario/
```

- Todos los ejemplos, datos y ejercicios están contextualizados en la papelería.
- Rúbrica de 4 criterios por semana, total 100 puntos.
- Stack: Expo (SDK actual), React Navigation, Zustand, TanStack Query, React Hook Form + Zod, AsyncStorage, Reanimated, Jest + React Native Testing Library.

## Mapa general

| Semana | Carpeta | Tema |
|---|---|---|
| 01 | `week-01-core-componentes-flexbox` | Componentes core (View, Text, Image, ScrollView, FlatList) y layout con flexbox |
| 02 | `week-02-listas-inputs-estilos` | TextInput, teclado, listas con claves y estilos con tema |
| 03 | `week-03-react-navigation` | Navegación Stack y Tabs con parámetros |
| 04 | `week-04-estado-global-zustand` | Estado global con Zustand aplicado al carrito |
| 05 | `week-05-networking-tanstack-query` | Networking con TanStack Query y carga del catálogo |
| 06 | `week-06-formularios-validacion` | Formularios con React Hook Form y validación con Zod |
| 07 | `week-07-persistencia-local` | Persistencia local con AsyncStorage |
| 08 | `week-08-autenticacion` | Autenticación de clientes |
| 09 | `week-09-animaciones-basicas` | Animaciones con la API Animated |
| 10 | `week-10-reanimated-gestos` | Reanimated y gestos |
| 11 | `week-11-apis-nativas` | APIs nativas (camara, ubicación, escaner) |
| 12 | `week-12-push-notifications` | Notificaciones push |
| 13 | `week-13-testing` | Testing con Jest y React Native Testing Library |
| 14 | `week-14-performance` | Rendimiento y optimización de listas |
| 15 | `week-15-eas-build` | Compilación con EAS Build |
| 16 | `week-16-app-store-play` | Publicación en App Store y Google Play |
| 17 | `week-17-cicd-ota-updates` | CI/CD y actualizaciones OTA |

## Detalle por semana

### Semana 01 - Componentes core y flexbox

- Objetivo: construir las primeras pantallas del catálogo con componentes core y layout flexbox.
- Rúbrica: uso correcto de View/Text/Image (30), layout flexbox (30), lista con FlatList (20), estilos en StyleSheet (20).
- Archivos: teoría (componentes core, flexbox, StyleSheet), prácticas (maquetar Home, tarjeta de producto), proyecto (Home del catálogo).

### Semana 02 - Listas, inputs y estilos

- Objetivo: buscador y filtros del catálogo con TextInput controlado y listas con claves.
- Rúbrica: TextInput controlado y busqueda (30), filtro por categoría (30), claves de listas (20), tema consistente (20).
- Archivos: teoría (TextInput y estado, claves de listas, tema), prácticas (buscador, filtro por categorías), proyecto (catálogo filtrable).

### Semana 03 - React Navigation

- Objetivo: navegación entre pantallas (Home, Detalle, Carrito) con Stack y Tabs.
- Rúbrica: Stack instalado y funcionando (30), paso de parámetros (30), Tab Navigator (20), tipos y estructura (20).
- Archivos: teoría (Stack, parámetros, Tabs), prácticas (stack básico, pasar producto), proyecto (navegación completa de la app).

### Semana 04 - Estado global con Zustand

- Objetivo: carrito de compras con un store global compartido entre pantallas.
- Rúbrica: store definido correctamente (30), acciones agregar/eliminar/limpiar (30), carrito reflejado en el tab (20), persistencia del store (20).
- Archivos: teoría (fundamentos Zustand, slices y persist), prácticas (store básico, middleware persist), proyecto (carrito global).

### Semana 05 - Networking con TanStack Query

- Objetivo: cargar el catálogo y actualizar stock desde una API con TanStack Query.
- Rúbrica: query de catálogo (30), manejo de carga y error (30), mutación de stock/pedido (20), invalidación de cache (20).
- Archivos: teoría (API client y axios, useQuery, useMutation), prácticas (query básico, mutación), proyecto (catálogo desde API).

### Semana 06 - Formularios y validación

- Objetivo: formulario de datos del cliente y del pedido con React Hook Form + Zod.
- Rúbrica: formulario con react-hook-form (30), validación con Zod (30), manejo de errores (20), envío y reset (20).
- Archivos: teoría (react-hook-form, zod), prácticas (formulario básico, validación zod), proyecto (formulario de pedido).

### Semana 07 - Persistencia local

- Objetivo: guardar carrito, favoritos y preferencias con AsyncStorage.
- Rúbrica: lectura/escritura AsyncStorage (30), hidratación del estado (30), manejo de errores (20), caso de uso real (20).
- Archivos: teoría (AsyncStorage, patrones de persistencia), prácticas (guardar favoritos, persistir carrito), proyecto (carrito persistente).

### Semana 08 - Autenticación

- Objetivo: login de cliente con tokens.
- Rúbrica: flujo de login (30), almacenamiento del token (30), cierre de sesión (20), rutas protegidas (20).
- Archivos: teoría (JWT, almacenamiento seguro), prácticas (login, protección de rutas), proyecto (cliente autenticado).

### Semana 09 - Animaciones basicas

- Objetivo: animar la tarjeta de producto y el botón de agregar al carrito con Animated.
- Rúbrica: animaciones con Animated (30), integración en la UI (30), rendimiento (20), coherencia con el diseño (20).
- Archivos: teoría (Animated, transiciones), prácticas (fade/scale, animación al agregar), proyecto (UI animada).

### Semana 10 - Reanimated y gestos

- Objetivo: gestos de swipe en el carrito y animaciones fluidas.
- Rúbrica: instalación y uso de Reanimated (30), gestos con Gesture Handler (30), integración en carrito (20), fluidez (20).
- Archivos: teoría (Reanimated, gestos), prácticas (animación reanimated, swipe), proyecto (carrito con gestos).

### Semana 11 - APIs nativas

- Objetivo: camara, ubicación y escaner de códigos de la tienda.
- Rúbrica: uso de expo-camera o barra de escaneo (30), ubicación de la tienda (30), permisos (20), integración (20).
- Archivos: teoría (expo-camera, expo-location, permisos), prácticas (escanear código, ubicación), proyecto (validar producto por código).

### Semana 12 - Push notifications

- Objetivo: avisar al cliente cuando el pedido está listo.
- Rúbrica: configuración de notificaciones (30), recepción y manejo (30), contenido del aviso (20), token de dispositivo (20).
- Archivos: teoría (expo-notifications, permisos), prácticas (notificación local, handler), proyecto (aviso de pedido listo).

### Semana 13 - Testing

- Objetivo: tests de la tarjeta de producto, el buscador y el carrito.
- Rúbrica: tests unitarios del componente (30), tests de lógica del carrito (30), mocks correctos (20), cobertura de lo relevante (20).
- Archivos: teoría (Jest, React Native Testing Library, mocks), prácticas (test de componente, test de store), proyecto (suite del catálogo).

### Semana 14 - Performance

- Objetivo: optimizar el catálogo con 1000 productos.
- Rúbrica: FlatList optimizado (30), memoización (30), medición y mejora (20), resultados documentados (20).
- Archivos: teoría (memo, useCallback, FlatList props), prácticas (perf de lista, memoización), proyecto (catálogo a escala).

### Semana 15 - EAS Build

- Objetivo: compilar la app de la papelería en la nube.
- Rúbrica: configuración del proyecto EAS (30), build exitoso (30), profile correcto (20), artefacto descargado (20).
- Archivos: teoría (EAS Build, perfiles), prácticas (eas init y build), proyecto (build de producción).

### Semana 16 - App Store y Google Play

- Objetivo: preparar la publicación de la app.
- Rúbrica: metadatos y assets (30), configuración de la store (30), revisión de requisitos (20), checklist de publicación (20).
- Archivos: teoría (directrices de cada store, assets), prácticas (icono y splash, metadata), proyecto (paquete de publicación).

### Semana 17 - CI/CD y OTA updates

- Objetivo: automatizar tests y publicar actualizaciones OTA.
- Rúbrica: pipeline CI (40), EAS Update (30), flujo documentado (30).
- Archivos: teoría (GitHub Actions, EAS Update), prácticas (workflow CI, update OTA), proyecto (pipeline del repositorio).

## Estado de avance

| Semana | Estado |
|---|---|
| 01 | Completada |
| 02 | Completada |
| 03 | Completada |
| 04 | Completada |
| 05 | Completada |
| 06 | Completada |
| 07 | Completada |
| 08 | Completada |
| 09 | Completada |
| 10 | Completada |
| 11 | Completada |
| 12 | Completada |
| 13 | Completada |
| 14 | Completada |
| 15 | Completada |
| 16 | Completada |
| 17 | Completada |

Temario técnico completo: 17 de 17 semanas entregadas.

## Contexto de dominio (Papelería Digital)

- Catálogo: `recursos/dominio/productos.json` (20 productos: cuadernos, boligrafos, mochilas, arte, tecnología).
- Paleta: primario `#1E3A8A`, acento `#EA580C`, disponible `#16A34A`, agotado `#DC2626`, fondo suave `#F3F4F6`, texto `#111827`.
- Pantallas: Home, Detalle de Producto, Categorías, Carrito y Checkout.
- Moneda: COP.
