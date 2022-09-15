// const numeroAEvaluar = prompt('Ingrese el número de quien quiere calcular sus numéros pares')

// for(let i = 1; i <= numeroAEvaluar; i++) {

//     if(   i  %  2 === 0   ) {
//         console.log(`El número ${i} es par`)
//     } 

// }

const paisesLatam = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
];

console.log(paisesLatam)
console.log(paisesLatam.length)


for(let i = 0; i < paisesLatam.length; i++) {

   document.write(`<li>El pais en la posición ${i} es ${paisesLatam[i]}</li>`);

}




