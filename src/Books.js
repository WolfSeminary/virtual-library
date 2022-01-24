import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//( book) קבלתי קוד שמתבסס על ביצוע של בנות אחרות
//עשיתי כמיטב יכולתי מחכה להמשך הוראות
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const getBooksStatus = () => {
  setShouldModalOpen(true);
}

export default function NestedGrid() {
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {books.map(book =>
          <Grid item xs={4}>
            <Item>Item</Item>
            {shouldModalOpen && <BooksStatusModal />}
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
