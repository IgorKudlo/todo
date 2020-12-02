import React from 'react'
import {TodoListItem} from '../TodoListItem'
import './styles.css'

export const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map(item => (
    <li
      key={item.id}
      className="list-group-item"
    >
      <TodoListItem
        label={item.label}
        important={item.important}
        done={item.done}
        onDeleted={() => onDeleted(item.id)}
        onToggleImportant={() => onToggleImportant(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
      />
    </li>
  ))

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}
