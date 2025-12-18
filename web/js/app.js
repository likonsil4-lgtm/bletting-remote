// ===== MOBILE DETECTION =====
function detectMobile() {
  if (window.innerWidth <= 900) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

detectMobile();
window.addEventListener('resize', detectMobile);


// ===== DATE & TIME =====
function updateDateTime() {
  const el = document.getElementById('dateTime');
  if (!el) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  if (document.body.classList.contains('mobile')) {
    // 📱 только время
    el.textContent = `${hours}:${minutes}`;
  } else {
    // 💻 дата + время
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    el.textContent = `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}


// ===== INIT ORDER (КРИТИЧНО) =====

// ⚠️ ждём, пока браузер применит layout
setTimeout(() => {
  updateDateTime();
}, 0);

// обновление раз в минуту
setInterval(updateDateTime, 60000);


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

// Проверка, что мы внутри Android WebView
function isAndroidWebView() {
  return typeof Android !== 'undefined';
}

// Пример вызова Android
function notifyAndroid(event, data) {
  if (isAndroidWebView()) {
    Android.postMessage(JSON.stringify({
      event,
      data
    }));
  }
}




