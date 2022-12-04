/* //Saludo de bienvenida a la página Productos
const bienvenida = nombreIngresado => {
    alert("Bienvenida/o " + nombreIngresado + ", estas en nuestra página de productos");
}
let nombreIngresado = prompt("Hola, ¿Cómo te llamas?");
bienvenida(nombreIngresado);

    //Precios
    let precioMate = 3000;
    let precioCuenco = 2500;

    let opciones = prompt(nombreIngresado + ",\nSi querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir")


    while (opciones != "ESC") {
        switch (opciones) {
            case "mate":
                alert("El mate personalizado sale $" + precioMate);
                break;
            case "cuencos":
                alert("El mate personalizado sale $" + precioCuenco);
                break;
            case "pedido":
                alert("para realizar tu pedido, escribime un whatsapp al número +549381545857 indicando modelo deseado. Muchas gracias");
                break;

            default:
                alert("¡uups! \nPor favor indica una de las opciones anteriores para que podamos ayudarte");
                break;
        }
        let opciones = prompt(nombreIngresado + ",\nSi querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir")
    }

alert("gracias por visitar nuestra web, si quieres mantenerte al tanto de las novedades seguinos en nuestras redes sociales.") */


//Saludo de bienvenida a la página Productos
const bienvenidaProductos = (nombreIngresado) => {
    alert("Bienvenida/o " + nombreIngresado + ", estas en nuestra página de productos");
}
let nombreIngresado = prompt("Hola, ¿Cómo te llamas?");
bienvenidaProductos(nombreIngresado);

//Opciones de compra
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
} 

