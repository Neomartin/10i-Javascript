// * Darle al usuario la forma de ingresar el precio
// * Generar el disparador de el calculo
// * Obtener el elmento del Documento
// * Obtener el valor de el input
// * Calcular el precio del producto en pesos
// * Multiplicar el precio de costo por el iva
// * Calcular precio final con nuestra ganancia
// * Calcular precio final con tarjeta
// creamos un div para insertar precio contado
// creamos un div para insertar precio tarjeta y cuotas
// Una vez obtenido insertarlo en el Document HTML


const priceInput = document.getElementById("price");
const cashHTML = document.getElementById('cash');
const tarjetaTotalHTML = document.getElementById('tarjeta-total');
const tarjetaCuotasHTML = document.getElementById('tarjeta-cuotas') 

function calcularPrecios() {
    // Calcular el precio en base a un valor inicial ingresado
    const precioCosto = priceInput.valueAsNumber; //NaN
    if(precioCosto && precioCosto > 0) {
        const precioFinalContado = calcularPrecioContado(precioCosto);
        cashHTML.innerText = `$ ${precioFinalContado}`;
        calcularPrecioTarjeta(precioFinalContado);
    } else {
        alert(`El precio costo no es correcto`)
    }
}

function calcularPrecioContado(costo) {
    const precioDolar = 285;
    const iva = 1.25;
    const ganancia = 1.30;
    const precioFinalContado = Math.round(costo * precioDolar * iva  * ganancia);
    return precioFinalContado
}

function calcularPrecioTarjeta(precioRecibido)  {
    const interesTarjeta = 1.54;
    const precioFinalTarjeta = Math.round(precioRecibido * interesTarjeta);
    tarjetaTotalHTML.innerHTML = `<strong>$ ${precioFinalTarjeta} </strong>`;
    calcularPrecio12Cuotas(precioFinalTarjeta);
}

function calcularPrecio12Cuotas(precioTarjetaRecibido) {
    const precioCuotaTarjeta12 = Math.round(precioTarjetaRecibido / 12);
    tarjetaCuotasHTML.textContent = `El precio de cada cuota en ahora 12 es de $ ${precioCuotaTarjeta12}`
}

const miFuncionComoConstante = function() {
    console.log(`Hola desde funci'on como constante`)
}

miFuncionComoConstante()

const arrowFunction = () => {
    console.log(`Hola desde arrow funcion`)
}

arrowFunction()