import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
  const isLoggedIn = false
  const loginBox = <div>Log in please</div>
  const welcomeBox = <span>Welocme Back</span>

  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))