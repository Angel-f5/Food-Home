let arrayCarrito = [];

function addtoCarrito(indice) {
        arrayCarrito.push(arrayPlatos[indice]);
}

function htmlCarrito() {
    let imprimePlatos = "";
    for(let i = 0; i < arrayCarrito.length; i++) {
        imprimePlatos+= `<div class="styleInfo ${arrayPlatos[i].categoria}">
                <img src="${arrayPlatos[i].img}">
                <div class="infoplato">
                    p class="precio">${arrayPlatos[i].precio}</p>
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
    document.querySelector(".platosselect").innerHTML = imprimePlato;
}




/*function agregaralCarrito() {
    

    let agregaplato = "";
    for(let i = 0; i < arrayPlatos.length; i++) {
        if (arrayPlatos[i].cantidad > 0) {

            agregaplato+= `<div class="styleInfo ${arrayPlatos[i].categoria}"> 
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
    }
    document.querySelector(".platosselect").innerHTML = agregaplato;
    reloadListeners();
}*/