const userName = document.querySelector("#campoNom"),
    lastname = document.querySelector("#campoApe"),
    emailReg = document.querySelector("#campoEmail"),
    phone = document.querySelector("#campoTel"),
    town = document.querySelector("#campoProv"),
    country = document.querySelector("#campoPais"),
    passReg = document.querySelector("#campoPass"),
    register = document.querySelector("#btnRegistro");

let user;

//if/else con operadores avanzados
localStorage.getItem("user") ? user = JSON.parse(localStorage.getItem("user")) : user = [];

//Constructor de usuario
class Usuario {
    constructor(nombre, apellido, email, telefono, provincia, pais, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.provincia = provincia;
        this.pais = pais;
        this.contraseña = contraseña;
        this.id = user.length + 1;
    }
}

//Guardar usuario
function saveUser(usuario) {
    return user.push(usuario)
}

//Guardar en local storage
function guardarEnStorage(elemento) {
    return localStorage.setItem("user", JSON.stringify(elemento))
}

//Evento
register.addEventListener("click", (e) => {
    e.preventDefault();

    let newUser = new Usuario(userName.value, lastname.value, emailReg.value, phone.value, town.value, country.value, passReg.value);

    console.log(newUser);

    saveUser(newUser);
    guardarEnStorage(user);

    document.querySelector("#exitoso").innerText = "¡Gracias por haberte registrado!"
});