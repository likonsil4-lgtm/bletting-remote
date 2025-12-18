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

function updateDateTime() {
  const now = new Date();
  const dateTimeEl = document.getElementById('dateTime');

  if (document.body.classList.contains('mobile')) {
    // 📱 только часы и минуты
    dateTimeEl.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  } else {
    // 💻 полная дата + время
    dateTimeEl.textContent = now.toLocaleString();
  }
}

updateDateTime();
setInterval(updateDateTime, 60000);


