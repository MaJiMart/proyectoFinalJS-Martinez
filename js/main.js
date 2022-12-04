/* //Primer intento:
//Saludo de bienvenida a la página Productos
const bienvenidaProductos = (nombreIngresado) => {
    alert("Bienvenida/o " + nombreIngresado + ", estas en nuestra página de productos");
}
let nombreIngresado = prompt("Hola, ¿Cómo te llamas?");
bienvenidaProductos(nombreIngresado);

//Opciones de compraE
let opcion1 = "mates";
let opcion2 = "cuencos";

//Precios
let precioMate = 3000;
let precioCuenco = 2500;

for (let i = 1; i <= 4; i++) {
    let precios = prompt("¿Querés saber los precios de...? \nMates \nCuencos");
    if (precios === "Mates") {
        alert("Los " + opcion1 + " " + "salen" + " " + "$" + precioMate);
        break;
    } else if (precios === "Cuencos") {
        alert("Los " + opcion2 + " " + "salen" + " " + "$" + precioCuenco);
        break;
    } else {
        alert("¡uups! \nPor favor indica una de las opciones anteriores para que podamos ayudarte");
    }
}  */


//Segundo intento:
let usuario = "Sofia"

function saludo() {
    let ingresar = false;

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Hola, por favor ingresa tu nombre de usuario");

        if (nombre === usuario) {
            alert("Bienvenida " + nombre + ", estas en nuestra página de productos");
            ingresar = true;
            break;
        } else {
            alert("Recuerda que para acceder a la sección de Productos debes crear un usuario e ingresar con el nombre que te has registrado")
        }
    }
    return ingresar;
}

let usuarioIn = saludo();

//Dentro de Productos
if (usuarioIn) {
    //Precios
    let precioMate = 3000;
    let precioCuenco = 5200;

    let opciones = prompt(usuario + ",\nSi querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir")

    while (opciones != "ESC") {
        switch (opciones) {
            case "MATES":
                alert("El mate personalizado sale $" + precioMate);
                break;
            case "CUENCOS":
                alert("El kit de 3 cuencos sale $" + precioCuenco);
                break;
            case "PEDIDO":
                alert("para realizar tu pedido, escribime un whatsapp al número +549381545857 indicando modelo deseado. Muchas gracias");
                break;

            default:
                alert("¡uups! \nPor favor indica una de las opciones anteriores para que podamos ayudarte");
                break;
        }
        opciones = prompt(usuario + ",\nSi querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir");
    }
} else{
    alert("Para crearte un usuario debes ingresar en...");
}
alert("Gracias por visitar nuestra web, si queres mantenerte al tanto de las novedades seguinos en nuestras redes sociales. \nQue tengas un lindo día.")