// let i = 1;
// while(i <= 15) {
//     console.log(`Código ejecutado ${i} veces`);
//     i = i + 1;
// }

let sumatoriaNotas = 0;
let cantidadNotas = 0;
let notaAlumno = prompt('Ingrese la nota del alumno');

while(notaAlumno.toUpperCase() !== 'FIN') {
    const isNotNumber =  isNaN(parseInt(notaAlumno))
    // isNaN (esto es un número)
    //si es number = false
    //si no es un number = true
    if(isNotNumber) {
        notaAlumno = prompt('Ingrese la nota del alumno');
    } else {
        sumatoriaNotas = sumatoriaNotas + parseInt(notaAlumno);
        cantidadNotas = cantidadNotas + 1;
        notaAlumno = prompt('Ingrese la nota del alumno');
    }
}

if(cantidadNotas === 0) document.write(`No se ingresaron notas`) 
else {
    const promedioFinalDeNotas = sumatoriaNotas / cantidadNotas
    document.write(`El promedio de notas de los alumnos de quinto grado es de ${promedioFinalDeNotas}`);
}

// *TIPS
/*
    - necesito en algun lugar hacer una suma de las notas
    - necesito contar cuando notas cargo para poder sacar el promedio
    - necesito evaluar cuando la docente ingreso 0 para dejar de pedir notas y mostrar finalmente el resultado
*/
// *EJERCICIO
//Necesito que hagan código en el que una docente ingrese las notas de los alumnos.
//Hasta que ella ingrese la palabra FIN
//Con las notas ingresadas necesito sacar el promedio del curso e imprimirlo con un document.write en el documento











// /**DESPUES verificar que el numero no sea mayor 100 ni menor que 1 */