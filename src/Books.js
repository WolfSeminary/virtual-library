import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BooksStatusModal from './BooksStatusModal';
//( book) קבלתי קוד שמתבסס על ביצוע של בנות אחרות
//עשיתי כמיטב יכולתי מחכה להמשך הוראות
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  const borrowedBooks = books.filter(i => i.status = "borrowed");
  const freeBooks = books.filter(i => i.status = "free");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {books.map(book =>
          <Grid item xs={4}>
            <Item>Item</Item>
          </Grid>
        )}
        <BooksStatusModal borrowedBooks={borrowedBooks} freeBooks={freeBooks} />
      </Grid>
    </Box>
  );
}
