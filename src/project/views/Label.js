import View from '../../flux/View';

export default class Label extends View {
  constructor(emitter, dispatcher) {
    super(emitter, dispatcher);
    this._label = null;

    this._emitter.on('storeChanged', (data) => {
      if (data.actionType === 'serverSent') {
        const { serverName } = data;
        this.updateView({ label: serverName });
        this._dispatcher.dispatch({
          type: 'newEvent',
          event: `Установка лейбла, имя ${serverName}`,
        });
      }
    });
  }

  _update(data) {
    this._label = data.label ? data.label : this._label;
  }

  _render() {
    document.querySelector('.js-label').innerHTML = `Введедно значение: ${this._label}`;
  }
}
