import { Button, TextField } from '@mui/material'
import React from 'react'
function fetchDifferentBooks() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40").then(res => {
        res.json()
        console.log(res)
    }).catch(err=>console.log(err))
}

function FetchBooks() {
    return (
        <div style={{ display: "flex", direction: "rtl" }}>
            <TextField id="outlined-basic" label="Fetch Books" variant="outlined" />
            <br></br>
            <Button onClick={fetchDifferentBooks} variant="outlined">Fetch Books</Button>
        </div>
    )
}

export default FetchBooks