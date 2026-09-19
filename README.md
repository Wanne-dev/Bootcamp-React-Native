# Bootcamp de React Native - Aplicación de Papelería

Programa práctico de 17 semanas para aprender desarrollo móvil con React Native y Expo, construyendo una aplicación de catálogo, inventario y pedidos para una papelería.

Todo el temario se practica sobre un mismo dominio: Papelería Digital, la app de una papelería de barrio. Los ejemplos, datos y ejercicios usan su catálogo, su paleta de colores y sus pantallas a lo largo de todo el programa.

## Estructura del programa

| Semana | Carpeta | Tema |
|---|---|---|
| 01 | `week-01-core-componentes-flexbox` | Componentes core y flexbox |
| 02 | `week-02-listas-inputs-estilos` | Listas, inputs y estilos |
| 03 | `week-03-react-navigation` | Navegación con React Navigation |
| 04 | `week-04-estado-global-zustand` | Estado global con Zustand |
| 05 | `week-05-networking-tanstack-query` | Networking con TanStack Query |
| 06 | `week-06-formularios-validacion` | Formularios y validación |
| 07 | `week-07-persistencia-local` | Persistencia local |
| 08 | `week-08-autenticacion` | Autenticación |
| 09 | `week-09-animaciones-basicas` | Animaciones basicas |
| 10 | `week-10-reanimated-gestos` | Reanimated y gestos |
| 11 | `week-11-apis-nativas` | APIs nativas |
| 12 | `week-12-push-notifications` | Push notifications |
| 13 | `week-13-testing` | Testing |
| 14 | `week-14-performance` | Performance |
| 15 | `week-15-eas-build` | Compilación con EAS Build |
| 16 | `week-16-app-store-play` | Publicación en las tiendas |
| 17 | `week-17-cicd-ota-updates` | CI/CD y actualizaciones OTA |

El mapa detallado del programa (objetivos y rúbricas de cada semana) está en `PLAN-temario-tecnico.md`.

## Convenciones del repositorio

Cada semana sigue la misma estructura interna:

```text
week-NN-tema/
|-- README.md              Descripcion y entregables de la semana
|-- rubrica-evaluacion.md   Criterios de evaluacion
|-- 0-assets/              Diagramas y archivos de apoyo
|-- 1-teoria/              Material conceptual
|-- 2-practicas/           Ejercicios guiados
|-- 3-proyecto/            Proyecto de la semana
|-- 4-recursos/            Enlaces y material complementario
|-- 5-glosario/            Terminos clave
```

## Dominio de práctica: Papelería Digital

La app que se construye a lo largo del programa:

| Campo | Valor |
|---|---|
| Nombre de la app | Papelería Digital |
| Negocio | Papelería de barrio |
| Catálogo | 20 productos de referencia en `recursos/dominio/productos.json` |
| Moneda | COP |
| Pantallas | Home, Detalle de Producto, Categorías, Carrito y Checkout |
| Paleta | Primario `#1E3A8A`, acento `#EA580C`, disponible `#16A34A`, agotado `#DC2626`, fondo suave `#F3F4F6`, texto `#111827` |

## Stack

| Área | Herramientas |
|---|---|
| Entorno | Expo, Node.js, Git, VS Code |
| Navegación | React Navigation |
| Estado global | Zustand |
| Datos | TanStack Query |
| Formularios | React Hook Form + Zod |
| Persistencia | AsyncStorage, SecureStore, SQLite (segun semana) |
| Animaciones | Animated, Reanimated + Gesture Handler |
| Testing | Jest + React Native Testing Library |
| Entrega | EAS Build, EAS Update, GitHub Actions |

## Recursos compartidos

- `recursos/dominio/productos.json`: catálogo de referencia con 20 productos de la papelería (SKU, precio, stock, categorías y variantes). Se usa como fuente de datos en las semanas 01, 02, 03, 04 y 05.
- `PLAN-temario-tecnico.md`: mapa completo del programa semana a semana.
