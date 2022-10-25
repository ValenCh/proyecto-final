//variables
const todosLosAutos = document.querySelector('.autos');
let contenedorCarrito = document.querySelector('.cuerpoCarrito');
let total = document.querySelector('#total')
let comprar = [];
let precioFinal = 0;
let local;


seleccionarParaCarrito();

function seleccionarParaCarrito(){
    todosLosAutos.addEventListener('click', (e) =>{
        e.preventDefault();
        if(e.target.classList.contains('carritoDeCompra')){
            const seleccionarProducto = e.target.parentElement.parentElement.parentElement;
            leerElContenido(seleccionarProducto);
        }
        localStorage.setItem("carrito", JSON.stringify(comprar))
        function obtenerLocalStorage(){
            local = JSON.parse(localStorage.getItem("carrito"));
        }
        obtenerLocalStorage();
    })

    contenedorCarrito.addEventListener('click', eliminarProducto)
}

function eliminarProducto(e){
    if(e.target.classList.contains('eliminarX')){
        const eliminarId = e.target.getAttribute('data-id');

        comprar.forEach(value =>{
            if(value.id == eliminarId){
                let reducirPrecio = Number(value.precio) * Number(value.cantidad);
                precioFinal = precioFinal - reducirPrecio;
            }
        })
        
       comprar = comprar.filter(product => product.id !== eliminarId);
    }
   
    loadHTML();
};

function leerElContenido(product) {
    const infoProducto = {
        imagen: product.querySelector('div img').src,
        titulo: product.querySelector('div div h3').textContent,
        precio: product.querySelector('.precio').textContent,
        id: product.querySelector('.carritoDeCompra').getAttribute('data-id'),
        cantidad: 1

    }

    precioFinal = parseFloat(precioFinal) + parseFloat(infoProducto.precio);

    const existe = comprar.some(product => product.id === infoProducto.id);
    if(existe){
        const producto = comprar.map(product => {
            if(product.id === infoProducto.id){
                product.cantidad++;
                return product;
            } else{
                return product;
            }
        })

        comprar = [...producto]
    } else{
        comprar = [...comprar, infoProducto]
    }
    loadHTML();


}

function loadHTML(){
            clearHtml();
    comprar.forEach(product => {
        const {imagen, titulo, precio, cantidad, id} = product;


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
        total.innerHTML = `Total: $${precioFinal}`;
    });
}

function clearHtml(){
    contenedorCarrito.innerHTML = '';
}

const finalizarCompra = document.querySelector('.finalizarCompra');
function graciasPorSuCompra(){
    finalizarCompra.addEventListener("click", ()=>{
        alert(`Gracias por su compra, el total es de $${precioFinal}`)
        contenedorCarrito.remove(contenedorCarrito);
        precioFinal = 0;
        total.innerHTML = `Total: $${precioFinal}`;
    })
}
graciasPorSuCompra();