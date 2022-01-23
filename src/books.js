import React, { useState, useEffect } from "react"
import NoBooks from './NoBooks'

export function Books() {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40`).then(response => response.json()).then(
      data => {
        setBooks(data)
      }
    )
  }, [])
  const ifNoBooks = () => {
    if (books != [])
      return <NoBooks />
  }
  const onSearch = (valueOfSearch) => {
    setSearchTerm(valueOfSearch);
  }
  return (
    <>
      {ifNoBooks()}
    </>
  )
}
