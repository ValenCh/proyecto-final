const comentarios = document.querySelector(".usuarios")



const boton = document.querySelector(".obtenerDatos1");
const mostrarMas = document.querySelector(".obtenerDatos2")
boton.onclick = () =>{
    comentarios.innerHTML = ``;
    obtenerDatosDeUsuario()
    mostrarMas.removeAttribute("style")
}

mostrarMas.onclick = () =>{
    obtenerDatosDeUsuario()
}

const obtenerDatosDeUsuario = () =>{
    try{
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(result => {
                let data = result.results;
                data.forEach(user => {
                    const row = document.createElement('div');
                    row.classList.add('item')
                    row.innerHTML = `
                    <div class="card mb-3" style="max-width: 770px;  background: #eeeeee;
                    background: linear-gradient(60deg, #eeeeee 0%, #afafaf 60%);">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${user.picture.large}" class="img-fluid rounded-start" alt="${user.name.first}">
                            </div>
                            <div class="col-md-8">
                                <div class="d-flex">
                                    <div class="p-2 w-100">
                                        <div class="card-body">
                                            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                            <p>Gracias por contar con nosotros</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    `;
            
                    comentarios.appendChild(row);
                
                });
            })
    } catch{
        console.log("Error")
    }

}