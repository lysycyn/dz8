import EventEmitter from './tools/EventsEmitter';
import IndexPresenter from './project/IndexPresenter';
import IndexView from './project/IndexView';
import Model from './mvp/Model';
import './styles/index.css';

export default class App {
  constructor() {
    this._emitter = new EventEmitter();
    this._model = new Model(this._emitter);
    this._view = new IndexView(this._emitter);
    this._presenter = new IndexPresenter(this._emitter, this._view, this._model);
    console.log(this._emitter);
  }
}

// eslint-disable-next-line
const app = new App();
