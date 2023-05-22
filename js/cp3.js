const darkModeToggle = document.querySelector('.dark-mode-btn button');
const body = document.body;

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

const form = document.querySelector('form');
const passwordInput = document.getElementById('inputSenha');
const confirmPasswordInput = document.getElementById('inputConfirmarSenha');
const emailInput = document.getElementById('inputEmail');

form.addEventListener('submit', function(event) {
  if (!validatePassword()) {
    event.preventDefault();
  }

  if (!validateEmail()) {
    event.preventDefault();
  }
});

confirmPasswordInput.addEventListener('input', validatePassword);

function validatePassword() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  
  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordInput.setCustomValidity('As senhas não são iguais.');
    return false;
  } else {
    confirmPasswordInput.setCustomValidity('');
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.setCustomValidity('Digite um e-mail válido.');
    return false;
  } else {
    emailInput.setCustomValidity('');
    return true;
  }
}
