/**
 * @class Store - хранилище данных. Единственний достоверный источник данных
 * для всего приложения. Происходит привязка редюсеров, отвечающих за изменение стора к определенным экшенам,
 */
export default class Store {
  constructor(defaultStore, reducer, dispatcher, emitter) {
    this._store = defaultStore;
    this._dispatcher = dispatcher;
    this._emitter = emitter;

    this._dispatcher.register((action) => {
      this._store = reducer(this._store, action);
      this._emitter.trigger('storeChanged', { ...this._store, actionType: action.type });
    });
  }
}
