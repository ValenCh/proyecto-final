const buscar = document.getElementById("busqueda");

function busqueda(){
    let qBusco = prompt("Que quieres saber? (marca?, precio? caja de cambios?, puertas?, caballos de fuerza?, estado?)").toLowerCase().split(' ').join('');
    let busquedaUsuario;
    let resultado = [];

    
    switch(qBusco){
        case "marca":
            busquedaUsuario = prompt("Que marca de auto buscas?").toLowerCase().split(' ').join('');
            for(let i = 0; i < autos.length; i++){
                if(autos[i].marca == busquedaUsuario){
                    resultado.push(autos[i].nombre)
                }
            }
        break;

        case "precio":
            busquedaUsuario = Number(prompt("Quiero que el auto valga menos que... (el minimo es 1449000)"));
            for(let i = 0; i < autos.length; i++){
                if(autos[i].precio <= busquedaUsuario){
                    resultado.push(autos[i].nombre)
                }
            }
        break;

        case "cajadecambios":
            busquedaUsuario = prompt("Que caja quieres: manual o automatica?").toLocaleLowerCase();
            for(let i = 0; i < autos.length; i++){
                if(autos[i].cajaDeCambios == busquedaUsuario){
                    resultado.push(autos[i].nombre)
                }
            }
        break;

        case "puertas":
            busquedaUsuario = Number(prompt("Quiero que el auto tenga esta cantidad de puertas"));
            for(let i = 0; i < autos.length; i++){
                if(autos[i].puertas == busquedaUsuario){
                    resultado.push(autos[i].nombre)
                }
            }
        break;

        case "caballosdefuerza":
            let minimoOMaxiomo = prompt("Quieres buscar un minimo de cv o un maximo de cv?").toLocaleLowerCase();
            busquedaUsuario = Number(prompt(`Cuantos CV ${minimoOMaxiomo} quieres?`));
            if(minimoOMaxiomo == "minimo"){
                for(let i = 0; i < autos.length; i++){
                    if(autos[i].caballosDeFuerza >= busquedaUsuario){
                        resultado.push(autos[i].nombre)
                    }
                }
            }else if(minimoOMaxiomo == "maximo"){
                for(let i = 0; i < autos.length; i++){
                    if(autos[i].caballosDeFuerza <= busquedaUsuario){
                        resultado.push(autos[i].nombre)
                    }
                }
            }else{
                alert("Escribe solo 'minimo' o 'maxiomo'")
            }
        break;

        case "estado":
                busquedaUsuario = prompt("Quieres un auto '0 km' o un auto 'usado'?").toLowerCase().split(' ').join('');
            for(let i = 0; i < autos.length; i++){
                if(autos[i].estado == busquedaUsuario){
                    resultado.push(autos[i].nombre)
                }
            }
        break;

        default:
            alert("por favor escribe una de las caracteristicas mencionadas");
        break;
            

    }

    alert(`Los autos que cumplen esas caracteristicas son ${resultado.length}: ${resultado}`)

}

buscar.onclick = () =>{
    alert("No sabes que comprar? Busca alguna caracteristica")
    busqueda();
}