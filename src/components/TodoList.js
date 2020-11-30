import React from 'react'
import {TodoListItem} from './TodoListItem'
import './TodoList.css'

export const TodoList = ({ todos }) => {

  const elements = todos.map(item => (
    <li
      key={item.id}
      className="list-group-item"
    >
      <TodoListItem
        label={item.label}
        important={item.important}
      />
    </li>
  ))

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}
