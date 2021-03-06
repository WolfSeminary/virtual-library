import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router';


export default function BookInfo() {
    let book = useLocation().state;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={book.url}
                alt="green iguana"
            />
            <CardHeader disableTypography title={<Typography gutterBottom variant="h5">{book.title}</Typography>} />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Author:{book.authors ? book.authors.map(author => <Typography component="span">{author}</Typography>) : null}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Publisher:{book.publisher}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Published Date:{book.publishedDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description:{book.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Num of Pages :{book.pageCount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Language  :{book.language}
                </Typography>
            </CardContent>
            <CardActions>

              
                <Button variant="outlined">  <ArrowBackIcon></ArrowBackIcon>Back to Books</Button>

            </CardActions>
        </Card>
    );
}
