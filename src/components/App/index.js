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
    ],
    term: '',
    filter: 'all'
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

  search (items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) >= 0
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  onSearchChange = (term) => {
    this.setState({
      term: term
    })
  }

  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {

    const { todoData, term, filter } = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        {
          visibleItems.length > 0 ?
            <TodoList
              todos={visibleItems}
              onDeleted={this.deleteItem}
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
            />
            : 'No results'
        }
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}
