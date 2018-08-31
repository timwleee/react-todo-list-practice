import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  
  state = {
    todos: [],
    currentTodo: ""
  }

  onInputChange = e => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  addTodo = e => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({
      todos: todosCopy,
      currentTodo: ""
    })
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({
      todos: todosCopy
    })
  }

  render() {

    let list = this.state.todos.map((item, i) => {
      return (
        <Todo todo={item} delete={() => this.deleteTodo(i)}/>
      ) 
    });

    return (
      <div className="App">

      <input placeholder="Add To-Do" value={this.state.currentTodo}
        onChange={this.onInputChange}/>
      <button onClick={this.addTodo}>Add</button>
      <br />  
      { this.state.todos.length === 0 ? 'No todos yet' : <ul><li>{list}</li></ul>}
      <br />
      </div>
    );
  }
}

export default App;
