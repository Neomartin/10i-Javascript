// Debo averiguar la edad, tiene que un numero
// Debo evaluar segun la edad que importe debe abonar
    // - menos o igual a 12 gratis
    // - menor 18 paga un 30%
    // - 18 hasta 60 anos paga el total
    // - mas de 60 tiene un 50% de descuento
//Finalmente imprimir por pantalla (document.write):
    // El cliente debe abonar un total de $ TOTAL.

const valorEntrada = 1000;
let valorTotal = 0;
let edad = prompt('Ingrese la edad del cliente') //prompt me devuelve un string
edad = parseInt(edad) // Paso la edad a un dato tipo number
const descAdolescentes = 40;
const descJubilados = 70

if(edad <= 12) {

} else if(edad < 18) {
    valorTotal = descAdolescentes * valorEntrada / 100;
} else if(edad  <= 60) {
    valorTotal = valorEntrada;
} else {
    valorTotal = descJubilados * valorEntrada / 100;
}

document.write('El cliente debe abonar un total de $' + valorTotal + 'de el costo total de ' + valorEntrada)

console.log(valorTotal);