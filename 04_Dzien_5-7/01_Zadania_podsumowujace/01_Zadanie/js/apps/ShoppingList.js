import store from "../redux/store";

import {addProduct, changeOrder} from "../redux/actions";

class ShoppingList {
  constructor(rootElement) {
    this.createUI(rootElement);
    this.collectRefs();
    this.reduxConnect();
    this.applyHandlers();
  }

  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." />
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>

        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
  }

  collectRefs() {
    this.form = this.rootElement.querySelector("form");
    this.shopList = this.rootElement.querySelector("#shop-list");
    this.btnAdd = this.rootElement.querySelector("#shop-add");
  }

  reduxConnect() {
    let i = 0

    const unsubscribe = store.subscribe(() => {
      this.shopList.innerHTML = '';
      store.getState().products.forEach((el) => {
        const li = document.createElement('li');
        li.innerText = el;
        li.index = i++;
        const minBtn = document.createElement('button');
        minBtn.innerText = "-"
        minBtn.classList = "btn btn-success"
        minBtn.id = `min-btn${li.index}`;
        li.appendChild(minBtn);
        const maxBtn = document.createElement('button');
        maxBtn.innerText = "+";
        maxBtn.classList = "btn btn-info";
        maxBtn.id = `max-btn${li.index}`;
        li.appendChild(maxBtn);
        this.shopList.appendChild(li);
      })
      });

    this.dispatch = store.dispatch;
    this.getState = store.getState;
  }

  applyHandlers() {
    this.btnAdd.addEventListener('click', () => {
      this.dispatch(addProduct(this.form.querySelector("input").value))
    })
  }
}

export default ShoppingList;
