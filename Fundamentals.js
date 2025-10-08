//Variables y Tipos de Datos

// Primitivos
let nombrePromo = "Ofertas Prime Big Deal Days"; // string
let descuento = 40; // number
let disponible = true; // boolean
let fechaFin = null; // null
let codigoDescuento; // undefined

// Compuestos
let productosDestacados = ["Echo Dot", "Kindle", "Fire TV Stick"]; // array
let producto = {
    nombre: "Echo Dot (5ta generación)",
    precioOriginal: 49.99,
    precioOferta: 27.99,
    categoria: "Tecnología"
};

console.log(producto);


// Manipulación de Strings
// Métodos
let mensaje = "   ¡Aprovecha las ofertas de AMAZON Prime Big Deal Days!   ";

console.log(mensaje.toUpperCase()); // Todo en mayúsculas
console.log(mensaje.toLowerCase()); // Todo en minúsculas
console.log(mensaje.trim()); // Quitar espacios al inicio y final
console.log(mensaje.includes("AMAZON")); // true
console.log(mensaje.endsWith("Days!   ")); // true

// Template Strings
let mensajePromo = `El producto ${producto.nombre} tiene un ${descuento}% de descuento. 
¡Solo hasta el ${fechaFin || "fin de existencias"}!`;

console.log(mensajePromo);