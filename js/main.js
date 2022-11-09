//variables
const todosLosAutos = document.querySelector('.autos');
let contenedorCarrito = document.querySelector('.cuerpoCarrito');
let total = document.querySelector('#total')
let comprar = [];
let precioFinal = 0;
let local;
let precioTotal;

class Productos{
    constructor(id, titulo, precio, imagen, cantidad){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}

obtenerLocalStorage();
seleccionarParaCarrito();

function obtenerLocalStorage()  {
    //traigo los productos del localStorage
    local = JSON.parse(localStorage.getItem("carrito"));
    if(local == null){
        local = []
    }
    comprar = [...local];

    precioTotal = JSON.parse(localStorage.getItem("total"));
    if(precioTotal == null){
        precioTotal = 0;
    } else{
        precioFinal = precioTotal;
    }
    comprar = [...local];

    loadHTML();
    total.innerHTML = `Total: $${precioTotal}`;
}

function seleccionarParaCarrito(){
    todosLosAutos.addEventListener('click', (e) =>{
        e.preventDefault();
        if(e.target.classList.contains('carritoDeCompra')){
            const seleccionarProducto = e.target.parentElement.parentElement.parentElement;
            leerElContenido(seleccionarProducto);
        }
    })

    contenedorCarrito.addEventListener('click', eliminarProducto)
}


function eliminarProducto(e){
    if(e.target.classList.contains('eliminarX')){
        const eliminarId = e.target.getAttribute('data-id');


        comprar.forEach(value =>{
            if(value.id == eliminarId){
                precioFinal = precioFinal - Number(value.precio); 
            }
        })
        
       comprar = comprar.filter(product => product.id !== eliminarId);
    }
    localStorage.clear();
    localStorage.setItem("total", JSON.stringify(precioFinal))
    localStorage.setItem("carrito", JSON.stringify(comprar))
    obtenerLocalStorage();
};


function leerElContenido(product) {
        let id = product.querySelector('.carritoDeCompra').getAttribute('data-id');
        let titulo = product.querySelector('div div h3').textContent;
        let precio = Number(product.querySelector('.precio').textContent);
        let imagen = product.querySelector('div img').src;
        let cantidad = 1;
        
        let nuevoProducto = new Productos(id, titulo, precio, imagen, cantidad);
        precioFinal = precioFinal + precio;
    const existe = comprar.some(product => product.id === nuevoProducto.id);
    if(existe){
        const producto = comprar.map(product => {
            if(product.id === nuevoProducto.id){
                product.cantidad++;
                product.precio = product.precio + precio;
                return product;
            } else{
                return product;
            }
        })

        comprar = [...producto]
    } else{
        comprar = [...comprar, nuevoProducto]
    }

    localStorage.clear();
    localStorage.setItem("total", JSON.stringify(precioFinal))
    localStorage.setItem("carrito", JSON.stringify(comprar))
    obtenerLocalStorage();

}

function loadHTML(){
            clearHtml();
    comprar.forEach(product => {
        const {id, titulo, precio,  imagen, cantidad } = product;
        const row = document.createElement('div');
        row.classList.add('item')
        row.innerHTML = `
        <div class="card mb-3" style="max-width: 770px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${imagen}" class="img-fluid rounded-start" alt="${titulo}">
                </div>
                <div class="col-md-8">
                    <div class="d-flex">
                        <div class="p-2 w-100">
                            <div class="card-body">
                                <h5 class="card-title">${titulo}</h5>
                                <p class="card-text">precio: ${precio}</p>
                                <p class="card-text"><small class="text-muted">cantidad: ${cantidad}</small></p>
                            </div>
                        </div>
                        <div class="p-2 flex-shrink-1">
                            <span class="eliminarX" data-id="${id}">X</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        `;

        contenedorCarrito.appendChild(row);
        total.innerHTML = `Total: $${precioTotal}`;
    });
}

function clearHtml(){
    contenedorCarrito.innerHTML = '';
}

const finalizarCompra = document.querySelector('.finalizarCompra');
function graciasPorSuCompra(){
    finalizarCompra.addEventListener("click", ()=>{
        alert(`Gracias por su compra, el total es de $${precioFinal}`)
        localStorage.clear();
        obtenerLocalStorage();
    })
}
graciasPorSuCompra();
