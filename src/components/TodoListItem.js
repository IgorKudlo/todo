import React from 'react'

export const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'tomato' : null
  }

  return <span style={style}>{label}</span>
}
