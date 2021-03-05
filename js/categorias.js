let listaCategorias = [ 

    { nombre: "desayunos",
      img:"./assets/Logos slide/desayuno.svg",
      id: 1,
    },

    { nombre: "fast food",
      img:"./assets/Logos slide/pizza.svg",
      id: 2,
    },

    { nombre: 'comidas',
      img:"./assets/Logos slide/comida-sana.svg",
      id: 3,
    },

    { nombre: "postres",
      img:"./assets/Logos slide/magdalena.svg",
      id: 4,
    },

    { nombre: 'bebidas',
      img:"./assets/Logos slide/copa-de-vino.svg",
      id: 5,
    },



];


let slider= "";

function pintarCat(){
    for (let i = 0; i < listaCategorias.length; i++ ){
    slider += `<div class="categoria" onclick="filterByCategory('${listaCategorias[i].nombre}')">
        <a href="#"><img src="${listaCategorias[i].img}">
        <p>${listaCategorias[i].nombre}</p>
        </div>`
    } 
}
pintarCat();
slider+= `<div class="categoria" onclick="escribePlatos()">
<a href="#"><img src="./assets/Logos slide/cesta-de-regalo.svg">
<p>Todos</p>
</div>`;
     


document.querySelector(".menu-slide").innerHTML= slider;