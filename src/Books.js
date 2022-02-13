import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BooksStatusModal from "./BooksStatusModal"
import { useNavigate } from 'react-router-dom';
import Book from './Book';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Books() {
  let navigate = useNavigate();
  function onBookClick(id) {
    navigate(`/bookInfo/${id}`);
  }
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40")
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.items.map(book => ({ ...book, status: "free" })))
      })
  }, [])
  const borrowedBooks = books.filter(i => i.status === "borrowed");
  const freeBooks = books.filter(i => i.status === "free");

  const filterBooks = React.useCallback(()=>{
    return books.filter(book=>Object.keys(book).find(key=>book[key].includes(searchTerm)))
  },[searchTerm,books])
 
  const filteredBooks = filterBooks();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {books.map(book =>
          <Grid item xs={4} key={book.id}>
            <div onClick={() => onBookClick(book.id)}><Book book={book} /></div>
            <BooksStatusModal borrowedBooks={borrowedBooks} freeBooks={freeBooks} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
