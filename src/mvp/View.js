/**
 * @class View - класс для описания представлений.
 * Осуществляется подписка на презентер, а так же определение и вызов обработчиков
 */
export default class View {
  constructor(emitter) {
    this._emitter = emitter;
    this._presenter = undefined;
  }
  /**
   * API для подписки презентера на события view
   *
   * @param {any} presenter
   */
  subscribePresenter(presenter) {
    this._presenter = presenter;
  }
}
