# Semana 07: Persistencia Local

- Ruta: `bootcamp/week-07-persistencia-local/`
- Dominio de práctica: Papelería Digital (carrito, favoritos y preferencias)

## Descripción

Se guarda información en el dispositivo con AsyncStorage: favoritos, preferencias del usuario y el carrito, de modo que la app conserve datos entre sesiones sin internet.

## Objetivos

- Leer y escribir con AsyncStorage.
- Definir claves de almacenamiento unicas.
- Manejar errores de lectura y escritura.
- Aplicar la persistencia a un caso real de la papelería.

## Entregables

1. Favoritos de productos guardados y restaurados.
2. Carrito persistente por usuario.

## Contenido de la semana

| Carpeta | Contenido |
|---|---|
| `1-teoria/` | AsyncStorage, claves y patrones de persistencia |
| `2-practicas/` | Favoritos y carrito persistente |
| `3-proyecto/` | Experiencia persistente integrada |
| `4-recursos/` | Documentación de AsyncStorage |
| `5-glosario/` | Términos clave |

## Checklist de entrega

- [ ] Los favoritos se guardan y restauran al reabrir la app.
- [ ] El carrito persiste entre sesiones.
- [ ] Las claves de almacenamiento son unicas y prefijadas.
- [ ] Los errores de lectura se manejan sin romper la app.

## Evaluación

Resumen en `rubrica-evaluacion.md`:

| Criterio | Puntos |
|---|---|
| Lectura y escritura con AsyncStorage | 30 |
| Hidratación del estado | 30 |
| Manejo de errores | 20 |
| Caso de uso real | 20 |
| **Total** | **100** |

## Siguiente semana

`week-08-autenticacion/`: login de clientes con token.
