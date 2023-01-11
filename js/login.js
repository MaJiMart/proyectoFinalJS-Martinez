const emailLogin = document.querySelector("#emailLogin"),
    passLogin = document.querySelector("#passLogin"),
    checkbox = document.querySelector("#remember"),
    login = document.querySelector("#btnLogin");

//Inicio de sesión
function iniciar(user) {
    console.log(user)
    let buscarUsuario = user.find(usuario => {
        return usuario.email == emailLogin.value && usuario.contraseña == passLogin.value;
    });

    //if/else con operadores avanzados
buscarUsuario ? window.location.assign("./pages/productos.html") : document.querySelector("#notfound").innerText = "El usuario no existe";
};


//Traer datos del Local Storage
function recoverLS() {
    let datos = JSON.parse(localStorage.getItem("user"));
    return datos;
};

const usuariosLS = recoverLS();

//Evento
login.addEventListener("click", (e) => {
    e.preventDefault();
    iniciar(usuariosLS)
});