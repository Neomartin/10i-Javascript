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
//


const priceInput = document.getElementById("price");
const cashHTML = document.getElementById('cash');
const tarjetaTotalHTML = document.getElementById('tarjeta-total');
const tarjetaCuotasHTML = document.getElementById('tarjeta-cuotas') 

function calcularPrecioFinal() {
    // Calcular el precio en base a un valor inicial ingresado
    const precioCosto = priceInput.valueAsNumber;
    const precioDolar = 285;
    const iva = 1.21;
    const ganancia = 1.30;
    const interesTarjeta = 1.54;


    const precioFinalContado = precioCosto * precioDolar * iva  * ganancia;

    const precioFinalTarjeta = precioFinalContado * interesTarjeta;
    const precioCuotaTarjeta12 = precioFinalTarjeta / 12;

    cashHTML.innerText = `$ ${precioFinalContado}`;
    tarjetaTotalHTML.innerHTML = `<strong>$ ${precioFinalTarjeta} </strong>`;
    tarjetaCuotasHTML.textContent = `El precio de cada cuota en ahora 12 es de $ ${precioCuotaTarjeta12}`

}

calcularPrecioFinal()