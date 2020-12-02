import React, {Component} from 'react'
import {AppHeader} from '../AppHeader'
import {SearchPanel} from '../SearchPanel'
import {TodoList} from '../TodoList'
import {ItemStatusFilter} from '../ItemStatusFilter'
import './styles.css'

export class App extends Component {

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter(item => item.id !== id)

      return {
        todoData: newState
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    )
  }
}
