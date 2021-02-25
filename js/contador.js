let numero = document.querySelector('.numero');
let numerobase = 0;

let resta = document.querySelector('.menos');
let suma = document.querySelector('.mas');

resta.addEventListener('click', () =>{
    if(numerobase == 0){
        null;
    }else{
        let padre = resta.parentElement;
        numerobase -= 1;
        numero.innerHTML = numerobase;
    }
});

suma.addEventListener('click', () =>{
    numerobase += 1;
    numero.innerHTML = numerobase;
});