import { useEffect, useState } from 'react';
import './App.css';

const App = ()  => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <h1>Books</h1>
      <form>
        <input type="text" placeholder='Book title...' />
        <input type="number" placeholder='Year...' />
        <button>Add book</button>
      </form>
      <div className='booksContainer'>
        {books.map((book) => (
          <div key={book.id} className='book'>
            <p>Title: {book.title}</p>
            <p>Year: {book.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
