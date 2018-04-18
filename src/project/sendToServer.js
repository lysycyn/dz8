import Logger from '../tools/Logger';

export default class ServerApi {
  constructor(emitter, dispatcher) {
    this._dispatcher = dispatcher;
    this._emitter = emitter;

    this._emitter.on('storeChanged', (data) => {
      if (data.actionType === 'setName') {
        const { name } = data;
        this.sendToServer(name);
        this._dispatcher.dispatch({
          type: 'newEvent',
          event: `Отправка на сервер, имя ${name}`,
        });
      }
    });
  }

  sendToServer(data) {
    Logger.console(`Отправляем на сервер имя ${data}`);

    this._dispatcher.dispatch({
      type: 'serverSent',
      name: data,
    });
    this._dispatcher.dispatch({
      type: 'newEvent',
      event: `Данные пришли с сервера, имя ${data}`,
    });
  }
}
