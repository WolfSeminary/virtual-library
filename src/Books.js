import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BooksStatusModal from "./BooksStatusModal"
import { useNavigate } from 'react-router-dom';
import Book from './Book';
import LibraryAppBar from './LibraryAppBar';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Books() {
  let navigate = useNavigate();
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [differentTopic, setDifferentTopic] = useState();
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.items.map(book => ({ ...book, status: "free" })))
      })
  }, [])
  function onBookClick(book) {
    navigate(`/bookInfo/${book.id}`, { state: book });
  }
  function onTopicChange(value) {
    setDifferentTopic(value);
  }
  function bookStatusChange(id) {
    setBooks(books.map(book => (book.id == id ? { ...book, status: "borrowed" } : { ...book, status: "free" })))

  }
  let searchTerm="";
  const filterBooks = useCallback(() => {
    return books.filter(book => Object.keys(book).find(key =>!key|| book[key].includes(searchTerm)))
  }, [searchTerm,books])

  const filteredBooks = filterBooks();
  const borrowedBooks = books.filter(i => i.status === "borrowed");
  const freeBooks = books.filter(i => i.status === "free");

  return (
    <>
      <LibraryAppBar onChange={(e) => onTopicChange(e.target.value)}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          {filterBooks.length ?
            filterBooks.map(book =>
              <Grid item xs={4} key={book.id}>
                <div onClick={() => onBookClick(book)}><Book book={book} onChange={()=>{bookStatusChange(book.id)}} /></div>

              </Grid>
            ) : books.map(book =>
              <Grid item xs={4} key={book.id}>
                <div onClick={() => onBookClick(book)}><Book book={book} onChange={()=>{bookStatusChange(book.id)}} /></div>

              </Grid>
            )}
        </Grid>
 
        <BooksStatusModal shouldModalOpen={shouldModalOpen} setShouldModalOpen={setShouldModalOpen} borrowedBooks={borrowedBooks} freeBooks={freeBooks} />
      </Box></>
  );
}
