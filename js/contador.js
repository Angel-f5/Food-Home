let arrayElementosMenos = document.getElementsByClassName("menos");
let arrayElementosMas = document.getElementsByClassName("mas");



function minusCounterListeners() {
    for (let i = 0; i < arrayElementosMenos.length; i++) {
        arrayElementosMenos[i].addEventListener("click", (event) => {
            if (arrayPlatos[i].cantidad > 0) {
                minusItem(event.target)
            }
        });
    }
}

function addCounterListeners() {
    for (let i = 0; i < arrayElementosMas.length; i++) {
        arrayElementosMas[i].addEventListener("click", (event) => {
            addItem(event.target)
        });
    }
};



function addItem(counterElement) {
    let etiquetaNombre = counterElement.parentNode.parentNode.children[1];
    let etiquetaNumero = counterElement.parentNode.children[1];

    for (let i = 0; i < arrayPlatos.length; i++) {
        if (etiquetaNombre.textContent == arrayPlatos[i].nombre) {
            arrayPlatos[i].cantidad++;
            etiquetaNumero.textContent = arrayPlatos[i].cantidad;
        }
    }
};

function minusItem(counterElement) {
    let etiquetaNombre = counterElement.parentNode.parentNode.children[1];
    let etiquetaNumero = counterElement.parentNode.children[1];

    for (let i = 0; i < arrayPlatos.length; i++) {
        if (etiquetaNombre.textContent == arrayPlatos[i].nombre) {
            arrayPlatos[i].cantidad--;
            etiquetaNumero.textContent = arrayPlatos[i].cantidad;
        }
    }
};



addCounterListeners();
minusCounterListeners();
