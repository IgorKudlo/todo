import React, { Component } from 'react'
import './styles.css'

export class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {

    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name
      return (
        <button type="button"
                className={`btn ${isActive ? 'btn-info' : null}`}
                key={name}
                onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      )
  })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}
