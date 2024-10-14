import React from 'react';
import { useBooks } from './BookContext';

const BooksContainer = () => {
  const { setNewTitle, updateTitle, books, deleteBook } = useBooks(); 

  const handleUpdate = (bookId, year) => {
    updateTitle(bookId, year);
    setNewTitle(""); 
  };

  return (
    <div className="booksContainer">
      {books.map((book) => (
        <div key={book.id} className="book">
          <p>Title: {book.title}</p>
          <p>Year: {book.year}</p>
          <input 
            type="text" 
            placeholder="New Title..." 
            onChange={(e) => setNewTitle(e.target.value)} 
          />
          <button onClick={() => handleUpdate(book.id, book.year)}>
            Change Title
          </button>
          <button onClick={() => deleteBook(book.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksContainer;