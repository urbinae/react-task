import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    //this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  componentDidMount(){
    console.log('App - Montado');
    
  };

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  };

   handleRemoveTodo(index){
    if (window.confirm('Estas Seguro?')) {
      this.setState({
      todos: this.state.todos.filter((todo, i) => {
        return i !== index
      })
    })
    }
  };

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className = "col-md-4"  key = {i}>
          <div className = "card mt-4">
            <div className = "card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}</span>
            </div>
            <div className = "card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className = "card-footer">
              <button 
                className="btn btn-danger"
                onClick={this.handleRemoveTodo.bind(this,i)}>Borrar
              </button>
            </div>
          </div>
        </div>
        )
      }
    )

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="">
          Tareas
          <span className="badge badge-pill badge-light ml-2">
          {this.state.todos.length}</span>
          </a>
          <img src={logo} alt="logo" className="App-logo" />
        </nav>

        <div className = "container">
          <div className = "row mt-4">
            <div className = "col-md-4">
              <TodoForm onAddTodo = {this.handleAddTodo}/>
            </div>
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
