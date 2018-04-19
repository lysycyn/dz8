/**
 * @class Model класс модели. Является ранилищем данных и служит для связи с презенторами
 */
export default class Model {
  constructor(emitter, initialData) {
    this._data = initialData;
    this._emitter = emitter;
    this._presenters = [];
  }

  /**
   * Получение данные модели
   * @returns данные модели
   */
  getData() {
    return this._data;
  }

  /**
   * Обновление данных модели.
   * Триггер соытия 'modelUpdate' на подписанных презентерах
   * @param {Object} data
   */
  updateData(data) {
    this._data = data;
    this._presenters.forEach(presenter => presenter._emitter.trigger('modelUpdate'));
  }

  /**
   * Подписка презентера на события модели
   * @param {any} presenter
   */
  subscribePresenter(presenter) {
    this._presenters.push(presenter);
  }
}
