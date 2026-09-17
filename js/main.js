console.log("¡JavaScript está funcionando!");
let nombre = prompt("¿Cuál es tu nombre?");

let ciudad = prompt("¿En qué ciudad vivís?");

let anioDeNacimiento = parseInt(prompt("¿En qué año naciste?"));

const anioActual = 2026;

let edad = anioActual - anioDeNacimiento;

function calcularPrecio(edad) {
    if (edad < 18) {
        let precio = 8000;
        return precio;
    } else {
        let precio = 12000;
        return precio;
    }
}

function mostrarPrecio(precio) {
    console.log("El precio de la entrada es: $" + precio);
}

let precio = calcularPrecio(edad);

mostrarPrecio(precio);

function clasificarEdad(edad) {
    if (edad < 18) {
        return "Sos menor de edad.";
    } else {
        return "Sos mayor de edad.";
    }
}

let mostrarClasificacion = function(edad) {
    return clasificarEdad(edad);
};

let clasificacionFinal = mostrarClasificacion(edad);

console.log(clasificacionFinal);

let crearMensaje = (nombre, ciudad, edad) => {
    let mensaje = "Hola " + nombre + ", vivis en " + ciudad + " y tenes " + edad + " años.";
    return mensaje;
};

let mensajefinal = crearMensaje(nombre, ciudad, edad);

console.log(mensajefinal);

let continuar = true;

while (continuar) {
    const respuesta = prompt("Querés continuar? si/no");

    if (respuesta === "no") {
        continuar = false;
    } else {
        console.log("seguimos...");
    }
}