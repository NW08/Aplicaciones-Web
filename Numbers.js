// Precio del celular en dólares
let precio = 699.99;

// Convertimos a entero usando el operador + (casting)
let precioEntero = +precio.toFixed(0);

console.log("El precio redondeado del celular es: " + precioEntero);

// Ejemplo de suma de números y string
let descuento = 30;
console.log("Precio original: " + (precio + descuento)); // Precedencia: suma primero
console.log("Precio original + descuento como string: " + precio + descuento); // concatenación

let precioOferta = 699.99;
let porcentajeDescuento = 30;

// Calculamos el descuento
let descuentoCalculado = precioOferta * porcentajeDescuento / 100;
let precioFinal = precioOferta - descuentoCalculado;

console.log("Descuento aplicado: $" + descuentoCalculado.toFixed(2));
console.log("Precio final después del descuento: $" + precioFinal.toFixed(2));

// Sumar impuestos
let impuesto = 12.5; // %
let precioConImpuesto = precioFinal + (precioFinal * impuesto / 100);
console.log(`Precio con impuestos (${impuesto}%): $${precioConImpuesto.toFixed(2)}`);
