

let arrayPlatos = [
    {
        id: 1,
        img: "./assets/img/bebidas/cafe.jpg",
        precio: "2,00€",
        nombre: "Café",
        desc: "Expresso",
        cantidad: 0,
        categoria: 'bebidas'
    },
    {
        id:2,
        img: "./assets/img/bebidas/smoothie.jpg",
        precio: "3,00€",
        nombre: "Smoothie",
        desc: "De fresas",
        cantidad: 0,
        categoria: 'bebidas'
    },
    {
        id:3,
        img: "./assets/img/comidas/salmon.jpg",
        precio: "10,00€",
        nombre: "Salmón",
        desc: "Con verduras",
        cantidad: 0,
        categoria: 'comidas'
    },
    {
        id:4,
        img: "./assets/img/comidas/cerdoSalsa.jpg",
        precio: "8,00€",
        nombre: "Cerdo",
        desc: "En salsa",
        cantidad: 0,
        categoria: 'comidas'
    },
    {
        id:5,
        img: "./assets/img/desayunos/huevos.jpg",
        precio: "5,00€",
        nombre: "Huevos",
        desc: "Con bacon y pan",
        cantidad: 0,
        categoria: 'desayunos'
    },
    {
        id:6,
        img: "./assets/img/desayunos/pancakes.jpg",
        precio: "4,00€",
        nombre: "Pancakes",
        desc: "Con fresas y crema",
        cantidad: 0,
        categoria: 'desayunos'
    },
    {
        id:7,
        img: "./assets/img/foodFast/pizza.jpg",
        precio: "10,00€",
        nombre: "Pizza",
        desc: "Margarita",
        cantidad: 0,
        categoria: 'fastfood'
    },
    {
        id:8,
        img: "./assets/img/foodFast/hamburguesa.jpg",
        precio: "8,00€",
        nombre: "Hamburguesa",
        desc: "Con patatas",
        cantidad: 0,
        categoria: 'fastfood'
    },
    {
        id:9,
        img: "./assets/img/postres/brownie.jpg",
        precio: "4,00€",
        nombre: "Brownie",
        desc: "Con chocolate",
        cantidad: 0,
        categoria: 'postres'
    },
    {
        id:10,
        img: "./assets/img/postres/tarta.jpg",
        precio: "4,00€",
        nombre: "Cheesecake",
        desc: "Silvestre",
        cantidad: 0,
        categoria: 'postres'
    },
];

function escribePlatos() {
    let escribe = "";
    for(let i = 0; i < arrayPlatos.length; i++) {
        escribe+= `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
                        <img src="${arrayPlatos[i].img}"> 
                        <div class="infoplato">
                            <p class="precio">${arrayPlatos[i].precio}</p>
                            <h3 class="nombreplato">${arrayPlatos[i].nombre}</h3>
                            <p class="descripcion">${arrayPlatos[i].desc}</p>
                            <div class="contador">
                                <button class="menos masmenos">—</button>
                                <p class="numero">${arrayPlatos[i].cantidad}</p>
                                <button class="mas masmenos">+</button>
                            </div>
                        </div>
                    </div>`
    }
    document.querySelector(".platos").innerHTML = escribe;
}

escribePlatos();