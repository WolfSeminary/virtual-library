import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FormControlLabel, Switch } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Book({ onChange, book }) {
  console.log(book)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={book.volumeInfo.imageLinks.thumbnail}
        alt="BookImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {''}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {''}
        </Typography>
      </CardContent>
      <CardActions>

        <FormControlLabel control={<Switch checked={book.status == "free"}
          onChange={onChange} />} label={book.status == "free" ? "free" : "borrowed"} />

      </CardActions>
    </Card>
  );
}
