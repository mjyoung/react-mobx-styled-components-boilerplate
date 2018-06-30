import TodoStore from './TodoStore';

class RootStore {
  constructor() {
    this.TodoStore = new TodoStore(this);
  }
}

export default new RootStore();
