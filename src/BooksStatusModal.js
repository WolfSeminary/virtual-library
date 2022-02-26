import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BooksStatusModal({ freeBooks, borrowedBooks, shouldModalOpen, setShouldModalOpen }) {



    return (
        <div>

            <Modal
                open={shouldModalOpen}
                onClose={() => { setShouldModalOpen(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Library - Books Status
                    </Typography>
                    <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
                        Free Books:{freeBooks.length}
                    </Typography>
                    <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                        Borrowed Books:{borrowedBooks.length}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
