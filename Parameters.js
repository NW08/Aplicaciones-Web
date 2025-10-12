// Parámetros por defecto en funciones

// Definir una función que muestre la información del procesador de una computadora de escritorio, con los siguientes parámetros por defecto:
// nombre, precio, stock, velocidad, nucleos y equipo.

const infoProcesador = (nombre = "Intel Core i5", precio = 108, stock = 15,
                        velocidad = "2.5 GHz", nucleos = 10, equipo = "Computadora de Escritorio") =>
    console.log(`Especificaciones del procesador son: 
    Nombre: ${nombre}, 
    Precio: ${precio}, 
    Cantidad minima para la compra: ${stock}, 
    Velocidad: ${velocidad}, 
    #Nucleos: ${nucleos}, 
    Equipo especifico de uso para el procesador: ${equipo}`)

infoProcesador()

console.log("----------------------------------------")

// Parámetro REST

// Crea una función que devuelva un array con los productos disponibles para equipar un supermercado, los productos son:
// Estantes para supermercado, Refrigerador para bebidas, Cestas de compra y PDA Portátil (Sistema de Facturación con Pantalla Táctil).
// Utiliza el parámetro REST para recibir los productos.
const productosSupermercado = (...productos)  => console.log (productos)

productosSupermercado  ("Estantes para supermercado", "Refrigerador para bebidas", "Cestas de compra",
    "PDA Portátil (Sistema de Facturación con Pantalla Táctil)")