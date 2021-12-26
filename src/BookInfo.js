import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

export default function BookInfo({ book = {} }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            { <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            /> }
            {/* is the book has a img? */}

            <CardHeader disableTypography title={<Typography gutterBottom variant="h5">
                {book.title}
            </Typography>} />

            <CardContent>

                <Typography variant="body2" color="text.secondary">
                    Author:{book.authors?.map(author => <Typography component="span">{author}</Typography>)}
                    {/*whats the type of authors? Array or string*/}
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    );
}
