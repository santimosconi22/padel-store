let carrito = []; // Array para almacenar los productos seleccionados
let preciosItems = [ // Array de objetos para almacenar los productos con sus precios
    { nombre: "Camiseta Deportiva Adidas", precio: 25000 },
    { nombre: "Short Deportivo Adidas", precio: 18000 },
    { nombre: "Zapatillas Deportivas Adidas", precio: 58000 },
    { nombre: "Paleta Bullpadel Hack 03 Master", precio: 480000 },
    { nombre: "Paleta Adidas Metalbone 3.3", precio: 540000 },
    { nombre: "Paleta Nox At10 Genius 18k", precio: 450000 },
    { nombre: "Paleta Hirostar Blackstone", precio: 390000 }
];

// Método para calcular el costo de la entrega
function calcularCostoEntrega(total) {
    return total * 0.05;
}

// Mensaje de bienvenida
alert("Bienvenido a A Todo Pádel, nuestra tienda oficial de indumentaria, accesorios y paletas para pádel");

let continuarComprando = true;

while (continuarComprando) {
    let nuevoItem = parseInt(prompt("Por favor, seleccione lo que desea comprar:\n\n" + preciosItems.map((item, index) => `${index + 1} - ${item.nombre} $${item.precio}`).join('\n')));

    if (nuevoItem >= 1 && nuevoItem <= preciosItems.length) {
        carrito.push(preciosItems[nuevoItem - 1]);
        alert(`Se agregó ${preciosItems[nuevoItem - 1].nombre} al carrito de compras. Precio: $${preciosItems[nuevoItem - 1].precio}.`);
    } else {
        alert("Por favor, seleccione un número de artículo válido.");
    }

    let respuesta = prompt("¿Desea seguir comprando? (Sí/No)").toLowerCase();

    if (respuesta === "no") {
        continuarComprando = false;
    } else if (respuesta !== "si") {
        alert("Por favor, ingrese una respuesta válida (Sí/No).");
    }
}

// Calcular el total de la compra
let precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);

// Calcular el total con el costo de la entrega
let totalConEntrega = precioTotal + calcularCostoEntrega(precioTotal);

// Mostrar el resumen de la compra
alert(`El total de la compra es: $${precioTotal}. El costo de entrega es: $${calcularCostoEntrega(precioTotal)}. Total a pagar (incluyendo entrega): $${totalConEntrega}. Gracias por su compra.`);
