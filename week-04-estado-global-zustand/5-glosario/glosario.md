# Glosario - Semana 04

| Término | Definición |
|---|---|
| Estado global | Estado compartido entre varias pantallas de la aplicación |
| Zustand | Librería de estado global para React, minima y sin boilerplate |
| Store | Contenedor del estado y sus acciones, creado con `create` |
| `create()` | Función de Zustand que crea un store |
| `set()` | Función para actualizar el estado del store |
| `get()` | Función para leer el estado actual del store |
| Acción | Función dentro del store que modifica el estado |
| Selector | Función que elige una parte del estado para un componente |
| Estado derivado | Valor calculado a partir del estado (como el total del carrito) |
| Middleware | Función que envuelve un store para anadirle capacidades |
| `persist` | Middleware de Zustand que guarda el estado entre sesiones |
| AsyncStorage | Almacenamiento local asíncrono de React Native |
| Hidratación | Proceso de restaurar el estado guardado al iniciar |
| Carrito | Conjunto de productos elegidos para la compra |
| Cantidad | Número de unidades de un producto en el carrito |
| Subtotal | Precio por cantidad de una línea del carrito |
| Total | Suma de todos los subtotales del carrito |
