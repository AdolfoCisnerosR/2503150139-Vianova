const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    mensaje.textContent = "Gracias por contactar a Vianova";
    formulario.reset();
});
