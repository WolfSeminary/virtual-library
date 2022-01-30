import { Button, TextField } from '@mui/material'
import React from 'react'

function FetchBooks() {
    return (
        <div style={{ display: "flex", direction: "rtl" }}>
            <TextField id="outlined-basic" label="Fetch Books" variant="outlined" style={{color:'red'}}/>
            <br></br>
            <Button variant="outlined" style={{color:'red'}}>Fetch Books</Button>
        </div>
    )
}

export default FetchBooks