/**
 * @class Presenter - класс презентера. Служит для связи объектов моделей и представлений.
 * Слушает обработчики событий и "дергает" те или иные колбэки.
 */
export default class Presenter {
  /**
   * СОздание экземпляра презентера
   * @param {EventsEmitter} params.model - эмиттер
   * @param {Model} params.model - модель
   * @param {View} params.view - view
   */
  constructor(emitter, view, model) {
    this._emitter = emitter;
    this._view = view;
    this._model = model;
    this._view.subscribePresenter(this);
    this._model.subscribePresenter(this);
  }
}
