const formulario = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input");

const userName = document.querySelector("#campoNom"),
    lastname = document.querySelector("#campoApe"),
    emailReg = document.querySelector("#campoEmail"),
    phone = document.querySelector("#campoTel"),
    passReg = document.querySelector("#campoPass"),
    register = document.querySelector("#btnRegistro"),
    form = document.querySelector("#form");

let user;

//Expresiones para validación
const expresiones = {
    campoNom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    campoApe: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    campoPass: /^.{4,12}$/, // 4 a 12 digitos.
    campoEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    campoTel: /^\d{1,14}$/, // 7 a 14 numeros
}

const campos = {
    campoNom: false,
    campoApe: false,
    campoPass: false,
    campoEmail: false,
    campoTel: false
}

//if/else con operadores avanzados
localStorage.getItem("user") ? user = JSON.parse(localStorage.getItem("user")) : user = [];

//Constructor de usuario
class Usuario {
    constructor(nombre, apellido, email, telefono, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
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

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "campoNom":
            validarCampo(expresiones.campoNom, e.target, "Nom");
            break;
        case "campoApe":
            validarCampo(expresiones.campoApe, e.target, "Ape");
            break;
        case "campoEmail":
            validarCampo(expresiones.campoEmail, e.target, "Email");
            break;
        case "campoTel":
            validarCampo(expresiones.campoTel, e.target, "Tel");
            break;
        case "campoPass":
            validarCampo(expresiones.campoPass, e.target, "Pass");
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo${campo}`).classList.remove("formControlError")
        document.getElementById(`grupo${campo}`).classList.add("formControlSuccess")
        campos[`campo${campo}`] = true;
    } else {
        document.getElementById(`grupo${campo}`).classList.add("formControlError")
        document.getElementById(`grupo${campo}`).classList.remove("formControlSuccess")
        campos[`campo${campo}`] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

register.addEventListener("click", (e) => {
    e.preventDefault();

    if (campos.campoEmail && campos.campoPass) {

        let newUser = new Usuario(userName.value, lastname.value, emailReg.value, phone.value, passReg.value);

        saveUser(newUser);

        guardarEnStorage(user);

        Swal.fire({
            background:"#EBDBC9",
            icon: 'success',
            title: '¡Gracias por haberte registrado!',
            showConfirmButton: false,
            timer: 2000,
        })

        form.reset()
        

    } else {
        document.querySelector("#ops").innerText = "Ooops! Por favor completa el formulario correctamente"
    }
});
