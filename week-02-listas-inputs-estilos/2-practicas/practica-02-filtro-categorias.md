# Práctica 02 - Filtro por categorías

## Objetivo

Agregar una fila de categorías que filtra el catálogo: Escolar, Oficina, Arte, Tecnología y Todas.

## Paso a paso

1. Definir las categorías y el estado activo:

```jsx
const categorias = ['todas', 'escolar', 'oficina', 'arte', 'tecnologia'];
const [categoria, setCategoria] = useState('todas');
```

2. Aplicar el filtro combinado con la busqueda:

```jsx
const resultados = productos.filter((producto) => {
  const coincideTexto =
    producto.nombre.toLowerCase().includes(texto) ||
    producto.descripcion.toLowerCase().includes(texto);
  const coincideCategoria =
    categoria === 'todas' || producto.categoria === categoria;
  return coincideTexto && coincideCategoria;
});
```

3. Renderizar la fila de categorías:

```jsx
<View style={styles.filaCategorias}>
  {categorias.map((item) => {
    const activa = item === categoria;
    return (
      <Pressable
        key={item}
        onPress={() => setCategoria(item)}
        style={[styles.chip, activa && styles.chipActivo]}
      >
        <Text style={[styles.chipTexto, activa && styles.chipTextoActivo]}>
          {item[0].toUpperCase() + item.slice(1)}
        </Text>
      </Pressable>
    );
  })}
</View>
```

4. Estilos de chip:

```jsx
chip: {
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 16,
  backgroundColor: colores.superficie,
  borderWidth: 1,
  borderColor: colores.borde,
  marginRight: 8,
},
chipActivo: {
  backgroundColor: colores.primario,
  borderColor: colores.primario,
},
```

## Criterios de cumplimiento

- [ ] La categoría activa se marca visualmente.
- [ ] El filtro de categoría se combina con el texto.
- [ ] "Todas" restablece el filtro.
