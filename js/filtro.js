let filtrodesayunos = []

function filterByCategory (categoryFood) {

filtrodesayunos = [];
for (let i = 0; i < arrayPlatos.length ; i++) {
    if (arrayPlatos[i].categoria === categoryFood) {
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
    reloadListeners();  
}}


