import React from 'react';
import { Modal, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SessionExpiredModal = ({ open, onClose, onLoginClick }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius: '0.7em',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="session-expired-modal-title"
            aria-describedby="session-expired-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Session Expired
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your session has expired. Please log in again.
                </Typography>
                <Button sx={{ mt: 2 }} onClick={onLoginClick} variant="contained" color="primary">Login</Button>
            </Box>
        </Modal>
    );
};

export default SessionExpiredModal;
