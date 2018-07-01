/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';

@inject('TodoStore')
@observer
class TodoPage extends React.Component {
  addTodo = () => {
    const todo = this.refs.todo.value;
    this.props.TodoStore.addTodo(todo);
    this.refs.todo.value = '';
  };

  toggleTodo = index => {
    this.props.TodoStore.toggleTodo(index);
  };

  render() {
    const { TodoStore } = this.props;
    return (
      <div className="home-page">
        {TodoStore.list.map((item, index) => (
          <p
            key={item.id}
            onClick={() => {
              this.toggleTodo(index);
            }}
          >
            {item.title}
            {item.complete ? '√' : '×'}
          </p>
        ))}
        <p className="add-todo">
          <input type="text" ref="todo" />
          <Button
            type="primary"
            icon="download"
            size="large"
            onClick={this.addTodo}
          >
            Add
          </Button>
        </p>
        <Link to="/">back to main page....</Link>
      </div>
    );
  }
}
export default TodoPage;
