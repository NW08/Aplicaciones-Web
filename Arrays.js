const Producto = {
    nombre : "Iphone 12 Pro ",
    precio : 380,
    moneda : "USD",
    proveedor : {
        nombre : "Shenzhen Yipin Network Technology Development Co., Ltd.",
        pais : "China",
    },
    categoria : "Smartphone",
    caracteristicas : {
        pantalla : "6.1 pulgadas",
        almacenamiento : "128GB",
        color : "Grafito",
    }
};

// 1.— Destructuring de objetos
const {nombre , precio, moneda, proveedor, categoria,
    caracteristicas} = Producto;
console.log(nombre, precio , caracteristicas);

const {proveedor : {nombre : nombreProveedor, pais} } = Producto;
console.log(nombreProveedor, pais);

const {nombre : nombreProducto, precio : costo , caracteristicas : {pantalla, almacenamiento,
    color} } = Producto;
console.log(nombreProducto, costo, pantalla, almacenamiento, color);

// Operador SPREAD

const productoMejorado = {
    ...Producto,
    caracteristicas : {
        ...Producto.caracteristicas,
        camara : "12MP",
        almacenamiento : "256GB",
    },
    disponibilidad : "500 en adelante"
};

// Object.values
const productos = [
    {nombre : "Iphone 12 Pro ", precio : 380, espacio : "64B"},
    {nombre : "Iphone 12 Pro Max", precio : 480, espacio : "128GB"},
    {nombre : "Iphone 12 Pro Max", precio : 580, espacio : "256GB"}
];


const valores = Object.values(productoMejorado.caracteristicas);
console.log(valores);

const valores2 = Object.values(productoMejorado);
console.log(valores2);

// Recorrer arrays
productos.forEach((p)=> console.log(p.nombre))


productos.forEach(p => {
    console.log(`${p.nombre} cuesta ${p.precio}`);
});

for (const p of productos){
    console.log(`${p.nombre} es de ${p.espacio} almacenamiento`);
}
