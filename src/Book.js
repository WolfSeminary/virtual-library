import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function MediaCard() {
  const [isFree, setIsFree] = React.useState(true)
  const handleChange = (event) => {
    setIsFree(event.target.checked);
  }
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
        <FormGroup>
          <FormControlLabel control={<Switch checked={isFree}
            onChange={handleChange} />} label={isFree ? "free" : "borrowed"} />
        </FormGroup>
      </CardContent>
    </Card>
  );
}
