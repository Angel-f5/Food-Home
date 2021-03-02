let pagina1 = document.getElementById('pagina1');
let pagina2 = document.getElementById('pagina2');

document.getElementById("pizza").addEventListener("click", siguiente);
document.getElementById("volver").addEventListener("click", atras);

function siguiente(){
    pagina1.style.display = "none";
    pagina2.style.display = "inline";
    }

function atras(){
    pagina1.style.display = "inline";
    pagina2.style.display = "none";
    }
