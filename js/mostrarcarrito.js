// como tenia un error cuando usaba el main en las otras paginas, decidi crear esto para mostrar el carrito y que no haya ningun error 
const todosLosAutos = document.querySelector('.autos');
let contenedorCarrito = document.querySelector('.cuerpoCarrito');
let total = document.querySelector('#total')
let comprar = [];
let precioFinal = 0;
let local;
let precioTotal;



obtenerLocalStorage();
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