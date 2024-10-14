import React from 'react';
import { useBooks } from './BookContext';

const BooksContainer = () => {
  const { newTitle, setNewTitle, updateTitle, books } = useBooks(); 

  return (
    <div className="booksContainer">
      {books.map((book) => (
        <div key={book.id} className="book">
          <p>Title: {book.title}</p>
          <p>Year: {book.year}</p>
          <input 
            type="text" 
            placeholder="New Title..." 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
          />
          <button onClick={() => updateTitle(book.id, book.year)}>
            Change Title
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksContainer;