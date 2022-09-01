console.log('archivo if.js');

//Vamos a analizar si la persona tiene una edad mayor a 12 años
//1- Tomar o preguntarle la edad
let edad = prompt('Ingrese la edad de la persona');
console.log(edad)


edad = parseFloat(edad);
console.log(edad)
//2- Luego evaluar si su edad es de 12 años
if( edad <= 12  ) {


    // console.info('Puede pasar')
    //Si la condición se cumple 
    console.log('Si puede ingresar al pelotero')




} 
else {

    console.warn('No puede ingresar');
    // console.warn('No puede ingresar');


}
    //a- Lo dejo entrar al pelotero
    //b- Le digo que no puede ingresar
