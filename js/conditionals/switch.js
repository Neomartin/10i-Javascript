const mes = parseInt(prompt('Ingrese el número de mes de nacimiento'))

/*método 
    switch(variable a analizar) {   
        case valor1:
            Código
            ****importante cerrar el case con la palabra reservada
            break;
    }
*/
switch(mes) {
    case 1:
        document.write('El mes de sun nacimiento es Enero y es de Capricornio');
        break
    case 2:
        document.write('El mes de nacimiento es Febrero y es de Piscis');
        break;
    case 10:
        document.write('El mes de nacimiento es Octubre y es de Libra');
        break;
    default:
        document.write('El mes ingresado no se reconoce como56 válido')
}