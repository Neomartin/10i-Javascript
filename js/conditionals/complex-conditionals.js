const num = parseInt(prompt('Ingrese el número que quiere obtener el resultado'));

// const multiploDe2 = num % 2 === 0;
// const multiploDe3 = num % 3 === 0;
// const multiploDe5 = num % 5 === 0;


if(  (num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0)) {
    console.log('10 - El número es divisible por alguno de los 3 valores')
}

if(
    (num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)
) {
    alert(`BINGO el número es divisible por los 3 anteriores`)
} else {
    alert(`No es multiplo`)
}


if(num % 2 === 0) {
    console.log(`Es multiplo de 2`)
}

if(num % 3 === 0) {
    console.log(`Es multiplo de 3`)
}

const user = {
    name: `Pepito`,
    age: 24,
    active: true,
    role: 'client'
}

// Login de usuario
         //
if(user.role === 'client' && user.active === true) {
    alert(`Bienvenido usuario`)
    //Guardo los datos del cliente y lo dejo a mano
    //Seteo la ultima fecha de su ultima visita ald ía de hoy
    // window.location.href = 'pages/login.html'
} else {
    console.log(`No puede ingresar contacte a un administrador`);

}


if(user.role === 'admin' || user.role === 'employee') {
    // window.location.href = 'pages/admin/admin-products.html'
} else {
    // window.location.href = 'index.html'
}