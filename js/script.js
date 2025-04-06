const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')

abrir.addEventListener('click', () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})

function abrirModal(imagenSrc) {
    document.getElementById("imgGrande").src = imagenSrc;
    document.getElementById("miModal").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
    document.body.classList.remove("no-scroll");
}