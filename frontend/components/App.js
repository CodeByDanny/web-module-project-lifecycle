import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      error: '',
      todoNameInput: '',
    }
  }

  setAxiosResponseError = err => {
    this.setState({...this.state, error: err.response.data.message})
  }

  resetForm = () => {
    this.setState({...this.state, todoNameInput: ''})
  }

  onTodoFormSubmit = evt => {
    evt.preventDefault();
    this.postNewTodo()
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput })
      .then(res => {
        this.fetchAllTodos()
        this.resetForm()
      })
      .catch(this.setAxiosResponseError)
  }

  onTodoNameInputChange = evt => {
    const { value } = evt.target
    this.setState({...this.state, todoNameInput: value})
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(this.setAxiosResponseError)
  }
  componentDidMount(){
    this.fetchAllTodos()
  }
  render() {
    return(
      <div>
        <div id="error">
          Error: {this.state.error}
        </div>
        <div id="todos">
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
      </div>
      <form id="toDoForm" onSubmit={this.onTodoFormSubmit}>
        <input value={this.state.todoNameInput} onChange={this.onTodoNameInputChange} type='text' placeholder='Type Todo: '></input>
        <input type="submit"></input>
        <button>Clear Completed</button>
      </form>
    </div>
    )
  }
}
