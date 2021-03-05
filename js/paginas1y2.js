let pagPrincipal = document.getElementById('pagPrincipal');
let pagCarrito = document.getElementById('pagCarrito');

document.getElementById("pizza").addEventListener("click", siguiente);
document.getElementById("volver").addEventListener("click", atras);

function siguiente(){
    pagPrincipal.style.display = "none";
    pagCarrito.style.display = "inline";
    htmlCarrito();
    reloadListeners();
    }

function atras(){
    pagPrincipal.style.display = "inline";
    pagCarrito.style.display = "none";
    }
