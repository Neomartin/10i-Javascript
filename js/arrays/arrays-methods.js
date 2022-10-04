const users = [
  {
      id: 11232,
      name: "Leanne Graham",
      username: "Bret",
      age: 34,
      email: "Sincere@april.biz",
      address: {
          street: "Kulas Light",
          suite: "Apt. 556"
      },
      active: true
  },
  {
      id: 25679,
      name: "Ervin Howell",
      username: "Antonette",
      age: 23,
      email: "Shanna@melissa.tv",
      address: {
          street: "Victor Plains",
          suite: "Suite 879"
      },
      active: true
  },
  {
      id: 31231,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      age: 28,
      active: false,
      address: {
          street: "Douglas Extension",
          suite: "Suite 847"
      }
  },
  {
      id: 43232,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      age: 32,
      active: false,
      address: {
          street: "Hoeger Mall",
          suite: "Apt. 692"
      }
  },
  {
      id: 56778,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      age: 26,
      active: true,
      address: {
          street: "Skiles Walks",
          suite: "Suite 351"
      }
  },
  {
      id: 66980,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      age: 20,
      active: true,
      address: {
          street: "Norberto Crossing",
          suite: "Apt. 950"
      }
  },
  {
      id: 74213,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      age: 21,
      active: false,
      address: {
          street: "Rex Trail",
          suite: "Suite 280"
      }
  },
  {
      id: 85614,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      age: 33,
      active: true,
      address: {
          street: "Ellsworth Summit",
          suite: "Suite 729"
      }
  },
  {
      id: 94125,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      age: 25,
      active: true,
      address: {
          street: "Dayna Park",
          suite: "Suite 449"
      }
  },
  {
      id: 10321,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      age: 32,
      active: true,
      address: {
          street: "Kattie Turnpike",
          suite: "Suite 198"
      }
  }
];


console.log(users)

// for(let i = 0; i < users.length; i++) {
//   console.log(users[i].name)
// }
const activeUsers = []
// // ?Forma de iterar un array elemento por elemento
users.forEach((usr, indice) => {
    // console.log(usr);
    if(usr.email === 'Chaim_McDermott@dana.io') {
      users.splice(indice ,1)
    }
})
// const currentYear = new Date().getFullYear();


// const users2 = users
// // ?Método de iterar array elemento por elemento que me devuelve un nuevo array

const nuevoArray = users.map(
  function(usuario) {
    usuario.address.cp = 5600
    if(usuario.active === true) {
      return usuario
    }
  }
);

// 
const users2 = Array.from(users)

// // **Borrar elementos de un array
// const elementoBorrados = users.splice(3, 1);

// Método SLICE (me devuelve una rebanada de el array) - **NO MODIFICA EL ORGINAL
const sliceArray = () => {
    const slicedUsers = users.slice(3, 5);
    slicedUsers.push(`Algo`)
    console.log(slicedUsers )
    console.log(users);
    renderUsers(slicedUsers)
}

function filterUsersByStatus(status) {
    const filteredUsers = users.filter(function(usr) {
        if(usr.active === status) {
            return true
        } else {
            return false
        }
    })
    console.log(filteredUsers)
    renderUsers(filteredUsers)
}

const usersListElem = document.getElementById('result');

function renderUsers(usersToRender) {
    usersListElem.innerHTML = '';
    usersToRender.forEach(user => {
        usersListElem.innerHTML += `<li class="list-group-item">${user.name}</li>`
    })
}

function renderError() {
        usersListElem.innerHTML =  `<li class="list-group-item text-danger border border-danger">No se encontraron usuarios</li>`;
}

function searchOneUser(evt) {

    //Cuando recibo el evento de apretar la tecla sobre l input, accedo al valor de dicho input y lo guardo
    const searchIDValue = evt.target.valueAsNumber;
    
    //Busco en el array un usuario cuyo id sea exactamente igual al de la busqueda
    const userFind = users.find(usuario => {
        if(usuario.id === searchIDValue) {
            return true
        }
        return false
        //return undefined
    })
    // Cuando find no encuentra ningun elemento que cumpla con su busqueda su valor de retorno es undefined

    if(userFind) {
        renderUsers([userFind])
    } else {
        renderError()
    }
    console.log(`userFind`, userFind)
}