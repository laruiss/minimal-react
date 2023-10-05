import { useEffect, useState } from 'react'
import {
  Link,
} from "react-router-dom"

import { getBooks, removeBook } from '../api/api-client'

function App() {
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // fetch('https://sieli-books.stormier.ninja/api/books')
    getBooks()
      .then((data) => {
        setBooks(data.books)
      }).catch(error => {
        setError(error.message)
      })
  }, [])

  const deleteBook = async (id) => {
    try {
      await removeBook(id)
      await getBooks().then((data) => { setBooks(data.books) })
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Liste de livres</h1>

      {
        error && <div className='error'></div>
      }

      <ul>
        {
          books.map(book => {
            return (
              <li key={book._id}>
                <Link to={`/books/${book._id}`}>
                  {book.title} <em className='opacity-70'>by {book.author}</em> ({book.year})
                </Link>
                <button onClick={() => deleteBook(book._id)}>-</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
