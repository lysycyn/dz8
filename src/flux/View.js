/**
 *
 */
export default class View {
  constructor(emitter, dispatcher) {
    this._emitter = emitter;
    this._dispatcher = dispatcher;
  }

  updateView(data) {
    this._update(data);
    this._render();
  }
}
