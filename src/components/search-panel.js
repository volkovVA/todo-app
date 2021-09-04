import React from 'react'

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

export default SearchPanel