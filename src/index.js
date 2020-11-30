import React from 'react'
import ReactDOM from 'react-dom'
import {AppHeader} from './components/AppHeader'
import {SearchPanel} from './components/SearchPanel'
import {TodoList} from './components/TodoList'

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
)

ReactDOM.render(<App />,
  document.getElementById('root'))
