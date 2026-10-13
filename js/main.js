console.log("Bienvenido a AVX Hardware");
alert("¡Bienvenido a AVX Hardware!");

class Producto {
    constructor(id, nombre, precio, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    vender(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            console.log("La cantidad debe ser un número entero mayor a cero.");
            return false;
        }

        if (cantidad > this.stock) {
            console.log("No hay suficiente stock de " + this.nombre);
            return false;
        }

        this.stock = this.stock - cantidad;

        console.log("Venta realizada: " + cantidad + " unidad/es de " + this.nombre);
        console.log("Stock restante: " + this.stock);

        return true;
    }
}

const teclado = new Producto(1, "Teclado mecánico", 45000, "Periféricos", 10);
const mouse = new Producto(2, "Mouse gamer", 20000, "Periféricos", 15);
const monitor = new Producto(3, "Monitor", 180000, "Pantallas", 5);

let productos = [teclado, mouse, monitor];
let siguienteId = 4;

function mostrarCatalogo(lista) {
    console.log("===== CATÁLOGO AVX HARDWARE =====");

    if (lista.length === 0) {
        console.log("No hay productos en el catálogo.");
        alert("No hay productos en el catálogo.");
        return;
    }

    for (const producto of lista) {
        console.log(
            "ID: " + producto.id +
            " | Nombre: " + producto.nombre +
            " | Precio: $" + producto.precio +
            " | Categoría: " + producto.categoria +
            " | Stock: " + producto.stock
        );
    }

    console.log("Total de productos: " + lista.length);
    alert("Catálogo mostrado en la consola. Total: " + lista.length);
}

function buscarProducto(lista, nombreBuscado) {
    let nombreNormalizado = nombreBuscado.trim().toLowerCase();

    let posicion = lista.findIndex(
        producto => producto.nombre.toLowerCase() === nombreNormalizado
    );

    if (posicion !== -1) {
        let productoEncontrado = lista[posicion];

        console.log("Producto encontrado: " + productoEncontrado.nombre);
        console.log("Precio: $" + productoEncontrado.precio);
        console.log("Categoría: " + productoEncontrado.categoria);
        console.log("Stock: " + productoEncontrado.stock);

        alert(
            "Producto encontrado: " + productoEncontrado.nombre +
            "\nPrecio: $" + productoEncontrado.precio +
            "\nStock: " + productoEncontrado.stock
        );

        return posicion;
    }

    console.log("El producto no está en el catálogo.");
    alert("El producto no está en el catálogo.");
    return -1;
}

// 1. FUNCIÓN DE ORDEN SUPERIOR DE BÚSQUEDA 1: find
function buscarProductoPorId(lista) {
    let idBuscado = Number(prompt("Ingresá el ID exacto del producto que buscas:"));
    
    let productoEncontrado = lista.find(producto => producto.id === idBuscado);

    if (productoEncontrado) {
        console.log("🔍 Producto encontrado con find():", productoEncontrado);
        alert(`Encontrado: ${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio}`);
        return productoEncontrado;
    } else {
        console.log("⚠️ No existe un producto con ese ID.");
        alert("No existe un producto con ese ID.");
        return null;
    }
}

// 2. FUNCIÓN DE ORDEN SUPERIOR DE BÚSQUEDA 2: filter
function filtrarPorCategoria(lista) {
    let categoriaBuscada = prompt("Ingresá la categoría a filtrar (ej. Periféricos, Pantallas):");
    if (!categoriaBuscada) return;

    let filtrados = lista.filter(producto => producto.categoria.toLowerCase() === categoriaBuscada.trim().toLowerCase());

    if (filtrados.length > 0) {
        console.log(`📦 Productos en la categoría '${categoriaBuscada}' (filter):`, filtrados);
        alert(`Se encontraron ${filtrados.length} productos en esa categoría. Revisa la consola.`);
    } else {
        console.log("⚠️ No hay productos en esa categoría.");
        alert("No se encontraron productos para esa categoría.");
    }
}

// 3. FUNCIÓN DE ORDEN SUPERIOR DE ACUMULACIÓN/TRANSFORMACIÓN: reduce
function calcularValorInventario(lista) {
    let totalInventario = lista.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0);
    
    console.log("💰 Valor total del inventario en stock (reduce): $" + totalInventario);
    alert("El valor total de la mercadería en stock es: $" + totalInventario);
}

function agregarProducto(lista, nombreProducto) {
    if (nombreProducto.trim() === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    let existe = lista.some(
        producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    );

    if (existe) {
        alert("Ese producto ya existe.");
        return;
    }

    let precio = Number(prompt("Ingresá el precio del producto:"));
    if (!Number.isFinite(precio) || precio <= 0) {
        alert("Ingresá un precio válido mayor a cero.");
        return;
    }

    let categoria = prompt("Ingresá la categoría del producto:");
    if (categoria === null || categoria.trim() === "") {
        alert("La categoría no puede estar vacía.");
        return;
    }

    let stock = Number(prompt("Ingresá la cantidad disponible en stock:"));
    if (!Number.isInteger(stock) || stock < 0) {
        alert("El stock debe ser un número entero igual o mayor a cero.");
        return;
    }

    const nuevoProducto = new Producto(
        siguienteId,
        nombreProducto.trim(),
        precio,
        categoria.trim(),
        stock
    );

    lista.push(nuevoProducto);
    siguienteId++;

    console.log("Producto agregado:", nuevoProducto);
    alert("Producto agregado correctamente: " + nuevoProducto.nombre);
}

function destacarProducto(lista, nombreProducto) {
    if (nombreProducto.trim() === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    let existe = lista.some(
        producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    );

    if (existe) {
        alert("Ese producto ya existe.");
        return;
    }

    let precio = Number(prompt("Ingresá el precio del producto:"));
    if (!Number.isFinite(precio) || precio <= 0) {
        alert("Ingresá un precio válido mayor a cero.");
        return;
    }

    let categoria = prompt("Ingresá la categoría del producto:");
    if (categoria === null || categoria.trim() === "") {
        alert("La categoría no puede estar vacía.");
        return;
    }

    let stock = Number(prompt("Ingresá la cantidad disponible en stock:"));
    if (!Number.isInteger(stock) || stock < 0) {
        alert("El stock debe ser un número entero igual o mayor a cero.");
        return;
    }

    const productoDestacado = new Producto(
        siguienteId,
        nombreProducto.trim(),
        precio,
        categoria.trim(),
        stock
    );

    lista.unshift(productoDestacado);
    siguienteId++;

    console.log("Producto destacado:", productoDestacado);
    alert("Producto destacado correctamente: " + productoDestacado.nombre);
}

function quitarUltimoProducto(lista) {
    if (lista.length === 0) {
        alert("No hay productos para eliminar.");
        return;
    }

    let eliminado = lista.pop();

    console.log("Producto eliminado: " + eliminado.nombre);
    alert("Se eliminó el último producto: " + eliminado.nombre);
}

function quitarPrimerProducto(lista) {
    if (lista.length === 0) {
        alert("No hay productos para eliminar.");
        return;
    }

    let eliminado = lista.shift();

    console.log("Producto eliminado: " + eliminado.nombre);
    alert("Se eliminó el primer producto: " + eliminado.nombre);
}

function reemplazarProducto(lista, nombreAnterior, nombreNuevo) {
    let posicion = buscarProducto(lista, nombreAnterior);

    if (posicion === -1) {
        return;
    }

    if (nombreNuevo.trim() === "") {
        alert("El nuevo nombre no puede estar vacío.");
        return;
    }

    let productoActual = lista[posicion];

    let existe = lista.some(
        producto =>
            producto.nombre.toLowerCase() === nombreNuevo.trim().toLowerCase() &&
            producto.id !== productoActual.id
    );

    if (existe) {
        alert("Ya existe otro producto con ese nombre.");
        return;
    }

    const productoActualizado = new Producto(
        productoActual.id,
        nombreNuevo.trim(),
        productoActual.precio,
        productoActual.categoria,
        productoActual.stock
    );

    lista.splice(posicion, 1, productoActualizado);

    console.log("Producto actualizado:", productoActualizado);
    alert("Producto reemplazado correctamente por: " + productoActualizado.nombre);
}

function venderProducto(lista, nombreProducto) {
    let posicion = buscarProducto(lista, nombreProducto);

    if (posicion === -1) {
        return;
    }

    const producto = lista[posicion];

    let cantidad = Number(
        prompt("¿Cuántas unidades de " + producto.nombre + " querés vender?")
    );

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        alert("Ingresá una cantidad entera mayor a cero.");
        return;
    }

    let ventaRealizada = producto.vender(cantidad);

    if (ventaRealizada) {
        let total = producto.precio * cantidad;

        console.log("Total de la venta: $" + total);
        console.log("Stock actualizado:", producto.stock);

        alert(
            "Venta realizada correctamente.\n" +
            "Producto: " + producto.nombre +
            "\nCantidad: " + cantidad +
            "\nTotal: $" + total +
            "\nStock restante: " + producto.stock
        );
    } else {
        alert("No se pudo realizar la venta. Revisá el stock y la cantidad.");
    }
}

let continuar = true;

while (continuar) {
    let opcion = prompt(
        "===== AVX HARDWARE =====\n" +
        "1. Ver catálogo\n" +
        "2. Buscar producto por nombre\n" +
        "3. Agregar producto al final\n" +
        "4. Destacar producto al principio\n" +
        "5. Retirar último producto\n" +
        "6. Retirar primer producto\n" +
        "7. Reemplazar un producto\n" +
        "8. Vender producto\n" +
        "9. Buscar producto por ID (find)\n" +
        "10. Filtrar por categoría (filter)\n" +
        "11. Calcular valor del inventario (reduce)\n" +
        "12. Salir\n\n" +
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
            let nombreBuscado = prompt("Escribí el nombre del producto:");
            if (nombreBuscado !== null) {
                buscarProducto(productos, nombreBuscado);
            }
            break;
        }

        case "3": {
            let nuevoProducto = prompt("¿Qué producto querés agregar?");
            if (nuevoProducto !== null) {
                agregarProducto(productos, nuevoProducto);
            }
            break;
        }

        case "4": {
            let productoDestacado = prompt("¿Qué producto querés destacar?");
            if (productoDestacado !== null) {
                destacarProducto(productos, productoDestacado);
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
            let nombreAnterior = prompt("¿Qué producto querés reemplazar?");
            if (nombreAnterior === null) break;
            let nombreNuevo = prompt("¿Cuál será el nuevo nombre del producto?");
            if (nombreNuevo !== null) {
                reemplazarProducto(productos, nombreAnterior, nombreNuevo);
            }
            break;
        }

        case "8": {
            mostrarCatalogo(productos);
            let nombreVenta = prompt("¿Qué producto querés vender?");
            if (nombreVenta !== null) {
                venderProducto(productos, nombreVenta);
            }
            break;
        }

        case "9":
            buscarProductoPorId(productos); // Método find
            break;

        case "10":
            filtrarPorCategoria(productos); // Método filter
            break;

        case "11":
            calcularValorInventario(productos); // Método reduce
            break;

        case "12":
            continuar = false;
            console.log("Gracias por visitar AVX Hardware.");
            alert("Gracias por visitar AVX Hardware.");
            break;

        default:
            console.log("Opción inválida. Elegí del 1 al 12.");
            alert("Opción inválida. Elegí del 1 al 12.");
    }
}