# Semana 08: Autenticación

- Ruta: `bootcamp/week-08-autenticacion/`
- Dominio de práctica: Papelería Digital (cliente con cuenta)

## Descripción

Se agrega la cuenta del cliente: login con correo y contraseña, almacenamiento del token de sesión y protección de las pantallas que requieren estar autenticado.

## Objetivos

- Implementar un flujo de login.
- Almacenar el token de sesión de forma segura.
- Proteger rutas privadas.
- Implementar el cierre de sesión.

## Entregables

1. Pantalla de login funcional.
2. Sesión persistente con token y cierre de sesión.

## Contenido de la semana

| Carpeta | Contenido |
|---|---|
| `1-teoria/` | JWT, almacenamiento seguro y protección de rutas |
| `2-practicas/` | Login y protección de pantallas |
| `3-proyecto/` | Cliente autenticado en la app |
| `4-recursos/` | Documentación de Expo SecureStore |
| `5-glosario/` | Términos clave |

## Checklist de entrega

- [ ] El login valida correo y contraseña.
- [ ] El token se guarda de forma segura.
- [ ] Las pantallas privadas redirigen al login sin sesión.
- [ ] El cierre de sesión limpia el token.

## Evaluación

Resumen en `rubrica-evaluacion.md`:

| Criterio | Puntos |
|---|---|
| Flujo de login | 30 |
| Almacenamiento del token | 30 |
| Cierre de sesión | 20 |
| Rutas protegidas | 20 |
| **Total** | **100** |

## Siguiente semana

`week-09-animaciones-basicas/`: animaciones con la API Animated.
