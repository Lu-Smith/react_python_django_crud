import { useEffect, useState } from 'react';
import './App.css';

const App = ()  => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(1950);

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
  };

  const addBook = async () => {
    const bookData = {
      title,
      year
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks(prev => [...prev, data]);
    } catch(error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addBook(); 
  };

  return (
    <div className='App'>
      <h1>Books</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Book title...' 
        onChange={(e) => setTitle(e.target.value)} />
        <input 
        type="number" 
        placeholder='Year...' 
        onChange={(e) => setYear(Number(e.target.value))} />
        <button type="submit">Add book</button>
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
