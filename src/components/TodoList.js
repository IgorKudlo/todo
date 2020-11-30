import React from 'react'
import {TodoListItem} from './TodoListItem'

export const TodoList = () => (
  <ul>
    <li>
      <TodoListItem label="Drink Coffee" />
    </li>
    <li>
      <TodoListItem
        label="Build React App"
        important
      />
    </li>
  </ul>
)
