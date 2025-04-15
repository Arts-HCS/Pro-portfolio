const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir')
const botonesCerrar = document.querySelectorAll('.cerrar');
const btn = document.getElementById('translate-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});

abrir.addEventListener('click', () =>{
    nav.classList.add("visible")
})

botonesCerrar.forEach(boton => {
    boton.addEventListener('click', () => {
      nav.classList.remove("visible")
    });
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