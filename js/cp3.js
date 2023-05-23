const form = document.querySelector('form');
const btnSubmit = document.querySelector('#btnSubmit');

const idInputPrimeiroNome = document.querySelector('#inputFirstName');
const idInputUltimoNome = document.querySelector('#inputLastName');
const idInputEmail = document.querySelector('#inputEmail');
const idInputSenha = document.querySelector('#inputSenha');
const idInputSenhaConfirmada = document.querySelector('#inputConfirmarSenha');

function isMinSizeValid(target, minCaract){
  if(target.value.trim === '' || target.value.length < minCaract) {
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

form.addEventListener('submit', (event)=>{
  if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isPasswordValid() && isConfirmedPasswordValid()) {
  } else {
  }
})





// const darkModeToggle = document.querySelector('.dark-mode-btn button');
// const body = document.body;

// darkModeToggle.addEventListener('click', toggleDarkMode);

// function toggleDarkMode() {
//   body.classList.toggle('dark-mode');
// }

// const form = document.querySelector('form');
// const inputPrimeiroNome = document.querySelector('#inputFirstName');
// const inputSegundoNome = document.querySelector('#inputLastName');

// form.addEventListener('submit', function(event) {
//   if (inputPrimeiroNome.value === '') {
//     event.preventDefault();
//     alert('Por favor, preencha o primeiro nome.');

//   }else if(inputSegundoNome.value === '') {
//     event.preventDefault();
//     alert('Por favor, preencha o segundo nome.');
//   }
// });

// const passwordInput = document.getElementById('inputSenha');
// const confirmPasswordInput = document.getElementById('inputConfirmarSenha');
// const emailInput = document.getElementById('inputEmail');

// emailInput.addEventListener('input', validateEmail);

// function validateEmail() {
//   const emailValue = emailInput.value;
//   const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

//   if (!emailRegex.test(emailValue)) {
//     emailInput.classList.add('error'); // Adiciona a classe "error"
//   } else {
//     emailInput.classList.remove('error'); // Remove a classe "error" se estiver presente
//   }
// }

// form.addEventListener('submit', function(event) {
//   if (!validatePassword()) {
//     event.preventDefault();
//   }

//   if (!validateEmail()) {
//     event.preventDefault();
//   }
// });

// confirmPasswordInput.addEventListener('input', validatePassword);

// function validatePassword() {
//   const passwordValue = passwordInput.value;
//   const confirmPasswordValue = confirmPasswordInput.value;
  
//   if (passwordValue !== confirmPasswordValue) {
//     confirmPasswordInput.setCustomValidity('As senhas não são iguais.');
//     return false;
//   } else {
//     confirmPasswordInput.setCustomValidity('');
//     return true;
//   }
// }

