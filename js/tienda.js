document.addEventListener("DOMContentLoaded", fetchAPI)

const boxMates = document.querySelector(".boxMates")
const cantidadCarrito = document.querySelector("#cantidadCarrito")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal")
const finCompra = document.querySelector("#finCompra")

let carrito = []
let storagedData = []

//Consumo de API local
async function fetchAPI() {
    const url = "../data/products.json"
    try {
        const resultado = await fetch(url);
        const data = await resultado.json();
        storagedData = data

        //Cards dinámicas
        data.forEach((prod) => {
            const { id, nombre, precio, img } = prod
            boxMates.innerHTML += `<div class="">
        <div class="cardMates">
            <img src="../assets/img/${img}">
            <span class="nombreMate">${nombre}</span>
            <div class="precioMate">
            <p>$${precio}</p>
            </div>
            <div>
            <button onclick="agregarCarrito(${id})" class="btnAddCart">Agregar a carrito</button>
            </div>
        </div>
    </div>`
        });

        
    } catch (error) {
        console.log(error);
    }
}

//Agregar carrito
function agregarCarrito(id) {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = storagedData.find((prod) => prod.id === id)
        carrito.push(item)
    }

    mostrarCarrito()
}

//Vaciar carrito
vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    mostrarCarrito()
})

//Modal carrito
const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modalBody")

    modalBody.innerHTML = ""
    carrito.forEach((prod) => {
        const { id, nombre, precio, img, cantidad } = prod
        modalBody.innerHTML += `<div class="resumen">
    <img src="../assets/img/${img}">
    <div><p>${nombre}</p>
    <p>$ ${precio}</p>
    <div class="canti">
    <p>Cantidad: ${cantidad}</p>
    </div>
    <p>subtotal: $ ${cantidad * precio}</p>
    <button onclick ="eliminarProducto(${id})" id="eliminar"><i class="fa-solid fa-2x fa-trash-can"></i></button>
    </div>
    </div>`
    })

    if (carrito.length === 0) {
        modalBody.innerHTML = `
<p class="vacio">No agregaste nada al carrito</p>
`
    }

    cantidadCarrito.textContent = carrito.length

    precioTotal.innerHTML = "Total: $" + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

    guardarStorage()
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    mostrarCarrito()
})

//Finalizar compra
finCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tu carrito esta vacio',
        })
    } else {
        Swal.fire({
            text: "Por favor, continúa para realizar el pago.",
            icon: "warning",
            background:"#EBDBC9",
            showCancelButton: true,
            confirmButtonColor: "#345911",
            cancelButtonColor: "#B82312",
            confirmButtonText: "Seguir",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    background:"#EBDBC9",
                    icon: 'success',
                    title: 'Tu pedido ha sido realizado ¡Muchas gracias!',
                    showConfirmButton: false,
                    timer: 2000,
                })
                    localStorage.clear();
                    window.location.reload()
            }
        })
    }
})

//Eliminar producto del carrito
function eliminarProducto(id) {
    const productId = id
    carrito = carrito.filter((mate) => mate.id !== productId)
    mostrarCarrito()
}

//Guardar carrito en localStorage
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



