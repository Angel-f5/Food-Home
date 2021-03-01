let arrayElementosMenos = document.getElementsByClassName("menos");
let arrayElementosMas = document.getElementsByClassName("mas");


//TODO
function  minusCounterListeners(){  
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
 }

function additionCounterListeners(){
        for (let i = 0; i < arrayElementosMas.length; i++) { 
            arrayElementosMas[i].addEventListener("click", (event)=>{
                addItem(event.target)
            });
        }
};

function addItem(counterElement){
    arrayPlatos[2].cantidad++;
    let etiquetaNumero = counterElement.parentNode.children[1];
    etiquetaNumero.textContent = arrayPlatos[2].cantidad;

    };



additionCounterListeners();  
minusCounterListeners();
