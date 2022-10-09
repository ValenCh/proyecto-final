const autos = [
    {id: 0, nombre: "Fiat Cronos", marca: "Fiat", precio: 3177000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 130, estado: "0 km" },
    {id: 1, nombre: "Toyota Hilux", marca: "Toyota", precio: 7777000, cajaDeCambios: "automatica", puertas: 4, caballosDeFuerza: 180, estado: "0 km" },
    {id: 2, nombre: "Corolla GR-Sport", marca: "Toyota", precio: 6647000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 170, estado: "0 km" },
    {id: 3, nombre: "Toyota Yairis", marca: "Toyota", precio: 3432000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 125, estado: "0 km" },
    {id: 4, nombre: "Renault Sandero", marca: "Renault", precio: 3242000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 145, estado: "0 km" },
    {id: 5, nombre: "Ford Ranger", marca: "Ford", precio: 6137000, cajaDeCambios: "manual", puertas: 4, caballosDeFuerza: 160, estado: "0 km" },
    {id: 6, nombre: "Gol Trend", marca: "Volkswagen", precio: 2849900, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 101, estado: "usado" },
    {id: 7, nombre: "Fiat Palio", marca: "Fiat", precio: 1980000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 70, estado: "usado" },
    {id: 8, nombre: "Ford Fiesta", marca: "Ford", precio: 3699000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 120, estado: "usado" },
    {id: 9, nombre: "Renault Clio", marca: "Renault", precio:  1650000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 85, estado: "usado" },
    {id: 10, nombre: "Chevrolet Corsa Classic", marca: "Chevrolet", precio: 1449000, cajaDeCambios: "manual", puertas: 5, caballosDeFuerza: 92, estado: "usado" },
    {id: 11, nombre: "Mercedes-Benz GLA-Class", marca: "Mercedes-Benz", precio: 3699000, cajaDeCambios: "automatica", puertas: 5, caballosDeFuerza: 136, estado: "usado" }
]

const carrito = document.getElementById("carrito")


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
    let precioAuto;
 
    while(n != "si"){
     ingreseAuto = prompt("Ingrese el auto que quiera reservar (copie y pegue el nombre del auto desde nuestro catalogo)");
     auto = ingreseAuto.toLowerCase().split(' ').join('');
 
     switch(auto){
          case "fiatcronos":
            aElegido = autos[0];
         n = prompt(`El Fiat Cronos vale $${autos[0].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "toyotahilux":
            aElegido = autos[1];
         n = prompt(`El Toyota Hilux vale $${autos[1].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "corollagr-sport":
            aElegido = autos[2];
         n = prompt(`El Corolla GR-Sport vale $${autos[2].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "toyotayaris":
            aElegido = autos[3];
         n = prompt(`El Toyota Yaris vale $${autos[3].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "renaultsandero":
            aElegido = autos[4];
         n = prompt(`El Renault Sandero vale $${autos[4].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "fordranger":
            aElegido = autos[5];
         n = prompt(`El Ford Ranger vale $${autos[5].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
 
         case "vwgolytrend":
            aElegido = autos[6];
         n = prompt(`El VW Gol y Trend vale $${autos[6].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
 
         case "fiatpalio":
            aElegido = autos[7];
         n = prompt(`El Fiat Palio vale $${autos[7].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "fordfiesta":
            aElegido = autos[8];
         n = prompt(`El Ford Fiesta vale $${autos[8].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "renaultclio":
            aElegido = autos[9];
         n = prompt(`El Renault Clio $${autos[9].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "chev.corsayclassic":
            aElegido = autos[10];
         n = prompt(`El Chev. Corsa y Classic vale $${autos[10].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
         break;
         
         case "mercedes-benzgla-class":
            aElegido = autos[11];
         n = prompt(`El Mercedes-Benz GLA-Class vale $${autos[11].precio}, para reservarlo ponga 'si', sino ingrese 'no' `);
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
     aElegido.precio =  descuento(aElegido.precio, 10);
    } else if(pedirDescuento == codigoDeDescuento2){
     precioAuto = descuento(aElegido.precio, 5);
    }else{
     alert("puedes conseguir el descuento viendo el codigo 😁");
    }
 
    alert(`${nombre} ${apellido} usted ha seleccionado el ${aElegido.nombre}, cuyo precio final es de ${aElegido.precio}. Nosotros nos comunicaremos al ${numeroDeTelefono} para terminar con los ultimos detalles de su compra. ¡Gracias por elegirnos!`);
    
    
}

carrito.onclick = () => {
    carritoDeCompra();
}