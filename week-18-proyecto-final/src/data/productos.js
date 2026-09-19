export const productos = [
  {
    "sku": "CUAD-001",
    "nombre": "Cuaderno cuadriculado 100 hojas",
    "descripcion": "Cuaderno cosido de 100 hojas cuadriculadas, tapa dura, tamaño carta.",
    "categoria": "escolar",
    "tipo": "cuadernos",
    "precio": 8500,
    "stock": 60,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/cuaderno cuadriculado.jpg"),
    "variantes": [
      { "color": "rojo" },
      { "color": "azul" },
      { "color": "verde" },
      { "color": "negro" }
    ]
  },
  {
    "sku": "CUAD-002",
    "nombre": "Cuaderno rayado 50 hojas",
    "descripcion": "Cuaderno grapado de 50 hojas rayadas, tapa blanda.",
    "categoria": "escolar",
    "tipo": "cuadernos",
    "precio": 4200,
    "stock": 80,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/cuaderno rayado 50.jpg"),
    "variantes": [
      { "tamaño": "carta" },
      { "tamaño": "media carta" }
    ]
  },
  {
    "sku": "MOCH-001",
    "nombre": "Mochila escolar dos compartimentos",
    "descripcion": "Mochila resistente al agua con dos compartimentos y espalda acolchada.",
    "categoria": "escolar",
    "tipo": "mochilas",
    "precio": 89900,
    "stock": 12,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Mochila Esolar 2 compratimentos.jpg"),
    "variantes": [
      { "color": "negro" },
      { "color": "azul" },
      { "color": "rosa" }
    ]
  },
  {
    "sku": "MOCH-002",
    "nombre": "Mochila escolar con carrito",
    "descripcion": "Mochila con estructura y ruedas, ideal para carga pesada.",
    "categoria": "escolar",
    "tipo": "mochilas",
    "precio": 149900,
    "stock": 6,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Mochila escolar con carrito.jpg"),
    "variantes": [
      { "color": "azul" },
      { "color": "rojo" }
    ]
  },
  {
    "sku": "LAPZ-001",
    "nombre": "Lápiz de grafito No. 2",
    "descripcion": "Lápiz de escritura y dibujo con mina No. 2, venta por unidad.",
    "categoria": "escolar",
    "tipo": "lapices",
    "precio": 1200,
    "stock": 200,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Lapiz grafito N2.jpg"),
    "variantes": []
  },
  {
    "sku": "ESCR-001",
    "nombre": "Pegamento en barra 22 g",
    "descripcion": "Pegamento en barra lavable de 22 gramos.",
    "categoria": "escolar",
    "tipo": "escolares",
    "precio": 3500,
    "stock": 40,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/pegamento en barra.jpg"),
    "variantes": []
  },
  {
    "sku": "BOLI-001",
    "nombre": "Caja de bolígrafos x3",
    "descripcion": "Caja con tres bolígrafos de tinta de secado rápido.",
    "categoria": "oficina",
    "tipo": "boligrafos",
    "precio": 6500,
    "stock": 90,
    "unidad": "caja",
    "disponible": true,
    "imagen": require("../../assets/boligrafos x 3.jpg"),
    "variantes": [
      { "color": "azul" },
      { "color": "negro" },
      { "color": "rojo" }
    ]
  },
  {
    "sku": "BOLI-002",
    "nombre": "Bolígrafo punta fina negro",
    "descripcion": "Bolígrafo de punta fina 0.7 mm para escritura precisa, venta por unidad.",
    "categoria": "oficina",
    "tipo": "boligrafos",
    "precio": 2800,
    "stock": 150,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Boligrafo de punta fina.jpg"),
    "variantes": []
  },
  {
    "sku": "PAPE-001",
    "nombre": "Resma de papel carta 75 g",
    "descripcion": "Resma de 500 hojas de papel bond carta de 75 gramos.",
    "categoria": "oficina",
    "tipo": "papel",
    "precio": 18900,
    "stock": 35,
    "unidad": "resma",
    "disponible": true,
    "imagen": require("../../assets/Resma de papel.jpg"),
    "variantes": []
  },
  {
    "sku": "PAPE-002",
    "nombre": "Paquete de sobres manila x50",
    "descripcion": "Paquete con 50 sobres de manila con solapa.",
    "categoria": "oficina",
    "tipo": "papel",
    "precio": 12500,
    "stock": 25,
    "unidad": "paquete",
    "disponible": true,
    "imagen": require("../../assets/Sorbres de manila.jpg"),
    "variantes": [
      { "tamaño": "carta" },
      { "tamaño": "oficio" }
    ]
  },
  {
    "sku": "OFIC-001",
    "nombre": "Cinta adhesiva 48 mm x 40 m",
    "descripcion": "Cinta adhesiva transparente para uso general de oficina.",
    "categoria": "oficina",
    "tipo": "oficina",
    "precio": 4200,
    "stock": 70,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Cinta Adesihiva.jpg"),
    "variantes": []
  },
  {
    "sku": "OFIC-002",
    "nombre": "Carpeta con gancho legajador",
    "descripcion": "Carpeta de cartón con gancho para archivar documentos.",
    "categoria": "oficina",
    "tipo": "oficina",
    "precio": 3200,
    "stock": 50,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Carpeta con gancho legajador.jpg"),
    "variantes": [
      { "color": "amarillo" },
      { "color": "azul" },
      { "color": "verde" }
    ]
  },
  {
    "sku": "ARTE-001",
    "nombre": "Acuarela escolar x12",
    "descripcion": "Estuche con 12 pastillas de acuarela y pincel de regalo.",
    "categoria": "arte",
    "tipo": "arte",
    "precio": 14500,
    "stock": 18,
    "unidad": "estuche",
    "disponible": true,
    "imagen": require("../../assets/Acuarela por 12.jpg"),
    "variantes": []
  },
  {
    "sku": "ARTE-002",
    "nombre": "Témpera de 250 ml",
    "descripcion": "Frasco de témpera lavable de 250 mililitros.",
    "categoria": "arte",
    "tipo": "arte",
    "precio": 5200,
    "stock": 30,
    "unidad": "frasco",
    "disponible": true,
    "imagen": require("../../assets/Tempera.jpg"),
    "variantes": [
      { "color": "rojo" },
      { "color": "azul" },
      { "color": "amarillo" },
      { "color": "blanco" },
      { "color": "negro" }
    ]
  },
  {
    "sku": "ARTE-003",
    "nombre": "Set de pinceles x6",
    "descripcion": "Set de seis pinceles con mango ergonómico.",
    "categoria": "arte",
    "tipo": "arte",
    "precio": 18500,
    "stock": 14,
    "unidad": "set",
    "disponible": true,
    "imagen": require("../../assets/Pinceles x6.jpg"),
    "variantes": []
  },
  {
    "sku": "ARTE-004",
    "nombre": "Lienzo de 30 x 40 cm",
    "descripcion": "Lienzo de algodón montado en bastidor de madera.",
    "categoria": "arte",
    "tipo": "arte",
    "precio": 9800,
    "stock": 10,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Lienzo 30x40.jpg"),
    "variantes": []
  },
  {
    "sku": "TECN-001",
    "nombre": "Memoria USB de 32 GB",
    "descripcion": "Memoria USB 2.0 con tapa, capacidad de 32 GB.",
    "categoria": "tecnologia",
    "tipo": "tecnologia",
    "precio": 28500,
    "stock": 22,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Usb 32gb.jpg"),
    "variantes": []
  },
  {
    "sku": "TECN-002",
    "nombre": "Calculadora científica",
    "descripcion": "Calculadora científica con pantalla de dos líneas.",
    "categoria": "tecnologia",
    "tipo": "tecnologia",
    "precio": 42500,
    "stock": 9,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Calculadora cientifica.jpg"),
    "variantes": []
  },
  {
    "sku": "TECN-003",
    "nombre": "Audífonos con micrófono",
    "descripcion": "Audífonos de diadema con micrófono para clases en línea.",
    "categoria": "tecnologia",
    "tipo": "tecnologia",
    "precio": 35900,
    "stock": 11,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Audifonos con microfono.jpg"),
    "variantes": [
      { "color": "negro" },
      { "color": "blanco" }
    ]
  },
  {
    "sku": "TECN-004",
    "nombre": "Mouse inalámbrico",
    "descripcion": "Mouse inalámbrico con receptor USB de 2.4 GHz.",
    "categoria": "tecnologia",
    "tipo": "tecnologia",
    "precio": 18900,
    "stock": 15,
    "unidad": "unidad",
    "disponible": true,
    "imagen": require("../../assets/Mouse inalambrico.jpg"),
    "variantes": [
      { "color": "negro" },
      { "color": "gris" }
    ]
  }
];

export const categorias = [
  { id: 'todos', nombre: 'Todos', icon: 'grid' },
  { id: 'escolar', nombre: 'Escolar', icon: 'school' },
  { id: 'oficina', nombre: 'Oficina', icon: 'briefcase' },
  { id: 'arte', nombre: 'Arte', icon: 'palette' },
  { id: 'tecnologia', nombre: 'Tecnología', icon: 'cpu' },
];

export const getProductosByCategoria = (categoria) => {
  if (categoria === 'todos') return productos;
  return productos.filter(p => p.categoria === categoria);
};

export const getProductoBySku = (sku) => {
  return productos.find(p => p.sku === sku);
};

export const searchProductos = (query) => {
  const lowerQuery = query.toLowerCase();
  return productos.filter(p =>
    p.nombre.toLowerCase().includes(lowerQuery) ||
    p.descripcion.toLowerCase().includes(lowerQuery) ||
    p.tipo.toLowerCase().includes(lowerQuery) ||
    p.sku.toLowerCase().includes(lowerQuery)
  );
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};
