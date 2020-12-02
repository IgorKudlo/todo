import React, {Component} from 'react'
import './styles.css'

export class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('Hello')}
        >Add Item</button>
      </div>
    )
  }
}
