const autos = [
    {id: 0, nombre: "Fiat Cronos", marca: "fiat", precio: 3177000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 130, estado: "0km", cantidad: 2},
    {id: 1, nombre: "Toyota Hilux", marca: "toyota", precio: 7777000, cajaDeCambios: "automatica", puertas: 4, caballosDeFuerza: 180, estado: "0km", cantidad: 1},
    {id: 2, nombre: "Corolla GR-Sport", marca: "toyota", precio: 6647000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 170, estado: "0km", cantidad: 1},
    {id: 3, nombre: "Toyota Yairis", marca: "toyota", precio: 3432000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 125, estado: "0km", cantidad: 2},
    {id: 4, nombre: "Renault Sandero", marca: "renault", precio: 3242000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 145, estado: "0km", cantidad: 3},
    {id: 5, nombre: "Ford Ranger", marca: "ford", precio: 6137000, cajaDeCambios: "manual", puertas: 4, caballosDeFuerza: 160, estado: "0km", cantidad: 2},
    {id: 6, nombre: "Gol Trend", marca: "volkswagen", precio: 2849900, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 101, estado: "usado", cantidad: 1},
    {id: 7, nombre: "Fiat Palio", marca: "fiat", precio: 1980000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 70, estado: "usado", cantidad: 1},
    {id: 8, nombre: "Ford Fiesta", marca: "ford", precio: 3699000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 120, estado: "usado", cantidad: 2},
    {id: 9, nombre: "Renault Clio", marca: "renault", precio:  1650000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 85, estado: "usado", cantidad: 1},
    {id: 10, nombre: "Chevrolet Corsa Classic", marca: "chevrolet", precio: 1449000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 92, estado: "usado", cantidad: 1},
    {id: 11, nombre: "Mercedes-Benz GLA-Class", marca: "mercedesbenz", precio: 3699000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 136, estado: "usado", cantidad: 1}
]

const carrito = document.getElementById("carrito");
const buscar = document.getElementById("busqueda");

function carritoDeCompra(){
   
    let nombre = prompt("Cual es su nombre?");
    let apellido = prompt("Cual es su apellido?");
    let numeroDeTelefono = Number(prompt("Ingrese su numero de telefono"));
    let validar = isNaN(numeroDeTelefono);
    while (validar){
     numeroDeTelefono = Number(prompt("Porfavor ingrese su numero de telefono"));
     validar = isNaN(numeroDeTelefono);
    }
    let password = prompt("Registre su contraseña");
    let passworIngresada = prompt("Ingrese su contraseña");
    for(let i = 3; i > 0; i--){
         if(password === passworIngresada){
             break;
         } else{
             passworIngresada = prompt(`Contraseña incorrecta, te quedan ${i} intentos`);
         }
    }
     
    let ingreseAuto;
    let auto;
    let n = "no";
    let x;
 
    while(n != "si"){
     ingreseAuto = prompt("Ingrese el auto que quiera reservar (copie y pegue el nombre del auto desde nuestro catalogo)");
     auto = ingreseAuto.toLowerCase().split(' ').join('');
 
     switch(auto){
          case "fiatcronos":
         x = autos[0].id;
         n = prompt(`El Fiat Cronos vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "toyotahilux":
         x = autos[1].id;
         n = prompt(`El Toyota Hilux vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "corollagr-sport":
         x = autos[2].id;
         n = prompt(`El Corolla GR-Sport vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "toyotayaris":
         x = autos[3].id;
         n = prompt(`El Toyota Yaris vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "renaultsandero":
         x = autos[4].id;
         n = prompt(`El Renault Sandero vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "fordranger":
         x = autos[5].id;
         n = prompt(`El Ford Ranger vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
 
         case "vwgolytrend":
         x = autos[6].id;
         n = prompt(`El VW Gol y Trend vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
 
         case "fiatpalio":
         x = autos[7].id;
         n = prompt(`El Fiat Palio vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "fordfiesta":
         x = autos[8].id;
         n = prompt(`El Ford Fiesta vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "renaultclio":
         x = autos[9].id;
         n = prompt(`El Renault Clio $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "chev.corsayclassic":
         x = autos[10].id;
         n = prompt(`El Chev. Corsa y Classic vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "mercedes-benzgla-class":
         x = autos[11].id;
         n = prompt(`El Mercedes-Benz GLA-Class vale $${autos[x].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         default:
         alert("No tenemos ese auto");
         break;
     }
    }
 
    const descuento = (a,b) => {
     let x = a * b/100;
     return a - x;
     } 
    const codigoDeDescuento = "descuento10%";
    const codigoDeDescuento2 = "descuento5%";
    let pedirDescuento = prompt("Si tiene ingrese su codigo de descuento").toLowerCase().split(' ').join('');
    
    if(pedirDescuento == codigoDeDescuento){
     autos[x].precio =  descuento(autos[x].precio, 10);
    } else if(pedirDescuento == codigoDeDescuento2){
     autos[x].precio = descuento(autos[x].precio, 5);
    }else{
     alert("puedes conseguir el descuento viendo el codigo 😁");
    }
 
    alert(`${nombre} ${apellido} usted ha seleccionado el ${autos[x].nombre}, cuyo precio final es de ${autos[x].precio}. Nosotros nos comunicaremos al ${numeroDeTelefono} para terminar con los ultimos detalles de su compra. ¡Gracias por elegirnos!`);
    
    
}

carrito.onclick = () =>{
    carritoDeCompra();
}


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