const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')

abrir.addEventListener('click', () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener('click', ()=>{
    nav.classList.remove('visible')
})

document.addEventListener('click', (e) => {
    if (nav.classList.contains('visible') &&
        !nav.contains(e.target) &&
        !abrir.contains(e.target)) {
      nav.classList.remove('visible');
    }
});

function abrirModal(imagenSrc) {
    document.getElementById("imgGrande").src = imagenSrc;
    document.getElementById("miModal").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
    document.body.classList.remove("no-scroll");
}

function guardarMensaje() {
    sessionStorage.setItem("formEnviado", "true");
}

window.onload = function () {
    if (sessionStorage.getItem("formEnviado") === "true") {
      const mensaje = document.getElementById("mensaje");
      mensaje.style.display = "block";

      setTimeout(() => {
        mensaje.style.display = "none";
        sessionStorage.removeItem("formEnviado");
    }, 3000);
    }
};