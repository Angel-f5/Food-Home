document.getElementById("1").addEventListener("click", escribedesayunos);

let filtrodesayunos = []

function escribedesayunos() {
for (let i = 0; i < arrayPlatos.length ; i++) {
    if (arrayPlatos[i].categoria === 'desayunos') {
    filtrodesayunos += `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    document.querySelector(".platos").innerHTML = filtrodesayunos;    
}}





document.getElementById("2").addEventListener("click", FiltroFastFood);

let filtroFastF = []

function FiltroFastFood() {
for (let i = 0; i < arrayPlatos.length; i++) {
    if (arrayPlatos[i].categoria === 'fastfood') {
    filtroFastF += `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    document.querySelector(".platos").innerHTML = filtroFastF;    
}}





document.getElementById("3").addEventListener("click", Filtrocomida);

let filtro_Comida = []

function Filtrocomida() {
for (let i = 0; i < arrayPlatos.length; i++) {
    if (arrayPlatos[i].categoria === 'comidas') {
    filtro_Comida += `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    document.querySelector(".platos").innerHTML = filtro_Comida;    
}}





document.getElementById("4").addEventListener("click", FiltroPostres);

let filtro_postres = []

function FiltroPostres() {
for (let i = 0; i < arrayPlatos.length; i++) {
    if (arrayPlatos[i].categoria === 'postres') {
    filtro_postres += `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    document.querySelector(".platos").innerHTML = filtro_postres;    
}}





document.getElementById("5").addEventListener("click", escribebebidas);

let filtroBebidas = []

function escribebebidas() {
for (let i = 0; i < arrayPlatos.length; i++) {
    if (arrayPlatos[i].categoria === 'bebidas') {
    filtroBebidas += `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    document.querySelector(".platos").innerHTML = filtroBebidas;   
}}





document.getElementById("6").addEventListener("click", escribePlatos);

function escribePlatos() {
    location.reload();
}
//    let escribe = "";
//     for(let i = 0; i < arrayPlatos.length; i++) {
//         escribe+= `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
//         <img src="${arrayPlatos[i].img}"> 
//         <div class="infoplato">
//             <p class="precio">${arrayPlatos[i].precio}</p>
//             <h3 class="nombreplato">${arrayPlatos[i].nombre}</h3>
//             <p class="descripcion">${arrayPlatos[i].desc}</p>
//             <div class="contador">
//                 <button class="menos masmenos">—</button>
//                 <p class="numero">${arrayPlatos[i].cantidad}</p>
//                 <button class="mas masmenos">+</button>
//             </div>
//         </div>
//     </div>`
//     }
//     document.querySelector(".platos").innerHTML = escribe;
// }//

