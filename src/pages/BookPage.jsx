import { useEffect, useState } from "react"
import {useParams} from "react-router-dom";

import { getBook } from '../api/api-client'

const BookPage = () => {
  
  const [book, setBook] = useState()
  const {id} = useParams();

  useEffect(() => {
    getBook(id)
      .then(setBook)
  }, [])

  return (
    <>
      <header>
        <h1>
          { book?.title }
        </h1>
        <p>
          by {book?.author}
        </p>
      </header>
      <article>
        {book?.desc}
      </article>
    </>
  )
}

export default BookPage