import View from '../../flux/View';
import Logger from '../../tools/Logger';

export default class Button extends View {
  constructor(emitter, dispatcher) {
    super(emitter, dispatcher);

    this._button = document.querySelector('.js-button');
    this._input = document.querySelector('.js-input');

    this._button.addEventListener('click', () => {
      const { value } = this._input;
      this._dispatcher.dispatch({
        type: 'setName',
        name: value,
      });
      this._dispatcher.dispatch({
        type: 'newEvent',
        event: `Клик по кнопке, введеное значение: ${value}`,
      });
      Logger.console(`Клик по кнопке, введеное значение: ${value}`);
    });
  }
}
