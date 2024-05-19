import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => {
        debugger
      })
  }
  componentDidMount(){
    this.fetchAllTodos()
  }
  render() {
    return(
      <div>
        <div id="error">Error: No error here!</div>
        <div id="todos">
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
      </div>
      <form id="toDoForm">
        <input type='text' placeholder='Type Todo: '></input>
        <input type="submit"></input>
        <button>Clear Completed</button>
      </form>
    </div>
    )
  }
}
