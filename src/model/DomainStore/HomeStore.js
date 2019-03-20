import { observable, action, toJS, computed } from "mobx";
import { HomeService } from "NetworkLayer";
import _ from "lodash";

class HomeStore {
  @observable state = "pending"; // "pending" / "done" / "error"
  @observable items = [];

  @computed
  get count() {
    return this.items.length;
  }

  @action
  fetchItems() {
    this.items = [];
    this.state = "pending";
    HomeService.fetchFacts().then(
      res => {
        this.updateItems(res.data);
        this.state = "done";
      },
      error => {
        this.state = "error";
      }
    );
  }

  @action
  updateItems(data) {
    this.items = data;
  }

  @action
  deleteItem(item) {
    let _items = [];
    _items = _.reject(toJS(this.items), { _id: item._id });
    this.updateItems(_items);
  }
}

export default HomeStore;
