let pagina1 = document.getElementById('pagina1');
let pagina2 = document.getElementById('pagina2');

document.getElementById("pizza").addEventListener("click", siguiente);
document.getElementById("volver").addEventListener("click", atras);

function siguiente(){
    if (pagina1.style.display == "inline"){
        pagina1.style.display = "none";
    } 
    if (pagina2.style.display == "none"){
        pagina2.style.display = "inline";
    } 
}

function atras(){
    if (pagina2.style.display == "inline"){
        pagina2.style.display = "none";
    } 
    if (pagina1.style.display == "none"){
        pagina1.style.display = "inline";
    } 
}
