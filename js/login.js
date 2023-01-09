const email = document.querySelector ("#emailLogin"),
pass = document.querySelector ("#passLogin"),
checkbox = document.querySelector ("#remember"),
login = document.querySelector ("#btnLogin");

//Inicio de sesión
function iniciar (user){
let buscarUsuario = user.find(usuario=>{
    return usuario.emailReg == email.value && usuario.passReg == pass.value;
});

if (buscarUsuario){
    //window.location.href = "./pages/productos.html";
    window.location.assign("./pages/productos.html");
}else{
    document.querySelector ("#notfound").innerText = "El usuario no existe";
}
}

//Traer datos del Local Storage
function recoverLS (){
    let datos = JSON.parse(localStorage.getItem ("user"));
    return datos;
}

const usuariosLS = recoverLS();

//Evento
login.addEventListener("click",(e)=>{
    e.preventDefault();
    iniciar(usuariosLS)
})

