document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validar campos
      let isValid = true;

      // Validar email
      if (!emailInput.value || !validateEmail(emailInput.value)) {
        emailError.textContent = "Por favor ingresa un email válido";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

      // Validar contraseña
      if (!passwordInput.value || passwordInput.value.length < 6) {
        passwordError.textContent =
          "La contraseña debe tener al menos 6 caracteres";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }

      // Si todo es válido, redirigir
      if (isValid) {
        // Guardar estado de login (opcional)
        localStorage.setItem('isLoggedIn', 'true');

        // Redirección CORREGIDA (ajusta según tu estructura real)
        window.location.href = "../../index.html";

        // Alternativa con ruta absoluta (funcionará siempre)
        // window.location.href = "/index.html"; 
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
