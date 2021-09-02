import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
  const items = ['Drink Coffee', 'Build Awesome App']

  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  )
}

const AppHeader = () => {
  return <h1>My Todo List</h1>
}

const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '20px'
  }
  
  return <input 
    style = { searchStyle }
    placeholder = { searchText } 
    className = 'foo' />
}

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