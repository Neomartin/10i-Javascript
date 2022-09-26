
// console.dir(fechaActual)
const messageHTML = document.getElementById('message')


// Definimos la función cuyo especifique la tarea que va a realizar
function decirFechaActual() {
    //Las acciones que se van a realizar al invocar o llamar a esta función
    const fechaActual = new Date();
    // console.log(fechaActual);

    let diaMes = fechaActual.getDate();
    if(diaMes < 10) {
        diaMes = '0' + diaMes
    }

    const año = fechaActual.getFullYear();


    let mes = fechaActual.getMonth() + 1;
    if(mes < 10) {
        mes = '0' + mes
    }

    let hora = fechaActual.getHours();
    if(hora < 10) {
        hora = '0' + hora
    }

    let minutos = fechaActual.getMinutes();
    if(minutos < 10) {
        minutos = '0' + minutos
    }

    let seg = fechaActual.getSeconds();
    if(seg < 10) { 
        seg = '0' + seg 
    }

    const fechaCompleta = `${diaMes}/${mes}/${año} - ${hora}:${minutos}:${seg}`

    console.log(`${diaMes}/${mes}/${año} - ${hora}:${minutos}:${seg}`);

    messageHTML.innerText = fechaCompleta;

}

decirFechaActual()


// const precioCM = 3;

// function calcularPerimetroDelCirculo(diametro) {
//     const pi = 3.1415
//     const perimetro = diametro * pi;
//     console.log(`El perimetro del circulo es: ${perimetro}`);
//     const costoCirculo = perimetro * precioCM;
//     console.log(`El precio a abonar es de $ ${costoCirculo}`)
// }

// calcularPerimetroDelCirculo(10);


// calcularPerimetroDelCirculo(120);



