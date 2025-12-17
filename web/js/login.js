const form = document.getElementById('loginForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');

const error = document.getElementById('error');
const wrapper = document.getElementById('formWrapper');
const overlay = document.getElementById('loadingOverlay');

/* ===== ЗАГРУЗКА СОСТОЯНИЯ ===== */
window.addEventListener('load', () => {
  const rememberEnabled = localStorage.getItem('rememberEnabled');

  if (rememberEnabled === 'true') {
    loginInput.value = localStorage.getItem('rememberLogin') || '';
    passwordInput.value = localStorage.getItem('rememberPassword') || '';
    rememberCheckbox.checked = true;
  }
});

/* ===== ВХОД ===== */
form.addEventListener('submit', e => {
  e.preventDefault();

  const login = loginInput.value.trim();
  const pass = passwordInput.value.trim();

  if (login === 'admin' && pass === '1432') {

    if (rememberCheckbox.checked) {
      localStorage.setItem('rememberEnabled', 'true');
      localStorage.setItem('rememberLogin', login);
      localStorage.setItem('rememberPassword', pass);
    } else {
      localStorage.clear();
    }

    // показать загрузку
    overlay.classList.add('show');

    // имитация подгрузки
    setTimeout(() => {
      window.location.href = 'main.html';
    }, 1200);

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

/* ===== СБРОС ЗАПОМНИТЬ МЕНЯ ===== */
rememberCheckbox.addEventListener('change', () => {
  if (!rememberCheckbox.checked) {
    localStorage.clear();
  }
});
