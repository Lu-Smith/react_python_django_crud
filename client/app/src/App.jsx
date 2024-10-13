import { useEffect, useState } from 'react';

const App = ()  => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json()
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
  }

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
