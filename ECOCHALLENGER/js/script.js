// ------------------------------
// Validación de formulario con limpieza
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("errorNombre");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorMensaje = document.getElementById("errorMensaje");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevenir envío automático
    let valido = true;

    // Resetear errores
    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";

    // Validar nombre
    if (nombre.value.trim() === "") {
      errorNombre.textContent = "Por favor ingresa tu nombre.";
      valido = false;
    }

    // Validar correo
    if (correo.value.trim() === "") {
      errorCorreo.textContent = "Por favor ingresa tu correo.";
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(correo.value)) {
      errorCorreo.textContent = "Por favor ingresa un correo válido.";
      valido = false;
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
      errorMensaje.textContent = "Por favor escribe un mensaje.";
      valido = false;
    }

    // Si es válido, mostrar alerta y limpiar
    if (valido) {
      alert("✅ ¡Mensaje enviado con éxito! 🌱");
      formulario.reset(); // <-- limpia los campos
    }
  });
});
