import React from 'react';
import { useBooks } from './BookContext';

const BookForm = () => {
  const { year, title, setYear, setTitle, setBooks } = useBooks(); 

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
    addBook({ title, year }); 
    setTitle(""); 
    setYear(0);
  };

  return (
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
  );
};

export default BookForm;