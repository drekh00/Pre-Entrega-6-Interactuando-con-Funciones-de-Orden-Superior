console.log("Bienvenido a AVX Hardware");
alert("¡Bienvenido a AVX Hardware!");

let productos = [
    "Teclado mecánico",
    "Mouse gamer",
    "Monitor",
    "Auriculares",
    "Webcam"
];

function mostrarCatalogo(lista) {
    console.log("===== CATÁLOGO AVX HARDWARE =====");

    let posicion = 0;

    for (const producto of lista) {
        console.log(posicion + ". " + producto);
        posicion++;
    }

    console.log("Total de productos: " + lista.length);
    alert("Catálogo mostrado en la consola. Total de productos: " + lista.length);
}

function buscarProducto(lista, nombreBuscado) {
    let nombreNormalizado = nombreBuscado.toLowerCase();

    let productosNormalizados = lista.map(
        producto => producto.toLowerCase()
    );

    if (productosNormalizados.includes(nombreNormalizado)) {
        let posicion = productosNormalizados.indexOf(nombreNormalizado);

        console.log(
            "Producto encontrado: " + lista[posicion] +
            ". Posición: " + posicion
        );

        alert("Producto encontrado: " + lista[posicion] + ". Posición: " + posicion);
        return posicion;
    } else {
        console.log("El producto no está en el catálogo.");
        alert("El producto no está en el catálogo.");
        return -1;
    }
}

function agregarProducto(lista, nombreProducto) {
    if (nombreProducto.trim() === "") {
        console.log("El nombre no puede estar vacío.");
        alert("El nombre no puede estar vacío.");
        return;
    }

    let existe = lista.some(
        producto => producto.toLowerCase() === nombreProducto.toLowerCase()
    );

    if (existe) {
        console.log("Ese producto ya existe.");
        alert("Ese producto ya existe.");
        return;
    }

    lista.push(nombreProducto);
    console.log("Producto agregado: " + nombreProducto);
    alert("Producto agregado correctamente: " + nombreProducto);
}

function destacarProducto(lista, nombreProducto) {
    if (nombreProducto.trim() === "") {
        console.log("El nombre no puede estar vacío.");
        alert("El nombre no puede estar vacío.");
        return;
    }

    let existe = lista.some(
        producto => producto.toLowerCase() === nombreProducto.toLowerCase()
    );

    if (existe) {
        console.log("Ese producto ya existe.");
        alert("Ese producto ya existe.");
        return;
    }

    lista.unshift(nombreProducto);
    console.log("Producto destacado: " + nombreProducto);
    alert("Producto destacado correctamente: " + nombreProducto);
}

function quitarUltimoProducto(lista) {
    if (lista.length === 0) {
        console.log("No hay productos para eliminar.");
        alert("No hay productos para eliminar.");
        return;
    }

    let eliminado = lista.pop();

    console.log("Se ha eliminado el último producto: " + eliminado);
    alert("Se ha eliminado el último producto: " + eliminado);
}

function quitarPrimerProducto(lista) {
    if (lista.length === 0) {
        console.log("No hay productos para eliminar.");
        alert("No hay productos para eliminar.");
        return;
    }

    let eliminado = lista.shift();

    console.log("Se ha eliminado el primer producto: " + eliminado);
    alert("Se ha eliminado el primer producto: " + eliminado);
}

function reemplazarProducto(lista, nombreAnterior, nombreNuevo) {
    let posicion = buscarProducto(lista, nombreAnterior);

    if (posicion === -1) {
        return;
    }

    if (nombreNuevo.trim() === "") {
        console.log("El nuevo nombre no puede estar vacío.");
        alert("El nuevo nombre no puede estar vacío.");
        return;
    }

    let existe = lista.some(
        producto => producto.toLowerCase() === nombreNuevo.toLowerCase()
    );

    if (existe) {
        console.log("El nuevo producto ya existe.");
        alert("El nuevo producto ya existe.");
        return;
    }

    lista.splice(posicion, 1, nombreNuevo);

    console.log("Se reemplazó el producto por " + nombreNuevo);
    alert("Producto reemplazado correctamente por: " + nombreNuevo);
}

let continuar = true;

while (continuar) {
    let opcion = prompt(
        "===== AVX HARDWARE =====\n" +
        "1. Ver catálogo\n" +
        "2. Buscar producto\n" +
        "3. Agregar producto al final\n" +
        "4. Destacar producto al principio\n" +
        "5. Retirar último producto\n" +
        "6. Retirar primer producto\n" +
        "7. Reemplazar un producto\n" +
        "8. Salir\n\n" +
        "Elegí una opción:"
    );

    if (opcion === null) {
        continuar = false;
        console.log("Simulador cerrado.");
        alert("Simulador cerrado.");
        break;
    }

    switch (opcion) {
        case "1":
            mostrarCatalogo(productos);
            break;

        case "2": {
            let nombreBuscado = prompt(
                "Escribí el nombre del producto:"
            );

            if (nombreBuscado !== null) {
                buscarProducto(productos, nombreBuscado.trim());
            }
            break;
        }

        case "3": {
            let nuevoProducto = prompt(
                "¿Qué producto querés agregar?"
            );

            if (nuevoProducto !== null) {
                agregarProducto(productos, nuevoProducto.trim());
            }
            break;
        }

        case "4": {
            let productoDestacado = prompt(
                "¿Qué producto querés destacar?"
            );

            if (productoDestacado !== null) {
                destacarProducto(productos, productoDestacado.trim());
            }
            break;
        }

        case "5":
            quitarUltimoProducto(productos);
            break;

        case "6":
            quitarPrimerProducto(productos);
            break;

        case "7": {
            mostrarCatalogo(productos);

            let nombreAnterior = prompt(
                "¿Qué producto querés reemplazar?"
            );

            if (nombreAnterior === null) {
                break;
            }

            let nombreNuevo = prompt(
                "¿Cuál será el nombre del nuevo producto?"
            );

            if (nombreNuevo !== null) {
                reemplazarProducto(
                    productos,
                    nombreAnterior.trim(),
                    nombreNuevo.trim()
                );
            }
            break;
        }

        case "8":
            continuar = false;
            console.log("Gracias por visitar AVX Hardware.");
            alert("Gracias por visitar AVX Hardware.");
            break;

        default:
            console.log("Opción inválida. Elegí del 1 al 8.");
            alert("Opción inválida. Elegí del 1 al 8.");
    }
}