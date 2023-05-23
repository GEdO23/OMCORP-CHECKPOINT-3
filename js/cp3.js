const form = document.querySelector('form');
const btnSubmit = document.querySelector('#btnSubmit');

const idInputPrimeiroNome = document.querySelector('#inputFirstName');
const idInputUltimoNome = document.querySelector('#inputLastName');
const idInputEmail = document.querySelector('#inputEmail');
const idInputSenha = document.querySelector('#inputSenha');
const idInputSenhaConfirmada = document.querySelector('#inputConfirmarSenha');

function isMinSizeValid(target, minCaract){
  if(target.value.trim() === '' || target.value.length < minCaract) {
    target.setCustomValidity(`Este campo deve ter no minimo ${minCaract} caracteres`)
    return false;
  } else {
    target.setCustomValidity('')
    return true;
  }
}

function isMaxSizeValid(target, maxCaract) {
  if(target.value === '' || target.value.length > maxCaract) {
    target.setCustomValidity(`Este campo deve ter no maximo ${maxCaract} caracteres`)
    return false;
  } else {
    return true;
  }
}

function validate(target, condition) {
  if(condition) {
    target.setAttribute('style', 'border: var(--correto); background-color: var(--correto-transparente);')
  } else {
    target.setAttribute('style', 'border: var(--errado); background-color: var(--errado-transparente);');
  }
}

function hasRegex(target, regex) {
  if(regex.test(target.value)) {
    target.setCustomValidity('');
    return true;
  } else {
    target.setCustomValidity('Este não é um e-mail valido');
    return false;
  }
}

function isEqualTo(x, y) {
  if(x.value === y.value) {
    y.setCustomValidity('');
    return true;
  } else {
    y.setCustomValidity('As senhas não são iguais.');
    return false;
  }
}

function isFirstNameValid() {
  return isMinSizeValid(idInputPrimeiroNome, 5);
}

function isLastNameValid() {
  return isMinSizeValid(idInputUltimoNome, 5);
}

function isEmailValid() {
  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return (isMinSizeValid(idInputEmail, 5) && hasRegex(idInputEmail, emailRegex));
}

function isPasswordValid() {
    validate(idInputSenhaConfirmada, isConfirmedPasswordValid());
  return (
    isMinSizeValid(idInputSenha, 6) 
    && isMaxSizeValid(idInputSenha, 8))
}

function isConfirmedPasswordValid() {
  return (
    isMinSizeValid(idInputSenha, 6) 
    && isMaxSizeValid(idInputSenha, 8) 
    && isEqualTo(idInputSenha, idInputSenhaConfirmada))
}

idInputPrimeiroNome.addEventListener('input', ()=>{
  validate(idInputPrimeiroNome, isFirstNameValid());
})

idInputUltimoNome.addEventListener('input', ()=>{
  validate(idInputUltimoNome, isLastNameValid());
})

idInputEmail.addEventListener('input', ()=>{
  validate(idInputEmail, isEmailValid());
})

idInputSenha.addEventListener('input', ()=>{
  validate(idInputSenha, isPasswordValid());
})

idInputSenhaConfirmada.addEventListener('input', ()=>{
  validate(idInputSenhaConfirmada, isConfirmedPasswordValid());
})

form.addEventListener('submit', (event) => {
  if (!isFirstNameValid() || !isLastNameValid() || !isEmailValid() || !isPasswordValid() || !isConfirmedPasswordValid()) {
    event.preventDefault();
  }
});


const darkModeToggle = document.querySelector('.dark-mode-btn button');
const body = document.body;


darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

