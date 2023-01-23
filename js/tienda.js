const boxMates = document.querySelector(".boxMates")
const cantidadCarrito = document.querySelector("#cantidadCarrito")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal")
const finCompra = document.querySelector("#finCompra")

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    mostrarCarrito()
})

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
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#5d8a30",
            cancelButtonColor: "#d33",
            confirmButtonText: "Seguir",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Tu pedido ha sido realizado ¡Muchas gracias!',
                    showConfirmButton: false,
                    timer: 5000
                })
                setTimeout(localStorage.clear(), 3000)
                setTimeout(window.location.reload(), 3000)
            }
        })
    }
})

//array productos
const stockProductos = [
    {
        id: 1,
        nombre: "Mate K'uychi",
        precio: 4500,
        img: "mate1-kuychi.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Mate Pullullu",
        precio: 4100,
        img: "mate2-pullullu.jpg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Mate Nuna",
        precio: 4150,
        img: "mate3-nuna.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Mate Kulli",
        precio: 3900,
        img: "mate4-kulli.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Mate Inti",
        precio: 3900,
        img: "mate5-inti.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Mate Kallpa",
        precio: 4300,
        img: "mate6-kallpa.jpg",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "Mate Thiti",
        precio: 4200,
        img: "mate7-thiti.jpg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Mate Kusiy",
        precio: 4600,
        img: "mate8-kusiy.jpeg",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "Cuencos Awki",
        precio: 5300,
        img: "cuencos.jpg",
        cantidad: 1
    },
]

let carrito = []

//Cards dinámicas
stockProductos.forEach((prod) => {
    const { id, nombre, precio, img, } = prod

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
})

//Vaciar carrito
vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    mostrarCarrito()
})

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
        const item = stockProductos.find((prod) => prod.id === id)
        carrito.push(item)
    }

    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modalBody")
    console.log(modalBody)

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

function eliminarProducto(id) {
    const productId = id
    carrito = carrito.filter((mate) => mate.id !== productId)
    mostrarCarrito()
}


function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



