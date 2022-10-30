import store from '../redux/store'
import { increment, decrement } from '../redux/actions';

class Counter {
  constructor(rootElement) {
    this.createUI(rootElement);
    this.collectRefs();
    this.reduxConnect();
    this.applyHandlers();
  }

  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div class="card-header">Licznik</div>
      <div class="card-body">
        <h4 class="card-text">Wartość licznika: <span class="badge badge-primary" id="counter-value">0</span></h4>

        <button type="button" class="btn btn-success" id="counter-decrement">-</button>
        <button type="button" class="btn btn-info" id="counter-increment">+</button>
      </div>
    `;
  }

  collectRefs() {
    this.counterValue = this.rootElement.querySelector("#counter-value");
    this.counterDecrement = this.rootElement.querySelector("#counter-decrement");
    this.counterIncrement = this.rootElement.querySelector("#counter-increment");
  }

  reduxConnect() {
    const unsubscribe = store.subscribe(() => {
      this.counterValue.innerText = store.getState().counter
    });

    this.dispatch = store.dispatch;
    this.getState = store.getState();
  }

  applyHandlers() {
    this.counterDecrement.addEventListener('click', () => {
      this.dispatch(decrement())
    })

    this.counterIncrement.addEventListener('click', () => {
      this.dispatch(increment())
    })
  }
}

export default Counter;
