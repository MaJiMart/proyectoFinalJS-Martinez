function saludo() {
    let ingresar = false;

    for (let i = 1; i <= 3; i++) {
        let ingNombre = prompt("Hola, por favor ingresa tu nombre de usuario");
        if (userName = arrayUsuarios.find(arrayUsuarios => arrayUsuarios.nombre === ingNombre.toUpperCase())) {
            alert("Bienvenida/o " + ingNombre + ", estas en nuestra página de productos");
            ingresar = true;
            break;
        } else {
            alert("Recuerda que para acceder a la sección de Productos debes crear un usuario e ingresar con el nombre que te has registrado");
            break;
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

    let opciones = prompt("Si querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir");

    while (opciones.toUpperCase() != "ESC") {
        switch (opciones.toUpperCase()) {
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
        opciones = prompt("Si querés saber el precio de los mates ingresa: MATES \nSi querés saber el precio de los cuencos ingresa: CUENCOS \nSi querés realizar un pedido, ingresa: PEDIDO \nDe lo contrario ingresa ESC para salir");
    }
} else {
    alert("Próximamente habilitaremos la sección para crear tu usuario.");
    
}

alert("Gracias por visitar nuestra web, si queres mantenerte al tanto de las novedades seguinos en nuestras redes sociales. \nQue tengas un lindo día.");
