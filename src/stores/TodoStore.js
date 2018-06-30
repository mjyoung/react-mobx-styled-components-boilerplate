import { observable, action, computed } from 'mobx';

class Todo {
  @observable
  items = [
    {
      id: 0,
      title: 'aaaaaaa',
      complete: false,
    },
  ];

  @computed
  get list() {
    return this.items;
  }

  @action
  addTodo(title) {
    const todo = {
      id: this.items.length + 1,
      title,
      complete: false,
    };
    this.items.push(todo);
  }

  @action
  toggleTodo(index) {
    this.items[index].complete = !this.items[index].complete;
  }
}
export default Todo;
