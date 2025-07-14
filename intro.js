function verificarContrasena() {
    const contrasenaCorrecta = "0708";
    const ingresada = document.getElementById("password").value;

    if (ingresada === contrasenaCorrecta) {
        window.location.href = "gift.html";
    } else {
        document.getElementById("mensaje").textContent = "Contraseña incorrecta. Intenta nuevamente.";
    }
}
