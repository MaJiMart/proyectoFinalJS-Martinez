const email = document.querySelector ("#emailLogin"),
passLogin = document.querySelector ("#passLogin"),
checkbox = document.querySelector ("#remember"),
login = document.querySelector ("#btnLogin");

console.log("hello1");

//Inicio de sesión
function iniciar (user){
    console.log(user);
let buscarUsuarioMail = user.some(
    usuario=> usuario.emailReg == email.value);
let buscarUsuarioPass = user.some(
    usuario=> usuario.passReg == passLogin.value);

    console.log(buscarUsuarioMail);
    console.log(buscarUsuarioPass);
    
if (buscarUsuarioMail && buscarUsuarioPass){
    window.location.href = "./pages/productos.html";
    //window.location.assign("./pages/productos.html");
}else{
    document.querySelector ("#notfound").innerText = "El usuario no existe";
}};

/* function iniciar (user){
    let buscarUsuario = user.find(usuario=>{
        return usuario.emailReg == email.value && usuario.passReg == pass.value;
    });
    
    if (buscarUsuario){
        //window.location.href = "./pages/productos.html";
        window.location.assign("./pages/productos.html");
    }else{
        document.querySelector ("#notfound").innerText = "El usuario no existe";
    }
    } */

console.log("hello2");

//Traer datos del Local Storage
function recoverLS (){
    let datos = JSON.parse(localStorage.getItem ("user"));
    return datos;
};

const usuariosLS = recoverLS();

console.log("hello3");

//Evento
login.addEventListener("click",(e)=>{
    e.preventDefault();
    iniciar(usuariosLS)
});

console.log("hello4");

