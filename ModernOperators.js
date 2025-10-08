// Nullish coalescing operator (??): devuelve el primer valor que no sea null o undefined
// Mostrar la razón por la cual el precio recomendado del Smartwatch no puede ser determinado.
const precioRecomendado = undefined
console.log(precioRecomendado ?? "El precio recomendado no puede ser determinado debido a que los precios listados en Amazon pueden no " +
    "reflejan necesariamente el precio de mercado actual del producto. ")

// Operador ternario
// Mostrar el precio de $149,99 del Smartwatch siempre y cuando este tenga oferta, caso contrario se indica el real de $249,99.
let precioRealSmartwatch = 249.99
let precioOfertaSmartwatch = 149.99
let tieneOferta = false
console.log(tieneOferta ? precioOfertaSmartwatch : precioRealSmartwatch)