const darkModeToggle = document.querySelector('.dark-mode-btn button');
const body = document.body;

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}
