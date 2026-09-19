# Glosario - Semana 05

| Término | Definición |
|---|---|
| API | Interfaz de programación que permite a la app comunicarse con un servidor |
| Cliente HTTP | Módulo que realiza peticiones a la API (fetch, axios) |
| TanStack Query | Librería para gestionar peticiones, cache y estados de datos |
| QueryClient | Cliente que centraliza la cache y la configuración |
| QueryClientProvider | Componente que provee el cliente a toda la app |
| useQuery | Hook para leer datos de una API |
| queryKey | Clave que identifica una consulta en la cache |
| queryFn | Función que obtiene los datos de la consulta |
| useMutation | Hook para ejecutar operaciones que modifican datos (crear, actualizar, eliminar) |
| mutationFn | Función que ejecuta la operación de la mutación |
| invalidateQueries | Acción que marca consultas como obsoletas para re-obtenerlas |
| isLoading | Bandera que indica que la consulta está en curso |
| isError | Bandera que indica que la consulta fallo |
| refetch | Función para volver a ejecutar una consulta |
| isPending | Bandera que indica que una mutación está en curso |
| Cache | Almacenamiento de los datos consultados para evitar peticiones repetidas |
