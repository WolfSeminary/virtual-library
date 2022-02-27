import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import SearchBooks from "./SearchBook";
export default function LibraryAppBar({onChange}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <p>Library</p>
                    </Typography>
                    <SearchBooks onChange={onChange} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

