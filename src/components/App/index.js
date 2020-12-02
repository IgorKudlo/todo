import React, {Component} from 'react'
import {AppHeader} from '../AppHeader'
import {SearchPanel} from '../SearchPanel'
import {TodoList} from '../TodoList'
import {ItemStatusFilter} from '../ItemStatusFilter'
import {ItemAddForm} from '../ItemAddForm'
import './styles.css'

export class App extends Component {

  maxId = 100

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, done: false, id: 1 },
      { label: 'Make Awesome App', important: true, done: false, id: 2 },
      { label: 'Have a lunch', important: false, done: false, id: 3 },
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

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData}) => {
      const newState = [...todoData, newItem]

      return {
        todoData: newState
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const elementsIndex = arr.findIndex(element => element.id === id)
    const newState = [...arr]
    newState[elementsIndex] = {...newState[elementsIndex], [propName]: !newState[elementsIndex][propName]}

    return newState
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render() {

    const { todoData } = this.state

    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}
