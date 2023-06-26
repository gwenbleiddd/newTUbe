import React from 'react'
import {ImSearch} from 'react-icons/im'

const Search = () => {
  return (
    <div>
      <h1>Search section</h1>
      <form onsubmit="return false"> 
        <input type='text' placeholder='Search...'></input>
        <button type='submit'><ImSearch size={15}/></button>
      </form>
    </div>
  )
}

export default Search
