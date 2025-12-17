console.log("login.js loaded");

const form = document.getElementById('loginForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');

const error = document.getElementById('error');
const wrapper = document.getElementById('formWrapper');
const screen = document.getElementById('loginScreen');

/* ===== ЗАГРУЗКА СОСТОЯНИЯ ===== */
window.addEventListener('load', () => {
  if (localStorage.getItem('rememberEnabled') === 'true') {
    loginInput.value = localStorage.getItem('rememberLogin') || '';
    passwordInput.value = localStorage.getItem('rememberPassword') || '';
    rememberCheckbox.checked = true;
  }
});

/* ===== ВХОД ===== */
form.addEventListener('submit', e => {
  e.preventDefault();

  const login = loginInput.value;
  const pass = passwordInput.value;

  if (login === 'admin' && pass === '1432') {

    if (rememberCheckbox.checked) {
      localStorage.setItem('rememberEnabled', 'true');
      localStorage.setItem('rememberLogin', login);
      localStorage.setItem('rememberPassword', pass);
    } else {
      localStorage.clear();
    }

    // 🔥 ПЛАВНЫЙ УХОД
    screen.style.transition = 'opacity 0.6s ease';
    screen.style.opacity = '0';

    setTimeout(() => {
      window.location.href = 'main.html';
    }, 600);

  } else {
    error.classList.add('show');
    wrapper.classList.add('shift');
  }
});

/* ===== СКРЫТИЕ ОШИБКИ ===== */
function hideError() {
  error.classList.remove('show');
  wrapper.classList.remove('shift');
}

loginInput.addEventListener('focus', hideError);
passwordInput.addEventListener('focus', hideError);

/* ===== REMEMBER ===== */
rememberCheckbox.addEventListener('change', () => {
  if (!rememberCheckbox.checked) {
    localStorage.clear();
  }
});
