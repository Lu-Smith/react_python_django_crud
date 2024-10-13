
const BooksContainer = ({books}) => {

  return (
    <div className='booksContainer'>
      {books.map((book) => (
        <div key={book.id} className='book'>
          <p>Title: {book.title}</p>
          <p>Year: {book.year}</p>
          <input type="text" placeholder="New Title..." />
          <button>Change Title </button>
        </div>
      ))}
    </div>
  )
}

export default BooksContainer