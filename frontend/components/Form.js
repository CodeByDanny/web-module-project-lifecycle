import React from 'react'

export default class Form extends React.Component {
  render() {
    return(
      <>
      <form id="toDoForm" onSubmit={this.props.onTodoFormSubmit}>
        <input 
          value={this.props.todoNameInput}
          onChange={this.props.onTodoNameInputChange}
          type='text'
          placeholder='Type Todo: '>
        </input>
          <input type="submit">
        </input>
        </form>
        <button 
          onClick={this.props.toggleDisplayCompleted}>
          {this.props.displayCompleted ? 'hide' : 'show'} completed
        </button>  
    </>
    )
  }
}
