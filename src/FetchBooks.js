import { Button, TextField } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'


function FetchBooks() {
    return (
        <div style={{ display: "flex", direction: "rtl" }}>
            <TextField id="outlined-basic" label="Fetch Books" variant="outlined" />
            <br></br>
            <Button variant="outlined">Fetch Books</Button>
        </div>
    )
}

export default FetchBooks

