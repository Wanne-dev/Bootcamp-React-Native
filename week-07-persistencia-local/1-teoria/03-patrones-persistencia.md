# 03 - Patrones de persistencia

## Objetivos de aprendizaje

- Aplicar persistencia en estados de la papelería.

## 1. Persistir el carrito (se integra con Zustand)

La semana 04 ya usa el middleware `persist` con AsyncStorage. Ahí el almacenamiento es transparente.

## 2. Favoritos con estado y AsyncStorage

```jsx
const [favoritos, setFavoritos] = useState([]);

// cargar al montar
useEffect(() => {
  cargarFavoritos().then(setFavoritos);
}, []);

// guardar al cambiar
const alternarFavorito = (sku) => {
  setFavoritos((previos) => {
    const nuevos = previos.includes(sku)
      ? previos.filter((s) => s !== sku)
      : [...previos, sku];
    guardarFavoritos(nuevos);
    return nuevos;
  });
};
```

## 3. Preferencias del usuario

- Moneda mostrada.
- Categoría principal del inicio.
- Notificaciones activadas.

## 4. Hidratación

Hidratar es restaurar el estado desde el almacenamiento al iniciar. En la papelería se restauran favoritos y carrito antes de mostrar la lista.

## Referencias

Ver `4-recursos/webgrafia/`.
