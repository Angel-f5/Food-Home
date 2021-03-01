let arrayElementosMenos = document.getElementsByClassName("menos");
let arrayElementosMas = document.getElementsByClassName("mas");
    
for (let i = 0; i < arrayElementosMenos.length; i++) { 
    arrayElementosMenos[i].addEventListener("click", (event)=>{
        let elementoMenos = event.target;
        let etiquetaNumero = elementoMenos.parentNode.children[1];
        let numero = Number(etiquetaNumero.textContent);
    
        if(numero > 0){
            etiquetaNumero.textContent = numero - 1;
        }
    });
}

for (let i = 0; i < arrayElementosMas.length; i++) { 
    arrayElementosMas[i].addEventListener("click", (event)=>{
        let elementoMas = event.target;
        let etiquetaNumero = elementoMas.parentNode.children[1];
        let numero = Number(etiquetaNumero.textContent);
        etiquetaNumero.textContent = numero + 1;
    });
}
