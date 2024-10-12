import { useState } from 'react'

const App = ()  => {
  return (
    <>
      <h1>Books</h1>
      <form>
        <input type="text" placeholder='Book title...' />
        <input type="number" placeholder='Year...' />
        <button>Add book</button>
      </form>
    </>
  )
}

export default App
