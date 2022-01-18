import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Book() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={''}
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
    </Card>
  );
}
