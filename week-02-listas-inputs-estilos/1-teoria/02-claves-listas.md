# 02 - Claves en listas

## Objetivos de aprendizaje

- Entender para qué sirve la clave de cada elemento en una lista.
- Usar el SKU como clave única del catálogo.

## 1. Por qué hay claves

React usa la clave para saber que elementos cambiaron, se agregaron o se quitaron. Sin una clave estable, la lista se comporta mal al filtrar: se reutilizan vistas con datos equivocados.

## 2. La clave correcta en el catálogo

El SKU es el identificador único y estable de cada producto:

```jsx
<FlatList
  data={resultados}
  keyExtractor={(item) => item.sku}
  renderItem={({ item }) => <TarjetaProducto producto={item} />}
/>
```

## 3. Errores comunes

| Error | Consecuencia |
|---|---|
| Usar el indice (`index`) | La clave cambia al filtrar; la interfaz se desincroniza |
| Clave duplicada | Avisos de React y renderizado incorrecto |
| Sin clave | React usa el indice por defecto, con los mismos problemas |

## 4. Reglas

- La clave debe ser única y estable para cada elemento.
- No cambia entre renderizados.
- Para el catálogo, la clave natural es el SKU.

## Verificacion

- ¿Todas las listas usan `keyExtractor`?
- ¿La clave es el SKU y no el indice?
- ¿No hay SKUs duplicados en los datos?

## Referencias

Ver `4-recursos/webgrafia/`.
