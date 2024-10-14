import { createContext, useContext, useEffect, useState } from 'react';

const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]); 
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(1950);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTitle = async (pk, year) => {
    const bookData = { title: newTitle, year };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => (book.id === pk ? data : book))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "DELETE"
      });
      
      setBooks(prev => prev.filter((book) => book.id !== pk));
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <BookContext.Provider
      value={{
        newTitle,
        setNewTitle,
        updateTitle,
        books,       
        setBooks,
        title, 
        setTitle,
        year, 
        setYear,
        deleteBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
};