// ===== MQTT CONFIG =====
const MQTT_CONFIG = {
  host: 'wss://03f3df8309314ebdaf9c2d78737996db.s1.eu.hivemq.cloud:8884/mqtt',
  username: 'XOLOD',
  password: '146010qwW+',
  clientId: 'web_' + Math.random().toString(16).substr(2, 8),
  clean: true,
  reconnectPeriod: 2000,
  connectTimeout: 5000
};

// ===== CONNECT =====
const mqttClient = mqtt.connect(MQTT_CONFIG.host, {
  username: MQTT_CONFIG.username,
  password: MQTT_CONFIG.password,
  clientId: MQTT_CONFIG.clientId,
  clean: MQTT_CONFIG.clean,
  reconnectPeriod: MQTT_CONFIG.reconnectPeriod,
  connectTimeout: MQTT_CONFIG.connectTimeout
});

// ===== EVENTS =====
mqttClient.on('connect', () => {
  console.log('✅ MQTT connected');

  // подписка на все камеры
  mqttClient.subscribe('bletting/#', err => {
    if (!err) {
      console.log('📡 Subscribed to bletting/#');
    }
  });
});

mqttClient.on('reconnect', () => {
  console.log('🔄 MQTT reconnecting...');
});

mqttClient.on('offline', () => {
  console.log('⚠ MQTT offline');
});

mqttClient.on('error', err => {
  console.error('❌ MQTT error', err);
});

// ===== MESSAGES =====
mqttClient.on('message', (topic, message) => {
  const payload = message.toString();
  console.log(`📥 ${topic}: ${payload}`);

  // пример:
  // bletting/camera/BO-6/temp -> 7.7
});
