function login() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if (login === 'admin' && password === '1432') {
    // плавно скрываем логин
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');

    loginScreen.classList.add('hidden');

    setTimeout(() => {
      loginScreen.style.display = 'none';

      mainApp.classList.remove('hidden');
      mainApp.style.display = 'flex';
    }, 600);

  } else {
    showError();
  }
}
