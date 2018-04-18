/**
 * @class Dispatcher класс-диспетчер для вызова колбэков на основе экшенов
 */
export default class Dispatcher {
  constructor() {
    this._callbacks = [];
  }

  /**
   * Добавление нового обработчика в диспетчер
   * @param {function} сallback колбэк
   */
  register(callback) {
    this._callbacks.push(callback);
  }

  /**
   * Вызов колбэков на основе экшена
   * @param {Object} action экшен
   */
  dispatch(action) {
    this._callbacks.forEach(callback => callback(action));
  }
}
