import EventEmitter from './tools/EventsEmitter';
import Dispatcher from './flux/Dispatcher';
import Store from './flux/Store';
import ServerApi from './project/sendToServer';
import './styles/index.css';

import reduce from './project/reducer';
import Button from './project/views/Button';
import Label from './project/views/Label';
import EventsLog from './project/views/EventsLog';

export default class App {
  constructor() {
    this._emitter = new EventEmitter();
    this._dispatcher = new Dispatcher();
    this._api = new ServerApi(this._emitter, this._dispatcher);
    this._views = [];

    this._initViews();
    this._initStore();
  }

  _initViews() {
    this._views.push(new Button(this._emitter, this._dispatcher));
    this._views.push(new Label(this._emitter, this._dispatcher));
    this._views.push(new EventsLog(this._emitter, this._dispatcher));
  }

  _initStore() {
    const defaultStore = {
      name: '',
      serverName: '',
      events: [],
    };
    this._store = new Store(defaultStore, reduce, this._dispatcher, this._emitter);
  }
}

// eslint-disable-next-line
const app = new App();
