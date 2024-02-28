
let item = 0;
let precioTotal = 0;
const preciosItems = {
    1: 25000, // Camiseta Deportiva Adidas
    2: 18000, // Short Deportivo Adidas
    3: 58000, // Zapatillas Deportivas Adidas
    4: 480000, // Paleta Bullpadel Hack 03 Master
    5: 540000, // Paleta Adidas Metalbone 3.3
    6: 450000, // Paleta Nox At10 Genius 18k
    7: 390000, // Paleta Hirostar Blackstone
}

if (true) {
    alert("Bienvenido a A Todo Pádel, Nuestra tienda oficial de Indumentaria, Accesorios y Paletas para Pádel")
}

let continuarComprando = true;

while (continuarComprando) {

    let nuevoItem = prompt("Por favor, seleccione lo que desea comprar: \n \n1 - Camiseta Deportiva Adidas $25.000 \n2 - Short Deportivo Adidas $18.000\n3 - Zapatillas Deportivas Adidas $58.000\n4 - Paleta Bullpadel Hack 03 Master $480.000\n5 - Paleta Adidas Metalbone 3.3 $540.000\n6 - Paleta Nox At10 Genius 18k $450.000\n7 - Paleta Hirostar Blackstone $390.000")

    item = nuevoItem


    if (item <= 0 || item > 7 || isNaN(item)) {
        alert("Por favor, seleccione un número de artículo válido.");

    } else {

        if (item == 1) {
            precioTotal += preciosItems[1];

            alert(`Se agregó Camiseta Deportiva Adidas al Carrito de Compras. Precio: $${preciosItems[1]}. Precio total: $${precioTotal}.`);

        } else if (item == 2) {
            precioTotal += preciosItems[2];

            alert(`Se agregó Short Deportivo Adidas al Carrito de Compras. Precio: $${preciosItems[2]}. Precio total: $${precioTotal}.`);

        } else if (item == 3) {
            precioTotal += preciosItems[3];

            alert(`Se agregó Zapatillas Deportivas Adidas al Carrito de Compras. Precio: $${preciosItems[3]}. Precio total: $${precioTotal}.`);

        } else if (item == 4) {
            precioTotal += preciosItems[4];

            alert(`Se agregó Paleta Bullpadel Hack 03 Master al Carrito de Compras. Precio: $${preciosItems[4]}. Precio total: $${precioTotal}.`);

        } else if (item == 5) {
            precioTotal += preciosItems[5];

            alert(`Se agregó Paleta Adidas Metalbone 3.3 al Carrito de Compras. Precio: $${preciosItems[5]}. Precio total: $${precioTotal}.`);

        } else if (item == 6) {
            precioTotal += preciosItems[6];

            alert(`Se agregó Paleta Nox At10 Genius 18k al Carrito de Compras. Precio: $${preciosItems[6]}. Precio total: $${precioTotal}.`);

        } else if (item == 7) {
            precioTotal += preciosItems[7];

            alert(`Se agregó Paleta Hirostar Blackstone al Carrito de Compras. Precio: $${preciosItems[7]}. Precio total: $${precioTotal}.`);
        }

        let respuesta = prompt("¿Desea seguir comprando? (Sí/No)").toLowerCase();

        if (respuesta == "no" || respuesta == "No") {
            continuarComprando = false;
        }

    }
}

alert(`El total de la compra es: $${precioTotal}. Gracias por su compra.`);