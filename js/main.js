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
            precioAuto = 2600000;
        n = prompt(`El Fiat Cronos vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "toyotahilux":
            precioAuto = 3200000;
        n = prompt(`El Toyota Hilux vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "corollagr-sport":
            precioAuto = 2700000;
        n = prompt(`El Corolla GR-Sport vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "toyotayaris":
            precioAuto = 2300000;
        n = prompt(`El Toyota Yaris vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "renaultsandero":
            precioAuto = 2000000;
        n = prompt(`El Renault Sandero vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "fordranger":
            precioAuto = 3300000;
        n = prompt(`El Ford Ranger vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;

        case "vwgolytrend":
            precioAuto = 1300000;
        n = prompt(`El VW Gol y Trend vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;

        case "fiatpalio":
            precioAuto = 1200000;
        n = prompt(`El Fiat Palio vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "fordfiesta":
            precioAuto = 1400000;
        n = prompt(`El Ford Fiesta vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "renaultclio":
            precioAuto = 1600000;
        n = prompt(`El Renault Clio $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "chev.corsayclassic":
            precioAuto = 1300000;
        n = prompt(`El Chev. Corsa y Classic vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
        break;
        
        case "mercedes-benzgla-class":
            precioAuto = 1550000;
        n = prompt(`El Mercedes-Benz GLA-Class vale $${precioAuto}, para reservarlo ponga 'si', sino ingrese 'no' `);
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
    precioAuto =  descuento(precioAuto, 10);
   } else if(pedirDescuento == codigoDeDescuento2){
    precioAuto = descuento(precioAuto, 5);
   }else{
    alert("puedes conseguir el descuento viendo el codigo 😁");
   }

   alert(`${nombre} ${apellido} usted ha seleccionado el ${ingreseAuto}, cuyo precio final es de ${precioAuto}. Nosotros nos comunicaremos al ${numeroDeTelefono} para terminar con los ultimos detalles de su compra. ¡Gracias por elegirnos!`);
   
   
}