import View from '../../flux/View';

export default class EventsLog extends View {
  constructor(emitter) {
    super(emitter);
    this._events = undefined;
    emitter.on('storeChanged', (data) => {
      this.updateView({ events: data.events });
    });
  }

  _update(data) {
    this._events = data.events ? data.events : this._events;
  }

  _render() {
    document.querySelector('.js-log').innerHTML = this._events.map(event => `<li>${event}</li>`).join('');
  }
}
