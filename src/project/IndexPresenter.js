import Presenter from '../mvp/Presenter';

/**
 * @class IndexPresenter - для теста будет создан только один презентер,
 * который будет отвечать за связь предствления, отвечающего за обрботку нажатися кнопки
 * и модели, содержащей значение инпута. Осуществляется подписка на события клика и обновления модели
 */
export default class IndexPresenter extends Presenter {
  constructor(emitter, view, model) {
    super(emitter, view, model);

    this._emitter.on('viewChangeInput', () => {
      const data = this._view.getInputData();
      this._model.updateData(data);
    });

    this._emitter.on('modelUpdate', () => {
      const data = this._model.getData();
      console.log(data);
      console.log(this._model);
      this._view.render(data);
    });
  }
}
