/**
 * @class View - базовый класс для отрисовки представлений
 */
export default class View {
  constructor(emitter, dispatcher) {
    this._emitter = emitter;
    this._dispatcher = dispatcher;
  }

  /**
   * Обновление представления - изменение внутренних данных и рендер
   * @param {Object} data - данные для обновления
   */
  updateView(data) {
    this._update(data);
    this._render();
  }
}
