class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  // Добавление нового звонка
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some((alarm) => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  // Удаление звонков по времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
  }

  // Получение текущего времени в формате HH:MM
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // Запуск мониторинга будильников
  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const now = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === now && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  // Остановка будильника
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  // Сброс возможности запуска для всех звонков
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  // Очистка всех звонков
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
