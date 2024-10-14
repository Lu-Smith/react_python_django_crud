import { useState } from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';
import BookForm from './components/BookForm';

const App = ()  => {
  return (
    <div className='App'>
      <h1>Books</h1>
      <BookForm />
      <BooksContainer />
    </div>
  )
}

export default App
