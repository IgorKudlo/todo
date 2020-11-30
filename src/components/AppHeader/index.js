import React from 'react'
import './styles.css'

export const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{todo} more to do, {done} done</h2>
    </div>
  )
}