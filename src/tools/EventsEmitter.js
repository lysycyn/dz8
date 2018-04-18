/**
 * @class EventEmitter - класс для хранения и вызова обработчиков событий
 * Реализация через Map и Set для более удобного обращения с элементами и памятью
 */
export default class EventEmitter {
  constructor() {
    this._listeners = new Map();
  }

  /**
   * Привязка обработчика к событию
   * @param {string} eventName - название события
   * @param {function} callback - название обработчика события
   * @returns {EventEmitter}
   */
  on(eventName, callback) {
    if (!this._listeners.has(eventName)) {
      this._listeners.set(eventName, new Set());
    }
    this._listeners.get(eventName).add(callback);
    return this;
  }

  /**
   * Удаление обработчика от привязанного события.
   * Без параметров - очистка эмиттера.
   * eventname
   * @param {string} eventName - название события
   * @param {function} callback - название обработчика события
   */
  off(eventName, callback) {
    if (!arguments.length) {
      this._listeners.clear();
    } else if (arguments.length === 1 && typeof (eventName) === 'string') {
      this._listeners.delete(eventName);
    } else if (this._listeners.has(eventName)) {
      const listeners = this._ldisteners.get(eventName);
      listeners.delete(callback);

      if (listeners.size === 0) {
        this._listeners.delete(eventName);
      }
    }
    return this;
  }

  /**
   * Вызов события и всех обработчиков, подписанных на него
   * @param {string} eventName - название события
   * @param {Array} args - дополнительные аргументы для колбэков
   */
  trigger(eventName, ...args) {
    if (this._listeners.has(eventName)) {
      this._listeners.get(eventName).forEach(callback => callback.apply(this, args));
    }
  }
}
