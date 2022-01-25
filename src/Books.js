import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

//( book) קבלתי קוד שמתבסס על ביצוע של בנות אחרות
//עשיתי כמיטב יכולתי מחכה להמשך הוראות
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  let navigate = useNavigate();
  function onBookClick(id) {
    navigate(`/bookInfo/${id}`);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {books.map(book =>
          <Grid item xs={4}>
            <div onClick={()=>onBookClick(book.id)}>{book}</div>
          </Grid>
        )}
      </Grid>
    </Box>

  );
}
