import View from '../mvp/View';

export default class IndexView extends View {
  constructor(emitter) {
    super(emitter);

    this._input = document.querySelector('.js-input');
    this._button = document.querySelector('.js-button');
    this._label = document.querySelector('.js-label');

    this._button.addEventListener('click', this._onChangedInput.bind(this));
  }

  _onChangedInput() {
    if (this._presenter) {
      this._emitter.trigger('viewChangeInput');
    }
  }

  getInputData() {
    return this._input.value;
  }

  render(data) {
    this._label.innerHTML = data || '';
  }
}
