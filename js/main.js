class Usuario {
    constructor(nombre, apellido, email, telefono, provincia, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.provincia = provincia;
        this.pais = pais;
        this.id = arrayUsuarios.length + 1
    }
}

const arrayUsuarios = [];
arrayUsuarios.push(new Usuario("SOLANA", "Martinez", "algun@email", "381 6987456", "Tucumán", "Argentina"));
arrayUsuarios.push(new Usuario("MAIA", "Juarez", "algun@email", "351 6877586", "Córdoba", "Argentina"));
arrayUsuarios.push(new Usuario("MARCO", "Bazan", "algun@email", "011 59897586", "Buenos Aires", "Argentina"));
arrayUsuarios.push(new Usuario("JULIAN", "Perez", "algun@email", "387 54936476", "Salta", "Argentina"));
arrayUsuarios.push(new Usuario("ARIEL", "Díaz", "algun@email", "381 65216476", "Tucumán", "Argentina"));
arrayUsuarios.push(new Usuario("ANA", "Medina", "algun@email", "261 65987476", "Mendoza", "Argentina"));
arrayUsuarios.push(new Usuario("LOURDES", "Fernandez", "algun@email", "379 65981457", "Corrientes", "Argentina"));
arrayUsuarios.push(new Usuario("JUAN", "Castro", "algun@email", "376 67521457", "Misiones", "Argentina"));
arrayUsuarios.push(new Usuario("SOFIA", "Teran", "algun@email", "388 65326557", "Jujuy", "Argentina"));
arrayUsuarios.push(new Usuario("AGUSTIN", "Marigliano", "algun@email", "385 69145557", "Santiago del Estero", "Argentina"));



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
    alert("Para crearte un usuario debes ingresar en...");
}
alert("Gracias por visitar nuestra web, si queres mantenerte al tanto de las novedades seguinos en nuestras redes sociales. \nQue tengas un lindo día.");