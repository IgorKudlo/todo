import React from 'react'
import {TodoListItem} from './TodoListItem'

export const TodoList = ({ todos }) => {

  const elements = todos.map(item => (
    <li key={item.id}>
      <TodoListItem
        label={item.label}
        important={item.important}
      />
    </li>
  ))

  return (
    <ul>
      { elements }
    </ul>
  )
}
