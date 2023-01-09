const userName = document.querySelector ("#campoNom"),
lastname = document.querySelector ("#campoApe"),
emailReg = document.querySelector ("#campoEmail"),
phone = document.querySelector ("#campoTel"),
town = document.querySelector ("#campoProv"),
country = document.querySelector ("#campoPais"),
passReg = document.querySelector ("#campoPass"),
register = document.querySelector ("#btnRegistro");


//let usuarios (array profe)
let user;

if (localStorage.getItem("user")){
    user=JSON.parse(localStorage.getItem("user"));
}else{
    user = []
}

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

//El siguiente array queda fuera de uso.
/* const arrayUsuarios = [];
arrayUsuarios.push(new Usuario("SOLANA", "Martinez", "algun@email", "381 6987456", "Tucumán", "Argentina", 12345));
arrayUsuarios.push(new Usuario("MAIA", "Juarez", "algun@email", "351 6877586", "Córdoba", "Argentina", 12345));
arrayUsuarios.push(new Usuario("MARCO", "Bazan", "algun@email", "011 59897586", "Buenos Aires", "Argentina", 12345));
arrayUsuarios.push(new Usuario("JULIAN", "Perez", "algun@email", "387 54936476", "Salta", "Argentina", 12345));
arrayUsuarios.push(new Usuario("ARIEL", "Díaz", "algun@email", "381 65216476", "Tucumán", "Argentina", 12345));
arrayUsuarios.push(new Usuario("ANA", "Medina", "algun@email", "261 65987476", "Mendoza", "Argentina", 12345));
arrayUsuarios.push(new Usuario("LOURDES", "Fernandez", "algun@email", "379 65981457", "Corrientes", "Argentina", 12345));
arrayUsuarios.push(new Usuario("JUAN", "Castro", "algun@email", "376 67521457", "Misiones", "Argentina", 12345));
arrayUsuarios.push(new Usuario("SOFIA", "Teran", "algun@email", "388 65326557", "Jujuy", "Argentina", 12345));
arrayUsuarios.push(new Usuario("AGUSTIN", "Marigliano", "algun@email", "385 69145557", "Santiago del Estero", "Argentina", 12345)); */

//Validar campos vacios



//Guardar usuario
function saveUser (usuario){
    return user.push(usuario)
}

//Guardar en local storage
function guardarEnStorage (elemento){
    return localStorage.setItem ("user", JSON.stringify(elemento))
}

//Evento
register.addEventListener("click",(e)=>{
    e.preventDefault();

    let newUser = new Usuario (userName.value, lastname.value, emailReg.value, phone.value, town.value, country.value, passReg.value);

    console.log(newUser);

    saveUser(newUser);
    guardarEnStorage (user);
})
