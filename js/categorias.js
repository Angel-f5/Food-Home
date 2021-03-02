let listaCategorias= [ 

    { nombre: "Desayunos",
      img:"./assets/Logos slide/desayuno.svg",
      id: 1,
    },

    { nombre: "Fast Food",
      img:"./assets/Logos slide/pizza.svg",
      id: 2,
    },

    { nombre: "Comida",
      img:"./assets/Logos slide/comida-sana.svg",
      id: 3,
    },

    { nombre: "Postres",
      img:"./assets/Logos slide/magdalena.svg",
      id: 4,
    },

    { nombre: "Drinks",
      img:"./assets/Logos slide/copa-de-vino.svg",
      id: 5,
    },

    { nombre: "Todos",
      img:"./assets/Logos slide/cesta-de-regalo.svg",
      id: 6,
    }

];


let slider= "";

function pintarCat(){
    for (let i = 0; i < listaCategorias.length; i++ ){
    slider += `<div class="categoria" id="${listaCategorias[i].id}" data-numero="${listaCategorias[i].id}">
        <a href="#"><img src="${listaCategorias[i].img}">
        <p>${listaCategorias[i].nombre}</p>
        </div>`
    } 
}

pintarCat();
document.querySelector(".menu-slide").innerHTML= slider;